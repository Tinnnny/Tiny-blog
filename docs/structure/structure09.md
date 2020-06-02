# 冒泡排序
## 概述
冒泡排序（Bubble Sorting）的基本思想是：通过对待排序序列从前向后（从下标较小的元素开始）,依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就象水底下的气泡一样逐渐向上冒。最终形成从小到大排列。

因为排序的过程中，各元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在排序过程中设置一个标志flag判断元素是否进行过交换。从而减少不必要的比较。(这里说的优化，可以在冒泡排序写好后，在进行)

## 演示
演示冒泡过程的例子(图解)
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf4i3jwpctj30j60a5mxj.jpg)

::: tip 小结冒泡排序规则
1. 一共进行 数组的大小-1 次 大的循环
2. 每一趟排序的次数在逐渐的减少,因为每一次都能选出一个相对最大的。
3. 如果我们发现在某趟排序中，没有发生一次交换， 可以提前结束冒泡排序。这个就是优化
:::

## 代码实现
```java
package com.llw.datastructure.Algorithm;
import java.util.Arrays;

/**
 * 冒泡排序
 * 2020/5/25 10:56 By Tinny
 */
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {3, 9, -1, 10, -2};
        //第1趟排序就是把最大的数排在最后
        int temp = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1-i; j++) {
                //如果前面的数比后面的数大就交换
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            System.out.println("第"+(i+1)+"趟排序后的数组");
            System.out.println(Arrays.toString(arr));
        }
    }
}
```

```
第1趟排序后的数组
[3, -1, 9, -2, 10]
第2趟排序后的数组
[-1, 3, -2, 9, 10]
第3趟排序后的数组
[-1, -2, 3, 9, 10]
第4趟排序后的数组
[-2, -1, 3, 9, 10]
```

## 总结与优化
当在排序时发现没有位置交换了，就说明排序已经完成了。优化并测试运行时间。

```java
package com.llw.datastructure.Algorithm;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 冒泡排序，80000给我数据运行时间大概在12秒
 * 2020/5/25 10:56 By Tinny
 */
public class BubbleSort {
    public static void main(String[] args) {

        //测试冒泡排序的速度O(n^2),给80000个数据
        int[] arr = new int[80000];
        for (int i = 0; i < 80000; i++) {
            arr[i] = (int) (Math.random() * 8000000);//生成一个[0,8000000)的随机数
        }

        Date date1 = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date1Str = simpleDateFormat.format(date1);
        System.out.println("排序前的时间=" + date1Str);

        bubbleSort(arr);

        Date date2 = new Date();
        String date2Str = simpleDateFormat.format(date2);
        System.out.println("排序后的时间=" + date2Str);
    }

    /**
     * 冒泡
     *
     * @param arr
     * @return
     */
    public static void bubbleSort(int[] arr) {
        //第1趟排序就是把最大的数排在最后
        int temp = 0;
        boolean flag = false; //表示是否进行过交换
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                //如果前面的数比后面的数大就交换
                if (arr[j] > arr[j + 1]) {
                    flag = true;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

            if (!flag) { //在一次排序中，一次交换都没有
                break;
            } else {
                flag = false; //重置flag，进行下次判断
            }
        }
    }
}
```