---
title: "1.两数之和"
date: 2019年11月22日12:09:33
---
# 两数之和
## 题目描述
> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
> 
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
```java
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
## 我的解答
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] data=new int[2];
        for(int i=0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    data[0]=i;
                    data[1]=j;
                }
            }
        }
        return data;
    } 
}
```

## 官方解答
### 方法一：暴力法
暴力法很简单，遍历每个元素`x`，并查找是否存在一个值与`target−x`相等的目标元素。:tada: :100:
::: tip 要注意这2种表达方式
return new int[] { i, j };
throw new IllegalArgumentException("No two sum solution");
:::
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == target - nums[i]) {
                    return new int[] { i, j }; 
                }
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```
::: warning 复杂度分析：
- 时间复杂度：O(n^2)，

对于每个元素，我们试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 O(n)的时间。因此时间复杂度为O(n^2)。
- 空间复杂度：O(1)。
:::

### 方法二：两遍哈希表
为了对运行时间复杂度进行优化，我们需要一种更有效的方法来检查数组中是否存在目标元素。保持数组中的每个元素与其索引相互对应的最好方法是什么？哈希表。

通过以空间换取速度的方式，我们可以将查找时间从O(n)降低到O(1)。哈希表正是为此目的而构建的，它支持以近似恒定的时间进行快速查找。我用“近似”来描述，是因为一旦出现冲突，查找用时可能会退化到O(n)。但只要你仔细地挑选哈希函数，在哈希表中进行查找的用时应当被摊销为O(1)。

一个简单的实现使用了两次迭代。在第一次迭代中，我们将每个元素的值和它的索引添加到表中。然后，在第二次迭代中，我们将检查每个元素所对应的目标元素（target−nums[i]）是否存在于表中。注意，该目标元素不能是nums[i]本身！

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```
::: warning 复杂度分析：
- 时间复杂度：O(n)，

我们把包含有n个元素的列表遍历两次。由于哈希表将查找时间缩短到 O(1)，所以时间复杂度为 O(n)。

- 空间复杂度：O(n)，
所需的额外空间取决于哈希表中存储的元素数量，该表中存储了n个元素。
:::

### 方法三：一遍哈希表
事实证明，我们可以一次完成。在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。如果它存在，那我们已经找到了对应解，并立即将其返回。
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```
::: warning 复杂度分析：

- 时间复杂度：O(n)，

我们只遍历了包含有n个元素的列表一次。在表中进行的每次查找只花费O(1)的时间。

- 空间复杂度：O(n)，
所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储n个元素。
:::

### 有力评论：
- 看见评论里有人说hash表不一定有暴力破解来的快，so，我专门试了一下。程序肯定是针对大数据量才能看出差别，我就分别试了数组长度为一万、十万、百万的数组，并且查找次数保证最大。在一万的情况下，暴力破解法差不多要15-30毫秒，而hash表则是0-15毫秒；在十万的情况下，暴力破解法是1500-1700毫秒，而hash表则是15-40毫秒；百万级别的，hash表用了500-1500毫秒不等，但暴力破解法我就执行了一次，152130毫秒。也去专门去查了hashMap.containsKey()的时间复杂度，使用指针指向数组引用，时间复杂度为O(1)，未命中时，才回去遍历红黑树，时间复杂度为O(n)，有兴趣的可以取看看 https://blog.csdn.net/qingtian_1993/article/details/80763381 这篇帖子

-  暴力不可取, Hashmap的方式可取. 有人说HashMap在resize,put的时候消耗了很多时间没有计算在内. 不过这些其实都属于初始化范畴. 真正开发的时候,我们系统初始化时间稍微久一点是可以容忍的, 而真正程序提供服务产出的运行时间使我们需要尽力优化的