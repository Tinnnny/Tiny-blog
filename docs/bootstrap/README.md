# 概述
Bootstrap是一个来自Twitter的前端开发的框架，基于 HTML、CSS、JavaScript 定义了很多的css样式和js插件。开发人员可以直接使用这些样式和插件得到丰富的页面效果,Bootstrap具有响应式布局。

* 框架:一个半成品软件，开发人员可以在框架基础上，在进行开发，简化编码。


## 快速入门
::: tip 应用Bootstrap
1. 下载Bootstrap
2. 复制三个文件夹到项目中
3. 创建html页面，引入必要的资源文件
:::

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 定义窗口宽度1:1 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap HelloWorld</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


​		
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
<h1>你好，世界！</h1>

</body>
</html>
```