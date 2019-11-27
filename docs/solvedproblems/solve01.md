---
title: "SQLyog导入sql数据文件报错" 
date: 2019-10-22
---

# 解决SQLyog导入sql数据文件报错
在mysql的安装根目录下找到my.ini文件，编辑修改参数设置。
## 具体的操作步骤
1. 在[mysqld]下添加：`max_allowed_packet=768M` （参数大小自己定）。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8cpe3cmm9j30nr0ct3yl.jpg">
</div>

2. 修改后保存，重启mysql服务。（以管理员运行cmd，`net stop mysql`关闭，`net start mysql`启动）
3. 查看是否修改完成。`mysql -uroot -p`命令登录mysql，再执行`show variables like '%max_allowed_packet%';`查询`max_allowed_packet`的value值。
