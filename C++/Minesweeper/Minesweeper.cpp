#include <iostream>
#include <string>
#include <vector>
#include <random>
#include <locale>

const int MaxRow = 20;
const int MaxColumns = 20;
const int MinRow = 2;
const int MinColumns = 2;
int Row, Columns;

// 布置地雷
void setupMines(std::vector<std::vector<bool>> &mines, int numMines) {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> distRow(0, Row - 1);
    std::uniform_int_distribution<> distCol(0, Columns - 1);

    while (numMines > 0) {
        int r = distRow(gen);
        int c = distCol(gen);
        if (!mines[r][c]) {
            mines[r][c] = true;
            numMines--;
        }
    }
}

// 计算周围地雷数
int countMines(const std::vector<std::vector<bool>> &mines, int r, int c) {
    int count = 0;
    for (int i = std::max(0, r - 1); i <= std::min(Row - 1, r + 1); i++) {
        for (int j = std::max(0, c - 1); j <= std::min(Columns - 1, c + 1); j++) {
            if (mines[i][j]) count++;
        }
    }
    return count;
}

int main() {
    std::locale::global(std::locale(""));
    std::wcout.imbue(std::locale());
    std::cout << "请设定扫雷面积, 最小面积为" << MinRow << "行" << MinColumns << "列; 最大面积为" << MaxRow << "行"
              << MaxColumns << "列。\n";
    std::cout << "行数: ";
    while (true) {
        std::cin >> Row;
        if (Row >= MinRow && Row <= MaxRow) break;
        std::cout << "数值无效，重新输入行数: ";
    }
    std::cout << "列数: ";
    while (true) {
        std::cin >> Columns;
        if (Columns >= MinColumns && Columns <= MaxColumns) break;
        std::cout << "数值无效，重新输入列数: ";
    }

    std::vector<std::vector<bool>> mines(Row, std::vector<bool>(Columns, false));
    std::vector<std::vector<char>> map(Row, std::vector<char>(Columns, '0'));

    int numMines = (Row * Columns) / 6;  // 地雷数约为总格子数的1/6
    setupMines(mines, numMines);

    bool GameOver = false;
    std::string Input;
    std::string Error = "输入坐标无效,请重新输入。示例：\"A1\"表示行A,列1\n";

    while (!GameOver) {
        for (int i = 0; i < Row; i++) {
            std::cout << char('A' + i) << " ";
            for (int j = 0; j < Columns; j++) {
                std::cout << map[i][j] << "  ";
            }
            std::cout << "\n";
        }

        std::cout << "坐标: ";
        std::cin >> Input;
        if (Input.length() >= 2 && Input.length() <= 3) {
            char TypeInRow = std::toupper(Input[0]);
            std::string TypeInColumns = Input.substr(1);

            if (TypeInRow >= 'A' && TypeInRow < 'A' + Row) {
                int r = TypeInRow - 'A';
                int columnValue = std::stoi(TypeInColumns);
                if (columnValue >= 1 && columnValue <= Columns) {
                    int c = columnValue - 1;

                    if (mines[r][c]) {
                        std::cout << "你踩到地雷了！游戏结束。\n";
                        GameOver = true;
                    } else {
                        int mineCount = countMines(mines, r, c);
                        map[r][c] = '0' + mineCount;
                        std::cout << "安全。周围地雷数：" << mineCount << "\n";
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
    }
}
