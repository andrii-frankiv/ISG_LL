package lesson2;

public class Main {
    public static void main(String[] args) {
        Car car = new FordCar();
        FordCar fordCar = new FordCar();
        fordCar.showSome();
        fordCar.drive();
    }
}