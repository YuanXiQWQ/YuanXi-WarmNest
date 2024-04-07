/*jQuery Ajax:异步无刷新技术. AJAX是依赖jQuery的,所以要引用jQuery
异步:无需等待代码执行完成后再进行下一项
无刷新:局部刷新,不会刷新整个网页
*/
/*$.ajax
    jQuery调用ajax方法:
        格式:
        $.ajax({
            type:       请求的方式(get/post),默认是get
            url:        请求的url
            async:      是否异步,默认是true,表示异步
            data:       发送到服务器的数据
            dataType:   预期服务器返回的数据类型
            contentType:设置请求头
            success:    请求成功时调用此函数
            error:      请求失败时调用此函数
        });
*/

/*$.get
*  简化的$.ajax方法
* */
// 1. 请求json文件,忽略返回值
$.get("./data.json");
// 2. 请求json文件，传递参数,忽略返回值
$.get("./data.json", {
    username: "Jerry",
    password: "123456"
});
// 3. 请求json文件，拿到返回值
$.get("./data.json", function (data) {
    console.log(data);
});
// 4. 请求json文件，传递参数，拿到返回值
$.get("./data.json", {
    username: "Jerry",
    password: "123456"
}, function (data) {
    console.log(data);
});

/*$.getJSON
*  基本上一样,但是只识别JSON格式,如果不是则无法获取
*  语法:
*  $.getJSON(请求地址,请求参数,成功后的回调函数(){});
* */
