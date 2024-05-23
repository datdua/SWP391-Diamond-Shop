package com.example.diamondstore.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Promotion")
public class Promotion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "promotionID")
    private Integer promotionID;


    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "startDate")
    private LocalDateTime startDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "endDate")
    private LocalDateTime endDate;

    @Column(precision = 8, scale = 2)
    private BigDecimal discountAmount;

    @Column(length = 80)
    private String description;


    public Promotion() {
    }

    public Promotion(String description, BigDecimal discountAmount, LocalDateTime endDate, Integer promotionID, LocalDateTime startDate) {
        this.description = description;
        this.discountAmount = discountAmount;
        this.endDate = endDate;
        this.promotionID = promotionID;
        this.startDate = startDate;
    }

    public Integer getPromotionID() {
        return promotionID;
    }

    public void setPromotionID(Integer promotionID) {
        this.promotionID = promotionID;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public BigDecimal getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(BigDecimal discountAmount) {
        this.discountAmount = discountAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    
}
