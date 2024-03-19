{
    //Node.js
    /*Node.js和浏览器的JavaScriptAPI并不相通
     *   Node.js无法使用DOM,BOM,AJAX,Storage,alert/confirm/prompt等API
     *   Node.js可以使用fs,url,http,util,path等API
     *   两者通用的API只有console和定时器
     * Node.js中的顶级对象为global,也可以用globalThis访问顶级对象
     * */
}
{
    {
        //缓冲区(Buffer)
        /*是一个类似 Array 的对象,用于表示固定长度的字节序列
        *   也就是一段固定长度的内存空间,用于处理二进制数据
        * 特点:
        *   大小固定,不能调整
        *   性能较好,因为直接对计算机内存进行操作
        *   每个元素的大小为 1 字节 (byte) = 8 位(bit)
        * 创建:
        *   alloc()         分配方法,创建的缓冲区每一个二进制位都会归零
        *   allocUnsafe()   不安全分配,创建的缓冲区可能会包含旧的数据,不会归零,更快
        *   from()          将一个字符串或数组转为Buffer,字符从Unicode编码转换
        *   显示的是十六进制
        * */

        //alloc()
        let buf = Buffer.alloc(10);
        console.log(buf);

        //allocUnsafe()
        let buf1 = Buffer.allocUnsafe(100);
        console.log(buf1);

        //from()
        let buf2 = Buffer.from("hello world");
        console.log(buf2);
    }
    {
        //Buffer的操作
        /*  toString();
        *       字符串转化
        *   实例变量[索引]
        *         读取或写入一个字节
        *   实例变量.write
        *       写入一个字符串
        * */
        let buf2 = Buffer.from("hello world");
        console.log(buf2.toString());

        console.log(buf2[0]);
        //以二进制显示
        console.log(buf2[0].toString(2));

        buf2[0] = 95;
        console.log(buf2 + buf2.toString());

        //注意点
        /*溢出
        八个二进制位能存储的最大十进制为255,如果大于该值,内部会舍弃高位二进制位
        * */
        let buf = Buffer.alloc(1);
        buf[0] = 300;
        console.log(buf);
        console.log(buf[0].toString(2))
        console.log(buf[0].toString(10))
    }
}
{
    //fs
    /*fs模块就是file system的简写
    *   fs模块可以实现与硬盘的交互
    *       例如文件的创建,删除,写入,重命名,移动
    *       还有文件内容的写入,读取
    *       以及文件夹的相关操作
    * fs的操作
    *   写入文件
    * */
    {
        //写入文件
        /*需求:
            新建一个文件"元夕.txt",写入内容:"东风夜放花千树,更吹落,星如雨.宝马雕车香满路."
        * */

        /*1.导入fs模块
        * 使用全局函数require()来引入fs模块
        * */
        let fs = require("fs");

        /*2.写入文件
        语法:
            fs.writeFile(文件名, 待写入数据, 选项设置(可选), 回调函数)
            fs.appendFile()追加写入
            fs.writeFile()同步写入
        * */
        fs.writeFile("./练习/元夕.txt", "东风夜放花千树,更吹落,星如雨.宝马雕车香满路.", err => {
            if (err) {
                console.log(err);
            }
        });
    }
}
{
    {
        //同步,异步
        /*同步
        *   通常情况下代码都是自上而下逐行执行
        *   前面的代码不执行后面的也不会执行
        *   同步的代码执行会出现阻塞的情况
        *   一行代码执行慢会影响到整个程序的执行
        *
        * 解决同步问题:
        *   Java,Python:
        *       通过多线程来解决
        *   现实生活:
        *       1.点菜
        *       2,厨师做菜
        *       3.在一旁傻等是同步,去座位玩手机,等厨师做好菜是异步
        *       4.吃
        * 异步
        *   一段代码的执行不会影响到其它程序
        *   异步的问题:
        *       异步代码无法通过return设置返回值
        *   特点:
        *       不会阻塞其它代码执行
        *       需要通过回调函数来返回结果
        *       基于回调函数的异步带来的问题:
        *           代码的可读性差
        *           可调试性差
        *       解决问题:Promise
        *           一个可以用来存储数据的对象,存储的方式比较特殊
        *           这种特殊方式使得Promise可以用来存储异步调用的数据
        * */
        function sum(a, b, callback) {
            setTimeout(() => {
                callback(a + b)
            }, 1000);
        }

        console.log("1");

        //回调地狱,可读性极差
        sum(123, 456, (result) => {
            sum(result, 7, (result) => {
                sum(result, 8, (result) => {
                    sum(result, 9, (result) => {
                        sum(result, 10, (result) => {
                            console.log(result);
                        });
                    });
                });
            });
        });

        {
            //Promise
            /*异步函数必须通过回调函数返回值
            *   当进行一些复杂的调用时,会出现回调地狱
            * 问题:
            *   异步必须通过回调函数来返回结果
            * Promise:
            *   帮助解决异步中的回调函数的问题
            *   用来存储数据的容器
            *   拥有一套特殊的存取数据方式
            *   该方式使得它可以存储异步调用的结果
            * */

            /*创建Promise
            * 创建Promise时,构造函数中需要一个函数作为参数
            * 参数的构造函数需要resolve和reject两个函数作为参数,通过这两个函数可以向Promise中存储数据
            *   resolve在执行正常时存储数据,reject在执行错误时存储数据.
            *   通过函数来向Promise中添加数据,好处是可以用来添加异步调用的数据
            * */
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(123);
                }, 2000);
            });

            setTimeout(() => {
                console.log(promise);
            }, 3000);

            /*从Promise中读取数据
                可以通过Promise的实例方法then来读取Promise中存储的数据
                then需要两个回调函数作为参数,回调函数用来获取Promise中的数据
                    通过resolve存储的数据,会调用第一个函数返回,可以在第一个函数中编写处理数据的代码
                    通过reject存储的数据或出现异常时,会调用第二个函数返回,可以在第二个函数中编写处理异常的代码
            * */
            promise.then((result) => {
                console.log("1" + result);
            }, (reason) => {
                console.log("2" + reason);
            });

            /*Promise中维护了两个隐藏属性
                PromiseResult
                    用来存储数据
                PromiseState
                    记录Promise的状态(三种状态)
                        pending(进行中)
                        fulfilled(完成)
                        rejected(拒绝,出错了)
                PromiseReject
                    用来存储错误信息
            * */
            let promise1 = new Promise((resolve, reject) => {
                resolve(123);
            });

            Promise.resolve(123).then(r => {
            });

            /*Promise中的
                then
                catch
                finally
                都会返回一个新的Promise
            * */
            function sumAsync(a, b) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(a + b);
                    }, 1000);
                })
            }

            sumAsync(123, 456)
                .then(result => result + 7)
                .then(result => result + 8)
                .then(result => result + 9)
                .then(result => result + 10)
                .then(result => console.log(result));

            /*Promise静态方法:
                resolve()
                    创建一个立即完成的Promise
                all()
                    创建一个包含多个Promise的数组,
            * */
            // Promise.all([
            //     sum(1, 2),
            //     sum(3, 4),
            //     sum(5, 6)
            // ]).then(r => {
            //     console.log(r);
            // })
        }
    }
    {
        //async和await
        /*async异步(asynchronous)
        *通过async可以快速地创建异步函数
        * 异步函数的返回值会自动封装到一个Promise中返回
        * */
        function testAsync() {
            return 10;
        }

        let result = testAsync()
        console.log(result);

        //当变成async函数时
        async function testAsync1() {
            return 10;
        }

        //返回的是Promise
        let result1 = testAsync1();
        console.log(result1);
        //想要读取值,应该使用Promise的then方法
        testAsync1().then(r => {
            console.log("testAsync1的值: " + r);
        });

        /*await
        *在async声明的异步函数中,可以使用await关键字调用异步函数
        *
        * Promise解决了一步刁颖中回调函数问题,
        *   虽然通过链式调用解决了回调地狱,但是链式调用太多了以后还是不好看
        *   希望:以同步的方式(一行一行的)调用异步代码(长得像同步,实际是异步)
        * */
        async function fn() {
            // sumAsync(123, 456)
            //     .then(r => sum(r, 7))
            //     .then(r => sum(r, 8))
            //     .then(r => console.log(r));

            //result得到Promise,希望直接得到结果
            let result = sumAsync(123, 456);

            result = await sumAsync(123, 456);
            /*当通过await调用异步函数时,它会暂停代码的运行
                直到一步代码执行有结果的时候才会将结果返回
              注意:
                await只能用于async声明的异步函数中,或ES模块的顶级作用域中
                通过await调用异步代码时,需要通过try-catch来处理异常
            * */
            console.log("await得到的结果: " + result);
        }

        fn().then(r => {
        });
        console.log("await外面的函数执行");
        //await阻塞了内部代码,但是不阻塞外部代码

        /* 所以上面的代码
         sumAsync(123, 456)
             .then(result => result + 7)
             .then(result => result + 8)
             .then(result => result + 9)
             .then(result => result + 10)
             .then(result => console.log(result));
         可以改写为:
         */
        async function fn1() {
            try {
                result = await sumAsync(123, 456);
                result = await sumAsync(result, 7);
                result = await sumAsync(result, 8);
                result = await sumAsync(result, 9);
                result = await sumAsync(result, 10);
                console.log("await得到的代码链结果: " + result);
            } catch (e) {
                console.log("出错了");
            }
        }

        fn1().then(r => {
        });
    }
}
{
    {
        //模块化
        /*早起的网页中,没有实质的模块化规范
            实现模块化的方式就是最原始的通过script标签来引入多个js文件
            问题:
                1.无法选择要引入模块的哪些内容
                2.在复杂的模块化场景下非常容易出错
            于是在JS中引入了一个模块化的解决方案
          在Node.js中,默认支持的模块化规范叫CommonJS
            在CommonJS中,一个JS文件就是一个模块
        * */
    }
    {
        /*CommonJS规范
            扩展名可能是.cjs，也可能是.js,但是.cjs一定是CommonJS
            引入自定义模块:
                require("模块的路径")函数来引入模块
                引入自定义模块时,模块名要用相对路径
          在定义模块时,模块中的内容默认是不能被外部看到的
            可以通过exports或module.exports(这俩一模一样,全等的)来设置要向外部暴露的内容,他们本质都是对象
        */
        const CommonJS_note = require("./CommonJS_note.cjs")
        console.log(CommonJS_note.out);
        /*可以通过exports一个一个地导出值
            exports.CommonJS_note = "a";
        也可以通过module.exports同时导出多个值
            module.exports = {
                a: "a",
                b: "b"
            }
        * */

        /*引入核心模块(JS自带的模块)
             直接写核心模块的名字即可
           例如const fs = require("fs");
           或者const fs = require("node:fs");(直接指出位置,导入会快一些)
        * */

        /*原理
        * 所有的CommonJS模块都会被包装到一个函数中
        *   (function(exports, require, module, __filename, __dirname){});
        *   __filename：当前模块的绝对路径
        *   --dirname:  当前文件所在目录的路径
        * */
    }
    {
        //ES模块化规范
        /*默认情况下,node中的模块化标准是CommonJS
            要想使用ES的模块化,可以采用两种方案
                1.使用.mjs作为模块扩展名
                2.直接修改package.json,将模块化规范设置为ES
                    "type": "module"
          导入模块
            import {要导入的东西} from "模块的路径"
            如果要起别名
            import {要导入的 as 别名} from "模块的路径" as 别名
            导出所有东西,并放入名为name的对象中
            import * as name from "模块的路径"
        * */

        /*向外部导出内容
        export没有s
        * */


        /*默认导出
        * export default
        * 一个模块只能有一个默认导出
        * 通过ES模块化导入的内容都是常量
        * */
    }
    {
        //核心模块
        /*是Node.js自带的模块,可以在node中直接使用
         window是浏览器的宿主对象,node是没有的
         node的全局对象是global,类似于window
         ES标准下,全局对象的标准名应该是globalThis,浏览器的globalThis就是window,node的就是global
        * */

        /*process
            表示当前的node进程
            通过该对象可以获取进程的信息,或者对进程做各种操作
            如何使用
                process是一个全局变量,可以直接使用
            属性方法
                exit()                          结束当前进程,,终止node
                nextTick(callback,[,...args])   将函数插入到tick队列中
                    调用栈
                    tick
                    微任务队列
                    宏任务队列
        * */

        /*path
        * */
    }
}
{
    //npm包管理器(Node Package Manager)
    /*可以当做一个一个包的仓库
    *
    * Package.json
    *   Node中通过该文件对包进行描述
    *   每一个Node项目必须有一个Package.json
    * 命令行指令
    *   npm init            初始化项目,创建package.json文件(需要回答问题)
    *   npm init -y         初始化项目，不需要回答问题,所有值都采用默认值
    *   npm install 包名     将指定包下载到当前项目中
    *       install时发生了什么:
    *           1. 将包下载到当前项目的node_modules目录下
    *           2. 会在package.json的dependencies属性中添加一个新属性:,如
    *               "lodash": "^4.17.21",
    *               这是当前包的依赖.使用npm install安装包时会自动安装所有依赖.
    *
    * */
}


