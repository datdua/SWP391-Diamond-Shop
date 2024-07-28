package com.example.diamondstore.request.putRequest;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class WarrantyPutRequest {

    private String diamondID;
    private String warrantyImage;

    public WarrantyPutRequest() {
    }

    public WarrantyPutRequest(String diamondID, LocalDateTime expirationDate, String warrantyImage) {
        this.diamondID = diamondID;
        this.warrantyImage = warrantyImage;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getWarrantyImage() {
        return warrantyImage;
    }

    public void setWarrantyImage(String warrantyImage) {
        this.warrantyImage = warrantyImage;
    }
}
