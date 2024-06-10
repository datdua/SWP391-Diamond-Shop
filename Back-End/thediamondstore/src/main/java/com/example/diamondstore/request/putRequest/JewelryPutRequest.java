package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;

public class JewelryPutRequest {

    private String jewelryName;
    private String gender;
    private String jewelryImage;
    private BigDecimal jewelryPrice;

    // Add your getters and setters here
    public JewelryPutRequest() {
    }

    public JewelryPutRequest(String jewelryName, String gender, String jewelryImage, BigDecimal jewelryPrice) {
        this.jewelryName = jewelryName;
        this.gender = gender;
        this.jewelryImage = jewelryImage;
        this.jewelryPrice = jewelryPrice;
    }

    // getters and setters...
    public String getJewelryName() {
        return jewelryName;
    }

    public void setJewelryName(String jewelryName) {
        this.jewelryName = jewelryName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getJewelryImage() {
        return jewelryImage;
    }

    public void setJewelryImage(String jewelryImage) {
        this.jewelryImage = jewelryImage;
    }

    public BigDecimal getJewelryPrice() {
        return jewelryPrice;
    }

    public void setJewelryPrice(BigDecimal jewelryPrice) {
        this.jewelryPrice = jewelryPrice;
    }
}
