package com.example.diamondstore.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Certificate")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "certificateID")
    private Integer certificateID;

    @Column(name = "diamondID", nullable = false)
    private Integer diamondID;

    @Column(name = "expirationDate", nullable = false)
    private java.sql.Timestamp expirationDate;

    @Column(name = "image", nullable = false)
    private String image;

    public Certificate() {
    }

    public Certificate(Integer certificateID, Integer diamondID, java.sql.Timestamp expirationDate, String image) {
        this.certificateID = certificateID;
        this.diamondID = diamondID;
        this.expirationDate = expirationDate;
        this.image = image;
    }
    // Getters and setters
    public Integer getCertificateID() {
        return certificateID;
    }

    public void setCertificateID(Integer certificateID) {
        this.certificateID = certificateID;
    }

    public Integer getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(Integer diamondID) {
        this.diamondID = diamondID;
    }

    public java.sql.Timestamp getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(java.sql.Timestamp expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}