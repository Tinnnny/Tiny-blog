---
title: "Spring Boot常用配置"
date: 2019年10月31日21:12:43
---
# Spring Boot常用配置

## 配置文件
Spring Boot项目使用一个全局的配置文件`application.properties`或者是`application.yml`，在 `resources`目录下或者类路径下的`/config`下，一般我们放到`resources`下。

修改Tomcat的端口为9090，并将默认的访问路径 "/" 修改为"boot"，可以在`application.properties`中添加：
```xml
server.port=9090
server.context-path=/boot
```
或在`application.yml`中添加：
```yml
server.port=9090
server.context-path=/boot
```
## Starter POM
Spring Boot为我们提供了简化企业级开发绝大多数场景的`starter pom`,只要使用了应用场景所需要的`starter pom`，相关的技术配置将会消除，就可以得到 Spring Boot为我们提供的自动配置的Bean。

## 日志配置
Spring Boot对各种日志框架都做了支持，我们可以通过配置来修改默认的日志的配置。默认情况下，Spring Boot使用`Logback`作为日志框架。
```yml
logging:
  file: ../logs/spring-boot-hello.log
  level.org.springframework.web: DEBUG
```
## 关闭特定的自动配置
关闭特定的自动配置使用`@SpringBootApplication`注解的`exclude`参数即可，这里以关闭数据源的自动配置为例
```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
```