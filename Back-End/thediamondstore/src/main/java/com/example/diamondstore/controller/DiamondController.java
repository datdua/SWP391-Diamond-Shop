package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import com.example.diamondstore.request.putRequest.DiamondPutRequest;
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

    @PostMapping(value="/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createDiamond(@RequestBody Diamond diamond) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamond.getDiamondID());
        if (existingDiamond != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Kim cương đã tồn tại"));
        }
        diamondRepository.save(diamond);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    @PutMapping(value="/{diamondID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateDiamond(@PathVariable String diamondID, @RequestBody DiamondPutRequest diamondPutRequest) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.notFound().build();
        }
        existingDiamond.setDiamondName(diamondPutRequest.getDiamondName());
        existingDiamond.setDiamondPrice(diamondPutRequest.getDiamondPrice());
        existingDiamond.setOrigin(diamondPutRequest.getOrigin());
        existingDiamond.setCut(diamondPutRequest.getCut());
        existingDiamond.setShape(diamondPutRequest.getShape());
        existingDiamond.setColor(diamondPutRequest.getColor());
        existingDiamond.setCarat_size(diamondPutRequest.getCarat_size());
        existingDiamond.setCarat_weight(diamondPutRequest.getCarat_weight());
        existingDiamond.setClarity(diamondPutRequest.getClarity());
        diamondRepository.save(existingDiamond);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping(value="/{diamondID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> deleteDiamond(@PathVariable String diamondID) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
        if (existingDiamond == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy kim cương"));
        }
        diamondRepository.delete(existingDiamond);
        return ResponseEntity.ok("Kim cương đã xóa thành công");

    }

    @GetMapping("/search")
    public ResponseEntity<List<Diamond>> searchDiamonds(@RequestParam String color) {
        List<Diamond> diamonds = diamondRepository.findByColor(color);
        return ResponseEntity.ok(diamonds);
    }

    @GetMapping("/paged")
    public ResponseEntity<Page<Diamond>> getAllDiamondsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page-1, size);
        Page<Diamond> pageDiamonds = diamondRepository.findAll(pageable);
        return ResponseEntity.ok(pageDiamonds);
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
