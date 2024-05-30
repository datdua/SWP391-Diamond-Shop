package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

    @Column(name = "sizeJewelry", nullable = false)
    private Integer sizeJewelry;

    @ManyToOne
    @JoinColumn(name = "orderID", nullable = true)
    private Order order;

    // getters and setters
    public Cart() {
    }

    public Cart(Integer accountID, Integer cartID, String diamondID, String jewelryID, Order order, Integer quantity, BigDecimal totalPrice, Integer sizeJewelry) {
        this.accountID = accountID;
        this.cartID = cartID;
        this.diamondID = diamondID;
        this.jewelryID = jewelryID;
        this.order = order;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.sizeJewelry = sizeJewelry;
    }

    //getters and setters size
    public Integer getsizeJewelry() {
        return sizeJewelry;
    }

    public void setSizeJewelry(Integer sizeJewelry) {
        this.sizeJewelry = sizeJewelry;
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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

}
