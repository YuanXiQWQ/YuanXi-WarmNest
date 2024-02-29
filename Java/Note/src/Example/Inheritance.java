/**
 * 对Java继承的示例
 *
 * @author YuanXi
 * @version 2024.1.31
 */
package Example;

class SuperClass {
    public void method() {                          //随便创建一个方法
        System.out.println("这句话的方法来自父类");
    }
}

class Inheritance extends SuperClass {                          //创建继承父类的类 Inheritance

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        Inheritance object = new Inheritance();                 //随便创建一个对象
        object.method();                                        //用这个对象提取继承来的方法
    }
}

final class FinalClass {
    public void method() {                                      //随便创建一个方法
        System.out.println("这句话的方法来自无法被继承的类");
    }
}

//class Test extends FinalClass {                                 //报错,无法继承 final 类
//
//    /**
//     * 开始执行bugs
//     *
//     * @param args arguments
//     */
//    public static void main(String[] args) {
//        Test object = new Test();
//        object.method();
//    }
//}
