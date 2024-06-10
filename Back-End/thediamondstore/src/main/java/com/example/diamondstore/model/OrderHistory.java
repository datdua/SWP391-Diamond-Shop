package com.example.diamondstore.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "OrderHistory")
public class OrderHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderhistoryID")
    private Integer orderhistoryID;

    @Column(name = "orderID")
    private Integer orderID;

    @Column(name = "createDate")
    private LocalDateTime createDate;

    @Column(name = "orderhistoryStatus")
    private String orderhistoryStatus;

    @Column(name = "accountID")
    private Integer accountID;

    @Column(name = "TransactionNo")
    private Integer TransactionNo;

    public OrderHistory() {
    }

    public OrderHistory(LocalDateTime createDate, Integer orderID, Integer orderhistoryID, String orderhistoryStatus, 
        Integer accountID, Integer TransactionNo) {
        this.createDate = createDate;
        this.orderID = orderID;
        this.orderhistoryID = orderhistoryID;
        this.orderhistoryStatus = orderhistoryStatus;
        this.accountID = accountID;
        this.TransactionNo = TransactionNo;
    }

    public Integer getTransactionNo() {
        return TransactionNo;
    }

    public void setTransactionNo(Integer TransactionNo) {
        this.TransactionNo = TransactionNo;
    }

    public Integer getAccountID() {
        return accountID;
    }

    public void setAccountID(Integer accountID) {
        this.accountID = accountID;
    }

    public Integer getOrderhistoryID() {
        return orderhistoryID;
    }

    public void setOrderhistoryID(Integer orderhistoryID) {
        this.orderhistoryID = orderhistoryID;
    }

    public Integer getOrderID() {
        return orderID;
    }

    public void setOrderID(Integer orderID) {
        this.orderID = orderID;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public String getOrderhistoryStatus() {
        return orderhistoryStatus;
    }

    public void setOrderhistoryStatus(String orderhistoryStatus) {
        this.orderhistoryStatus = orderhistoryStatus;
    }
}
