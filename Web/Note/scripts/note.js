{
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
//var 不具有块作用域,但是仍具有方法作用域
//内存结构
    /*
        变量的存储:由于类型不确定,所有变量都会像 Java 的 String 一样存储地址而不是值本身.
    */

//常量
//声明
    const PI = 3.1415926535897932384626;
}
{
//标识符
    /* 命名规范(和Java一样)
        1. 标识符只能含有字母,数字,_.$组成,不能数字开头
        2. 不能是保留字
        3. 变量名使用驼峰命名法;类名使用大驼峰命名法;常量全部大写
    */
}
{
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
}
{
//运算符
    /* 算术运算符
        基本和Java一样,唯一不同的在于:
            ** 幂运算
    */

    /*  隐性转换
            当算术时,如果数值与非数值运算,会试图将非数值转化为数值来运算.但是在 + 运算符中,字符串拼接会覆盖加法的隐性转换.
    */
    let a;
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
}
{
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
}
{
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
}
{
//Window对象
    /*
    * window代表浏览器窗口,通过该窗口对浏览器操作
    * 使用 var 声明的变量,作用和 let 相同,但是不具有块作用域
    *   在全局中使用 var 声明的变量都会作为 window 对象的属性保存;使用 function 声明的函数,都会作为 window 的方法保存.
    *   使用 let 声明的变脸不会存储在 window
    */

    let testWindow = 33;
    window.testWindow = 44;
    console.log(window.testWindow);/* 有限访问 let */
    function test() {
        testAbc = 33;
        //当没有声明,直接赋值的时候,实际上是进行window.testAbc = 33;操作
    }
}
{
//变量的提升
    /* 变量的提升
    * 使用var声明的变量会在所有代码执行前被声明,但是在赋值前是undefined.
    * 使用let声明的变量同理,但是在赋值之前会阻止解释器访问
    * 这样看,var属于历史遗留问题
    * */
    console.log(testLevelUp);
    var testLevelUp = 33;
    /* 函数的提升
    *使用函数声明创建的函数,会在其它代码执行前被创建,所以可以在函数声明前调用函数,类似Java的方法
    * */
}
{
//开发中尽量减少全局作用域中编写代码
//立即执行函数:不会被提升,在遇到的时候会定义并执行一次(不会提升到全局作用域,只会调用一次)
    /* 将function使用括号括起来无需命名;后面加()表示调用该匿名函数 */
    (function () {
        console.log("立即执行函数");
    })();
}
{
//函数中的this
    /*
    * 函数执行时,解析器每次都会传递一个隐含的参数,就是this
    * this会指向一个对象
    *    1. 作为函数调用时，指向的是window
    *    2. 作为方法调用时，指向的是调用方法的对象
    * 箭头函数没有自己的this,它的this由外层作用域决定
    * */
}
{
//严格模式
    /* 正常模式:默认,能不报错尽量不报错
    *   严格模式:在代码开头写上"use strict"(包括引号),就会对错误语法报错
    * */

//类
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        static sayHello() {
            console.log("Hello " + this.name);
        }
    }

    const MUTT = new Person("MUTT", 18, "male");
    console.log(MUTT);
}
{
//封装

    /* 对象不仅负责存储(装),还要负责数据的安全(封)
    * 直接添加到对象中的属性不安全,因为可以被任意修改
    * 使用#开头就变成了 Private 属性,只能在类的内部访问
    * 如何保护数据安全:
    *   1. 私有化数据
    *   2. 使用getter和setter方法开放数据访问
    *       属性设为私有,然后通过getter和setter操作的好处
    *           1. 可以可以控制属性的读写权限
    *           2. 可以在方法中对属性的值进行验证
    * */

//new
    /*
    * 使用new去调用函数时,这个函数回座位构造函数调用
    *   1. 撞见一个普通的Object{}对象,现暂时称作"新对象"
    *   2. 将构造函数的prototype属性设置为新对象的原型
    *   3. 使用实参来执行构造函数,并将新对象设置为函数中的this
    *   4. 如果构造函数返回的是一个非原始值.则该值会作为new运算的返回值返回;
    *      如果该函数返回值是一个原始值或者没有返回值,则将新的对象作为返回值.
    * */
}
{
//对象的复制
    /*
    * 如果只是单纯把一个对象变量的值赋给另一个变量,该变量复制的只是指向对象的地址
    * 使用对象 Object.assign(目标对象,被复制对象) 深拷贝
    * 展开运算符 ... 用于对象的拷贝: const obj1 = {...obj}
    * */
}
{
//数组
    /*for-of
    * 遍历可迭代对象,每次执行时都会把数组的对应元素暂时赋值给变量
    * for(变量 of 可迭代的对象){
    *   //语句
    * }
    * */

    /*方法
    * 非破坏性方法(不会影响原数组):
    *   isArray():用来检查一个对象是否为数组
    *   at():根据索引获取数组中元素,可以接受负参
    *   contact():用来连接两个数组
    *   indexOf():元素第一次出现的位置
    *   lastIndexOf():元素最后一次出现的位置
    *   join():将一个数组中的元素连接为一个字符串.默认分隔符为逗号,传入字符串参数时会以传入参数分隔.
    *   slice():截取数组,参数为
    *       (起始位置(包含),结束位置(不包含))    从起始到结束
    *       (起始位置(包含))                  从起始到数组末位
    *       ()                              浅拷贝数组
    *
    * 破坏性方法
    *   push():向数组末位添加元素,并返回新数组的长度
    *   pop():删除数组末位元素
    *   unshift():向数组首位添 加元素
    *   shift():删除数组首位元素
    *   splice():删除或添加元素并返回被删除的元素
    *       (起始位置(包含),删除个数)
    *       (起始位置(包含),删除个数,添加元素)
    * */
    {
        arr = [1, 2, 3];
        arr.push(4);
        let result = arr.push(1, 2);
        console.log(result);
        arr.splice(2, 2, 5, 6);
        console.log(arr);
    }
    //数组的去重:
    {
        arr = [1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 8, 1, 6];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + j; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }
        console.log(arr);
    }
}
