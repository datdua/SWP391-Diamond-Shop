package com.example.diamondstore.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Diamond")
public class Diamond {
    @Id
    @Column(name = "diamondID")
    private String diamondID;

    @Column(name = "warrantityID")
    private String warrantityID;

    @Column(name = "certificationID")
    private String certificationID;


    @Column(name = "carat_size")
    private Float carat_size;

    @Column(name = "diamondPrice")
    private Float diamondPrice;

    @Column(name = "carat_weight")
    private Float carat_weight;

    @Column(name = "color")
    private String color;

    @Column(name = "cut")
    private String cut;

    @Column(name = "clarity")
    private String clarity;

    @Column(name = "image")
    private String image;

    @Column(name = "shape")
    private String shape;

    @Column(name = "diamondName")
    private String diamondName;

    @Column(name = "origin")
    private String origin;

    // Add your getters and setters here

    public Diamond() {
    }

    public Diamond(Float carat_size, Float carat_weight, String certificationID, String clarity, String color, String cut, String diamondID, String diamondName, Float diamondPrice, String image, String origin, String shape, String warrantityID) {
        this.carat_size = carat_size;
        this.carat_weight = carat_weight;
        this.certificationID = certificationID;
        this.clarity = clarity;
        this.color = color;
        this.cut = cut;
        this.diamondID = diamondID;
        this.diamondName = diamondName;
        this.diamondPrice = diamondPrice;
        this.image = image;
        this.origin = origin;
        this.shape = shape;
        this.warrantityID = warrantityID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getWarrantityID() {
        return warrantityID;
    }

    public void setWarrantityID(String warrantityID) {
        this.warrantityID = warrantityID;
    }

    public String getCertificationID() {
        return certificationID;
    }

    public void setCertificationID(String certificationID) {
        this.certificationID = certificationID;
    }


    public Float getCarat_size() {
        return carat_size;
    }

    public void setCarat_size(Float carat_size) {
        this.carat_size = carat_size;
    }

    public Float getDiamondPrice() {
        return diamondPrice;
    }

    public void setDiamondPrice(Float diamondPrice) {
        this.diamondPrice = diamondPrice;
    }

    public Float getCarat_weight() {
        return carat_weight;
    }

    public void setCarat_weight(Float carat_weight) {
        this.carat_weight = carat_weight;
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

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public String getDiamondName() {
        return diamondName;
    }

    public void setDiamondName(String diamondName) {
        this.diamondName = diamondName;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }


    
}