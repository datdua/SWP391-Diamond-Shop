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

    // customer
    @GetMapping(value = "/customer/get/{orderID}")
    public ResponseEntity<Order> getOrder_Customer(@PathVariable int orderID) {
        Order order = orderService.getOrder(orderID);

        if (order == null) {
            return ResponseEntity.status(404).body(null);
        }

        return ResponseEntity.ok(order);
    }

    // admin
    @GetMapping(value = "/account/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByAccount_Admin(@PathVariable int accountID) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByAccountId(accountID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // customer
    @GetMapping(value = "/customer/account/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByAccount_Customer(@PathVariable int accountID) {
        try {
            return ResponseEntity.ok(orderService.getOrdersByAccountId(accountID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // admin
    @GetMapping(value = "/admin/getAll", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // admin
    //api lấy totalOrder của order
    @GetMapping(value = "/admin/totalOrder/{orderID}")
    public ResponseEntity<?> getTotalOrder_Admin(@PathVariable Integer orderID) {
        try {
            return ResponseEntity.ok(orderService.getTotalOrder(orderID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // customer
    @GetMapping(value = "/customer/totalOrder/{orderID}")
    public ResponseEntity<?> getTotalOrder_Customer(@PathVariable Integer orderID) {
        try {
            return ResponseEntity.ok(orderService.getTotalOrder(orderID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // admin
    @GetMapping(value = "/admin/getOrderHaveTransactionNo", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersHaveTransactionNo() {
        return ResponseEntity.ok(orderService.getOrdersHaveTransactionNo());
    }

    // customer
    @PostMapping(value = "/customer/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createOrder_Customer(
            @RequestParam Integer accountID,
            @RequestParam String deliveryAddress,
            @RequestParam(required = false) String promotionCode,
            @RequestParam(required = false) Integer pointsToRedeem,
            @RequestParam String phoneNumber) {

        Order order = orderService.createOrder(accountID, deliveryAddress, promotionCode, pointsToRedeem, phoneNumber);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo đơn hàng thành công"));
    }

    // customer
    @DeleteMapping(value = "/customer/cancel/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> cancelOrder_Customer(@PathVariable int orderID) {
        try {
            orderService.cancelOrder(orderID);
            return ResponseEntity.ok(Collections.singletonMap("message", "Hủy đơn hàng thành công"));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // customer
    @PutMapping(value = "/customer/update/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateOrder_Customer(@PathVariable Integer orderID, @RequestBody OrderPutRequest orderPutRequest) {
        Map<String, String> response = orderService.updateOrder(orderID, orderPutRequest);
        if (response.get("message").equals("Cập nhật thất bại")) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
        return ResponseEntity.ok(response);
    }

    // admin
    @GetMapping(value = "/admin/getByStatus/{orderStatus}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByStatus_Admin(@PathVariable String orderStatus) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(orderStatus));
    }

    // customer
    @GetMapping(value = "/customer/getByStatus/{orderStatus}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByStatus_Customer(@PathVariable String orderStatus) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(orderStatus));
    }

    // admin
    @GetMapping(value = "/admin/getOrder/paged", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }

    // customer
    @GetMapping(value = "/customer/getOrder/paged", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged_Customer(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }

    // admin
    @GetMapping("/admin/totalRevenue")
    public ResponseEntity<BigDecimal> getTotalOrderPaid() {
        BigDecimal totalOrderPaid = orderService.getTotalOrderByOrderStatusPaid();
        return ResponseEntity.ok(totalOrderPaid);
    }

    //admin
    @GetMapping("/admin/totalOrder")
    public ResponseEntity<Long> getTotalOrder_Admin() {
        long totalOrder = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrder, HttpStatus.OK);
    }

    // customer
    @GetMapping("/customer/totalOrder")
    public ResponseEntity<Long> getTotalOrder_Customer() {
        long totalOrder = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrder, HttpStatus.OK);
    }

    // admin
    @GetMapping("/admin/totalTransaction")
    public ResponseEntity<Long> getTotalOrderStatusPaid_Admin() {
        long totalOrderStatusPaid = orderService.getTotalOrdersByOrderStatus("Đã thanh toán");
        return new ResponseEntity<>(totalOrderStatusPaid, HttpStatus.OK);
    }

    // admin
    // API to get total number of orders in a day
    @GetMapping("/admin/totalOrdersInDay")
    public ResponseEntity<Integer> getTotalOrdersInDay_Admin() {
        int totalOrders = orderService.getTotalOrdersInDay();
        return new ResponseEntity<>(totalOrders, HttpStatus.OK);
    }

    // admin
    // API to get total order value in a day
    @GetMapping("/admin/totalRevenueValueInToday")
    public ResponseEntity<?> getRevenueValueInToday_Admin() {
        OrderSummaryDTO orderSummary = orderService.getRevenueValueInToday();
        return new ResponseEntity<>(orderSummary, HttpStatus.OK);
    }

    // admin
    // API to get total order value in a month
    @GetMapping("/totalRevenueDayInMonth")
    public ResponseEntity<?> getRevenueDayInMonth_Admin() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonth();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // admin
    // API to get total order value in month xx of year yyyyy
    @GetMapping("/admin/totalRevenueDayInMonthInYear")
    public ResponseEntity<?> getRevenueDayInMonthInYear_Admin(@RequestParam int month, @RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonthInYear(month, year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // admin
    // API to get total order value in a year
    @GetMapping("/admin/totalRevenueMonthInYear")
    public ResponseEntity<?> getRevenueMonthInYear_Admin() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // admin
    // API to get total order value in year yyyy
    @GetMapping("/admin/totalRevenueMonthInAYear")
    public ResponseEntity<?> getRevenueMonthInAYear_Admin(@RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear(year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }
}


