/**
 * 核心模块就是Node中自带的模块,可以在Node中直接使用
 * Node中的全局对象是global,而不是window
 * ES标准下,全局对象的标准名称应该是globalThis,Node和浏览器都好用
 */

/**
 * process:
 *  表示当前的node进程
 *  通过该对象可以获取进程的信息,或者对进程做各种操作
 *
 * process的使用:
 *  1.对象的获取:直接使用
 *  2.属性和方法:
 *      process.exit():结束当前进程,传入参数可以传出结束状态码
 *      process.nextTick(callback[, ...args]):将函数插入到tick队列中,会在下一次事件循环之前执行
 *          执行顺序:
 *          调用栈
 *          tick队列
 *          微任务队列
 *          宏任务队列
 *        tick队列相当于老版的微任务队列,所以现在这个方法没啥卵用
 *
 * */

/**
 * _path:
 *  表示路径,可以用来获取各种路径
 *
 * _path的使用:
 *  1.对象的获取:导入 const path = require("node:path")
 *  2.属性和方法:
 *      path.resolve([, ...paths]):用来生成一个绝对路径
 *          如果直接调用resolve不传参,会返回当前的工作目录
 *          通过不同的方式执行代码时,它的工作目录是有可能发生变化的
 *
 *          如果直接传入一个相对路径作为参数,则resolve会自动将其转换为绝对路径
 *              此时根据工作目录的不同,它所产生的绝对路径也不同
 *          一般会将一个绝对路径作为第一个参数,相对路径作为第二个参数,
 *              这样会自动计算出最终路径
 *          配合__dirname变量获取当前模块所在路径,可以简化代码且避免硬编码
 */
const path = require("node:path");
const result = path.resolve(__dirname, "../test.txt")
console.log(result)

/**
 * fs(File System): 用来帮助Node来操作硬盘中的文件,也就是I/O(输入/输出)操作
 *
 * fs的使用:
 *  1.对象的获取: 导入 const fs = require("node:fs")
 *  2.属性和方法:
 *      fs.readFileSync(path[, options]): 同步地读取文件,在没读出来之前会阻塞下面代码的执行
 *          当通过fs模块读取磁盘中的数据时,总会通过Buffer对象的形式返回
 *          Buffer是一个临时用来存储数据的缓冲区.
 *          由于读取到的文件可能是任何格式,因此通过Buffer对象来返回,以便之后处理.
 *          如果是文字的话,可以使用.toString()来转换为字符串
 *      fs.readFile(path[, options], callback): 异步读取文件
 *      fs.appendFile(path, data[, options], callback): 创建新文件,或将数据添加到已有文件中
 *      fs.mkdir(path[, options], callback): 创建文件夹
 *      fs.rmdir(path): 删除文件夹
 *      fs.rm(path[, options]): 删除文件
 *      fs.rename(oldPath, newPath): 重命名文件
 *      fs.copyFile(src, dest[, options]): 复制文件
 * */
const fs = require("node:fs");
let file = path.resolve(__dirname, "../test.txt");
fs.readFile(file, (err, buf) => {
    console.log(err ? err : buf.toString())
});

/**
 * 有回调函数就可能产生回调地狱,要从源头扼杀这个可能:
 * Promise版本的fs方法需要导入promises版本的fs
 */
const fsPromise = require("node:fs/promises");

async function example() {

    await fsPromise.rm(file)
        .then(() => {
            console.log("删除成功")
        })
        .catch(err => {
            console.log(err)
        });

    await fsPromise.appendFile(
        path.resolve(__dirname, "../test.txt"),
        "写入内容")
        .then(() => {
            console.log("写入成功")
        })
        .catch(err => {
            console.log(err)
        });

    await fsPromise.readFile(file)
        .then(buf => {
            console.log(buf.toString())
        })
        .catch(err => {
            console.log(err)
        });
}

example()
    .catch(err => {
        console.log(err)
    })

// 匿名箭头函数前加分号,避免前面函数没加分号出现问题,因此最好都加
;(async () => {
    try {
        // await阻塞async函数并等待有Promise返回
        const buf = await fsPromise.readFile(file)
        console.log(buf.toString())
    } catch (err) {
        console.log(err)
    }
})();
