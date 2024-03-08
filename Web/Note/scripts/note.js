//基本语法
//和Java,C差不多
/*两种注释方法*/
/*
    1.严格区分大小写
    2.空白字符自动忽略
    3.严格格式化时,每条语句末位需要分号
*/

//变量
//声明:JS变量是动态类型变量,而不是Java的强类型
let x = 1;
console.log(x);
x = "x";
console.log(x);
var y = 1;
//var是全局变量，let是局部变量.var是旧版的声明方式,对于块作用域有不足;现代的声明变量尽量使用let.
//内存结构
/*
    变量的存储:由于类型不确定,所有变量都会像 Java 的 String 一样存储地址而不是值本身.
*/

//常量
//声明
const PI = 3.1415926535897932384626;

//标识符
/* 命名规范(和Java一样)
    1. 标识符只能含有字母,数字,_.$组成,不能数字开头
    2. 不能是保留字
    3. 变量名使用驼峰命名法;类名使用大驼峰命名法;常量全部大写
*/

//数据类型
/* 原始值
    1. 数值 (Number)
        所有整数和浮点数
        超过一定范围后会显示近似值或 Infinity (无穷大,其实是表现不出来了 -_-)
        小数运算可能不准确
    2. 大整数 (BigInt)
        用来表示比较大的整数,数字以n结尾,如 let a = 999999999999999999999999999999999999999999999n, 如果不加
            n的话会变成科学计数法
        不能与Number混用运算
    3. 字符串 (String)
    4. 布尔值 (Boolean)
    5. 空值 (Null)
    6. 未定义 (Undefined)
    7. 符号 (Symbol)
*/

/* 类型检查
    typeof 方法检查变量的值的类型,而不是变量类型;
    **Js不存在变量类型(变量仅用作存储地址),只存在数据类型**
*/
let a = 1, b = 2n;
console.log(typeof a, typeof b);

/* 字符串
        使用单引号或者双引号都可以表示字符串
        不可以混用,但是可以用嵌套,如
            let a = '这是一个"字符串"';
         也可以使用转义字符"这是一个\"字符串\""
    模板字符串
         使用返单引号``来表示模板字符串,可以保留换行
         模板字符串可以嵌入变量,使用${变量名}
*/
a = '这是一个"字符串"';
b = `这是一个模板字符串,可以嵌套变量:${a}`;

/* 其它需要注意的变量
        null: 把变量变成空值
        undefined: 变量没有赋值时的值
        symbol: 用来创建唯一的标识
*/
let c = Symbol() // 调用Symbol()创建了一个符号

/* 类型转换
        String方法有toString(),但对null和undefined不好用
        剩下的方法,就使用如下方法(也可以包括String)
*/
a = 1;
a = String(a);      //转换为字符串
a = Number(a);      //转换为数字, 不合法会回复NaN
a = Boolean(a);     //0,NaN,null,undefined => false; 剩下的 => true

//运算符
/* 算术运算符
    基本和Java一样,唯一不同的在于:
        ** 幂运算
*/

/*  隐性转换
        当算术时,如果数值与非数值运算,会试图将非数值转化为数值来运算.但是在 + 运算符中,字符串拼接会覆盖加法的隐性转换.
*/
a = 2 - '1';        //结果为1,因为将字符串1转换为了数值.
a = 2 + true;       //2 + 1
a = 2 + null;       //2 + 0
a = 2 + undefined;  //2 + NaN = NaN
a = 2 + '1';        //结果为21,因为字符串拼接覆盖了隐性转换.

/*  赋值运算符
    基本和Java一样,唯一不同的在于:
        **= 就是换成了幂
        ??= 当且仅当值为空的时候才赋值
*/

/*  正负运算符
        + 将值转换为数值后转正值
        - 将值转换为数值后符号取反
*/

/*  条件运算符
        === 全等运算符,不进行隐式转换地进行比较
        !== 非全等运算符
*/

//对象
{
    const obj = Object;
    obj.name = "MUTT";
    obj.age = 18;
    obj.male = true;
    let str = "MUTT";
    obj[str] = "MUTT";
    obj.fullName = Object();
    obj.fullName.firstName = "TT";
    obj.fullName.lastName = "MU";

    delete obj[str];
    obj["大傻逼"] = true;
    console.log(obj);

    /*字面量创建对象*/
    const obj0 = {};
    const obj1 = {name: "鸟", age: 18, male: true}

    /*枚举对象的属性值*/
    for (let a in obj) {
        console.log(obj[a]);
    }
}

//函数
function sum(a, b) {
    alert(a + b);
}

//参数a = 1是默认值,当没有给参数的时候,a = 1,给后a = 参数
const factorial = function (a = 1) {
    if (a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

const func2 = (a, b) => {
    alert(a * b);
}

sum(3245, 2345);
factorial(5);
func2(123, 12);