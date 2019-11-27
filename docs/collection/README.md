---
title: "Java 集合" 
date: 2019年11月1日15:48:28
---
# Java 集合
Java 集合框架主要包括两种类型的容器，一种是集合（Collection），存储一个元素集合，另一种是图（Map），存储键/值对映射。Collection 接口又有 3 种子类型，List、Set 和 Queue，再下面是一些抽象类，最后是具体实现类，常用的有 ArrayList、LinkedList、HashSet、LinkedHashSet、HashMap、LinkedHashMap 等等。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g96thlr28zj30s10g4dhp.jpg">
</div>


::: tip 集合按照其存储结构可以分为
1. 单列集合`java.util.Collection`
2. 双列集合`java.util.Map`。
:::

::: tip 集合和数组的区别
* 数组的长度是固定的。集合的长度是可变的。
* 数组中存储的是同一类型的元素，可以存储基本数据类型值。集合存储的都是对象。而且对象的类型可以不一致。在开发中一般当对象多的时候，使用集合进行存储。
:::
