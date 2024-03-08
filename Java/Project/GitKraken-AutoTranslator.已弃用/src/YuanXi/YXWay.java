package YuanXi;

import java.io.*;

/**
 * 一个方法类补充包
 *
 * @author YuanXi
 * @version 2024.2.29
 */
public class YXWay {
    /**
     * 读取并记录文件内容到String变量的方法
     *
     * @param fileName  要读取的文件名称
     * @param lineLimit 要读取的行数限制
     * @return String类型的文件的全部内容
     */
    public String record(File fileName, int lineLimit) {
        Recorder recorder = new Recorder(fileName, lineLimit);
        return recorder.readLines();
    }

    private static class Recorder {
        File fileName;
        int lineLimit;
        int currentLine = 0; // 计数器，追踪当前已读取到的行数

        private Recorder(File fileName, int lineLimit) {
            this.fileName = fileName;
            this.lineLimit = lineLimit;
        }

        /**
         * 读取文件的指定行数。
         *
         * @return 返回读取的文本。
         */
        private String readLines() {
            StringBuilder content = new StringBuilder();
            int linesRead = 0;

            try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
                // 跳过已经读取的行
                for (int i = 0; i < currentLine && reader.readLine() != null; i++) {
                    // 空循环体，仅用于跳过行
                }

                String line;
                while (linesRead < lineLimit && (line = reader.readLine()) != null) {
                    content.append(line).append(System.lineSeparator());
                    linesRead++;
                }
            } catch (IOException e) {
                e.printStackTrace(); // 更好的异常处理
                return null; // 考虑是否有更好的方式处理这个情况
            }

            // 更新已读取的行数
            currentLine += linesRead;
            return content.toString();
        }
    }

    /**
     * record()方法的简写形式,不设置读取行数限制,会一直读取记录直到读完最后一行
     *
     * @param fileName 要读取的文件名称
     * @return String类型的文件的全部内容
     * @throws FileNotFoundException 文件未找到
     *                               <p>
     *                               示例用法:
     *                               {@code
     *                               File fileApi = new File(fileNameApi);
     *                               String fileContent = YXWay.record(fileApi);
     *                               }
     */
    public String record(File fileName) throws FileNotFoundException {
        return record(fileName, -1);
    }
}
