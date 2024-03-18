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
            如果有两个同步方法,其中一个方法会等待另一个执行完后,返回后再继续
            异步
            将回调函数的执行任务放入队列中,等主线程的初始化代码执行完毕后,从消息队列中把回调函数取出来执行
        * */
        let fs = require("fs");
        fs.writeFile("./练习/元夕.txt", "东风夜放花千树,更吹落,星如雨.宝马雕车香满路.", err => {
            if (err) {
                console.log(err);
            }
            console.log("写入成功");
        });

        console.log(1 + 1);
        //writeFile()就是一个异步方法,所以不会阻塞后面的代码.输出结果是先输出1+1,后输出"写入成功
    }
    {
        //追加写入
        /*语法:
            fs.appendFile(文件名, 待写入数据, 选项设置(可选), 回调函数)
        * */
        let fs = require("fs");
        fs.appendFile("./练习/元夕.txt", "\r\n凤箫声动,玉壶光转,一夜鱼龙舞.", err => {
            if (err) {
                console.log(err);
            }
            console.log("追加写入成功");
        });
        /*
        * writeFile()也差不多,但是需要加入配置对象,否则会先清空后写入
        * */
    }
    {
        //流式写入
        /*
        *
        * */
    }
}

