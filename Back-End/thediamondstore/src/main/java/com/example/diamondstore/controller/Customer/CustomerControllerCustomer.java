package com.example.diamondstore.controller.Customer;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Customer;
import com.example.diamondstore.service.CustomerService;

@RestController
@RequestMapping("/api/customers/customer")
public class CustomerControllerCustomer {

    private final CustomerService customerService;

    public CustomerControllerCustomer(CustomerService customerService) {
        this.customerService = customerService;
    }
    
    @GetMapping("/{accountID}")
    public ResponseEntity<Customer> getCustomerById_Customer(@PathVariable Integer accountID) {
        Optional<Customer> customer = customerService.getCustomerById(accountID);
        if (customer.isPresent()) {
            return ResponseEntity.ok(customer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
