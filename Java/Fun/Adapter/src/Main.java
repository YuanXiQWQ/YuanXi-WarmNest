public class Main {
    public static void main(String[] args)
    {
        System.out.println(new Adapter(new Speaker()).translate());
    }
}