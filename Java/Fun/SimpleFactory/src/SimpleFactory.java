/**
 * @author YuanXi
 */
public class SimpleFactory {
    public static Product createProduct(String type)
    {
        if("A".equals(type))
        {
            return new ProductA();
        } else if("B".equals(type))
        {
            return new ProductB();
        } else
        {
            return null;
        }
    }

    public static void main(String[] args)
    {
        Product product = SimpleFactory.createProduct("A");
        if(product != null)
        {
            product.show();
        } else
        {
            System.out.println("Product is null");
        }
    }
}

// 产品A
class ProductA extends Product {
    @Override
    public void show()
    {
        System.out.println("Product A");
    }
}

// 产品B
class ProductB extends Product {
    @Override
    public void show()
    {
        System.out.println("Product B");
    }
}