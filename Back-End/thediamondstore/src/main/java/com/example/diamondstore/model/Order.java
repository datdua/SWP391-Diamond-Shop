package com.example.diamondstore.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Orders")
public class Order {
    
    @Id
    @Column(name = "orderID")
    private int orderID;

    @Column(name = "accountID" , nullable = false)
    private int accountID;
    
    @Column(name = "paymentID", nullable = false)
    private int paymentID;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "startorderDate", nullable = false)
    private LocalDateTime startorderDate;

    @Column(name = "orderStatus")
    private String orderStatus;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "deliveryDate", nullable = false)
    private LocalDateTime deliveryDate;

    @Column(name = "diamondID", nullable = false)
    private String diamondID;

    @Column(name = "jewelryID", nullable = false)
    private String jewelryID;

    @ManyToOne
    @JoinColumn(name = "promotionID", referencedColumnName = "promotionID", nullable = true)
    private Promotion promotion;

    

    public Order() {
    }

    public Order(int accountID, LocalDateTime deliveryDate, String diamondID, String jewelryID, int orderID, String orderStatus, int paymentID, Promotion promotion, LocalDateTime startorderDate) {
        this.accountID = accountID;
        this.deliveryDate = deliveryDate;
        this.diamondID = diamondID;
        this.jewelryID = jewelryID;
        this.orderID = orderID;
        this.orderStatus = orderStatus;
        this.paymentID = paymentID;
        this.promotion = promotion;
        this.startorderDate = startorderDate;
    }




    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public int getAccountID() {
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public int getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(int paymentID) {
        this.paymentID = paymentID;
    }

    public LocalDateTime getStartorderDate() {
        return startorderDate;
    }

    public void setStartorderDate(LocalDateTime startorderDate) {
        this.startorderDate = startorderDate;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public LocalDateTime getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDateTime deliveryDate) {
        this.deliveryDate = deliveryDate;
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

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    
    

}

