/*
* async:异步
* 通过async快速创建异步函数
* 返回Promise的函数就是异步函数
*
* 但是在async声明的异步函数中,可以使用await关键字
* */

// function fn() {
//     return 10;
// }
//
// fn().then(res => {
//     console.log(res);
// });

//等同于
async function fnA() {
    return 10;
}

fnA().then(res => {
    console.log(res);
});

{
    /*
    * await只能用于async声明的异步函数中,或ES模块的顶级作用域中
    * 这样是避免它阻塞其它的同步代码,只会阻塞async内部的代码
    * 通过await调用时,需要使用try-catch来处理异常
    *
    *
    * 如果async声明的函数没有写await,那么里面的代码就会依次执行
    * */
    function sum(a, b) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b);
            }, 1000)
        });
    }

    async function testSum() {
        sum(1, 2)
            .then(res => sum(res, 3))
            .then(res => sum(res, 4))
            .then(res => console.log(res));

        //使用await
        // res 会在sum()执行完后才赋值
        let res = await sum(1, 2);
        res = await sum(res, 3);
        res = await sum(res, 4);
        console.log(res);
    }
}

/*
* 当使用await掉宏函数后,当前函数后面的所有代码会在当前函数执行完毕后被放入到微任务队列中
* */

async function fn4() {
    console.log(1);
    await console.log(2);
    console.log(3);
}

fn4();
console.log(4);