package com.example.diamondstore.controller.Jewelry;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.service.JewelryService;

@RestController
@RequestMapping("/api/jewelry/guest")
public class JewelryControllerGuest {

    private final JewelryService jewelryService;

    public JewelryControllerGuest(JewelryService jewelryService) {
        this.jewelryService = jewelryService;
    }

    @GetMapping("")
    public ResponseEntity<List<Jewelry>> getAllJewelry() {
        return ResponseEntity.ok(jewelryService.getAllJewelry());
    }

    @GetMapping("/get/{jewelryID}")
    public ResponseEntity<Jewelry> getJewelry(@PathVariable String jewelryID) {
        Jewelry jewelry = jewelryService.getJewelryById(jewelryID);
        if (jewelry == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jewelry);
    }

    @GetMapping("/paged/jewelrys")
    public ResponseEntity<Page<Jewelry>> getAllJewelryPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Jewelry> pageJewelrys = jewelryService.getAllJewelryPaged(page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    @GetMapping("/search/filter")
    public ResponseEntity<List<Jewelry>> searchJewelry(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender) {

        List<Jewelry> jewelrys = jewelryService.searchJewelry(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender);
        return ResponseEntity.ok(jewelrys);
    }

    @GetMapping("/searchByName")
    public ResponseEntity<List<Jewelry>> searchJewelryByName(@RequestParam String name) {
        List<Jewelry> jewelrys = jewelryService.searchJewelryByName(name);
        return ResponseEntity.ok(jewelrys);
    }

    @GetMapping("/search/filter/paged")
    public ResponseEntity<Page<Jewelry>> searchJewelryWithFilters(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Jewelry> pageJewelrys = jewelryService.searchJewelryWithFilters(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender, page, size);
        return ResponseEntity.ok(pageJewelrys);
    }
}
