package hw2_3;

public class Hourly_employee implements Salary {


    @Override
    public int employeeSalary(int salary) {
        salary *= 8;
        return salary;
    }

}


