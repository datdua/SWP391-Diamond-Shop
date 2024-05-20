package com.example.diamondstore.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "jewelry")
public class Jewelry {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "jewelryID")
    private int jewelryID;

    @Column(name = "diamondID")
    private int diamondID;

    @Column(name = "type")
    private String type;

    @Column(name = "material")
    private String material;

    @Column(name = "sex")
    private String sex;

    @Column(name = "size")
    private String size;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    public Jewelry() {
    }

    public Jewelry(Integer jewelryID, Integer diamondID,String type, String material, String sex, String size, String description,
            String image) {
        this.jewelryID = jewelryID;
        this.diamondID = diamondID;
        this.type = type;
        this.material = material;
        this.sex = sex;
        this.size = size;
        this.description = description;
        this.image = image;
    }

    public Integer getJewelryID() {
        return jewelryID;
    }

    public void setJewelryID(Integer jewelryID) {
        this.jewelryID = jewelryID;
    }

    public Integer getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(Integer diamondID) {
        this.diamondID = diamondID;
    }

    

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    
}
