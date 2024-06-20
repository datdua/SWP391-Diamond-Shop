package com.example.diamondstore.request;

import java.math.BigDecimal;

public class DiamondPriceRequest {
    
    private String diamondID;
    private BigDecimal diamondEntryPrice;
    private String clarity;
    private String color;
    private Float carat_size;

    public DiamondPriceRequest() {
    }

    public DiamondPriceRequest(String diamondID, BigDecimal diamondEntryPrice, String clarity, String color, Float carat_size) {
        this.diamondID = diamondID;
        this.diamondEntryPrice = diamondEntryPrice;
        this.clarity = clarity;
        this.color = color;
        this.carat_size = carat_size;
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

    public Float getCarat_size() {
        return carat_size;
    }

    public void setCarat_size(Float carat_size) {
        this.carat_size = carat_size;
    }

    
}
