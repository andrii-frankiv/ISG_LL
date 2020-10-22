package hwList;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<String>();


        list.add("lalala 1");
        list.add("lalala 2");
        list.add("lalala 3");
        list.add("lalala 4");
        list.add("lalala 5");
        list.size();
        list.get(2);
        list.isEmpty();
        list.remove("lalala 3");
        list.size();
        System.out.println(list.getClass().getAnnotation(MyAnnotation.class).message());
        list.get(2);
        //list.clear(); if you want to clear all list
        list.size();
//    list.get(-2); if you want to throw exception
        list.removeAll(List.of("lalala 4", "lalala 1"));
        list.size();
        list.get(1);

    }

}
