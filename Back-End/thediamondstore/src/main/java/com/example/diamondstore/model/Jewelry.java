package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jewelry")
public class Jewelry {

    @Id
    @Column(name = "jewelryID")
    private String jewelryID;

    @Column(name = "jewelryName")
    private String jewelryName;

    @Column(name = "gender")
    private String gender;

    @Column(name = "jewelryImage")
    private String jewelryImage;

    @Column(name = "jewelryPrice", precision = 8, scale = 2)
    private BigDecimal jewelryPrice;

    @Column(name = "grossJewelryPrice", precision = 8, scale = 2)
    private BigDecimal grossJewelryPrice;

    public Jewelry() {
    }

    public Jewelry(String jewelryID, String gender, BigDecimal jewelryPrice,
            String jewelryImage, String jewelryName, BigDecimal grossJewelryPrice) {
        this.jewelryID = jewelryID;
        this.gender = gender;
        this.jewelryImage = jewelryImage;
        this.jewelryPrice = jewelryPrice;
        this.jewelryName = jewelryName;
        this.grossJewelryPrice = grossJewelryPrice;
    }

    public BigDecimal getGrossJewelryPrice() {
        return grossJewelryPrice;
    }

    public void setGrossJewelryPrice(BigDecimal grossJewelryPrice) {
        this.grossJewelryPrice = grossJewelryPrice;
    }

    public String getJewelryID() {
        return jewelryID;
    }

    public void setJewelryID(String jewelryID) {
        this.jewelryID = jewelryID;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public BigDecimal getJewelryPrice() {
        return jewelryPrice;
    }

    public void setJewelryPrice(BigDecimal jewelryPrice) {
        this.jewelryPrice = jewelryPrice;
    }

    public String getjewelryImage() {
        return jewelryImage;
    }

    public void setjewelryImage(String jewelryImage) {
        this.jewelryImage = jewelryImage;
    }

    public String getJewelryName() {
        return jewelryName;
    }

    public void setJewelryName(String jewelryName) {
        this.jewelryName = jewelryName;
    }
}
