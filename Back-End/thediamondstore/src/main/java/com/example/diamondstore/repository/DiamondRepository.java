package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Diamond;

public interface DiamondRepository extends JpaRepository<Diamond, Integer>{

}
