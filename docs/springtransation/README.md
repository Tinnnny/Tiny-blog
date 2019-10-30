---
title: Spring的事务管理
date: 2019年10月29日17:47:27
---
# Spring的事务管理
## 概述
事务原本是数据库中的概念，用于数据访问层。但一般情况下，需要将事务提升到业务层，即 Service 层。这样做是为了能够使用事务的特性来管理具体的业务。Spring 事务的默认回滚方式是：发生运行时异常回滚。
::: tip 在 Spring 中通常可以通过以下三种方式来实现对事务的管理：
- 使用 Spring 的事务代理工厂管理事务（已过时）
- 使用 Spring 的事务注解管理事务
- 使用 AspectJ 的 AOP 配置管理事务
:::

## 事务定义接口
事务定义接口 `TransactionDefinition` 中定义了事务描述相关的三类常量：`事务隔离级别`、`事务传播行为`、`事务默认超时时限`，及对它们的操作。

::: tip 事务的四种隔离级别:
- DEFAULT：采用 DB 默认的事务隔离级别。MySql 默认为 REPEATABLE_READ；Oracle 默认为：READ_COMMITTED；
- READ_UNCOMMITTED：读未提交。未解决任何并发问题。
- READ_COMMITTED：读已提交。解决脏读，存在不可重复读与幻读。
- REPEATABLE_READ：可重复读。解决脏读、不可重复读。存在幻读。
- SERIALIZABLE：串行化。不存在并发问题。
:::


<span style="font-size: 25px;margin-right: 200px;margin-left: 100px;">脏读</span><span style="font-size: 25px;margin-right: 150px;">不可重复读</span><span style="font-size: 25px;">幻读</span>

事务A | 事务B|事务A | 事务B|事务A | 事务B|
---|---|---|---|---|---|
TbUser  A.a() | 用TbUser B.b()操作TbContent|TbUser A.a() | A.a()|List(TbUser) | add tbUser|
读取TbUser id=1 | 修改了id=2|读取TbUser id=1 | TbUser id=2|TbUser.size=10| add tbUser|
读取TbUser id=2 | 报错回滚| .| commit|.| 11|
读取TbUser id=1 | |读取TbUser id=2 | |TbUser.size=11 |.|

所谓事务传播行为是指，处于不同事务中的方法在相互调用时，执行期间事务的维护情况。如，A 事务中的方法 a() 调用 B 事务中的方法 b()，在调用执行期间事务的维护情况，就称为事务传播行为。事务传播行为是加在方法上的。

::: tip 事务的七种传播行为:
- `REQUIRED`：指定的方法必须在事务内执行。若当前存在事务，就加入到当前事务中；若当前没有事务，则创建一个新事务。这种传播行为是最常见的选择，也是 Spring 默认的事务传播行为。
- `SUPPORTS`：指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行。
- `MANDATORY`：指定的方法必须在当前事务内执行，若当前没有事务，则直接抛出异常。
- `REQUIRES_NEW`：总是新建一个事务，若当前存在事务，就将当前事务挂起，直到新事务执行完毕。
- `NOT_SUPPORTED`：指定的方法不能在事务环境中执行，若当前存在事务，就将当前事务挂起。
- `NEVER`：指定的方法不能在事务环境下执行，若当前存在事务，就直接抛出异常。
- `NESTED`：指定的方法必须在事务内执行。若当前存在事务，则在嵌套事务内执行；若当前没有事务，则创建一个新事务。
:::

隔离级别需要记住，传播行为只要记住`required`就行。