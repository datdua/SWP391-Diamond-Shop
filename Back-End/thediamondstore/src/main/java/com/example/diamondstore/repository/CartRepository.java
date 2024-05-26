package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{
    
    Cart findByCartID(Integer cartID);
    Cart findByAccountID(Integer accountID);
    Cart findByDiamondID(String diamondID);
    Cart findByJewelryID(String jewelryID);
    Cart findByQuantity(Integer quantity);
    Cart findByTotalPrice(float totalPrice);
}
