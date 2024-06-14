package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.OrderDetail;

public interface OrderDetailRepository  extends JpaRepository<OrderDetail, Integer>{
    
}
