---
title: "3.无重复字符的最长子串"
date: 2019年11月22日12:09:33
---
# 无重复字符的最长子串
## 题目描述
> 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
```java
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```java
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```java
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 官方解答
### 方法一：暴力法
设计函数allUnique(String substring) ，如果子字符串中的字符都是唯一的，则返回true，否则返回false。遍历s的所有子字符串并调用函数allUnique。

1. 使用两个for循环枚举出所有的子串。
2. 使用set检查子串中是否已包含元素。
```Java
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int ans = 0;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j <= n; j++)
                if (allUnique(s, i, j)) ans = Math.max(ans, j - i);
        return ans;
    }

    public boolean allUnique(String s, int start, int end) {
        Set<Character> set = new HashSet<>();
        for (int i = start; i < end; i++) {
            Character ch = s.charAt(i);
            if (set.contains(ch)) return false;
            set.add(ch);
        }
        return true;
    }
}
```
### 方法二：滑动窗口
#### 算法
HashSet作为滑动窗口是数组/字符串问题中常用的抽象概念。 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即[i, j)（左闭，右开）。

```Java
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        Set<Character> set = new HashSet<>();
        int ans = 0, i = 0, j = 0;
        while (i < n && j < n) {
            // 如果set中不包含s[j]
            if (!set.contains(s.charAt(j))){
            //将s[j]添加到set中，j自增1
                set.add(s.charAt(j++));
                ans = Math.max(ans, j - i);
            }
            //set中包含s[j]
            else {
            //set移除s[i],i自增
                set.remove(s.charAt(i++));
            }
        }
        return ans;
    }
}
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g97sct4ejsj30gh0cq3yl.jpg">
</div>


### 方法三：使用HashMap优化滑动窗口
使用HashMap来判断在[i,j)范围内 与s[j]重复字符的位置j'，直接跳过[i，j']范围内的所有元素，并将i变为j'+1。
```Java
public  int lengthOfLongestSubstring03(String s) {
        int n = s.length(), ans = 0;
        //创建map窗口,i为左区间，j为右区间，右边界移动
        Map<Character, Integer> map = new HashMap<>();
        for (int j = 0, i = 0; j < n; j++) {
            // 如果窗口中包含当前字符，
            if (map.containsKey(s.charAt(j))) {
                //左边界移动到 相同字符的下一个位置和i当前位置中更靠右的位置，这样是为了防止i向左移动
                i = Math.max(map.get(s.charAt(j)), i);
            }
            //比对当前无重复字段长度和储存的长度，选最大值并替换
            //j-i+1是因为此时i,j索引仍处于不重复的位置，j还没有向后移动，取的[i,j]长度
            ans = Math.max(ans, j - i + 1);
            // 将当前字符为key，下一个索引为value放入map中
            // value为j+1是为了当出现重复字符时，i直接跳到上个相同字符的下一个位置，if中取值就不用+1了
            map.put(s.charAt(j), j+1);
        }
        return ans;
    }
```
#### 假设字符集为ASCII码
当我们知道该字符集比较小的时侯，我们可以用一个整数数组作为直接访问表来替换 Map。

常用的表如下所示：
- int [26] 用于字母 ‘a’ - ‘z’ 或 ‘A’ - ‘Z’
- int [128] 用于ASCII码
- int [256] 用于扩展ASCII码
```Java
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        int[] index = new int[128]; // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            i = Math.max(index[s.charAt(j)], i);
            ans = Math.max(ans, j - i + 1);
            index[s.charAt(j)] = j + 1;
        }
        return ans;
    }
}
```