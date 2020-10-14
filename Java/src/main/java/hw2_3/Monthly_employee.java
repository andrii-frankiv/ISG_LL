package hw2_3;

public class Monthly_employee implements Salary {

    @Override
    public int employeeSalary(int salary) {
        salary *= 4;
        return salary;
    }

}
