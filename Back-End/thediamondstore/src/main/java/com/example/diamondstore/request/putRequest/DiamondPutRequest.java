package com.example.diamondstore.request.putRequest;

import java.math.BigDecimal;

public class DiamondPutRequest {

    private String warrantyID;
    private String certificationID;
    private Float carat_size;
    private BigDecimal diamondEntryPrice;
    private Float carat_weight;
    private String color;
    private String cut;
    private String clarity;
    private String diamondImage;
    private String shape;
    private String diamondName;
    private String origin;

    public DiamondPutRequest() {
    }

    public DiamondPutRequest(Float carat_size, Float carat_weight, String certificationID, String clarity, String color, String cut, String diamondImage, String diamondName, BigDecimal diamondEntryPrice, String origin, String shape, String warrantyID) {
        this.carat_size = carat_size;
        this.carat_weight = carat_weight;
        this.certificationID = certificationID;
        this.clarity = clarity;
        this.color = color;
        this.cut = cut;
        this.diamondImage = diamondImage;
        this.diamondName = diamondName;
        this.diamondEntryPrice = diamondEntryPrice;
        this.origin = origin;
        this.shape = shape;
        this.warrantyID = warrantyID;
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
