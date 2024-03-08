package YuanXi;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

/**
 * 一个简单的用户交互方法类
 *
 * @author YuanXi
 * @version 2024.2.28
 */
@SuppressWarnings("unused")
public class Interactive {
    /**
     * 类内部的处检测器
     */
    private boolean first = true;

    /**
     * 当有任何内容时候赋值为内容,无内容时赋值默认的方法
     *
     * @param def 默认值
     * @return 默认值或用户输入
     * <p>
     * 示例用法:
     * {@code
     * String a = def;
     * System.out.println("请修改某某内容,直接回车跳过对此内容的修改");
     * a = interactive.edit(a);
     * }
     */
    public String edit(String def) {
        Scanner input = new Scanner(System.in);

        String inputHere = input.nextLine();

        if (!inputHere.trim().isEmpty()) {
            return inputHere;
        } else {
            return def;
        }
    }

    /**
     * 双选项单项选择题
     *
     * @param optionA 选项A
     * @param optionB 选项B
     * @param def     默认值,如果接受值为true,默认选项(即用户直接跳过时的选项)为选项A,否则为B
     * @return boolean, 没有特殊值(方法内已处理)
     * <p>
     * 示例用法:
     * {@code
     * System.out.print("选项A和B要选择哪个,默认选项为大写字母");
     * if (interactive.aOrB("选项A", "选项B", true)) {
     * // 同意了该干啥
     * } else {
     * // 不同意该干啥
     * }
     * }
     */
    public boolean aOrB(String optionA, String optionB, boolean def) {
        while (true) {
            // 初始化
            if (first) {
                first = false;
                // 输出时默认选项为大写
                if (def) {
                    // 默认选项为optionA
                    System.out.println("(" + optionA.toUpperCase() + "/" + optionB.toLowerCase() + ")");
                } else {
                    // 默认选项为optionB
                    System.out.println("(" + optionA.toLowerCase() + "/" + optionB.toUpperCase() + ")");
                }
            } else {
                System.out.println("没看懂喵");
            }
            Scanner input = new Scanner(System.in);

            // 返回值
            // 防止大小写干扰,清除空白符
            String choice = input.nextLine().trim();
            if (optionA.equalsIgnoreCase(choice)) {
                // 复位
                first = true;
                return true;
            } else if (optionB.equalsIgnoreCase(choice)) {
                // 复位
                first = true;
                return false;
            } else if (choice.isEmpty()) {
                //复位
                first = true;
                return def;
            }
            // 都不满足则再来一次
        }
    }

    /**
     * 一个基于aOrB方法的变体,基本的的Y/N交互方法.
     *
     * @param def 默认值,如果接受值为true,默认选项(即用户直接跳过时的选项)为Y,否则为N
     * @return boolean, 没有特殊值(方法内已处理)
     * <p>
     * 示例用法:
     * {@code
     * System.out.print("是否要做什么,默认选项为大写字母");
     * if (interactive.yOrN(true)) {
     * // 同意了该干啥
     * } else {
     * // 不同意该干啥
     * }
     * }
     */
    @SuppressWarnings("UnusedReturnValue")
    public boolean yOrN(boolean def) {
        return aOrB("Y", "N", def);
    }

    /**
     * yOrN方法的无参简写,默认选项为Y
     *
     * @return boolean
     */
    public boolean yOrN() {
        return yOrN(true);
    }


    /**
     * 类内部的计数器
     */
    private int count = 0;

    /**
     * getCase方法的处检查器,因为getCase过程中可能包含别的方法,怕搞串线了
     */
    boolean getCaseFirst = true;

    /**
     * 一个基本的计数器
     *
     * @return 计数器
     */
    public int getCase() {
        if (getCaseFirst) {
            count = 0;
            getCaseFirst = false;
        } else {
            count++;
        }
        return count;
    }

    /**
     * 如果getCase方法带整数型参数(最好是0,好看懂),则重置计数器
     *
     * @param reset 任何整数
     */
    public void getCase(int reset) {
        getCaseFirst = true;
        count = reset;
    }


    /**
     * 与用户交互以新建文件的方法
     *
     * @param fileName 文件名
     * <p>
     * 示例用法:
     * {@code
     * File file = new File(fileName.txt);
     * inter.createFile(file);
     * }
     */
    public void createFile(File fileName) {
        try {
            if (fileName.createNewFile()) {
                // 如果新建了文件
                System.out.println("新建了\"" + fileName + "\"");

            } else {
                // 如果文件已经存在
                System.out.print("文件\"" + fileName + "\"已存在,是否覆盖?");

                if (yOrN()) {
                    // 同意覆盖
                    if (!fileName.delete()) {
                        // 删除原文件,如果失败则反馈
                        throw new RuntimeException("无法删除\"" + fileName + "\"");
                    }

                    try {
                        // 新建文件
                        if (fileName.createNewFile()) {
                            // 如果新建成功
                            System.out.println("新建了\"" + fileName + "\"");
                        } else {
                            // 如果新建失败
                            System.out.println("无法新建\"" + fileName + "\"");
                            throw new IOException();
                        }
                    } catch (IOException e) {
                        throw new RuntimeException("无法覆盖\"" + fileName + "\"");
                    }
                    System.out.println("已覆盖");

                } else {
                    // 不同意覆盖
                    System.out.println("是否新建文件?");
                    if (yOrN()) {
                        // 同意新建文件
                        System.out.println("请输入新建文件名称");
                        Scanner input = new Scanner(System.in);
                        createFile(new File(input.nextLine()));
                    } else {
                        // 不同意新建文件,终止程序
                        System.out.println("程序终止");
                        System.exit(0);
                    }
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("无法新建\"" + fileName + "\"");
        }
        // 新建了文件
    }
}
