package com.example.diamondstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.repository.WarrantyRepository;

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

    @PostMapping("/create")
    public ResponseEntity<Warranty> createWarranty(@RequestBody Warranty warranty) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warranty.getWarrantyID());
        if (existingWarranty != null) {
            return ResponseEntity.badRequest().build();
        }
        warrantyRepository.save(warranty);
        return ResponseEntity.ok(warranty);
    }

    @PutMapping("/{warrantyID}")
    public ResponseEntity<Warranty> updateWarranty(@PathVariable String warrantyID, @RequestBody Warranty warranty) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        warranty.setWarrantyID(warrantyID);
        return ResponseEntity.ok(warrantyRepository.save(warranty));
    }

    @DeleteMapping("/{warrantyID}")
    public ResponseEntity<String> deleteCertificate(@PathVariable String warrantyID) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        warrantyRepository.delete(existingWarranty);
        return ResponseEntity.ok("Warranty deleted successfully");
    }

}
