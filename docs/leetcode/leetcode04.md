---
title: "7.整数反转"
date: 2019年11月22日12:09:33
---
# 寻找两个有序数组的中位数
## 题目描述
> 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
```java
输入: 123
输出: 321
```
 示例 2:
```java
输入: -123
输出: -321
```
示例 3:
```java
输入: 120
输出: 21
```
::: tip 
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
:::

## 我的解答
```java
public class test {
    public static void main(String[] args) {
        int x = 145345349;
        if(x/10==0){
            System.out.println(x);
        }
        int a=0,sum=0;
        int[] num=new int[32];
        while((x/10)!=0){
            num[a]=x%10;
            System.out.println(num[a]);
            a++;
            x=x/10;
        }

        for(int i=0;i<=a;i++){
            sum += num[i] * Math.pow(10, a - i);
            System.out.println(sum);
        }
        sum+=x;
        System.out.println(sum);
}}
```
没有考虑Integer的最大值为2147483647，当超过范围就会出错。

## 官方解答
```java
class Solution {
    public int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            //如果倒序后的数Integer最大范围或者等于Integer最大值，则返回0
            if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0;
            if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0;
            rev = rev * 10 + pop;
        }
        return rev;
    }
}
```

## 有力评论
- 我觉得官方的代码有多余，因为int类型最大数和最小数开头的数字只能是1或2，所以如果有最后一次循环的话，pop的值一定为1或2，所以(rev == INT_MAX / 10 && pop > 7)和(rev == INT_MIN / 10 && pop < -8)判断可以省略。本人已测。

评论区解法
```java
public int reverse(int x) {
	int ans = 0;
	while (x != 0) {
		if ((ans * 10) / 10 != ans) {
			ans = 0;
			break;
		}
		ans = ans * 10 + x % 10;
		x = x / 10;
	}
	return ans;
}
```

```java
class Solution {
    public int reverse(int x) {
        long temp = 0;
       
        while(x != 0){
            int pop = x % 10;
            temp = temp * 10 + pop;
            
            if(temp > Integer.MAX_VALUE || temp < Integer.MIN_VALUE){
                return 0;
            }
            x /= 10;
        }
        return (int)temp;
    }
}
```