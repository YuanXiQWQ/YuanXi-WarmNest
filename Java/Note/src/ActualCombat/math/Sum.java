package ActualCombat.math;

import java.util.Scanner;

/**
 * 跟MUTT对比Java与Python的求和方法
 *
 * @author YuanXi
 * @version 2023.2.6
 */
public class Sum {

    /**
     * 求和递归方法Sum
     *
     * @param startNum 求和开始数字
     * @param endNum 求和结束数字
     * @return 递归或结束
     */
    public static long sum(long startNum, long endNum) {
        //限制a < b, 否则交换值
        if (startNum > endNum) {
            long c = startNum;
            startNum = endNum;
            endNum = c;
        }

        //开始执行递归
        if (startNum == endNum) {
            return endNum;
        } else {
            return startNum + sum(startNum + 1, endNum);
        }
    }

    /**
     * 开始执行程序
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        //初始化
        Scanner input = new Scanner(System.in);
        System.out.println("输入两个值,将计算两个值之间的求和");

        //交互
        System.out.println("输入第一个值");
        long a = input.nextInt();
        System.out.println("输入第二个值");
        long b = input.nextInt();

        //计算并输出
        long output = sum(a, b);
        System.out.println(a + " 到 " + b + " 的总和为 " + output);
    }
}