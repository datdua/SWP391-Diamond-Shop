package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Order;


public interface OrderRepository extends JpaRepository<Order, Integer> {

    Order findByOrderID(int orderID);
}
