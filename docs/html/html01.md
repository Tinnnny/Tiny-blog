# 标签学习
## 文件标签
文件标签是构成html最基本的标签。
* `html`:html文档的根标签
* `head`：头标签。用于指定html文档的一些属性。引入外部的资源
* `title`：标题标签。
* `body`：体标签
* `<!DOCTYPE html>`：html5中定义该文档是html文档

## 文本标签
* 注释：`<!-- 注释内容 -->`
* `<h1>` to `<h6>`：标题标签,字体大小逐渐递减
* `<p>`：段落标签
* `<br>`：换行标签
* `<hr>`：展示一条水平线
  * color：颜色
  * width：宽度
  * size：高度
  * align：对其方式
    * center：居中
    * left：左对齐
    * right：右对齐
* `<b>`：字体加粗
* `<i>`：字体斜体
* `<font>`:字体标签
* `<center>`:文本居中
  * color：颜色
  * size：大小
  * face：字体

### 属性定义
::: tip color
1. 英文单词：red,green,blue
2. rgb(值1，值2，值3)：值的范围：0~255  如  rgb(0,0,255)
3. #值1值2值3：值的范围：00~FF之间。如： #FF00FF
:::

::: tip width
1. 数值：`width='20'` ,数值的单位，默认是 `px`(像素)
2. 数值%：占比相对于父元素的比例
:::
```html
<!DOCTYPE html>
<html lang="ch">
<head>
    <meta charset="UTF-8">
    <title>ABC</title>
</head>
<body>

<h1>
    abc
</h1>
<hr color="#ffd700">

<p>
<font color="#FF0000">"中关村黑马程序员训练营"</font>是由<b><i>传智播客</i></b>。
</p>

<p>
目前。
</p>
<hr color="#ffd700">

<font color="gray" size="2">
    <center>
        江苏传智播客教育科技股份有限公司<br>
        版权所有Copyright 2006-2018&copy;, All Rights Reserved 苏ICP备16007882
    </center>
</font>			
</body>
</html>
```

## 图片标签
相对路径，`./`代表当前目录(`./image/1.jpg`),`../`代表上一级目录。
```html
<img src="image/jingxuan_2.jpg" align="right" alt="古镇" width="500" height="500"/>
<img src="./image/jiangwai_1.jpg">
<img src="../image/jiangwai_1.jpg">
```			
## 列表标签
* 有序列表：
  * ol:
  * li:
* 无序列表：
  * ul:
  * li:
## 链接标签
* href：指定访问资源的URL(统一资源定位符)
* target：指定打开资源的方式
  * _self:默认值，在当前页面打开
  * _blank：在空白页面打开
```html
<a href="http://www.itcast.cn" target="_self">点我</a>
<br>
<a href="http://www.itcast.cn" target="_blank">点我</a>
<br>
<a href="http://www.itcast.cn"><img src="image/jiangwai_1.jpg"></a>
```
## div和span
* div:每一个div占满一整行。块级标签
* span：文本信息在一行展示，行内标签 内联标签
	
## 语义化标签
html5中为了提高程序的可读性，提供了一些标签。
1. `<header>`：页眉
2. `<footer>`：页脚

## 表格标签
* table：定义表格
    * width：宽度
    * border：边框
    * cellpadding：定义内容和单元格的距离
    * cellspacing：定义单元格之间的距离。如果指定为0，则单元格的线会合为一条、
    * bgcolor：背景色
    * align：对齐方式
* tr：定义行
    * bgcolor：背景色
    * align：对齐方式
* td：定义单元格
    * colspan：合并列
    * rowspan：合并行
* th：定义表头单元格
* `<caption>`：表格标题
* `<thead>`：表示表格的头部分
* `<tbody>`：表示表格的体部分
* `<tfoot>`：表示表格的脚部分
