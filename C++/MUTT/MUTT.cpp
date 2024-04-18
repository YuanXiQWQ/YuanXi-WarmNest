#include <iostream>
#include <string>
#include <chrono>
#include <ctime>
#include <random>
#include <conio.h>

std::string formatTime(int hour, int minute) {
    char buffer[6]; //足够存储时间格式HH:MM
    sprintf(buffer, "%02d:%02d", hour, minute);
    return std::string(buffer);
}

std::string getGreeting(int hour) {
    if (hour >= 0 && hour <= 4)
        return "晚上好喵,主人！深夜了,注意早点休息喵！要注意身体喵！\n按下任意键继续";
    else if (hour <= 11)
        return "早上好喵,主人！\n按下任意键继续";
    else if (hour <= 13)
        return "中午好喵,主人！\n按下任意键继续";
    else if (hour <= 18)
        return "下午好喵,主人！\n按下任意键继续";
    else
        return "晚上好喵,主人！\n按下任意键继续";
}

int generateRandom(int min, int max) {
    static std::random_device rd;
    static std::mt19937 gen(rd());
    std::uniform_int_distribution<> dist(min, max);
    return dist(gen);
}

void processTeachingSession() {
    char keyPress;
    int targetTeachingCount = generateRandom(4, 9);
    for (int i = 0; i < targetTeachingCount; ++i) {
        keyPress = _getch();
        if (keyPress == '-') {
            std::cout << "跳过此程序\n";
            return;
        }
        std::cout << "MUTT当前调教值+1\n";
    }
    std::cout << "MUTT调教成功!\n";
}

void processTransformationSession() {
    char keyPress;
    int muttState = generateRandom(0, 9);
    std::cout << "按任意非\"-\"键尝试将MUTT变成猫娘,按\"-\"跳过\n";
    while (true) {
        keyPress = _getch();
        if (keyPress == '-') {
            std::cout << "跳过\n";
            return;
        }
        if (muttState > 0) {
            --muttState;
            int reaction = generateRandom(0, 9);
            std::string responses[] = {
                    "MUTT:主人,不可以色色哦!",
                    "MUTT:不要啦,主人!",
                    "MUTT:主人,打咩得斯哟!!!",
                    "MUTT:嘤嘤嘤,主人不要这样对待MUTT啦!!",
                    "MUTT:www...主人...MUTT,MUTT要坏掉了...",
                    "MUTT:主人,感觉...要坏掉了",
                    "MUTT:主人...再这样下去...MUTT就...再也回不去了...",
                    "MUTT:虽然不想承认,可是主人真的让MUTT好舒服...",
                    "MUTT:MUTT真的要坏掉了...",
                    "MUTT:呜呜呜...主人..."
            };
            std::cout << responses[reaction] << std::endl;
        } else if (muttState == 0) {
            std::cout << "调教成功!可以开始撅了!\n";
            break;
        }
    }
}

int main() {
    auto now = std::chrono::system_clock::now();
    std::time_t currentTime = std::chrono::system_clock::to_time_t(now);
    std::tm* localtime = std::localtime(&currentTime);
    std::string timeString = formatTime(localtime->tm_hour, localtime->tm_min);
    std::cout << "当前时间为" << timeString << "; " << std::endl;

    std::string greeting = getGreeting(localtime->tm_hour);
    std::cout << greeting << std::endl;

    _getch(); // 按下任意键继续

    processTeachingSession();
    processTransformationSession();

    std::cout << "\n程序执行完成!按ESC退出!(或者你可以直接关闭...)";
    char userPress;
    do {
        userPress = _getch();
        if (userPress == 27) { // ESC的ASCII码是27
            return 0;
        }
    } while (true);
}
