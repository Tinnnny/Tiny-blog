---
title: "Springboo在控制器上添加@RequestMapping注解后，访问不到静态资源" 
date: 2019-10-22
---
# 问题描述
Springboo在控制器上添加@RequestMapping注解后，在跳转的页面加载静态资源时，在静态资源的访问路径下自动加上了@RequestMapping的值，导致访问不到静态资源。

## 解决方案
如果在资源路径的最前面没有加“/”，那使用的就是相对路径，在页面跳转时就会因路径发生问题，只要在引入静态资源时在最前面加上“/”就可以解决问题。
