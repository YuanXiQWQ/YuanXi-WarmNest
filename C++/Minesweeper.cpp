#include <iostream>
#include <string>
#include <random>

int main() {
    const int MaxRow = 20;
    const int MaxColumns = 20;
    const int MinRow = 2;
    const int MinColumns = 2; 
    int Row;
    int Columns;
    //声明变量

    char map[MaxRow][MaxColumns];
    for (int i = 0; i < MaxRow; i++){
        for (int j = 0; j < MaxColumns; j++){
            map[i][j] = '0';
        }
    }
    //初始化地图，所有未揭示的格子都显示为0

    std::cout << "请设定扫雷面积," << "最小面积为" << MinRow << "行" << MinColumns << "列; " << "最大面积为" << MaxRow << "行" << MaxColumns << "列。" << std::endl;
    std::cout << "行数:";
    do{
        std::cin >> Row;
        if(Row > 1 && Row <= MaxRow){
            break;
        } else {
            std::cout << "数值无效，重新输入" << std::endl << "行数:";
        }
    }while(true);
    std::cout << "列数:";
    do{
        std::cin >> Columns;
        if(Columns > 1 && Columns <= MaxColumns){
            break;
        } else {
            std::cout << "数值无效，重新输入" << std::endl << "列数:";
        }
    }while(true);
    //设定扫雷面积

    std::cout << "游戏开始。你可以通过类似记录国际象棋的方式，输入\"行列\"来扫描单元格。例如，输入\"B5\"表示扫描B行5列。" << std::endl;
    //讲述游戏规则

    std::cout << "  ";
    for (int i = 0; i < Columns; i++){
        int OutputColumns = i + 1; //将C++的从0开始的习惯与用户从1开始的习惯转换
        std::cout << OutputColumns;
        if (OutputColumns >= 10) {
            std::cout << " ";
        } else {
            std::cout << "  ";
        }
        //通过空格使列标尺与单个字符的地图对齐
    }
    std::cout << std::endl;
    //显示地图列标尺
    for(int i = 0; i < Row; i++){
        std::cout << static_cast<char>('A' + i) << " "; //显示行标尺，从A到MaxColumn 所在的字母
        for (int j = 0; j < Columns; j++){
            map[i][j] = '0';
            std::cout << map[i][j] << "  ";
        }
        //显示每行的元素
    std::cout << std::endl; //在显示完一行后换行
    }
    //显示地图

    bool GameOver = false; //用于检测游戏是否结束
    std::string GameStatus; //用于保存游戏结束状态(结束原因)
    std::string Check; //用于每次扫描时保存用户输入的坐标
    std::string TypeInRow; //用于将用户输入坐标的行拆分出来
    std::string TypeInColumns; //用于将用户输入坐标的列拆分出来
    std::string Error = "输入坐标无效,请重新输入。示例：\"A1\"表示行A,列1\n"; //用于问候用户
    do {
        std::cout << "坐标:";
        std::cin >> Check;

        if (Check.length() >= 2 && Check.length() <= 3) {
            TypeInRow = Check[0];
            TypeInColumns = Check.substr(1);

            if (TypeInRow >= 'A' && TypeInRow <= 'A' + Row) {
                if (TypeInColumns.length() == 1 && TypeInColumns >= "1" && TypeInColumns <= "9") {
                    // 处理合法坐标的逻辑
                } else if (TypeInColumns.length() == 2) {
                    int columnValue = std::stoi(TypeInColumns);
                    if (columnValue >= 10 && columnValue <= (9 + Columns)) {
                        // 处理合法坐标的逻辑
                    } else {
                        std::cout << Error;
                    }
                } else {
                    std::cout << Error;
                }
            } else {
                std::cout << Error;
            }
        } else {
            std::cout << Error;
        }
    } while (!GameOver);
}