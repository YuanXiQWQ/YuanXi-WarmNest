/**
 * 关于递归的示例(md再有人看完还说递归学不明白我锤死他)
 *
 * @author YuanXi
 * @version 2024.2.1
 */
package Example;

import java.util.Scanner;

/**
 * 递归的基本思想就是自己调用自己,包含:
 * 结束条件:什么时候不调用自身方法
 * **如果没有这一项,将陷入死循环**
 * 递归体:什么时候需要调用自身方法
 * 递归:
 * 打开公式时,公式内需要调用公式本身,因此需要打开公式中的公式,依此类推,
 * 直到遇到结束条件形参的公式求出具体值,
 * 再根据具体值传递到上一个需要该公式的具体值的公式,
 * 依此类推,依次回归直到返回总公式值
 */

public class Recursion {

    /**
     * 排列公式A^k_n=n(n-1)(n-2)...(n-k+1)=n!/(n-k)! (n>k)
     * 说白了就是从r乘到n
     *
     * @param k 倒序依次相乘执行次数
     * @param n 倒序依次相乘开始的数
     *          作用方式
     *          以方法Arrangements(4, 5)为例
     *          开循环:
     *          return = 5 * Arrangements(3, 4)
     *          Arrangements(3, 4) = 4 * Arrangements(2, 3)
     *          Arrangements(2, 3) = 3 * Arrangements(1, 2)
     *          Arrangements(1, 2) = n = 2
     *          收循环:
     *          Arrangements(1, 2) = 2
     *          Arrangements(2, 3) = 3 * Arrangements(1, 2) = 3 * 2
     *          Arrangements(3, 4) = 4 * Arrangements(2, 3) = 4 * 3 *2
     *          return = 5 * Arrangements(3, 4) = 5 * 4 * 3 * 2 = 120
     */
    public static long Arrangements(long k, long n) {           //创建公共方法Arrangements(排列公式)，传入参数 k和 n
        //开始计算:
        if (k == 1) {                                           //乘以 k 次
            return n;                                           //排列乘法的最后一个值是 n-k+1,因为条件是 k=1 ,所以正负相消只剩n
        } else {
            return n * Arrangements(k - 1, n - 1);        // 停止条件:k<=0时(实际上就是等于0时)
        }
    }

    /**
     * 组合公式C^k_n= A^k_n / k! = n! / k!(n-k)!, 其中C^k_n = C^(n-k)_n
     * 说白了就是 (n倒序相乘k次)除以(k的阶乘)
     *
     * @param k 倒序依次相乘执行次数
     * @param n 倒序依次相乘开始的数
     *          作用方式:
     *          以方法Combinations(4 , 6)为例
     *          开循环:
     *          return: (6 * Combinations(3 , 5)) / 4
     *          Combinations(3 , 5) = 5 * Combinations(2 , 4) / 3
     *          Combinations(2 , 4) = 4 * Combinations(1 , 3) / 2
     *          Combinations(1 , 3) = n = 3
     *          收循环:
     *          Combinations(1 , 3) = 3
     *          Combinations(2 , 4) = (4 * Combinations(1 , 3)) / 2 = (4 * 3) / 2
     *          Combinations(3 , 5) = (5 * Combinations(2 , 4)) / 3 = (5 * 4 * 3) / (3 * 2)
     *          return: (6 * Combinations(3 , 5)) / 4 = (6 * 5 * 4 * 3) / (4 * 3 * 2) = 15
     */
    public static long Combinations(long k, long n) {           //创建公共方法Combinations(组合公式)，传入参数 k和 n
        //开始计算
        if (k == 1) {                                           //乘以 k 次
            return n;
        } else {
            return (n * Combinations(k - 1, n - 1)) / k;
        }
    }

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */
    public static void main(String[] args) {
        //交互初始化:

        System.out.println("""
                本程序会进行排列计算和组合计算.
                    排列计算:A^k_n= n!/(n-k)! = n(n-1)(n-2)...(n-k+1), n,k ∈ N ; n > k
                        可以描述为:从n倒序依次相乘,共乘k次
                    组合计算:C^k_n= A^k_n / k! = n! / k!(n-k)!, 其中C^k_n = C^(n-k)_n, n,k ∈ N ; n > k
                        可以描述为:(n倒序相乘k次)除以(k的阶乘)
                请选择你需要的计算方式:1.排列计算;2.组合计算;3.退出
                """);

        //交互输入:
        Scanner input = new Scanner(System.in);
        int choose = input.nextInt();
        long times;
        long startNum;
        while (true) {
            switch (choose) {
                case 1:
                    System.out.println("排列计算: A^k_n= n!/(n-k)! = n(n-1)(n-2)...(n-k+1), k <= n");

                    //交互输入
                    System.out.println("请赋值: \nk=:");
                    times = input.nextLong();
                    System.out.println("n=:");
                    startNum = input.nextLong();

                    //保证条件
                    if (times <= 0 || startNum <= 0) {
                        System.out.println("不符合公式定义,请重新输入");

                        break;
                    } else if (startNum < times) {
                        System.out.println("请注意,当k大于n时该次运算无意义.本次计算将对k和n进行互换.");
                        long temp = times;
                        times = startNum;
                        startNum = temp;
                    }

                    //交互输出:
                    System.out.print("A^" + times + "_" + startNum + "=");
                    System.out.println(Arrangements(times, startNum));

                    break;
                case 2:
                    System.out.println("组合计算: C^k_n= A^k_n / k! = n! / k!(n-k)!, 其中C^k_n = C^(n-k)_n, k <= n");

                    //交互输入
                    System.out.println("请赋值: \nk=:");
                    times = input.nextLong();
                    System.out.println("n=:");
                    startNum = input.nextLong();

                    //保证条件
                    if (times <= 0 || startNum <= 0) {
                        System.out.println("不符合公式定义,请重新输入");

                        break;
                    } else if (startNum < times) {
                        System.out.println("请注意,当k大于n时该次运算无意义.本次计算将对k和n进行互换.");
                        long temp = times;
                        times = startNum;
                        startNum = temp;
                    }

                    //交互输出:
                    System.out.print("C^" + times + "_" + startNum + "=");
                    System.out.println(Combinations(times, startNum));

                    break;
                case 3:
                    System.out.println("程序结束");
                    input.close();
                    System.exit(0);

                    break;
                default:
                    System.out.println("输入错误,请重新输入");

                    break;
            }
            System.out.println("请选择你需要的计算方式:1.排列计算;2.组合计算;3.退出");
            choose = input.nextInt();
        }
    }
}
