package com.example.diamondstore.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Order;
import com.example.diamondstore.repository.OrderRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;





@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Order>> getOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }
    
    @GetMapping("/{orderID}")
    public ResponseEntity<Order> getOrder(@PathVariable int orderID) {
        Order order = orderRepository.findByOrderID(orderID);
        if (order == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(order);
    }

    @PostMapping("/create")
    public ResponseEntity<Order> createCertificate(@RequestBody Order order) {
        Order existingOrder = orderRepository.findByOrderID(order.getOrderID());
        if (existingOrder != null) {
            return ResponseEntity.badRequest().build();
        }
        orderRepository.save(order);
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderID}")
    public ResponseEntity<Order> updateCertificate(@PathVariable int orderID, @RequestBody Order order) {
        Order existingOrder = orderRepository.findByOrderID(orderID);
        if (existingOrder == null) {
            return ResponseEntity.notFound().build();
        }
        order.setOrderID(orderID);
        return ResponseEntity.ok(orderRepository.save(order));
    }

    @DeleteMapping("/{orderID}")
    public ResponseEntity<String> deleteOrder(@PathVariable int orderID) {
        Order existingOrder = orderRepository.findByOrderID(orderID);
        if (existingOrder == null) {
            return ResponseEntity.notFound().build();
        }
        orderRepository.delete(existingOrder);
        return ResponseEntity.ok("Order deleted successfully");
    }
    
}
