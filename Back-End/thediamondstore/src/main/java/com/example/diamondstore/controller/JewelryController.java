package com.example.diamondstore.controller;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
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

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.specification.JewelrySpecification;


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

    @PostMapping
    public ResponseEntity<Jewelry> createJewelry(@RequestBody Jewelry jewelry) {
        jewelry.setJewelryID(null);
        return ResponseEntity.ok(jewelryRepository.save(jewelry));
    }

    @PutMapping("/{jewelryID}")
    public ResponseEntity<Jewelry> updateJewelry(@PathVariable String jewelryID, @RequestBody Jewelry jewelry) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.notFound().build();
        }
        jewelry.setJewelryID(jewelryID);
        return ResponseEntity.ok(jewelryRepository.save(jewelry));
    }

    @DeleteMapping("/{jewelryID}")
    public ResponseEntity<String> deleteJewelry(@PathVariable String jewelryID) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.notFound().build();
        }
        jewelryRepository.delete(existingJewelry);
        return ResponseEntity.ok("Jewelry deleted successfully");
    }

    @GetMapping("/search")
    public ResponseEntity<List<Jewelry>> searchJewelry(
        @RequestParam (required = false) String jewelryName, 
        @RequestParam (required = false) float jewelryPrice,
        @RequestParam (required = false) String gender){

            Specification<Jewelry> spec = Specification.where(null);

            if(jewelryName != null){
                spec = spec.and(JewelrySpecification.hasName(jewelryName));
            }
            if(jewelryPrice != 0){
                spec = spec.and(JewelrySpecification.hasPrice(jewelryPrice));
            }
            if(gender != null){
                spec = spec.and(JewelrySpecification.hasGender(gender));
            }

            List<Jewelry> jewelrys = jewelryRepository.findAll(spec);
            
        return ResponseEntity.ok(jewelrys);
    }
    
}
