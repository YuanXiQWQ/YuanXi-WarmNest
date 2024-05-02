package yuanxi;

import java.util.Scanner;

/**
 * 输入输出类，用于从用户获取输入值.
 *
 * <p>此类用于从控制台获取用户输入，并将其转换为适当的数据类型，以设置 {@link ProductionCapacity} 的属性值.
 * 如果用户输入不合法，则使用默认值.
 *
 * @author YuanXi
 * @version 1.0.0
 */
public class IO {
    /**
     * 将字符串数组转换为整数数组，如果输入不合法，则使用默认值.
     *
     * @param inputs           输入的字符串数组.
     * @param defaultOrCompare 默认值或预期的整数数组.
     * @param isFirst          懒得修,就加一个参数
     * @return 转换后的整数数组.
     */
    private int[] parseInput(String[] inputs, int[] defaultOrCompare, boolean isFirst) {
        if (inputs.length != defaultOrCompare.length && !isFirst) {
            System.out.println("输入的数量与预期不符.");
            System.exit(1);
        }
        int[] result = new int[inputs.length];
        for (int i = 0; i < inputs.length; i++) {
            if (inputs[i].isEmpty()) {
                if (isFirst) {
                    result = defaultOrCompare;
                    return result;
                } else {
                    System.out.println("无赋值.");
                    System.exit(1);
                }
            } else {
                try {
                    result[i] = Integer.parseInt(inputs[i]);
                } catch (NumberFormatException e) {
                    System.out.println("非法输入.");
                    System.exit(1);
                }
            }
        }
        return result;
    }

    /**
     * 从控制台读取下一个整数值，如果输入为空则使用默认值.
     *
     * @param scanner      Scanner 对象用于读取输入.
     * @param defaultValue 默认整数值.
     * @return 输入的整数值.
     */
    private int nextIntWithDefault(Scanner scanner, int defaultValue) {
        String input = scanner.nextLine().trim();
        if (input.isEmpty()) {
            return defaultValue;
        }
        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException e) {
            System.out.println(STR."非法输入，使用默认值：\{defaultValue}");
            return defaultValue;
        }
    }

    /**
     * 从控制台读取下一个双精度浮点数值，如果输入为空则使用默认值.
     *
     * @param scanner Scanner 对象用于读取输入.
     * @return 输入的双精度浮点数值.
     */
    private double nextDoubleWithDefault(Scanner scanner) {
        String input = scanner.nextLine().trim();
        if (input.isEmpty()) {
            return 0.1;
        }
        try {
            return Double.parseDouble(input);
        } catch (NumberFormatException e) {
            System.out.println("非法输入，使用默认值：0.1");
            return 0.1;
        }
    }

    /**
     * 从控制台获取输入并设置 {@link ProductionCapacity} 对象的属性值.
     *
     * @param pc 要设置属性的 ProductionCapacity 对象.
     */
    void setValues(ProductionCapacity pc) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("请输入各值，如果输入值为空，则使用默认值.");

            // 设置各种产品的计划产量
            System.out.println("各种产品的计划产量，使用空格分隔(250 100 230 50)：");
            String[] productionPlanStr = sc.nextLine().split("\\s+");
            int[] productionPlanInt =
                    parseInput(productionPlanStr, new int[]{250, 100, 230, 50}, true);
            pc.setProductionPlan(productionPlanInt);

            // 设置各种产品的时间需求
            System.out.println("各种产品的时间需求，使用空格分隔：");
            String[] timeQuotaStr = sc.nextLine().split("\\s+");
            int[] timeQuotaInt = parseInput(timeQuotaStr, productionPlanInt, false);
            pc.setTimeQuota(timeQuotaInt);

            // 设置机器数量
            System.out.println("机器数量（默认15）：");
            pc.setNumberOfMachines(nextIntWithDefault(sc, 15));

            // 设置班制
            System.out.println("班制（默认2）：");
            pc.setShift(nextIntWithDefault(sc, 2));

            // 设置班次时间
            System.out.println("班次时间（默认8）：");
            pc.setShiftTime(nextIntWithDefault(sc, 8));

            // 设置每日工作时间
            pc.setDailyWorkingHours(pc.getShiftTime() * pc.getShift());

            // 设置机器维修率
            System.out.println("机器维修率（默认0.1）：");
            pc.setDowntimeRate(nextDoubleWithDefault(sc));

            // 设置年度周数
            System.out.println("年度周数（默认52）：");
            pc.setYearlyWeeks(nextIntWithDefault(sc, 52));

            // 设置每周工作日
            System.out.println("每周工作日（默认6）：");
            pc.setWeeklyWorkingDays(nextIntWithDefault(sc, 6));
        }
    }
}
