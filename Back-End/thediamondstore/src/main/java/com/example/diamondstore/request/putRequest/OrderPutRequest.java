package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class OrderPutRequest {

    private Integer accountID;
    private LocalDateTime startorderDate;
    private String orderStatus;
    private LocalDateTime deliveryDate;
    private BigDecimal totalOrder;
    private String deliveryAddress;
    private String phoneNumber;
    private String certificateImage;
    private String warrantyImage;
    private String promotionCode;

    public OrderPutRequest() {
    }

    public OrderPutRequest(Integer accountID, String certificateImage, String deliveryAddress, LocalDateTime deliveryDate, String orderStatus, String phoneNumber, String promotionCode, LocalDateTime startorderDate, BigDecimal totalOrder, String warrantyImage) {
        this.accountID = accountID;
        this.certificateImage = certificateImage;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.orderStatus = orderStatus;
        this.phoneNumber = phoneNumber;
        this.promotionCode = promotionCode;
        this.startorderDate = startorderDate;
        this.totalOrder = totalOrder;
        this.warrantyImage = warrantyImage;
    }

    public Integer getAccountID() {
        return accountID;
    }

    public void setAccountID(Integer accountID) {
        this.accountID = accountID;
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

    public BigDecimal getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(BigDecimal totalOrder) {
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

    public String getPromotionCode() {
        return promotionCode;
    }

    public void setPromotionCode(String promotionCode) {
        this.promotionCode = promotionCode;
    }

    

}