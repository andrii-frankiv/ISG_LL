package hw2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("input BoxValue");
        Scanner in = new Scanner(System.in);
        Box box = new Box(in.nextInt());
        boolean a;
        System.out.println("input Shapes value");
        do {
//            Shape shape = new Shape(in.nextInt());
            Shape shape = new Shape(in.nextInt());
            a = box.add(shape);
            System.out.println(a);
        }
        while (a);
    }
}