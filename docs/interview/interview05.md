# JavaScript this 关键字
## 概述
任何执行 JavaScript 的环境称之为 执行上下文，JavaScript 运行时 维护这些执行上下文的堆栈，并且当正在执行存在于该堆栈顶部的执行上下文。this 变量引用的对象每次更改执行上下文时都会更改。

默认情况下，执行上下文是全局的，这意味着如果代码作为简单函数调用的一部分执行，则该 this 变量将引用 全局对象 。在浏览器的情况下，全局对象是 windows 对象。但在 NodeJS 环境中，this 值是一个特殊的 global 对象。

## 简单函数
```js
 // 案例 1，简单函数，浏览器下的 this -> window，NodeJS 下的 this -> global
  function simple1() {
    console.log("案例 1，简单函数");
    console.log("我是简单函数，this 指向 window");
    console.log(this);
  }
simple1();
```

## 严格模式
```js
 // 案例 2，严格模式，this -> undefined
  function simple2() {
    'use strict';
    console.log("案例 2，严格模式");
    console.log("我是严格模式，this 指向 undefined");
    console.log(this);
}
simple2();
```

## 构造函数
当我们调用 new User，JavaScript 会在 User 函数内创建一个新对象并把它保存为 this 。接着，name, age 和 info 属性会被添加到新创建的 this 对象上。
```js
 // 案例 3，构造函数，此时在执行上下文中创建了 this 对象，并在这个 this 对象中增加了 name, age, info 三个属性
  function User(name, age) {
    this.name = name;
    this.age = age;

    this.info = function () {
      console.log("我是 User 对象中的 info 属性")
      console.log(`${this.name} ${this.age}`);
    };
    console.log("案例 3，构造函数");
    console.log("我是 User 对象，我在执行上下文中创建了 this 对象，并增加了 name, age, info 三个属性");
    console.log(this);
  }
  let andy = new User('Andy', 22);
  andy.info();
```