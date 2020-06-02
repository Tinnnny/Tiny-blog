# 查找算法
::: tip 在java中，我们常用的查找有四种
1. 顺序(线性)查找
2. 二分查找/折半查找
3. 插值查找
4. 斐波那契查找
:::

## 线性查找
```java
package com.llw.datastructure.Algorithm;

/**
 * 线性查找
 * 2020/5/26 21:01 By Tinny
 */
public class SeqSearch {
    public static void main(String[] args) {
        int[] arr = {1, 9, 11, -1, 34, 89}; //没有顺序的数组
        int index = seqSearch(arr, 11);
        if (index == -1) {
            System.out.println("没有找到");
        }else{
            System.out.println(index);
        }
    }

    /**
     *
     * @param arr
     * @param value
     * @return
     */
    public static int seqSearch(int[] arr, int value) {
        //线性查找是逐一比对，发现有相同值就返回下标
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;
    }
}
```

## 二分查找
### 二分查找的思路分析
1. 首先确定该数组的中间的下标
```java
mid = (left + right) / 2
```
2. 然后让需要查找的数 `findVal` 和 `arr[mid]` 比较
  - `findVal` > `arr[mid]` ,  说明你要查找的数在mid 的右边, 因此需要递归的向右查找
  - `findVal` < `arr[mid]`, 说明你要查找的数在mid 的左边, 因此需要递归的向左查找
  - `findVal` == `arr[mid]` 说明找到，就返回

**什么时候我们需要结束递归**
1. 找到就结束递归 
2. 递归完整个数组，仍然没有找到`findVal` ，也需要结束递归  当 `left` > `right` 就需要退出

### 代码实现
```java
package com.llw.datastructure.Algorithm;

/**
 * 二分查找
 * 2020/5/27 14:09 By Tinny
 */
public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {1, 8, 10, 89, 1000, 1234};
        int resIndex = binarySearch(arr, 0, arr.length - 1, 88);
        System.out.println(resIndex);
    }

    /**
     * @param arr
     * @param left
     * @param right
     * @param findVal
     * @return 如果找到就返回下标
     */
    public static int binarySearch(int[] arr, int left, int right, int findVal) {

        //当left>right时，说明递归整个数组
        if (left > right) {
            return -1;
        }
        int mid = (left + right) / 2;
        int midVal = arr[mid];
        if (findVal > midVal) { //向右递归
            return binarySearch(arr, mid + 1, right, findVal);
        } else if (findVal < midVal) {
            return binarySearch(arr, left, mid - 1, findVal);
        } else {
            return mid;
        }
    }
}
```

### 分析与提高
当一个有序数组中，有多个相同的数值时，如何将所有的数值都查找到。
1. 在找到mid索引值，不要马上返回
2. 在mid值的左右边扫描，将所有满足的下标加入到集合ArrayList
3. 将ArrayList返回

```java
package com.llw.datastructure.Algorithm;

import java.util.ArrayList;

/**
 * 二分查找
 * 2020/5/27 14:09 By Tinny
 */
public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {1, 8, 10, 89, 1000, 1000,1234};
        ArrayList<Integer> resIndex = binarySearch(arr, 0, arr.length - 1, 1000);
        System.out.println(resIndex);
    }

    /**
     * @param arr
     * @param left
     * @param right
     * @param findVal
     * @return 如果找到就返回下标
     */
    public static ArrayList<Integer> binarySearch(int[] arr, int left, int right, int findVal) {

        //当left>right时，说明递归整个数组
        if (left > right) {
            return new ArrayList<>();
        }
        int mid = (left + right) / 2;
        int midVal = arr[mid];
        if (findVal > midVal) { //向右递归
            return binarySearch(arr, mid + 1, right, findVal);
        } else if (findVal < midVal) {
            return binarySearch(arr, left, mid - 1, findVal);
        } else {
            ArrayList<Integer> resIndexList = new ArrayList<>();
            int temp = mid - 1;
            while (true) {
                if (temp < 0 || arr[temp] != findVal) {
                    break;
                }else {
                    //否则就将temp加入到resIndexList
                    resIndexList.add(temp);
                    temp -= 1;
                }
            }
            resIndexList.add(mid);
            temp = mid + 1;
            while (true) {
                if (temp >arr.length-1 || arr[temp] != findVal) {
                    break;
                }else {
                    //否则就将temp加入到resIndexList
                    resIndexList.add(temp);
                    temp += 1;
                }
            }
            return resIndexList;
        }
    }
}
```

## 插值查找
### 概述
1. 插值查找算法类似于二分查找，不同的是插值查找每次从自适应mid处开始查找。
2. 将折半查找中的求mid 索引的公式 , low 表示左边索引left, high表示右边索引right.key 就是前面我们讲的findVal
```java
int mid = left + (right – left) * (findVal – arr[left]) / (arr[right] – arr[left])
```

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf70fnynhcj30hz0b9t8z.jpg)

::: tip 插值查找注意事项：
1. 对于数据量较大，关键字分布比较均匀的查找表来说，采用插值查找, 速度较快.
2. 关键字分布不均匀的情况下，该方法不一定比折半查找要好
:::

### 代码实现
```java
package com.llw.datastructure.Algorithm;

/**
 * 插值算法
 * 2020/5/27 14:53 By Tinny
 */
public class InsertValueSearch {
    public static void main(String[] args) {
        int[] arr = new int[100];
        for (int i = 0; i < 100; i++) {
            arr[i] = i + 1;
        }
        int index = insertValueSearch(arr, 1, arr.length - 1, 10);
        System.out.println(index);
    }


    /**
     * 插值算法也要求算法是有序的
     *
     * @param arr
     * @param left    左边索引
     * @param right   右边索引
     * @param findVal
     * @return 如果没找到就返回-1
     */
    public static int insertValueSearch(int[] arr, int left, int right, int findVal) {
        // findVal < arr[0] || findVal > arr[arr.length - 1]可以防止越界
        if (left > right || findVal < arr[0] || findVal > arr[arr.length - 1]) {
            return -1;
        }
        //求mid,自适应
        int mid = left + (right - left) * (findVal - arr[left]) / (arr[right] - arr[left]);
        int midVal = arr[mid];
        if (findVal > midVal) { //向右递归
            return insertValueSearch(arr, mid + 1, right, findVal);
        } else if (findVal < midVal) {
            return insertValueSearch(arr, left, mid - 1, findVal);
        } else {
            return mid;
        }
    }
}
```

## 斐波那契(黄金分割法)查找算法
斐波那契查找原理与前两种相似，仅仅改变了中间结点（mid）的位置，mid不再是中间或插值得到，而是位于黄金分割点附近，即mid=low+F(k-1)-1（F代表斐波那契数列）

**对F(k-1)-1的理解：**
1. 由斐波那契数列 `F[k]=F[k-1]+F[k-2]` 的性质，可以得到 （`F[k]-1）=（F[k-1]-1）+（F[k-2]-1）+1` 。该式说明：只要顺序表的长度为F[k]-1，则可以将该表分成长度为`F[k-1]-1`和`F[k-2]-1`的两段，即如上图所示。从而中间位置为`mid=low+F(k-1)-1`       

类似的，每一子段也可以用相同的方式分割
但顺序表长度n不一定刚好等于`F[k]-1`，所以需要将原来的顺序表长度n增加至`F[k]-1`。这里的k值只要能使得`F[k]-1`恰好大于或等于n即可，由以下代码得到,顺序表长度增加后，新增的位置（从n+1到F[k]-1位置），都赋为n位置的值即可。

### 代码实现
```java
package com.atguigu.search;

import java.util.Arrays;

public class FibonacciSearch {

	public static int maxSize = 20;
	public static void main(String[] args) {
		int [] arr = {1,8, 10, 89, 1000, 1234};
		
		System.out.println("index=" + fibSearch(arr, 189));// 0
		
	}

	//因为后面我们mid=low+F(k-1)-1，需要使用到斐波那契数列，因此我们需要先获取到一个斐波那契数列
	//非递归方法得到一个斐波那契数列
	public static int[] fib() {
		int[] f = new int[maxSize];
		f[0] = 1;
		f[1] = 1;
		for (int i = 2; i < maxSize; i++) {
			f[i] = f[i - 1] + f[i - 2];
		}
		return f;
	}
	
	//编写斐波那契查找算法
	//使用非递归的方式编写算法
	/**
	 * 
	 * @param a  数组
	 * @param key 我们需要查找的关键码(值)
	 * @return 返回对应的下标，如果没有-1
	 */
	public static int fibSearch(int[] a, int key) {
		int low = 0;
		int high = a.length - 1;
		int k = 0; //表示斐波那契分割数值的下标
		int mid = 0; //存放mid值
		int f[] = fib(); //获取到斐波那契数列
		//获取到斐波那契分割数值的下标
		while(high > f[k] - 1) {
			k++;
		}
		//因为 f[k] 值 可能大于 a 的 长度，因此我们需要使用Arrays类，构造一个新的数组，并指向temp[]
		//不足的部分会使用0填充
		int[] temp = Arrays.copyOf(a, f[k]);
		//实际上需求使用a数组最后的数填充 temp
		//举例:
		//temp = {1,8, 10, 89, 1000, 1234, 0, 0}  => {1,8, 10, 89, 1000, 1234, 1234, 1234,}
		for(int i = high + 1; i < temp.length; i++) {
			temp[i] = a[high];
		}
		
		// 使用while来循环处理，找到我们的数 key
		while (low <= high) { // 只要这个条件满足，就可以找
			mid = low + f[k - 1] - 1;
			if(key < temp[mid]) { //我们应该继续向数组的前面查找(左边)
				high = mid - 1;
				//为甚是 k--
				//说明
				//1. 全部元素 = 前面的元素 + 后边元素
				//2. f[k] = f[k-1] + f[k-2]
				//因为 前面有 f[k-1]个元素,所以可以继续拆分 f[k-1] = f[k-2] + f[k-3]
				//即 在 f[k-1] 的前面继续查找 k--
				//即下次循环 mid = f[k-1-1]-1
				k--;
			} else if ( key > temp[mid]) { // 我们应该继续向数组的后面查找(右边)
				low = mid + 1;
				//为什么是k -=2
				//说明
				//1. 全部元素 = 前面的元素 + 后边元素
				//2. f[k] = f[k-1] + f[k-2]
				//3. 因为后面我们有f[k-2] 所以可以继续拆分 f[k-1] = f[k-3] + f[k-4]
				//4. 即在f[k-2] 的前面进行查找 k -=2
				//5. 即下次循环 mid = f[k - 1 - 2] - 1
				k -= 2;
			} else { //找到
				//需要确定，返回的是哪个下标
				if(mid <= high) {
					return mid;
				} else {
					return high;
				}
			}
		}
		return -1;
	}
}
```