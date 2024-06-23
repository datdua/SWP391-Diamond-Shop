package com.example.diamondstore.request;

public class AccountRequest {
    
    private String accountName;
    private String password;
    private String role;
    private String phoneNumber;
    private String email;
    private String addressAccount;

    public AccountRequest() {
    }

    public AccountRequest(String accountName, String password, String role, String phoneNumber, String email, String addressAccount) {
        this.accountName = accountName;
        this.password = password; // Không mã hóa mật khẩu tại đây
        this.role = role;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.addressAccount = addressAccount;
    }

    // Getters và setters
    // Không thay đổi gì tại đây

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddressAccount() {
        return addressAccount;
    }

    public void setAddressAccount(String addressAccount) {
        this.addressAccount = addressAccount;
    }
}
