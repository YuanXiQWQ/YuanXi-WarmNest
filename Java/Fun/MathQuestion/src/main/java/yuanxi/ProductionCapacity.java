package yuanxi;

import java.util.Arrays;

/**
 * {@code ProductionCapacity} 类用于表示和管理生产设施的容量和计划。
 *
 * @author YuanXi
 * @version 1.0.0
 */
public class ProductionCapacity {
    /**
     * 各种产品的计划产量。
     */
    private int[] productionPlan;

    /**
     * 各种产品的机械加工台时定额。
     */
    private int[] timeQuota;

    /**
     * 车床组车床总数。
     */
    private int numberOfMachines;

    /**
     * 班制，表示每天的班次数量。
     */
    private int shift;

    /**
     * 每班工作时间（小时）。
     */
    private int shiftTime;

    /**
     * 每天的总工作时间（小时），计算为班次乘以每班时间。
     */
    private double dailyWorkingHours;

    /**
     * 设备的停修率。
     */
    private double downtimeRate = 0.1;

    /**
     * 一年的周数。
     */
    private int yearlyWeeks = 52;

    /**
     * 每周的工作日数量。
     */
    private int weeklyWorkingDays = 6;

    /**
     * 获取生产计划数组。
     *
     * @return 当前设置的生产计划数组。
     */
    public int[] getProductionPlan() {
        return productionPlan;
    }

    /**
     * 设置新的生产计划。
     *
     * @param productionPlan 新的生产计划数组。
     */
    public void setProductionPlan(int[] productionPlan) {
        this.productionPlan = productionPlan;
    }

    /**
     * 获取机械加工台时定额数组。
     *
     * @return 当前设置的台时定额数组。
     */
    public int[] getTimeQuota() {
        return timeQuota;
    }

    /**
     * 设置新的台时定额。
     *
     * @param timeQuota 新的台时定额数组。
     */
    public void setTimeQuota(int[] timeQuota) {
        this.timeQuota = timeQuota;
    }

    /**
     * 获取车床总数。
     *
     * @return 当前车床总数。
     */
    public int getNumberOfMachines() {
        return numberOfMachines;
    }

    /**
     * 设置新的车床总数。
     *
     * @param numberOfMachines 新的车床总数。
     */
    public void setNumberOfMachines(int numberOfMachines) {
        this.numberOfMachines = numberOfMachines;
    }

    /**
     * 获取班制。
     *
     * @return 班次数量。
     */
    public int getShift() {
        return shift;
    }

    /**
     * 设置新的班制。
     *
     * @param shift 新的班次数量。
     */
    public void setShift(int shift) {
        this.shift = shift;
    }

    /**
     * 获取每班工作时间。
     *
     * @return 每班工作时间（小时）。
     */
    public int getShiftTime() {
        return shiftTime;
    }

    /**
     * 设置新的每班工作时间。
     *
     * @param shiftTime 新的每班工作时间（小时）。
     */
    public void setShiftTime(int shiftTime) {
        this.shiftTime = shiftTime;
    }

    /**
     * 获取每天的工作时间。
     *
     * @return 每天的工作时间（小时）。
     */
    public double getDailyWorkingHours() {
        return dailyWorkingHours;
    }

    /**
     * 设置每天的工作时间。
     *
     * @param dailyWorkingHours 新的每天工作时间（小时）。
     */
    public void setDailyWorkingHours(double dailyWorkingHours) {
        this.dailyWorkingHours = dailyWorkingHours;
    }

    /**
     * 获取当前的设备停修率。
     *
     * @return 当前的停修率。
     */
    public double getDowntimeRate() {
        return downtimeRate;
    }

    /**
     * 设置新的停修率。
     *
     * @param downtimeRate 新的停修率。
     */
    public void setDowntimeRate(double downtimeRate) {
        this.downtimeRate = downtimeRate;
    }

    /**
     * 获取一年的周数。
     *
     * @return 当前设置的周数。
     */
    public int getYearlyWeeks() {
        return yearlyWeeks;
    }

    /**
     * 设置新的一年周数。
     *
     * @param yearlyWeeks 新的周数。
     */
    public void setYearlyWeeks(int yearlyWeeks) {
        this.yearlyWeeks = yearlyWeeks;
    }

    /**
     * 获取每周的工作日数量。
     *
     * @return 当前设置的每周工作日数量。
     */
    public int getWeeklyWorkingDays() {
        return weeklyWorkingDays;
    }

    /**
     * 设置新的每周工作日数量。
     *
     * @param weeklyWorkingDays 新的每周工作日数量。
     */
    public void setWeeklyWorkingDays(int weeklyWorkingDays) {
        this.weeklyWorkingDays = weeklyWorkingDays;
    }

    /**
     * 返回包含对象所有属性值的字符串表示形式。
     *
     * @return 对象的字符串表示形式。
     */
    @Override
    public String toString() {
        return STR."""
        生产能力参数{
        产品计划=\{Arrays.toString(
                productionPlan)},
         机械加工台时定额=\{Arrays.toString(
                timeQuota)},
         车床总数=\{numberOfMachines},
         班制=\{shift},
         每班工作时间=\{shiftTime},
         每天的工作时间=\{dailyWorkingHours},
         当前的设备停修率=\{downtimeRate},
         一年的周数=\{yearlyWeeks},
         每周的工作日数量=\{weeklyWorkingDays}
        }
        """;
    }
}
