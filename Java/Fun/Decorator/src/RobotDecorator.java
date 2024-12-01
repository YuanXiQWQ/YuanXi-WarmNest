public class RobotDecorator implements Robot, Decorator {
    private final Robot robot;

    public RobotDecorator(final Robot robot)
    {
        this.robot = robot;
    }

    @Override
    public void doSomething()
    {
        robot.doSomething();
    }

    @Override
    public void doMoreThing()
    {
        robot.doSomething();
        System.out.println("篮球");
    }
}
