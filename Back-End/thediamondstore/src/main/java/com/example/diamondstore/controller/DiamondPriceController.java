package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.math.BigDecimal;

import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.service.DiamondPriceService;

@RestController
@RequestMapping("/api/diamondprices")
public class DiamondPriceController {

    @Autowired
    private final DiamondPriceService diamondPriceService;

    public DiamondPriceController(DiamondPriceService diamondPriceService) {
        this.diamondPriceService = diamondPriceService;
    }

    @GetMapping("/getAll")
    public List<DiamondPrice> getAll() {
        return diamondPriceService.getAll();
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Map<String, String>> createDiamondPrice(@RequestBody DiamondPrice diamondPrice) {
        return diamondPriceService.createDiamondPrice(diamondPrice);
    }

    @PutMapping("/{id}")
    public DiamondPrice update(@PathVariable Integer diamondpriceID, @RequestParam BigDecimal diamondEntryPrice, @RequestParam String color, @RequestParam Float carat_size, @RequestParam String clarity) {
        return diamondPriceService.update(diamondpriceID, diamondEntryPrice, color, carat_size, clarity);
    }

    @DeleteMapping("/{id}")
    public void deleteDiamondPrice(@PathVariable Integer diamondpriceID) {
        diamondPriceService.deleteDiamondPrice(diamondpriceID);
    }

    @GetMapping("/{diamondpriceID}")
    public DiamondPrice getDiamondPriceById(@PathVariable Integer diamondpriceID) {
        return diamondPriceService.getDiamondPriceById(diamondpriceID);
    }
}
