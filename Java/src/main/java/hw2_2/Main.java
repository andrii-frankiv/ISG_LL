package hw2_2;

import java.security.DigestException;

public class Main {
    public static void main(String[] args) {
        Cow cow = new Cow();
        Dog dog = new Dog();
        Cat cat = new Cat();
        cow.voice();
        dog.voice();
        cat.voice();
    }
}
