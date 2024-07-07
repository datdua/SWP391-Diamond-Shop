package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    // guest
    @GetMapping("/guest")
    public List<GoldPrice> getAllGoldPrices_Guest() {
        return goldPriceService.getAll();
    }

    // admin
    @GetMapping("/get-all")
    public List<GoldPrice> getAllGoldPrices_Admin() {
        return goldPriceService.getAll();
    }

    // customer
    @GetMapping("customer")
    public List<GoldPrice> getAllGoldPrices_Customer() {
        return goldPriceService.getAll();
    }

    // guest
    @GetMapping("/guest/{goldPriceID}")
    public GoldPrice getGoldPriceById_Guest(@PathVariable Integer goldPriceID) {
        return goldPriceService.getGoldPriceById(goldPriceID);
    }

    // admin
    @GetMapping("/manager/{goldPriceID}")
    public GoldPrice getGoldPriceById_Admin(@PathVariable Integer goldPriceID) {
        return goldPriceService.getGoldPriceById(goldPriceID);
    }

    // customer
    @GetMapping("/customer/{goldPriceID}")
    public GoldPrice getGoldPriceById_Customer(@PathVariable Integer goldPriceID) {
        return goldPriceService.getGoldPriceById(goldPriceID);
    }

    // admin
    @PostMapping("/manager/create")
    public ResponseEntity<?> addGoldPrice_Admin(@RequestBody GoldPriceRequest goldPriceRequest) {
        return goldPriceService.addGoldPrice(goldPriceRequest);
    }

    // admin
    @PutMapping("/manager/{goldPriceID}")
    public ResponseEntity<?> updateGoldPrice_Admin(@PathVariable Integer goldPriceID, @RequestBody GoldPriceRequest goldPriceRequest) {
        return goldPriceService.updateGoldPrice(goldPriceID, goldPriceRequest);
    }

    // admin
    @DeleteMapping(value = "/manager/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteGoldPrices_Admin(@RequestBody List<Integer> goldPriceIDs) {
        try {
            goldPriceService.deleteGoldPrices(goldPriceIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }
}
