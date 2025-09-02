package com.investify.dto;

public class BudgetAdviceRequest {
    private double income;
    private double rent;
    private double bills;
    private double goals;

    public double getIncome() { return income; }
    public void setIncome(double income) { this.income = income; }
    public double getRent() { return rent; }
    public void setRent(double rent) { this.rent = rent; }
    public double getBills() { return bills; }
    public void setBills(double bills) { this.bills = bills; }
    public double getGoals() { return goals; }
    public void setGoals(double goals) { this.goals = goals; }
}
