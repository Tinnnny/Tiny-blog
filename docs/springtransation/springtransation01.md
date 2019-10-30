---
title: 使用Spring注解管理事务
date: 2019年10月29日17:47:27
---
# 使用Spring注解管理事务
## 1.在`spring-context.xml`中加入tx标签。
```xml
<!-- 开启事务注解驱动 -->
<tx:annotation-driven transaction-manager="transactionManager" />
```
## 2.使用`@Transaction`注解
使用起来很简单，只需要在需要增加事务的业务类上增加`@Transaction`注解即可，案例代码如下：
```java
package com.hello.spring.transaction.aspectsj.aop.service.impl;

import com.hello.spring.transaction.aspectsj.aop.dao.TbContentCategoryDao;
import com.hello.spring.transaction.aspectsj.aop.domain.TbContent;
import com.hello.spring.transaction.aspectsj.aop.domain.TbContentCategory;
import com.hello.spring.transaction.aspectsj.aop.service.TbContentCategoryService;
import com.hello.spring.transaction.aspectsj.aop.service.TbContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "tbContentCategoryService")
public class TbContentCategoryServiceImpl implements TbContentCategoryService {

    @Autowired
    private TbContentCategoryDao tbContentCategoryDao;

    @Autowired
    private TbContentService tbContentService;

    public void save(TbContentCategory tbContentCategory, TbContent tbContent) {
        tbContentCategoryDao.insert(tbContentCategory);
        tbContentService.save(tbContent);
    }
}
```
在真正使用`@Transactional`注解时，一个类中有些方法需要使用事务，有些不需要，正确的做法是：在类上加注解`@Transactional(readOnly = true)`,在需要使用事务的方法上加`@Transactional(readOnly = false)`。

## `@Transactional`注解简介
::: tip `@Transactional`的所有可选属性：
- `propagation`：用于设置事务传播属性。该属性类型为 Propagation 枚举，默认值为 Propagation.REQUIRED。
- `isolation`：用于设置事务的隔离级别。该属性类型为 Isolation 枚举 ，默认值为 Isolation.DEFAULT。
- `readOnly`：用于设置该方法对数据库的操作是否是只读的。该属性为 boolean，默认值为 false。
- `timeout`：用于设置本操作与数据库连接的超时时限。单位为秒，类型为 int，默认值为 -1，即没有时限。
- `rollbackFor`：指定需要回滚的异常类。类型为 Class[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
- `rollbackForClassName`：指定需要回滚的异常类类名。类型为 String[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
- `noRollbackFor`：指定不需要回滚的异常类。类型为 Class[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
- `noRollbackForClassName`： 指定不需要回滚的异常类类名。类型为 String[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
:::

在单元测试的时候加`@transational`和`@rollback`这这样就不会保留脏数据