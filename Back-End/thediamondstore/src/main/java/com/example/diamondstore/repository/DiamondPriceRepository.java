package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.diamondstore.model.DiamondPrice;

public interface  DiamondPriceRepository extends  JpaRepository<DiamondPrice, Integer>{

    DiamondPrice findByDiamondID(String string);
    
}
