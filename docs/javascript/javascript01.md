# ECMAScript(基本语法)
ECMAScript是客户端脚本语言的标准

## 与html结合方式

`<script>`可以定义在html页面的任何地方且可以定义多个，但是定义的位置会影响执行顺序。

- 内部JS：定义`<script>`，标签体内容就是js代码
- 外部JS：定义`<script>`，通过src属性引入外部的js文件

## 注释
1. 单行注释：//注释内容
2. 多行注释：/*注释内容*/

## 数据类型
- 原始数据类型(基本数据类型)：
  1. number：数字。 整数/小数/NaN(not a number 一个不是数字的数字类型)
  2. string：字符串。 字符串  "abc" "a" 'abc'
  3. boolean: true和false
  4. null：一个对象为空的占位符
  5. undefined：未定义。如果一个变量没有给初始化值，则会被默认赋值为undefined
    
- 引用数据类型：对象
    
## 变量
变量就是一小块存储数据的内存空间。

Java语言是强类型语言，而JavaScript是弱类型语言。
* 强类型：在开辟变量存储空间时，定义了空间将来存储的数据的数据类型。只能存储固定类型的数据
* 弱类型：在开辟变量存储空间时，不定义空间将来的存储数据类型，可以存放任意类型的数据。

```javascript
var 变量名 = 初始化值;
```    
typeof运算符：获取变量的类型。
> null运算后得到的是object

## 运算符
### 一元运算符：只有一个运算数的运算符
    ++，-- ， +(正号)  
    * ++ --: 自增(自减)
        * ++(--) 在前，先自增(自减)，再运算
        * ++(--) 在后，先运算，再自增(自减)
    * +(-)：正负号
    * 注意：在JS中，如果运算数不是运算符所要求的类型，那么js引擎会自动的将运算数进行类型转换
        * 其他类型转number：
            * string转number：按照字面值转换。如果字面值不是数字，则转为NaN（不是数字的数字）
            * boolean转number：true转为1，false转为0
### 算数运算符

 ` + - * / % ...`

### 赋值运算符

` = += -+....`

### 比较运算符
`> < >= <= == ===(全等于)`

比较方式
1. 类型相同：直接比较
    * 字符串：按照字典顺序比较。按位逐一比较，直到得出大小为止。
2. 类型不同：先进行类型转换，再比较
    * ===：全等于。在比较之前，先判断类型，如果类型不一样，则直接返回false


### 逻辑运算符
`&& || !`

其他类型转boolean：
1. number：0或NaN为假，其他为真
2. string：除了空字符串("")，其他都是true
3. null&undefined:都是false
4. 对象：所有对象都为true

### 三元运算符
```java
表达式? 值1:值2;
判断表达式的值，如果是true则取值1，如果是false则取值2；
```
```java
var a = 3;
var b = 4;

var c = a > b ? 1:0;
```


    
## 流程控制语句
1. if...else...
2. switch:
    * 在java中，switch语句可以接受的数据类型： byte int shor char,枚举(1.5) ,String(1.7)
        * switch(变量):
            case 值:
    * 在JS中,switch语句可以接受任意的原始数据类型
3. while
4. do...while
5. for
## JS特殊语法
1. 语句以`;`结尾，如果一行只有一条语句则 `;`可以省略 (不建议)
2. 变量的定义使用var关键字，也可以不使用
    * 用： 定义的变量是局部变量
    * 不用：定义的变量是全局变量(不建议)

## 案例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>99乘法表</title>
    <style>
        td{
            border: 1px solid;
        }

    </style>

    <script>

        document.write("<table  align='center'>");
			
        //1.完成基本的for循环嵌套，展示乘法表
        for (var i = 1; i <= 9 ; i++) {
            document.write("<tr>");
            for (var j = 1; j <=i ; j++) {
                document.write("<td>");

                //输出  1 * 1 = 1
                document.write(i + " * " + j + " = " + ( i*j) +"&nbsp;&nbsp;&nbsp;");

                document.write("</td>");
            }
            /*//输出换行
            document.write("<br>");*/

            document.write("</tr>");
        }

        //2.完成表格嵌套
        document.write("</table>");

    </script>
</head>
<body>

</body>
</html>
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9u06sua5mj30p007n0su.jpg">
</div>