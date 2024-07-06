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

    // admin
    @GetMapping("/admin/getAll")
    public ResponseEntity<?> getAllOrderDetail_Admin() {
        return ResponseEntity.ok(orderDetailService.getAllOrderDetail());
    }

    // customer
    @GetMapping("/customer/getAll")
    public ResponseEntity<?> getAllOrderDetail_Customer() {
        return ResponseEntity.ok(orderDetailService.getAllOrderDetail());
    }

    // admin
    @GetMapping("/admin/getOrderDetail")
    public ResponseEntity<?> getOrderDetailByOrderID_Admin(Integer orderID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailByOrderID(orderID));
    }

    // customer
    @GetMapping("/customer/getOrderDetail")
    public ResponseEntity<?> getOrderDetailByOrderID_Customer(Integer orderID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailByOrderID(orderID));
    }

    // admin
    @GetMapping("/admin/get/{orderDetailID}")
    public ResponseEntity<?> getOrderDetail(Integer orderDetailID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetail(orderDetailID));
    }

    // customer
    @GetMapping("/customer/get/{orderDetailID}")
    public ResponseEntity<?> getOrderDetail_Customer(Integer orderDetailID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetail(orderDetailID));
    }
}
