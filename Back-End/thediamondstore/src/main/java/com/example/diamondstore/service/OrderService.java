package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.repository.CartRepository;
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

    public Order createOrder(int accountID, String deliveryAddress, Integer promotionID) {
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
            cart.setOrder(order);
        }

        if (promotionID != null) {
            Optional<Promotion> promotion = promotionRepository.findById(promotionID);
            if (promotion.isPresent()) {
                BigDecimal discountAmount = promotion.get().getDiscountAmount();
                totalAmount = totalAmount.subtract(totalAmount.multiply(discountAmount));
                order.setPromotion(promotion.get());
            }
        }

        order.setTotalAmount(totalAmount);
        order.setCartItems(cartItems);

        orderRepository.save(order);

        return order;
    }
}
