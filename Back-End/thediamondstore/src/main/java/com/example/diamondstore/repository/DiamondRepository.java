package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Diamond;

@Repository
public interface DiamondRepository extends JpaRepository<Diamond, String> {
    Diamond findByDiamondID(String diamondID);
    List<Diamond> findByColor(String color);
    // List<Diamond> findByCut(String cut);
    // List<Diamond> findByCarat_weightBetween(Float min, Float max);
    // List<Diamond> findByDiamondPriceBetween(Float min, Float max);
    // List<Diamond> findByClarity(String clarity);
    // List<Diamond> findByOrigin(String origin);
}