package Class;

/**
 * P68 this的本质
 *
 * @author 元夕
 * @version 2024.2.23
 */
@SuppressWarnings("ALL")
public class TestThis {
    int a, b, c;

    TestThis() {
        System.out.println("正要初始化对象:" + this);
    }

    //TestThis();无法调用构造方法
    TestThis(int a, int b) {
        //调用无参的构造方法,并且必须位于第一行
        this();
        //这里都是值得局部变量而不是成员变量
        a = a;
        //这样就趣分类成员变量和局部变量.多数使用this的情况都是因为这个
        this.a = a;
        this.b = b;
    }

    TestThis(int a, int b, int c) {
        //调用带参的构造方法,并且必须位于第一行
        this(a, b);
        this.c = c;
    }


    public static void main(String[] args) {
        TestThis hi = new TestThis(2, 3);
        hi.eat();
    }

    void sing() {

    }

    void eat() {
        System.out.println("当前对象:" + this);
        this.sing();
        System.out.println("你妈喊你回家吃饭!");
    }
}
