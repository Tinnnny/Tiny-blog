---
title: "Java String" 
date: 2019年11月12日20:27:04
---
# Java String类
## 概述
String类是不可改变的，所以你一旦创建了String对象，那它的值就无法改变了。 如果需要对字符串做很多修改，那么应该选择使用`StringBuffer` & `StringBuilder` 类。`==`是进行对象的地址值比较，如果确实需要字符串的内容比较，可以使用equals方法。且如果比较双方一个常量一个变量，推荐把常量字符串写在前面。
## 创建字符串
创建字符串的常见3+1种方式，字符串效果上相当于是char[] 字符数组，但是底层原理是byte[]字节数组。
```java
        // 1.使用空参构造
        String str1 = new String(); 

        // 2.根据字符数组创建字符串
        char[] charArray = { 'A', 'B', 'C' };
        String str2 = new String(charArray);

        // 3.根据字节数组创建字符串
        byte[] byteArray = { 97, 98, 99 };
        String str3 = new String(byteArray);

        // 直接创建
        String str4 = "Hello";
```
## 字符串常量池
程序当中直接写上的双引号字符串，就在字符串常量池中。
```java
/*
对于基本类型来说，==是进行数值的比较。
对于引用类型来说，==是进行【地址值】的比较。
 */
public class Demo02StringPool {
    public static void main(String[] args) {
        String str1 = "abc";
        String str2 = "abc";

        char[] charArray = {'a', 'b', 'c'};
        String str3 = new String(charArray);

        System.out.println(str1 == str2); // true
        System.out.println(str1 == str3); // false
    }
}
```
## 与获取相关的常用方法
- `public int length()`：获取字符串当中含有的字符个数，拿到字符串长度。
- `public String concat(String str)`：将当前字符串和参数字符串拼接成为返回值新的字符串。
- `public char charAt(int index)`：获取指定索引位置的单个字符。（索引从0开始。）
- `public int indexOf(String str)`：查找参数字符串在本字符串当中首次出现的索引位置，如果没有返回-1值。
```java
public static void main(String[] args) {
        // 获取字符串的长度
        int length = "asdasfeutrvauevbueyvb".length();//21

        // 拼接字符串
        String str1 = "Hello";
        String str2 = "World";
        String str3 = str1.concat(str2);
        System.out.println(str3); // HelloWorld，新的字符串
 
        // 获取指定索引位置的单个字符
        char ch = "Hello".charAt(1);//e

        // 查找参数字符串在本来字符串当中出现的第一次索引位置
        // 如果根本没有，返回-1值
        String original = "HelloWorldHelloWorld";
        int index = original.indexOf("llo");// 2
        System.out.println("HelloWorld".indexOf("abc")); // -1
}
```

## 字符串的截取
- `public String substring(int index)`：截取从参数位置一直到字符串末尾，返回新字符串。
- `public String substring(int begin, int end)`：截取从begin开始，一直到end结束，中间的字符串。
备注：[begin,end)，包含左边，不包含右边。

```java
public static void main(String[] args) {
        String str1 = "HelloWorld";
        String str2 = str1.substring(5);// World，新字符串
        String str3 = str1.substring(4, 7);// oWo

        // 下面这种写法，字符串的内容仍然是没有改变的
        // 下面有两个字符串："Hello"，"Java"
        // strA当中保存的是地址值。
        // 本来地址值是Hello的0x666，
        // 后来地址值变成了Java的0x999
        String strA = "Hello";
        System.out.println(strA); // Hello
        strA = "Java";
        System.out.println(strA); // Java
}
```

## 与转换相关的常用方法
- `public char[] toCharArray()`：将当前字符串拆分成为字符数组作为返回值。
- `public byte[] getBytes()`：获得当前字符串底层的字节数组。
- `public String replace(CharSequence oldString, CharSequence newString)`：将所有出现的老字符串替换成为新的字符串，返回替换之后的结果新字符串。(CharSequence意思就是说可以接受字符串类型)

```java
public static void main(String[] args) {
        // 转换成为字符数组
        char[] chars = "Hello".toCharArray();
        System.out.println(chars.length); // 5

        // 转换成为字节数组
        byte[] bytes = "abc".getBytes();
        for (int i = 0; i < bytes.length; i++) {
            System.out.println(bytes[i]);//97 98 99
        }

        // 字符串的内容替换
        String str1 = "How do you do?";
        String str2 = str1.replace("o", "*");
        System.out.println(str2); // H*w d* y*u d*?
}
```
## 分割字符串的方法
- `public String[] split(String regex)`：按照参数的规则，将字符串切分成为若干部分。

注意事项：如果按照英文句点“.”进行切分，必须写"\\."（两个反斜杠）
```java
public static void main(String[] args) {
        String str3 = "XXX.YYY.ZZZ";
        String[] array3 = str3.split("\\.");
        for (int i = 0; i < array3.length; i++) {
            System.out.println(array3[i]);//XXX YYY ZZZ
    }
}
```