package com.example.diamondstore.request.putRequest;


public class JewelryPutRequest {

    private String diamondID;
    private String jewelryName;
    private String size;
    private String gender;
    private String jewelryImage;

    // Add your getters and setters here

    public JewelryPutRequest() {
    }

    public JewelryPutRequest(String diamondID, String jewelryName, String size, String gender, String jewelryImage) {
        this.diamondID = diamondID;
        this.jewelryName = jewelryName;
        this.size = size;
        this.gender = gender;
        this.jewelryImage = jewelryImage;
    }

    
    // getters and setters...

    public String getDiamondID() {
        return diamondID;
    }

    public void setDiamondID(String diamondID) {
        this.diamondID = diamondID;
    }

    public String getJewelryName() {
        return jewelryName;
    }

    public void setJewelryName(String jewelryName) {
        this.jewelryName = jewelryName;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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
}
