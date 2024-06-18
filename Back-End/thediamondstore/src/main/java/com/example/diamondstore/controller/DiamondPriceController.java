package com.example.diamondstore.controller;

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

import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.request.putRequest.DiamondPricePutRequest;
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
    public ResponseEntity<Map<String, String>> update(@PathVariable Integer diamondpriceID, @RequestBody DiamondPricePutRequest diamondPricePutRequest) {
        return diamondPriceService.update(diamondpriceID, diamondPricePutRequest);
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
