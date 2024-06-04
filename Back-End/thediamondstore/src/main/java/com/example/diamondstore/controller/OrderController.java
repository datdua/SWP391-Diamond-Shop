package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Order;
import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createOrder(
            @RequestParam int accountID,
            @RequestParam String deliveryAddress,
            @RequestParam(required = false) String promotionCode,
            @RequestParam(required = false) Integer pointsToRedeem,
            @RequestParam String phoneNumber) {

        Order order = orderService.createOrder(accountID, deliveryAddress, promotionCode, pointsToRedeem, phoneNumber);

        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo đơn hàng thành công"));
    }
}
