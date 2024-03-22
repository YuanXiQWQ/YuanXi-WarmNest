{
    /*之前编写的服务器都是传统的服务器,服务器的结构是基于MVC模式
        Model   数据模型
        View    视图,用来呈现
        Controller  控制器，复杂加载数据并选择视图来呈现数据
      传统的大服务器是直接为客户端返回一个页面,但是不能适用于现在的应用场景
      现在的应用长江,一个应用通常都会有多个客户端(client)存在
        web端
        移动端(app)
        pc端
        如果服务器直接返回html页面,那么服务器就只能为web端提供服务
            其他类型的客户端还需要单独开发服务器,这样就提高了开发和维护的成本
      解决:
        传统的服务器需要做两件事:
            1. 加载数据
            2. 将模型渲染进视图
        解决方案:
            将渲染视图的功能从服务器中玻璃出来
                服务器只负责向客户端返回数据,渲染视图的工作由客户端自行完成
            分离后,服务器只提供数据,一个服务器可以同时为多种客户端提供服务
                同时将视图渲染的工作交给客户端以后,简化了服务器代码的编写

      REST
        REpresentation State Transfer
        表示层状态的传输,相当于把数据传给客户端
        就是一种服务器的设计风格,主要特点是服务器只返回数据
        服务器和客户端在传输数据时通常会使用JSON作为数据格式
        请求方法:
            GET     加载数据
            POST    向服务器新建或添加数据
            PUT     添加或修改数据
            PATCH   修改数据
            DELETE  删除数据
            OPTION  由浏览器自动发送,检查请求的权限
        API(接口)可以理解为访问REST的路径,也叫Endpoint(端点)
            请求的方法
            请求的路径
    * */
}
{
    //编写API
    const STU_ARR = [
        {id: "1", name: "张三", age: 18, gender: "male"},
        {id: "2", name: "李四", age: 20, gender: "female"},
        {id: "3", name: "王五", age: 22, gender: "male"}
    ];

    const express = require("express");
    const app = express();

    //定义学生信息的路由
    app.get("/students", (req, res) => {
        // res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        console.log("收到students的get请求");
        //返回学生信息
        res.send(STU_ARR);
    });

    //定义一个添加学生的路由
    app.post("/students", (req, res) => {
        console.log("收到students的post请求");

        //获取学生的信息
        STU_ARR.push({
            id: "4",
            name: "赵六",
            age: 24,
            gender: "male"
        });

        //添加成功
        res.send({
            status: "ok",
            data: STU_ARR
        });
    });

    //定义一个删除学生的路由
    app.delete("/students", (req, res) => {
        //获取学生的ID
        const id = req.params.id;

        //遍历数组
        for (let i = 0; i < STU_ARR.length; i++) {
            if (STU_ARR[i].id === id) {
                let delStu = STU_ARR[i];
                STU_ARR.splice(i, 1);
                //数据删除成功
                res.send({
                    status: "ok",
                    data: delStu
                });
                return;
            }
        }
        //如果执行到这,说明学生不存在
        res.status(403).send({
            status: "error",
            message: "学生ID不存在"
        });
    });

    //定义一个修改学生的路由
    app.put("/students", (req, res) => {
        //获取数据
        let {id, name, age, gender} = req.body;
        //根据ID查询学生
        let updateStu = STU_ARR.find(item => item.id === id);
        if (updateStu) {
            updateStu.name = name;
            updateStu.age = age;
            updateStu.gender = gender;
            res.send({
                status: "ok",
                data: updateStu
            });
        } else {
            res.status(403).send({
                status: "error",
                message: "学生ID不存在"
            });
        }
    });

    app.listen(3000, () => {
        console.log("服务器启动成功");
    });

    /*postman
    * 一个软件,通过它可以帮助向服务器发送各种请求
    *   帮助我们测试API
    * */

    //AJAX(Async JavaScript And XML)
    /*在JS中向服务器发送请求加载数据的技术叫AJAX
    * 异步的JS和XML
    * 作用就是通过JS向服务器发送请求来加载数据
    * XML是早起AJAX使用的数据格式
    *   和HTML差不多,但是标签可以自定义
    * 目前数据格式都使用JSON
    * 可以选择的方案:
    *   1. 传统的XMLHTTPRequest(XHR),不怎么用了
    *   2. Fetch
    *   3. Axios,主要用的
    * CORS(Cross-Origin Resource Sharing)跨域资源共享
    *   跨域请求:
    *       如果两个网站的完整的域名不相同,就是跨域
    *       跨域需要检查三样东西:
    *           协议,域名,端口号
    *       三个只要有一个不同,就算跨域
    *       当通过AJAX发送跨域请求时,浏览器为了服务器安全,会阻止JS读取到服务器的数据
    *   解决方案:
    *       在服务器中设置一个允许跨域的头
    *           Access-Control-Allow-Origin: 允许哪些客户端访问我们的服务器c
    * */

    //XHR
    //创建对象
    const xhr = new XMLHttpRequest();
    //设置请求的信息
    xhr.open("GET", "http://localhost:3000/students")
    //发送请求
    xhr.send();
}