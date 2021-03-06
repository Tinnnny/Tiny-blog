# SQL DDL:操作数据库、表
## 操作数据库
操作数据库共5种方式,CRUD(增删改查)和使用数据库。
### C(Create):创建
* 创建数据库：
  * create database 数据库名称;
* 创建数据库，判断不存在，再创建：
  * create database if not exists 数据库名称;
* 创建数据库，并指定字符集
  * create database 数据库名称 character set 字符集名;
* 创建db4数据库，判断是否存在，并制定字符集为gbk
  * create database if not exists db4 character set gbk;


### R(Retrieve)：查询
* 查询所有数据库的名称:
  * show databases;
* 查询某个数据库的字符集:查询某个数据库的创建语句
  * show create database 数据库名称;

### U(Update):修改
* 修改数据库的字符集
  * alter database 数据库名称 character set 字符集名称;

### D(Delete):删除
* 删除数据库
  * drop database 数据库名称;
* 判断数据库存在，存在再删除
  * drop database if exists 数据库名称;

### 使用数据库
* 查询当前正在使用的数据库名称
  * select database();
* 使用数据库
  * use 数据库名称;

## 操作表
### C(Create):创建

```sql
create table 表名(
    列名1 数据类型1,
    列名2 数据类型2,
    ....
    列名n 数据类型n
);
```
> 注意：最后一列，不需要加逗号（,）

创建表
```java
create table student(
		id int,
		name varchar(32),
		age int ,
		score double(4,1),
		birthday date,
		insert_time timestamp
);
```
复制表：
```sql
create table 表名 like 被复制的表名;
```	  
::: tip 数据库类型：
1. int：整数类型,age int,
2. double:小数类型,score double(5,2)
3. date:日期，只包含年月日，yyyy-MM-dd
4. datetime:日期，包含年月日时分秒,yyyy-MM-dd HH:mm:ss
5. timestamp:时间错类型,包含年月日时分秒,yyyy-MM-dd HH:mm:ss,如果将来不给这个字段赋值，或赋值为null，则默认使用当前的系统时间，来自动赋值
6. varchar：字符串。`name varchar(20)`:姓名最大20个字符,zhangsan8个字符,张三,2个字符
:::

### R(Retrieve)：查询
* 查询某个数据库中所有的表名称，show tables;
* 查询表结构，desc 表名;
### U(Update):修改
1. 修改表名`alter table 表名 rename to 新的表名;`
2. 修改表的字符集`alter table 表名 character set 字符集名称;`
3. 添加一列`alter table 表名 add 列名 数据类型;`
4. 修改列名称类型`alter table 表名 change 列名 新列别 新数据类型;`,`alter table 表名 modify 列名 新数据类型;`
5. 删除列`alter table 表名 drop 列名;`

### D(Delete):删除
* drop table 表名;
* drop table  if exists 表名 ;

### 客户端图形化工具
SQLYog
