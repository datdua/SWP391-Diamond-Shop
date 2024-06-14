package com.example.diamondstore.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderDetailID;

    @ManyToOne
    @JoinColumn(name = "orderID", nullable = false)
    private Order order;

    @Column(name = "accountID", nullable = false)
    private Integer accountID;

    @Column(name = "diamondID")
    private String diamondID;

    @Column(name = "jewelryID")
    private String jewelryID;

    @Column(name = "diamondName")
    private String diamondName;

    @Column(name = "jewelryName")
    private String jewelryName;

    @Column(name = "diamondImage")
    private String diamondImage;

    @Column(name = "jewelryImage")
    private String jewelryImage;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "sizeJewelry")
    private Integer sizeJewelry;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "grossCartPrice", nullable = false)
    private BigDecimal grossCartPrice;

    @Column(name = "totalPrice", nullable = false)
    private BigDecimal totalPrice;

    public OrderDetail() {
    }


    public OrderDetail(Integer orderDetailID, Order order, Integer accountID, String diamondID, String jewelryID,
            String diamondName, String jewelryName, String diamondImage, String jewelryImage, Integer quantity,
            Integer sizeJewelry, BigDecimal price, BigDecimal grossCartPrice, BigDecimal totalPrice) {
        this.orderDetailID = orderDetailID;
        this.order = order;
        this.accountID = accountID;
        this.diamondID = diamondID;
        this.jewelryID = jewelryID;
        this.diamondName = diamondName;
        this.jewelryName = jewelryName;
        this.diamondImage = diamondImage;
        this.jewelryImage = jewelryImage;
        this.quantity = quantity;
        this.sizeJewelry = sizeJewelry;
        this.price = price;
        this.grossCartPrice = grossCartPrice;
        this.totalPrice = totalPrice;
    }



    public Integer getOrderDetailID() {
        return orderDetailID;
    }

    public void setOrderDetailID(Integer orderDetailID) {
        this.orderDetailID = orderDetailID;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
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

    public String getDiamondName() {
        return diamondName;
    }

    public void setDiamondName(String diamondName) {
        this.diamondName = diamondName;
    }

    public String getJewelryName() {
        return jewelryName;
    }

    public void setJewelryName(String jewelryName) {
        this.jewelryName = jewelryName;
    }

    public String getDiamondImage() {
        return diamondImage;
    }

    public void setDiamondImage(String diamondImage) {
        this.diamondImage = diamondImage;
    }

    public String getJewelryImage() {
        return jewelryImage;
    }

    public void setJewelryImage(String jewelryImage) {
        this.jewelryImage = jewelryImage;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSizeJewelry() {
        return sizeJewelry;
    }

    public void setSizeJewelry(Integer sizeJewelry) {
        this.sizeJewelry = sizeJewelry;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getGrossCartPrice() {
        return grossCartPrice;
    }

    public void setGrossCartPrice(BigDecimal grossCartPrice) {
        this.grossCartPrice = grossCartPrice;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    
    // Getters and setters
}
