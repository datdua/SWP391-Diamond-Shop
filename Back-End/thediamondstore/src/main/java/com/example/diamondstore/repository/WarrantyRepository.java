package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Warranty;

public interface WarrantyRepository extends JpaRepository<Warranty, String> {

    Warranty findByWarrantyID(String warrantyID);

    List<Warranty> findByDiamondIDIsNull();

    List<Warranty> findByJewelryIDIsNull();
}
