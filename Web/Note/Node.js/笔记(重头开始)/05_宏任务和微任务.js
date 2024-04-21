//开启一个定时器,定时器的作用是间隔一段时间后,将函数放入到任务队列中
setTimeout(() => {
    console.log("宏任务队列第一个")
}, 0);

Promise.resolve(1).then(() => {
    console.log("微任务队列第一个")
});

console.log("调用栈最后一个(初始状态第一个)");

/*
* JS是单线程的,它的运行基于时间循环机制(event loop)
*   调用栈:放要执行的代码
*   任务队列(消息队列):
*       队列是先进先出的数据结构
*       调用栈中的代码执行完毕后,队列中的代码才会依次进入到调用栈中
*
* Promise的执行原理:
*   Promise在执行时,then相当于给Promise了回调函数
*       当Promise的状态从pending 变为 fulfilled时,
*           then的回调函数会被放入到任务队列中
*           在JS中,任务队列有两种:
*               宏任务列: 大部分代码都去红任务队列中排队
*               微任务列: Promise的回调函数(then,catch,finally)去微任务队列中排队
*           整个流程:
*               1.执行调用栈中的代码
*               2.执行微任务队列中的代码
*               3.执行宏任务队列中的代码
* */

/*
* queueMicrotask()
* 向微任务队列中添加一个任务
* */

queueMicrotask(() => {
    console.log("微任务队列第二个")
});