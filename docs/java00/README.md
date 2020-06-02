---
title: "Java 基础语法" 
date: 2019年11月12日20:27:04
collapsable: true
---
# Java 基础语法
## 第一个Java程序
```java
public class MyFirstJavaProgram {
   /* 第一个Java程序.  
    * 它将打印字符串 Hello World
    */
    public static void main(String []args) {
       System.out.println("Hello World"); // 打印 Hello World
    }
} 
```
::: tip 如何保存、编译以及运行这个程序：
1. 打开Notepad，把上面的代码添加进去；
2. 把文件名保存为：`MyFirstJavaProgram.java`；
3. 打开cmd命令窗口，进入目标文件所在的位置，假设是C:\
4. 在命令行窗口键入 `javac MyFirstJavaProgram.java`  按下`enter`键编译代码。如果代码没有错误，cmd命令提示符会进入下一行。（假设环境变量都设置好了）。
5. 再键入`java MyFirstJavaProgram` 按下`Enter`键就可以运行程序了
:::

你将会在窗口看到 Hello World
```
C : > javac MyFirstJavaProgram.java
C : > java MyFirstJavaProgram 
Hello World
```

## 基本语法
::: tip 编写Java程序时，应注意以下几点：
1. 大小写敏感：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的。
2. 类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 `MyFirstJavaClass` 。
3. 方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
4. 源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。
5. 主方法入口：所有的Java 程序由`public static void main(String args[])`方法开始执行。
:::

## Java标识符
Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

::: tip 关于Java标识符，有以下几点需要注意：
1. 所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始
2. 首字符之后可以是任何字符的组合
3. 关键字不能用作标识符
4. 标识符是大小写敏感的
- 合法标识符举例：age、$salary、_value、__1_value
- 非法标识符举例：123abc、-salary
:::

## Java修饰符
像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：
- 访问控制修饰符 : default, public , protected, private
- 非访问控制修饰符 : final, abstract, static，synchronized 和 volatile

## Java变量
::: tip Java中主要有如下几种类型的变量
- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）
:::


## Java枚举
Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。

例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。
```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
   FreshJuiceSize size;
}

public class FreshJuiceTest {
   public static void main(String args[]){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice. FreshJuiceSize.MEDIUM ;
   }
}
```
> 注意：枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义。

