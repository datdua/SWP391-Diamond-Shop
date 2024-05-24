package com.example.diamondstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.diamondstore.model.Order;

public interface OrderRepository extends CrudRepository<Order, Integer> {

    Order findByOrderID(int orderID);
}
