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
        let obj = Object;
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
        let obj0 = {};
        let obj1 = {name: "鸟", age: 18, male: true}

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
    let factorial = function (a = 1) {
        if (a === 1) {
            return 1;
        } else {
            return a * factorial(a - 1);
        }
    }

    let func2 = (a, b) => {
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
    *    3. 作为构造函数调用时，指向的是实例对象
    *    4. 箭头函数没有自己的this,由外层作用域决定
    *    5. 通过call()和apply()方法调用的函数,它们的第一个参数就是函数的this
    *    6. 通过bind()返回的函数,this由bind()第一个参数决定,且无法修改
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

    let MUTT = new Person("MUTT", 18, "male");
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
    *   sort():指定数组排序规则并排序数组,传入回调函数作为参数
    *   forEach():遍历数组
    *       需要一个回调函数作为参数,这个回调函数会被调用数组元素个数次,每次调用都将数组中的数据作为参数传递
    *       回调函数有三个参数
    *            1. 当前遍历的元素(element)
    *            2. 当前遍历的索引(index)
    *            3. 被遍历的数组(array)
    *   filter():将数组中符合条件的函数保存到一个新数组中.传入回调函数作为条件参数,当函数返回值为true时保留元素,打到过滤的效果
    *   map():根据当前数组生成一个新数组.
    *        需要一个回调函数作为参数,回调函数的返回值会成为新数组中的元素.
    *   reduce():可以用来将一个数组中的所有元素整合为一个值
    *        参数:
    *           1. 回调函数,通过回调函数来制定合并的规则
    *           2. (可选)初始值
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
    {
        //sort()
        /* sort()
        *  用来对数组进行排序
        *  会按照回调函数的返回值进行排序,但是默认是先转换为字符串,然后按照Unicode编码进行排序
        *   参数:
        *       可以船体一个回调函数作为参数,通过回调函数来制定排序规则
        *           (a, b) => a - b //升序排列
        *           (a, b) => b - a //降序排列
        * */
        arr1 = [6, 6, 2, 6, 0, 7, 0, 1, 0, -15];
        arr1.sort((a, b) => {
            return a - b;
        });
        console.log(arr1);
    }
    {
        //filter
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = arr.filter((item) => {
            return item > 5;
        });
        console.log(result);
    }
    {
        //map
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = arr.map((item) => {
            return item * 2;
        });
        console.log(result);
    }
    {
        //reduce
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = arr.reduce((a, b) => {
            return a + b;
        });
        console.log(result);
    }
    {
        //数组的去重:
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
{
    //闭包
    /*使用时机:
        需要将访问内容隐藏,防止被以外更改
    * 构成闭包的条件
    *   1. 函数的嵌套
    *   2. 内部函数要引用外部函数中的变量
    *   3. 内部函数要作为外部返回值返回
    * */

    //闭包函数
    function outer() {
        let num = 0;

        //1.嵌套;3.返回一个匿名函数
        return () => {
            //2.访问外部函数的变量
            num++;
            console.log(num);
        }
    }

    //调用
    let newFunction = outer();

    //执行十次
    for (let i = 0; i < 10; i++) {
        newFunction();
    }
}
{
    //可变参数
    /* 除了this以外,function中还有一个隐含参数,即arguments
    *  arguments是一个类数组对象(伪数组),用来存储函数的实参.
    *   `   和数组类似,可以通过索引来读取元素,也可以通过for循环变量,但是它不一定是一个数组对象,不能调用数组方法
    *   无论用户是否定义形参,实参都会存储到arguments对象中.
    *   可以通过该对象直接访问实参
    *   无论是形参还是实参都可以传递
    * 不足:
    *   1. 无法传递对象
    *   2. 无法传递函数
    *   3. 无法传递类型不同的实参
    * */


    //定义一个函数,可以求任意个数值的和
    function sum1() {
        let result = 0;
        for (let num of arguments) {
            result += num;
        }
        return result;
    }

    console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

    /* 可变参数:在函数中可以传入任意个数的实参
    *       可变参数可以接受任意数量的实参,并将他们统一存储到一个数组中返回
    *       可变参数的作用域和arguments基本一致,但也有一些不同
    *           1. 可变参数的名字可以自己指定
    *           2. 可变参数就是一个数组,可以直接使用数组方法
    * */
    function testArgs(...args) {
        console.log(args);
    }

    function sum2(...nums) {
        return nums.reduce((a, b) => {
            return a + b;
        });
    }

    console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
{
    // call和apply
    /*  函数名.call()和函数名.apply()方法和 函数名() 一样,都可以调用对应函数,不同的是
    *   call()和apply()方法还可以用来指定函数中的this
    *   call()和apply()的第一个参数将会成为函数的this
    *   call()方法调用函数,函数的实参直接在第一个参后一个一个地列出来
    *   通过apply()方法调用函数,函数的实参需要通过一个数组传递
    * */

    function fn(a, b) {
        console.log("a = " + a, "b = " + b);
    }

    fn.apply(obj, ["hello", "world"]);
}
{
    //bind()
    /*  bind()是函数的方法,可以用来创建一个新的函数
            bind()可以为新函数绑定this
            bind()可以为新函数绑定参数
        箭头函数没有自身的this,它的this由外层作用域决定,所以无法通过call(),apply()和bind()方法绑定this
        箭头函数也没有arguments
    * */
    function testBind(a, b, c, d) {
        console.log(this);
        console.log(a, b, c, d);
    }

    let obj = {name: "MUTT"};
    let obj2 = {name: "TT"};

    let newFunc = testBind.bind(obj, 1, 2, 3, 4);

    newFunc.call(obj2, 5, 6, 7, 8);

    let arrowFunc = (a, b, c, d) => {
        console.log(this);
        console.log(a, b, c, d);
    }
    let newArrowFunc = arrowFunc.bind(obj, 1, 2, 3, 4);
    newArrowFunc.call(obj2, 5, 6, 7, 8);
}
{
    //解构赋值
    /*解构数组*/
    let arr = [1, 2, 3, 4, 5];
    let [a, b, ...rest] = arr;
    console.log(a, b, rest);

    /*解构对象*/
    let obj = {a: 1, b: 2, c: 3};
    let {a: aa, b: bb, c: cc} = obj;
    console.log(aa, bb, cc);

    /*交换位置*/
    let a1 = 1;
    let a2 = 2;

    [a1, a2] = [a2, a1];
    console.log(a1, a2);
}
{
    //对象的序列化
    /*将对象转换为字符串
    *   不仅JS能看懂,人类也能,其它语言也能看懂,可以用作对象的传递
    * 如何进行序列化:
    *   JS的工具:JSON
    *   使用JSON.stringify()方法把JS对象转换为字符串
    *   使用JSON.parse()方法把字符串转换为JS对象
    * */
    let obj = {
        name: "MUTT", age: 18
    };
    let str = JSON.stringify(obj);
    console.log(str);

    let obj2 = JSON.parse(str);
    console.log(obj2);

    console.log(obj === obj2);

    /*JSON的编写
    *   1.JSON字符串有两种类型:
    *       JSON对象 {}
    *       JSON数组 []
    *   2.JSON的属性名必须用双引号括起来
    *   3.JSON中可以使用的属性值(元素):
    *       数字(Number)
    *       字符串(String),必须使用双引号
    *       布尔值(Boolean)
    *       null
    *       JSON对象(Object{})
    *       JSON数组(Array[])
    *   4.JSON的格式和JS的格式基本一致,但是JSON更严格
    * */
    let str1 = '{"name": "MUTT", "age": 18}';
    let obj3 = JSON.parse(str1);
    console.log(obj3);
}
{
    //Map
    /*Map用来存储键值对解构的数据(key-value)
    Object中存储的数据就可以被认为是一种键值对解构
    Map和Object的主要区别:
        Object中的属性名只能说字符串或符号,如果传递了一个其他类型的属性名,JS解释器会自动将其转换为字符串
        Map中任何类型的值都可以成为数据的key
    创建:
        new Map()
    属性方法:
        map.size()              获取map键值对数量
        map.set(key, value)     添加键值对
        map.get(key)            获取key对应的value
        map.delete(key)         删除key对应的键值对
        map.clear()             清除所有键值对
        map.has(key)            判断key是否存在
        map.keys()              返回键名
        map.values()            返回键值
        map.entries()           返回键值对
    * */
    let obj = {
        name: "MUTT", age: 18
    };
    let testMap = new Map();
    //传入值:键名,键值
    testMap.set("name", "MUTT");
    testMap.set(obj, "Student");
    testMap.set("male", true);
    console.log(testMap.get("name"));
    console.log(testMap.get(obj));
    console.log(testMap.get("male"));
    console.log(testMap);

    /*使用Map创建数组
    * 可以用来解构并遍历Map中特定元素(如只遍历键值)
    * */
    //使用Array.from()方法
    let testMapToArray = Array.from(testMap);
    //或者展开
    let testMapToArraySimple = [...testMap];
    console.log(testMapToArray);

    /*遍历Map*/
    for (let entry of testMapToArray) {
        //打印键名和键值
        console.log(entry);

        //解构
        let [key, value] = entry;
        //只打印键值
        console.log(value);
    }
    //或者
    testMapToArraySimple.forEach((value, key) => {
        console.log(key);
    });
}
{
    //Set
    /*用来创建一个集合,功能和数组类似,不同在于:
        Set不嫩存储重复的数据
      本质和Map相同,只是键和键值相同
    *创建:
        new Set()
        new Set([value1, value2, ...])
    *方法:
        set.add(value)      添加元素
        set.delete(value)   删除元素
        set.clear()         清空
        set.has(value)      判断是否存在
        set.keys()          返回键名
        set.values()        返回键值
        set.entries()       返回键值对
    * */
    let testSet = new Set();
    testSet.add("MUTT");
    testSet.add("鸟");
    testSet.add("MUTT");
    testSet.add(1);
    testSet.add(1);
    testSet.add(1);
    console.log(testSet);
    //只会存储{"MUTT", "鸟", 1}

    /*Set没有索引方法,需要提取特定值,可以先转换为数组后再找*/
    let array = Array.from(testSet);
    console.log(array[0]);

    /*使用Set为数组去重*/
    let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6]
    let setOfArray1 = new Set(array1);
    console.log(setOfArray1); //此时输出为集合
    //转换为数组
    console.log(...setOfArray1)
}
{
    //Math
    /*数学计算方法
    常量:
        Math.E              自然对数底
        Math.PI             圆周率π
        Math.SQRT2          根号2
        Math.SQRT1_2        根号1/2
        Math.LN2            ln2
        Math.LN10           ln10
        Math.LOG2E          log2e
        Math.LOG10E         log10e
     方法:
        Math.abs(x)         绝对值
        Math.random()       0-1之间的伪随机浮点数
        Math.ceil(x)        向上取整
        Math.floor(x)       向下取整
        Math.round(x)       四舍五入
        Math.trunc(x)       截断,直接去除小数位
        Math.min(x, y)      最小值
        Math.max(x, y)      最大值
        Math.sqrt(x)        开平方
        Math.cbrt(x)        开立方
        Math.pow(x, y)      幂运算
        Math.log(x)         对数
        Math.log2(x)        二进制
        Math.log10(x)       十进制
        Math.exp(x)         指数
        Math.sin(x)         正弦
        Math.cos(x)         余弦
        Math.tan(x)         正切
        Math.asin(x)        逆正弦
        Math.acos(x)        逆余弦
        Math.atan(x)        逆正切
        Math.atan2(y, x)    逆正切
        Math.sinh(x)        正双曲
        Math.cosh(x)        余双曲
        Math.tanh(x)        正切双曲
        Math.asinh(x)       逆正双曲
        Math.acosh(x)       逆余双曲
        Math.atanh(x)       逆正切双曲
    * */
}
{
    //Date
    /*JS中所有和时间相关的数据都由Date对象
    方法:
        getFullYear()       获取四位数的年份(加上"20"),如:2004
        getMonth()          获取月份的索引(0-11),0是一月,11是十二月
        getDate()           获取日期,如:4
        getDay()            获取星期的索引(0-6),0是星期天
        getHours()          获取小时数,如:14
        getMinutes()        获取分钟数,如:25
        getSeconds()        获取秒数,如:45
        getMilliseconds()   获取毫秒数,如:567
        getTime()           获取时间戳（毫秒数）,如:1136214245000
            时间戳:1970年1月1日0时0分0秒到现在的毫秒数
        Date.now()          获取当前时间戳（毫秒数）
    *
    * */
    //直接通过new Date()创建的对象,显示是创建改实例的一刻(代码执行时)的时间
    let date = new Date();
    console.log(date);

    //  可以在Date()的构造函数中传递一个表示时间的字符串
    //  数值格式:年,月,日,时,分,秒
    date = new Date(2004, 3, 4, 0, 0, 0);
    //  时间戳格式
    date = new Date(1136214245000);
    //  字符串的格式(不推荐,可能产生格式问题):"月/日/年 时:分:秒"
    date = new Date("03/04/2004");

    /*日期的格式化*/
    //将日期转换为本地字符串
    //转换时间日期
    let toLocal = date.toLocaleString();
    //转换时间
    toLocal = date.toLocaleTimeString();
    //转换日期
    toLocal = date.toLocaleDateString();
    console.log(toLocal);

    /*toLocaleString()
    *  参数:
    *   1. 描述语言和国家信息的字符串
    *       zh-CN: 简体中文
    *       zh-TW: 繁体中文
    *       zh-HK: 香港中文(香港在使用一些异体字)
    *       en-US: 美式英语
    *       ru-RU: 俄语
    *       en-UK: 英语
    *       fr-FR: 法语
    *   2. 需要一个对象作为参数,在对象中可以通过对象的属性来对日期的格式进行配置
    *       dateStyle: 日期的格式
    *       timeStyle: 时间的格式
    *           full,如:
    *           long,如:         2004年3月4日 GMT+8 0:0:0
    *           medium,如:       3/4/2004 0:0:0
    *           short,如:        3/4/04 0:0
    *       hour12: 12小时制
    *           true: 12小时制
    *           false: 24小时制
    *       weekday: 星期的显示方式
    *           long,如: 星期二
    *           short,如: 周二
    *           narrow,如: 二
    * */
    toLocal = date.toLocaleString("zh-CN", {dateStyle: "full", timeStyle: "long"});
    console.log(toLocal);
}
{
    //包装类
    /*在JS中,除了直接创建原始值外,还可以创建原始值的对象
      通过new方法:
        new String();
        new Number();
        new Boolean();
      JS共有5个包装类:
        String
        Number
        Boolean
        BigInt
        Symbol
      通过包装类可以将一个原始值包装为一个对象,当对一个原始值调用方法或属性时,
        JS解释器会临时将原始值包装为对应的对象,然后调用这个对象的属性或方法.
    * */
    let a = 1;
    a = a.toString()
    //a是原始值,原始值本来不包含方法,但是JS解释器会把a暂时地包装成为一个类并调用方法.
    //包装类正常情况下不会用到,一般是JS解释器在编译时候自己用的.
}
{
    //字符串方法
    /*字符串
        本质是一个字符数组,但是**字符串一旦创建便不可变**
        "hello" --> ["h", "e", "l", "l", "o"]
        所以字符串的很多方法和数组类似
      属性和方法:
        .length()获取字符串的长度
        [索引]获取指定位置的字符
        .at()跟[索引]一样,但是可以接受负值
        .charAt()一样,不支持负值
        .includes()检查字符串中是否包含指定的字符,返回布尔值
        .startsWith()检查字符串是否以指定的字符串开头
        .endsWith()检查字符串是否以指定的字符串结尾
        .repeat()重复指定的次数
        .indexOf()检查字符串中是否包含指定的字符
        .lastIndexOf()检查字符串中是否包含指定的字符
        .padStart()在指定的长度之前填充指定的字符
            参数: 字符要保持的长度,(可选,默认空格)占位符
        .padEnd()在指定的长度之后填充指定的字符
    * */
}
{
    //正则表达式
    /*正确规则表达式(傻逼翻译),用来定义一个字符串规则
    * 是一个对象
    * 创建:
    *   1.构造函数
    *       new RegExp();
    *           参数
    *             字符串规则
    *             匹配模式
    *   2.字面量创建
    *       let regular = /正则表达式/匹配模式
    * 如果需要动态指定规则,可以使用构造函数;如果要简洁,可以使用字面量,但是规则就是定死的
    * 方法:
    *   .test()检查是否符合规则
    *   .exec()检查是否符合规则，返回数组，数组的第一个元素是匹配的内容，第二个元素是匹配的index
    * 符号:
    *       &       与
    *       |       或
    *       []      字符集,匹配括号里面的任意字符
    *           [abcdefghigk]   匹配括号里面的任意字符
    *           [a-z]           匹配a到z里面的任意字符
    *           [a-zA-Z]        匹配a到z和A到Z里面的任意字符
    *           /[a-z]/i        匹配a到z里面的任意字符，忽略大小写
    *           [^a-z]          匹配除了a到z里面的任意字符
    *       . 除了空白字符以外的任意字符
    *       \ 转义符
    *           \d              匹配任意数字
    *           \D              匹配任意非数字
    *           \w              匹配任意单词字符([A-Za-z0-9_])
    *           \W              匹配任意非单词字符
    *           \s              匹配任意空白字符
    *           \S              匹配任意非空白字符
    *       ^       匹配字符串的开头，如^a表示字符串必须以a开头
    *       $       匹配字符串的结尾,如a$表示字符串在a后就没有任何字符了
    *       ^内容$   完全匹配,如^a$表示字符串必须是a
    * 量词:
    *       a{3}       a至少出现三次
    *       ^a{3}$     只有三个a
    *       (abc){3}   abc至少出现三次
    *       a{3,}       a至少出现三次
    *       [a-z]{3,5} 匹配3到5个字母
    *       a+          a至少出现一次{1,}
    *       a*          a出现任意次数,可有可无{0,}
    *       a?          a出现0-1次{0,1}
    * */
    //通过构造函数来创建一个正则表达式的对象
    let regular = new RegExp();
    //通过字面量创建
    let regular2 = /正则表达式/;
    {
        //检查字符串中是否含"a"
        let reg = /a/;

        let str = "abc";
        let result = reg.test(str); //true
        console.log(result);
    }
    {
        //获取字符串中符合a什么c的字符段
        let str = "ahchasdfhachaecaocaicabc"

        let reg = /a[a-z]c/ig;
        //i表示ignoreCase，忽略大小写;g表示global，全局匹配,每调用一次就会向下匹配一个符合的内容
        let result = reg.exec(str);
        console.log(result);
        let reg1 = /a([a-z])c/ig;
        //括号表示把匹配到的内容返回
        let result1 = reg1.exec(str);
        console.log(result1);
    }
    {
        //获取字符串中的手机号码
        let str = "asdfsdfawefasdf15812345678awfsdfaww34ra43taesrfasdf13812345678af3fsdfaw13912345678asdfq3rAT"
        /*手机号的规则:
            例:18241103119
                1(必须以"1"开头) 8(不能为"0,1,2") 241103119(任意九位数字)
        * */
        let reg = /(1[3-9]\d)\d{4}(\d{4})/g

        let result;
        while (result = reg.exec(str) !== null) {
            console.log("您的号码:" + result[1] + "****" + result[2]);
        }
    }
}
{
    //DOM
    /*Document Object Model
    *       DOM将网页中所有内容都转换为对象,可以完全以OOP的方式控制网页
    *       DOM是一个模型(Model),体现的对象之间的关系(父级子级兄弟级)
    * 节点(Node):
    *   网页的每一个对象都是一个节点
    *       1.文档节点  Document
    *       2.元素节点  Element
    *       3.文本节点
    *       4.属性节点
    *   Node是所有网页对象共同的父类,相当于对象中的Object
    * 关系:
    *   祖先-包含后代元素的元素
    *   后代-被祖先元素包含的元素
    *   父-直接包含子元素的元素
    *   子-直接被父元素包含的元素
    *   兄弟-拥有相同父元素的元素
    * */
    /*DOM的使用
    *   使用DOM操作网页,需要浏览器至少先提供一个对象,这个对象就是Document
    *       document表示整个网页,window表示整个窗口
    * */
    {
        {
            /*文档节点对象
            *   document对象的原型链:
            *       HTMLDocument -> Document -> Node -> EventTarget -> Object.prototype -> null
            *   凡是原型链上存在的对象的属性和方法都可以通过Document去调用
            * 部分属性:
            *   document.documentElement:   获取HTML根元素
            *   document.head:              获取head元素
            *   document.title:             获取网页标题
            *   document.body:              获取body元素
            *   document.link:              获取link元素
            * */
            //获取一个元素
            let btn = document.getElementById("testBtn");
            //btn作为DOM对象的实例
            //innerText属性:按钮上的文本内容
            btn.innerText = "按钮";
            btn.onclick = function () {
                alert("按钮被点击");
            }
        }
        {
            /*元素节点对象
            * 通过document获取已有元素节点:
            *   document.getElementById():
            *       根据id获取一个元素节点对象
            *   document.getElementsByClassName():
            *       根据class获取一个元素节点对象
            *       该方法返回的结果是一个实时更新的集合
            *           当网页中添加新元素时,集合也会实时刷新
            *   document.getElementsByTagName():
            *       根据tag获取一个元素节点对象
            *       返回的结果是可以实时更新的集合
            *       document.getElementsByTagName("*")表示获取页面中的所有元素
            *   document.getElementsByName()
            *       根据name属性获取一组元素节点对象
            *       返回一个实时更新的集合
            *       主要用于表单项(form)
            *   document.querySelector()
            *       根据css选择器获取一个元素节点对象
            *       会选择第一个符合的节点
            *   document.querySelectorAll()
            *       根据css选择器获取一组元素节点对象
            *       返回一个类数组,但是不会实时更新
            *
            * 通过document创建元素节点
            *   document.creatElement()
            *       根据标签名创建一个元素节点对象,但是不会被真正插入到网页中
            *
            * 通过元素节点对象获取其它节点的方法
            *   元素.childNodes
            *       获取当前元素的子节点(包含空白的子节点)
            *   元素.parentNode
            *       获取当前元素的父节点
            *   元素.children
            *       获取当前元素的子元素
            *   元素.firstElementChild
            *       获取当前元素的第一个子元素
            *   元素.lastElementChild
            *       获取当前元素的最后一个子元素
            *   元素.previousElementSibling
            *       获取当前元素的上一个兄弟元素
            *   元素.nextElementSibling
            *       获取当前元素的下一个兄弟元素
            *   元素.nextElementSibling
            *       获取当前元素的下一个兄弟元素
            *   元素.previousElementSibling
            *       获取当前元素的上一个兄弟元素
            *   元素.tagName
            *       获取当前元素的标签名
            * */

            let div = document.getElementById("testDiv");
            let spans = div.getElementsByTagName("span");

            let firstSpan = spans[0];
            firstSpan = div.firstElementChild;
        }
        {
            /*文本节点
             *  DOM中,网页中所有的文本内容都是文本节点对象
             *  可以直接通过元素修改其中的文本
             *      修改文本的三个属性
             *          元素.textContent
             *              获取或修改元素中的文本内容
             *              获取的是标签中的内容,包括空白符.不会考虑CSS样式
             *          元素.innerText
             *              获取或修改元素中的文本内容
             *              获取内容时会考虑CSS样式,例如:如果style="display:none",就会显示空白
             *              当字符串中有标签时,会自动对标签进行转义,如:
             *                  <li> --> &lt;li&gt;
             *          元素.innerHTML
             *              获取或修改元素中的html代码
             *              可以直接向元素中添加HTML代码
             *              在公开网站上使用有被XSS注入的风险,如
             *                  别人在使用了innerHTML的输入框中添加<script>恶意脚本,会在所有打开网页的人的浏览器中运行改脚本
             * */
            //获取文本节点对象
            let div = document.getElementById("testDiv");
            let span = div.firstElementChild;
            let text = span.firstChild;
            //或者
            text = span.textContent;
            console.log(text);
        }
    }
    {
        //事件
        /*
        *   就是用户和页面之间发生的♂行为
        *       例如点击按钮,鼠标移动
        *   可以通过为时间绑定响应函数(回调函数)来完成交互
        *   绑定响应函数的方式:
        *       1.可以直接在元素的属性中设置
        *       2.可以通过为元素的指定属性设置回调函数的形式来绑定事件
        *       3.可以通过元素时间监听器addEventListener()方法来绑定事件
        * */

        let btn = document.getElementById("testBtn");
        //使用onclick
        btn.onclick = () => {
            alert("1");
        }

        btn.onclick = () => {
            alert("2");
        }
        //onclick 相当于把属性值改掉,会被覆盖,永远只会执行最后一个绑定的方法

        //使用时间监听器可以实现一个事件多个方法
        btn.addEventListener("dblclick", function () {
            alert("双击");
        })
    }
    {
        //文档的加载
        /*网页是自上向下加载的,如果将JS代码放在网页上面,JS在执行时,网页还没加载完毕,所以会出现无法获取到DOM的现象
        * 解决方案:
        *   1.将<script>标签写到<body>的最后
        *   2.写在<header>中,但是添加defer使脚本后执行
        *       <script defer src="note.js"></script>
        * */
    }
    {
        //XSS注入
        /*当网页中有需要用户输入的内容,就可能有潜在的XSS注入风险
        * */
        let name;
        let email;
        let tbody;
        tbody.insertAdjacentHTML(
          "beforeend",
          `<tr>
                      <td>${name}</td>
                      <td>${email}</td>
                      <td>
                          <a href="javascript:;">删除</a>
                      </td>
                    </tr>`
        )
        //创建元素
        let tr = document.createElement("tr");

        //创建td
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        nameTd.textContent = name;
        emailTd.innerText = email;
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
    }
    {
        //事件(event)
        /*事件对象
        *   事件对象是浏览器在实践出发时所创建的对象
        *       这个对象中封装了事件相关的各种信息
        *   通过事件对象可以获取到事件的详细信息
        *       比如:鼠标的坐标,键盘的按键等
        *   浏览器在创建事件对象后,会将事件对象作为响应函数的参数传递,
        *       所以我们可以在事件的回调函数句中定义一个形参来接受事件对象
        * */
        let box0 = document.getElementById("testBox");

        box0.addEventListener("mousemove", event => {
            console.log(event.clientX, event.clientY);

            box0.textContent = event.clientX + "," + event.clientY;
        })
        {
            /*DOM中有多种不同类型的事件对象
            * 共同的祖先是Event
            *   Event.target 触发事件的对象
            *   Event.currentTarget 绑定事件的对象
            *   Event.stopPropagation() 停止事件的传递
            *   Event.preventDefault() 阻止事件默认行为(如超链接的点击后跳转)
            * */
        }
        {
            /*事件的冒泡(bubble)
            *   指的是事件的向上传递
            *       当元素上的某个事件被触发后,其祖先元素上的相同时间也会同时被触发
            *       简化了JS代码的编写,但是在一些场景中并不希望冒泡存在
            *           不希望事件冒泡时,可以通过事件对象来取消冒泡
            *               Event.stopPropagation();
            * */
            let box1 = document.getElementById("box1");
            let box2 = document.getElementById("box2");
            let box3 = document.getElementById("box3");
            box1.addEventListener("click", () => {
                /*在事件的响应函数中:
                    Event.target表示的是触发事件的对象
                    this表示的是绑定事件的对象
                * */
                console.log(Event.target);
                console.log(this);
                alert("box1");
            })
            box2.addEventListener("click", () => {
                alert("box2");
            })
            box3.addEventListener("click", () => {
                Event.stopPropagation()
                alert("box3");
            })
        }
        {
            /*事件的委派
            希望:
                只绑定一次事件,即可以让所有的超链接,包括当前的和未来新建的超链接具有特定事件
            思路:
                可以将事件统一绑定给document,这样点击超链接时,由于事件的冒泡,会导致document上的点击事件被触发.
                    这样只绑定一次,所有的超链接都会具有这些事件.
           委派就是将本该绑定给多个元素的事件统一绑定给document(通常),这样可以降低代码的复杂度,方便维护.
        * */
            let list = document.getElementById("testList");
            let links = list.getElementsByTagName("a");

            //把事件统一委托给document,就不必在每次新建一个对象都要重写方法
            document.addEventListener("click", (Event) => {
                //执行代码前先判断事件是否由希望添加方法的对象触发
                if ([...links].includes(Event.target)) {
                    alert(Event.target.textContent);
                }
            })
        }
        {
            /*事件的传播机制:
            *   在DOM中,事件的传播可以分为三个阶段:
            *       1.捕获阶段  (由祖先元素向目标元素进行事件的捕获)
            *           默认情况下,事件不会在捕获阶段触发
            *           如果希望在捕获阶段触发事件,可以将addEventListener的第三个参数设置为true
            *       2.目标阶段  (触发事件的对象)
            *       3.冒泡阶段  (由目标元素向祖先元素进行事件的冒泡)
            * */
        }
    }
}
{
    //BOM
    /*Browser Object Model浏览器对象模型
        提供了一组对象,通过对象可以完成对浏览器的各种操作
    * 对象:
    *   Window      代表浏览器窗口(全局对象)
    *   Navigator   浏览器的对象(可以用来识别浏览器)
    *   Location    浏览器的地址栏信息
    *   History     浏览器的历史记录(不能真正获取到记录,只能获取到访问了几个网页.用来控制浏览器页面的前进后退)
    *   Screen      屏幕的信息
    * */
}
{
    //定时器
    /*通过定时器,可以使代码在指定时间后执行
    * 设置定时器:
    *   setTimeout();
    *       参数
    *           1.回调函数(要执行的代码)
    *           2.延迟时间(毫秒)
    *           3.是否在下一轮事件循环中执行
    *   setInterval();
    *       参数和setTimeout()函数一样，但是会每间隔指定时间后执行一次
    * 关闭计时器:
    *   clearTimeout(定时器实例变量名);
    * */
    let num = document.getElementById("num");

    let times = 0;

    let timer = setInterval(() => {
        times++;
        times = Number(num.textContent);
    }, 30);
}
{
    //调用栈
    /*函数的执行环境:
        函数每执行一次时,都会产生一个执行环境
        执行环境负责存储函数执行时产生的一切数据
      栈:
        一种数据结构,类似一个数组,可以存储一组数据
        存储方式和数组不同,后进先出,就好比在地上放的一堆书,最后一个放的在最上面,拿的时候第一个拿
      调用栈(call stack):
        函数执行环境存储在调用栈中
        当一个函数被调用时,它的执行环境会作为一个栈帧插入到栈的栈顶
        函数执行完毕后,该栈帧会自动从栈中弹出
    * */
}
{
    //消息队列
    /*队列:
        一种数据结构
        先进先出
    消息队列:
        负责存储将要执行的函数
        当触发一个事件时,其响应函数并不是直接添加到调用栈中.
            因为调用栈中有可能会存在一些还没执行完的代码
        事件触发后,JS引擎将事件响应函数插入到消息队列中排队
    * */
}
{
    //定时器
    /*本质就是在一定时间后将代码添加到消息队列中
    * */
    console.time();
    //三秒后将方法放入消息队列
    setTimeout(function () {
        console.timeEnd();
        console.log("定时器执行");
    }, 3000);

    //放入队列后方法在调用栈中停留6s,等待6s执行完后才可以执行方法
    let begin = Date.now();
    while (Date.now() - begin < 6000) {
    }
    {
        /*setInterval()
        * 每间隔一段时间就将函数添加到消息队列中
        * 但是如果函数执行的速度比较慢,无法确保每次执行的间隔
        * */
        console.time();
        setInterval(function () {
            console.timeEnd();
            console.log("定时器执行");
        }, 3000);
    }
}
{
    //jQuery
    /*一个代码库,便于提高开发效率
    *   简化DOM,事件,动画,Ajax等操作
    *   可能会影响一些性能
    * 随着DOM标准更新,IE消亡,加上React,Vue,Angular等大型框架的出现,jQuery已经过时
    *   可以进行一个原生JS库的过渡,以及开发需要兼顾兼容性的项目
    * */
    {
        //引入
        /* 引入本地库:
         *    <script src="./scripts/jquery-3.5.1.min.js"></script>
         * 从公共服务器CDN引入:
         *    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         * 引入jQuery库,其实就是向网页中添加了一个新的函数$(jQuery)
         *    $ 是jQuery的核心函数, jQuery的所有功能都是通过该函数来进行的
         * */
    }
    {
        //核心函数
        /*功能:
            两种作用:
              1. 作为工具类使用
                    $.isFunction(fn)
              2. 作为函数使用
                    将一个函数作为$的参数
                      这个函数会在文档加载完毕后执行
                      相当于:
                        document.addEventListener("DOMContentLoaded", fn);
                    将选择器字符串作为参数:
                      自动取页面中查找元素
                      相当于 document.querySelector(selector)
                      注意:通过jQuery核心函数查询的结果并不是原生的DOM元素,而是Object,称其为jQuery对象
                          jQuery对象中提供了很多新的方法,方便做DOM操作
                              但是jQuery对象不能直接调用原生DOM方法
                              为jQuery对象命名时会使用$开头加以区分
                    将DOM对象作为参数
                      可以将DOM对象转换为jQuery对象,从而使用jQuery对象的方法使
                    将HTML代码作为参数
                      可以将HTML代码转换为jQuery对象,从而使用jQuery对象的方法
        * */
        const $ = require('jquery');

        $(function () {
            alert("核心函数执行");
        });
        alert("核心外部函数执行");

        $("#btn").click(function () {
            alert("按钮被点击");
        });

        var $h1 = $("<h1>标题</h1>");
        $("#h1Container").append($h1);
    }
    {
        //jQuery对象
        /*通过jQuery核心函数获取到的对象
        * 是jQuery中定义的对象
        *   可以理解为DOM对象的升级版,在以前可以帮助简化DOM操作
        * 本质是一个DOM对象的类数组
        *   可以通过索引获取到jQuery对象中的DOM对象
        * 当修改jQuery对象时,会自动修改jQuery中的所有元素
        *   成为jQuery的隐式迭代
        * 通常jQuery对象的方法返回值依然是一个jQuery对象
        *
        *
        * */
    }
}
