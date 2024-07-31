package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.WarrantyHistory;



public interface WarrantyHistoryRepository  extends JpaRepository<WarrantyHistory, Integer> {
    
    WarrantyHistory findByWarrantyHistoryID(Integer warrantyHistoryID);

    void deleteByWarranty_WarrantyIDIn(List<String> warrantyIDs);

}
