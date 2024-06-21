package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.request.putRequest.WarrantyPutRequest;
import com.example.diamondstore.service.WarrantyService;

@RestController
@RequestMapping("/api/warranties")
public class WarrantyController {

    @Autowired
    private final WarrantyService warrantyService;

    public WarrantyController(WarrantyService warrantyService) {
        this.warrantyService = warrantyService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Warranty>> getWarranties() {
        return ResponseEntity.ok(warrantyService.getAllWarranties());
    }

    @GetMapping("/{warrantyID}")
    public ResponseEntity<Warranty> getWarranty(@PathVariable String warrantyID) {
        Warranty warranty = warrantyService.getWarrantyById(warrantyID);
        if (warranty == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(warranty);
    }

    @GetMapping("/paged")
    public ResponseEntity<Page<Warranty>> getAllWarrantiesPaged(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(warrantyService.getAllWarrantiesPaged(page, size));
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createWarranty(@RequestBody Warranty warranty) {
        return warrantyService.createWarranty(warranty);
    }

    @PutMapping(value = "/update/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateWarranty(@PathVariable String warrantyID, @RequestBody WarrantyPutRequest warrantyPutRequest) {
        return warrantyService.updateWarranty(warrantyID, warrantyPutRequest);
    }

    @DeleteMapping(value = "/delete/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteWarranty(@PathVariable String warrantyID) {
        return warrantyService.deleteWarranty(warrantyID);
    }

    @GetMapping(value = "/get/warrantyImg/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> getWarrantyImg(@PathVariable String warrantyID) {
        return warrantyService.getWarrantyImg(warrantyID);
    }

    @GetMapping("/diamondIDIsNull")
    public ResponseEntity<List<Warranty>> getWarrantiesByDiamondIDIsNull() {
        return ResponseEntity.ok(warrantyService.getWarrantiesByDiamondIDIsNull());
    }

    @GetMapping("/jewelryIDIsNull")
    public ResponseEntity<List<Warranty>> getWarrantiesByJewelryIDIsNull() {
        return ResponseEntity.ok(warrantyService.getWarrantiesByJewelryIDIsNull());
    }
    
}
