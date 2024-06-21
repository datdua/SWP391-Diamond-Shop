package com.example.diamondstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.request.CustomerRequest;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AccountRepository accountRepository;

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

    public long getTotalCustomers() {
        return customerRepository.count();
    }

    public Iterable<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Integer accountID) {
        return customerRepository.findById(accountID);
    }

    @Transactional
    public boolean updateCustomer(Integer accountID, CustomerRequest updatedCustomerRequest) {
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
            return true;
        }
        return false;
    }
}
