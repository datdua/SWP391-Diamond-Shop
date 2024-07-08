package com.example.diamondstore.controller.Jewelry;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
import com.example.diamondstore.service.JewelryService;

@RestController
@RequestMapping("/api/jewelry/manager")
public class JewelryControllerManager {
    
    private final JewelryService jewelryService;

    public JewelryControllerManager(JewelryService jewelryService) {
        this.jewelryService = jewelryService;
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Map<String, String>> createJewelry_Admin(@RequestBody Jewelry jewelry) {
        return jewelryService.createJewelry(jewelry);
    }

    @PutMapping("/update/{jewelryID}")
    public ResponseEntity<Map<String, String>> updateJewelry_Admin(@PathVariable String jewelryID, @RequestBody JewelryPutRequest jewelryPutRequest) {
        Map<String, String> response = jewelryService.updateJewelry(jewelryID, jewelryPutRequest);
        if ("Trang sức không tồn tại".equals(response.get("message"))) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteJewelrys_Admin(@RequestBody List<String> jewelryIDs) {
        try {
            jewelryService.deleteJewelry(jewelryIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các trang sức thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }
}