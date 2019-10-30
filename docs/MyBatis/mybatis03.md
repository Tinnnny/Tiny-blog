---
title: "Spring 整合 MyBatis"
date: 2019年10月27日13:59:57
---

# 起步
::: danger MyBatis 对象关系映射并测试共5个步骤：
1. 导入单元测试相关依赖。
2. 创建数据库和对应的实体类。
3. 定义数据访问接口和业务逻辑接口并实现。MyBatis帮我们实现了Dao层的实现，所以我们只需要自己实现Service层的接口。
4. 在mapper文件夹下的`TbUserMapper.xml`定义映射文件。
5. 创建单元测试。
:::



## 添加单元测试相关依赖
编写完相关代码后，我们可以使用单元测试查看 MyBatis 的执行效果，需要增加单元测试相关依赖。
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>4.3.17.RELEASE</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
```

## 定义实体类
```java
package com.funtl.my.shop.domain;

import java.io.Serializable;
import java.util.Date;

public class TbUser implements Serializable {
    private Long id;
    private String username;
    private String password;
    private String phone;
    private String email;
    private Date created;
    private Date update;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdate() {
        return update;
    }

    public void setUpdate(Date update) {
        this.update = update;
    }
}
```

## 数据访问接口
```java
package com.funtl.my.shop.web.admin.dao;

import com.funtl.my.shop.domain.TbUser;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbUserDao {

    /**
     * 查询全部用户信息
     * @return
     */
    public List<TbUser> selectAll();
}
```

## 业务逻辑接口
```java
package com.funtl.my.shop.web.admin.service;

import com.funtl.my.shop.domain.TbUser;

import java.util.List;

public interface TbUserService {

    /**
     * 查询全部用户信息
     * @return
     */
    public List<TbUser> selectAll();
}
```

## 实现业务逻辑接口
```java
package com.funtl.my.shop.web.admin.service.impl;

import com.funtl.my.shop.domain.TbUser;
import com.funtl.my.shop.web.admin.dao.TbUserDao;
import com.funtl.my.shop.web.admin.service.TbUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TbUserServiceImpl implements TbUserService {

    @Autowired
    private TbUserDao tbUserDao;

    @Override
    public List<TbUser> selectAll() {
        return tbUserDao.selectAll();
    }
}
```
## 映射文件
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.funtl.my.shop.web.admin.dao.TbUserDao">
    <select id="selectAll" resultType="TbUser">
        SELECT
          a.id,
          a.username,
          a.password,
          a.phone,
          a.email,
          a.created,
          a.updated
        FROM
          tb_user AS a
    </select>
</mapper>
```

## 单元测试
```java
package com.funtl.my.shop.web.admin.service.test;

import com.funtl.my.shop.domain.TbUser;
import com.funtl.my.shop.web.admin.dao.TbUserDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-context.xml", "classpath:spring-context-druid.xml", "classpath:spring-context-mybatis.xml"})
public class TbUserServiceTest {

    @Autowired
    private TbUserDao tbUserDao;

    @Test
    public void testSelectAll() {
        List<TbUser> tbUsers = tbUserDao.selectAll();
        for (TbUser tbUser : tbUsers) {
            System.out.println(tbUser.getUsername());
        }
    }
}
```
运行结果：
```
2018-06-13 08:00:40,069 INFO [org.springframework.test.context.support.DefaultTestContextBootstrapper] - Loaded default TestExecutionListener class names from location [META-INF/spring.factories]: [org.springframework.test.context.web.ServletTestExecutionListener, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener, org.springframework.test.context.support.DependencyInjectionTestExecutionListener, org.springframework.test.context.support.DirtiesContextTestExecutionListener, org.springframework.test.context.transaction.TransactionalTestExecutionListener, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener]
2018-06-13 08:00:40,106 INFO [org.springframework.test.context.support.DefaultTestContextBootstrapper] - Using TestExecutionListeners: [org.springframework.test.context.web.ServletTestExecutionListener@4b9e13df, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener@2b98378d, org.springframework.test.context.support.DependencyInjectionTestExecutionListener@475530b9, org.springframework.test.context.support.DirtiesContextTestExecutionListener@1d057a39, org.springframework.test.context.transaction.TransactionalTestExecutionListener@26be92ad, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener@4c70fda8]2018-06-13 08:00:40,213 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context.xml]
2018-06-13 08:00:40,513 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context-druid.xml]
2018-06-13 08:00:40,565 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context-mybatis.xml]
2018-06-13 08:00:40,586 INFO [org.springframework.context.support.GenericApplicationContext] - Refreshing org.springframework.context.support.GenericApplicationContext@55d56113: startup date [Wed Jun 13 08:00:40 CST 2018]; root of context hierarchy
2018-06-13 08:00:41,650 INFO [com.alibaba.druid.pool.DruidDataSource] - {dataSource-1} inited
zhangsan
zhangsan1
zhangsan2
zhangsan3
zhangsan5
lisi
lisi1
jd_gogogo
tidy
tidy1
niuniu
niuniu2
niuniu3
niuniu4
test01
test02
2018-06-13 08:00:42,143 INFO [org.springframework.context.support.GenericApplicationContext] - Closing org.springframework.context.support.GenericApplicationContext@55d56113: startup date [Wed Jun 13 08:00:40 CST 2018]; root of context hierarchy
2018-06-13 08:00:42,149 INFO [com.alibaba.druid.pool.DruidDataSource] - {dataSource-1} closed
```