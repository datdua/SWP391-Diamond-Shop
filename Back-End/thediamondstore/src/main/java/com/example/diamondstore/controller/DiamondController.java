package com.example.diamondstore.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
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

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.repository.DiamondRepository;

/**
 *
 * @author DELL
 */
@RestController
@RequestMapping("/api/diamonds")
public class DiamondController {
    
    private final DiamondRepository diamondRepository;

    public DiamondController(DiamondRepository diamondRepository) {
        this.diamondRepository = diamondRepository;
    }


    @GetMapping
    public ResponseEntity<Iterable<Diamond>> getDiamonds() {
        return ResponseEntity.ok(diamondRepository.findAll());
    }

    @GetMapping("/{diamondID}")
    public ResponseEntity<Diamond> getDiamond(@PathVariable Integer diamondID) {
        Diamond diamond = diamondRepository.findByDiamondID(diamondID);
        if (diamond == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(diamond);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createDiamond(@RequestBody Diamond diamond) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamond.getDiamondID());
        if (existingDiamond != null) {
            return ResponseEntity.badRequest().body("Diamond already exists");
        }
        diamondRepository.save(diamond);
        return ResponseEntity.ok("Diamond created successfully");
    }

    @PutMapping("/{diamondID}")
    public ResponseEntity<Diamond> updateDiamond(@PathVariable Integer diamondID, @RequestBody Diamond diamond) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.notFound().build();
        }
        diamond.setDiamondID(diamondID);
        return ResponseEntity.ok(diamondRepository.save(diamond));
    }

    @DeleteMapping("/{diamondID}")
    public ResponseEntity<Void> deleteDiamond(@PathVariable Integer diamondID) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.notFound().build();
        }
        diamondRepository.delete(existingDiamond);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Diamond>> searchDiamonds(@RequestParam String color) {
    List<Diamond> diamonds = diamondRepository.findByColor(color);
    return ResponseEntity.ok(diamonds);
    }
    
}
