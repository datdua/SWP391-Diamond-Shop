package com.example.diamondstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.diamondstore.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    Customer findByAccountID(Integer accountID);

}
