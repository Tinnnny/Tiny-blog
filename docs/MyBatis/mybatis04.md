---
title: "MyBatis CRUD操作"
date: 2019年10月27日15:37:49
---

# MyBatis CRUD操作
分别在Dao和Service层创建方法，并增加对应的映射文件，最后进行单元测试。
## INSERT
```xml
<insert id="insert">
    INSERT INTO tb_user (
      id,
      username,
      password,
      phone,
      email,
      created,
      updated
    )
    VALUES
      (
        #{id},
        #{username},
        #{password},
        #{phone},
        #{email},
        #{created},
        #{update}
      )
</insert>
```

```java
@Test
public void testInsert() {
    TbUser tbUser = new TbUser();
    tbUser.setEmail("admin@admin.com");
    tbUser.setPassword(DigestUtils.md5DigestAsHex("123456".getBytes()));
    tbUser.setPhone("15888888888");
    tbUser.setUsername("Lusifer");
    tbUser.setCreated(new Date());
    tbUser.setUpdate(new Date());

    tbUserService.insert(tbUser);
}
```

## DELETE
```xml
<delete id="delete">
    DELETE FROM tb_user WHERE id = #{id}
</delete>
```
```

```java
@Test
public void testDelete() {
    TbUser tbUser = new TbUser();
    tbUser.setId(37L);

    tbUserService.delete(tbUser);
}
```

## 查询单个对象
```xml
<select id="getById" resultType="TbUser">
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
    WHERE
      a.id = #{id}
</select>
```

```java
@Test
public void testGetById() {
    TbUser tbUser = tbUserService.getById(38L);
    System.out.println(tbUser.getUsername());
}
```

## UPDATE
```xml
<update id="update">
    UPDATE
      tb_user
    SET
      username = #{username},
      password = #{password},
      phone = #{phone},
      email = #{email},
      created = #{created},
      updated = #{update}
    WHERE id = #{id}
</update>
```

```java
@Test
public void testUpdate() {
    TbUser tbUser = tbUserDao.getById(36L);
    tbUser.setUsername("Lusifer");

    tbUserService.update(tbUser);
}
```

## 模糊查询
```xml
<select id="selectByName" resultType="TbUser">
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
    WHERE
      a.username LIKE CONCAT ('%', #{username}, '%')
</select>
```
在进行模糊查询时，需要进行字符串的拼接。SQL 中的字符串的拼接使用的是函数 `concat(arg1, arg2, …) `。注意不能使用 Java 中的字符串连接符` +`。

```java
@Test
public void testSelectByName() {
    List<TbUser> tbUsers = tbUserService.selectByName("uni");
    for (TbUser tbUser : tbUsers) {
        System.out.println(tbUser.getUsername());
    }
}
```

## 进行封装
封装sql的代码片段放到各个方法中，简化代码。
```xml
<sql id="tbUserColumns">
        a.id,
        a.username,
        a.password,
        a.phone,
        a.email,
        a.created,
        a.updated
    </sql>
```
将各个方法中的对应代码段替换成：
```xml
<include refid="tbUserColumns"/>
```
替换后的查询所有的方法为：
```xml
<select id="selectAll" resultType="TbUser">
        SELECT
          <include refid="tbUserColumns"/>
        FROM
          tb_user AS a
</select>
```
