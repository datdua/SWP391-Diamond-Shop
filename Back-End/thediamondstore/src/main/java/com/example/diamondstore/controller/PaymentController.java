package com.example.diamondstore.controller;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.DTO.TransactionStatusDTO;
import com.example.diamondstore.service.PaymentService;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    // customer
    @GetMapping(value = "/customer/payments/create-payment", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> createPayment_Customer(@RequestParam Integer orderID) throws UnsupportedEncodingException {
        return paymentService.createPayment(orderID);
    }

    // customer
    @GetMapping(value = "/customer/payments/vnpay-return", produces = "application/json;charset=UTF-8")
    public ResponseEntity<TransactionStatusDTO> vnpayReturn(
            @RequestParam(value = "vnp_BankCode") String bankCode,
            @RequestParam(value = "vnp_OrderInfo") Integer orderID,
            @RequestParam(value = "vnp_ResponseCode") String responseCode,
            @RequestParam(value = "vnp_TransactionNo", required = false) Integer transactionNo) {
        return paymentService.handlePaymentReturn(bankCode, orderID, responseCode, transactionNo);
    }
}
