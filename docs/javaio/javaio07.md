---
title: "序列化" 
date: 2019年12月6日15:16:55
---
# 序列化
## 概述
Java提供了一种对象序列化的机制。用一个字节序列可以表示一个对象，该字节序列包含该对象的数据、对象的类型和对象中存储的属性等信息。字节序列写出到文件之后，相当于文件中持久保存了一个对象的信息。 

反之，该字节序列还可以从文件中读取回来，重构对象，对它进行反序列化。对象的数据、对象的类型和对象中存储的数据信息，都可以用来在内存中创建对象。
## ObjectOutputStream类
`java.io.ObjectOutputStream ` 类，将Java对象的原始数据类型写出到文件,实现对象的持久存储。
### 构造方法
* `public ObjectOutputStream(OutputStream out) `： 创建一个指定OutputStream的ObjectOutputStream。
  
```java
FileOutputStream fileOut = new FileOutputStream("employee.txt");
ObjectOutputStream out = new ObjectOutputStream(fileOut);
```
::: tip 使用步骤:
1. 创建ObjectOutputStream对象,构造方法中传递字节输出流
2. 使用ObjectOutputStream对象中的方法writeObject,把对象写入到文件中
3. 释放资源
:::

### 序列化操作
 一个对象要想序列化，必须满足两个条件:
* 该类必须实现`java.io.Serializable ` 接口，`Serializable` 是一个标记接口，不实现此接口的类将不会使任何状态序列化或反序列化，会抛出`NotSerializableException` 。
* 该类的所有属性必须是可序列化的。如果有一个属性不需要可序列化的，则该属性必须注明是瞬态的，使用`transient` 关键字修饰。

```java
public class Demo01ObjectOutputStream {
    public static void main(String[] args) throws IOException {
        //1.创建ObjectOutputStream对象,构造方法中传递字节输出流
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("10_IO\\person.txt"));
        //2.使用ObjectOutputStream对象中的方法writeObject,把对象写入到文件中
        oos.writeObject(new Person("小美女",18));
        //3.释放资源
        oos.close();
    }
}
```
## ObjectInputStream类
ObjectInputStream反序列化流，将之前使用ObjectOutputStream序列化的原始数据恢复为对象。 

### 方法
* `public ObjectInputStream(InputStream in) `： 创建一个指定InputStream的ObjectInputStream。
- `public final Object readObject ()` : 读取一个对象。

::: warning static和transient
- static静态关键字优先于非静态加载到内存中,被static修饰的成员变量不能被序列化的,序列化的都是对象。
- transient关键字:瞬态关键字被transient修饰成员变量,不能被序列化
:::
::: tip 使用步骤:
1. 创建ObjectInputStream对象,构造方法中传递字节输入流
2. 使用ObjectInputStream对象中的方法readObject读取保存对象的文件
3. 释放资源
4. 使用读取出来的对象(打印)
:::

```java
public class Demo02ObjectInputStream {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //1.创建ObjectInputStream对象,构造方法中传递字节输入流
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("10_IO\\person.txt"));
        //2.使用ObjectInputStream对象中的方法readObject读取保存对象的文件
        Object o = ois.readObject();
        //3.释放资源
        ois.close();
        //4.使用读取出来的对象(打印)
        System.out.println(o);
        Person p = (Person)o;
        System.out.println(p.getName()+p.getAge());
}}
```

::: tip 注意 
- 对于JVM可以反序列化对象，它必须是能够找到class文件的类。如果找不到该类的class文件，则抛出一个 `ClassNotFoundException` 异常。 
- `Serializable` 接口给需要序列化的类，提供了一个序列版本号。`serialVersionUID`的目的在于验证序列化的对象和对应类是否版本匹配。
- 当JVM反序列化对象时，能找到class文件，但是class文件在序列化对象之后发生了修改，那么反序列化操作也会失败，抛出一个`InvalidClassException`异常,解决方式是自己定义一个`serialVersionUID`。
:::

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g9n223pyf9j319h0i34ag.jpg)

```java
public class Employee implements java.io.Serializable {
     // 加入序列版本号
     private static final long serialVersionUID = 1L;
     public String name;
}
```

## 序列化集合
当我们想在文件中保存多个对象的时候可以把多个对象存储到一个集合中对集合进序列化和反序列化

::: tip 分析:
1. 定义一个存储Person对象的ArrayList集合
2. 往ArrayList集合中存储Person对象
3. 创建一个序列化流ObjectOutputStream对象
4. 使用ObjectOutputStream对象中的方法writeObject,对集合进行序列化
5. 创建一个反序列化ObjectInputStream对象
6. 使用ObjectInputStream对象中的方法readObject读取文件中保存的集合
7. 把Object类型的集合转换为ArrayList类型
8. 遍历ArrayList集合
9. 释放资源
:::

```java
public class Demo03Test {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //1.定义一个存储Person对象的ArrayList集合
        ArrayList<Person> list = new ArrayList<>();
        //2.往ArrayList集合中存储Person对象
        list.add(new Person("张三",18));
        list.add(new Person("李四",19));
        list.add(new Person("王五",20));
        //3.创建一个序列化流ObjectOutputStream对象
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("10_IO\\list.txt"));
        //4.使用ObjectOutputStream对象中的方法writeObject,对集合进行序列化
        oos.writeObject(list);
        //5.创建一个反序列化ObjectInputStream对象
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("10_IO\\list.txt"));
        //6.使用ObjectInputStream对象中的方法readObject读取文件中保存的集合
        Object o = ois.readObject();
        //7.把Object类型的集合转换为ArrayList类型
        ArrayList<Person> list2 = (ArrayList<Person>)o;
        //8.遍历ArrayList集合
        for (Person p : list2) {
            System.out.println(p);
        }
        //9.释放资源
        ois.close();
        oos.close();
    }
}
```