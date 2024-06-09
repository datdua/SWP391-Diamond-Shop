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

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
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

    @GetMapping("/{jewelryID}")
    public ResponseEntity<Jewelry> getJewelry(@PathVariable String jewelryID) {
        Jewelry jewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (jewelry == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jewelry);
    }

    @GetMapping("/paged")
    public ResponseEntity<Page<Jewelry>> getAllDiamondsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Jewelry> pageJewelrys = jewelryRepository.findAll(pageable);
        return ResponseEntity.ok(pageJewelrys);
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createJewelry(@RequestBody Jewelry jewelry) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelry.getJewelryID());
        if (existingJewelry != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Trang sức đã tồn tại"));
        }
        jewelryRepository.save(jewelry);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    @PutMapping("/update/{jewelryID}")
    public ResponseEntity<?> updateJewelry(@PathVariable String jewelryID, @RequestBody JewelryPutRequest jewelryPutRequest) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.notFound().build();
        }
        existingJewelry.setJewelryName(jewelryPutRequest.getJewelryName());
        existingJewelry.setGender(jewelryPutRequest.getGender());
        existingJewelry.setjewelryImage(jewelryPutRequest.getJewelryImage());
        existingJewelry.setJewelryPrice(jewelryPutRequest.getJewelryPrice());
        jewelryRepository.save(existingJewelry);
        return ResponseEntity.ok().body(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping("/delete/{jewelryID}")
    public ResponseEntity<String> deleteJewelry(@PathVariable String jewelryID) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.notFound().build();
        }
        jewelryRepository.delete(existingJewelry);
        return ResponseEntity.ok("Jewelry deleted successfully");
    }

    @GetMapping("/search/filter")
    public ResponseEntity<List<Jewelry>> searchJewelry(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryPrice,
            @RequestParam(required = false) Float maxjewelryPrice,
            @RequestParam(required = false) String gender) {

        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasNameLike(jewelryName));
        }
        if (minjewelryPrice != null || maxjewelryPrice != null) {
            spec = spec.and(JewelrySpecification.hasPriceBetween(minjewelryPrice, maxjewelryPrice));
        }
        if (gender != null) {
            spec = spec.and(JewelrySpecification.hasGender(gender));
        }

        List<Jewelry> jewelrys = jewelryRepository.findAll(spec);

        return ResponseEntity.ok(jewelrys);
    }

    @GetMapping("/searchName")
    public ResponseEntity<List<Jewelry>> searchJewelryByName(@RequestParam String name) {
        Specification<Jewelry> spec = JewelrySpecification.hasNameLike(name);
        List<Jewelry> jewelrys = jewelryRepository.findAll(spec);
        return ResponseEntity.ok(jewelrys);
    }
}
