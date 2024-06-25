package com.example.diamondstore.DTO;

import java.math.BigDecimal;
import java.time.LocalDate;

public class OrderSummaryDTO {

    private LocalDate date;
    private BigDecimal totalOrder;

    // constructor
    public OrderSummaryDTO(LocalDate date, BigDecimal totalOrder) {
        this.date = date;
        this.totalOrder = totalOrder;
    }

    // getters and setters
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public BigDecimal getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(BigDecimal totalOrder) {
        this.totalOrder = totalOrder;
    }
}
