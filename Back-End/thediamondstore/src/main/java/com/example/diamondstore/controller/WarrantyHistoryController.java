package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.WarrantyHistoryService;

@RestController
@RequestMapping("/api/warranty-history-management")
public class WarrantyHistoryController {
    
    @Autowired
    private final WarrantyHistoryService warrantyHistoryService;

    public WarrantyHistoryController(WarrantyHistoryService warrantyHistoryService) {
        this.warrantyHistoryService = warrantyHistoryService;
    }

    @GetMapping(value = "/warranty-histories/get-all", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getWarrantyHistories() {
        return ResponseEntity.ok(warrantyHistoryService.getAllWarrantyHistories());
    }

    @GetMapping(value = "/warranty-histories/{warrantyHistoryID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getWarrantyHistoryById(Integer warrantyHistoryID) {
        return ResponseEntity.ok(warrantyHistoryService.getWarrantyHistoryById(warrantyHistoryID));
    }
}
