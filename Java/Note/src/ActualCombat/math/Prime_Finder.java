/**
 * 实例:检查数段内的质数
 *
 * @author YuanXi
 * @version 2024.1.30
 */
package ActualCombat.math;

import java.util.Scanner;

public class Prime_Finder {
    /**
     * 检查质数的方法
     *
     * @param checkPrime 待检的数
     * @return 是否是质数
     */
    static boolean isPrime(int checkPrime) {
        //首先排除不符合质数最基本定义(大于1的自然数)的数
        if (checkPrime <= 1) {
            //根据质数的定义:"一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数",首先排除小于等于1的整数(变量checkPrime已经由int规定了为整数,因此无需特意排除非整数)
            return false;
            //输入值小于等于1,不是质数该方法返回false
        }

        //然后开始对符合最基本定义的数检查
        for (int isFactors = 2;                         //创建一个尝试数,从2开始对待检数进行整除测试
             isFactors < checkPrime;                    //重复检查直到尝试数大于等于待检数(大于:一个数无法被比他大的数整除;等于:质数定义因数需要是除了1和它自身外的数)
             isFactors++)                               //如果本次循环中尝试数不是因数则增量
        {
            if (checkPrime % isFactors == 0) {          //因数定义:若a是b的因数，那么a除以b的余数一定为0
                return false;                           //被整除,不是质数,该方法返回false
            }
        }
        return true;                                    //满足定义,是质数,该方法返回true
    }

    /**
     * 开始执行bugs
     *
     * @param args arguments
     */

    public static void main(String[] args) {
        int i;
        int rangeStart;
        int rangeEnd;
        Scanner range = new Scanner(System.in);     //初始化检测器,命名为inputRange
        System.out.println("查找质数,如果只需要查询一个数,两次输入相等即可.请输入一个范围:\n从");
        rangeStart = range.nextInt();
        System.out.println("到");
        rangeEnd = range.nextInt();

        //检查输入的范围反没反
        if (rangeStart > rangeEnd) {                //运行条件:开始值大于结束值
            int temp = rangeStart;                  //创建媒介变量并继承rangeStart的值
            rangeStart = rangeEnd;                  //将rangeStart的值变成rangeEnd的值
            rangeEnd = temp;                        //将继承自最初rangeStart的值还原至rangeEnd
        }

        //初始化
        int totalNum = rangeEnd - rangeStart + 1;   //计算范围内总共多少个数
        int totalPrime;                             //建立质数总数的计数变量
        int[] primesForAll = new int[totalNum];     //建立并初始化能装得下范围内所有数的质数数组

        //开始筛选质数
        for (i = rangeStart, totalPrime = 0; i <= rangeEnd; i++) {  //初始化替身i和两个计数器,遍历范围内的数
            if (isPrime(i)) {                       //当isPrime()方法返回true时
                primesForAll[totalPrime] = i;       //将检测到的质数储存在能装得下范围内所有数的质数数组中,使用totalPrime作为数组坐标节省了一个定位坐标的变量
                totalPrime++;                       //质数总数+1
            }
        }

        //整理能装得下范围内所有数的质数数组
        i = 0;                                      //再次初始化替身i
        int[] primes = new int[totalPrime];         //建立并初始化质数数组
        for (int prime : primesForAll) {            //遍历能装得下范围内所有数的质数数组
            if (prime == 0) {
                continue;
            }
            primes[i] = prime;
            i++;
        }

        //总结并输出
        if (totalPrime == 0) {                      //如果没有质数
            System.out.println("没有符合条件的质数");
        } else {                                    //如果有质数
            System.out.println("共检查了" + totalNum + "个数，其中下列" + totalPrime + "个数是质数");
            for (int prime : primes) {
                System.out.println(prime);
            }
        }
        range.close();
    }
}
