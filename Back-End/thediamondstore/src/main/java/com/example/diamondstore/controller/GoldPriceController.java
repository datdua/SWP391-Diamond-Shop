package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.diamondstore.model.GoldPrice;
import com.example.diamondstore.request.GoldPriceRequest;
import com.example.diamondstore.service.GoldPriceService;

@RestController
@RequestMapping("/api/goldPrices")
public class GoldPriceController {

    @Autowired
    private final GoldPriceService goldPriceService;

    public GoldPriceController(GoldPriceService goldPriceService) {
        this.goldPriceService = goldPriceService;
    }

    @GetMapping
    public List<GoldPrice> getAllGoldPrices() {
        return goldPriceService.getAll();
    }

    @GetMapping("/{goldPriceID}")
    public GoldPrice getGoldPriceById(@PathVariable Integer goldPriceID) {
        return goldPriceService.getGoldPriceById(goldPriceID);
    }

    @PostMapping
    public ResponseEntity<?> addGoldPrice(@RequestBody GoldPriceRequest goldPriceRequest) {
        return goldPriceService.addGoldPrice(goldPriceRequest);
    }

    @PutMapping("/{goldPriceID}")
    public ResponseEntity<?> updateGoldPrice(@PathVariable Integer goldPriceID, @RequestBody GoldPriceRequest goldPriceRequest) {
        return goldPriceService.updateGoldPrice(goldPriceID, goldPriceRequest);
    }

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteGoldPrices(@RequestBody List<Integer> goldPriceIDs) {
    try {
        goldPriceService.deleteGoldPrices(goldPriceIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }
}
