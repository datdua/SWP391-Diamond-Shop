package com.example.diamondstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.diamondstore.model.Warranty;

public interface WarrantyRepository extends CrudRepository<Warranty, String> {
    Warranty findByWarrantyID(String warrantyID);
}
