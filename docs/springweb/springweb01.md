---
title: "Spring Web"
date: 2019-10-23
---

# Bean的装配方式
通过代码 getBean() 的方式从容器获取指定的 Bean 实例，容器首先会调用 Bean 类的无参构造器，创建空值的实例对象。除了使用 **getBean()** 的装配方式外，还可以使用**注解**的装配方式。

## 基于注解的装配方式
### 1.配置web.xml
```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
">

    <context:annotation-config />
    <context:component-scan base-package="com.funtl.leeshop"/>
</beans>
```
### 2.使用注解
::: tip 主要是指：
- `@Repository`：用于对 DAO 实现类进行注解
- `@Service`：用于对 Service 实现类进行注解
- `@Controller`：用于对 Controller 实现类进行注解
- `@Component`：除上述以外的类。
:::