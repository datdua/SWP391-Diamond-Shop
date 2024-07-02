package com.example.diamondstore.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.service.ProductionService;

@RestController
@RequestMapping("/api/production")
public class ProductionController {

    @Autowired
    private ProductionService productionService;

    @GetMapping("/all")
    public Map<String, Object> getAllProduction() {
        return productionService.getAllProduction();
    }

    // API search theo tên, giá diamond và jewelry
    @GetMapping("/search/filter/page")
    public Map<String, Object> searchAndFilterProductionPaged(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.searchAndFilterProductionPaged(name, minPrice, maxPrice, page, size);
    }

    @GetMapping("/paged")
    public Map<String, Object> getPagedProduction(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.getPagedProduction(page, size);
    }

    @GetMapping("/total")
    public ResponseEntity<Long> getTotalProduction() {
        long totalProduction = productionService.getTotalProduction();
        return new ResponseEntity<>(totalProduction, HttpStatus.OK);
    }

    @GetMapping("/totalDiamond&Jewelry")
    public ResponseEntity<Map<String, Object>> getTotalProductionCount() {
        Map<String, Object> response = productionService.getTotalProductionCount();
        return ResponseEntity.ok(response);
    }
    
}
