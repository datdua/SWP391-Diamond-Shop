package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Diamond;

@Repository
public interface DiamondRepository extends JpaRepository<Diamond, String>, JpaSpecificationExecutor<Diamond> {

    Diamond findByDiamondID(String diamondID);

    List<Diamond> findByColor(String color);

    List<Diamond> findByDiamondNameLike(String diamondNamePattern);
}
