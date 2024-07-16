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

    // guest
    @GetMapping("/guest/all")
    public Map<String, Object> getAllProduction_Guest() {
        return productionService.getAllProduction();
    }

    // admin
    @GetMapping("/admin/all")
    public Map<String, Object> getAllProduction_Admin() {
        return productionService.getAllProduction();
    }

    // customer
    @GetMapping("/customer/all")
    public Map<String, Object> getAllProduction_Customer() {
        return productionService.getAllProduction();
    }

    // guest
    // API search theo tên, giá diamond và jewelry
    @GetMapping("/guest/search/filter/page")
    public Map<String, Object> searchAndFilterProductionPaged_Guest(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.searchAndFilterProductionPaged(name, minPrice, maxPrice, page, size);
    }

    // admin
    @GetMapping("/admin/search/filter/page")
    public Map<String, Object> searchAndFilterProductionPaged_Admin(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.searchAndFilterProductionPaged(name, minPrice, maxPrice, page, size);
    }

    // customer
    @GetMapping("/customer/search/filter/page")
    public Map<String, Object> searchAndFilterProductionPaged_Customer(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Float minPrice,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.searchAndFilterProductionPaged(name, minPrice, maxPrice, page, size);
    }

    // guest
    @GetMapping("/guest/get-paging")
    public Map<String, Object> getPagedProduction(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.getPagedProduction(page, size);
    }

    // admin
    @GetMapping("/admin/get-paging")
    public Map<String, Object> getPagedProduction_Admin(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.getPagedProduction(page, size);
    }

    // customer
    @GetMapping("/customer/get-paging")
    public Map<String, Object> getPagedProduction_Customer(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return productionService.getPagedProduction(page, size);
    }

    // guest
    @GetMapping("/guest/total")
    public ResponseEntity<Long> getTotalProduction_Guest() {
        long totalProduction = productionService.getTotalProduction();
        return new ResponseEntity<>(totalProduction, HttpStatus.OK);
    }

    // admin
    @GetMapping("/admin/total")
    public ResponseEntity<Long> getTotalProduction_Admin() {
        long totalProduction = productionService.getTotalProduction();
        return new ResponseEntity<>(totalProduction, HttpStatus.OK);
    }

    // customer
    @GetMapping("/customer/total")
    public ResponseEntity<Long> getTotalProduction_Customer() {
        long totalProduction = productionService.getTotalProduction();
        return new ResponseEntity<>(totalProduction, HttpStatus.OK);
    }

    // admin
    @GetMapping("/totalDiamond&Jewelry")
    public ResponseEntity<Map<String, Object>> getTotalProductionCount_Admin() {
        Map<String, Object> response = productionService.getTotalProductionCount();
        return ResponseEntity.ok(response);
    } 
}
