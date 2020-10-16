package lesson4;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

//        int[] x = {6, 5, 4, 3, 2,1};
//        int[] y = {6, 5, 4, 3, 2,1};
//        String[] color = {"red", "blue", "green", "yellow", "black", "green1", "red2"};
        point[] point = new point[6];
        Object object = new point(1, 1, "asdsa");

        for (int i = 0; i < point.length; i++) {
            point[i] = new point(i, i, "color" + i);
        }

        System.out.println(Arrays.toString(point));
//        point.show();
    }

    public static void showSome(int[] x, int[] y, String[] color) {
        for (int i = 0; i < x.length; i++) {
            System.out.println();
        }
    }
}
