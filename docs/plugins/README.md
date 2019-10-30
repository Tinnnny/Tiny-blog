---
title: "Lombok"
date: 2019年10月28日21:39:34
---
# Lombok概述
Lombok 是一个可以通过简单的注解形式来帮助我们简化消除一些必须有但显得很臃肿的 Java 代码的工具，通过使用对应的注解，可以在编译源码的时候生成对应的方法。
## IDEA 安装 Lombok 插件
IDEA 中依次点击 `File` --> `Settings `--> `Plugins` 搜索 Lombok 安装即可。
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8e8w64wz6j314z0l6dhi.jpg">
</div>

## 使用 Lombok
### 1.pom.xml 中增加所需依赖。
```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
</dependency>
```
### 2.使用注解
`@Data`包含了 `@ToString`，`@EqualsAndHashCode`，`@Getter/@Setter` 和` @RequiredArgsConstructor` 的功能
### 3.使用案例
```java
@Data
public class ItemCatNode implements Serializable {
    @JsonProperty(value = "u")
    private String url;
    @JsonProperty(value = "n")
    private String name;
    @JsonProperty(value = "i")
    private List<?> item;
}
```