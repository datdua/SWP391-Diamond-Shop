package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diamondstore.model.Customer;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Transactional
    public Order placeOrder(Order order) {
        // Find the customer by accountID
        Optional<Customer> customerOptional = customerRepository.findById(order.getAccountID());
        if (!customerOptional.isPresent()) {
            throw new RuntimeException("Customer not found with accountID: " + order.getAccountID());
        }

        Customer customer = customerOptional.get();

        // Deduct points based on order totalAmount
        BigDecimal totalAmount = order.getTotalAmount();
        int pointsToDeduct = totalAmount.intValue(); // Example conversion, adjust as needed
        if (customer.getPoint() < pointsToDeduct) {
            throw new RuntimeException("Insufficient points to place the order.");
        }

        customer.setPoint(customer.getPoint() - pointsToDeduct);
        customerRepository.save(customer);

        // Save the order
        return orderRepository.save(order);
    }
}

