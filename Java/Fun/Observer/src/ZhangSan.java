import java.util.ArrayList;
import java.util.List;

public class ZhangSan implements Debit {
    public static final int HAVE_CREDIT = 1;
    public static final int NO_CREDIT = 0;

    private final List<Credit> allCredits = new ArrayList<>();
    private Integer state = NO_CREDIT;

    public Integer getState()
    {
        return state;
    }

    public void setMoney(int state)
    {
        this.state = state;
        if(this.state.equals(HAVE_CREDIT))
        {
            // 一旦有钱，通知所有贷款方
            notifyCredits();
        }
    }

    @Override
    public void borrow(Credit credit)
    {
        allCredits.add(credit);
    }

    @Override
    public void notifyCredits()
    {
        allCredits.forEach(Credit::takeMoney);
    }
}