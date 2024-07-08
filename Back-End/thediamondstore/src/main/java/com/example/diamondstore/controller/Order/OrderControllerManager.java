package com.example.diamondstore.controller.Order;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.DTO.OrderSummaryDTO;
import com.example.diamondstore.request.putRequest.OrderPutRequest;
import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/orders/manager")
public class OrderControllerManager {
    
    private final OrderService orderService;

    public OrderControllerManager(OrderService orderService) {
        this.orderService = orderService;
    }

    // api get totalOrder by orderID
    @GetMapping(value = "/totalOrder/{orderID}")
    public ResponseEntity<?> getTotalOrder_Admin(@PathVariable Integer orderID) {
        try {
            return ResponseEntity.ok(orderService.getTotalOrder(orderID));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }


    @GetMapping(value = "/getByStatus/{orderStatus}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersByStatus_Admin(@PathVariable String orderStatus) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(orderStatus));
    }

    @GetMapping("/totalRevenue")
    public ResponseEntity<BigDecimal> getTotalOrderPaid() {
        BigDecimal totalOrderPaid = orderService.getTotalOrderByOrderStatusPaid();
        return ResponseEntity.ok(totalOrderPaid);
    }

    @PutMapping(value = "/update/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateOrder_Manager(@PathVariable Integer orderID, @RequestBody OrderPutRequest orderPutRequest) {
        Map<String, String> response = orderService.updateOrder(orderID, orderPutRequest);
        if (response.get("message").equals("Cập nhật thất bại")) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/totalOrder")
    public ResponseEntity<Long> getTotalOrder_Admin() {
        long totalOrder = orderService.getTotalOrders();
        return new ResponseEntity<>(totalOrder, HttpStatus.OK);
    }

    @GetMapping("/totalTransaction")
    public ResponseEntity<Long> getTotalOrderStatusPaid_Admin() {
        long totalOrderStatusPaid = orderService.getTotalOrdersByOrderStatus("Đã thanh toán");
        return new ResponseEntity<>(totalOrderStatusPaid, HttpStatus.OK);
    }

    // API to get total number of orders in a day
    @GetMapping("/totalOrdersInDay")
    public ResponseEntity<Integer> getTotalOrdersInDay_Admin() {
        int totalOrders = orderService.getTotalOrdersInDay();
        return new ResponseEntity<>(totalOrders, HttpStatus.OK);
    }

    // API to get total order revenue in a day
    @GetMapping("/totalRevenueValueInToday")
    public ResponseEntity<?> getRevenueValueInToday_Admin() {
        OrderSummaryDTO orderSummary = orderService.getRevenueValueInToday();
        return new ResponseEntity<>(orderSummary, HttpStatus.OK);
    }

    // API to get total order value in a month
    @GetMapping("/totalRevenueDayInMonth")
    public ResponseEntity<?> getRevenueDayInMonth_Admin() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonth();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    @GetMapping("/totalRevenueDayInMonthInYear")
    public ResponseEntity<?> getRevenueDayInMonthInYear_Admin(@RequestParam int month, @RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueDayInMonthInYear(month, year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    // API to get total order value in a year
    @GetMapping("/totalRevenueMonthInYear")
    public ResponseEntity<?> getRevenueMonthInYear_Admin() {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear();
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }

    @GetMapping("/admin/totalRevenueMonthInAYear")
    public ResponseEntity<?> getRevenueMonthInAYear_Admin(@RequestParam int year) {
        List<OrderSummaryDTO> orderSummaries = orderService.getRevenueMonthInYear(year);
        return new ResponseEntity<>(orderSummaries, HttpStatus.OK);
    }
}
