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

    // guest
    @GetMapping("/guest")
    public ResponseEntity<List<Jewelry>> getAllJewelry_Guest() {
        return ResponseEntity.ok(jewelryService.getAllJewelry());
    }

    // admin
    @GetMapping("/get-all")
    public ResponseEntity<List<Jewelry>> getAllJewelry_Manager() {
        return ResponseEntity.ok(jewelryService.getAllJewelry());
    }

    // customer
    @GetMapping("/customer")
    public ResponseEntity<List<Jewelry>> getAllJewelry_Customer() {
        return ResponseEntity.ok(jewelryService.getAllJewelry());
    }

    // guest
    @GetMapping("/guest/get/{jewelryID}")
    public ResponseEntity<Jewelry> getJewelry_Guest(@PathVariable String jewelryID) {
        Jewelry jewelry = jewelryService.getJewelryById(jewelryID);
        if (jewelry == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jewelry);
    }

    // admin
    @GetMapping("/manager/get/{jewelryID}")
    public ResponseEntity<Jewelry> getJewelry_Manager(@PathVariable String jewelryID) {
        Jewelry jewelry = jewelryService.getJewelryById(jewelryID);
        if (jewelry == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jewelry);
    }

    // customer
    @GetMapping("/customer/get/{jewelryID}")
    public ResponseEntity<Jewelry> getJewelry_Customer(@PathVariable String jewelryID) {
        Jewelry jewelry = jewelryService.getJewelryById(jewelryID);
        if (jewelry == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(jewelry);
    }

    // guest
    @GetMapping("/guest/paged/jewelrys")
    public ResponseEntity<Page<Jewelry>> getAllJewelryPaged_Guest(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Jewelry> pageJewelrys = jewelryService.getAllJewelryPaged(page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    // admin
    @GetMapping("/admin/paged/jewelrys")
    public ResponseEntity<Page<Jewelry>> getAllJewelryPaged_Admin(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Jewelry> pageJewelrys = jewelryService.getAllJewelryPaged(page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    // customer
    @GetMapping("/customer/paged/jewelrys")
    public ResponseEntity<Page<Jewelry>> getAllJewelryPaged_Customer(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Jewelry> pageJewelrys = jewelryService.getAllJewelryPaged(page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    @PostMapping(value = "/manager/create")
    public ResponseEntity<Map<String, String>> createJewelry_Admin(@RequestBody Jewelry jewelry) {
        return jewelryService.createJewelry(jewelry);
    }

    // admin
    @PutMapping("/manager/update/{jewelryID}")
    public ResponseEntity<Map<String, String>> updateJewelry_Admin(@PathVariable String jewelryID, @RequestBody JewelryPutRequest jewelryPutRequest) {
        Map<String, String> response = jewelryService.updateJewelry(jewelryID, jewelryPutRequest);
        if ("Trang sức không tồn tại".equals(response.get("message"))) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/manager/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteJewelrys_Admin(@RequestBody List<String> jewelryIDs) {
    try {
        jewelryService.deleteJewelry(jewelryIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các trang sức thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }

    // guest
    @GetMapping("/guest/search/filter")
    public ResponseEntity<List<Jewelry>> searchJewelry_Guest(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender) {

        List<Jewelry> jewelrys = jewelryService.searchJewelry(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender);
        return ResponseEntity.ok(jewelrys);
    }

    // admin
    @GetMapping("/admin/search/filter")
    public ResponseEntity<List<Jewelry>> searchJewelry_Admin(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender) {

        List<Jewelry> jewelrys = jewelryService.searchJewelry(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender);
        return ResponseEntity.ok(jewelrys);
    }

    // customer
    @GetMapping("/customer/search/filter")
    public ResponseEntity<List<Jewelry>> searchJewelry_Customer(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender) {

        List<Jewelry> jewelrys = jewelryService.searchJewelry(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender);
        return ResponseEntity.ok(jewelrys);
    }

    // guest
    @GetMapping("/guest/searchByName")
    public ResponseEntity<List<Jewelry>> searchJewelryByName_Guest(@RequestParam String name) {
        List<Jewelry> jewelrys = jewelryService.searchJewelryByName(name);
        return ResponseEntity.ok(jewelrys);
    }

    // admin
    @GetMapping("/admin/searchByName")
    public ResponseEntity<List<Jewelry>> searchJewelryByName_Admin(@RequestParam String name) {
        List<Jewelry> jewelrys = jewelryService.searchJewelryByName(name);
        return ResponseEntity.ok(jewelrys);
    }

    // customer
    @GetMapping("/customer/searchByName")
    public ResponseEntity<List<Jewelry>> searchJewelryByName_Customer(@RequestParam String name) {
        List<Jewelry> jewelrys = jewelryService.searchJewelryByName(name);
        return ResponseEntity.ok(jewelrys);
    }

    // guest
    @GetMapping("/guest/search/filter/paged")
    public ResponseEntity<Page<Jewelry>> searchJewelryWithFilters_Guest(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Jewelry> pageJewelrys = jewelryService.searchJewelryWithFilters(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender, page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    // admin
    @GetMapping("/admin/search/filter/paged")
    public ResponseEntity<Page<Jewelry>> searchJewelryWithFilters_Admin(
            @RequestParam(required = false) String jewelryName,
            @RequestParam(required = false) Float minjewelryEntryPrice,
            @RequestParam(required = false) Float maxjewelryEntryPrice,
            @RequestParam(required = false) String gender,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Jewelry> pageJewelrys = jewelryService.searchJewelryWithFilters(jewelryName, minjewelryEntryPrice, maxjewelryEntryPrice, gender, page, size);
        return ResponseEntity.ok(pageJewelrys);
    }

    // customer
    @GetMapping("/customer/search/filter/paged")
    public ResponseEntity<Page<Jewelry>> searchJewelryWithFilters_Customer(
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
