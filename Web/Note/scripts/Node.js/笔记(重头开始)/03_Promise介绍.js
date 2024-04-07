// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b);
//     }, 1000);
// }
//
// sum(1, 2, (res) => {
//     console.log(res);
// });

/*
* 回调地狱
* */
// sum(1, 2, (res) => {
//     sum(res, 3, (res) => {
//         sum(res, 4, (res) => {
//             sum(res, 5, (res) => {
//
//                 console.log(res);
//             });
//         });
//     });
// });
/*
* 异步必须通过回调函数返回数据
*   当进行复杂的调用时,会出现回调地狱
* Promise:
*   可以帮助解决回调函数问题
*   拥有一套特殊的存取数据的方式,可以存储异步调用的结果
*
* 创建Promise:
*   构造函数中需要一个函数作为参数
*       会在创建Promise时调用,会有两个参数传递进去
*           resolve:    在执行正常时存储数据
*           reject:     在执行异常时存储数据
*   通过函数来向Promise中添加数据的好处:
*       可以用来添加异步调用的数据
* */
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, 2000)
})

/*
* 异步代码在执行结束前没有值
* */
console.log(promise);   // Promise { <pending> }
// 延迟3秒(模拟的异步代码需要2秒)
setTimeout(() => {
    console.log(promise);   // Promise { 1 }
}, 3000);

/*
* 从Promise中读取数据:
*   可以通过Promise的实例方法then来读取Promise中存储的数据
*   then需要两个回调函数作为参数,回调函数用来获取Promise中的数据
*       通过resolve存储的数据,会调用第一个函数返回
*       通过reject存储的数据或出现异常时,会调用第二个函数返回
* */
promise.then((res) => {
    console.log("res:", res);
}, (err) => {
    console.log("err:", err);
});