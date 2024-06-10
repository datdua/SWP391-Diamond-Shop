package com.example.diamondstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.diamondstore.model.OrderHistory;
import com.example.diamondstore.repository.OrderHistoryRepository;

@Service
public class OrderHistoryService {

    private OrderHistoryRepository orderHistoryRepository;

    public OrderHistoryService(OrderHistoryRepository orderHistoryRepository) {
        this.orderHistoryRepository = orderHistoryRepository;
    }

    //tạo lịch sử đơn hàng từ đơn hàng
    public static OrderHistory createOrderHistoryByOrder(Integer OrderID, Integer accountID) {
        OrderHistory orderHistory = new OrderHistory();
        orderHistory.setOrderID(OrderID);
        orderHistory.setAccountID(accountID);
        orderHistory.setOrderhistoryStatus("Đang xử lí");
        orderHistory.setTransactionNo(0);
        
        return orderHistory;
    }

    //lấy lịch sử đơn hàng
    public List<OrderHistory> getAllOrderHistory(Integer accountID) {
        return orderHistoryRepository.findByAccountID(accountID);
    }
}
