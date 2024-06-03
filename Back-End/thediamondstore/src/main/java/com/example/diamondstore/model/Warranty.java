package com.example.diamondstore.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Warranty")
public class Warranty {

    @Id
    @Column(name = "warrantyID")
    private String warrantyID;

    @Column(name = "diamondID", nullable = false)
    private String diamondID;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "expirationDate", nullable = false)
    private LocalDateTime expirationDate;

    @Column(name = "warrantyImage")
    private String warrantyImage;

    public Warranty() {
    }

    public Warranty(String warrantyID, String diamondID, LocalDateTime expirationDate, String warrantyImage) {
        this.warrantyID = warrantyID;
        this.diamondID = diamondID;
        this.expirationDate = expirationDate;
        this.warrantyImage = warrantyImage;
    }

    public String getWarrantyID() {
        return warrantyID;
    }

    public void setWarrantyID(String warrantyID) {
        this.warrantyID = warrantyID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public LocalDateTime getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDateTime expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getwarrantyImage() {
        return warrantyImage;
    }

    public void setwarrantyImage(String warrantyImage) {
        this.warrantyImage = warrantyImage;
    }
}
