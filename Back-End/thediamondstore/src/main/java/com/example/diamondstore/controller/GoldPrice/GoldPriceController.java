package com.example.diamondstore.controller.GoldPrice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.GoldPrice;
import com.example.diamondstore.service.GoldPriceService;

@RestController
@RequestMapping("/api/gold-price-management/gold-prices")
public class GoldPriceController {

    @Autowired
    private final GoldPriceService goldPriceService;

    public GoldPriceController(GoldPriceService goldPriceService) {
        this.goldPriceService = goldPriceService;
    }

    @GetMapping(value = "/get-all", produces = "application/json;charset=UTF-8")
    public List<GoldPrice> getAllGoldPrices() {
        return goldPriceService.getAll();
    }
}
