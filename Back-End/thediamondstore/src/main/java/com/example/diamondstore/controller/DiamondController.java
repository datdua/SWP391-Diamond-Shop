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

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.specification.DiamondSpecification;

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
    public ResponseEntity<Diamond> getDiamond(@PathVariable String diamondID) {
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
    public ResponseEntity<Diamond> updateDiamond(@PathVariable String diamondID, @RequestBody Diamond diamond) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.notFound().build();
        }
        diamond.setDiamondID(diamondID);
        return ResponseEntity.ok(diamondRepository.save(diamond));
    }

    @DeleteMapping("/{diamondID}")
    public ResponseEntity<String> deleteDiamond(@PathVariable String diamondID) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.notFound().build();
        }
        diamondRepository.delete(existingDiamond);
        return ResponseEntity.ok("Diamond deleted successfully");

    }

    @GetMapping("/search")
    public ResponseEntity<List<Diamond>> searchDiamonds(@RequestParam String color) {
        List<Diamond> diamonds = diamondRepository.findByColor(color);
        return ResponseEntity.ok(diamonds);
    }

    @GetMapping("/search/filter")
    public ResponseEntity<List<Diamond>> searchDiamonds(
        @RequestParam(required = false) Float minDiamondPrice,
        @RequestParam(required = false) Float maxDiamondPrice,
        @RequestParam(required = false) String origin,
        @RequestParam(required = false) String cut,
        @RequestParam(required = false) String shape,
        @RequestParam(required = false) String color,
        @RequestParam(required = false) Float minCaratSize,
        @RequestParam(required = false) Float maxCaratSize,
        @RequestParam(required = false) Float minCaratWeight,
        @RequestParam(required = false) Float maxCaratWeight,
        @RequestParam(required = false) String clarity,
        @RequestParam(required = false) String diamondNameLike) {

    Specification<Diamond> spec = Specification.where(null);

    if (minDiamondPrice != null) {
        spec = spec.and(DiamondSpecification.hasMinDiamondPrice(minDiamondPrice));
    }
    if (maxDiamondPrice != null) {
        spec = spec.and(DiamondSpecification.hasMaxDiamondPrice(maxDiamondPrice));
    }
    if (origin != null) {
        spec = spec.and(DiamondSpecification.hasOrigin(origin));
    }
    if (cut != null) {
        spec = spec.and(DiamondSpecification.hasCut(cut));
    }
    if (shape != null) {
        spec = spec.and(DiamondSpecification.hasShape(shape));
    }   
    if (color != null) {
        spec = spec.and(DiamondSpecification.hasColor(color));
    }
    if (clarity != null) {
        spec = spec.and(DiamondSpecification.hasClarity(clarity));
    }
    if (minCaratSize != null) {
        spec = spec.and(DiamondSpecification.hasMinCaratSize(minCaratSize));
    }
    if (maxCaratSize != null) {
        spec = spec.and(DiamondSpecification.hasMaxCaratSize(maxCaratSize));
    }
    if (minCaratWeight != null) {
        spec = spec.and(DiamondSpecification.hasMinCaratWeight(minCaratWeight));
    }
    if (maxCaratWeight != null) {
        spec = spec.and(DiamondSpecification.hasMaxCaratWeight(maxCaratWeight));
    }
    if (diamondNameLike != null) {
        List<Diamond> diamonds = diamondRepository.findByDiamondNameLike("%" + diamondNameLike + "%");
        return ResponseEntity.ok(diamonds);
    }

    List<Diamond> diamonds = diamondRepository.findAll(spec);
    return ResponseEntity.ok(diamonds);
}
}
