package lesson3;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int arr[] = new int[10];
        Scanner in = new Scanner(System.in);
        for (int i = 0; i < 10; i++) {
            System.out.println("please ");
            arr[i] = in.nextInt();

            System.out.println(arr[i]);
        }
//        System.out.println(Arrays.toString(arr));
        int temp;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    System.out.println("lalala");
//                arr[i] += arr[i + 1];
//                arr[i + 1] = arr[i];
//                arr[i] -= arr[i + 1];
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
    }
}
