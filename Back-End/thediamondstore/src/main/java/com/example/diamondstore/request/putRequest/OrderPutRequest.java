package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class OrderPutRequest {

    private String orderStatus;
    private LocalDateTime deliveryDate;
    private String deliveryAddress;
    private String certificateImage;
    private String warrantyImage;
    private String promotionCode;
    private BigDecimal totalOrder;

    public OrderPutRequest() {
    }

    public OrderPutRequest(String certificateImage, String deliveryAddress, LocalDateTime deliveryDate, String orderStatus, String promotionCode, String warrantyImage, BigDecimal totalOrder) {
        this.certificateImage = certificateImage;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.orderStatus = orderStatus;
        this.promotionCode = promotionCode;
        this.warrantyImage = warrantyImage;
        this.totalOrder = totalOrder;
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

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
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

    public BigDecimal getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(BigDecimal totalOrder) {
        this.totalOrder = totalOrder;
    }
}
