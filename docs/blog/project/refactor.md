---
title: "代码重构与优化"
date: 2019年10月29日12:00:01
---
# 代码重构与优化
开发到一定程度时service层和dao层代码会重复很多，基于三则重构的原则，对代码进行重构与优化。这里以dao层为例。
::: warning 代码重构步骤：
1. 创建所有访问层的基类`BaseDao`并复制公共的方法，用泛型代替实体类。
2. TbUserDao继承BaseDao,并传入TbUser实体类。
3. 继续创建统一的abstract实现，并让实现继承abstract类。

有时会出现重复的代码不统一的情况，此时可以创建多个`BaseDao`给不同的dao类继承。
::: 
## 数据访问层重构
1. 在`my-shop-commons`下的`com.funtl.my.shop.commons.persistence`中创建所有访问层的基类`BaseDao`并复制公共的方法，用泛型代替实体类。
```java
package com.funtl.my.shop.commons.persistence;
import java.util.List;
import java.util.Map;
/**
 * 所有通用的dao,所有访问层的基类
 */
public interface BaseDao <T extends BaseEntity> {

    /**
     * 查询全部数据
     *
     * @return
     */
    List<T> selectAll();

    /**
     * 新增
     *
     * @param entity
     */
    void insert(T entity);

    /**
     * 删除
     *
     * @param id
     */
    void delete(long id);

    /**
     * 根据id查询信息
     *
     * @param id
     * @return
     */
    T getById(Long id);

    /**
     * 更新
     *
     * @param entity
     */
    void update(T entity);


    /**
     * 批量删除
     *
     * @param ids
     */
    void deleteMulti(String ids[]);

    /**
     * 分页查询
     *
     * @param params 需要两个参数，start和length
     * @return
     */
    List<T> page(Map<String, Object> params);

    /**
     * 查询总记录数
     *
     * @return
     */
    int count(T entity);
}
```

2. `TbUserDao`继承`BaseDao`,并传入`TbUser`实体类,此时就可以删去重复的方法。
```java
package com.funtl.my.shop.web.admin.dao;

import com.funtl.my.shop.commons.persistence.BaseDao;
import com.funtl.my.shop.domain.TbUser;
import org.springframework.stereotype.Repository;


@Repository
public interface TbUserDao extends BaseDao<TbUser> {
    /**
     * 根据邮箱查询用户
     *
     * @param email
     * @return
     */
    TbUser getByEmail(String email);
}
```

3. 在service层可以继续创建统一的实现。
