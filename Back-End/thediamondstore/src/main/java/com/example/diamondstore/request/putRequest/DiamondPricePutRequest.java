package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;

public class DiamondPricePutRequest {
    
    private String diamondID;
    private String clarity;
    private String color;
    private Float carat_size;
    private BigDecimal diamondEntryPrice;


    public DiamondPricePutRequest() {
    }

    public DiamondPricePutRequest(String diamondID, String clarity, String color, Float carat_size, BigDecimal diamondEntryPrice) {
        this.diamondID = diamondID;
        this.clarity = clarity;
        this.color = color;
        this.carat_size = carat_size;
        this.diamondEntryPrice = diamondEntryPrice;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
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


    public BigDecimal getDiamondEntryPrice() {
        return diamondEntryPrice;
    }

    public void setDiamondEntryPrice(BigDecimal diamondEntryPrice) {
        this.diamondEntryPrice = diamondEntryPrice;
    }
}
