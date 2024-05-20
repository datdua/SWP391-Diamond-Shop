package com.example.diamondstore.controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.JewelryRepository;

@RestController
@RequestMapping("/api/jewelry")
public class JewelryController {
    
    private final JewelryRepository jewelryRepository;

    public JewelryController(JewelryRepository jewelryRepository) {
        this.jewelryRepository = jewelryRepository;
    }


    @GetMapping
    public ResponseEntity<List<Jewelry>> getAllJewelry() {
        return ResponseEntity.ok(jewelryRepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<String> createJewelry(@RequestBody Jewelry jewelry) {
        Jewelry existingJerwelry = jewelryRepository.findByJewelryID(jewelry.getJewelryID());
        if (existingJerwelry != null) {
            return ResponseEntity.badRequest().body("Jerwelry already exists");
        }
        jewelryRepository.save(jewelry);
        return ResponseEntity.ok("Jerwelry created successfully");
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