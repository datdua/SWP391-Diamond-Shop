package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Order;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByCartID(Integer cartID);

    List<Cart> findByAccountID(Integer accountID);

    List<Cart> findByAccountIDAndOrderIsNull(int accountID);

    Cart findByAccountIDAndDiamondID(Integer accountID, String diamondID);

    Cart findByAccountIDAndJewelryID(Integer accountID, String jewelryID);

    List<Cart> findByOrder(Order order);
}
