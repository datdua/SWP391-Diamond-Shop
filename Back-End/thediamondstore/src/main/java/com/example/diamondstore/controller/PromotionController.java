package com.example.diamondstore.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.repository.PromotionRepository;


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

}
