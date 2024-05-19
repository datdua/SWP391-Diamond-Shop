package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Diamond")
public class Diamond {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diamondID")
    private Integer diamondID;

    @Column(name = "warrantityID")
    private Integer warrantityID;

    @Column(name = "certificationID")
    private Integer certificationID;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "origin")
    private String origin;
    
    @Column(name = "color")
    private String color;

    @Column(name = "cut")
    private String cut;

    @Column(name = "carat_weight")
    private BigDecimal caratWeight;
    
    @Column(name = "clarity")
    private String clarity;

    @Column(name = "image")
    private String image;

    public Diamond() {
    }

    public Diamond(BigDecimal caratWeight, Integer certificationID, String clarity, String color, String cut, String description, Integer diamondID, String image, String origin, BigDecimal price, Integer warrantityID) {
        this.caratWeight = caratWeight;
        this.certificationID = certificationID;
        this.clarity = clarity;
        this.color = color;
        this.cut = cut;
        this.description = description;
        this.diamondID = diamondID;
        this.image = image;
        this.origin = origin;
        this.price = price;
        this.warrantityID = warrantityID;
    }

    public Integer getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(Integer diamondID) {
        this.diamondID = diamondID;
    }

    public Integer getWarrantityID() {
        return warrantityID;
    }

    public void setWarrantityID(Integer warrantityID) {
        this.warrantityID = warrantityID;
    }

    public Integer getCertificationID() {
        return certificationID;
    }

    public void setCertificationID(Integer certificationID) {
        this.certificationID = certificationID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCut() {
        return cut;
    }

    public void setCut(String cut) {
        this.cut = cut;
    }

    public BigDecimal getCaratWeight() {
        return caratWeight;
    }

    public void setCaratWeight(BigDecimal caratWeight) {
        this.caratWeight = caratWeight;
    }

    public String getClarity() {
        return clarity;
    }

    public void setClarity(String clarity) {
        this.clarity = clarity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    

}