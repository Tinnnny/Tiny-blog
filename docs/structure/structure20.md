# 顺序存储二叉树
从数据存储来看，数组存储方式和树的存储方式可以相互转换，即数组可以转换成树，树也可以转换成数组
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf91x5gzj9j30bj0d0gnk.jpg)

顺序存储二叉树的特点:

1. 顺序二叉树通常只考虑完全二叉树
2. 第n个元素的左子节点为  2 * n + 1 
3. 第n个元素的右子节点为  2 * n + 2
4. 第n个元素的父节点为  (n-1) / 2
5. n表示二叉树中的第几个元素(按0开始编号如图所示)

## 代码实现
```java
package com.llw.datastructure.Algorithm;

/**
 * 数组和二叉树
 * 2020/5/29 9:20 By Tinny
 */
public class ArrBinaryTreeDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        ArrBinaryTree arrBinaryTree = new ArrBinaryTree(arr);
        arrBinaryTree.preOrder(); //1245367
    }
}

//编写一个ArrBinaryTree
class ArrBinaryTree {
    private int[] arr; //存储数据节点的数组

    public ArrBinaryTree(int[] arr) {
        this.arr = arr;
    }

    //重载preOrder
    public void preOrder() {
        this.preOrder(0);
    }

    /**
     * 编写一个方法，完成顺序存储二叉树的前序遍历
     *
     * @param index 数组的下标
     */
    public void preOrder(int index) {
        //如果数组为空
        if (arr == null || arr.length == 0) {
            System.out.print("数组为空，不能按照二叉树的前序遍历");
        }
        System.out.print(arr[index]);
        //向左递归遍历
        if (index * 2 + 1 < arr.length) {
            preOrder(index * 2 + 1);
        }
        //向右递归遍历
        if (index * 2 + 2 < arr.length) {
            preOrder(index * 2 + 2);
        }
    }
}
```
