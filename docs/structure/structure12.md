# 希尔排序
## 概述
我们看简单的插入排序可能存在的问题。数组 arr = {2,3,4,5,6,1} 这时需要插入的数 1(最小), 这样的过程是：
```
{2,3,4,5,6,6}
{2,3,4,5,5,6}
{2,3,4,4,5,6}
{2,3,3,4,5,6}
{2,2,3,4,5,6}
{1,2,3,4,5,6}
```
结论: 当需要插入的数是较小的数时，后移的次数明显增多，对效率有影响.

希尔排序是希尔（Donald Shell）于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。

::: tip 希尔排序法基本思想
希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止
:::
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4r1p8s9hj30p90km4a5.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4r59svqgj30n7052wfb.jpg)

## 交换法逐步推导代码
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 希尔排序
 * 2020/5/25 15:59 By Tinny
 */
public class ShellSort {
    public static void main(String[] args) {
        int[] arr = {8, 9, 1, 7, 2, 3, 5, 4, 6, 0};
        shellSort(arr);
    }

    /**
     * 使用逐步推导的方式实现希尔排序
     * @param arr
     */
    public static void shellSort(int[] arr) {
        int temp = 0;
        //第1轮
        //因为，第1轮排序是将10个数据分成了5组
        for (int i = 5; i < arr.length; i++) {
            //遍历各组中所有的元素(共5组，每组有2个元素),步长5
            for (int j = i - 5; j >= 0; j -= 5) {
                //如果当前元素大于加上步长后的那个元素,说明交换
                if (arr[j] > arr[j + 5]) {
                    temp = arr[j];
                    arr[j] = arr[j + 5];
                    arr[j + 5] = temp;
                }
            }
        }
        System.out.println("希尔排序第1轮后："+ Arrays.toString(arr));

        //第2轮
        //将10个数据分成了2组
        for (int i = 2; i < arr.length; i++) {
            //遍历各组中所有的元素(共5组，每组有2个元素),步长5
            for (int j = i - 2; j >= 0; j -= 2) {
                //如果当前元素大于加上步长后的那个元素,说明交换
                if (arr[j] > arr[j + 2]) {
                    temp = arr[j];
                    arr[j] = arr[j + 2];
                    arr[j + 2] = temp;
                }
            }
        }
        System.out.println("希尔排序第2轮后："+ Arrays.toString(arr));

        //第3轮
        //将10个数据分成了1组
        for (int i = 1; i < arr.length; i++) {
            //遍历各组中所有的元素(共5组，每组有2个元素),步长5
            for (int j = i - 1; j >= 0; j -= 1) {
                //如果当前元素大于加上步长后的那个元素,说明交换
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println("希尔排序第3轮后："+ Arrays.toString(arr));
    }
}
```
```
希尔排序第1轮后：[3, 5, 1, 6, 0, 8, 9, 4, 7, 2]
希尔排序第2轮后：[0, 2, 1, 4, 3, 5, 7, 6, 9, 8]
希尔排序第3轮后：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 交换法for循环实现
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 希尔排序
 * 2020/5/25 15:59 By Tinny
 */
public class ShellSort {
    public static void main(String[] args) {
        int[] arr = {8, 9, 1, 7, 2, 3, 5, 4, 6, 0};
        shellSort(arr);
    }

    /**
     * 使用逐步推导的方式实现希尔排序
     *
     * @param arr
     */
    public static void shellSort(int[] arr) {
        int temp = 0;
        int count = 0;
        for (int gap = arr.length / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < arr.length; i++) {
                //遍历各组中所有的元素(共gap组),步长gap
                for (int j = i - gap; j >= 0; j -= gap) {
                    //如果当前元素大于加上步长后的那个元素,说明交换
                    if (arr[j] > arr[j + gap]) {
                        temp = arr[j];
                        arr[j] = arr[j + gap];
                        arr[j + gap] = temp;
                    }
                }
            }
            System.out.println("希尔排序第" + (++count) + "轮：" + Arrays.toString(arr));
        }
    }
}
```

## 交换法时间测试
```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

/**
 * 希尔排序,大概7秒
 * 2020/5/25 15:59 By Tinny
 */
public class ShellSort {
    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        shellSort(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 使用逐步推导的方式实现希尔排序
     *
     * @param arr
     */
    public static void shellSort(int[] arr) {
        int temp = 0;
        int count = 0;
        for (int gap = arr.length / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < arr.length; i++) {
                //遍历各组中所有的元素(共gap组),步长gap
                for (int j = i - gap; j >= 0; j -= gap) {
                    //如果当前元素大于加上步长后的那个元素,说明交换
                    if (arr[j] > arr[j + gap]) {
                        temp = arr[j];
                        arr[j] = arr[j + gap];
                        arr[j + gap] = temp;
                    }
                }
            }
        }
    }
}
```

## 移位法
```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 希尔排序,只需1s
 * 2020/5/25 15:59 By Tinny
 */
public class ShellSort {
    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        shellSort2(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 使用移位法
     * @param arr
     */
    public static void shellSort2(int[] arr) {
        //增量gap，并逐步缩小增量
        for (int gap = arr.length / 2; gap > 0; gap /= 2) {
            //从第gap元素，逐个对其所在的组进行直接插入排序
            for (int i = gap; i < arr.length; i++) {
                int j = i;
                int temp = arr[j];
                if (arr[j] < arr[j - gap]) {
                    while (j - gap >= 0 && temp < arr[j - gap]) {
                        //移动
                        arr[j] = arr[j - gap];
                        j -= gap;
                    }
                    //当退出while后，就给temp找到插入的位置
                    arr[j] = temp;
                }
            }
        }
    }
}
```