---
layout: post
title: "tk.mybatis用法"
subtitle: ''
author: "Tiny"
header-style: text
tags:
  - Spring Boot
---

### 概述

### ExampleMapper<T>内方法使用说明：
所有方法均需要传入tk.mybatis.mapper.entity.Example，

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

举例说明，如orEqualTo(String property, Object value)，代码如下：

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

其中andCondition(String condition)方法支持手写条件，传入的字符串为最终的查询条件，如：length(f_user_id)<5

以及likeTo()的方法是不带百分号%的，需要自己对传入参数进行构建（加左like或者右like等）。



参考：https://blog.csdn.net/q564495021/article/details/81607515 

### 测试类实例
```
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

其中，在更新数据时如果使用updateByExample(tbSysUser, example)方法其实不太好，因为需要填写要求的not null的字段。而updateByExampleSelective(tbSysUser, example)方法
可以只填写需要更新的数据则可。