---
title: "使用前端模板"
---

# 如何使用前端admin-lte模板
### 1.甄别模板中内容。
    `bower_components`中是模板用到的各种插件，需要。
    `build`中包含less等css构建的技术，不需要。
    `dist`是模板的源码，需要。
    `plugins`里面是核心组件的扩展插件,需要.

### 2.复制文件
由于现在基于模板开发而不是bootstrap，因此将项目中的bootstrap和jquery删掉，将模板的`bower_components`、`dist`、`plugins`复制到项目中。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g82nvvxol7j307w053mx1.jpg">
</div>

### 3.复制源码
寻找到对应的页面并按需copy源码。注意养成良好的习惯，在代码前后包裹注释。比如

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g82ob8uftrj308x042glx.jpg">
</div>

::: warning 注意
  - 更换theme可以更换模板的主题。
  - 不能复制(Google Font)谷歌字体，因为网络原因会造成阻塞，造成页面不能正常显示。
  - 在复制静态资源文件时可能会遇到404的问题。解决方法是添加配置类。
:::
