package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Customer;
import com.example.diamondstore.request.CustomerRequest;
import com.example.diamondstore.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<Iterable<Customer>> getCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    @GetMapping("/{accountID}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer accountID) {
        Optional<Customer> customer = customerService.getCustomerById(accountID);
        if (customer.isPresent()) {
            return ResponseEntity.ok(customer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/total")
    public ResponseEntity<Long> getTotalCustomers() {
        long totalCustomers = customerService.getTotalCustomers();
        return new ResponseEntity<>(totalCustomers, HttpStatus.OK);
    }

    @PutMapping(value = "/update/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateCustomer(@PathVariable Integer accountID, @RequestBody CustomerRequest updatedCustomerRequest) {
        boolean isUpdated = customerService.updateCustomer(accountID, updatedCustomerRequest);
        if (isUpdated) {
            return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

   @DeleteMapping("/customers/{accountID}")
    public ResponseEntity<Map<String, String>> deleteCustomer(@PathVariable Integer accountID) {
        return customerService.deleteCustomer(accountID);
    }
}


