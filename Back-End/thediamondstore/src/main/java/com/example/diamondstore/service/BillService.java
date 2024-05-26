package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.diamondstore.model.Bill;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.repository.BillRepository;
import com.example.diamondstore.repository.CustomerRepository;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Transactional
    public Bill processBillPayment(Bill bill, Integer pointsToRedeem) {
        // Calculate the discount amount
        BigDecimal discountAmount = new BigDecimal(pointsToRedeem);

        // Update bill amount after discount
        BigDecimal finalAmount = bill.getAmount().subtract(discountAmount);
        bill.setAmount(finalAmount);
        bill.setBillDate(LocalDateTime.now());
        bill.setBillStatus("Thanh toán thành công.");

        // Save the bill
        Bill savedBill = billRepository.save(bill);

        // Calculate and add points to customer account
        int earnedPoints = PointsCalculator.calculatePoints(finalAmount);
        Customer customer = bill.getAccount().getCustomer();
        customer.setPoint(customer.getPoint() + earnedPoints - pointsToRedeem);

        // Save updated customer
        customerRepository.save(customer);

        return savedBill;
    }
}
