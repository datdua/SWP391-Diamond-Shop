package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    Customer findByAccountID(Integer accountID);

    long count();
}
