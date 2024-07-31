package com.example.diamondstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.model.Order;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByCartID(Integer cartID);

    List<Cart> findByAccount_AccountIDAndOrderIsNull(Integer accountID);

    Cart findByAccount_AccountIDAndDiamond_DiamondID(Integer accountID, String diamondID);

    Cart findByAccount_AccountIDAndJewelry_JewelryID(Integer accountID, String jewelryID);

    List<Cart> findByOrder(Order order);

    void deleteByAccount_AccountID(Integer accountID);

    void deleteByOrder_OrderID(Integer orderID);

    List<Cart> findByAccount_AccountID(Integer accountID);

    Cart findByAccountAndDiamond(Account account, Diamond diamond);

    Cart findByAccountAndJewelryAndSizeJewelry(Account account, Jewelry jewelry, Integer sizeJewelry);

    void deleteByDiamond_DiamondID(String diamondID);

    void deleteByJewelry_JewelryID(String jewelryID);

    List<Cart> findByAccountAndJewelry(Account account, Jewelry jewelry);
}