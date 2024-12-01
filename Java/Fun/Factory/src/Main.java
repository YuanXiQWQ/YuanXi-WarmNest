/**
 * @author YuanXi
 */
public class Main {
    public static void main(String[] args)
    {
        // 使用 FactoryA 创建 ProductA
        Factory factoryA = new FactoryA();
        Product productA = factoryA.createProduct("A");
        productA.method();

        // 使用 FactoryB 创建 ProductB
        Factory factoryB = new FactoryB();
        Product productB = factoryB.createProduct("B");
        productB.method();
    }
}
