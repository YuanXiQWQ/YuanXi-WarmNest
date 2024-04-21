/*
* Promise就是一个用来存储数据的对象,
* 但是由于Promise存取方式的特殊性,可以直接将异步调用的结果存储到Promise中.
* */

const promise = new Promise((resolve, reject) => {
    resolve('正常执行');
    reject('异常');
});

promise.then((resolve) => {
    console.log(resolve);
}, (error) => {
    console.log("错误:" + error);
});

//原本引起回调地狱的代码:
function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 1000);
}

//使用Promise优化:
function sumP(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
            reject("出问题了");
        }, 1000);
    });
}

/*
* Promise中的
*   then
*   catch
*   finally
* 都会返回一个新的Promise
*   Promise存储回调函数的返回值
* */

sumP(1, 2).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});

const p2 = promise.then((resolve) => {
    console.log(resolve);
    return "第一个promise"
});

const p3 = p2.then((resolve) => {
    console.log(resolve);
    return "第二个promise"
});

const p4 = p3.then((resolve) => {
    console.log(resolve);
});

promise.then((resolve) => {
    console.log(resolve);
    return "第一个promise"
}).then((resolve) => {
    console.log(resolve);
    return "第二个promise"
}).then((resolve) => {
    console.log(resolve);
})

//所以回调地狱的改写:
sumP(1, 2).then((result) => {
    return result + 1;
}).then((result) => {
    return result + 2;
}).then((result) => {
    return result + 3;
});

//利用箭头函数特性来进行简写:

sumP(1, 2)
    .then(result => result + 1)
    .then(result => result + 2)
    .then(result => result + 3)
    .then(result => console.log(result));

//使用原方法的回调方法
sumP(1, 2)
    .then((result) => sumP(result, 1))
    .then((result) => sumP(result, 2))
    .then((result) => sumP(result, 3))
    .then((result) => console.log(result));

/*
* Promise.all([...])
* 传入数组
* 要么全处理后全返回,要么就一个都不返回;只要有一个出问题,就整个不返回.
*
* Promise.allSettled([...])
* 传入数组
* 无论成功还是失败,都会返回多个promise的执行结果,返回类型是一个对象,包含状态
*   {status: 'fulfilled' | 'rejected', value: any, reason: any}
*
* Promise.race([...])
* 传入数组
* 返回执行最快的Promise,不考虑成功与否
*
* Promise.any([...])
* 传入数组
* 返回执行最快的完成的Promise,不考虑成功与否
* */
Promise.all([
    sumP(1, 2),
    sumP(3, 4),
    sumP(5, 6)
]).then(result => {
    console.log(result);
});