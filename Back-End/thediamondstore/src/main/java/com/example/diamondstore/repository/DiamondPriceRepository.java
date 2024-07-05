package com.example.diamondstore.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.diamondstore.model.DiamondPrice;

public interface  DiamondPriceRepository extends  JpaRepository<DiamondPrice, Integer>, JpaSpecificationExecutor<DiamondPrice> {

    DiamondPrice findByDiamondPriceID(Integer diamondPriceID);
    
    DiamondPrice findByDiamondID(String diamondID);

    List<DiamondPrice> findAllByDiamondID(String diamondID);

    List<DiamondPrice> findByCaratSize(BigDecimal caratSize);

    void deleteByDiamondID(String diamondID);
}
