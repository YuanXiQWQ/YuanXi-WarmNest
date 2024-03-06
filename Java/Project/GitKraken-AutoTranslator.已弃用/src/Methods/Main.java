package Methods;

import YuanXi.Fun;
import YuanXi.Interactive;
import YuanXi.YXWay;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * 运行翻译器的主程序
 *
 * @author YuanXiQWQ
 * @version 2024.2.28
 */

public class Main {
    /**
     * To drive the program
     *
     * @param args unused
     */
    public static void main(String[] args) {
        // 总进程初始化
        Configuration config = new Configuration();
        Translator translator = new Translator();
        Scanner input = new Scanner(System.in);
        Interactive inter = new Interactive();
        YXWay yx = new YXWay();

        // 调试模式
        System.out.print("是否调试翻译器属性? 默认选项都是大写字母,直接回车或者空格代表默认");
        if (inter.yOrN(false)) {
            //初始化调试选项
            System.out.println("如果你希望跳过修改任何值,请回车;文件名请附带格式后缀.");

            System.out.println("请输入待翻译的文件名");
            config.setFileName(inter.edit(config.getFileName()));

            System.out.println("请输入翻译出的文件名");
            config.setTranslatedFileName(inter.edit(config.getTranslatedFileName()));

            System.out.println("请输入关于文档语境的关键字,以便提供更准确的翻译"
                    + "程序遵循格式 \"这是和 '关键字' 相关的 '文件名'\"");
            config.setKeyword(inter.edit(config.getKeyword()));

            System.out.println("请输入保存API的文件名");
            config.setFileNameApi(inter.edit(config.getFileNameApi()));

            System.out.println("程序执行");
        }

        // 主进程初始化
        String fileName = config.getFileName();
        String fileNameApi = config.getFileNameApi();
        String translatedFileName = config.getTranslatedFileName();
        String outputHere;

        // 好玩
        Fun justForFun = new Fun();
        String pet = justForFun.getPet("本次文档搬运工", "木坎攵挡掫迟エ");
        System.out.println(pet);

        // 检查同目录下是否存在strings.json
        File file = new File(fileName);
        boolean first = true;
        outputHere = "找到\"" + fileName + "\"了!";
        // 检查是否把文件放在了项目文件夹里
        if (!file.exists()) {
            file = new File("./GitKraken-AutoTranslator/" + fileName);
        }

        while (!file.exists()) {
            if (first) {
                System.out.println("没能在同目录下找到\"" + fileName
                        + "\"文件.你可以输入文件路径,或者把\"" + fileName
                        + "\"拷贝到同目录下并再次执行程序");
                System.out.println("请复制\"" + fileName + "\"的文件路径:");
                first = false;
            } else {
                System.out.println("再试一次吧");
            }

            String inputFilePath = input.nextLine();

            // 检查用户输入的路径是否存在
            file = new File(inputFilePath);
            if (!file.exists()) {
                System.out.println("没找到这个路径诶");
                continue;
            }

            // 如果路径存在，但是不是指向strings.json，尝试拼接strings.json
            if (!inputFilePath.endsWith(fileName)) {
                file = new File(inputFilePath, fileName);
                if (!file.exists()) {
                    System.out.println("这个目录下没找到\"" + fileName + "\"文件诶");
                } else {
                    System.out.println(outputHere);
                }
                // 如果拼接后查找成功，跳出循环
            } else {
                System.out.println(outputHere);
                break;
            }
        }

        // 读取APIKEY
        File fileApi = new File(fileNameApi);
        if (first) {
            // 检查是否把文件放在了项目文件夹里
            if (!fileApi.exists()) {
                fileApi = new File("./GitKraken-AutoTranslator/" + fileNameApi);
            }

            if (fileApi.exists()) {
                // 同目录下同时有待翻译文件和API文件
                System.out.println("在同目录下发现了\"" + fileName + "\"和\"" + fileNameApi + "\"");
                // 读取API
                try {
                    config.setApiKey(yx.record(fileApi));
                } catch (FileNotFoundException e) {
                    throw new RuntimeException(e);
                }
            } else {
                // 同目录下只有待翻译文件,索要API
                System.out.println("在同目录下发现了\"" + fileName + "\",请输入你的GPT-API秘钥");
                config.setApiKey(input.nextLine());
            }
        } else {
            if (fileApi.exists()) {
                // 同目录下找到了API文件; 待翻译文件在其它目录下
                System.out.println("在同目录下发现了\"" + fileNameApi + "\"");
                // 读取API
                try {
                    config.setApiKey(yx.record(fileApi));
                } catch (FileNotFoundException e) {
                    throw new RuntimeException(e);
                }
            } else {
                // 同目录下找不到API文件，索要API; 待翻译文件在其它目录下
                System.out.println("现在快告诉我你的GPT-API秘钥");
                config.setApiKey(input.nextLine());
            }
        }
        System.out.println(config.getApiKey());
        if (translator.validateApiKey()) {
            System.out.println("API有效");
        } else {
            System.out.println("API无效");
            System.exit(0);
        }


        // 开始翻译
        try {
            System.out.println("开始搬运...");
            File translatedFile = new File(translatedFileName);
            inter.createFile(translatedFile);

            // 扫描程序初始化
            translator.translate(yx.record(file, 100));
            System.out.println();

            // 读取文件

        } catch (Exception e) {
            System.out.println("无法读取\"" + fileName + "\"文件");
            System.exit(0);
        }

        //结束
        input.close();
    }

}
