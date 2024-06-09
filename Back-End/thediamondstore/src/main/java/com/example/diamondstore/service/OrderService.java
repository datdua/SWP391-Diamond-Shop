package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Certificate;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.repository.CertificateRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.repository.OrderRepository;
import com.example.diamondstore.repository.PromotionRepository;
import com.example.diamondstore.repository.WarrantyRepository;

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

    @Autowired
    private WarrantyRepository warrantyRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private DiamondRepository diamondRepository;

    @Autowired
    private AccountRepository accountRepository;

    public Order createOrder(int accountID, String deliveryAddress, String promotionCode, Integer pointsToRedeem, String phoneNumber) {
        List<Cart> cartItems = cartRepository.findByAccountIDAndOrderIsNull(accountID);

        if (cartItems.isEmpty()) {
            throw new IllegalArgumentException("Giỏ hàng rỗng");
        }

        // Fetch the Account object
        Account account = accountRepository.findById(accountID)
                .orElseThrow(() -> new IllegalArgumentException("Invalid account ID: " + accountID));

        Order order = new Order();
        order.setAccount(account);  // Set the Account object instead of accountID
        order.setDeliveryAddress(deliveryAddress);
        order.setPhoneNumber(phoneNumber);
        order.setStartorderDate(LocalDateTime.now());
        order.setDeliveryDate(LocalDateTime.now().plusDays(7)); // Ví dụ: giao hàng sau 7 ngày
        order.setOrderStatus("Đang xử lý");

        String diamondID = cartItems.get(0).getDiamondID();
        if (diamondID != null) {
            // lấy certificateImage thông qua certificateID
            String certificateID = diamondRepository.findByDiamondID(diamondID).getCertificationID();
            //nếu diamondID không có certificateID thì không set certificateImage
            if (certificateID != null) {
                Certificate certificate = certificateRepository.findByCertificateID(certificateID);
                if (certificate != null) {
                    order.setCertificateImage(certificate.getcertificateImage());
                }
            }
            // order.setCertificateImage(certificateRepository.findByCertificateID(certificateID).getcertificateImage());

            // lấy warrantyImage thông qua warrantyID
            String warrantyID = diamondRepository.findByDiamondID(diamondID).getWarrantyID();
            //nếu diamondID không có warrantyID thì không set warrantyImage
            if (warrantyID != null) {
                Warranty warranty = warrantyRepository.findByWarrantyID(warrantyID);
                if (warranty != null) {
                    order.setWarrantyImage(warranty.getwarrantyImage());
                }
            }
            // order.setWarrantyImage(warrantyRepository.findByWarrantyID(warrantyID).getwarrantyImage());
        }

        BigDecimal totalOrder = BigDecimal.ZERO;

        for (Cart cart : cartItems) {
            totalOrder = totalOrder.add(cart.getGrossCartPrice());
        }

        Promotion promotion = promotionRepository.findByPromotionCode(promotionCode);
        if (promotion != null) {
            BigDecimal discountAmount = promotion.getDiscountAmount();
            totalOrder = totalOrder.subtract(totalOrder.multiply(discountAmount));
            order.setPromotion(promotion);
        }

        if (pointsToRedeem != null && pointsToRedeem > 0) {
            Customer customer = customerRepository.findById(accountID).orElseThrow(() -> new IllegalArgumentException("Khách hàng không tồn tại"));
            int availablePoints = customer.getPoint();
            if (pointsToRedeem > availablePoints) {
                throw new IllegalArgumentException("Điểm không đủ");
            }
            BigDecimal discount = BigDecimal.valueOf(pointsToRedeem / 100.0);
            totalOrder = totalOrder.subtract(discount.multiply(BigDecimal.valueOf(1000000)));
            customer.setPoint(availablePoints - pointsToRedeem);
            customerRepository.save(customer);
        }

        order.settotalOrder(totalOrder);

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

    public Order getOrder(int orderID) {
        Order order = orderRepository.findByOrderID(orderID);
        order.getCartItems().size(); // This will fetch the cartItems from the database
        return order;
    }

    public List<Order> getOrdersByAccountId(int accountID) {
        Account account = accountRepository.findById(accountID)
                .orElseThrow(() -> new IllegalArgumentException("AccountID không tồn tại"));
        List<Order> orders = orderRepository.findByAccount(account);
        if (orders.isEmpty()) {
            throw new IllegalArgumentException("Chưa có Order nào");
        }
        return orders;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll(Sort.by(Sort.Direction.DESC, "startorderDate"));
    }

    public Object getTotalOrder(Integer orderID) {
        Order order = orderRepository.findByOrderID(orderID);
        if (order == null) {
            throw new IllegalArgumentException("Không tìm thấy Order");
        }
        return order.gettotalOrder();
    }

    
}
