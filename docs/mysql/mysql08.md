# 事务
概念：如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败。
			
::: tip 操作：
1. 开启事务： start transaction;
2. 回滚：rollback;
3. 提交：commit;
:::
例子
```sql
CREATE TABLE account (
    id INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(10),
    balance DOUBLE
);
-- 添加数据
INSERT INTO account (NAME, balance) VALUES ('zhangsan', 1000), ('lisi', 1000);


​			
SELECT * FROM account;
UPDATE account SET balance = 1000;
-- 张三给李四转账 500 元

-- 0. 开启事务
START TRANSACTION;
-- 1. 张三账户 -500

UPDATE account SET balance = balance - 500 WHERE NAME = 'zhangsan';
-- 2. 李四账户 +500
-- 出错了...
UPDATE account SET balance = balance + 500 WHERE NAME = 'lisi';

-- 发现执行没有问题，提交事务
COMMIT;

-- 发现出问题了，回滚事务
ROLLBACK;
```
**MySQL数据库中事务默认自动提交，Oracle 数据库默认是手动提交事务**
			
::: tip 事务提交的两种方式：
* 自动提交：一条DML(增删改)语句会自动提交一次事务。
* 手动提交：需要先开启事务，再提交
:::

::: tip 修改事务的默认提交方式：
* 查看事务的默认提交方式：SELECT @@autocommit; -- 1 代表自动提交  0 代表手动提交
* 修改默认提交方式： set @@autocommit = 0;
:::

## 事务的四大特征：
1. 原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败。
2. 持久性：当事务提交或回滚后，数据库会持久化的保存数据。
3. 隔离性：多个事务之间。相互独立。
4. 一致性：事务操作前后，数据总量不变
## 事务的隔离级别（了解）
多个事务之间隔离的，相互独立的。但是如果多个事务操作同一批数据，则会引发一些问题，设置不同的隔离级别就可以解决这些问题。
::: tip 存在问题：
1. 脏读：一个事务，读取到另一个事务中没有提交的数据
2. 不可重复读(虚读)：在同一个事务中，两次读取到的数据不一样。
3. 幻读：一个事务操作(DML)数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改。
:::

::: tip 隔离级别：
1. `read uncommitted`：读未提交---产生的问题：脏读、不可重复读、幻读
2. `read committed`：读已提交（Oracle）---产生的问题：不可重复读、幻读
3. `repeatable read`：可重复读 （MySQL默认）---产生的问题：幻读
4. `serializable`：串行化---可以解决所有的问题
:::
> 注意：隔离级别从小到大安全性越来越高，但是效率越来越低

* 数据库查询隔离级别： `select @@tx_isolation;`
* 数据库设置隔离级别：`set global transaction isolation level  级别字符串;`

演示
```sql
set global transaction isolation level read uncommitted;
start transaction;
-- 转账操作
update account set balance = balance - 500 where id = 1;
update account set balance = balance + 500 where id = 2;
```
