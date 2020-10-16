package lesson4;

public class point {
    public point(int x, int y, String color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    int x;
    int y;
    String color;

     public String show(int x, int y, String color){
        return "x - " + x + "y - " + y + "color - " + color;
    }

    @Override
    public String toString() {
        return "point{" +
                "x=" + x +
                ", y=" + y +
                ", color='" + color + '\'' +
                '}';
    }
}
