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

    @GetMapping
    public ResponseEntity<Iterable<Promotion>> getAllPromotion() {
        return ResponseEntity.ok(promotionService.getAllPromotions());
    }

    @GetMapping("/{promotionID}")
    public ResponseEntity<Promotion> getPromotionByID(@PathVariable Integer promotionID) {
        Promotion promotion = promotionService.getPromotionById(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    @GetMapping("/code/{promotionCode}")
    public ResponseEntity<Promotion> getPromotionByCode(@PathVariable String promotionCode) {
        Promotion promotion = promotionService.getPromotionByCode(promotionCode);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    @PutMapping(value = "/update/{promotionID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updatePromotion(@PathVariable Integer promotionID, @RequestBody PromotionPutRequest promotionPutRequest) {
        return promotionService.updatePromotion(promotionID, promotionPutRequest);
    }

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deletePromotions(@RequestBody List<Integer> promotionIDs) {
    try {
        promotionService.deletePromotions(promotionIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createPromotion(@RequestBody PromotionRequest promotionRequest) {
        return promotionService.createPromotion(promotionRequest);
    }

    @PostMapping("/update-statuses")
    public ResponseEntity<Map<String, String>> updatePromotionStatusesAuto() {
        promotionService.updatePromotionStatusesAuto();
        return ResponseEntity.ok(Collections.singletonMap("message", "Trạng thái khuyến mãi đã được cập nhật"));
    }
}