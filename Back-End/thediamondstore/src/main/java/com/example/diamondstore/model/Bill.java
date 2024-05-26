package com.example.diamondstore.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "billID")
    private Integer billID;

    @Column(name = "orderID", nullable = false)
    private Integer orderID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accountID", nullable = false)
    private Account account;

    @Column(name = "paymentMethod", nullable = false)
    private String paymentMethod;

    @Column(name = "billDate", nullable = false)
    private LocalDateTime billDate;

    @Column(name = "billStatus", nullable = false)
    private String billStatus;

    @Column(name = "amount", nullable = false)
    private BigDecimal amount;

    public Bill() {
    }

    public Bill(Integer orderID, Account account, String paymentMethod, LocalDateTime billDate, String billStatus,
            BigDecimal amount) {
        this.orderID = orderID;
        this.account = account;
        this.paymentMethod = paymentMethod;
        this.billDate = billDate;
        this.billStatus = billStatus;
        this.amount = amount;
    }

    public Integer getBillID() {
        return billID;
    }

    public void setBillID(Integer billID) {
        this.billID = billID;
    }

    public Integer getOrderID() {
        return orderID;
    }

    public void setOrderID(Integer orderID) {
        this.orderID = orderID;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public LocalDateTime getBillDate() {
        return billDate;
    }

    public void setBillDate(LocalDateTime billDate) {
        this.billDate = billDate;
    }

    public String getBillStatus() {
        return billStatus;
    }

    public void setBillStatus(String billStatus) {
        this.billStatus = billStatus;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

}
