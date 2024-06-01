package com.example.diamondstore.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
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

    @Column(name = "totalAmount", precision = 18, scale = 2)
    private BigDecimal totalAmount;

    @Column(name = "deliveryAddress")
    private String deliveryAddress;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "certificateImage")
    private String certificateImage;

    @Column(name = "warrantyImage")
    private String warrantyImage;

    @ManyToOne
    @JoinColumn(name = "promotionID", referencedColumnName = "promotionID", nullable = true)
    private Promotion promotion;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Cart> cartItems;

    // getters and setters
    public Order() {
    }

    public Order(Integer orderID, Account account, LocalDateTime startorderDate, String orderStatus, LocalDateTime deliveryDate,
            BigDecimal totalAmount, String deliveryAddress, String phoneNumber, String certificateImage, String warrantyImage,
            Promotion promotion, List<Cart> cartItems) {
        this.orderID = orderID;
        this.account = account;
        this.startorderDate = startorderDate;
        this.orderStatus = orderStatus;
        this.deliveryDate = deliveryDate;
        this.totalAmount = totalAmount;
        this.deliveryAddress = deliveryAddress;
        this.phoneNumber = phoneNumber;
        this.certificateImage = certificateImage;
        this.warrantyImage = warrantyImage;
        this.promotion = promotion;
        this.cartItems = cartItems;
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

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
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

    public String getCertificateImage() {
        return certificateImage;
    }

    public void setCertificateImage(String certificateImage) {
        this.certificateImage = certificateImage;
    }

    public String getWarrantyImage() {
        return warrantyImage;
    }

    public void setWarrantyImage(String warrantyImage) {
        this.warrantyImage = warrantyImage;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public List<Cart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<Cart> cartItems) {
        this.cartItems = cartItems;
    }

    

    
    
}
