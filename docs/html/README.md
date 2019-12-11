# HTML
## 概述
html(Hyper Text Markup Language 超文本标记语言)的是最基础的网页开发语言。html文档后缀名 `.html` 或者 `.htm`。
* 超文本:用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本.
* 标记语言:由标签构成的语言(标记语言不是编程语言)。
	
## 快速入门
::: tip 标签分类
1. 围堵标签：有开始标签和结束标签。如 `<html>` `</html>`
2. 自闭和标签：开始标签和结束标签在一起。如 `<br/>`
:::	
> 1. 标签可以嵌套：
> 2. 在开始标签中可以定义属性。属性是由键值对构成，值需要用引号(单双都可)引起来
> 3. html的标签不区分大小写，但是建议使用小写。
```html
<html>			
    <head>
        <title>title</title>
    </head>				
    <body>
        <FONT color='red'>Hello World</font><br/>					
        <font color='green'>Hello World</font>				
    </body>		
</html>
```	