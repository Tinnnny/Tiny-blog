# 开启Spring Boot
## 生成文件并打包
开启Spring Boot有许多种方法可供选择，这里仅介绍使用`http://start.spring.io/`来构建一个简单的Spring Boot项目。

项目根目录下生成了一个`artifactId`+`Application`命名规则的入口类，直接在入口类中编写代码：
```java
package com.springboot.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DemoApplication {

    @RequestMapping("/12")
    String index() {
        return "hello spring boot";
    }
    
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

::: tip @RestController
从Spring 4.0以后产生的，用来将json/xml数据发送到前台页面，而不是返回视图页面。
:::
访问`http://localhost:8080/12`，页面显示如下

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gajoum0950j308v03i745.jpg">
</div>

在右侧导航栏Maven中运行`lifecycle`->`package`
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gajowvm4sij306a062wed.jpg">
</div>

就能将项目打包成jar包(初次打包会自动下载一些依赖)。打包完毕后可看到项目目录target文件夹下生成了一个jar文件。

生成jar包后，cd到target目录下，执行`java -jar`命令就可以运行该程序。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gajp0xzqbaj30os07d3ys.jpg">
</div>

## 关于pom.xml
### spring-boot-starter-parent
spring-boot-starter-parent指定了当前项目为一个Spring Boot项目，它提供了诸多的默认Maven依赖，它的父类`spring-boot-dependencies`默认指定了许多依赖的版本号， `ctrl`+左键即可查看。如：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gajp67nl2sj30i40900sx.jpg">
</div>

需要说明的是，并非所有在`<properties>`标签中配置了版本号的依赖都有被启用，其启用与否取决于是否配置了相应的`starter`。比如tomcat这个依赖就是`spring-boot-starter-web`的传递性依赖。

当然，我们可以手动改变这些依赖的版本。

### spring-boot-starter-web
Spring Boot提供了许多开箱即用的依赖模块，这些模块都是以spring-boot-starter-XX命名的。比如要开启Spring Boot的web功能，只需要在pom.xml中配置spring-boot-starter-web即可。
```xml
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

因为其依赖于spring-boot-starter-parent，所以这里可以不用配置version。保存后Maven会自动帮我们下载spring-boot-starter-web模块所包含的jar文件。

依赖都是隐式依赖于spring-boot-starter-web，我们也可以手动排除一些我们不需要的依赖。

比如spring-boot-starter-web默认集成了tomcat，假如我们想把它换为jetty，可以在pom.xml中spring-boot-starter-web下排除tomcat依赖，然后手动引入jetty依赖：
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
利用Maven可以看到项目的所有依赖关系

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gajphkaj0hj30dk0njgmq.jpg">
</div>