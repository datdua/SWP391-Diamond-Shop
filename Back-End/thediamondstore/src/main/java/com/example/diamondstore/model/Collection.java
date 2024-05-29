package com.example.diamondstore.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Collection")
public class Collection {
    
    @Id
    @Column(name = "collectionID")
    private int collectionID;

    @Column(name = "diamondID")
    private String diamondID;

    @Column(name = "diamondImage")
    private String diamondImage;

    @Column(name = "jewelryID")
    private String jewelryID;

    @Column(name = "jewelryImage")
    private String jewelryImage;

    public Collection() {
    }

    public Collection(int collectionID, String diamondID, String diamondImage, String jewelryID, String jewelryImage) {
        this.collectionID = collectionID;
        this.diamondID = diamondID;
        this.diamondImage = diamondImage;
        this.jewelryID = jewelryID;
        this.jewelryImage = jewelryImage;
    }

    public int getCollectionID() {
        return collectionID;
    }

    public void setCollectionID(int collectionID) {
        this.collectionID = collectionID;
    }

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getDiamondImage() {
        return diamondImage;
    }

    public void setDiamondImage(String diamondImage) {
        this.diamondImage = diamondImage;
    }

    public String getJewelryID() {
        return jewelryID;
    }

    public void setJewelryID(String jewelryID) {
        this.jewelryID = jewelryID;
    }

    public String getJewelryImage() {
        return jewelryImage;
    }

    public void setJewelryImage(String jewelryImage) {
        this.jewelryImage = jewelryImage;
    }

    
}
