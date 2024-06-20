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
import com.example.diamondstore.request.DiamondPriceRequest;
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
    public ResponseEntity<?> addDiamondPrice(@RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.addDiamondPrice(diamondPriceRequest);
    }

    @PutMapping("/{diamondpriceID}")
    public ResponseEntity<Map<String, String>> updateDiamondPrice(@PathVariable Integer diamondpriceID, @RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.updateDiamondPrice(diamondpriceID, diamondPriceRequest);
    }

    @DeleteMapping("/{diamondpriceID}")
    public ResponseEntity<?> deleteDiamondPrice(@PathVariable Integer diamondpriceID) {
        return diamondPriceService.deleteDiamondPrice(diamondpriceID);
    }

    @GetMapping("/{diamondpriceID}")
    public DiamondPrice getDiamondPriceById(@PathVariable Integer diamondpriceID) {
        return diamondPriceService.getDiamondPriceById(diamondpriceID);
    }
}
