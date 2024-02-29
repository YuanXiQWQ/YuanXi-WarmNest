/**
 * 关于方法重载的示例
 *
 * @author YuanXi
 * @version 2024.1.31
 */
package Example;
/*方法重载:一个类中可以定义多个名称相同,参数列表不同的方法.
重载的方法是完全不同的方法,只有名称相同而已
*/

/**
 * 重载构成条件(满足任一即可):
 *     1.形参类型不同
 *     2.形参个数不同
 *     3.形参顺序不同
 */
public class Overload {

    /**
     * 形参类型不同构成重载
     */
    void Method() {
        System.out.println("a");
    }

    void Method(int a) {
        System.out.println(a);
    }
    //无形参方法与整数型形参方法重载


    /**
     * 形参个数不同构成重载
     */
    void Method(int a, int b) {
        System.out.println(a + b);
    }
    //包含两个整数型形参的方法与包含一个整数型形参方法构成重载


    /**
     * 形参顺序不同构成重载
     */
    void Method(int a, double b) {
        System.out.println(a + b);
    }

    void Method(double a, int b) {
        System.out.println(a + b);
    }
    //包含两种类型形参的方法的顺序不同构成重载
}

/**
 *   下列条件无法构成重载:
 *     1.只有返回值不同
 *     2.只有形参名称不同
 */
//class NotAnOverload {
//
//    /**
//     * 只有返回值不同
//     */
//    int MethodN() {
//        System.out.println("a");
//        return 1;
//    }
//
//    boolean MethodN() {
//        System.out.println("a");
//        return true;
//    }
//    //报错,方法重复
//
//    /**
//     * 只有形参名称不同
//     */
//    void MethodN(int nameA) {
//        System.out.println(nameA);
//    }
//
//    void MethodN(int nameB) {
//        System.out.println(nameB);
//    }
//    //报错,方法重复
//}
