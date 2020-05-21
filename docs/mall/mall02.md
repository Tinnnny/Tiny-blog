# MybatisCodeHelperPro生成Mapper
首先创建基本的文件夹和配置文件。

![1583556918(1).png](http://ww1.sinaimg.cn/large/005PyHfLgy1gcl9vxu6grj30am0i4t90.jpg)

## 导入依赖
mall-common中导入公共依赖
```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-commons</artifactId>
</dependency>
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```
mall-admin中导入
```xml
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-mbg</artifactId>
</dependency>
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-security</artifactId>
</dependency>
```
mall-demo引入
```xml
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-mbg</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
mall-mbg引入
```xml
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-common</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```
mall-portal引入
```xml
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-mbg</artifactId>
</dependency>
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-security</artifactId>
</dependency>
```
mall-search引入
```xml
 <dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-mbg</artifactId>
</dependency>
```
mall-security引入
```xml
<dependency>
    <groupId>com.example.mall</groupId>
    <artifactId>mall-common</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
</dependency>
```

## 添加配置
application.yml
```yml
spring:
  profiles:
    active: dev #默认为开发环境

mybatis:
  mapper-locations:
    - classpath:dao/*.xml
    - classpath*:com/**/mapper/*.xml

jwt:
  tokenHeader: Authorization #JWT存储的请求头
  secret: mall-admin-secret #JWT加解密使用的密钥
  expiration: 604800 #JWT的超期限时间(60*60*24)
  tokenHead: Bearer  #JWT负载中拿到开头

secure:
  ignored:
    urls: #安全路径白名单
      - /swagger-ui.html
      - /swagger-resources/**
      - /swagger/**
      - /**/v2/api-docs
      - /**/*.js
      - /**/*.css
      - /**/*.png
      - /**/*.ico
      - /webjars/springfox-swagger-ui/**
      - /actuator/**
      - /druid/**
      - /admin/login
      - /admin/register
      - /admin/info
      - /admin/logout
      - /minio/upload

logging:
  level:
    root: info #日志配置DEBUG,INFO,WARN,ERROR
    com.example.mall: debug
#  file: demo_log.log #配置日志生成路径
#  path: /var/logs #配置日志文件名称
```
application-dev.yml
```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mall?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
    username: root
    password: root
    druid:
      initial-size: 5 #连接池初始化大小
      min-idle: 10 #最小空闲连接数
      max-active: 20 #最大连接数
      web-stat-filter:
        exclusions: "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*" #不统计这些请求数据
      stat-view-servlet: #访问监控网页的登录用户名和密码
        login-username: druid
        login-password: druid
```

## 生成代码
IDEA右侧边栏Database连接mall,右键点击任意表，选择`Mybatis multiple table generate`,配置如下

![3Xt7aF.png](https://s2.ax1x.com/2020/03/07/3Xt7aF.png)

点击ok，即可生成mapper和mapper.xml文件。
