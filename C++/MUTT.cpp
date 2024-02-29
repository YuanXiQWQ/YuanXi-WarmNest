#include <iostream>
#include <string>
#include <chrono>
#include <ctime>
#include <random>
#include <conio.h>

int main() {
    std::chrono::system_clock::time_point now = std::chrono::system_clock::now();             
    std::time_t CurrentTime = std::chrono::system_clock::to_time_t(now);     
    struct std::tm* Localtime = std::localtime(&CurrentTime); 
    int hour = Localtime->tm_hour;   
    int minute = Localtime->tm_min; 

    std::cout << "当前时间为";
        if (hour<10 && hour>= 0) {
            std::cout << "0";
        }
        //给小时凑到两位数
    std::cout << hour << ":";//输出小时
        if (minute<10 && minute>= 0) {
            std::cout << "0";
        }
        //给分钟凑到两位数
    std::cout << minute <<"; ";
    std::string Greeting;
        if (hour > 4 && hour <= 11) {
            Greeting = "早上好喵,主人！\n按下任意键继续";
        } else if (hour > 11 && hour <= 13) {
            Greeting = "中午好喵,主人！\n按下任意键继续";
        } else if (hour > 13 && hour <= 18) {
            Greeting = "下午好喵,主人！\n按下任意键继续";
        } else if (hour > 18 && hour <= 22) {
            Greeting = "晚上好喵,主人！\n按下任意键继续";
        } else {
            Greeting = "晚上好喵,主人！深夜了,注意早点休息喵！要注意身体喵！\n按下任意键继续";
        }
        //检测时间,设置该说的话
    std::cout << Greeting << std::endl; //说话

    char UserPress;
    UserPress = _getch(); 
    //按下任意键继续
    
    int MUTTTeachingValue = 0;
    bool Skip = false;

    std::cout << "按任意非\"-\"键调教MUTT;按\"-\"跳过此程序" << std::endl;
    std::random_device fourToNine; // 获取随机设备种子
    std::mt19937 gen4t9(fourToNine()); //使用种子初始化随机数生成器
    std::uniform_int_distribution<> Limited4t9(4, 9); //定义整数分布范围为5-10
    int MUTT4t9 = Limited4t9(gen4t9); //生成随机整数
        for (MUTTTeachingValue = 0; MUTTTeachingValue <= MUTT4t9 ; ++ MUTTTeachingValue) {
            UserPress = _getch();

            if (UserPress != '-') {
                  std::cout << "MUTT当前调教值+1" << std::endl;
            } else {
                  Skip = true;
                  break;
            }
            //检查是否跳过
        }
        //调教ing

        if (Skip){ 
            std::cout << "\n跳过\n" << std::endl;
        } else {
            std::cout << "\nMUTT调教成功!\n" << std::endl;
        }
        //根据是否跳过判断输出内容

        std::random_device ZerotoNine; // 获取随机设备种子
        std::mt19937 gen0t9(ZerotoNine()); //使用种子初始化随机数生成器
        std::uniform_int_distribution<> Limited0t9(0, 9); //定义整数分布范围为1-10
        std::random_device ZerotoNineRe;
        std::mt19937 gen0t9Re(ZerotoNineRe());
        int MUTT = Limited0t9(gen0t9); //生成随机整数

        std::cout << "按任意非\"-\"键尝试将MUTT变成猫娘,按\"-\"跳过" << std::endl;

        do {
            UserPress = _getch(); 
                if(UserPress == '-'){
                    std::cout << "\\n跳过\n" << std::endl;
                    break;
                } 
                //检查是否跳过

                if (MUTT > 0) {
                    MUTT--;
                    std::uniform_int_distribution<> Limited0t9Re(0, 9);
                    int Reply = Limited0t9Re(gen0t9Re);
                        switch (Reply) {
                            case 0:
                                std::cout << "MUTT:主人,不可以色色哦!" << std::endl;
                                break;
                            case 1:
                                std::cout << "MUTT:不要啦,主人!" << std::endl;
                                break;
                            case 2:
                                std::cout << "MUTT:主人,打咩得斯哟!!!" << std::endl;
                                break;
                            case 3:
                                std::cout << "MUTT:嘤嘤嘤,主人不要这样对待MUTT啦!!" << std::endl;
                                break;
                            case 4:
                                std::cout << "MUTT:www...主人...MUTT,MUTT要坏掉了..." << std::endl;
                                break;
                            case 5:
                                std::cout << "MUTT:主人,感觉...要坏掉了" << std::endl;
                                break;
                            case 6:
                                std::cout << "MUTT:主人...再这样下去...MUTT就...再也回不去了..." << std::endl;
                                break;
                            case 7:
                                std::cout << "MUTT:虽然不想承认,可是主人真的让MUTT好舒服..." << std::endl;
                                break;
                            case 8:
                                std::cout << "MUTT:MUTT真的要坏掉了..." << std::endl;
                                break;
                            case 9:
                                std::cout << "MUTT:呜呜呜...主人..." << std::endl;
                                break;
                            default:
                                std::cout << "这次真的坏掉了..." << std::endl;
                                break;
                        }
                        //随机输出反馈

                } else if ( MUTT == 0 ){
                    MUTT --;
                    std::cout << "\n调教成功!可以开始撅了!\n" << std::endl;
                    UserPress = _getch();
                    std::uniform_int_distribution<> Limited0t9Re(0,9); 
                    int Reply = Limited0t9Re(gen0t9Re);
                        switch (Reply) {
                            case 0:
                                std::cout << "MUTT:主人,想要...求求主人,撅我!" << std::endl;
                                break;
                            case 1:
                                std::cout << "MUTT:已经...回不去了..."<<std::endl;
                                break;
                            case 2:
                                std::cout << "MUTT:什么都...无所谓了..."<<std::endl;
                                break;
                            case 3:
                                std::cout << "MUTT:主人,好苏糊...想要更多..."<<std::endl;
                                break;
                            case 4:
                                std::cout << "MUTT:请让我彻底变成主人的猫娘吧!!!"<<std::endl;
                                break;
                            case 5:
                                std::cout << "MUTT:主人!!MUTT还想要更多!!!!"<<std::endl;
                                break;
                            case 6:
                                std::cout << "MUTT:让MUTT去吧,主人!"<<std::endl;
                                break;
                            case 7:
                                std::cout << "MUTT:最爱主人了!"<<std::endl;
                                break;
                            case 8:
                                std::cout << "MUTT:已经...坏掉了..."<<std::endl;
                                break;
                            case 9:
                                std::cout << "MUTT:为什么会这样..."<<std::endl;
                                break;
                            default:
                                std::cout << "这次真的坏掉了..." <<std::endl;
                                break;
                            } 
                    break;
                } else if (UserPress == '-') {
                    std::cout << "\n跳过\n" << std::endl;
                    break;

                } else {
                    std::cout << "\n程序出错,正在启动自毁程序以拯救世界\n" << std::endl;
                    return 0;
                }

        } while (true);
    UserPress = _getch();
    std::cout << "\n程序执行完成!按ESC退出!(或者你可以直接关闭...)";
    do {
        UserPress = _getch();
            if (UserPress == 27) { //ESC的ASCII码是27,要输入ASCII码的时候不要加引号
                return 0;
            }
    } while (true);
}