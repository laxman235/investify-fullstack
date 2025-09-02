package com.investify.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private UUID txnId;

    @ManyToOne(optional = true)
    private User user;

    private Double amount;
    private String type; // income | expense
    private String category;
    private LocalDate date;
    @Column(length = 1000)
    private String notes;

    public UUID getTxnId() { return txnId; }
    public void setTxnId(UUID txnId) { this.txnId = txnId; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
