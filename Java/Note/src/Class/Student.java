package Class;

/**
 * 测试.一个学生类.该类是学生的"图纸".
 *
 * @author YuanXi
 * @version 2024.2.8
 */
public class Student {
    /**
     * 属性:学生ID
     */
    int id;
    /**
     * 属性:学生年龄
     */
    int age;
    /**
     * 属性:学生姓名
     */
    String studentName;

    public static void main(String[] args) {
        Student object1 = new Student();
        //new String.Student(): 创建一个对象,将对象的地址赋值给object1
        System.out.println(object1.id);
        System.out.println(object1.studentName);
        object1.id = 1001;
        object1.studentName = "MUTT";

        object1.study();
        object1.kickBall();
    }

    public void study() {
        System.out.println("学习");
    }

    public void kickBall() {
        System.out.println("踢球");
    }
}