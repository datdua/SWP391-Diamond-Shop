package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.repository.OrderRepository;
import com.example.diamondstore.repository.PromotionRepository;

@Service
public class OrderService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public Order createOrder(int accountID, String deliveryAddress, Integer promotionID, Integer pointsToRedeem) {
        List<Cart> cartItems = cartRepository.findByAccountIDAndOrderIsNull(accountID);

        if (cartItems.isEmpty()) {
            throw new IllegalArgumentException("Giỏ hàng rỗng");
        }

        Order order = new Order();
        order.setAccountID(accountID);
        order.setDeliveryAddress(deliveryAddress);
        order.setStartorderDate(LocalDateTime.now());
        order.setDeliveryDate(LocalDateTime.now().plusDays(7)); // Ví dụ: giao hàng sau 7 ngày
        order.setOrderStatus("Đang xử lý");

        BigDecimal totalAmount = BigDecimal.ZERO;

        for (Cart cart : cartItems) {
            totalAmount = totalAmount.add(cart.getTotalPrice());
        }

        if (promotionID != null) {
            Optional<Promotion> promotion = promotionRepository.findById(promotionID);
            if (promotion.isPresent()) {
                BigDecimal discountAmount = promotion.get().getDiscountAmount();
                totalAmount = totalAmount.subtract(totalAmount.multiply(discountAmount));
                order.setPromotion(promotion.get());
            }
        }

        if (pointsToRedeem != null && pointsToRedeem > 0) {
            Customer customer = customerRepository.findById(accountID).orElseThrow(() -> new IllegalArgumentException("Khách hàng không tồn tại"));
            int availablePoints = customer.getPoint();
            if (pointsToRedeem > availablePoints) {
                throw new IllegalArgumentException("Điểm không đủ");
            }
            BigDecimal discount = BigDecimal.valueOf(pointsToRedeem / 100.0);
            totalAmount = totalAmount.subtract(discount.multiply(BigDecimal.valueOf(1000000)));
            customer.setPoint(availablePoints - pointsToRedeem);
            customerRepository.save(customer);
        }

        order.setTotalAmount(totalAmount);
        
        // Save the order first
        order = orderRepository.save(order);

        for (Cart cart : cartItems) {
            cart.setOrder(order);
            cartRepository.save(cart); // Save each cart item
        }

        // Update customer points with earned points
        Customer customer = customerRepository.findById(accountID).orElseThrow(() -> new IllegalArgumentException("Khách hàng không tồn tại"));
        customer.setPoint(customer.getPoint() + 100);
        customerRepository.save(customer);

        return order;
    }
}
