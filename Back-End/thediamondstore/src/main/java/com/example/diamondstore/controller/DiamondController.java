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

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.request.putRequest.DiamondPutRequest;
import com.example.diamondstore.service.DiamondService;

@RestController
@RequestMapping("/api/diamonds")
public class DiamondController {

    private final DiamondService diamondService;

    public DiamondController(DiamondService diamondService) {
        this.diamondService = diamondService;
    }

    // guest
    @GetMapping("/guest")
    public ResponseEntity<List<Diamond>> getDiamonds_Guest() {
        return ResponseEntity.ok(diamondService.getAllDiamonds());
    }

    // admin
    @GetMapping("/admin")
    public ResponseEntity<List<Diamond>> getDiamonds_Admin() {
        return ResponseEntity.ok(diamondService.getAllDiamonds());
    }

    // customer
    @GetMapping("/customer")
    public ResponseEntity<List<Diamond>> getDiamonds_Customer() {
        return ResponseEntity.ok(diamondService.getAllDiamonds());
    }

    // guest
    @GetMapping("/guest/get/{diamondID}")
    public ResponseEntity<Diamond> getDiamond(@PathVariable String diamondID) {
        Diamond diamond = diamondService.getDiamondById(diamondID);
        if (diamond == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(diamond);
    }

    // admin
    @GetMapping("/admin/get/{diamondID}")
    public ResponseEntity<Diamond> getDiamond_Admin(@PathVariable String diamondID) {
        Diamond diamond = diamondService.getDiamondById(diamondID);
        if (diamond == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(diamond);
    }

    //customer
    @GetMapping("/customer/get/{diamondID}")
    public ResponseEntity<Diamond> getDiamond_Customer(@PathVariable String diamondID) {
        Diamond diamond = diamondService.getDiamondById(diamondID);
        if (diamond == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(diamond);
    }

    // admin
    @PostMapping("/admin/create")
    public ResponseEntity<Map<String, String>> createDiamond_Admin(@RequestBody Diamond diamond) {
        return diamondService.createDiamond(diamond);
    }

    // admin
    @PutMapping(value = "/admin/update/{diamondID}")
    public ResponseEntity<Map<String, String>> updateDiamond_Admin(@PathVariable String diamondID, @RequestBody DiamondPutRequest diamondPutRequest) {
        Map<String, String> response = diamondService.updateDiamond(diamondID, diamondPutRequest);
        if (response.containsKey("message") && response.get("message").equals("Không tìm thấy kim cương")) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    // admin
    @DeleteMapping(value = "/admin/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteDiamonds_Admin(@RequestBody List<String> diamondIDs) {
        try {
            diamondService.deleteDiamonds(diamondIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // guest
    @GetMapping("/guest/paged/diamonds")
    public ResponseEntity<Page<Diamond>> getAllDiamondsPaged_Guest(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Diamond> pageDiamonds = diamondService.getAllDiamondsPaged(page, size);
        return ResponseEntity.ok(pageDiamonds);
    }

    // admin    
    @GetMapping("/admin/paged/diamonds")
    public ResponseEntity<Page<Diamond>> getAllDiamondsPaged_Admin(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Diamond> pageDiamonds = diamondService.getAllDiamondsPaged(page, size);
        return ResponseEntity.ok(pageDiamonds);
    }

    // customer
    @GetMapping("/customer/paged/diamonds")
    public ResponseEntity<Page<Diamond>> getAllDiamondsPaged_Customer(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Diamond> pageDiamonds = diamondService.getAllDiamondsPaged(page, size);
        return ResponseEntity.ok(pageDiamonds);
    }

    // guest
    @GetMapping("/guest/search/filter")
    public ResponseEntity<List<Diamond>> searchDiamonds_Guest(
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

        List<Diamond> diamonds = diamondService.searchDiamondsWithFilters(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondNameLike);

        return ResponseEntity.ok(diamonds);
    }

    // admin
    @GetMapping("/admin/search/filter")
    public ResponseEntity<List<Diamond>> searchDiamonds_Admin(
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

        List<Diamond> diamonds = diamondService.searchDiamondsWithFilters(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondNameLike);

        return ResponseEntity.ok(diamonds);
    }

    // customer
    @GetMapping("/customer/search/filter")
    public ResponseEntity<List<Diamond>> searchDiamonds_Customer(
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

        List<Diamond> diamonds = diamondService.searchDiamondsWithFilters(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondNameLike);

        return ResponseEntity.ok(diamonds);
    }

    // guest
    @GetMapping("/guest/search/filter/paged")
    public ResponseEntity<Page<Diamond>> searchDiamondsPaged_Guest(
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
            @RequestParam(required = false) String diamondName,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Diamond> pageDiamonds = diamondService.searchDiamondsWithFiltersPaged(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondName,
                page, size);

        return ResponseEntity.ok(pageDiamonds);
    }

    // admin
    @GetMapping("/admin/search/filter/paged")
    public ResponseEntity<Page<Diamond>> searchDiamondsPaged_Admin(
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
            @RequestParam(required = false) String diamondName,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Diamond> pageDiamonds = diamondService.searchDiamondsWithFiltersPaged(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondName,
                page, size);

        return ResponseEntity.ok(pageDiamonds);
    }

    // customer
    @GetMapping("/customer/search/filter/paged")
    public ResponseEntity<Page<Diamond>> searchDiamondsPaged_Customer(
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
            @RequestParam(required = false) String diamondName,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Diamond> pageDiamonds = diamondService.searchDiamondsWithFiltersPaged(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondName,
                page, size);

        return ResponseEntity.ok(pageDiamonds);
    }
}
