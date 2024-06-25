package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DiamondPrice")
public class DiamondPrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diamondPriceID")
    private Integer diamondPriceID;

    @Column(name = "diamondID")
    private String diamondID;
    
    @Column(name = "diamondEntryPrice", precision = 16, scale = 2)
    private BigDecimal diamondEntryPrice;

    @Column(name = "clarity")
    private String clarity;

    @Column(name = "color")
    private String color;

    @Column(name = "caratSize", precision = 16, scale = 2)
    private BigDecimal caratSize;

    public DiamondPrice() {
    }

    public DiamondPrice(Integer diamondPriceID, String diamondID, BigDecimal diamondEntryPrice, String clarity,
            String color, BigDecimal caratSize) {
        this.diamondPriceID = diamondPriceID;
        this.diamondID = diamondID;
        this.diamondEntryPrice = diamondEntryPrice;
        this.clarity = clarity;
        this.color = color;
        this.caratSize = caratSize;
    }

    public Integer getDiamondPriceID() {
        return diamondPriceID;
    }

    public void setDiamondPriceID(Integer diamondPriceID) {
        this.diamondPriceID = diamondPriceID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public BigDecimal getDiamondEntryPrice() {
        return diamondEntryPrice;
    }

    public void setDiamondEntryPrice(BigDecimal diamondEntryPrice) {
        this.diamondEntryPrice = diamondEntryPrice;
    }

    public String getClarity() {
        return clarity;
    }

    public void setClarity(String clarity) {
        this.clarity = clarity;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigDecimal getCaratSize() {
        return caratSize;
    }

    public void setCaratSize(BigDecimal caratSize) {
        this.caratSize = caratSize;
    }


}
