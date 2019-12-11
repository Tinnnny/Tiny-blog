# CSS3(1)
浏览器通常支持 CSS2,W3C 仍然在对 CSS3 规范进行开发,不过，现代浏览器已经实现了相当多的 CSS3 属性。

## 边框
CSS3能够创建圆角边框，向矩形添加阴影，使用图片来绘制边框 - 并且不需使用设计软件，比如 PhotoShop。
- border-radius
- box-shadow
- border-image

### 圆角边框
在 CSS2 中添加圆角矩形需要技巧。我们必须为每个圆角使用不同的图片。而在 CSS3可以用border-radius 属性创建圆角。
```css
div
{
border:2px solid;
border-radius:25px;
-moz-border-radius:25px; /* Old Firefox */
}
```
![](http://ww1.sinaimg.cn/large/007Rnr4nly1g9svj3hoedj308p01bt8h.jpg)

### 边框阴影
box-shadow 用于向方框添加阴影
```css
div
{
box-shadow: 10px 10px 5px #888888;
}
```
![](http://ww1.sinaimg.cn/large/007Rnr4nly1g9svm2uux2j309w03n3y9.jpg)

### 边框图片
border-image 属性可以使用图片来创建边框
```html
<style> 
div
{
border:15px solid transparent;
width:300px;
padding:10px 20px;
}

#round
{
border-image:url(/i/border.png) 30 30 round;
}

#stretch
{
border-image:url(/i/border.png) 30 30 stretch;
}
</style>
<div id="round">在这里，图片铺满整个边框。</div>
<br>
<div id="stretch">在这里，图片被拉伸以填充该区域。</div>
```
![](http://ww1.sinaimg.cn/large/007Rnr4nly1g9svr1t0ssj30ay051gln.jpg)
原始图片
![](http://ww1.sinaimg.cn/large/007Rnr4nly1g9svo7233dj30260260n6.jpg)

## 背景
### background-size 属性
background-size 属性规定背景图片的尺寸。在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。在 CSS3 中，可以规定背景图片的尺寸，还能够以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。
#### 调整背景图片的大小
```css
div
{
background:url(bg_flower.gif);
-moz-background-size:63px 100px; /* 老版本的 Firefox */
background-size:63px 100px;
background-repeat:no-repeat;
}
```
#### 对背景图片进行拉伸
```css
div
{
background:url(bg_flower.gif);
-moz-background-size:40% 100%; /* 老版本的 Firefox */
background-size:40% 100%;
background-repeat:no-repeat;
}
```

### background-origin 属性
background-origin 属性规定背景图片的定位区域。背景图片可以放置于 content-box、padding-box 或 border-box 区域。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9svzqcvlig309d05jq2q.gif">
</div>

```css
div
{
background:url(bg_flower.gif);
background-repeat:no-repeat;
background-size:100% 100%;
-webkit-background-origin:content-box; /* Safari */
background-origin:content-box;
}
```
### 多重背景图片
```css
body
{ 
background-image:url(bg_flower.gif),url(bg_flower_2.gif);
}
```