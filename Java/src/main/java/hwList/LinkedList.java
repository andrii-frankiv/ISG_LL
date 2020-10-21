package hwList;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class LinkedList<E> implements List<E> {

    private int size = 0;
    private Node head;
    private Node tail;
    //private Node head;

    @Override
    public int size() {
        System.out.println("size: " + size);
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
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
    public boolean add(E o) {
        if (tail == null) {
            tail = new Node((E) o, null, null);
            head = tail;
            size++;
            System.out.println(size + " : " + tail.value + " : " + tail.prev);
            return true;
        } else {
            tail.next = new Node((E) o, tail, null);
            tail = tail.next;
            size++;
            System.out.println(size + " : " + tail.value + " : " + tail.prev);
            return true;
        }
    }

    @Override
    public boolean remove(Object o) {
        Node current = head;   //  for saving
        while (current != null) {
            if (o.equals(current.value)) {
                if (current == head) {
                    head = current.next;
                    head.prev = null;
                }
                System.out.println(current.value + "  deleted");
                if (current.next != null) {
                    current.next.prev = current.prev;
                }
                if (current.prev != null) {
                    current.prev.next = current.next;
                }
                current.prev = null;
                current.next = null;
                size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        if (c.isEmpty()) {
            return false;
        }
        for (E o : c) {
            add(o);
        }
        return true;
    }

    @Override
    public boolean addAll(int index, Collection c) {
        return false;
    }

    @Override
    public void clear() {
        Node temp = head;
        while (temp != null) {
            Node next = temp.next;
            temp.value = null;
            temp.prev = null;
            temp.next = null;
            temp = next;
        }
        size = 0;
        head = null;
        System.out.println("clear.");
    }

    public E get(int index) {
        if (index >= 0 && index < size) {
            Node current = head;//for saving tail
            for (int i = 0; i < index; i++) {
                current = current.next;
            }
            System.out.println(current.value);
            return current.value;
        } else {
            System.out.println("Try again");

            throw new NotCorrectIndexException("Index can't be negative or higher than list size !");
        }
    }

    @Override
    public Object set(int index, Object element) {
        return null;
    }

    @Override
    public void add(int index, Object element) {

    }

    @Override
    public E remove(int index) {
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
    public boolean removeAll(Collection<?> c) {
        if (c.isEmpty()) {
            return false;
        }
        for (Object o : c) {
            remove(o);
        }
        return true;
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
        public E value;
        private Node prev;
        private Node next;

        public Node(E value, Node prev, Node next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }
    }
}
