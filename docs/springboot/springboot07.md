# Spring Boot中使用MyBatis
整合MyBatis之前，先搭建一个基本的Spring Boot项目开启Spring Boot。然后引入mybatis-spring-boot-starter和数据库连接驱动。

## mybatis-spring-boot-starter
在pom中引入
```xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.1</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.48</version>
    <scope>runtime</scope>
</dependency>
```
不同版本的Spring Boot和MyBatis版本对应不一样，具体可查看官方文档：[http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/](http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)

## Druid数据源
Druid是一个关系型数据库连接池，是阿里巴巴的一个开源项目，地址：[https://github.com/alibaba/druid](https://github.com/alibaba/druid)。Druid不但提供连接池的功能，还提供监控功能，可以实时查看数据库连接池和SQL查询的工作情况。

### 1.配置Druid依赖
Druid为Spring Boot项目提供了对应的starter：

```
<dependency>
   <groupId>com.alibaba</groupId>
   <artifactId>druid-spring-boot-starter</artifactId>
   <version>1.1.21</version>
</dependency>
```

### 2.Druid数据源配置
上面通过查看mybatis starter的隐性依赖发现，Spring Boot的数据源配置的默认类型是`org.apache.tomcat.jdbc.pool.Datasource`，为了使用Druid连接池，需要在application.yml下配置：
```yml
spring:
  datasource:
    druid:
      # 数据库访问配置, 使用druid数据源
      type: com.alibaba.druid.pool.DruidDataSource
      driver-class-name: com.mysql.jdbc.Driver
      url: jdbc:mysql://localhost:3306/student?useUnicode=true&characterEncoding=utf-8&useSSL=false
      username: root
      password: root
      # 连接池配置
      initial-size: 5
      min-idle: 5
      max-active: 20
      # 连接等待超时时间
      max-wait: 30000
      # 配置检测可以关闭的空闲连接间隔时间
      time-between-eviction-runs-millis: 60000
      # 配置连接在池中的最小生存时间
      min-evictable-idle-time-millis: 300000
      validation-query: select '1' from dual
      test-while-idle: true
      test-on-borrow: false
      test-on-return: false
      # 打开PSCache，并且指定每个连接上PSCache的大小
      pool-prepared-statements: true
      max-open-prepared-statements: 20
      max-pool-prepared-statement-per-connection-size: 20
      # 配置监控统计拦截的filters, 去掉后监控界面sql无法统计, 'wall'用于防火墙
      filters: stat,wall
      # Spring监控AOP切入点，如x.y.z.service.*,配置多个英文逗号分隔
      aop-patterns: com.springboot.servie.*


      # WebStatFilter配置
      web-stat-filter:
        enabled: true
        # 添加过滤规则
        url-pattern: /*
        # 忽略过滤的格式
        exclusions: '*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*'

      # StatViewServlet配置
      stat-view-servlet:
        enabled: true
        # 访问路径为/druid时，跳转到StatViewServlet
        url-pattern: /druid/*
        # 是否能够重置数据
        reset-enable: false
        # 需要账号密码才能访问控制台
        login-username: druid
        login-password: druid123
        # IP白名单
        # allow: 127.0.0.1
        #　IP黑名单（共同存在时，deny优先于allow）
        # deny: 192.168.1.218

      # 配置StatFilter
      filter:
        stat:
          log-slow-sql: true

```
述配置不但配置了Druid作为连接池，而且还开启了Druid的监控功能。 其他配置可参考官方wiki——[https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter](https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter)

此时，运行项目，访问[http://localhost:8080/druid](http://localhost:8080/druid)

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1gakanr5283j30fd0aoglr.jpg">
</div>

输入账号密码即可看到Druid监控后台：
关于Druid的更多说明，可查看官方wiki——[https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98](https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)