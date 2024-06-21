package com.example.diamondstore.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.repository.PromotionRepository;
import com.example.diamondstore.request.putRequest.PromotionPutRequest;

@Service
public class PromotionService {

    @Autowired
    private final PromotionRepository promotionRepository;

    public PromotionService(PromotionRepository promotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    public List<Promotion> getAllPromotions() {
        return promotionRepository.findAll();
    }

    public Promotion getPromotionById(Integer promotionID) {
        return promotionRepository.findByPromotionID(promotionID);
    }

    public Promotion getPromotionByCode(String promotionCode) {
        return promotionRepository.findByPromotionCode(promotionCode);
    }

    public ResponseEntity<Map<String, String>> createPromotion(Promotion promotion) {
        Promotion existingPromotion = promotionRepository.findByPromotionID(promotion.getPromotionID());
        if (existingPromotion != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Khuyến mãi đã tồn tại"));
        }
        promotionRepository.save(promotion);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    public ResponseEntity<Map<String, String>> updatePromotion(Integer promotionID, PromotionPutRequest promotionPutRequest) {
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

    public ResponseEntity<Map<String, String>> deletePromotion(Integer promotionID) {
        Promotion promotion = promotionRepository.findByPromotionID(promotionID);
        if (promotion == null) {
            return ResponseEntity.notFound().build();
        }
        promotionRepository.delete(promotion);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }
}
