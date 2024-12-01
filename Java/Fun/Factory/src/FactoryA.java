/**
 * @author YuanXi
 */
public class FactoryA implements Factory {
    @Override
    public Product createProduct(String arg)
    {
        if("A".equals(arg))
        {
            return new ProductA();
        } else
        {
            throw new IllegalArgumentException("不支持" + arg);
        }
    }
}