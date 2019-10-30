---
title: "Log4j"
date: 2019-10-23
---

# Log4j简介
## 概述
日志信息根据用途与记录内容的不同，分为 调试日志、运行日志、异常日志 等。Log4j 的全称为 Log for java，即专门用于 Java 语言的日志记录工具。

::: tip 日志级别由高到低，共分 6 个级别：
- fatal(致命的)
- error
- warn
- info
- debug
- trace(堆栈)
:::

## 日志输出配置
::: tip Log4j的日志输出配置log4j.properties：
- %m：输出代码中指定的消息
- %p：输出优先级，即 DEBUG，INFO，WARN，ERROR，FATAL
- %r：输出自应用启动到输出该 log 信息耗费的毫秒数
- %c：输出所属的类目，通常就是所在类的全名
- %t：输出产生该日志事件的线程名
- %n：输出一个回车换行符，Windows 平台为 /r/n，Unix 平台为 /n
- %d：输出日志时间点的日期或时间，默认格式为 ISO8601，也可以在其后指定格式，比如：%d{yyy MMM dd HH:mm:ss , SSS}，输出类似：2002年10月18日 22:10:28,921
- %l：输出日志事件的发生位置，包括类目名、发生的线程，以及在代码中的行数。举例：Testlog4.main(TestLog4.java: 10 )
:::

## Slf4j简介
`slf4j`的全称是 `Simple Loging Facade For Java`，即它仅仅是一个为 Java 程序提供日志输出的统一接口，并不是一个具体的日志实现方案，就比如 JDBC 一样，只是一种规则而已。所以单独的 slf4j 是不能工作的，必须搭配其他具体的日志实现方案，比如 apache 的 `org.apache.log4j.Logger`，JDK 自带的 `java.util.logging.Logger `以及 `log4j` 等