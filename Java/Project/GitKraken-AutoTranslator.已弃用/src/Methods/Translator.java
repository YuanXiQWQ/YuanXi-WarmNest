package Methods;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;

/**
 * 找GPT翻译
 *
 * @author YuanXi
 * @version 2024.2.28
 */
public class Translator {
    // 初始化
    Configuration config = new Configuration();

    /**
     * 通过向OpenAI API发送测试请求来验证API密钥的有效性.
     * 有效的API密钥将允许请求被处理并返回成功响应.
     * 无效的API密钥将导致错误响应,表明密钥无权进行请求.
     *
     * @return {@code true} 如果API密钥有效且测试请求成功,
     *         {@code false} 如果API密钥无效或请求因任何原因失败.
     *         方法捕获并处理了
     *         {@link IOException}
     *         和
     *         {@link InterruptedException},
     *         这些异常可能在HTTP请求过程中发生.在这些情况下,方法返回{@code false},
     *         表示验证未成功或无法完成.
     * 示例用法:
     * {@code
     * Methods.Translator translator = new Methods.Translator("你的_api_密钥");
     * boolean isValid = translator.validateApiKey();
     * if (isValid) {
     *     System.out.println("API密钥有效.");
     * } else {
     *     System.out.println("API密钥无效或请求失败.");
     * }
     * }
     */
    public boolean validateApiKey() {
        String apiKey = config.getApiKey();
        String testPrompt = "This is a test prompt.";
        String data = String.format("""
                {
                    "model": "text-davinci-003",
                    "prompt": "%s",
                    "max_tokens": 5
                }
                """, testPrompt);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/completions"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(BodyPublishers.ofString(data))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        try {
            HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
            return response.statusCode() == 200;
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return false;
        }
    }

    public String translate(String line) {
        String keyword = config.getKeyword();
        String fileName = config.getFileName();
        String apiKey = config.getApiKey();
        // 给GPT发送请求
        String prompt = "这是和" + keyword + "相关的" + fileName + """
                请将英文释义翻译成中文.注意,仅翻译释义部分,保持键值和JSON结构（如引号,冒号,逗号等）不变.不要添加或修改任何代码结构元素（如大括号、键值等）.
                """
                + line;

        String data = """
                {
                    "prompt": "%s",
                    "temperature": 0.7,
                    "max_tokens": 1024,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                }
                """.formatted(prompt);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/engines/davinci-codex/completions"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(BodyPublishers.ofString(data))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response;
        try {
            response = client.send(request, BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return response.body();
    }
}
