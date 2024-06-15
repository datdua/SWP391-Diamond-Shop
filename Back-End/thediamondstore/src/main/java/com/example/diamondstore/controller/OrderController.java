package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Order;
import com.example.diamondstore.request.putRequest.OrderPutRequest;
import com.example.diamondstore.service.OrderService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    // public ResponseEntity<Map<String, String>> createOrder(
    //         @RequestParam Integer accountID,
    //         @RequestParam String deliveryAddress,
    //         @RequestParam(required = false) String promotionCode,
    //         @RequestParam(required = false) Integer pointsToRedeem,
    //         @RequestParam String phoneNumber) {

    //     Order order = orderService.createOrder(accountID, deliveryAddress, promotionCode, pointsToRedeem, phoneNumber);
    //     int orderID = order.getOrderID();
    //     OrderHistory orderHistory = OrderHistoryService.createOrderHistoryByOrder(orderID, accountID);
    //     return ResponseEntity.ok(Collections.singletonMap("message", "Tạo đơn hàng thành công"));
    // }

    @GetMapping(value = "/get/{orderID}")
    public ResponseEntity<Order> getOrder(@PathVariable int orderID) {
        Order order = orderService.getOrder(orderID);

        if (order == null) {
            return ResponseEntity.status(404).body(null);
        }

        return ResponseEntity.ok(order);
    }

    @GetMapping(value = "/account/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByAccount(@PathVariable int accountID) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByAccountId(accountID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @GetMapping(value = "/getAll", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    //api lấy totalOrder của order
    @GetMapping(value = "/totalOrder/{orderID}")
    public ResponseEntity<?> getTotalOrder(@PathVariable Integer orderID) {
        try {
            return ResponseEntity.ok(orderService.getTotalOrder(orderID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createOrder(
            @RequestParam Integer accountID,
            @RequestParam String deliveryAddress,
            @RequestParam(required = false) String promotionCode,
            @RequestParam(required = false) Integer pointsToRedeem,
            @RequestParam String phoneNumber) {

        Order order = orderService.createOrder(accountID, deliveryAddress, promotionCode, pointsToRedeem, phoneNumber);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo đơn hàng thành công"));
    }

    @DeleteMapping("/{orderID}")
    public ResponseEntity<Void> cancelOrder(@PathVariable int orderID) {
        orderService.cancelOrder(orderID);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/delete/{orderID}")
    public ResponseEntity<?> deleteOrder(@PathVariable int orderID) {
        return ResponseEntity.ok(orderService.deleteOrder(orderID));
    }

    @PutMapping(value = "/update/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateDiamond(@PathVariable Integer orderID, @RequestBody OrderPutRequest orderPutRequest) {
        Map<String, String> response = orderService.updateOrder(orderID, orderPutRequest);
        if (response.containsKey("message") && response.get("message").equals("Không tìm thấy kim cương")) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }
}

