package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import com.example.diamondstore.request.putRequest.OrderPutRequest;

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

    @Transactional
    public Order createOrder(int accountID, String deliveryAddress, String promotionCode, Integer pointsToRedeem, String phoneNumber) {
        List<Cart> cartItems = cartRepository.findByAccountIDAndOrderIsNull(accountID);

        if (cartItems.isEmpty()) {
            throw new IllegalArgumentException("Giỏ hàng rỗng");
        }

        Account account = accountRepository.findById(accountID)
                .orElseThrow(() -> new IllegalArgumentException("Invalid account ID: " + accountID));

        Order order = new Order();
        order.setAccount(account);
        order.setDeliveryAddress(deliveryAddress);
        order.setPhoneNumber(phoneNumber);
        order.setStartorderDate(LocalDateTime.now());
        order.setDeliveryDate(LocalDateTime.now().plusDays(7));
        order.setOrderStatus("Đang xử lý");

        if (account.getPhoneNumber() == null) {
            account.setPhoneNumber(phoneNumber);
        }
        if (account.getAddressAccount() == null) {
            account.setAddressAccount(deliveryAddress);
        }
        accountRepository.save(account);

        // Lưu Order trước
        order = orderRepository.save(order);

        String diamondID = cartItems.get(0).getDiamondID();
        if (diamondID != null) {
            String certificateID = diamondRepository.findByDiamondID(diamondID).getCertificationID();
            if (certificateID != null) {
                Certificate certificate = certificateRepository.findByCertificateID(certificateID);
                if (certificate != null) {
                    order.setCertificateImage(certificate.getcertificateImage());
                }
            }

            String warrantyID = diamondRepository.findByDiamondID(diamondID).getWarrantyID();
            if (warrantyID != null) {
                Warranty warranty = warrantyRepository.findByWarrantyID(warrantyID);
                if (warranty != null) {
                    order.setWarrantyImage(warranty.getwarrantyImage());
                }
            }
        }

        BigDecimal totalOrder = BigDecimal.ZERO;
        for (Cart cart : cartItems) {
            totalOrder = totalOrder.add(cart.getGrossCartPrice());
            cart.setOrder(order);  // Associate cart items with the order
            cart.setCartStatus("Đang chờ thanh toán"); // New status to indicate pending payment
            cartRepository.save(cart);
        }

        Promotion promotion = promotionRepository.findByPromotionCode(promotionCode);
        if (promotion != null) {
            BigDecimal discountAmount = promotion.getDiscountAmount();
            totalOrder = totalOrder.subtract(totalOrder.multiply(discountAmount));
            order.setPromotionCode(promotionCode);
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

        // Lưu Order một lần nữa để cập nhật totalOrder
        order = orderRepository.save(order);

        Customer customer = customerRepository.findById(accountID).orElseThrow(() -> new IllegalArgumentException("Khách hàng không tồn tại"));
        customer.setPoint(customer.getPoint() + 100);
        customerRepository.save(customer);
        return order;
    }


    public void cancelOrder(int orderID) {
    Order order = orderRepository.findById(orderID)
            .orElseThrow(() -> new IllegalArgumentException("Order not found"));

    if (!order.getOrderStatus().equals("Đang xử lý")) {
        throw new IllegalStateException("Chỉ Order có Status 'Đang xử lý' mới được xóa");
    }

    // Delete the Cart items associated with the Order
    List<Cart> carts = order.getCartItems();
    for (Cart cart : carts) {
        cartRepository.delete(cart);
    }

    // Now delete the Order
    orderRepository.delete(order);
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

    // public String deleteOrder(int orderID) {
    //     Order order = orderRepository.findByOrderID(orderID);
    //     if (order == null) {
    //         throw new IllegalArgumentException("Không tìm thấy Order");
    //     }
    //     orderRepository.delete(order);
    //     return "Xóa Order thành công";
    // }

//     public Map<String,String> updateOrder(int orderID, OrderPutRequest orderPutRequest) {
//     Order existingOrder = orderRepository.findByOrderID(orderID);
//     if (existingOrder == null) {
//         return Collections.singletonMap("message", "Không tìm thấy kim cương");
//     }
//     existingOrder.setAccount(accountRepository.findById(orderPutRequest.getAccountID())
//             .orElseThrow(() -> new IllegalArgumentException("AccountID không tồn tại")));
//     existingOrder.setPhoneNumber(orderPutRequest.getPhoneNumber());
//     existingOrder.setDeliveryAddress(orderPutRequest.getDeliveryAddress());
//     existingOrder.setOrderStatus(orderPutRequest.getOrderStatus());
//     existingOrder.setDeliveryDate(orderPutRequest.getDeliveryDate());
//     existingOrder.setStartorderDate(orderPutRequest.getStartorderDate());
//     existingOrder.settotalOrder(orderPutRequest.getTotalOrder());
//     existingOrder.setWarrantyImage(orderPutRequest.getWarrantyImage());
//     existingOrder.setCertificateImage(orderPutRequest.getCertificateImage());
//     existingOrder.setPromotionCode(orderPutRequest.getPromotionCode());
//     orderRepository.save(existingOrder);
//     return Collections.singletonMap("message", "Cập nhật thành công");
// }
    @Transactional
    public Map<String, String> updateOrder(int orderID, OrderPutRequest orderPutRequest) {
        try {
            Order existingOrder = orderRepository.findById(orderID)
                    .orElseThrow(() -> new IllegalArgumentException("Order not found"));

            existingOrder.setDeliveryAddress(orderPutRequest.getDeliveryAddress());
            existingOrder.setOrderStatus(orderPutRequest.getOrderStatus());
            existingOrder.setDeliveryDate(orderPutRequest.getDeliveryDate());
            existingOrder.setCertificateImage(orderPutRequest.getCertificateImage());
            existingOrder.setWarrantyImage(orderPutRequest.getWarrantyImage());
            
            // Handle promotion code and totalOrder update
            String newPromotionCode = orderPutRequest.getPromotionCode();
            BigDecimal totalOrder = existingOrder.gettotalOrder();

            if (newPromotionCode != null && !newPromotionCode.isEmpty()) {
                Promotion promotion = promotionRepository.findByPromotionCode(newPromotionCode);
                if (promotion != null) {
                    BigDecimal discountAmount = promotion.getDiscountAmount();
                    totalOrder = totalOrder.subtract(totalOrder.multiply(discountAmount));
                    existingOrder.setPromotionCode(newPromotionCode);
                }
            }

            existingOrder.settotalOrder(totalOrder);
            orderRepository.save(existingOrder);
            return Collections.singletonMap("message", "Cập nhật thành công");
        } catch (Exception e) {
            return Collections.singletonMap("message", "Cập nhật thất bại");
        }
    }

    public List<Order> getOrdersByStatus(String orderStatus) {
        return orderRepository.findByOrderStatus(orderStatus);
    }

    public Page<Order> getAllOrdersPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return orderRepository.findAll(pageable);
    }
}

