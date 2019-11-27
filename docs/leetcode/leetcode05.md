---
title: "9.回文数"
date: 2019年11月22日12:09:33
---
# 回文数
## 题目描述
> 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
```java
输入: 121
输出: true
```
示例 2:
```java
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```
示例 3:
```java
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```
进阶:

你能不将整数转为字符串来解决这个问题吗？

## 我的解答
```java
class Solution {
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        int x1=x;
        int sum=0;
        while(x1!=0){
            sum=sum*10+x1%10;
            x1=x1/10;
        }
        return(sum==x);
    }
}
```

## 官方答案
将数字反转一般，判断反转的数比原数大了就表示到一半了，这是为了避免溢出问题。
```java
public class Solution {
    public bool IsPalindrome(int x) {
        // 特殊情况：
        // 如上所述，当 x < 0 时，x 不是回文数。
        // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
        // 则其第一位数字也应该是 0
        // 只有 0 满足这一属性
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
        // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
        // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
        return x == revertedNumber || x == revertedNumber/10;
    }
}
```

## 有力评论
- 不用处理溢出问题 如果溢出一定不是回文数 直接返回false即可 直接翻转，判断相等就行。 官方题解不好
```java
public boolean isPalindrome(int x) {
        int s = 0;
        int x1 = x;
        while (x1 > 0) {
            s = s * 10 + x1 % 10;
            x1 = x1 / 10;
        }
        return s == x;
    }
```