package com.example.diamondstore.controller.GoldPrice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.GoldPrice;
import com.example.diamondstore.service.GoldPriceService;

@RestController
@RequestMapping("/api/guest/gold-prices")
public class GoldPriceControllerGuest {

    @Autowired
    private final GoldPriceService goldPriceService;

    public GoldPriceControllerGuest(GoldPriceService goldPriceService) {
        this.goldPriceService = goldPriceService;
    }

    @GetMapping(value = "/get-all", produces = "application/json;charset=UTF-8")
    public List<GoldPrice> getAllGoldPrices() {
        return goldPriceService.getAll();
    }

    @GetMapping(value = "/{goldPriceID}", produces = "application/json;charset=UTF-8")
    public GoldPrice getGoldPriceById(@PathVariable Integer goldPriceID) {
        return goldPriceService.getGoldPriceById(goldPriceID);
    }
}
