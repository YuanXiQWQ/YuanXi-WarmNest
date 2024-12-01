public class Main {
    public static void main(String[] args)
    {
        ZhangSan zhangSan = new ZhangSan();
        zhangSan.borrow(new WangWu());
        zhangSan.borrow(new ZhaoLiu());


        zhangSan.setMoney(ZhangSan.HAVE_CREDIT);
    }
}