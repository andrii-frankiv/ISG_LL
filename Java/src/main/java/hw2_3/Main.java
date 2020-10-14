package hw2_3;

public class Main {
    public static void main(String[] args) {
        Salary hourly = new Hourly_employee();
        Salary monthly = new Monthly_employee();
        System.out.println("daily salary: " + hourly.employeeSalary(10));
        System.out.println("monthly salary: " + monthly.employeeSalary(400));
    }
}
