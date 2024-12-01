import java.io.File;
import java.io.IOException;

public class FileDemo {
    public static void main(final String[] args) throws IOException
    {
        final File file = new File("./test.txt");
        System.out.println(file.createNewFile()); // 如果创建成功,则输出true
        System.out.println(file.exists()); // 输出 true
        System.out.println(file.delete()); // 如果删除成功,则输出true
        System.out.println(file.exists()); // 输出 false
    }
}