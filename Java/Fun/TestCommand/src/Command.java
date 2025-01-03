/**
 * @author YuanXi
 */
public interface Command {

    // 执行动作 (命令)
    void execute();

    // 撤销动作 (命令)
    void undo();
}

class RemoteController {
    private Command[] onCommands;
    private Command[] offCommands;
}

class Client {

}



class LightOffCommand implements Command {
    @Override
    public void execute() {
        // TODO
    }

    @Override
    public void undo() {
        // TODO
    }
}

class LightReceiver {
    public void on() {
        // TODO
    }
    public void off() {
        // TODO
    }
}

class NoCommand implements Command {
    @Override
    public void execute() {
        // TODO
    }

    @Override
    public void undo() {
        // TODO
    }
}