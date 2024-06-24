package com.example.diamondstore.controller;

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

    @GetMapping
    public ResponseEntity<List<Diamond>> getDiamonds() {
        return ResponseEntity.ok(diamondService.getAllDiamonds());
    }

    @GetMapping("/get/{diamondID}")
    public ResponseEntity<Diamond> getDiamond(@PathVariable String diamondID) {
        Diamond diamond = diamondService.getDiamondById(diamondID);
        if (diamond == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(diamond);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Map<String, String>> createDiamond(@RequestBody Diamond diamond) {
        return diamondService.createDiamond(diamond);
    }

    @PutMapping(value = "/update/{diamondID}")
    public ResponseEntity<Map<String, String>> updateDiamond(@PathVariable String diamondID, @RequestBody DiamondPutRequest diamondPutRequest) {
        Map<String, String> response = diamondService.updateDiamond(diamondID, diamondPutRequest);
        if (response.containsKey("message") && response.get("message").equals("Không tìm thấy kim cương")) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/{diamondID}")
    public ResponseEntity<Map<String, String>> deleteDiamond(@PathVariable String diamondID) {
        Map<String, String> response = diamondService.deleteDiamond(diamondID);
        if (response.containsKey("message") && response.get("message").equals("Không tìm thấy kim cương")) {
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/searchByColor")
    public ResponseEntity<List<Diamond>> searchDiamonds(@RequestParam String color) {
        List<Diamond> diamonds = diamondService.searchDiamondsByColor(color);
        return ResponseEntity.ok(diamonds);
    }

    @GetMapping("/paged/diamonds")
    public ResponseEntity<Page<Diamond>> getAllDiamondsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Page<Diamond> pageDiamonds = diamondService.getAllDiamondsPaged(page, size);
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

        List<Diamond> diamonds = diamondService.searchDiamondsWithFilters(
                minDiamondPrice, maxDiamondPrice, origin, cut, shape, color,
                minCaratSize, maxCaratSize, minCaratWeight, maxCaratWeight, clarity, diamondNameLike);
        
        return ResponseEntity.ok(diamonds);
    }

    @GetMapping("/search/filter/paged")
    public ResponseEntity<Page<Diamond>> searchDiamondsPaged(
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
