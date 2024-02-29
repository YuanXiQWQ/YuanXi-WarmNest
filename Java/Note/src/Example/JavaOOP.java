/**
 * 关于对象等名词的解释
 *
 * @author YuanXi
 * @version 2024.1.30
 */
package Example;

public class JavaOOP {                                      //使用 class 关键词创建一个名为 JavaOPP 的类
    int x = 10;                                             //创建一个 int 类型的变量 x 并赋值为 10
    //该值属于类属性(类内的变量),访问类属性需要创建类的对象并使用 . 关键字来访问和修改

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */
    public static void main(String[] args) {                //创建公共静态无返回值方法 main 并赋args为String类的参数组
        JavaOOP object = new JavaOOP();                     //使用类名跟着对象名并使用关键词 new 创建一个对象
        TestClass testClassObject = new TestClass();        //从TestClass类中创建一个对象
        System.out.println(testClassObject.xFromTestClass); //调用对象中的变量
        System.out.println(object.x);                       //调用对象中的变量

        //对象对于属性的改变只会局限于对象本身
        JavaOOP change = new JavaOOP();                     //创建一个新的对象
        change.x = 20;                                      //改变该对象中的属性值
        System.out.println(change.x);                       //将会输出20
        System.out.println(object.x);                       //仍然会输出10
    }
}
