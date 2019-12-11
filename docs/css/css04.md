# CSS3(4)
## 动画
通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。

### @keyframes 规则
如需在 CSS3 中创建动画，您需要学习 @keyframes 规则。

@keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。

### 实例1
当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:red;
animation:myfirst 5s;
-moz-animation:myfirst 5s; /* Firefox */
-webkit-animation:myfirst 5s; /* Safari and Chrome */
-o-animation:myfirst 5s; /* Opera */
}

@keyframes myfirst
{
0%   {background:red;}
25%  {background:yellow;}
50%  {background:blue;}
100% {background:green;}
}
</style>
</head>
<body>

<div></div>

<p><b>注释：</b>当动画完成时，会变回初始的样式。</p>

</body>
</html>
```

### 实例2
改变背景色和位置：
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:red;
position:relative;
animation:myfirst 5s;
-moz-animation:myfirst 5s; /* Firefox */
-webkit-animation:myfirst 5s; /* Safari and Chrome */
-o-animation:myfirst 5s; /* Opera */
}

@keyframes myfirst
{
0%   {background:red; left:0px; top:0px;}
25%  {background:yellow; left:200px; top:0px;}
50%  {background:blue; left:200px; top:200px;}
75%  {background:green; left:0px; top:200px;}
100% {background:red; left:0px; top:0px;}
}
</style>
</head>
<body>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

<div></div>

</body>
</html>
```

| 属性                          | 描述                                        | CSS |
|-----------------------------|-------------------------------------------|-----|
| @keyframes                  | 规定动画。                                     | 3   |
| animation                   | 所有动画属性的简写属性，除了 animation\-play\-state 属性。 | 3   |
| animation\-name             | 规定 @keyframes 动画的名称。                      | 3   |
| animation\-duration         | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。                 | 3   |
| animation\-timing\-function | 规定动画的速度曲线。默认是 "ease"。                     | 3   |
| animation\-delay            | 规定动画何时开始。默认是 0。                           | 3   |
| animation\-iteration\-count | 规定动画被播放的次数。默认是 1。                         | 3   |
| animation\-direction        | 规定动画是否在下一周期逆向地播放。默认是 "normal"。            | 3   |
| animation\-play\-state      | 规定动画是否正在运行或暂停。默认是 "running"。              | 3   |
| animation\-fill\-mode       | 规定对象动画时间之外的状态。                            | 3   |

### 实例3
设置了所有的动画属性
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:red;
position:relative;
animation-name:myfirst;
animation-duration:5s;
animation-timing-function:linear;
animation-delay:2s;
animation-iteration-count:infinite;
animation-direction:alternate;
animation-play-state:running;
}

@keyframes myfirst
{
0%   {background:red; left:0px; top:0px;}
25%  {background:yellow; left:200px; top:0px;}
50%  {background:blue; left:200px; top:200px;}
75%  {background:green; left:0px; top:200px;}
100% {background:red; left:0px; top:0px;}
}
</style>
</head>
<body>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

<div></div>

</body>
</html>
```

### 简化写法
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
width:100px;
height:100px;
background:red;
position:relative;
animation:myfirst 5s linear 2s infinite alternate;
}

@keyframes myfirst
{
0%   {background:red; left:0px; top:0px;}
25%  {background:yellow; left:200px; top:0px;}
50%  {background:blue; left:200px; top:200px;}
75%  {background:green; left:0px; top:200px;}
100% {background:red; left:0px; top:0px;}
}
</style>
</head>
<body>

<p><b>注释：</b>本例在 Internet Explorer 中无效。</p>

<div></div>

</body>
</html>
```

## 多列
通过 CSS3，能够创建多个列来对文本进行布局 - 就像报纸那样！
### 创建多列
column-count 属性规定元素应该被分隔的列数：
```html
<!DOCTYPE html>
<html>
<head>
<style> 
.newspaper
{
column-count:3;
}
</style>
</head>
<body>

<p><b>注释：</b>Internet Explorer 不支持 column-count 属性。</p>

<div class="newspaper">
人民网北京2月24日电 (记者 刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。

此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。

通知指出，这次成品油调价后，国家将按照已建立的补贴机制，继续对种粮农民、渔业（含远洋渔业）、林业、城市公交、农村道路客运（含岛际和农村水路客运）等给予补贴。同时，为保证市场物价基本稳定，防止连锁涨价，对与居民生活密切相关的铁路客运、城市公交、农村道路客运（含岛际和农村水路客运）价格不作调整。

通知要求，中石油、中石化、中海油三大公司要组织好成品油生产和调运，保持合理库存，加强综合协调和应急调度，保障成品油供应。各级价格主管部门要加大市场监督检查力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
</div>

</body>
</html>
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sz5b12b6j31h704z3zz.jpg">
</div>

### 规定列之间的间隔
column-gap 属性规定列之间的间隔：
```html
<!DOCTYPE html>
<html>
<head>
<style> 
.newspaper
{
column-count:3;
column-gap:30px;
}
</style>
</head>
<body>

<p><b>注释：</b>Internet Explorer 不支持 column-count 属性。</p>

<div class="newspaper">
人民网北京2月24日电 (记者 刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。

此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。

通知指出，这次成品油调价后，国家将按照已建立的补贴机制，继续对种粮农民、渔业（含远洋渔业）、林业、城市公交、农村道路客运（含岛际和农村水路客运）等给予补贴。同时，为保证市场物价基本稳定，防止连锁涨价，对与居民生活密切相关的铁路客运、城市公交、农村道路客运（含岛际和农村水路客运）价格不作调整。

通知要求，中石油、中石化、中海油三大公司要组织好成品油生产和调运，保持合理库存，加强综合协调和应急调度，保障成品油供应。各级价格主管部门要加大市场监督检查力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
</div>

</body>
</html>
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sz7kvozrj31h805ygn3.jpg">
</div>

### CSS3 列规则
column-rule 属性设置列之间的宽度、样式和颜色规则。
```html
<!DOCTYPE html>
<html>
<head>
<style> 
.newspaper
{
column-count:3;
column-gap:40px;
column-rule:4px outset #ff0000;
}
</style>
</head>
<body>
<p><b>注释：</b>Internet Explorer 不支持 column-count 属性。</p>
<div class="newspaper">
人民网北京2月24日电 (记者 刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。

此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。

通知指出，这次成品油调价后，国家将按照已建立的补贴机制，继续对种粮农民、渔业（含远洋渔业）、林业、城市公交、农村道路客运（含岛际和农村水路客运）等给予补贴。同时，为保证市场物价基本稳定，防止连锁涨价，对与居民生活密切相关的铁路客运、城市公交、农村道路客运（含岛际和农村水路客运）价格不作调整。

通知要求，中石油、中石化、中海油三大公司要组织好成品油生产和调运，保持合理库存，加强综合协调和应急调度，保障成品油供应。各级价格主管部门要加大市场监督检查力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
</div>

</body>
</html>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9sz9b4okpj31ha05o75s.jpg">
</div>

下面的表格列出了所有的转换属性：

| 属性                  | 描述                                        | CSS |
|---------------------|-------------------------------------------|-----|
| column\-count       | 规定元素应该被分隔的列数。                             | 3   |
| column\-fill        | 规定如何填充列。                                  | 3   |
| column\-gap         | 规定列之间的间隔。                                 | 3   |
| column\-rule        | 设置所有 column\-rule\-\* 属性的简写属性。            | 3   |
| column\-rule\-color | 规定列之间规则的颜色。                               | 3   |
| column\-rule\-style | 规定列之间规则的样式。                               | 3   |
| column\-rule\-width | 规定列之间规则的宽度。                               | 3   |
| column\-span        | 规定元素应该横跨的列数。                              | 3   |
| column\-width       | 规定列的宽度。                                   | 3   |
| columns             | 规定设置 column\-width 和 column\-count 的简写属性。 | 3   |

## 用户界面
在 CSS3 中，新的用户界面特性包括重设元素尺寸、盒尺寸以及轮廓等。

### Resizing
resize 属性规定是否可由用户调整元素尺寸。
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
border:2px solid;
padding:10px 40px; 
width:300px;
resize:both;
overflow:auto;
}
</style>
</head>
<body>

<div>resize 属性规定是否可由用户调整元素尺寸。</div>

<p><b>注释：</b> Firefox 4+、Safari 以及 Chrome 支持 resize 属性。</p>

</body>
</html>
```

### Box Sizing
box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。

实例：规定两个并排的带边框方框：
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div.container
{
width:30em;
border:1em solid;
}
div.box
{
box-sizing:border-box;
width:50%;
border:1em solid red;
float:left;
}
</style>
</head>
<body>

<div class="container">
<div class="box">这个 div 占据左半部分。</div>
<div class="box">这个 div 占据右半部分。</div>
</div>

</body>
</html>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9szdkgxddj30f902pgle.jpg">
</div>

### Outline Offset
outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

轮廓与边框有两点不同：
- 轮廓不占用空间
- 轮廓可能是非矩形

```html
<!DOCTYPE html>
<html>
<head>
<style> 
div
{
margin:20px;
width:150px; 
padding:10px;
height:70px;
border:2px solid black;
outline:2px solid red;
outline-offset:15px;
} 
</style>
</head>
<body>

<p><b>注释：</b>Internet Explorer 和 Opera 不支持 support outline-offset 属性。</p>

<div>这个 div 在边框边缘之外 15 像素处有一个轮廓。</div>

</body>
</html>
```
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9szfzo4nfj30fd05mjrb.jpg">
</div>