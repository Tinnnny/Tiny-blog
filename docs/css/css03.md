# CSS3(3)
## 3D 转换
CSS3 允许您使用 3D 转换来对元素进行格式化。
### rotateX() 、rotateY() 旋转
通过 rotateX() 方法，元素围绕其 X 轴以给定的度数进行旋转。
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
transform:rotateX(120deg);
}
</style>

<div>你好。这是一个 div 元素。</div>

<div id="div2">你好。这是一个 div 元素。</div>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9syet5k1lj304704ojr6.jpg">
</div>
rotateY()与rotateX()类似。

| 属性                   | 描述                   | CSS |
|----------------------|----------------------|-----|
| transform            | 向元素应用 2D 或 3D 转换。    | 3   |
| transform\-origin    | 允许你改变被转换元素的位置。       | 3   |
| transform\-style     | 规定被嵌套元素如何在 3D 空间中显示。 | 3   |
| perspective          | 规定 3D 元素的透视效果。       | 3   |
| perspective\-origin  | 规定 3D 元素的底部位置。       | 3   |
| backface\-visibility | 定义元素在不面对屏幕时是否可见。     | 3   |

| 函数                      | 描述                         |
|-------------------------|----------------------------|
| matrix3d\(n,n,n,n,n,n,  |
| n,n,n,n,n,n,n,n,n,n\)   | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
| translate3d\(x,y,z\)    | 定义 3D 转化。                  |
| translateX\(x\)         | 定义 3D 转化，仅使用用于 X 轴的值。      |
| translateY\(y\)         | 定义 3D 转化，仅使用用于 Y 轴的值。      |
| translateZ\(z\)         | 定义 3D 转化，仅使用用于 Z 轴的值。      |
| scale3d\(x,y,z\)        | 定义 3D 缩放转换。                |
| scaleX\(x\)             | 定义 3D 缩放转换，通过给定一个 X 轴的值。   |
| scaleY\(y\)             | 定义 3D 缩放转换，通过给定一个 Y 轴的值。   |
| scaleZ\(z\)             | 定义 3D 缩放转换，通过给定一个 Z 轴的值。   |
| rotate3d\(x,y,z,angle\) | 定义 3D 旋转。                  |
| rotateX\(angle\)        | 定义沿 X 轴的 3D 旋转。            |
| rotateY\(angle\)        | 定义沿 Y 轴的 3D 旋转。            |
| rotateZ\(angle\)        | 定义沿 Z 轴的 3D 旋转。            |
| perspective\(n\)        | 定义 3D 转换元素的透视视图。           |

##  过渡
通过 CSS3，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

```css
<style> 
div
{
width:100px;
height:100px;
background:yellow;
transition:width 2s;
}

div:hover
{
width:300px;
}
</style>

<div></div>
```
效果为鼠标放置到div上时，黄色图案向右延伸。

### 多项改变
```css
div
{
transition: width 2s, height 2s, transform 2s;
-moz-transition: width 2s, height 2s, -moz-transform 2s;
-webkit-transition: width 2s, height 2s, -webkit-transform 2s;
-o-transition: width 2s, height 2s,-o-transform 2s;
}
```

### 实例
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:yellow;
transition-property:width;
transition-duration:1s;
transition-timing-function:linear;
transition-delay:2s;
}

div:hover
{
width:200px;
}
</style>
</head>
<body>

<div></div>

<p>请把鼠标指针放到黄色的 div 元素上，来查看过渡效果。</p>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

<p><b>注释：</b>这个过渡效果会在开始之前等待两秒。</p>

</body>
</html>
```
### 简易写法
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:yellow;
transition-property:width 1s linear 2s;
}

div:hover
{
width:200px;
}
</style>
</head>
<body>

<div></div>

<p>请把鼠标指针放到黄色的 div 元素上，来查看过渡效果。</p>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

<p><b>注释：</b>这个过渡效果会在开始之前等待两秒。</p>

</body>
</html>
```
