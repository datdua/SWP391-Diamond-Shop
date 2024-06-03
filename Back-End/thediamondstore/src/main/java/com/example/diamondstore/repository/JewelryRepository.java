package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Jewelry;

@Repository
public interface JewelryRepository extends JpaRepository<Jewelry, String>, JpaSpecificationExecutor<Jewelry> {

    Jewelry findByJewelryID(String jewelryID);
}
