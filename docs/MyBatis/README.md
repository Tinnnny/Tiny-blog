---
title: "MyBatis"
date: 2019年10月25日18:29:16
---
# MyBatis
## 概述
MyBatis 是一个优秀的基于 Java 的持久层框架，它内部封装了 JDBC，使开发者只需关注 SQL 语句本身，而不用再花费精力去处理诸如注册驱动、创建 Connection、配置 Statement 等繁杂过程。

Mybatis 通过 xml 或注解的方式将要执行的各种 Statement（Statement、PreparedStatement 等）配置起来，并通过 Java 对象和 Statement 中 SQL 的动态参数进行映射生成最终执行的 SQL 语句，最后由 MyBatis 框架执行 SQL 并将结果映射成 Java 对象并返回。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8amwei7aoj30t90e7aas.jpg">
</div>

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8aogcgpobj30nk09uwek.jpg">
</div>

`mybatis.xml`配置缓存、数据源、连接等等。
`mapper.xml`把原生POJO和数据库表进行关联。

## MyBatis与Hibernate
Hibernate 框架是提供了全面的数据库封装机制的 “全自动” ORM，即实现了 POJO 和数据库表之间的映射，以及 SQL 的自动生成和执行。

相对于此，MyBatis 只能算作是 “半自动” ORM。其着力点，是在 POJO 类与 SQL 语句之间的映射关系。也就是说，MyBatis 并不会为程序员自动生成 SQL 语句。具体的 SQL 需要程序员自己编写，然后通过 SQL 语句映射文件，将 SQL 所需的参数，以及返回的结果字段映射到指定 POJO。因此，MyBatis 成为了“全自动”ORM 的一种有益补充。

::: warning 为什么不选择hibernate？
- 缺乏灵活性。
- 多表联查不友好，只在单表查询上有优势。
- 额外的学习成本。因为在不同数据库有不同的“方言”，所以使用hibernate需要学习HQL。
:::

