# 插入排序
## 概述
插入排序（Insertion Sorting）的基本思想是：把n个待排序的元素看成为一个有序表和一个无序表，开始时有序表中只包含一个元素，无序表中包含有n-1个元素，排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较，将它插入到有序表中的适当位置，使之成为新的有序表。

**插入排序思路图**:

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4o2wi5zfj30ne0chq4f.jpg)

## 逐步推导代码
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 插入排序
 * 2020/5/25 14:13 By Tinny
 */
public class InsertSort {
    public static void main(String[] args) {
        int[] arr = {101,34,119,1};
        insertSort(arr);
    }

    /**
     * 插入排序
     * @param arr
     */
    public static void insertSort(int[] arr){
        //逐步推导的方式，便于理解
        //第1轮 {101,34,119,1} => {34,101,119,1}

        //定义戴插入的数
        int insertVal = arr[1];
        int insertIndex = 1 - 1; //即arr[1]的前面这个数的下标

        //给insertVal 找到插入的位置
        // 1. insertIndex >= 0 保证插入位置时不越界
        // 2. insertVal < arr[insertIndex] 说明待插入的数还没有找到插入位置
        // 3. 就需要将arr[insertIndex]后移
        while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
            //后移相当于要插的数被赋值为前一个数的值，要插的数已经被insertVal保存了
            // {101,34,119,1} => {101,101,119,1}
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--;
        }
        //当退出while循环时，说明插入的位置找到，insertIndex+1
        arr[insertIndex + 1] = insertVal;
        System.out.println("第1轮插入后");
        System.out.println(Arrays.toString(arr));

        //第2轮
        insertVal = arr[2];
        insertIndex = 2 - 1;
        while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--;
        }
        arr[insertIndex + 1] = insertVal;
        System.out.println("第2轮插入后");
        System.out.println(Arrays.toString(arr));

        //第3轮
        insertVal = arr[3];
        insertIndex = 3 - 1;
        while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--;
        }
        arr[insertIndex + 1] = insertVal;
        System.out.println("第3轮插入后");
        System.out.println(Arrays.toString(arr));
    }
}
```

## for循环代码简化
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 插入排序
 * 2020/5/25 14:13 By Tinny
 */
public class InsertSort {
    public static void main(String[] args) {
        int[] arr = {101,34,119,1,-1,89};
        insertSort(arr);
    }

    /**
     * 插入排序
     * @param arr
     */
    public static void insertSort(int[] arr){
        for (int i = 1; i < arr.length; i++) {
            int insertVal = arr[i];
            int insertIndex = i - 1;
            while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
                arr[insertIndex + 1] = arr[insertIndex];
                insertIndex--;
            }
            arr[insertIndex + 1] = insertVal;
            System.out.println("第"+i+"轮插入后");
            System.out.println(Arrays.toString(arr));
        }
    }
}
```
```
第1轮插入后
[34, 101, 119, 1, -1, 89]
第2轮插入后
[34, 101, 119, 1, -1, 89]
第3轮插入后
[1, 34, 101, 119, -1, 89]
第4轮插入后
[-1, 1, 34, 101, 119, 89]
第5轮插入后
[-1, 1, 34, 89, 101, 119]
```

## 测试时间
```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 插入排序
 * 2020/5/25 14:13 By Tinny
 */
public class InsertSort {
    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        insertSort(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 插入排序
     * @param arr
     */
    public static void insertSort(int[] arr){
        int insertVal = 0;
        int insertIndex = 0;
        for (int i = 1; i < arr.length; i++) {
            insertVal = arr[i];
            insertIndex = i - 1;
            while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
                arr[insertIndex + 1] = arr[insertIndex];
                insertIndex--;
            }
            if (insertIndex + 1 != i) {
                arr[insertIndex + 1] = insertVal;
            }
        }
    }
}
```