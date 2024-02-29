package Class;

/**
 * P63程序执行过程的内存分析详解
 *
 * @author YuanXi
 * @version 2024.2.23
 */
public class Person {
    String name;
    int age;

    public static void main(String[] args) {
        //创建p1对象
        Person p1 = new Person();
        p1.age = 24;
        p1.name = "张三";
        p1.show();
        //创建p2对象
        Person p2 = new Person();
        p2.age = 25;
        p2.name = "李四";
        p2.show();

        Person p3 = p1;

        p3.age = 80;
        System.out.println(p1.age);
        //p3.age指向了p1的地址,修改跟着地址修改,结果改到了原值.所以最后p1引用的age也是80.
    }

    public void show() {
        System.out.println(name);
    }
}
