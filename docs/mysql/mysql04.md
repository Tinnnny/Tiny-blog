# 约束
约束对表中的数据进行限定，保证数据的正确性、有效性和完整性。	
::: tip 约束分类：
1. 主键约束：primary key
2. 非空约束：not null
3. 唯一约束：unique
4. 外键约束：foreign key
:::

## 非空约束
1. 创建表时添加约束
```sql
	CREATE TABLE stu(
		id INT,
		NAME VARCHAR(20) NOT NULL -- name为非空
	);
```
2. 创建表完后，添加非空约束
```sql
ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;
```
3. 删除name的非空约束
```sql
ALTER TABLE stu MODIFY NAME VARCHAR(20);
```
​	
## 唯一约束
1. 创建表时，添加唯一约束
```sql
CREATE TABLE stu(
		id INT,
		phone_number VARCHAR(20) UNIQUE -- 添加了唯一约束
);
```
> 注意mysql中，唯一约束限定的列的值可以有多个null

2. 删除唯一约束
```sql
ALTER TABLE stu DROP INDEX phone_number;
```

3. 在创建表后，添加唯一约束
```sql
ALTER TABLE stu MODIFY phone_number VARCHAR(20) UNIQUE;		
```

## 主键约束
主键就是表中记录的唯一标识,一张表只能有一个字段为主键。主键约束的含义就是主键非空且唯一。

1. 在创建表时，添加主键约束
```sql
create table stu(
		id int primary key,-- 给id添加主键约束
		name varchar(20)
);
```
2. 删除主键
```sql
-- 错误 alter table stu modify id int ;
ALTER TABLE stu DROP PRIMARY KEY;
```
3. 创建完表后，添加主键
```sql
ALTER TABLE stu MODIFY id INT PRIMARY KEY;
```
4. 自动增长：如果某一列是数值类型的，使用` auto_increment` 可以来完成值得自动增长
```sql
create table stu(
    id int primary key auto_increment,-- 给id添加主键约束
    name varchar(20)
);
//删除自动增长
ALTER TABLE stu MODIFY id INT;
//添加自动增长
ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
```

## 外键约束
foreign key,让表于表产生关系，从而保证数据的正确性。
1. 在创建表时，可以添加外键，外键名只要不重复自己定义。
```sql
create table 表名(
    ....
    外键列
    constraint 外键名称 foreign key (外键列名称) references 主表名称(主表列名称)
);
```

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9rlkywuqkj30tb091gs9.jpg">
</div>

2. 删除外键
```sql
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```
3. 创建表之后，添加外键
```sql
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);
```		
4. 级联操作
有外键约束的两个表，改变其中一个表的数据时，另一个表的数据自动改变。
```sql
//添加级联操作
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 
        FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称) ON UPDATE CASCADE ON DELETE CASCADE  ;
```
::: tip 分类：
1. 级联更新：ON UPDATE CASCADE 
2. 级联删除：ON DELETE CASCADE 
:::