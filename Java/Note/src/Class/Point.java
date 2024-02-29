package Class;

/**
 * P60深入内存分析
 *
 * @author YuanXi
 * @version 2024.2.23
 */
class Point {
    double x, y;

    public Point(double ix, double iy) {
        this.x = ix;
        this.y = iy;
    }

    public static void main(String[] args) {
        Point p1 = new Point(3.0, 4.0);
        Point origin = new Point(0.0, 0.0);
        System.out.println(p1.getDistance(origin));
    }

    public double getDistance(Point p) {
        return Math.sqrt((x - p.x) * (x - p.x) + (y - p.y) * (y - p.y));
    }
}
