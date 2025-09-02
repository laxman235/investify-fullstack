package com.investify.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class User {
    @Id
    @GeneratedValue
    private UUID userId;

    private String name;
    @Column(unique = true)
    private String email;
    private Double salary;

    public UUID getUserId() { return userId; }
    public void setUserId(UUID userId) { this.userId = userId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Double getSalary() { return salary; }
    public void setSalary(Double salary) { this.salary = salary; }
}
