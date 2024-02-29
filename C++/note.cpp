#include <iostream>                                   //用于输入和输出的输入输出流(input/output stream)库,提供了一种方便的方式来处理程序与用户、程序与文件之间的输入和输出交互。
#include <string>                                     //将各种基本数据类型转换为对应的字符串表示。例如将整数、浮点数等转换为字符串,以便在输出时使用
#include <cmath>                                      //用于执行数学运算,提供了一系列函数,涵盖了各种数学操作,例如三角函数、指数函数、对数函数、幂函数、取整等。
#include <algorithm>                                  //包含了许多用于操作序列(如数组、向量、容器等)的函数和算法,例如查找、排序、比较等。
#include <chrono>                                     //用于处理日期和时间的头文件,可以用于测量时间间隔、计时等操作,同时支持高精度的时间测量。
#include <ctime>                                      //同上,但是比较传统和基础
#include <random>                                     //让这个世界变得混沌吧！！！！！！
#include <conio.h>                                    //**不属于C++标准库,仅在一些特定编程环境中适用**提供一些用于控制台输入和输出的函数
#include <vector>                                     //用于动态数组的管理
//using namespace来全局命名空间,::来局部命名空间。如果要全局命名,应输入在此位置
//例:using namespace std,之后使用cout不需要单独声明std::cout

//C++忽略空白,但是有些时候留白会让代码易读

//每一段话都要加";"来结束
//下面的定义代码块是用于后面的实数比较大小
std::string Symbol(double value) {              //创建名为Symbol的文字变量,接受参数double类型的value参数(浮点数的值)
  if (value == std::sqrt(2.0)){                 //如果浮点数的值等于根号二,使用了<cmath>头文件
        return "√2";                            //将输出值替换为√2(否则会输出精确几位后的具体值)
    } else if (value == std::acos(-1.0)) {      //如果浮点数的值等于π
        return "π";                             //将输出值替换为π
    } else if (value == std::exp(1.0)) {        //如果浮点数的值等于自然常数
        return "e";                             //将输出值替换为e
    } else {                                    //剩余的
        return std::to_string(value);           //将一个数值 value 传递给 std::to_string,将这个数值转换为对应的字符串表示,从属于<string>头文件。
    }
  }                                             //结束该定义代码块
    //由于变量定义属于全局定义,应该在程序入口点main之前声明。
int main() {                                          //程序的入口点,程序从这里运行,到返回0(return 0)时结束。返回0表示程序正常终止。
      //这样注释
      /*或者这样*/
      /* \n就是键盘上的ENTER
         \t就是键盘上的TAB 
         \\插入反斜杠
         \"插入双引号*/ 
  //**变量与常量
        int integers = 19;//创建名为integers的变量
      /*变量:C++基本数据类型,无需声明std等
        int存储整数 (Integer),如 123 或 -123
        double存储浮点数 (Floating point number),如 1.23 或 -1.23
        char存储单个字符 (Character),如 "a" 或 "B" 。Char值用单引号括起来
        string存储文本 (String/text),如 "Hello World" 。字符串用双引号括起来
        bool-存储具有两种状态的值:true或false*/
        integers = 20; //直到最近的输出结果会取最后一次设置变量的值
        std::cout << integers << std::endl;//cout输出(打印),输出变量
      /*常量:不可更改且只读
        const 变量类型 变量名称 = 常量值;*/
        const double PlanckConstant = 6.62607015E-34;//设置常量
      //PlanckConstat = 1.14514E10086 输出错误,常量不可更改
        std::string Userinput;//string数据型需要声明std前缀(如果已经全局声明则不用)

  //**输出与输入
        std::cout << "请在下面输入,将会输出你打的字。请不要打空格" << std::endl;
        std::cin >> Userinput;//cin向用户询问并获取输入值
        std::cout << "你写了:\n" << Userinput << std::endl ;//输出
      //然鹅,cin会将空格,TAB等视为终止符,所以如果想打空格什么的,需要用到getline()函数读取一行文本。(需要使用std)
        std::cout << "现在你可以写带空格的文字了。" << std::endl;
        Userinput.clear();//清除之前写的内容
        std::cin.ignore(INT_MAX, '\n');
        /*在用户输入无效数据(比如非整数)后,清除输入缓冲区中的残余字符确保下一次的输入操作不受之前无效输入的影响。
        INT_MAX表示整数最大值,意为忽略全部字符;'\n'表示要忽略的分隔符,即要忽略直到遇到换行符为止的所有字符*/
        std::getline (std::cin, Userinput);
        std::cout << "你写了:\n" << Userinput <<"" << std::endl;
        char character =65;//char值需要单引号,只能是单个字符。这里的65并不代表数字65,而是ASCII值,此时不应该加引号
      //ASCII字符表https://www.w3schools.com/charsets/ref_html_ascii.asp
        std::string Invite= "我家还蛮大的";//string不仅需要前缀,值还需要加双引号
      /*要使用string,最好在开头声明 #include <string>
      因为并不是所有的编译器都将string添加到了iostream库中*/

  //**运算符

      /*算术运算符
        + 加(Addition)
        - 减(Subtraction)
        * 乘(Multiplication)
        / 除(Division)
        % 模量(Modulus)
        ++增量(Increment)
        --减量(Decrement)*/
          int x =114 + 514; int y = x + 233; int z = x + y;

      /*赋值运算符
     运算符    例子    等同于
        =     x = 5     x = 5
        +=    x += 3    x = x + 3
        -=    x -= 3    x = x - 3
        *=    x *= 3    x = x * 3
        /=    x /= 3    x = x / 3
        %=    x %= 3    x = x % 3
        &=    x &= 3    x = x & 3
        |=    x |= 3    x = x | 3
        ^=    x ^= 3    x = x ^ 3
        >>=   x >>= 3   x = x >> 3
        <<=   x <<= 3   x = x<< 3*/

      /*比较运算符
        ==    等于(equal to)
        ！=   不等于(not equal)
        >     大于(greater than)
        <     小于(less than)
        >=    大于等于(greater than or equal to)
        <=    小于等于(less than or equal to)*/

      /*逻辑运算符
        运算符      名称                        定义                                     例子
        &&    与门(logical and)     如果条件都满足,则返回"true",反之"false"       x < 5 && x < 10
        ||    或门(logical or)      如果条件满足其一,则返回"true",反之"false"     x < 5 || x < 4
        !     非门(logical not)     反转结果,如果为"true",则返回"false"           !(x<5 && x < 10)*/

  //**字符串

      /*+ 串联  等于.append()   例如 Account + Password等同于 Account.append(Password)
      **如果+前后是数字,系统会将两个数字作和而不是串联*/

      /*.length(),.size()*/ 
        std::cout << "请写一段文字:" << std::endl;
        std::string txt;
        std::getline (std::cin, txt);
        std::cout << "这段文字总共" << txt.length() << "个字。" << std::endl;//使用.length()或者.size()来获取字符串长度,二者功能完全相同

      /*访问与更改字符串[]*/
        std::string pi = "3.1415926535897932384626";//声明文本变量π的小数点后22位
        std::cout << pi[6] << "\n";//访问变量"pi"的第6+1个字符(因为是从0开始)
        pi[24]='4';//修改字符串第25位为4
      //例
      while (true) {//循环,重复执行直到返回为true
          std::cout << "你想查询圆周率的小数后第几位?最多23位(-1)退出:" << std::endl;
          int Accessing;//创建“Assessing”整数变量来记录用户输入并限制输入为整数
          std::cin >> Accessing;//等待用户输入
          if (std::cin.fail()) {//配合"if"用于检测输入流的状态是否错误。如果输入流状态错误(例如在整数变量"int"中输入字符串)
              std::cin.clear();//清除错误状态
              std::cin.ignore(INT_MAX, '\n');//确保纠正错误状态后继续输入不受影响
              std::cout << "无效输入,请输入一个整数。" << std::endl;
              // 输入失败,清除错误状态和输入缓冲区,并提示用户重新输入
          } else if (Accessing == -1) {//或者满足另一个条件:当用户输入"-1"
              std::cout << "退出查询。" << std::endl;
              break;//终止循环
          } else if (Accessing > 0 && Accessing <= 23) {//或者满足另一个条件:用户输入了文本变量"pi"范围内的位数
              std::cout << "圆周率的小数后第" << Accessing << "位是:\"" << pi[Accessing + 1] << "\"" <<std::endl;//访问该位数并显示
              break;//终止循环
          } else if (Accessing < -1 || Accessing >= 23) {//或者满足另一个条件:用户输入了"pi"范围外的位数
            std::cout << "李在淦什么?" << std::endl;//给予用户有力的回击
          } else {//如果用户输入了其它意料之外的值
              std::cout << "妈了个MUTT。\n";//对用户进行问候
          }
      }//结束该while代码块

      /*特殊字符*/
        std::cout << "双引号是\"\"\",单引号是\"\'\",反斜杠是\"\\\"\"" << std::endl;//当要打出""","'"和"\"这些会被C++误解的特殊字符时,在前面加反斜杠转义符"\"来消歧义

  //**数学

      /*最大和最小*/
        double sqrt2 = std::sqrt(2.0);//创建根号2
        double DoublePi = std::acos(-1.0);//创建π,来自C++标准库
        double e = std::exp(1.0);//创建自然常数e
        std::cout <<"\"√2\"和\"π\"之间" << Symbol(std::max(sqrt2,DoublePi)) << "数值更大" << std::endl;
        //max函数只能比较两组数据,如果要三组以上可以通过逐步比较
        double MaxValue = std::max(sqrt2,std::max(DoublePi,e));
        double MinValve = std::min(sqrt2,std::min(DoublePi,e));
        std::cout <<"\"√2\"和\"π\"和\"e\"之中" << Symbol(MaxValue) <<"最大,"<< Symbol(MinValve) << "最小。" << std::endl;

      /*cmath包含的其它功能*/
      /* 功能                    作用
        abs(x):            返回 x 的绝对值
        acos(x):           返回 x 的反余弦值
        asin(x):           返回 x 的反正弦值
        atan(x):           返回 x 的反正切值
        cbrt(x):           返回 x 的立方根
        ceil(x):           返回将 x 向上取整的最近整数值
        cos(x):            返回 x 的余弦值
        cosh(x):           返回 x 的双曲余弦值
        exp(x):            返回 e 的 x 次方的值
        expm1(x):          返回 e 的 x 次方减 1 的值
        fabs(x):           返回浮点数 x 的绝对值
        fdim(x, y):        返回 x 和 y 之间的正差值
        floor(x):          返回将 x 向下取整的最近整数值
        hypot(x, y):       返回不产生中间溢出或下溢的 sqrt(x^2 + y^2)
        fma(x, y, z):      在不失去精度的情况下返回 x*y+z
        fmax(x, y):        返回浮点数 x 和 y 中的最大值
        fmin(x, y):        返回浮点数 x 和 y 中的最小值
        fmod(x, y):        返回 x/y 的浮点余数
        pow(x, y):         返回 x 的 y 次幂的值
        sin(x):            返回 x 的正弦值(x 以弧度为单位)
        sinh(x):           返回双精度值 x 的双曲正弦值
        tan(x):            返回角 x 的正切值
        tanh(x):           返回双精度值 x 的双曲正切值*/

  //**布尔值

      /*根据定义回报真/假(true/false)*/
        bool CSGO = true;//定义CSGO为真
        bool GettingOverIt = false;//定义玩个锤子为假
        std::cout << CSGO << "\n" << GettingOverIt << std::endl;//true将会输出1,false将会输出0

      /*根据事实回报真/假*/
        int Boolx = std::sqrt(1/7);//根号下七分之一
        int Booly = std::pow(6.6,-1/2);//6.6的负二分之一次方
        std::cout << (Boolx < Booly) << std::endl;//判断根号下七分之一小于6.6的负二分之一次方是否为真
        int Boolz = 10;
        std::cout << (Boolz == 10) << std::endl;//注意:"="是赋值,"=="是关系
        //还可以直接放在括号中比较
        std::cout << (std::sqrt(8.0) < std::sqrt(9.0)) << std::endl;//判断根号八小于根号九是否为真
        std::cout << (std::sqrt(4.0)== -2) << std::endl;

  //**条件

      /*条件语句*/

      /*if:指定在指定条件要执行的代码块
      else:指定在相同条件为false时要执行的代码块
      else if:如果第一个条件为false,则指定要测试的新条件
      switch:指定要执行的许多替代代码块*/

      /*if, else, else if*/

      /*else if*/
      /*规则:if (条件1) {
        条件1为真时将执行的代码块;
      } else if (条件2) {
        条件1为假,但是条件2为真时将执行的代码块;
      } else {
        条件1,2都为假时将执行的代码块;
      }*/
        Userinput.clear();
        std::cin.ignore(INT_MAX, '\n');
        std::cout << "请按\"1\"" << std::endl;
        std::cin >> Userinput;

      if (Userinput == "1") {
          std::cout << "真乖" << std::endl;
        } else if (Userinput == "0") {
          std::cout << "看来你不想当1啊" << std::endl;
        } else {
          std::cout << "不听话" << std::endl;
      }

      /*条件语句的简写形式*/
      /*三元运算符(Ternary Operator),用于简单的 if, else 声明。规则:变量 = (条件) ? (条件为真时变量的赋值) : (条件为假时变量的赋值)*/
        std::chrono::system_clock::time_point now           //创建名为now的变量,该变量类型来自<chrono>,类似"std::string","int","double"的存储时间点的变量类型,包括了年月日时分秒
        = std::chrono::system_clock::now();               //接着上一段代码,因为加注释太长,我给分段了。这个函数是<chrono>的获取当前时间点的函数
        std::time_t CurrentTime                             //类似"std::string"的表示UTC(世界协调时)到现在的秒数的变量类型,爱来自<ctime>
        = std::chrono::system_clock::to_time_t(now);      //这是将<chrono>的"一大串::time_point"变量转换为<ctime>的"time_t"类型的函数
        struct std::tm* Localtime = std::localtime(&CurrentTime); //这句目前超纲了,包含了*指针,&取地址运算符和struct自定义数据类型,指针指向std::tm类型,将localtime函数的返回值赋值给ptm,这样ptm就指向了一个包含转换后本地时间信息的std::tm结构。
        int hour = Localtime->tm_hour;   //获取时
        int minute = Localtime->tm_min;  //获取分
      if (minute<10 && minute>= 0) {
          std::cout << "当前系统时间为: " << hour << ":" << "0" << minute <<",";
      } else {
        std::cout << "当前系统时间为: " << hour << ":" << minute <<",";
      }
      //以上是条件语句,下面这三行是执行语句
        std::string Greeting = (hour < 12) ? "上午好喵,主人! " : "下午好喵,主人! "; //好怪
        std::cout << Greeting << std::endl;

  //**switch
      /*使用Switch 语句来选择要执行的多个代码块之一,规则为:
        switch (表达式) {
          case x:
              当表达式的值为x 时执行的代码;
            break;  //用于跳出switch语句
          case y:
              当表达式的值为y 时执行的代码;
            break;
          default:
              当表达式不等于这里的case 时执行的代码;
        }
      */
      /*注意事项:
        1.每个 case 的值必须是 整数型 或 字符型 常量表达式。
        2.break 语句用于跳出 switch 语句,否则程序将会继续执行下一个 case 的代码块。
        3.如果没有匹配的 case,将会执行 default 分支的代码块(如果有定义的话)。
        4.switch 表达式只能是整数型、字符型或枚举类型。
      */
        int weekday = Localtime->tm_wday;
        std::string MUTTsGreeting;

      switch(weekday){
        case 0:
            MUTTsGreeting = "今天是星期一," + Greeting + "要保持元气满满喵! MUTT在这里随时等待着主人喵!";
          break;
        case 1:
            MUTTsGreeting = "今天是星期二," + Greeting + "今天也要元气满满喵! MUTT随时等候主人的命令喵!";
          break;
        case 2:
            MUTTsGreeting = "今天是星期三," + Greeting + "工作日已经过去一半了喵! MUTT为主人加油喵!";
          break;
        case 3:
            MUTTsGreeting = "今天是星期四," + Greeting + "马上要放假了喵! 主人要再接再厉喵!" ;
          break;
        case 4:
            MUTTsGreeting = "今天星期五了喵!" + Greeting + "明天就放假了喵! MUTT好想和主人度过一个愉快的假期喵!";
          break;
        case 5:
            MUTTsGreeting = "今天是星期六!" + Greeting + "今天不用去上班了喵! 主人快把公文包放下,MUTT想要被主人宠幸的喵!";
          break;
        case 6:
            MUTTsGreeting = "今天是星期日," + Greeting + "明天就要上班了喵! 今天再撅一次MUTT好不好喵!";
          break;
        default:
            MUTTsGreeting = "和指挥室断开通讯了,MUTT要坏掉了喵! 主人一定要对MUTT温柔点喵!";
      }//好怪的代码块
        std:: cout << MUTTsGreeting << std::endl;

  //**while 循环

      /*while 循环*/
      /*规则:
        while (条件){
          代码块;
        }
        判断条件满足后,while会一直重复执行,直到条件为假才会继续执行下一行指令
      */
        std::cout << "注册账号密码。\n请输入你的账号:" << std::endl;
        std::string Account , Password , TypeInPassword; std::cin >> Account ;
        std::cout << "请创建密码:" << std::endl;
        std::cin >> Password ;
        std::cout << "注册成功,开始登录。\n你的账号是:" << std::endl << Account <<"\n请输入密码:" << std::endl;

      while(true){
          std::cin >> TypeInPassword;
          if (TypeInPassword == Password) {std::cout << "登录成功！" << std::endl;
              break;
          } else{
              std::cout << "密码错误,请重新输入。" << std::endl;
          }
      }

      /*do/while 循环*/
      /*规则:
        do {
          要循环的代码;
        }
        while (条件);
        先执行do,后检查是否符合条件,确保do 后的代码至少执行一次
      */
        std::random_device ZerotoNine; // 获取随机设备种子
        std::mt19937 gen0t9(ZerotoNine()); //使用种子初始化随机数生成器
        std::uniform_int_distribution<> Limited0t9(0, 9); //定义整数分布范围为1-10
        std::random_device ZerotoNineRe;
        std::mt19937 gen0t9Re(ZerotoNineRe());
        int MUTT = Limited0t9(gen0t9); //生成随机整数Limited

        char UserPress;
        std::cout << "按1尝试将MUTT变成猫娘,按\"-\"跳过" << std::endl;

        do {
              do {
                  UserPress = _getch(); //从键盘读取字符并赋值给UserInputInt
                  if(UserPress == '1' || UserPress == '-'){
                      break;
                  } else {
                      std::cout << "tmd劳资让你按1你非不按,赶紧按1,不想按就按-跳过" << std::endl;
                  }
                  //检测用户是否按下1或/
              } while (true); //终止条件始终为真,代表永远不终止,除非break;被执行
              //如果按下1或者/则跳出循环

              if ( MUTT > 0 && UserPress != '-') {
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
                  std::uniform_int_distribution<> Limited0t9Re(0,9); 
                  int Reply = Limited0t9Re(gen0t9Re);
                      if (Reply == 0) {
                          std::cout << "MUTT:主人,想要...求求主人,撅我!" << std::endl;
                      } else if (Reply == 1) {
                          std::cout << "MUTT:已经...回不去了..."<<std::endl;
                      } else if (Reply == 2) {
                          std::cout << "MUTT:什么都...无所谓了..."<<std::endl;
                      } else if (Reply == 3) {
                          std::cout << "MUTT:主人,好苏糊...想要更多..."<<std::endl;
                      } else if (Reply == 4) {
                          std::cout << "MUTT:请让我彻底变成主人的猫娘吧!!!"<<std::endl;
                      } else if (Reply == 5) {
                          std::cout << "MUTT:主人!!MUTT还想要更多!!!!"<<std::endl;
                      } else if (Reply == 6) {
                          std::cout << "MUTT:让MUTT去吧,主人!"<<std::endl;
                      } else if (Reply == 7) {
                          std::cout << "MUTT:最爱主人了!"<<std::endl;
                      } else if (Reply == 8) {
                          std::cout << "MUTT:已经...坏掉了..."<<std::endl;
                      } else if (Reply == 9) {
                          std::cout << "MUTT:为什么会这样..."<<std::endl;
                      } else {
                          std::cout << "这次真的坏掉了..." <<std::endl;
                      }
                      //这段等同于上段的switch 写法,不过switch 看起来更简洁,且同时也是编译器对这种情况下的else if 的优化
                  std::cout << "调教成功!可以开始撅了!" << std::endl;
                  break;

              } else if (UserPress == '-') {
                  std::cout << "跳过" << std::endl;
                  break;

              } else {
                  std::cout << "程序出错,正在启动自毁程序以拯救世界" << std::endl;
                  return 0;
              }

        } while (true);

  //**for 循环
      /*规则
      for (初始化语句; 循坏条件; 迭代语句) {
        循环体;
      }
      其中:
        初始化语句:代码块执行前执行的代码(一次),一般用于初始化循环控制变量
        循环条件:在每次循环迭代开始前被检查,如果条件为真,则继续执行循环体；如果条件为假,则退出循环。
        迭代语句:在每次循环体执行后执行,一般用于更新循环控制变量,使循环向终止条件靠近。
      通常用于明确了循环代码块多少次的时候
      执行顺序:初始化语句->检查循环条件->循环体->迭代语句 --1
                ->检查循环条件->循环体->迭代语句          --2+
                ->...->循环条件为假->跳出循环             --end
        在条件语句中(for后面的括号中)若有任意一项需要多行代码,代码间使用逗号分隔
      */
        int MUTTTeachingValue = 0;
        bool Skip = false;

        std::cout << "当前MUTT的调教值为:" << MUTTTeachingValue << ",按任意非\"-\"键调教MUTT;按\"-\"跳过此程序" << std::endl;

        for (MUTTTeachingValue = 0; MUTTTeachingValue <=9 ; ++ MUTTTeachingValue) {
            UserPress = _getch();

            if (UserPress != '-') {
                  std::cout << "MUTT当前调教值+1,当前调教值为" << MUTTTeachingValue << std::endl;
            } else {
                  Skip = true;
                  break;
            }
        }
        
        if (Skip){ //同等于 "if (Skip == true)"
            std::cout << "跳过" << std::endl;
        } else {
            std::cout << "MUTT调教成功!" << std::endl;
        }
        //检查用户是否跳过并输出结果

      /*for-each 循环*/
      /*规则
      for (变量类型 变量名称 : 要遍历的集合) {
        循环体;
      }
      其中:
        变量类型:通常是要遍历的集合内的变量类型
        变量名称:该变量用于存储在集合中当前元素的值
        要遍历的集合:通常为数组或其它元素集
      专门用于遍历集合中的每个元素
      */
        std::vector<int> ZXYZYM = {1, 1, 4, 5, 1, 4}; //创建集合numbers并包含内容

        for (int ZX : ZXYZYM) {
          std::cout << ZX;
        }
        
          std::cout << std::endl;
          
    //**中断与继续
      /*中断break; */
      //使用break; 来跳出各种循环
      /*继续continue; */
      //用于跳过本次循环,但是不跳出整个循环
        std::vector<int> PrimeNumberWithin50 = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47};
        std::cout << "50以内的质数有:\"";
    
        for (int num : PrimeNumberWithin50) {
            if (num == 47) {
              std::cout << num;
            } else {
              std::cout << num << ", ";
            }
        }
        std::cout << "\"" << std::endl;
    
        std::cout << "其中奇数包含:";
        for (int num : PrimeNumberWithin50) {
            if (std::fmod(num, 2) ==1) { //使用cmath 的fmod,除以二余数为1,同等于num % 2 == 1
                if (num == 47) {
                  std::cout << num;
                } else {
                  std::cout << num << ", ";
                }  
            } else {
                continue; // 跳过偶数
            }
        }
        std::cout << std::endl;

    //**数组

      /*数组*/
      /*规则:(可以不赋值)
        变量类型  变量名称[元素数量] = {元素1,元素2,...,元素n };
      用于在单个变量中存储多个值
      */
        int ZXYZYM1[6] = {2,1,4,5,1,4};
        ZXYZYM1[0] = 1; //使用 变量名称[元素位置] 赋值符号 赋值; 更改元素
        std::cout << ZXYZYM1[3] << ZXYZYM1[0] << std::endl; //使用 变量名称[元素位置(从0开始)]; 访问元素

      
      /*循环遍历数组*/
      //上面提到过
        for (int i = 0; i<6; i++) {
          std::cout << ZXYZYM1[i];
        }
        std::cout << std::endl;

      /*数组的省略*/
      /*在声明数组的时候不必指定元素*/
        int Array[1];
        Array[0] = 1;
        Array[1] = 2;

      /*获取数组的大小*/
      /*使用 sizeof(数组名称) 来获取数组共有多少字节,而不是多少元素,每种元素由不同位数的字节构成
      若要获取具体的元素,需要将数组的大小除以其包含的数据类型的大小*/
        std::cout << "数组\"Array\"中包含" << sizeof(Array) << "字节。由于Array的数据类型是int,所以其包含元素数量为" << sizeof(Array) / sizeof(int) << "。" << std::endl;
      //因此前面遍历数组的理想写法可以是这样:
        for (int i = 0; i< sizeof(ZXYZYM1) / sizeof(int); i++) {
          std::cout << ZXYZYM1[i];
        }
        std::cout << std::endl;

        /*多维数组*/
        //类似于创建表格
        /*规则:std::string letters[列][行]*/
        
    std::cout << "运行完了。" << std::endl;
  return 0;//返回0代表成功执行并关闭
}//main代码块结束