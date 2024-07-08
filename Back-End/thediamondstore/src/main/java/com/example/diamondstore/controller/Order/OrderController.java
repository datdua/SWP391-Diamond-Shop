package com.example.diamondstore.controller.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping(value = "/admin/getAll", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping(value = "/admin/getOrder/paged", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrdersPaged(@RequestParam int page, @RequestParam int size) {
        return ResponseEntity.ok(orderService.getAllOrdersPaged(page, size));
    }
}

