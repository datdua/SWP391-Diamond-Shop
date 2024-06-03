package com.example.diamondstore.controller;

import java.util.Collections;

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
import com.example.diamondstore.repository.PromotionRepository;
import com.example.diamondstore.request.putRequest.PromotionPutRequest;

@RestController
@RequestMapping("/api/promotion")
public class PromotionController {

    private final PromotionRepository promotionRepository;

    public PromotionController(PromotionRepository promotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Promotion>> getAllPromotion() {
        return ResponseEntity.ok(promotionRepository.findAll());
    }

    @GetMapping("/{promotionID}")
    public ResponseEntity<Promotion> getPromotion(Integer promotionID) {
        Promotion promotion = promotionRepository.findByPromotionID(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    @GetMapping("/{promotionCode}")
    public ResponseEntity<Promotion> getPromotion(String promotionCode) {
        Promotion promotion = promotionRepository.findByPromotionCode(promotionCode);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(promotion);
    }

    @PutMapping(value = "/update/{promotionID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updatePromotion(@PathVariable Integer promotionID, @RequestBody PromotionPutRequest promotionPutRequest) {
        Promotion existingPromotion = promotionRepository.findByPromotionID(promotionID);
        if (existingPromotion == null) {
            return ResponseEntity.notFound().build();
        }
        existingPromotion.setPromotionCode(promotionPutRequest.getPromotionCode());
        existingPromotion.setStartDate(promotionPutRequest.getStartDate());
        existingPromotion.setEndDate(promotionPutRequest.getEndDate());
        existingPromotion.setDiscountAmount(promotionPutRequest.getDiscountAmount());
        promotionRepository.save(existingPromotion);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping("/delete/{promotionID}")
    public ResponseEntity<Promotion> deletePromotion(Integer promotionID) {
        Promotion promotion = promotionRepository.findByPromotionID(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        promotionRepository.delete(promotion);
        return ResponseEntity.ok(promotion);
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> createPromotion(@RequestBody Promotion promotion) {
        Promotion existingPromotion = promotionRepository.findByPromotionID(promotion.getPromotionID());
        if (existingPromotion != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Khuyến mãi đã tồn tại"));
        }
        promotionRepository.save(promotion);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }
}
