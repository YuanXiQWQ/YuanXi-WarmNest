/**
 * 对于private修饰符和 get, set 方法的解释
 *
 * @author YuanXi
 * @version 2024.1.31
 */
package Example;

public class PrivateExample {

    private String MUTT = "MUTT";                               //使用 private 修饰符声明 String 类型的变量 MUTT

    /**
     * 使用getMUTT方法访问 private 变量 MUTT 的值
     *
     * @return MUTT的值
     */
    public String getMUTT() {
        return MUTT;
    }

    /**
     * 使用getMUTT方法访问并修改 private 变量 MUTT 的值
     *
     * @param realMUTT 用于修改MUTT值的变量
     */
    public void setMUTT(String realMUTT) {
        this.MUTT = realMUTT;                                   //使用 this 关键词来引用对象 MUTT 并赋值为 realMUTT 的值
    }

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        PrivateExample privateObject = new PrivateExample();    //创建一个对象
        System.out.println(privateObject.getMUTT());            //由对象调用 getMUTT 方法访问 private 变量 MUTT 的值
        privateObject.setMUTT("刘昱汉");                         //由对象调用 setMUTT 方法修改 private 变量 MUTT 的值
        System.out.println(privateObject.getMUTT());            //再次访问
    }
}
