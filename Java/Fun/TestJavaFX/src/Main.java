import javafx.application.Application;
import javafx.scene.*;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;

/**
 * Class to test JavaFX
 *
 * @author YuanXi
 */
public class Main extends Application {
    public static void main(String[] args)
    {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage)
    {
        // 在顶部创建一个垂直标签
        Label verticalLabel = new Label("Vertical Layout:");

        // 在HBox内创建一个水平标签
        Label horizontalLabel = new Label("Horizontal Layout:");

        // 创建一个HBox，包含一个标签和两个按钮，水平排列
        HBox hbox = new HBox(10);
        Button button1 = new Button("Button 1");
        Button button2 = new Button("Button 2");
        hbox.getChildren().addAll(horizontalLabel, button1, button2);

        // 创建一个VBox以垂直排列标签和HBox
        VBox vbox = new VBox(15);
        vbox.getChildren().addAll(verticalLabel, hbox);

        // 设置场景，以VBox作为根布局
        Scene scene = new Scene(vbox, 300, 200);

        // 配置舞台
        primaryStage.setScene(scene);
        primaryStage.setTitle("HBox and VBox with Labels");
        primaryStage.show();
    }

}