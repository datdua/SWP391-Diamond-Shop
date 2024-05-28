package com.example.diamondstore.request;

public class RegisterRequet {

    private String accountName;
    private String password;
    private String email;
    private String phoneNumber;

    public RegisterRequet() {
    }

    public RegisterRequet(String accountName, String password, String email, String phoneNumber) {
        this.accountName = accountName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
