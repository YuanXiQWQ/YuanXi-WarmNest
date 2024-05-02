package yuanxi;

import java.text.DecimalFormat;

/**
 * 主类，用于运行程序。
 */
public class Main {
    private static final ProductionCapacity pc = new ProductionCapacity();

    /**
     * 计算总所需机时。
     *
     * @return 总所需机时。
     */
    private int calculateTotalRequiredTime() {
        int totalRequiredTime = 0;
        for (int i = 0; i < pc.getProductionPlan().length; i++) {
            totalRequiredTime += pc.getProductionPlan()[i] * pc.getTimeQuota()[i];
        }
        return totalRequiredTime;
    }

    /**
     * 基于最大产品时定额找到代表产品。
     *
     * @return 代表产品的字符标识（A、B、C 等）。
     */
    private char findRepresentativeProduct() {
        int maxIndex = 0;
        int maxProduct = 0;
        for (int i = 0; i < pc.getProductionPlan().length; i++) {
            int product = pc.getProductionPlan()[i] * pc.getTimeQuota()[i];
            if (product > maxProduct) {
                maxProduct = product;
                maxIndex = i;
            }
        }
        return (char) ('A' + maxIndex);
    }

    /**
     * 计算车床的年有效工作小时数。
     *
     * @return 车床的年有效工作小时数。
     */
    private double calculateTotalWorkingHoursPerYear() {
        double effectiveDailyHours =
                pc.getDailyWorkingHours() * (1 - pc.getDowntimeRate());
        return pc.getNumberOfMachines() * effectiveDailyHours * pc.getYearlyWeeks() *
                pc.getWeeklyWorkingDays();
    }

    /**
     * 主方法用于运行程序。
     */
    public static void main() {
        System.out.println("程序执行");
        Main m = new Main();
        IO io = new IO();

        // 通过 IO 类初始化值
        io.setValues(pc);
        System.out.println(pc);

        DecimalFormat df = new DecimalFormat("#0.00");
        int totalRequiredTime = m.calculateTotalRequiredTime();
        double totalWorkingHoursPerYear = m.calculateTotalWorkingHoursPerYear();

        if (totalRequiredTime < 0 || totalWorkingHoursPerYear < 0) {
            System.out.println("数字过大,栈溢出");
            System.exit(1);
        }

        System.out.println(STR."""
总需求产能: \{df.format(totalRequiredTime)} 台时,
\{m.findRepresentativeProduct()} 为代表产品,
全年总产能: \{df.format(totalWorkingHoursPerYear)} 台时;
""");

        if (totalRequiredTime <= totalWorkingHoursPerYear) {
            System.out.println("产能充足");
        } else {
            System.out.println("产能不足");
        }
    }
}
