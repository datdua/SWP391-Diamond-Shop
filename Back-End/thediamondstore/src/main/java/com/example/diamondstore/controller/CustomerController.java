package com.example.diamondstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Customer;
import com.example.diamondstore.repository.CustomerRepository;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    
    private final CustomerRepository customerRepository;

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Customer>> getCustomers() {
        return ResponseEntity.ok(customerRepository.findAll());
    }

}
