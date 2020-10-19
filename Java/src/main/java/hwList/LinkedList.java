package hwList;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class LinkedList implements List {

    private Node current;
    private int size = 0;
    //private Node head;

    @Override
    public int size() {
        System.out.println(size);
        return size;//should to recreate, bad function xD
    }

    @Override
    public boolean isEmpty() {
        if(current.prev == null){
            System.out.println("empty");
            return true;
        }
        else {
            System.out.println("full");
            return false;
        }
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public boolean add(Object o) {
        if (current == null) {
            current = new Node((String) o, null, null);
            size++;
            System.out.println(size + " : " + current.value);
            return true;
        } else {
            current.next = new Node((String) o, current, null);
            current = current.next;
            size++;
            System.out.println(size + " : " + current.value + " : " + current.prev );
            return true;
        }
    }

    @Override
    public boolean remove(Object o) {
        return false;
    }

    @Override
    public boolean addAll(Collection c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection c) {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public Object get(int index) {
        if (index>=0) {
            Node current1 = current;//for saving tail
            for (int i = size - 1; i > index; i--) {
                current = current.prev;
            }
            System.out.println(current.value);
            current = current1;
        }
        else{
            System.out.println("Try again");
        }
        return null;
    }

    @Override
    public Object set(int index, Object element) {
        return null;
    }

    @Override
    public void add(int index, Object element) {

    }

    @Override
    public Object remove(int index) {
        return null;
    }

    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator listIterator() {
        return null;
    }

    @Override
    public ListIterator listIterator(int index) {
        return null;
    }

    @Override
    public List subList(int fromIndex, int toIndex) {
        return null;
    }

    @Override
    public boolean retainAll(Collection c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection c) {
        return false;
    }

    @Override
    public boolean containsAll(Collection c) {
        return false;
    }

    @Override
    public Object[] toArray(Object[] a) {
        return new Object[0];
    }

    private class Node {
        public String value;
        private Node prev;
        private Node next;

        public Node(String value, Node prev, Node next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }
    }
}
