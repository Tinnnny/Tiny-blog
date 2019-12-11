# CSS3(2)
## 文本效果
### 文本阴影
text-shadow 可向文本应用阴影，能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色。
```css
h1
{
text-shadow: 5px 5px 5px #FF0000;
}
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sw7adbujg3065016t8k.gif">
</div>

### 自动换行
单词太长的话就可能无法超出某个区域：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sw906zi6j30ah04oa9x.jpg">
</div>

在 CSS3 中，word-wrap 属性允许您允许文本强制文本进行换行 - 即使这意味着会对单词进行拆分：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sw9o331sj305d05cwec.jpg">
</div>

```css
p {word-wrap:break-word;}
```

| 属性                   | 描述                                       | CSS |
|----------------------|------------------------------------------|-----|
| hanging\-punctuation | 规定标点字符是否位于线框之外。                          | 3   |
| punctuation\-trim    | 规定是否对标点字符进行修剪。                           | 3   |
| text\-align\-last    | 设置如何对齐最后一行或紧挨着强制换行符之前的行。                 | 3   |
| text\-emphasis       | 向元素的文本应用重点标记以及重点标记的前景色。                  | 3   |
| text\-justify        | 规定当 text\-align 设置为 "justify" 时所使用的对齐方法。 | 3   |
| text\-outline        | 规定文本的轮廓。                                 | 3   |
| text\-overflow       | 规定当文本溢出包含元素时发生的事情。                       | 3   |
| text\-shadow         | 向文本添加阴影。                                 | 3   |
| text\-wrap           | 规定文本的换行规则。                               | 3   |
| word\-break          | 规定非中日韩文本的换行规则。                           | 3   |
| word\-wrap           | 允许对长的不可分割的单词进行分割并换行到下一行。                 | 3   |

## 字体
在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。通过 CSS3，web 可将该字体文件存放到 web 服务器上，它会在需要时被自动下载到用户的计算机上。

### 使用字体
在新的 @font-face 规则中，必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

如需为 HTML 元素使用字体，请通过 font-family 属性来引用字体的名称 (myFirstFont)：

```css
<style> 
@font-face
{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
     url('Sansation_Light.eot'); /* IE9+ */
}

div
{
font-family:myFirstFont;
}
</style>
```

### 使用粗体字体
必须为粗体文本添加另一个包含描述符的 @font-face：
```css
@font-face
{
font-family: myFirstFont;
src: url('Sansation_Bold.ttf'),
     url('Sansation_Bold.eot'); /* IE9+ */
font-weight:bold;
}
```

## 2D 转换
通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。2D转换主要有以下方法：
- translate()
- rotate()
- scale()
- skew()
- matrix()

### translate() 方法
```css
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
transform:translate(50px,100px);
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sxtldz7nj306x07x0sk.jpg">
</div>

### rotate() 方法
通过 rotate() 方法，元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。

```css
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
transform:rotate(30deg);
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sxvk4fe9j304f057dfr.jpg">
</div>

### scale() 方法
通过 scale() 方法，元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：值 scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。
```css
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
margin:100px;
transform:scale(2,4);
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sxx6760jj30900at0sq.jpg">
</div>

### skew() 方法
通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：
```css
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
transform:skew(30deg,20deg);
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sxyx192fj304f0573yf.jpg">
</div>

### matrix() 方法
matrix() 方法把所有 2D 转换方法组合在一起,需要六个参数，包含数学函数，允许：旋转、缩放、移动以及倾斜元素。
```css
<style> 
div
{
width:100px;
height:75px;
background-color:yellow;
border:1px solid black;
}
div#div2
{
transform:matrix(0.866,0.5,-0.5,0.866,0,0);
}
</style>
</head>
<body>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sy0mpld7j304505cglj.jpg">
</div>

| 函数                        | 描述                       |
|---------------------------|--------------------------|
| matrix\(n,n,n,n,n,n\)     | 定义 2D 转换，使用六个值的矩阵。       |
| translate\(x,y\)          | 定义 2D 转换，沿着 X 和 Y 轴移动元素。 |
| translateX\(n\)           | 定义 2D 转换，沿着 X 轴移动元素。     |
| translateY\(n\)           | 定义 2D 转换，沿着 Y 轴移动元素。     |
| scale\(x,y\)              | 定义 2D 缩放转换，改变元素的宽度和高度。   |
| scaleX\(n\)               | 定义 2D 缩放转换，改变元素的宽度。      |
| scaleY\(n\)               | 定义 2D 缩放转换，改变元素的高度。      |
| rotate\(angle\)           | 定义 2D 旋转，在参数中规定角度。       |
| skew\(x\-angle,y\-angle\) | 定义 2D 倾斜转换，沿着 X 和 Y 轴。   |
| skewX\(angle\)            | 定义 2D 倾斜转换，沿着 X 轴。       |
| skewY\(angle\)            | 定义 2D 倾斜转换，沿着 Y 轴。       |
