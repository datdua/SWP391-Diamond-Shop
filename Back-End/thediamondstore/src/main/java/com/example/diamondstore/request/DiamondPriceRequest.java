package com.example.diamondstore.request;

import java.math.BigDecimal;

public class DiamondPriceRequest {
    
    private String diamondID;
    private BigDecimal diamondEntryPrice;
    private String clarity;
    private String color;
    private BigDecimal caratSize;

    public DiamondPriceRequest() {
    }

    public DiamondPriceRequest(String diamondID, BigDecimal diamondEntryPrice, String clarity, String color, BigDecimal caratSize) {
        this.diamondID = diamondID;
        this.diamondEntryPrice = diamondEntryPrice;
        this.clarity = clarity;
        this.color = color;
        this.caratSize = caratSize;
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
