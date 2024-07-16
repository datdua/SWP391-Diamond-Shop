package com.example.diamondstore.controller.Order;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Order;
import com.example.diamondstore.request.putRequest.OrderPutRequest;
import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/orders/customer")
public class OrderControllerCustomer {
    
    private final OrderService orderService;

    public OrderControllerCustomer(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping(value = "/get/{orderID}")
    public ResponseEntity<Order> getOrder_Customer(@PathVariable int orderID) {
        Order order = orderService.getOrder(orderID);

        if (order == null) {
            return ResponseEntity.status(404).body(null);
        }

        return ResponseEntity.ok(order);
    }

    @GetMapping(value = "/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByAccount_Customer(@PathVariable int accountID) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByAccountId(accountID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createOrder_Customer(
            @RequestParam Integer accountID,
            @RequestParam String deliveryAddress,
            @RequestParam(required = false) String promotionCode,
            @RequestParam(required = false) Integer pointsToRedeem,
            @RequestParam String phoneNumber) {

        Order order = orderService.createOrder(accountID, deliveryAddress, promotionCode, pointsToRedeem, phoneNumber);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo đơn hàng thành công"));
    }

    @DeleteMapping(value = "/cancel/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> cancelOrder_Customer(@PathVariable int orderID) {
        try {
            orderService.cancelOrder(orderID);
            return ResponseEntity.ok(Collections.singletonMap("message", "Hủy đơn hàng thành công"));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/update/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateOrder_Customer(@PathVariable Integer orderID, @RequestBody OrderPutRequest orderPutRequest) {
        Map<String, String> response = orderService.updateOrder(orderID, orderPutRequest);
        if (response.get("message").equals("Cập nhật thất bại")) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/getOrder/get-paging", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged_Customer(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }

    @GetMapping(value = "/getByStatus/{orderStatus}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByStatus_Customer(@PathVariable String orderStatus) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(orderStatus));
    }
}
