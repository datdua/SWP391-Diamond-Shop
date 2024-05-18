package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Diamond;

/**
 *
 * @author DELL
 */
@Repository
public interface DiamondRepository extends JpaRepository<Diamond, Integer> {
    Diamond findByDiamondID(Integer diamondID);
    //List<Diamond> findByNameContaining(String name);
     List<Diamond> findByColor(String color);
    // List<Diamond> findByCut(String cut);
    // List<Diamond> findByCaratWeightBetween(Double min, Double max);
    // List<Diamond> findByPriceBetween(Double min, Double max);
    // List<Diamond> findByClarity(String clarity);
    // List<Diamond> findByOrigin(String origin);

}