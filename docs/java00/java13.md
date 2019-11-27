---
title: "Java 数组" 
date: 2019年11月13日10:27:35
---
# Java 数组

## 声明数组变量
首先必须声明数组变量，才能在程序中使用数组。例如：
```java
double[] myList;         // 首选的方法
或
double myList[];         //  效果相同，但不是首选方法
```
> 注意: 建议使用`double[] myList` 的声明风格声明数组变量。 `double myList[]`风格是来自 `C/C++` 语言 ，在Java中采用是为了让 `C/C++ `程序员能够快速理解java语言。


## 创建数组
Java语言使用new操作符来创建数组，有以下三种类型：
```java
1.arrayRefVar = new dataType[arraySize];

2.dataType[] arrayRefVar = new dataType[arraySize];

3.dataType[] arrayRefVar = {value0, value1, ..., valuek};
```
数组的元素是通过索引访问的。数组索引从0开始，所以索引值从0到`arrayRefVar.length-1`。

实例
```java
double[] myList = new double[10];
```
下面的图片描绘了数组myList。
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8w7gz5nbkj30ci06rweo.jpg">
</div>

## 处理数组
示例
```java
public class TestArray {
   public static void main(String[] args) {
      double[] myList = {1.9, 2.9, 3.4, 3.5};

      // 打印所有数组元素
      for (int i = 0; i < myList.length; i++) {
          System.out.println(myList[i] + " ");//1.9 2.9 3.4 3.5
       }
       // 计算所有元素的总和
       double total = 0;
       for (int i = 0; i < myList.length; i++) {
          total += myList[i];
       }
       System.out.println("Total is " + total);//Total is 11.7

       // 查找最大元素
       double max = myList[0];
       for (int i = 1; i < myList.length; i++) {
          if (myList[i] > max) max = myList[i];
      }
      System.out.println("Max is " + max);//Max is 3.5
   }
}
```

## foreach循环
JDK 1.5 引进了foreach循环。

示例
```java
public class TestArray {
   public static void main(String[] args) {
      double[] myList = {1.9, 2.9, 3.4, 3.5};

      // 打印所有数组元素
      for (double element: myList) {
         System.out.println(element);//1.9 2.9 3.4 3.5
      }
   }
}
```

## 数组作为函数的参数
```java
public static void printArray(int[] array) {
  for (int i = 0; i < array.length; i++) {
     System.out.print(array[i] + " ");
   }
}
//调用
printArray(new int[]{3, 1, 2, 6, 4, 2});
```

## 数组作为函数的返回值

```java
public static int[] reverse(int[] list) {
  int[] result = new int[list.length];
  for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
     result[j] = list[i];
   }
   return result;
 }
 ```

## Arrays 类
java.util.Arrays类能方便地操作数组，它提供的所有方法都是静态的。
::: tip 具有以下功能：
- 给数组赋值：通过fill方法。
- 对数组排序：通过sort方法,按升序。
- 比较数组：通过equals方法比较数组中元素值是否相等。
- 查找数组元素：通过binarySearch方法能对排序好的数组进行二分查找法操作。
:::

### 输出整个数组
利用Arrays的toString方法可以输出整个数组的内容。
```java
public static void main(String[] args) {
        int[] nums1 = {1, 2, 3};
        int[] nums2 = {2, 1, 5};

        int n=nums1.length+nums2.length;
        int[] num=new int[n];
        for(int i=0;i<nums1.length;i++){
            num[i]=nums1[i];
        }
        for(int i=nums1.length, j=0;j<nums2.length;j++){
            num[i+j]=nums2[j];
        }
        System.out.println(Arrays.toString(num));
        Arrays.sort(num);
        System.out.println(Arrays.toString(num));

    }
```

具体说明请查看下表：
|  方法和说明                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| public static int binarySearch\(Object\[\] a, Object key\) |
| 用二分查找法在给定数组中搜索给定值。数组在调用前必须**排序好**的。如果查找值包含在数组中，则返回搜索键的索引；否则返回 \(\-\(插入点\) \- 1\)。                                                   |
|  public static boolean equals\(long\[\] a, long\[\] a2\)    |
| 如果两个数组包含相同数量的元素，并且两个数组中的所有相应元素对都是相等的，则认为这两个数组是相等的。|
|  public static void fill\(int\[\] a, int val\)              |
| 将指定的 int 值分配给指定 int 型数组指定范围中的每个元素。。                                                                                 |
|  public static void sort\(Object\[\] a\)                    |
| 对指定对象数组根据其元素的自然顺序进行升序排列。。                                                                                           |
