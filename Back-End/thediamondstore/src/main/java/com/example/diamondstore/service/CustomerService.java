package com.example.diamondstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diamondstore.model.Customer;
import com.example.diamondstore.repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Transactional
    public boolean deductPoints(int AccountID, int point) {
        Optional<Customer> optionalCustomer = customerRepository.findById(AccountID);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            if (customer.getPoint() >= point) {
                customer.setPoint(customer.getPoint() - point);
                customerRepository.save(customer);
                return true;
            }
        }
        return false;
    }
}
