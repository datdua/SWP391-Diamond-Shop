package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cartID;

    @Column(name = "accountID", nullable = false)
    private Integer accountID;

    @Column(name = "diamondID", nullable = false)
    private String diamondID;

    @Column(name = "jewelryID", nullable = false)
    private String jewelryID;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;  

    @Column(name = "totalPrice", nullable = false, precision = 8, scale = 2)
    private BigDecimal totalPrice;

    public Cart() {
    }

    public Cart(Integer accountID, Integer cartID, String diamondID, String jewelryID, Integer quantity, BigDecimal totalPrice) {
        this.accountID = accountID;
        this.cartID = cartID;
        this.diamondID = diamondID;
        this.jewelryID = jewelryID;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    

    public Integer getCartID() {
        return cartID;
    }

    public void setCartID(Integer cartID) {
        this.cartID = cartID;
    }

    public Integer getAccountID() {
        return accountID;
    }

    public void setAccountID(Integer accountID) {
        this.accountID = accountID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getJewelryID() {
        return jewelryID;
    }

    public void setJewelryID(String jewelryID) {
        this.jewelryID = jewelryID;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    
}
