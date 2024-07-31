package com.example.diamondstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.OrderDetail;
import com.example.diamondstore.model.WarrantyHistory;
import com.example.diamondstore.repository.OrderDetailRepository;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getOrderDetailByOrderID(Integer orderID) {
        return orderDetailRepository.findByOrder_OrderID(orderID);
    }

    public OrderDetail getOrderDetail(Integer orderDetailID) {
        return orderDetailRepository.findById(orderDetailID).orElse(null);
    }

    public List<OrderDetail> getAllOrderDetail() {
        return orderDetailRepository.findAll();
    }

    public List<WarrantyHistory> getWarrantyHistoriesByOrderDetailID(Integer orderDetailID) {
        OrderDetail orderDetail = orderDetailRepository.findById(orderDetailID).orElse(null);
        if (orderDetail != null) {
            return orderDetail.getWarrantyHistories();
        }
        return null;
    }

}
