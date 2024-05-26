package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Bill;

public interface BillRepository extends JpaRepository<Bill, Integer>{
    
}
