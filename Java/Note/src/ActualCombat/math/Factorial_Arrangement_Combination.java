/**
 * 计算阶乘(n!),排列(A^k_n)与组合(C^k_n)
 *
 * @author YuanXi
 * @version 2024.2.1
 */
package ActualCombat.math;

import java.util.Scanner;

public class Factorial_Arrangement_Combination {

    /**
     * 阶乘公式n!= n(n-1)(n-2)...1 (n > 0)
     * 说白了就是从n倒序依次相乘到1
     *
     * @param n 倒序依次相乘开始的数
     */
    public static long Factorial(long n) {
        //开始计算
        if (n == 1) {
            return n;                                   //阶乘最后乘到1,也就是最后循环体方法形参为1
        } else {
            return n * Factorial(n - 1);                    //依次相乘,也就是后一个数比前一个数小1
        }
    }

    /**
     * 排列公式A^k_n=n(n-1)(n-2)...(n-k+1)=n!/(n-k)! (n>k)
     * 说白了就是从r乘到n
     *
     * @param k 倒序依次相乘执行次数
     * @param n 倒序依次相乘开始的数
     */
    public static long Arrangements(long k, long n) {
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
        Scanner input = new Scanner(System.in);
        System.out.println("""
                本程序可以计算阶乘,排列与组合.
                    阶乘计算: n!= n(n-1)(n-2)...1 (n > 0), n ∈ N
                    排列计算: A^k_n= n!/(n-k)! = n(n-1)(n-2)...(n-k+1), n,k ∈ N ; n > k
                        可以描述为:从n倒序依次相乘,共乘k次
                    组合计算: C^k_n= A^k_n / k! = n! / k!(n-k)!, 其中C^k_n = C^(n-k)_n, n,k ∈ N ; n > k
                        可以描述为:(n倒序相乘k次)除以(k的阶乘)
                请选择你需要的计算方式:1.阶乘计算;2.排列计算;3.组合计算;4.退出
                """);

        //交互输入:
        int choose = input.nextInt();
        long times;
        long startNum;
        while (true) {
            switch (choose) {
                case 1:
                    do {

                        //交互输入
                        System.out.println("阶乘计算: n!= n(n-1)(n-2)...1 (n > 0)\n请赋值:\nn=:");
                        startNum = input.nextLong();

                        //保证条件
                        if (startNum <= 0) {
                            System.out.println("不符合公式定义,请重新输入");

                            break;
                        }

                        //交互输出
                        System.out.println(startNum + "! = " + Factorial(startNum));

                        //交互选项
                        do {

                            System.out.println("是否继续阶乘计算?1.继续;2.更换其它计算方式;3.结束程序;");
                            choose = input.nextInt();
                            switch (choose) {
                                case 1:
                                case 2:

                                    break;

                                case 3:

                                    System.out.println("程序结束");
                                    input.close();
                                    System.exit(0);

                                default:
                                    System.out.println("(李铁柱声)你小砸挺叛逆啊");
                            }

                        } while (choose != 1 && choose != 2);

                    } while (choose != 2);
                    break;

                case 2:
                    do {

                        //交互输入
                        System.out.println("排列计算: A^k_n= n!/(n-k)! = n(n-1)(n-2)...(n-k+1), k <= n\n请赋值:\nk=:");
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

                        //交互选项
                        do {

                            System.out.println("是否继续排列计算?1.继续;2.更换其它计算方式;3.结束程序;");
                            choose = input.nextInt();
                            switch (choose) {
                                case 1:
                                case 2:

                                    break;

                                case 3:

                                    System.out.println("程序结束");
                                    input.close();
                                    System.exit(0);

                                default:
                                    System.out.println("(李铁柱声)你小砸挺叛逆啊");
                            }

                        } while (choose != 1 && choose != 2);

                    } while (choose != 2);
                    break;

                case 3:

                    do {

                        //交互输入
                        System.out.println("组合计算: C^k_n= A^k_n / k! = n! / k!(n-k)!, 其中C^k_n = C^(n-k)_n, k <= n\n请赋值:\nk=:");
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

                        //交互选项
                        do {

                            System.out.println("是否继续组合计算?1.继续;2.更换其它计算方式;3.结束程序;");
                            choose = input.nextInt();
                            switch (choose) {
                                case 1:
                                case 2:

                                    break;

                                case 3:

                                    System.out.println("程序结束");
                                    input.close();
                                    System.exit(0);

                                default:
                                    System.out.println("(李铁柱声)你小砸挺叛逆啊");
                            }

                        } while (choose != 1 && choose != 2);

                    } while (choose != 2);
                    break;

                case 4:
                    System.out.println("程序结束");
                    input.close();
                    System.exit(0);

                default:
                    System.out.println("输入错误,请重新输入");

                    break;
            }
            System.out.println("请选择你需要的计算方式:1.阶乘计算;2.排列计算;3.组合计算;4.退出");
            choose = input.nextInt();
        }
    }
}
