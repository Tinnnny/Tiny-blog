---
title: "static关键字" 
date: 2019年10月31日13:02:58
---
# 概述
`static`关键字，可以修饰变量、方法和代码块。在使用的过程中，其主要目的还是想在不创建对象的情况
下调用方法。
## 静态变量
当`static`修饰成员变量时，该变量称为**静态变量**。该类的每个对象都共享同一个类变量的值。任何对象都可以更改该类变量的值，但也可以在不创建该类的对象的情况下对类变量进行操作。

比如开学报到为每一位同学编学号（sid），从第一名同学开始，sid为1，以此类推。学号必须是唯一的，连续的，并且与班级的人数相符。这样我们就需要一个变量，与单独的每一个学生对象无关，而是与整个班级有关。

```java
public class Student {
    private String name;
    private int age;
    // 学生的id
    private int sid;
    // 类变量，记录学生数量，分配学号
    public static int numberOfStudent = 0;

    public Student(String name, int age){
        this.name = name;
        this.age = age;
// 通过 numberOfStudent 给学生分配学号
        this.sid = ++numberOfStudent;
    }
    // 打印属性值
    public void show() {
        System.out.println("aaa.Student : name=" + name + ", age=" + age + ", sid=" + sid );
    }
}
```
```java
public class StuDemo {
    public static void main(String[] args) {
        Student s1 = new Student("张三", 23);
        Student s2 = new Student("李四", 24);
        Student s3 = new Student("王五", 25);
        Student s4 = new Student("赵六", 26);
        s1.show(); // Student : name=张三, age=23, sid=1
        s2.show(); // Student : name=李四, age=24, sid=2
        s3.show(); // Student : name=王五, age=25, sid=3
        s4.show(); // Student : name=赵六, age=26, sid=4
    }
}
```
## 静态方法
当`static`修饰成员方法时，该方法称为类方法或静态方法 。静态方法建议使用类名来调用，而不需要创建类的对象。
::: tip 静态方法调用的注意事项：
- 静态方法只能访问静态成员。
- 静态方法中，不能使用this关键字。
- 静态方法不能直接访问普通成员变量或成员方法。反之，成员方法可以直接访问类变量或静态方法。
:::
## 静态代码块
静态代码块是定义在类中方法外，使用static修饰的代码块{ }，随着类的加载而执行且执行一次，优先于main方法和构造方法的执行。

### 主要作用
给类变量进行初始化赋值。例如：
```java
public class Game {
    public static int number;
    public static ArrayList<String> list;

    static {
// 给类变量赋值
        number = 2;
        list = new ArrayList<String>();
// 添加元素到集合中
        list.add("张三");
        list.add("李四");
    }
}
```
## 静态原理
::: tip static 修饰的内容：
- 是随着类的加载而加载的，且只加载一次。
- 存储于一块固定的内存区域（静态区），所以，可以直接被类名调用。
- 它优先于对象存在，所以，可以被所有对象共享。
:::
### 成员变量和方法内存
String str=new String("hello");
::: tip 堆、栈、方法区:
- `栈`是变量`str`每个栈中的数据私有的,其他栈不能访问。
- `堆`存放的是new出来的对象 ,`jvm`中只有一个堆区,被所有的线程共享。
- `方法区`是“hello”,被所有的线程共享，方法区包含所有的class static变量。
:::
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8hbjfovaij31f90ka1kx.jpg">
</div>
栈内存中运行的方法，遵循"先进后出，后进先出"的原则。
### static静态内存原理
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8hb2myymvj31am0im1aq.jpg">
</div>