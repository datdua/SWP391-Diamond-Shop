package com.example.diamondstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Promotion;

@Repository
public interface PromotionRepository extends CrudRepository<Promotion, Integer> {
    Promotion findByPromotionID(Integer promotionID);

    Promotion findByPromotionCode(String promotionCode);
}