---
title: "静态资源无法访问"
---
# 静态资源无法访问
### 问题描述
在引入css和js等静态资源时，浏览器显示404not found。但是输入静态资源的网址如
`http://localhost:8080/assets/global/plugins/font-awesome/css/font-awesome.min.css`
时又能够正常访问，最后发现是Spring Boot 2.x以后static下面的静态资源被拦截。所以正确的做法是：

新建一个目录创建一个配置类，专门指定静态资源的位置，(如果在controller目录下创建会报错)。这样就能正确访问了

```java
package com.tiny.mall.admin.config;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 静态资源映射
 * @author Tiny
 * @version 1.0.0
 * @date 2019/5/29 9:57
 */
@Component
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }
}
```

### 其他情况

在修改了spring boot端口后，发现不仅页面的静态资源没了，而且`http://localhost:8080/assets/global/plugins/font-awesome/css/font-awesome.min.css`也访问不了了，
但是将端口换成8080之后又好了，只要一修改端口，静态资源就失灵了。

最后发现是入口函数没有修改，导致静态资源不能导入。

<Valine></Valine>