package com.example.diamondstore.controller;

import java.util.Collections;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import com.example.diamondstore.repository.WarrantyRepository;
import com.example.diamondstore.request.putRequest.WarrantyPutRequest;

@RestController
@RequestMapping("/api/warranties")

public class WarrantyController {

    private final WarrantyRepository warrantyRepository;

    public WarrantyController(WarrantyRepository warrantyRepository) {
        this.warrantyRepository = warrantyRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Warranty>> getWarranties() {
        return ResponseEntity.ok(warrantyRepository.findAll());
    }

    @GetMapping("/{warrantyID}")
    public ResponseEntity<Warranty> getWarranty(@PathVariable String warrantyID) {
        Warranty warranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (warranty == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(warranty);
    }

    @GetMapping("/paged")
        public ResponseEntity<Page<Warranty>> getAllDiamondsPaged(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Warranty> pageWarrantys = warrantyRepository.findAll(pageable);
        return ResponseEntity.ok(pageWarrantys);
    }

    @PostMapping(value="/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> createWarranty(@RequestBody Warranty warranty) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warranty.getWarrantyID());
        if (existingWarranty != null) {
            return ResponseEntity.badRequest().build();
        }
        warrantyRepository.save(warranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được tạo thành công"));
    }

    @PutMapping(value="/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateWarranty(@PathVariable String warrantyID, @RequestBody WarrantyPutRequest  warrantyPutRequest) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        existingWarranty.setDiamondID(warrantyPutRequest.getDiamondID());
        existingWarranty.setExpirationDate(warrantyPutRequest.getExpirationDate());
        existingWarranty.setwarrantyImage(warrantyPutRequest.getWarrantyImage());
        warrantyRepository.save(existingWarranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được cập nhật thành công"));
    }

    @DeleteMapping(value="/{warrantyID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> deleteCertificate(@PathVariable String warrantyID) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        warrantyRepository.delete(existingWarranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được xóa thành công"));
    }

}
