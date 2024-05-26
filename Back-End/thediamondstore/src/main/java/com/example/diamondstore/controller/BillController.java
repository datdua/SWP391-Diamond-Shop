package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Bill;
import com.example.diamondstore.service.BillService;

@RestController
@RequestMapping("/api/bills")
public class BillController {

    @Autowired
    private BillService billService;

    @PostMapping("/pay")
    public ResponseEntity<Bill> payBill(@RequestBody Bill bill, @RequestParam Integer pointsToRedeem) {
        Bill processedBill = billService.processBillPayment(bill, pointsToRedeem);
        return ResponseEntity.ok(processedBill);
    }
}
