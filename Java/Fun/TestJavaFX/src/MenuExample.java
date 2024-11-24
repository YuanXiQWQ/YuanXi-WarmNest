import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

/**
 * @author YuanXi
 */
public class MenuExample extends Application {
    @Override
    public void start(Stage stage) {
        MenuBar menuBar = new MenuBar();
        Menu fileMenu = new Menu("文件");
        Menu helpMenu = new Menu("帮助");

        MenuItem openItem = new MenuItem("打开");
        openItem.setOnAction(e -> openFile());

        MenuItem saveItem = new MenuItem("保存");
        saveItem.setOnAction(e -> saveFile());

        MenuItem aboutItem = new MenuItem("关于");
        aboutItem.setOnAction(e -> showAbout());

        fileMenu.getItems().addAll(openItem, saveItem);
        helpMenu.getItems().add(aboutItem);

        menuBar.getMenus().addAll(fileMenu, helpMenu);

        BorderPane root = new BorderPane();
        root.setTop(menuBar);

        Scene scene = new Scene(root, 400, 300);
        stage.setScene(scene);
        stage.setTitle("菜单示例：方法调用");
        stage.show();
    }

    private void openFile() {
        System.out.println("调用了打开文件方法！");
    }

    private void saveFile() {
        System.out.println("调用了保存文件方法！");
    }

    private void showAbout() {
        System.out.println("调用了关于方法！");
    }
}
