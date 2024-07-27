package com.example.diamondstore.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentID")
    private Integer paymentID;

    @Column(name = "orderID")
    private Integer orderID;

    @Column(name = "paymentMethod")
    private String paymentMethod;

    @Column(name = "paymentStatus")
    private String paymentStatus;

    @Column(name = "transDate")
    private String transDate;

    @Column(name = "bankCode")
    private String bankCode;

    @Column(name = "transactionNo", nullable = true)
    private Integer transactionNo;

    @Column(name = "responseCode")
    private String responseCode;

    @Column(name = "amount", precision = 18, scale = 2)
    private BigDecimal amount;

    public Payment() {
    }

    public Payment(Integer paymentID, Integer orderID, String paymentMethod, String paymentStatus, String transDate, 
                    String bankCode, Integer transactionNo, String responseCode, BigDecimal amount) {
        this.paymentID = paymentID;
        this.orderID = orderID;
        this.paymentMethod = paymentMethod;
        this.paymentStatus = paymentStatus;
        this.transDate = transDate;
        this.bankCode = bankCode;
        this.transactionNo = transactionNo;
        this.responseCode = responseCode;
        this.amount = amount;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Integer getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(Integer paymentID) {
        this.paymentID = paymentID;
    }

    public Integer getOrderID() {
        return orderID;
    }

    public void setOrderID(Integer orderID) {
        this.orderID = orderID;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getTransDate() {
        return transDate;
    }

    public void setTransDate(String transDate) {
        this.transDate = transDate;
    }

    public String getBankCode() {
        return bankCode;
    }

    public void setBankCode(String bankCode) {
        this.bankCode = bankCode;
    }

    public Integer getTransactionNo() {
        return transactionNo;
    }

    public void setTransactionNo(Integer transactionNo) {
        this.transactionNo = transactionNo;
    }

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }
}
