package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Collection;

public interface CollectionRepository extends JpaRepository<Collection, Integer>{
    Collection findByCollectionID(int collectionID);
    
}
