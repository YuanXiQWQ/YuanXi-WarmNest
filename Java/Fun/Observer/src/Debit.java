// 定义被观察者行为
interface Debit {
    // 添加观察者
    void borrow(Credit credit);

    // 通知观察者
    void notifyCredits();
}
