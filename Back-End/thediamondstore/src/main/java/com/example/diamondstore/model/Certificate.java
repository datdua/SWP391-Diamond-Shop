package com.example.diamondstore.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Certificate")
public class Certificate {

    @Id
    @Column(name = "certificateID")
    private String certificateID;

    @Column(name = "diamondID", nullable = false)
    private String diamondID;

    @Column(name = "expirationDate", nullable = false)
    private java.sql.Timestamp expirationDate;

    @Column(name = "image")
    private String image;

    
    // Add your getters and setters here

    public Certificate() {
    }

    public Certificate(String certificateID, String diamondID, Timestamp expirationDate, String image) {
        this.certificateID = certificateID;
        this.diamondID = diamondID;
        this.expirationDate = expirationDate;
        this.image = image;
    }

    public String getCertificateID() {
        return certificateID;
    }

    public void setCertificateID(String certificateID) {
        this.certificateID = certificateID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public Timestamp getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Timestamp expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    
}