package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.OrderHistory;
import com.example.diamondstore.service.OrderHistoryService;


@RestController
@RequestMapping("/api/orderhistory")
public class OrderHistoryController {
    
    @Autowired
    private OrderHistoryService orderHistoryService;

    //lấy lịch sử đơn hàng
    @GetMapping("/getAllOrderHistory")
    public ResponseEntity<?> getAllOrderHistory(@RequestParam Integer accountID) {
        List<OrderHistory> orderHistory = orderHistoryService.getAllOrderHistory(accountID);
        if (orderHistory.isEmpty()) {
            return ResponseEntity.ok(Collections.singletonMap("message", "Không có lịch sử đơn hàng."));
        }
        return ResponseEntity.ok(orderHistory);
    }    
}
