# 反射：框架设计的灵魂
框架是一种半成品软件。可以在框架的基础上进行软件开发，简化编码。反射将类的各个组成部分封装为其他对象，这就是反射机制。

反射的好处：
1. 可以在程序运行过程中，操作这些对象。
2. 可以解耦，提高程序的可扩展性。

## Java代码在计算机中经历的三个阶段

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9q9qahnecj311q0gnq3m.jpg">
</div>

## 获取Class对象的方式
1. Class.forName("全类名")：将字节码文件加载进内存，返回Class对象
2. 类名.class：通过类名的属性class获取
3. 对象.getClass()：getClass()方法在Object类中定义着。

> 同一个字节码文件(*.class)在一次程序运行过程中，只会被加载一次，不论通过哪一种方式获取的Class对象都是同一个。

```java
public class ReflectDemo1 {
    public static void main(String[] args) throws Exception {

        //1.Class.forName("全类名")
        Class cls1 = Class.forName("cn.jl.domain.Person");
        System.out.println(cls1); //class cn.jl.domain.Person
        //2.类名.class
        Class cls2 = Person.class;
        System.out.println(cls2); //class cn.jl.domain.Person
        //3.对象.getClass()
        Person p = new Person();
        Class cls3 = p.getClass();
        System.out.println(cls3);//class cn.jl.domain.Person

        //== 比较三个对象
        System.out.println(cls1 == cls2);//true
        System.out.println(cls1 == cls3);//true

        Class c = Student.class;
        System.out.println(c == cls1);//false
    }
}
```
