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

    @Column(name = "jewelryEntryPrice", precision = 16, scale = 2)
    private BigDecimal jewelryEntryPrice;

    @Column(name = "grossJewelryPrice", precision = 16, scale = 2)
    private BigDecimal grossJewelryPrice;

    @Column(name = "warrantyID")
    private String warrantyID;

    public Jewelry() {
    }

    public Jewelry(String jewelryID, String gender, BigDecimal jewelryEntryPrice,
            String jewelryImage, String jewelryName, BigDecimal grossJewelryPrice, String warrantyID) {
        this.jewelryID = jewelryID;
        this.gender = gender;
        this.jewelryImage = jewelryImage;
        this.jewelryEntryPrice = jewelryEntryPrice;
        this.jewelryName = jewelryName;
        this.grossJewelryPrice = grossJewelryPrice;
        this.warrantyID = warrantyID;
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

    public BigDecimal getJewelryEntryPrice() {
        return jewelryEntryPrice;
    }

    public void setJewelryEntryPrice(BigDecimal jewelryEntryPrice) {
        this.jewelryEntryPrice = jewelryEntryPrice;
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

    public String getWarrantyID() {
        return warrantyID;
    }

    public void setWarrantyID(String warrantyID) {
        this.warrantyID = warrantyID;
    }
}
