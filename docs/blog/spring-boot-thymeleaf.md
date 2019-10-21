---
title: "Thymeleaf "
---

### 概述
Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，它可以完全替代JSP。

### Thymeleaf常用表达方式
#### 引入依赖
主要增加`spring-boot-starter-thymeleaf `和 `nekohtml`这两个依赖。
- spring-boot-starter-thymeleaf：Thymeleaf 自动配置
- nekohtml：允许使用非严格的 HTML 语法

完整的 `pom.xml` 如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.funtl</groupId>
    <artifactId>hello-spring-boot</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>hello-spring-boot</name>
    <description></description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.2.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>net.sourceforge.nekohtml</groupId>
            <artifactId>nekohtml</artifactId>
            <version>1.9.22</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>com.funtl.hello.spring.boot.HelloSpringBootApplication</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

```

#### 在`application.yml`中配置Thymeleaf

```
spring:
  thymeleaf:
    cache: false # 开发时关闭缓存,不然没法看到实时页面
    mode: HTML # 用非严格的 HTML
    encoding: UTF-8
    servlet:
      content-type: text/html
```

#### 创建测试用JavaBean
创建一个测试效果的JavaBean，简单封装一下即可

```java
package com.funtl.hello.spring.boot.entity;

import java.io.Serializable;
public class PersonBean implements Serializable {

    private String name;
    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
```

#### 创建测试用 Controller
创建一个 Controller，造一些测试数据并设置跳转

```java
package com.funtl.hello.spring.boot.controller;

import com.funtl.hello.spring.boot.entity.PersonBean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import java.util.List;
@Controller
@RequestMapping(value = "thymeleaf")
public class IndexController {

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(Model model) {
        PersonBean person = new PersonBean();
        person.setName("张三");
        person.setAge(22);

        List<PersonBean> people = new ArrayList<>();
        PersonBean p1 = new PersonBean();
        p1.setName("李四");
        p1.setAge(23);
        people.add(p1);

        PersonBean p2 = new PersonBean();
        p2.setName("王五");
        p2.setAge(24);
        people.add(p2);

        PersonBean p3 = new PersonBean();
        p3.setName("赵六");
        p3.setAge(25);
        people.add(p3);

        model.addAttribute("person", person);
        model.addAttribute("people", people);

        return "index";
    }
}
```

# 创建测试页面
在`templates`目录下创建`index.html`文件，代码如下：

```html
<!DOCTYPE html SYSTEM "http://www.thymeleaf.org/dtd/xhtml1-strict-thymeleaf-spring4-4.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Hello Thymeleaf</title>
</head>
<body>

<!--1.循环-->
    <div>
        <span>访问Model:</span><span th:text="${person.getName()}"></span>
    </div>
    <div>
        <span>访问列表</span>
        <table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            </thead>
            <tbody>
            <tr th:each="human : ${people}">
                <td th:text="${human.name}"></td>
                <td th:text="${human.age}"></td>
            </tr>
            </tbody>
        </table>
    </div>


<!--2.获取变量值，字符串拼接要加号，字符串两边要引号，整体外面要引号。-->
<p th:text="'Hello!,'+${person.name}+'!!!!'"></p>

<!--或者用更加简洁的方式也可以-->
<p th:text="|Hello,${person.name},'!!!!'|"></p>

    <!--3.if语句-->
<p th:if="${person.age}==23">if只有条件成立时才能显示。</p>

<table>
    <th:block th:each="human : ${people}">
        <tr>
            <td th:text="${human.name}"></td>
            <td th:text="${human.age}"></td>
        </tr>
        <tr>
            <td colspan="2" th:text="${human.name}">...</td>
        </tr>
    </th:block>
</table>

<table>
    <tr>
        <td th:text="${person.name}">...</td>
        <td th:text="${person.age}">...</td> </tr>
    <tr>
        <td colspan="2" th:text="${person.name}">...</td>
    </tr>
    <!--/*/ </th:block> /*/-->
</table>

<!--4.用fragment引入模板文件-->
<div th:include="footer::copy1"></div>
</body>
</html>
```

另外，如果想要让`th：text`里的内容换行的话，可以在里面写上<br>换行符，然后将`th:text` 改成`th:utext`。

```html
 <th:block th:if="${baseResult!=null}">
            <div  class="alert alert-danger" style="text-align: center">
                <div th:utext="${baseResult.message}" > </div>
            </div>
        </th:block>
```

输出：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/af2b2d1bly1g3lequwjarj20d90jpgls.jpg">
</div>
