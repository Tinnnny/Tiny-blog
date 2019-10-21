---
title: "pagehelper和tk.mybatis"
---

### 概述
PageHelper 是 Mybatis 的分页插件，支持多数据库、多数据源。可以简化数据库的分页查询操作，整合过程也极其简单，只需引入依赖即可。

tk.mybatis 是在 MyBatis 框架的基础上提供了很多工具，让开发更加高效。是一个国人开发的工具框架，封装了很多数据库相关的方法。



### 引入依赖
在pom文件中引入以下依赖

```xml
<dependencies>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.46</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>tk.mybatis</groupId>
            <artifactId>mapper-spring-boot-starter</artifactId>
            <version>2.0.2</version>
        </dependency>
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
            <version>1.2.10</version>
        </dependency>
</dependencies>
```

在`application.yml `中配置数据库连接

```
spring:
  datasource:
    druid:
      url: jdbc:mysql://ip:port/dbname?useUnicode=true&characterEncoding=utf-8&useSSL=false
      username: root
      password: 123456
      initial-size: 1
      min-idle: 1
      max-active: 20
      test-on-borrow: true
      # MySQL 8.x: com.mysql.cj.jdbc.Driver
      driver-class-name: com.mysql.jdbc.Driver
      
mybatis:
  configuration:
    cache-enabled: true
  type-aliases-package: com.tiny.mall.admin #实体类的存放路径
  mapper-locations: classpath:mapper/*.xml
```

创建一个通用的父级接口，以达到使用 `tk.mybatis` 的目的。因为子类具有父类的所有方法。

```java
package com.funtl.utils;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * 自己的 Mapper
 * 特别注意，该接口不能被扫描到，否则会出错
 * <p>Title: MyMapper</p>
 * <p>Description: </p>
 *
 * @author Tiny
 * @version 1.0.0
 * @date 2018/5/29 0:57
 */
public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {
}
```

### 使用MyBatis的Maven插件生成代码

在 `pom.xml`文件中增加 `mybatis-generator-maven-plugin`插件

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.5</version>
            <configuration>
                <configurationFile>${basedir}/src/main/resources/generator/generatorConfig.xml</configurationFile>
                <overwrite>true</overwrite>
                <verbose>true</verbose>
            </configuration>
            <dependencies>
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>${mysql.version}</version>
                </dependency>
                <dependency>
                    <groupId>tk.mybatis</groupId>
                    <artifactId>mapper</artifactId>
                    <version>3.4.4</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

#### 自动生成的配置
在 `src/main/resources/generator/ `目录下创建 `generatorConfig.xml` 配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <!-- 引入数据库连接配置 -->
    <properties resource="jdbc.properties"/>

    <context id="Mysql" targetRuntime="MyBatis3Simple" defaultModelType="flat">
        <property name="beginningDelimiter" value="`"/>
        <property name="endingDelimiter" value="`"/>

        <!-- 配置 tk.mybatis 插件 -->
        <plugin type="tk.mybatis.mapper.generator.MapperPlugin">
            <property name="mappers" value="tk.mybatis.MyMapper"/>
        </plugin>

        <!-- 配置数据库连接 -->
        <jdbcConnection
                driverClass="${jdbc.driverClass}"
                connectionURL="${jdbc.connectionURL}"
                userId="${jdbc.username}"
                password="${jdbc.password}">
        </jdbcConnection>

        <!-- 配置实体类存放路径 -->
        <javaModelGenerator targetPackage="com.tiny.mall.admin.dto" targetProject="src/main/java"/>

        <!-- 配置 XML 存放路径 -->
        <sqlMapGenerator targetPackage="mapper" targetProject="src/main/resources"/>

        <!-- 配置 DAO 存放路径 -->
        <javaClientGenerator
                targetPackage="com.tiny.mall.admin.mapper"
                targetProject="src/main/java"
                type="XMLMAPPER"/>

        <!-- 管理员服务 Begin -->
        <table catalog="mall-admin" tableName="tb_sys_user">
            <generatedKey column="user_code" sqlStatement="Mysql" identity="false"/>
        </table>
      
    </context>
</generatorConfiguration>
```

值得注意的是，虽然已经配置了druid的连接，但是这里还是需要配置数据源，不然会发生错误，也就是说，这里有两个配置文件。即`jdbc.properties`和`application.yml`
两个文件皆在src/main/resources 目录下创建。

```
# MySQL 8.x: com.mysql.cj.jdbc.Driver
jdbc.driverClass=com.mysql.jdbc.Driver
jdbc.connectionURL=jdbc:mysql://ip:port/dbname?useUnicode=true&characterEncoding=utf-8&useSSL=false
jdbc.username=root
jdbc.password=root
```

最后，只需要在右侧边栏maven插件中启动插件或者输入：

```
mvn mybatis-generator:generate

```

就可以生成配置mapper即dao，xml以及实体类。

最后要注意的是：直接使用tk.mybatis 封装的方法如insert 插入数据时会出现语法错误。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/af2b2d1bly1g3kho79atnj215905u44q.jpg">
</div>

究其原因是在mybatis-generator-maven-plugin 插件自动生成的代码上又一个
@Table注解，注解上除了表名还写了数据库。删掉数据库名即可正确使用方法。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/af2b2d1bly1g3khvqd4pfj20ha086q6l.jpg">
</div>

<div align="center">
<img src="http://ww1.sinaimg.cn/large/af2b2d1bly1g3khurgliqj20h90790vy.jpg">
</div>




## `ExampleMapper<T>`方法

所有方法均需要传入`tk.mybatis.mapper.entity.Example`，

首先进行实例化：

```
Example example = new Example(UserRole.class);//实例化
Example.Criteria criteria = example.createCriteria();
```

 Criteria是Example中的一个内部类，在最终sql构建时以括号呈现，Criteria里带了较多构建查询条件的方法，如

```
andEqualTo(String property, Object value)，

orEqualTo(String property, Object value),

andGreaterThan(String property, Object value),

orGreaterThan(String property, Object value)
```

传入的property为实体类中的属性名，非数据度字段名。

举例说明，如`orEqualTo(String property, Object value)`，代码如下：

```
Example example = new Example(UserRole.class);//实例化
Example.Criteria criteria = example.createCriteria();
criteria.orEqualTo("fUserId", "15693a6e509ee4819fcf0884ea4a7c9b");
criteria.orEqualTo("fUserId", "15ccaf3e89376f7b109eec94d10b7988");
List<UserRole> userRoleList = userRoleService.selectByExample(example);
```

最终的where语句则为:

```
( f_user_id = "15693a6e509ee4819fcf0884ea4a7c9b" or f_user_id = "15ccaf3e89376f7b109eec94d10b7988" )
```

其余方法同理。 

其中`andCondition(String condition)`方法支持手写条件，传入的字符串为最终的查询条件，如：length(f_user_id)<5

以及likeTo()的方法是不带百分号%的，需要自己对传入参数进行构建（加左like或者右like等）。



参考：`https://blog.csdn.net/q564495021/article/details/81607515`

## 测试类实例

```java
package com.funtl.hello.spring.boot;

import com.funtl.hello.spring.boot.entity.TbUser;
import com.funtl.hello.spring.boot.mapper.TbUserMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = HelloSpringBootApplication.class)
@Transactional
@Rollback
public class MyBatisTests {

    /**
     * 注入数据查询接口
     */
    @Autowired
    private TbUserMapper tbUserMapper;

    /**
     * 测试插入数据
     */
    @Test
    public void testInsert() {
        // 构造一条测试数据
        TbUser tbUser = new TbUser();
        tbUser.setUsername("Lusifer");
        tbUser.setPassword("123456");
        tbUser.setPhone("15888888888");
        tbUser.setEmail("topsale@vip.qq.com");
        tbUser.setCreated(new Date());
        tbUser.setUpdated(new Date());

        // 插入数据
        tbUserMapper.insert(tbUser);
    }

    /**
     * 测试删除数据
     */
    @Test
    public void testDelete() {
        // 构造条件，等同于 DELETE from tb_user WHERE username = 'Lusifer'
        Example example = new Example(TbUser.class);
        example.createCriteria().andEqualTo("username", "Lusifer");

        // 删除数据
        tbUserMapper.deleteByExample(example);
    }

    /**
     * 测试修改数据
     */
    @Test
    public void testUpdate() {
        // 构造条件
        Example example = new Example(TbUser.class);
        example.createCriteria().andEqualTo("username", "Lusifer");

        // 构造一条测试数据
        TbUser tbUser = new TbUser();
        tbUser.setUsername("LusiferNew");
        tbUser.setPassword("123456");
        tbUser.setPhone("15888888888");
        tbUser.setEmail("topsale@vip.qq.com");
        tbUser.setCreated(new Date());
        tbUser.setUpdated(new Date());

        // 修改数据
        tbUserMapper.updateByExample(tbUser, example);
    }

    /**
     * 测试查询集合
     */
    @Test
    public void testSelect() {
        List<TbUser> tbUsers = tbUserMapper.selectAll();
        for (TbUser tbUser : tbUsers) {
            System.out.println(tbUser.getUsername());
        }
    }

    /**
     * 测试分页查询
     */
    @Test
    public void testPage() {
        // PageHelper 使用非常简单，只需要设置页码和每页显示笔数即可
        PageHelper.startPage(0, 2);

        // 设置分页查询条件
        Example example = new Example(TbUser.class);
        PageInfo<TbUser> pageInfo = new PageInfo<>(tbUserMapper.selectByExample(example));

        // 获取查询结果
        List<TbUser> tbUsers = pageInfo.getList();
        for (TbUser tbUser : tbUsers) {
            System.out.println(tbUser.getUsername());
        }
    }
}
```

其中，在更新数据时如果使用`updateByExample(tbSysUser, example)`方法其实不太好，因为需要填写要求的not null的字段。而updateByExampleSelective(tbSysUser, example)方法
可以只填写需要更新的数据则可。
