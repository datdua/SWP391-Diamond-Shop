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

    @Column(name = "diamondID")
    private String diamondID;

    @Column(name = "jewelryName")
    private String jewelryName;

    @Column(name = "size")
    private String size;

    @Column(name = "gender")
    private String gender;

    @Column(name = "jewelryImage")
    private String jewelryImage;

    @Column(name = "jewelryPrice", precision = 8, scale = 2)
    private BigDecimal jewelryPrice;

    public Jewelry() {
    }

    public Jewelry(String jewelryID, String diamondID, String gender, String size, BigDecimal jewelryPrice,
            String jewelryImage, String jewelryName) {
        this.jewelryID = jewelryID;
        this.diamondID = diamondID;
        this.size = size;
        this.gender = gender;
        this.jewelryImage = jewelryImage;
        this.jewelryPrice = jewelryPrice;
        this.jewelryName = jewelryName;
    }

    public String getJewelryID() {
        return jewelryID;
    }

    public void setJewelryID(String jewelryID) {
        this.jewelryID = jewelryID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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
