---
title: "Java 内部类" 
date: 2019年11月1日10:18:01
---
# 内部类
内部类分为成员内部类和局部内部类，局部内部类又包含匿名内部类。
## 成员内部类
定义在类中方法外的类。
```
class 外部类 {
    class 内部类{
    }
}
```
::: tip 访问方式
- 内部类可以直接访问外部类的成员，包括私有成员。
- 外部类要访问内部类的成员，1.建立内部类的对象。2.在外部类的方法中调用内部类，main只调用外部类的方法。
:::
创建内部类对象格式：
```
外部类名.内部类名 对象名 = new 外部类型().new 内部类型()；
```
内部类仍然是一个独立的类，在编译之后会内部类会被编译成独立的`.class`文件，但是前面冠以外部类的类名
和`$`符号 。比如，`Person$Heart.class`
### 重名
如果出现了重名现象，那么格式是：外部类名称.this.外部类成员变量名
```java
public class Outer {
    int num = 10; // 外部类的成员变量

    public class Inner /*extends Object*/ {
        int num = 20; // 内部类的成员变量

        public void methodInner() {
            int num = 30; // 内部类方法的局部变量
            System.out.println(num); // 局部变量，就近原则
            System.out.println(this.num); // 内部类的成员变量
            System.out.println(Outer.this.num); // 外部类的成员变量
        }
    }
}
```
## 局部内部类
如果一个类是定义在方法内部的，那么这就是一个局部内部类。“局部”：只有当前所属的方法才能使用它，出了这个方法外面就不能用了。

::: tip 权限修饰符
1. 外部类：public/(default)
2. 成员内部类：都可以写。
3. 局部内部类：什么都不能写。也不是(default)
:::

局部内部类如果希望访问所在方法的局部变量，那么这个局部变量必须是【有效final的】。(就是只能定义一次，不一定要写final)
::: tip 原因
1. new出来的对象在堆内存中。
2. 局部变量跟着方法走，在栈内存中。
3. 方法运行之后，立刻出栈，局部变量就会立刻消失。
4. 但是new出来的对象会在堆当中持续存在，直到垃圾回收消失。
:::
## 匿名内部类
如果接口的实现类(或者父类的子类)只需要使用一次，那么这种情况下就可以省略该类的定义，而改为使用【匿名内部类】。
匿名内部类的定义格式：
```
接口名称 对象名 =new 接口名称(){
    //覆盖重写所有抽象方法
};
```
::: tip 使用注意
1. 匿名内部类，在【创建对象】的时候，只能使用唯一一次。
如果希望多次创建对象，而且类的内容一样的话，那么就需要使用单独定义的实现类了。
2. 匿名对象，在【调用方法】的时候，只能调用唯一一次。
如果希望同一个对象，调用多次方法，那么必须给对象起个名字。
3. 匿名内部类是省略了【实现类/子类名称】，但是匿名对象是省略了【对象名称】
强调：匿名内部类和匿名对象不是一回事！
:::
```java
public static void main(String[] args) {
//        MyInterface obj = new MyInterfaceImpl();
//        obj.method();

//        MyInterface some = new MyInterface(); // 错误写法！

        // 使用匿名内部类，但不是匿名对象，对象名称就叫objA
        MyInterface objA = new MyInterface() {
            @Override
            public void method1() {
                System.out.println("匿名内部类实现了方法！111-A");
            }

            @Override
            public void method2() {
                System.out.println("匿名内部类实现了方法！222-A");
            }
        };
        objA.method1();
        objA.method2();
        System.out.println("=================");

        // 使用了匿名内部类，而且省略了对象名称，也是匿名对象
        new MyInterface() {
            @Override
            public void method1() {
                System.out.println("匿名内部类实现了方法！111-B");
            }

            @Override
            public void method2() {
                System.out.println("匿名内部类实现了方法！222-B");
            }
        }.method1();
        // 因为匿名对象无法调用第二次方法，所以需要再创建一个匿名内部类的匿名对象
        new MyInterface() {
            @Override
            public void method1() {
                System.out.println("匿名内部类实现了方法！111-B");
            }

            @Override
            public void method2() {
                System.out.println("匿名内部类实现了方法！222-B");
        }
    }.method2();
}
```