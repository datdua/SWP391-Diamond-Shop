package com.example.diamondstore.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderID")
    private Integer orderID;

    @ManyToOne
    @JoinColumn(name = "accountID", nullable = false)
    private Account account;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "startorderDate", nullable = false)
    private LocalDateTime startorderDate;

    @Column(name = "orderStatus")
    private String orderStatus;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "deliveryDate", nullable = false)
    private LocalDateTime deliveryDate;

    @Column(name = "totalOrder", precision = 18, scale = 2)
    private BigDecimal totalOrder;

    @Column(name = "deliveryAddress")
    private String deliveryAddress;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "promotionCode")
    private String promotionCode; // Chỉ lưu trữ promotionCode dưới dạng chuỗi

    @Column(name = "transactionNo")
    private Integer transactionNo;

    @JsonIgnore
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<Cart> cartItems;

    public Order() {
    }

    public Order(Integer orderID, Account account, LocalDateTime startorderDate, String orderStatus, LocalDateTime deliveryDate,
            BigDecimal totalOrder, String deliveryAddress, String phoneNumber, String promotionCode, List<Cart> cartItems, Integer transactionNo) {
        this.orderID = orderID;
        this.account = account;
        this.startorderDate = startorderDate;
        this.orderStatus = orderStatus;
        this.deliveryDate = deliveryDate;
        this.totalOrder = totalOrder;
        this.deliveryAddress = deliveryAddress;
        this.phoneNumber = phoneNumber;
        this.promotionCode = promotionCode;
        this.cartItems = cartItems;
        this.transactionNo = transactionNo;
    }

    public Integer getTransactionNo() {
        return transactionNo;
    }

    public void setTransactionNo(Integer transactionNo) {
        this.transactionNo = transactionNo;
    }

    public Integer getOrderID() {
        return orderID;
    }

    public void setOrderID(Integer orderID) {
        this.orderID = orderID;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
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

    public BigDecimal gettotalOrder() {
        return totalOrder;
    }

    public void settotalOrder(BigDecimal totalOrder) {
        this.totalOrder = totalOrder;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPromotionCode() {
        return promotionCode;
    }

    public void setPromotionCode(String promotionCode) {
        this.promotionCode = promotionCode;
    }

    public List<Cart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<Cart> cartItems) {
        this.cartItems = cartItems;
    }
}
