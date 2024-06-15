package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    Order findByOrderID(int orderID);

    List<Order> findByAccount(Account account);

    Order getByOrderID(int orderID);

    List<Order> findByOrderStatus(String orderStatus);
}
