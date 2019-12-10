# 注解
## 概述
注解（Annotation），也叫元数据，是一种代码级别的说明。它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进行说明，注释。

## 注解的作用
- 编写文档：通过代码里标识的注解生成文档【生成文档doc文档】
- 代码分析：通过代码里标识的注解对代码进行分析【使用反射】
- 编译检查：通过代码里标识的注解让编译器能够实现基本的编译检查【Override】


## JDK中预定义的一些注解
- @Override	：检测被该注解标注的方法是否是继承自父类(接口)的
- @Deprecated：该注解标注的内容，表示已过时
- @SuppressWarnings：压制警告,消除编辑器的警告(一般传递参数all  @SuppressWarnings("all"))

```java
@SuppressWarnings("all")
public class AnnoDemo2 {

    @Override
    public String toString() {
        return super.toString();
    }

    @Deprecated
    public void show1(){
        //有缺陷
    }

    public void show2(){
        //替代show1方法
    }

    public void demo(){
        show1();
        Date date = new Date();
    }
}
```

## 自定义注解
```java
元注解
public @interface 注解名称{
	属性列表;
}
```

注解本质上就是一个接口，该接口默认继承Annotation接口。

```java
public interface MyAnno extends java.lang.annotation.Annotation {}
```
接口中的抽象方法称之为属性。抽象方法的返回值类型可以为：`基本数据类型`、`String`、`枚举`、`注解`和`以上类型的数组`。而一旦定义了属性，在使用时就需要给属性赋值：
1. 如果定义属性时使用`default`关键字默认初始化值，则使用时可以不赋值。
2. 如果只有一个属性需要赋值，并且属性的名称是`value`，则`value`可以省略。
3. 数组赋值时，值使用`{}`包裹。如果数组中只有一个值，则`{}`可以省略		

```java
public @interface MyAnno {
     int value();
     Person per();
     MyAnno2 anno2();
     String[] strs();
//   String name() default "张三";
}
```

```java
@MyAnno(value=12,per = Person.P1,anno2 = @MyAnno2,strs="bbb")
public class Worker {}
```

## 元注解
元注解是用于描述注解的注解，在自定义注解时可以添加元注解来定义。
::: tip 常用元注解
- @Target：描述注解能够作用的位置,ElementType取值：
  - TYPE：可以作用于类上
  - METHOD：可以作用于方法上
  - FIELD：可以作用于成员变量上
- @Retention：描述注解被保留的阶段
  - @Retention(RetentionPolicy.RUNTIME)：当前被描述的注解，会保留到class字节码文件中，并被JVM读取到
- @Documented：描述注解是否被抽取到api文档中
- @Inherited：描述注解是否被子类继承
:::

```java
@Target({ElementType.TYPE,ElementType.METHOD,ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
public @interface MyAnno3 {}
```

## 注解的使用
在程序使用(解析)注解：获取注解中定义的属性值
1. 获取注解定义的位置的对象`（Class，Method,Field）`
2. 获取指定的注解`getAnnotation(Class)`
3. 调用注解中的抽象方法获取配置的属性值

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Pro {
    String className();
    String methodName();
}
```

```java
@Pro(className = "cn.itcast.annotation.Demo1",methodName = "show")
public class ReflectTest {
    public static void main(String[] args) throws Exception {
        //1.解析注解
        //1.1获取该类的字节码文件对象
        Class<ReflectTest> reflectTestClass = ReflectTest.class;
        //2.获取上边的注解对象
        //其实就是在内存中生成了一个该注解接口的子类实现对象
        /*public class ProImpl implements Pro{
                public String className(){
                    return "cn.itcast.annotation.Demo1";
                }
                public String methodName(){
                    return "show";
                }}*/
        Pro an = reflectTestClass.getAnnotation(Pro.class);
        //3.调用注解对象中定义的抽象方法，获取返回值
        String className = an.className();
        String methodName = an.methodName();
        System.out.println(className);//cn.itcast.annotation.Demo1
        System.out.println(methodName);//show

        //3.加载该类进内存
        Class cls = Class.forName(className);
        //4.创建对象
        Object obj = cls.newInstance();
        //5.获取方法对象
        Method method = cls.getMethod(methodName);
        //6.执行方法
        method.invoke(obj);
    }
}
```
## 测试框架案例
需求：当主方法执行后，会自动自行被检测的所有方法(加了Check注解的方法)，判断方法是否有异常，记录到文件中。
```java
public class Calculator {
    //加法
    @Check
    public void add(){
        String str = null;
        str.toString();
        System.out.println("1 + 0 =" + (1 + 0));
    }
    //减法
    @Check
    public void sub(){
        System.out.println("1 - 0 =" + (1 - 0));
    }
    //乘法
    @Check
    public void mul(){
        System.out.println("1 * 0 =" + (1 * 0));
    }
    //除法
    @Check
    public void div(){
        System.out.println("1 / 0 =" + (1 / 0));
    }

    public void show(){
        System.out.println("永无bug...");
    }
}
```

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Check {
}
```

```java
public class TestCheck {
    public static void main(String[] args) throws IOException {
        //1.创建计算器对象
        Calculator c = new Calculator();
        //2.获取字节码文件对象
        Class cls = c.getClass();
        //3.获取所有方法
        Method[] methods = cls.getMethods();

        int number = 0;//出现异常的次数
        BufferedWriter bw = new BufferedWriter(new FileWriter("bug.txt"));

        for (Method method : methods) {
            //4.判断方法上是否有Check注解
            if(method.isAnnotationPresent(Check.class)){
                //5.有，执行
                try {
                    method.invoke(c);
                } catch (Exception e) {
                    //6.捕获异常
                    //记录到文件中
                    number ++;

                    bw.write(method.getName()+ " 方法出异常了");
                    bw.newLine();
                    bw.write("异常的名称:" + e.getCause().getClass().getSimpleName());
                    bw.newLine();
                    bw.write("异常的原因:"+e.getCause().getMessage());
                    bw.newLine();
                    bw.write("--------------------------");
                    bw.newLine();

                }
            }
        }
        bw.write("本次测试一共出现 "+number+" 次异常");
        bw.flush();
        bw.close();
    }
}
```
bug.txt
```
add 方法出异常了
异常的名称:NullPointerException
异常的原因:null
--------------------------
div 方法出异常了
异常的名称:ArithmeticException
异常的原因:/ by zero
--------------------------
本次测试一共出现 2 次异常
```