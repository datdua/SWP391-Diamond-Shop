package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.DiamondPrice;

public interface  DiamondPriceRepository extends  JpaRepository<DiamondPrice, Integer>{

    DiamondPrice findByDiamondPriceID(Integer diamondPriceID);
    
    DiamondPrice findByDiamondID(String diamondID);

    List<DiamondPrice> findAllByDiamondID(String diamondID);

    public List<DiamondPrice> findByCaratSize(Float caratSize);
}
