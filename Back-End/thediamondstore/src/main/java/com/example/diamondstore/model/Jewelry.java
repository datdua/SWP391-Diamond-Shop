package com.example.diamondstore.model;

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

    @Column(name = "sex")
    private String sex;

    @Column(name = "image")
    private String image;

    @Column(name = "jewelryPrice")
    private float jewelryPrice;

    public Jewelry() {
    }

    public Jewelry(String jewelryID, String diamondID, String sex, String size, float jewelryPrice,
            String image, String jewelryName) {
        this.jewelryID = jewelryID;
        this.diamondID = diamondID;
        this.size = size;
        this.sex = sex;
        this.image = image;
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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public float getJewelryPrice() {
        return jewelryPrice;
    }

    public void setJewelryPrice(float jewelryPrice) {
        this.jewelryPrice = jewelryPrice;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getJewelryName() {
        return jewelryName;
    }

    public void setJewelryName(String jewelryName) {
        this.jewelryName = jewelryName;
    }
}
