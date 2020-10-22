package hwEvenAndFibonachi;

import java.util.Comparator;
import java.util.Iterator;
import java.util.Optional;
import java.util.Spliterator;
import java.util.function.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {

        //  Even
        System.out.println("Even: ");
        Stream<Integer> stream1 = Stream.iterate(0, i -> i + 1)//actually we can do it without filter. Like iterate(0, i -> i + 2), but it's cheating, so... :)
                .filter(x -> (x % 2 == 0))
                .limit(10);
        stream1.forEach(s -> System.out.println(s));

        //  Fibonachi

        System.out.println("Fibonachi: ");

        stream1 = Stream.iterate(new int[]{0, 1}, x -> new int[]{x[1], x[0] + x[1]})
                .map(x -> x[0])
                .limit(10);
        stream1.forEach(s1 -> System.out.println(s1));
    }
}
