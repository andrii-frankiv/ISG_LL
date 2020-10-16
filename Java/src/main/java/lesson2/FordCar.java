package lesson2;

public class FordCar extends Car {

    private String country;
    public String newCountry;

    public void showSome() {
        System.out.println("something");
    }

    private int driveFord() {
        return 2 + 2;
    }

    public void setCountry(String newCountry) {
        if (newCountry.length() <= 12) {
            this.country = newCountry;
        }
    }
    
}