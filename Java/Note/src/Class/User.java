package Class;

/**
 * p61方法的重载
 *
 * @author YuanXi
 * @version 2024.2.23
 */
public class User {
    int id;
    String name;
    String pwd;

    public User() {
    }

    public User(int id) {
        /*this.指对象的成员变量,形参名称与成员变量名称相同的时候
         * id = id表示的左边的id会根据就近原则选取形参的id;
         * 使用this.id来选择成员变量的id
         */

        this.id = id;
    }

    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public User(int id, String name, String pwd) {
        this.id = id;
        this.name = name;
        this.pwd = pwd;
    }

    public static void main(String[] args) {
        User u = new User();
        User u0 = new User(1001);
        User u1 = new User(1001, "元夕");
        User u2 = new User(1001, "元夕", "123456");

        System.out.println(u.id + " " + u.name + " " + u.pwd);
        System.out.println(u0.id + " " + u0.name + " " + u0.pwd);
        System.out.println(u1.id + " " + u1.name + " " + u1.pwd);
        System.out.println(u2.id + " " + u2.name + " " + u2.pwd);
    }
}
