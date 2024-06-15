package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.OrderDetailService;

@RestController
@RequestMapping("/api/orderDetail")
public class OrderDetailController {
    
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllOrderDetail() {
        return ResponseEntity.ok(orderDetailService.getAllOrderDetail());
    }

    @GetMapping("/getOrderDetail/{orderID}")
    public ResponseEntity<?> getOrderDetailByOrderID(Integer orderID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailByOrderID(orderID));
    }

    @GetMapping("/get/{orderDetailID}")
    public ResponseEntity<?> getOrderDetail(Integer orderDetailID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetail(orderDetailID));
    }

}
