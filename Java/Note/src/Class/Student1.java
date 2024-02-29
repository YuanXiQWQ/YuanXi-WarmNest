package Class;

/**
 * P65 垃圾回收算法介绍
 *
 * @author yuanxi
 * @version 2024.2.23
 */
public class Student1 {
    String name;
    String friend;

    public static void main(String[] args) {
        Student1 s1 = new Student1();
        Student1 s2 = new Student1();

        s1.friend = s2.toString();
        s2.friend = s1.toString();
        s1 = null;
        s2 = null;
    }
}
