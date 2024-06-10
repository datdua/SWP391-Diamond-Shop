package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
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
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
import com.example.diamondstore.service.JewelryService;

@RestController
@RequestMapping("/api/jewelry")
public class JewelryController {

    private final JewelryService jewelryService;

    public JewelryController(JewelryService jewelryService) {
        this.jewelryService = jewelryService;
    }

    @GetMapping
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

    @PostMapping(value = "/create")
    public ResponseEntity<Map<String, String>> createJewelry(@RequestBody Jewelry jewelry) {
        Map<String, String> response = jewelryService.createJewelry(jewelry);
        if ("Trang sức đã tồn tại".equals(response.get("message"))) {
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update/{jewelryID}")
    public ResponseEntity<Map<String, String>> updateJewelry(@PathVariable String jewelryID, @RequestBody JewelryPutRequest jewelryPutRequest) {
        Map<String, String> response = jewelryService.updateJewelry(jewelryID, jewelryPutRequest);
        if ("Trang sức không tồn tại".equals(response.get("message"))) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/{jewelryID}")
    public ResponseEntity<Map<String, String>> deleteJewelry(@PathVariable String jewelryID) {
        String message = jewelryService.deleteJewelry(jewelryID);
        if ("Trang sức không tồn tại".equals(message)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Collections.singletonMap("message", message));
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
}
