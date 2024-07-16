package com.example.diamondstore.controller.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/order-management/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping(value = "/get-all", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping(value = "/get-order-have-transaction-no", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersHaveTransactionNo() {
        return ResponseEntity.ok(orderService.getOrdersHaveTransactionNo());
    }

    @GetMapping(value = "/get-order/paged", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }
}
