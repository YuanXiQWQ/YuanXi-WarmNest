/**
 * 对于Java类方法的示例
 *
 * @author YuanXi
 * @version 2024.1.30
 */
package Example;

import java.util.Scanner;

public class ClassMethods {
    static void javaout(String text) {                      //在类中声明方法
        System.out.println(text);
    }
    //static 静态 与 public 公共
    /*
    static 静态方法可以在不创建类的对象的情况下访问, public 公共方法只能通过对象访问
    */

    /**
     * 创建一个静态无返回值方法
     */
    static void staticMethod() {
        System.out.println("这是一个静态方法");
    }

    /**
     * 创建一个公共方法
     */
    public void publicMethod() {
        System.out.println("这是一个公共方法");
    }

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        staticMethod();

        ClassMethods publicProject = new ClassMethods();
        publicProject.publicMethod();

        //与内容无关的部分:
        Scanner input = new Scanner(System.in);
        System.out.println("这部分是用来消掉查错的,它说我从未用过方法");
        String text = input.nextLine();
        javaout(text);
    }
}
