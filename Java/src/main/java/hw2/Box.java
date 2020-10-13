package hw2;

public class Box {
    int value;

    public Box(int boxvalue) {
        this.value = boxvalue;
    }

    public boolean add(Shape shape) {
//        shapes.add(shape);
        if (value >= shape.shapevalue) {
            value -= shape.shapevalue;
            System.out.println("adding shape: " + value);
            return true;
        } else {
            System.out.println("no space");
            return false;
        }
    }
}