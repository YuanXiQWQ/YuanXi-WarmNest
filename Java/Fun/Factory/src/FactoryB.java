/**
 * @author YuanXi
 */
public class FactoryB implements Factory {
    @Override
    public Product createProduct(String arg)
    {
        if("B".equals(arg))
        {
            return new ProductB();
        } else
        {
            throw new IllegalArgumentException("不支持" + arg);
        }
    }
}