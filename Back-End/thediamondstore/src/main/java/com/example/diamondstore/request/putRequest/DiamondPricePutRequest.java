package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;

public class DiamondPricePutRequest {
    
    private String diamondID;
    private String clarity;
    private String color;
    private Float caratSize;
    private BigDecimal diamondEntryPrice;


    public DiamondPricePutRequest() {
    }

    public DiamondPricePutRequest(String diamondID, String clarity, String color, Float caratSize, BigDecimal diamondEntryPrice) {
        this.diamondID = diamondID;
        this.clarity = clarity;
        this.color = color;
        this.caratSize = caratSize;
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
}
