# 快速排序
## 概述
快速排序（Quicksort）是对冒泡排序的一种改进。基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4slh0j8qj30nn0d6q55.jpg)

## 代码实现
```java
package com.llw.datastructure.Algorithm;

import java.util.Arrays;

/**
 * 快速排序
 * 2020/5/25 18:04 By Tinny
 */
public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {-9, 78, 0, 23, -567, 70};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("arr=" + Arrays.toString(arr));
    }

    /**
     * 快速排序
     *
     * @param arr
     */
    public static void quickSort(int[] arr, int left, int right) {
        int l = left; //左下标
        int r = right;  //右下标
        //pivot 中轴
        int pivot = arr[(left + right) / 2];
        int temp = 0; //临时变量，交换时使用
        //while循环的目的是让比pivot小的放到左边，大的放到右边
        while (l < r) {
            //从pivot的最左边开始一直找，直到找到大于等于pivot的值，才退出
            while (arr[l] < pivot) {
                l += 1;
            }
            //在pivot的右边一直找，找到小于等于pivot的值，才退出
            while (arr[r] > pivot) {
                r -= 1;
            }
            //如果l >= r 说明pivot的左右两边的值,已经是左边全部小于等于pivot的值，右边。。
            if (l >= r) {
                break;
            }
            //交换
            temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            //如果交换完后，发现这个arr[1] == pivot值  --,相当于前移
            //这里的作用是跳出死循环,因为如果其中一个值等于pivot就会一直交换，
            // 但是l一直不会大于等于r，也就永远不break
            if (arr[l] == pivot) {
                r -= 1;
            }
            //如果交换完后，、、、
            if (arr[r] == pivot) {
                l += 1;
            }
        }
        //如果l ==r,必须l++,r--,否则会出现栈溢出
        if (l == r) {
            l += 1;
            r -= 1;
        }
        //向左递归,防止死龟
        if (left < r) {
            quickSort(arr,left,r);
        }
        //向右递归
        if (right > l) {
            quickSort(arr,l,right);
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
 * 快速排序,即使加个0也不用1s，运行时间是最快的
 * 2020/5/25 18:04 By Tinny
 */
public class QuickSort {
    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        quickSort(arr, 0, arr.length - 1);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 快速排序
     *
     * @param arr
     */
    public static void quickSort(int[] arr, int left, int right) {
        int l = left; //左下标
        int r = right;  //右下标
        //pivot 中轴
        int pivot = arr[(left + right) / 2];
        int temp = 0; //临时变量，交换时使用
        //while循环的目的是让比pivot小的放到左边，大的放到右边
        while (l < r) {
            //从pivot的最左边开始一直找，直到找到大于等于pivot的值，才退出
            while (arr[l] < pivot) {
                l += 1;
            }
            //在pivot的右边一直找，找到小于等于pivot的值，才退出
            while (arr[r] > pivot) {
                r -= 1;
            }
            //如果l >= r 说明pivot的左右两边的值,已经是左边全部小于等于pivot的值，右边。。
            if (l >= r) {
                break;
            }
            //交换
            temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            //如果交换完后，发现这个arr[1] == pivot值  --,相当于前移
            //这里的作用是跳出死循环,因为如果其中一个值等于pivot就会一直交换，
            // 但是l一直不会大于等于r，也就永远不break
            if (arr[l] == pivot) {
                r -= 1;
            }
            //如果交换完后，、、、
            if (arr[r] == pivot) {
                l += 1;
            }
        }
        //如果l ==r,必须l++,r--,否则会出现栈溢出
        if (l == r) {
            l += 1;
            r -= 1;
        }
        //向左递归,防止死龟
        if (left < r) {
            quickSort(arr,left,r);
        }
        //向右递归
        if (right > l) {
            quickSort(arr,l,right);
        }
    }
}
```