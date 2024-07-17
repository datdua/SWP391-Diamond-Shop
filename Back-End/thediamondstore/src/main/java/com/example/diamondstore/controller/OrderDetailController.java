package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.OrderDetailService;

@RestController
@RequestMapping("/api")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    // admin + manager
    @GetMapping(value = "/orderdetail-management/orderdetails/get-all", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrderDetail() {
        return ResponseEntity.ok(orderDetailService.getAllOrderDetail());
    }

    // customer
    @GetMapping(value = "/customer/orderdetail-management/orderdetails/get-all", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getAllOrderDetailCustomer() {
        return ResponseEntity.ok(orderDetailService.getAllOrderDetail());
    }

    // admin + manager
    @GetMapping(value = "/admin/orderdetail-management/orderdetails/getOrderDetail/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrderDetailByOrderID(Integer orderID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailByOrderID(orderID));
    }

    // customer
    @GetMapping(value = "/customer/orderdetail-management/orderdetails/getOrderDetail/{orderID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrderDetailByOrderIDCustomer(Integer orderID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetailByOrderID(orderID));
    }

    // admin + manager
    @GetMapping(value = "/admin/orderdetail-management/orderdetails/{orderDetailID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrderDetail(Integer orderDetailID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetail(orderDetailID));
    }

    // customer
    @GetMapping(value = "/customer/orderdetail-management/orderdetails/{orderDetailID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getOrderDetailCustomer(Integer orderDetailID) {
        return ResponseEntity.ok(orderDetailService.getOrderDetail(orderDetailID));
    }
}
