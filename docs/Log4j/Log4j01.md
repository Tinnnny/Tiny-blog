---
title: "Log4j 起步"
date: 2019-10-23
---
# 起步
## 1.添加依赖
在pom文件中添加：
```xml
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-log4j12</artifactId>
            <version>1.7.25</version>
        </dependency>
```

## 2.创建`log4j.properties`配置文件
在 `src/main/resources` 目录下创建名为 `log4j.properties` 的属性配置文件
```xml
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
::: tip 日志配置相关说明
- `log4j.rootLogger`：根日志，配置了日志级别为 INFO，预定义了名称为 console、file 两种附加器 
- `log4j.appender.console`：console 附加器，日志输出位置在控制台
- `log4j.appender.console.layout`：console 附加器，采用匹配器布局模式
- `log4j.appender.console.layout.ConversionPattern`：console 附加器，日志输出格式为：日期 日志级别 [类名] - 消息换行符 
- `log4j.appender.file`：file 附加器，每天产生一个日志文件
- `log4j.appender.file.File`：file 附加器，日志文件输出位置 logs/log.log
- `log4j.appender.file.layout`：file 附加器，采用匹配器布局模式
- `log4j.appender.A3.MaxFileSize`：日志文件最大值
- `log4j.appender.A3.MaxBackupIndex`：最多纪录文件数
- `log4j.appender.file.layout.ConversionPattern`：file 附加器，日志输出格式为：日期 日志级别 [类名] - 消息换行符
:::

## 3.在Java类中使用
### 1.在类的上方用static final 的形式初始化logger。
一个类中定义logger只有这个类中才会记录相应的日志。
### 2.在程序中埋点
具体代码如下：
```java
package com.funtl.hello.spring;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyTest {

    public static final Logger logger = LoggerFactory.getLogger(MyTest.class);

    public static void main(String[] args) {
        logger.info("slf4j for info");
        logger.debug("slf4j for debug");
        logger.error("slf4j for error");
        logger.warn("slf4j for warn");

        String message = "Hello SLF4J";
        logger.info("slf4j message is : {}", message);
    }
}
```
运行结果为：
```
2018-06-07 05:15:42,914 INFO [com.funtl.hello.spring.MyTest] - slf4j for info
2018-06-07 05:15:42,915 ERROR [com.funtl.hello.spring.MyTest] - slf4j for error
2018-06-07 05:15:42,915 WARN [com.funtl.hello.spring.MyTest] - slf4j for warn
2018-06-07 05:15:42,916 INFO [com.funtl.hello.spring.MyTest] - slf4j message is : Hello SLF4J
```
项目根目录下也会多出 `logs/log.log` 目录及文件.

## 附：占位符说明
> 打日志的时候使用了 `{} `占位符，这样就不会有字符串拼接操作，减少了无用 String 对象的数量，节省了内存。并且，记住，在生产最终日志信息的字符串之前，这个方法会检查一个特定的日志级别是不是打开了，这不仅降低了内存消耗而且预先降低了 CPU 去处理字符串连接命令的时间。

对应的,控制台的方式为：system.out.println(String.format("message is : %f %s ",message1,message2));

虽然有%d、%s、%f等，但是其实都用%s就行。

另外，不推荐使用`message1.concat(message2)`这种方式，因为也有字符串拼接，会损耗资源，和加号差不多。