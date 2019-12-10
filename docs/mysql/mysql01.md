# SQL
SQL(Structured Query Language：结构化查询语言)其实就是定义了操作所有关系型数据库的规则。每一种数据库操作的方式存在不一样的地方，称为“方言”。

## SQL语法
::: tip SQL通用语法
1. SQL 语句可以单行或多行书写，以分号结尾。
2. 可使用空格和缩进来增强语句的可读性。
3. MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
4. 3种注释
  * 单行注释: -- 注释内容 或 # 注释内容(mysql 特有) 
  * 多行注释: /* 注释 */
:::
## SQL分类
1) `DDL(Data Definition Language)数据定义语言`:用来定义数据库对象：数据库，表，列等。关键字：create, drop,alter 等
2) `DML(Data Manipulation Language)数据操作语言`:用来对数据库中表的数据进行增删改。关键字：insert, delete, update 等
3) `DQL(Data Query Language)数据查询语言`:用来查询数据库中表的记录(数据)。关键字：select, where 等
4) `DCL(Data Control Language)数据控制语言(了解)`:用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT， REVOKE 等


## DML：增删改表中数据
### 添加数据：
```sql
insert into 表名(列名1,列名2,...列名n) values(值1,值2,...值n);
```
::: warning 注意：
1. 列名和值要一一对应。
2. 如果表名后，不定义列名，则默认给所有列添加值`insert into 表名 values(值1,值2,...值n);`
3. 除了数字类型，其他类型需要使用引号(单双都可以)引起来
:::
### 删除数据：
```sql
delete from 表名 [where 条件]
```
> 注意：
> 1. 如果不加条件，则删除表中所有记录。
> 2. 如果要删除所有记录
>   - delete from 表名; -- 不推荐使用。有多少条记录就会执行多少次删除操作
>   - TRUNCATE TABLE 表名; -- 推荐使用，效率更高 先删除表，然后再创建一张一样的表。

### 修改数据：
```sql
update 表名 set 列名1 = 值1, 列名2 = 值2,... [where 条件];
```
> 注意： 如果不加任何条件，则会将表中所有记录全部修改。


## DCL
DBA：数据库管理员

### 管理用户
1. 添加用户：
```sql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```
2. 删除用户：
```sql
DROP USER '用户名'@'主机名';
```
3. 修改用户密码
```sql
  UPDATE USER SET PASSWORD = PASSWORD('新密码') WHERE USER = '用户名';
  UPDATE USER SET PASSWORD = PASSWORD('abc') WHERE USER = 'lisi';
  
  SET PASSWORD FOR '用户名'@'主机名' = PASSWORD('新密码');
  SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
```
**mysql中忘记了root用户的密码？**
1. cmd -- > net stop mysql 停止mysql服务(需要管理员运行该cmd)
2. 使用无验证方式启动mysql服务： mysqld --skip-grant-tables
3. 打开新的cmd窗口,直接输入mysql命令，敲回车。就可以登录成功
4. use mysql;
5. update user set password = password('你的新密码') where user = 'root';
6. 关闭两个窗口
7. 打开任务管理器，手动结束mysqld.exe 的进程
8. 启动mysql服务
9. 使用新密码登录。

4. 查询用户：
```sql
-- 1. 切换到mysql数据库
USE myql;
-- 2. 查询user表
SELECT * FROM USER;
```  
> 通配符： % 表示可以在任意主机使用用户登录数据库

### 权限管理：
1. 查询权限
```sql
-- 查询权限
SHOW GRANTS FOR '用户名'@'主机名';
SHOW GRANTS FOR 'lisi'@'%';
```
2. 授予权限
```sql
-- 授予权限
grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';
-- 给张三用户授予所有权限，在任意数据库任意表上
GRANT ALL ON *.* TO 'zhangsan'@'localhost';
```
3. 撤销权限
```sql
-- 撤销权限：
revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';
REVOKE UPDATE ON db3.`account` FROM 'lisi'@'%';
```