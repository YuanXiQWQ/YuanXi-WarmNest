/* JS的核心思想,和其它语言不一样的地方
* */

/*
* 进程和线程
*   进程:
*       相当于程序的运行环境(工厂的厂房)
*   线程:
*       实际进行运算的东西(工厂的工人)
* */

/*
* 同步和异步
*   同步:
*       通常情况下,代码都是自上而下一行一行执行的
*       前面的代码不执行,会阻塞后面的代码执行
*       同步代码执行时会出现阻塞的情况
*           去餐厅点菜,厨师做菜,自己什么都不干站在那等菜
*               1.点菜,等
*               2.厨师做菜
*               3.吃
*               --厨师做菜阻塞了顾客的行为
*       解决同步问题:
*           Java, Python: 使用多线程(性能要求高,代码管理要求高)
*           Node.js: 通过异步方式解决
*   异步:
*       一段代码的执行不会影响到其它的程序
*               点好菜后,去工作敲代码,等厨师做好菜后取菜吃
*               1.点菜=>去工作
*               2.厨师做菜=>通知
*               3.收到通知,吃菜
*       异步的问题:
*           无法通过return返回值
*       特点:
*           1.不会阻塞其它代码的执行
*           2.需要通过回调函数来返回结果
*       基于回调函数的异步带来的问题:
*           1.代码可读性差
*           2.可调试性差
*       解决问题:
*           需要一种方法代替回调函数来返回结果
*               Promise出现:
*                   是一个可以用来特殊地存储数据的对象
*                   这种特殊方式使得Promise可以用来存储异步调用的数据
* */
{
    function sum0(a, b) {
        setTimeout(() => {
            return a + b;
        }, 5000);
    }

    console.log(1);
    const result = sum0(123, 456);
    console.log(result); //Undefined
    console.log(2);
}
/*
* 解决:传入回调函数
* */
{
    function sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5000);

    }

    console.log(1);
    sum(123, 456, (res) => {
        console.log(res);
    });
    console.log(2);
}
{
    /*
    * 如果不止需要一次,需要先获取123+456的值,再加上789呢?
    * */
    sum(123, 456, (res) => {
        sum(res, 789, (res) => {
            console.log(res);
        })
    })

    /*
    * 如果步骤更多呢?
    * */
    sum(123, 456, (res) => {
        sum(res, 789, (res) => {
            sum(res, 789, (res) => {
                sum(res, 111, (res) => {
                    sum(res, 222, (res) => {
                        sum(res, 333, (res) => {
                            sum(res, 444, (res) => {
                                sum(res, 555, (res) => {
                                    sum(res, 666, (res) => {
                                        console.log(res);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    /*
    * 陷入了回调地狱
    * 这他妈谁能看懂
    * */
}