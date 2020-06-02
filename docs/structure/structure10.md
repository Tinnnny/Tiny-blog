# 选择排序
## 概述
择排序（select sorting）也是一种简单的排序方法。它的基本思想是：第一次从`arr[0]~arr[n-1]`中选取最小值，与`arr[0]`交换，第二次从`arr[1]~arr[n-1]`中选取最小值，与`arr[1]`交换，第三次从`arr[2]~arr[n-1]`中选取最小值，与`arr[2]`交换，…，第i次从`arr[i-1]~arr[n-1]`中选取最小值，与`arr[i-1]`交换，…, 第n-1次从`arr[n-2]~arr[n-1]`中选取最小值，与`arr[n-2]`交换，总共通过n-1次，得到一个按排序码从小到大排列的有序序列。

选择排序思路分析图:
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4mv636tpj30m00c2jsx.jpg)

::: tip 
说明：
1. 选择排序一共有 数组大小 - 1 轮排序
2. 每1轮排序，又是一个循环, 循环的规则
  - 先假定当前这个数是最小数
  - 然后和后面的每个数进行比较，如果发现有比当前数更小的数，就重新确定最小数，并得到下标
  - 当遍历到数组的最后时，就得到本轮最小数和下标
  - 交换
:::

## 代码实现
```java
package com.llw.datastructure.Algorithm;
import java.util.Arrays;

/**
 * 选择排序
 * 2020/5/25 13:34 By Tinny
 */
public class SelectSort {
    public static void main(String[] args) {
        int[] arr = {101, 34, 119, 1};
        selectSort(arr);
    }

    /**
     * 选择排序
     * 该算法的时间复杂度为 O(n^2)
     * @param arr
     */
    public static void selectSort(int[] arr) {

        for (int i = 0; i < arr.length-1; i++) {
            int minIndex = i;
            int min = arr[i];
            for (int j = 1 + i; j < arr.length; j++) {
                if (min > arr[j]) { // 说明假定的最小值，并不是最小
                    min = arr[j];   // 重置min
                    minIndex = j;   //重置minIndex
                }
            }
            //将最小值，放在arr[i]，即交换
            if (minIndex != i) {
                arr[minIndex] = arr[i];
                arr[i] = min;
            }
            System.out.println("第"+(i+1)+"轮后~");
            System.out.println(Arrays.toString(arr));
        }
    }
}
```

## 时间测试
```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 选择排序，运行时间大概在2秒，比冒泡快很多
 * 2020/5/25 13:34 By Tinny
 */
public class SelectSort {
    public static void main(String[] args) {
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        selectSort(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 选择排序
     * 该算法的时间复杂度为 O(n^2)
     * @param arr
     */
    public static void selectSort(int[] arr) {
        for (int i = 0; i < arr.length-1; i++) {
            int minIndex = i;
            int min = arr[i];
            for (int j = 1 + i; j < arr.length; j++) {
                if (min > arr[j]) { // 说明假定的最小值，并不是最小
                    min = arr[j];   // 重置min
                    minIndex = j;   //重置minIndex
                }
            }
            //将最小值，放在arr[i]，即交换
            if (minIndex != i) {
                arr[minIndex] = arr[i];
                arr[i] = min;
            }
        }
    }
}
```