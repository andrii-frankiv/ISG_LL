package hw1;

public class Main {
    public static void main(String[] args) {
        byte k = 0;
        for(byte i=2; i<=100; i++){
            for(byte j=2; j<i; j++){
                if(i%j==0){
                    k++;
                }
            }
            if(k==0){
                System.out.println(i);
            }
            k=0;
        }
    }
}
