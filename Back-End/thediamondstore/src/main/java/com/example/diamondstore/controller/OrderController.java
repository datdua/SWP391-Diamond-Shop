package com.example.diamondstore.controller;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.diamondstore.DTO.OrderSummaryDTO;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.request.putRequest.OrderPutRequest;
import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

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

    @GetMapping(value = "/getOrderHaveTransactionNo", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersHaveTransactionNo() {
        return ResponseEntity.ok(orderService.getOrdersHaveTransactionNo());
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

    @DeleteMapping(value = "/cancel/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> cancelOrder(@PathVariable int orderID) {
        try {
            orderService.cancelOrder(orderID);
            return ResponseEntity.ok(Collections.singletonMap("message", "Hủy đơn hàng thành công"));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/update/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateOrder(@PathVariable Integer orderID, @RequestBody OrderPutRequest orderPutRequest) {
        Map<String, String> response = orderService.updateOrder(orderID, orderPutRequest);
        if (response.get("message").equals("Cập nhật thất bại")) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/getByStatus/{orderStatus}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByStatus(@PathVariable String orderStatus) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(orderStatus));
    }

    @GetMapping(value = "/getOrder/paged", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }

    @GetMapping("/totalRevenue")
    public ResponseEntity<BigDecimal> getTotalOrderPaid() {
        BigDecimal totalOrderPaid = orderService.getTotalOrderByOrderStatusPaid();
        return ResponseEntity.ok(totalOrderPaid);
    }

    @GetMapping("/totalOrder")
    public ResponseEntity<Long> getTotalOrder() {
        long totalOrder = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrder, HttpStatus.OK);
    }

    @GetMapping("/totalTransaction")
    public ResponseEntity<Long> getTotalOrderStatusPaid() {
        long totalOrderStatusPaid = orderService.getTotalOrdersByOrderStatus("Đã thanh toán");
        return new ResponseEntity<>(totalOrderStatusPaid, HttpStatus.OK);
    }

    // API to get total number of orders in a day
    @GetMapping("/totalOrdersInDay")
    public ResponseEntity<Integer> getTotalOrdersInDay() {
        int totalOrders = orderService.getTotalOrdersInDay();
        return new ResponseEntity<>(totalOrders, HttpStatus.OK);
    }

    // API to get total order value in a day
    @GetMapping("/totalRevenueValueInToday")
    public ResponseEntity<?> getRevenueValueInToday() {
        OrderSummaryDTO orderSummary = orderService.getRevenueValueInToday();
        return new ResponseEntity<>(orderSummary, HttpStatus.OK);
    }

    // API to get total order value in a month
    @GetMapping("/totalRevenueDayInMonth")
    public ResponseEntity<?> getRevenueDayInMonth() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonth();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // API to get total order value in month xx of year yyyyy
    @GetMapping("/totalRevenueDayInMonthInYear")
    public ResponseEntity<?> getRevenueDayInMonthInYear(@RequestParam int month, @RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonthInYear(month, year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // API to get total order value in a year
    @GetMapping("/totalRevenueMonthInYear")
    public ResponseEntity<?> getRevenueMonthInYear() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // API to get total order value in year yyyy
    @GetMapping("/totalRevenueMonthInAYear")
    public ResponseEntity<?> getRevenueMonthInAYear(@RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear(year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }
}


