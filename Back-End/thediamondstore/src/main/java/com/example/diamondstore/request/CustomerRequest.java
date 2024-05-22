package com.example.diamondstore.request;

public class CustomerRequest {

    private Integer point;
    private String accountName;
    private String password;
    private String phoneNumber;

    public CustomerRequest() {
    }

    public CustomerRequest(Integer point, String accountName, String password, String phoneNumber) {
        this.point = point;
        this.accountName = accountName;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }


    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    
}
