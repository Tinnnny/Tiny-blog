# 数据库概述
## 数据库的基本概念
数据库(DataBase)是用于存储和管理数据的仓库。其有以下特点：
1. 持久化存储数据的。其实数据库就是一个文件系统
2. 方便存储和管理数据
3. 使用了统一的方式操作数据库 -- SQL

## MySQL数据库软件
### MySQL卸载
1. 在安装目录找到my.ini,复制其中的datadir="C:/ProgramData/MySQL/MySQL Server 5.5/Data/"
2. 卸载MySQL
3. 根据复制目录删除C:/ProgramData目录下的MySQL文件夹。
		
### MySQL配置
::: tip MySQL服务启动方式有三种
1. 手动。
2. cmd--> services.msc 打开服务的窗口
3. 使用管理员打开cmd
  * net start mysql : 启动mysql的服务
  * net stop mysql:关闭mysql服务
:::

### MySQL登录
1. mysql -uroot -p密码
2. mysql -hip -uroot -p连接目标的密码
3. mysql --host=ip --user=root --password=连接目标的密码

### MySQL退出
1. exit
2. quit
	
### MySQL目录结构
1. MySQL安装目录：basedir="D:/develop/MySQL/",配置文件 my.ini
2. MySQL数据目录：datadir="C:/ProgramData/MySQL/MySQL Server 5.5/Data/"