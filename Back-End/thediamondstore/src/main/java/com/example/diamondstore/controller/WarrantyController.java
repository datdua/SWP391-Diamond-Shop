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

    // admin
    @GetMapping("/admin")
    public ResponseEntity<Iterable<Warranty>> getWarranties_Admin() {
        return ResponseEntity.ok(warrantyService.getAllWarranties());
    }

    // customer
    @GetMapping("/customer")
    public ResponseEntity<Iterable<Warranty>> getWarranties_Customer() {
        return ResponseEntity.ok(warrantyService.getAllWarranties());
    }

    // admin
    @GetMapping("/admin/{warrantyID}")
    public ResponseEntity<Warranty> getWarranty_Admin(@PathVariable String warrantyID) {
        Warranty warranty = warrantyService.getWarrantyById(warrantyID);
        if (warranty == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(warranty);
    }

    // customer
    @GetMapping("/customer/{warrantyID}")
    public ResponseEntity<Warranty> getWarranty_Customer(@PathVariable String warrantyID) {
        Warranty warranty = warrantyService.getWarrantyById(warrantyID);
        if (warranty == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(warranty);
    }

    // admin
    @GetMapping("/admin/paged")
    public ResponseEntity<Page<Warranty>> getAllWarrantiesPaged_Admin(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(warrantyService.getAllWarrantiesPaged(page, size));
    }

    // admin
    @PostMapping(value = "/admin/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createWarranty_Admin(@RequestBody Warranty warranty) {
        return warrantyService.createWarranty(warranty);
    }

    // admin
    @PutMapping(value = "/admin/update/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateWarranty_Admin(@PathVariable String warrantyID, @RequestBody WarrantyPutRequest warrantyPutRequest) {
        return warrantyService.updateWarranty(warrantyID, warrantyPutRequest);
    }

    // admin
    @DeleteMapping(value = "/admin/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteWarrantys_Admin(@RequestBody List<String> warrantyIDs) {
        try {
            warrantyService.deleteWarranty(warrantyIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // admin
    @GetMapping(value = "/admin/get/warrantyImg/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> getWarrantyImg_Admin(@PathVariable String warrantyID) {
        return warrantyService.getWarrantyImg(warrantyID);
    }

    // customer
    @GetMapping(value = "/customer/get/warrantyImg/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> getWarrantyImg_Customer(@PathVariable String warrantyID) {
        return warrantyService.getWarrantyImg(warrantyID);
    }

    // admin
    @GetMapping("/admin/diamondIDIsNull")
    public ResponseEntity<List<Warranty>> getWarrantiesByDiamondIDIsNull_ADmin() {
        return ResponseEntity.ok(warrantyService.getWarrantiesByDiamondIDIsNull());
    }

    // admin
    @GetMapping("/admin/jewelryIDIsNull")
    public ResponseEntity<List<Warranty>> getWarrantiesByJewelryIDIsNull_Admin() {
        return ResponseEntity.ok(warrantyService.getWarrantiesByJewelryIDIsNull());
    }

    // admin
    @PostMapping("/admin/update-statuses")
    public ResponseEntity<Map<String, String>> updateWarrantyStatusesAuto_Admin() {
        warrantyService.updateWarrantyStatusesAuto();
        return ResponseEntity.ok(Collections.singletonMap("message", "Trạng thái giấy bảo hành đã được cập nhật"));
    }
}
