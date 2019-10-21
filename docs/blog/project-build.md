---
title: "Spring MVC项目的创建过程"
---
# Spring MVC项目的创建过程
### 1.桌面上新建文件夹 m-shop
### 2.用Idea打开项目文件夹，
新建`README.md`说明项目相关信息，新建`pom.xml`并复制基本内容，再托管到maven。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.funtl</groupId>
    <artifactId>my-shop</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.3.17.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>log4j-over-slf4j</artifactId>
            <version>1.7.25</version>
        </dependency>
    </dependencies>
</project>
```

### 3.完善项目基本结构。

新建`src/main/java(resources、webapp/WEB-INF/web.xml)`,并复制web.xml基本内容。新建test/java。并mark Directory as相应文件夹类型。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

</web-app>
```

### 4.完善架构结构。
在webapp下新建`assets`文件夹，java下新建`com.funtl.my.shop`。域名反转。因为3层架构MVC，所以需要新建dao--数据访问层，service--业务逻辑层,web--视图层。

### 5.配置Spring和Log4j。
spring的总配置，一般起名为`spring-context.xml`，从此类的实例化工作交给Spring容器管理（Ioc）。新建`log4j.properties`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
```

```
log4j.rootLogger=INFO, console, file

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n

log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.File=logs/log.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.A3.MaxFileSize=1024KB
log4j.appender.A3.MaxBackupIndex=10
log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n
```

### 6.新建`plugins/bootstrap`
复制bootstrap和jquery.

### 7.在webapp下新建`index.html`

### 8.配置tomcat
启动检查是否有问题。


