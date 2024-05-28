/**
 * 模块化:将代码化整为零,以便维护
 *
 * 没有模块化:
 *   无法选择引用模块的哪些内容(要么全引,要么不引)
 *   可能会产生依赖问题
 *
 * 在Node中,默认支持的模块化规范叫CommonJS(社区第三方的模块化规范)
 *   在CommonJS中,一个js文件就是一个模块
 */


/**
 * CommonJS规范:
 *   引入模块: require("模块路径")
 *       封装: 并不是导入了就能全部使用,如果需要使用模块中的方法,要求该方法前有exports关键字:
 *           exports.值;
 *
 *           exports就是require的返回值
 *           也可以使用module.exports = {}作为对象同时导出多个值
 *
 *       引入: const 别名 = require("模块路径")
 *
 *       引入核心模块(Node内置模块)
 *           直接写核心模块的名字即可:
 *               require(path)
 *           直接通过node指明核心模块
 *               require(node:path)
 *
 *   扩展名: .js 或 .cjs
 *
 * ` 文件夹作为模块: 文件夹中有很多js文件,require("./文件夹")引入文件夹时,默认引入index.js
 *
 *   原理: 所有CommonJS的模块都会被包装在一个函数中:
 *       function(exports, require, module, __filename, __dirname) {
 *       模块代码
 *       }
 *       exports: 用于导出的对象
 *       require: 用于导入的函数
 *       module: 用于获取模块信息的对象
 *       __filename: 模块的绝对路径
 *       __dirname: 模块所在文件夹的绝对路径
 * */

/**
 * ES规范:
 *   默认情况下,node中的模块化标准是CommonJS(.js作为模块默认为CommonJS)
 *      想使用ES的模块化,可以采用以下两种方案:
 *          1.使用.mjs作为扩展名
 *          2.修改package.json的type字段为module(把整个项目默认.js模块都改为了ES模块)
 *
 * 导出:
 *          export 没有s和.
 *          export 值;
 *
 *      默认值: 设置默认导出: 一个模块中只有一个默认导出,可以随意命名
 *          export default 值
 *
 * 导入:
 *          import { 导入的值 } from "模块路径"
 *          import { 导入的值 as 别名 } from "模块路径"
 *
 *      导入模块的默认导出: 可以随意命名,不需要大括号
 *          import 默认导出的别名 from "模块路径"
 *          import 默认导出的别名, { 其它值 } from "模块路径"
 *
 *      通过ES模块化导入的内容都是常量
 */