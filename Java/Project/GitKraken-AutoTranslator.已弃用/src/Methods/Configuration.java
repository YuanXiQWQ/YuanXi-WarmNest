package Methods;

/**
 * Javabean
 * Configuration类用于管理和存储应用程序的配置信息。
 * 示例用法：
 * Methods.Configuration config = new Methods.Configuration();
 * String apiKey = config.getApiKey();
 * config.setApiKey("API_KEY");
 *
 * @author YuanXi
 * @version 2024.2.28
 */
public class Configuration {
    /**
     * 待翻译的文件名
     */
    private String fileName = "strings.json";

    /**
     * 翻译出的文件名
     */
    private String translatedFileName = "strings_zh.json";

    /**
     * 给GPT的关键字
     */
    private String keyword = "\"GitHub指令\"";

    /**
     * GPT的API密钥
     */
    private String apiKey;

    /**
     * 保存API的文件名
     */
    private String fileNameApi = "API.txt";

    /**
     * 获取fileName的值
     *
     * @return fileName
     */
    public String getFileName() {
        return fileName;
    }

    /**
     * 获取translatedFileName的值
     *
     * @return translatedFileName
     */
    public String getTranslatedFileName() {
        return translatedFileName;
    }

    /**
     * 获取keyword的值
     *
     * @return keyword
     */
    public String getKeyword() {
        return keyword;
    }

    /**
     * 获取用户输入的API密钥，用于GPT
     *
     * @return 用户输入的API密钥
     */
    public String getApiKey() {
        return apiKey;
    }

    /**
     * 获取fileNameApi的值
     *
     * @return fileNameApi
     */
    public String getFileNameApi() {
        return fileNameApi;
    }


    /**
     * 设置待翻译的文件名
     *
     * @param fileName 待翻译的文件名
     */
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }


    /**
     * 设置翻译出的文件名
     *
     * @param translatedFileName 翻译出的文件名
     */
    public void setTranslatedFileName(String translatedFileName) {
        this.translatedFileName = translatedFileName;
    }

    /**
     * 设置给GPT的关键字
     *
     * @param keyword 给GPT的关键字
     */
    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    /**
     * 设置用户输入的API密钥
     *
     * @param apiKey 用户输入的API密钥
     */
    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * 设置保存API的文件名
     *
     * @param fileNameApi 保存API的文件名
     */
    public void setFileNameApi(String fileNameApi) {
        this.fileNameApi = fileNameApi;
    }
}
