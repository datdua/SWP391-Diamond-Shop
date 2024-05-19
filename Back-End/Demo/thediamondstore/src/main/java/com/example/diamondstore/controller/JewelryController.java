package com.example.diamondstore.controller;


import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.JewelryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/jewelry")
public class JewelryController {
    @Autowired
    private final JewelryRepository jewelryRepository;

    public JewelryController(JewelryRepository jewelryRepository) {
        this.jewelryRepository = jewelryRepository;
    }

    @GetMapping
    public ResponseEntity<List<Jewelry>> getAllJewelry() {
        return ResponseEntity.ok(jewelryRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Jewelry> createJewelry(@RequestBody Jewelry jewelry) {
        jewelry.setJewelryID(null);       
        return ResponseEntity.ok(jewelryRepository.save(jewelry));
    }

    @PutMapping("/{jewelryID}")
    public ResponseEntity<Jewelry> updateJewelry(@PathVariable Integer jewelryID, @RequestBody Jewelry jewelry) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.notFound().build();
        }
        jewelry.setJewelryID(jewelryID);
        return ResponseEntity.ok(jewelryRepository.save(jewelry));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJewelry(@PathVariable int id) {
        jewelryRepository.deleteById(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}