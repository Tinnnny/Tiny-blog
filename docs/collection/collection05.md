---
title: "ArrayList" 
date: 2019年11月1日15:48:28
---
# ArrayList
ArrayList是大小可变的数组的实现，存储在内的数据称为元素。此类提供一些方法来操作内部存储的元素。可不断添加元素，其大小也自动增长。
## 基本格式
```java
ArrayList<String> list = new ArrayList<String>();
```
在JDK 7后,右侧泛型的尖括号之内可以留空，但是`<>`仍然要写。
```java
ArrayList<String> list = new ArrayList<>();
```

## 主要方法
::: tip ArrayList常用的方法有：
- `public boolean add(E e)`：将指定的元素添加到此集合的尾部。
- `public E remove(int index)`：移除此集合中指定位置上的元素。
- `public E get(int index)`：返回此集合中指定位置上的元素。
- `public int size()`：返回此集合中的元素数。
:::
代码如下:
```java
public class Demo01ArrayListMethod {
    public static void main(String[] args) {
        //创建集合对象
        ArrayList<String> list = new ArrayList<String>();
        //添加元素
        list.add("hello");
        list.add("world");
        list.add("java");
        //public E get(int index):返回指定索引处的元素
        System.out.println("get:" + list.get(0));
        System.out.println("get:" + list.get(1));
        System.out.println("get:" + list.get(2));
        //public int size():返回集合中的元素的个数
        System.out.println("size:" + list.size());
        //public E remove(int index):删除指定索引处的元素，返回被删除的元素
        System.out.println("remove:" + list.remove(0));
        //遍历输出
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
}
```
控制台输出：
```
get:hello
get:world
get:java
size:3
remove:hello
world
java
```

## 存储基本数据类型
ArrayList对象不能存储基本类型，只能存储引用类型的数据。类似`<int>`不能写，但是存储基本数据类型对应的包装类型是可以的。所以，想要存储基本类型数据， `<>`中的数据类型，必须转换后才能编写。
