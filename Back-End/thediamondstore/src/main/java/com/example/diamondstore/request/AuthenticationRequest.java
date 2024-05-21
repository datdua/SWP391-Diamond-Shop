package com.example.diamondstore.request;


public class AuthenticationRequest {
    private String accountName;
    private String password;

    // Need a default constructor for JSON Parsing
    public AuthenticationRequest() {}

    public AuthenticationRequest(String accountName, String password) {
        this.setAccountName(accountName);
        this.setPassword(password);
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
    
}