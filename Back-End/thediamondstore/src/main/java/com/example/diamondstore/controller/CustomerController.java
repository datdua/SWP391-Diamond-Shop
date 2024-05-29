package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.request.CustomerRequest;
import com.example.diamondstore.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;

    public CustomerController(AccountRepository accountRepository, CustomerRepository customerRepository) {
        this.accountRepository = accountRepository;
        this.customerRepository = customerRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Customer>> getCustomers() {
        return ResponseEntity.ok(customerRepository.findAll());
    }

    @GetMapping("/{accountID}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer accountID) {
        Optional<Customer> customer = customerRepository.findById(accountID);
        if (customer.isPresent()) {
            return ResponseEntity.ok(customer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(value="/update/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateCustomer(@PathVariable Integer accountID, @RequestBody CustomerRequest updatedCustomerRequest) {
        Optional<Account> optionalAccount = accountRepository.findById(accountID);
        if (optionalAccount.isPresent()) {
            Account account = optionalAccount.get();
            account.setAccountName(updatedCustomerRequest.getAccountName());
            account.setPassword(updatedCustomerRequest.getPassword());
            account.setPhoneNumber(updatedCustomerRequest.getPhoneNumber());
            accountRepository.save(account);

            Customer customer = account.getCustomer();
            if (customer != null) {
                customer.setPoint(updatedCustomerRequest.getPoint());
                customerRepository.save(customer);
            }

            return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Autowired
    private CustomerService customerService;

}
