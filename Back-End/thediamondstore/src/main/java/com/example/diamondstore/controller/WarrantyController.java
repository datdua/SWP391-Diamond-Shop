package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteWarrantys(@RequestBody List<String> warrantyIDs) {
    try {
        warrantyService.deleteWarranty(warrantyIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
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
    
    @PostMapping("/update-statuses")
    public ResponseEntity<Map<String, String>> updateWarrantyStatusesAuto() {
        warrantyService.updateWarrantyStatusesAuto();
        return ResponseEntity.ok(Collections.singletonMap("message", "Trạng thái giấy bảo hành đã được cập nhật"));
    }
}
