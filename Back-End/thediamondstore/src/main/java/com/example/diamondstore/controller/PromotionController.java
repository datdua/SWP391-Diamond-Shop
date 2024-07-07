package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.request.PromotionRequest;
import com.example.diamondstore.request.putRequest.PromotionPutRequest;
import com.example.diamondstore.service.PromotionService;

@RestController
@RequestMapping("/api/promotion")
public class PromotionController {

    @Autowired
    private final PromotionService promotionService;

    public PromotionController(PromotionService promotionService) {
        this.promotionService = promotionService;
    }

    // admin
    @GetMapping("/get-all")
    public ResponseEntity<Iterable<Promotion>> getAllPromotion_Admin() {
        return ResponseEntity.ok(promotionService.getAllPromotions());
    }

    // admin
    @GetMapping("/manager/{promotionID}")
    public ResponseEntity<Promotion> getPromotionByID_Admin(@PathVariable Integer promotionID) {
        Promotion promotion = promotionService.getPromotionById(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    // customer
    @GetMapping("/customer/{promotionID}")
    public ResponseEntity<Promotion> getPromotionByID_Customer(@PathVariable Integer promotionID) {
        Promotion promotion = promotionService.getPromotionById(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    // admin
    @GetMapping("/manager/code/{promotionCode}")
    public ResponseEntity<Promotion> getPromotionByCode_Manager(@PathVariable String promotionCode) {
        Promotion promotion = promotionService.getPromotionByCode(promotionCode);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    // customer
    @GetMapping("/customer/code/{promotionCode}")
    public ResponseEntity<Promotion> getPromotionByCode_Customer(@PathVariable String promotionCode) {
        Promotion promotion = promotionService.getPromotionByCode(promotionCode);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    // admin
    @PutMapping(value = "/manager/update/{promotionID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updatePromotion_Manager(@PathVariable Integer promotionID, @RequestBody PromotionPutRequest promotionPutRequest) {
        return promotionService.updatePromotion(promotionID, promotionPutRequest);
    }

    // admin
    @DeleteMapping(value = "/manager/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deletePromotions_Manager(@RequestBody List<Integer> promotionIDs) {
        try {
            promotionService.deletePromotions(promotionIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // admin
    @PostMapping(value = "/manager/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createPromotion_Manager(@RequestBody PromotionRequest promotionRequest) {
        return promotionService.createPromotion(promotionRequest);
    }

    // admin
    @PostMapping("/manager/update-statuses")
    public ResponseEntity<Map<String, String>> updatePromotionStatusesAuto_Manager() {
        promotionService.updatePromotionStatusesAuto();
        return ResponseEntity.ok(Collections.singletonMap("message", "Trạng thái khuyến mãi đã được cập nhật"));
    }
}
