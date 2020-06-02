# 基数排序
基数排序（radix sort）属于“分配式排序”（distribution sort），又称“桶子法”（bucket sort）或bin sort，顾名思义，它是通过键值的各个位的值，将要排序的元素分配至某些“桶”中，达到排序的作用。
1. 基数排序是经典的空间换时间的方式，占用内存很大, 当对海量数据排序时，容易造成 OutOfMemoryError 
2. 基数排序法是属于稳定性的排序，基数排序法的是效率高的稳定性排序法

3. 基数排序(Radix Sort)是桶排序的扩展

4. 基数排序是1887年赫尔曼·何乐礼发明的。它是这样实现的：将整数按位数切割成不同的数字，然后按每个位数分别比较。
5. 基数排序不支持负数。

::: tip 稳定性是指
相同的数字，每次排列的顺序是一样的。
:::

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf5nifpj0nj310o0hr766.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf5nj9idb1j310d0co0tt.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf5njm3orrj311b0bbjs3.jpg)

## 逐步推导代码实现
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 基数排序
 * 2020/5/26 10:41 By Tinny
 */
public class RadixSort {
    public static void main(String[] args) {
        int[] arr = {53, 3, 542, 748, 14, 214};
        radixSort(arr);
    }

    /**
     * 基数排序
     *
     * @param arr
     */
    public static void radixSort(int[] arr) {
        //定义一个二维数组，表示10个桶，每个桶就是一个一维数组
        // 说明
        // 1. 二维数组包含10个一维数组
        // 2. 为了防止在放入数的时候，数据溢出，则每个一维数组大小定义为arr.length
        // 3. 明显地，基数排序是使用空间换时间的经典算法
        int[][] bucket = new int[10][arr.length];

        //为了记录每个桶中,实际存放了多少个数据,我们定义一个一维数组来记录各个桶的每次放入的数据个数
        //如：bucketElementCounts[0],记录的就是bucket[0]桶的放入的数据个数
        int[] bucketElementCounts = new int[10];

        //第1轮排序(针对每个元素的各位进行排序处理)
        for (int j = 0; j < arr.length; j++) {
            //取出每个元素的个位的值
            int digitOfElement = arr[j] % 10;
            //放入到对应的桶中的对应顺序上
            bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
            bucketElementCounts[digitOfElement]++;
        }
        //按照这个桶的顺序(一维数组的下标一次取出数据,放入原数组)
        int index = 0;
        //遍历每一个桶,并将桶中的数据放入到原数组,这里bucketElementCounts.length就是10
        for (int k = 0; k < bucketElementCounts.length; k++) {
            //如果桶中有数据,我们才放入到原数组
            if (bucketElementCounts[k] != 0) {
                //循环该桶即第k个桶(即第k个一维数组),放入
                for (int l = 0; l < bucketElementCounts[k]; l++) {
                    //取出元素放入到arr
                    arr[index] = bucket[k][l];
                    index++;
                }
            }
            //第1轮处理后,需要将每个bucketElementCounts清零
            bucketElementCounts[k] = 0;
        }
        System.out.println("第1轮，对个位的排序处理arr=" + Arrays.toString(arr));

        //第2轮
        for (int j = 0; j < arr.length; j++) {
            //取出每个元素的个位的值
            int digitOfElement = arr[j] / 10 % 10;
            //放入到对应的桶中的对应顺序上
            bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
            bucketElementCounts[digitOfElement]++;
        }
        index = 0;
        for (int k = 0; k < bucketElementCounts.length; k++) {
            if (bucketElementCounts[k] != 0) {
                for (int l = 0; l < bucketElementCounts[k]; l++) {
                    arr[index] = bucket[k][l];
                    index++;
                }
            }
            bucketElementCounts[k] = 0;
        }
        System.out.println("第2轮，对十位的排序处理arr=" + Arrays.toString(arr));

        //第3轮
        for (int j = 0; j < arr.length; j++) {
            //取出每个元素的个位的值
            int digitOfElement = arr[j] / 100 % 10;
            //放入到对应的桶中的对应顺序上
            bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
            bucketElementCounts[digitOfElement]++;
        }
        index = 0;
        for (int k = 0; k < bucketElementCounts.length; k++) {
            if (bucketElementCounts[k] != 0) {
                for (int l = 0; l < bucketElementCounts[k]; l++) {
                    arr[index] = bucket[k][l];
                    index++;
                }
            }
        }
        System.out.println("第3轮，对百位的排序处理arr=" + Arrays.toString(arr));
    }
}
```

## for循环代码
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 基数排序
 * 2020/5/26 10:41 By Tinny
 */
public class RadixSort {
    public static void main(String[] args) {
        int[] arr = {53, 3, 542, 748, 14, 214};
        radixSort(arr);
    }

    /**
     * 基数排序
     *
     * @param arr
     */
    public static void radixSort(int[] arr) {
        //得到数组中最大数的位数
        int max = arr[0]; //假设第一行就是位数最大的值
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        int maxLength = (max + "").length();

        int[][] bucket = new int[10][arr.length];
        int[] bucketElementCounts = new int[10];
        int index = 0;
        for (int i = 0, n = 1; i < maxLength; i++, n *= 10) {
            for (int j = 0; j < arr.length; j++) {
                int digitOfElement = arr[j] / n % 10;
                bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
                bucketElementCounts[digitOfElement]++;
            }
            index = 0;
            for (int k = 0; k < bucketElementCounts.length; k++) {
                if (bucketElementCounts[k] != 0) {
                    for (int l = 0; l < bucketElementCounts[k]; l++) {
                        arr[index] = bucket[k][l];
                        index++;
                    }
                }
                bucketElementCounts[k] = 0;
            }
            System.out.println(Arrays.toString(arr));
        }
    }
}
```

## 测试时间
```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 基数排序,即使加2个0，时间都是1s，但是再加0内存就溢出了
 * 2020/5/26 10:41 By Tinny
 */
public class RadixSort {
    public static void main(String[] args) {

        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        radixSort(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);

    }

    /**
     * 基数排序
     *
     * @param arr
     */
    public static void radixSort(int[] arr) {
        //得到数组中最大数的位数
        int max = arr[0]; //假设第一行就是位数最大的值
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        int maxLength = (max + "").length();

        int[][] bucket = new int[10][arr.length];
        int[] bucketElementCounts = new int[10];
        int index = 0;
        for (int i = 0, n = 1; i < maxLength; i++, n *= 10) {
            for (int j = 0; j < arr.length; j++) {
                int digitOfElement = arr[j] / n % 10;
                bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
                bucketElementCounts[digitOfElement]++;
            }
            index = 0;
            for (int k = 0; k < bucketElementCounts.length; k++) {
                if (bucketElementCounts[k] != 0) {
                    for (int l = 0; l < bucketElementCounts[k]; l++) {
                        arr[index] = bucket[k][l];
                        index++;
                    }
                }
                bucketElementCounts[k] = 0;
            }
        }
    }
}
```