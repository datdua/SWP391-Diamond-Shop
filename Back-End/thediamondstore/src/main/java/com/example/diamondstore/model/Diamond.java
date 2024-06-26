package com.example.diamondstore.model;

import java.math.BigDecimal;

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

    @Column(name = "warrantyID")
    private String warrantyID;

    @Column(name = "certificationID")
    private String certificationID;

    @Column(name = "caratSize")
    private Float caratSize;

    @Column(name = "diamondEntryPrice", precision = 16, scale = 2)
    private BigDecimal diamondEntryPrice;

    @Column(name = "grossDiamondPrice", precision = 16, scale = 2)
    private BigDecimal grossDiamondPrice;

    @Column(name = "carat_weight")
    private Float carat_weight;

    @Column(name = "color")
    private String color;

    @Column(name = "cut")
    private String cut;

    @Column(name = "clarity")
    private String clarity;

    @Column(name = "diamondImage")
    private String diamondImage;

    @Column(name = "shape")
    private String shape;

    @Column(name = "diamondName")
    private String diamondName;

    @Column(name = "origin")
    private String origin;

    public Diamond() {
    }

    public Diamond(String diamondID, String warrantyID, String certificationID, Float caratSize, BigDecimal diamondEntryPrice, Float carat_weight, String color, String cut, String clarity, String diamondImage, String shape, String diamondName, String origin, BigDecimal grossDiamondPrice) {
        this.diamondID = diamondID;
        this.warrantyID = warrantyID;
        this.certificationID = certificationID;
        this.caratSize = caratSize;
        this.diamondEntryPrice = diamondEntryPrice;
        this.carat_weight = carat_weight;
        this.color = color;
        this.cut = cut;
        this.clarity = clarity;
        this.diamondImage = diamondImage;
        this.shape = shape;
        this.diamondName = diamondName;
        this.origin = origin;
        this.grossDiamondPrice = grossDiamondPrice;
    }

    public BigDecimal getGrossDiamondPrice() {
        return grossDiamondPrice;
    }

    public void setGrossDiamondPrice(BigDecimal grossDiamondPrice) {
        this.grossDiamondPrice = grossDiamondPrice;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getWarrantyID() {
        return warrantyID;
    }

    public void setWarrantyID(String warrantyID) {
        this.warrantyID = warrantyID;
    }

    public String getCertificationID() {
        return certificationID;
    }

    public void setCertificationID(String certificationID) {
        this.certificationID = certificationID;
    }

    public Float getCaratSize() {
        return caratSize;
    }

    public void setCaratSize(Float caratSize) {
        this.caratSize = caratSize;
    }

    public BigDecimal getDiamondEntryPrice() {
        return diamondEntryPrice;
    }

    public void setDiamondEntryPrice(BigDecimal diamondEntryPrice) {
        this.diamondEntryPrice = diamondEntryPrice;
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

    public String getDiamondImage() {
        return diamondImage;
    }

    public void setDiamondImage(String diamondImage) {
        this.diamondImage = diamondImage;
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
