---
title: "Linux 用户和组管理"
date: 2019-11-2 14:17:57
---
# Linux 用户和组管理
## 概述
Linux 操作系统是一个多用户操作系统，它允许多用户同时登录到系统上并使用资源。系统会根据账户来区分每个用户的文件，进程，任务和工作环境，使得每个用户工作都不受干扰。
## 使用 Root 用户
在实际生产操作中，我们基本上都是使用超级管理员账户操作 Linux 系统，也就是 Root 用户，Linux 系统默认是关闭 Root 账户的，我们需要为 Root 用户设置一个初始密码以方便我们使用。
::: danger 步骤：
1. 设置 Root 账户密码
```
sudo passwd root
```
2. 切换到 Root
```
su
```
3. 设置允许远程登录 Root
```
vi /etc/ssh/sshd_config
# Authentication:
LoginGraceTime 120
#PermitRootLogin without-password     //注释此行
PermitRootLogin yes                             //加入此行
StrictModes yes
# 重启服务
service ssh restart
```
:::

::: tip 用户账户说明
- 普通用户： 普通用户在系统上的任务是进行普通操作
- 超级管理员： 管理员在系统上的任务是对普通用户和整个系统进行管理。对系统具有绝对的控制权，能够对系统进行一切操作。用 root 表示，root 用户在系统中拥有最高权限，默认下 Ubuntu 用户的 root 用户是不能登录的。
- 安装时创建的系统用户： 此用户创建时被添加到 admin 组中，在 Ubuntu 中，admin 组中的用户默认是可以使用 sudo 命令来执行只有管理员才能执行的命令的。如果不使用 sudo 就是一个普通用户。
:::

::: tip 组账户说明
- 私有组： 当创建一个用户时没有指定属于哪个组，Linux 就会建立一个与用户同名的私有组，此私有组只含有该用户。
- 标准组： 当创建一个用户时可以选定一个标准组，如果一个用户同时属于多个组时，登录后所属的组为主组，其他的为附加组。
:::

## 账户管理常用命令
### 增加用户
```
useradd 用户名
useradd -u (UID号)
useradd -p (口令)
useradd -g (分组)
useradd -s (SHELL)
useradd -d (用户目录)
```
如：useradd lusifer

增加用户名为 lusifer 的账户

### 修改用户
```
usermod -u (新UID)
usermod -d (用户目录)
usermod -g (组名)
usermod -s (SHELL)
usermod -p (新口令)
usermod -l (新登录名)
usermod -L (锁定用户账号密码)
usermod -U (解锁用户账号)
```
如：usermod -u 1024 -g group2 -G root lusifer

将 lusifer 用户 uid 修改为 1024，默认组改为系统中已经存在的 group2，并且加入到系统管理员组

### 删除用户
```
userdel 用户名 (删除用户账号)
userdel -r 删除账号时同时删除目录
```
如：userdel -r lusifer

删除用户名为 lusifer 的账户并同时删除 lusifer 的用户目录

### 组账户维护
```
groupadd 组账户名 (创建新组)
groupadd -g 指定组GID
groupmod -g 更改组的GID
groupmod -n 更改组账户名
groupdel 组账户名 (删除指定组账户)
```
### 口令维护
```
passwd 用户账户名 (设置用户口令)
passwd -l 用户账户名 (锁定用户账户)
passwd -u 用户账户名 (解锁用户账户)
passwd -d 用户账户名 (删除账户口令)
gpasswd -a 用户账户名 组账户名 (将指定用户添加到指定组)
gpasswd -d 用户账户名 组账户名 (将用户从指定组中删除)
gpasswd -A 用户账户名 组账户名 (将用户指定为组的管理员)
```
### 用户和组状态
```
su 用户名(切换用户账户)
id 用户名(显示用户的UID，GID)
whoami (显示当前用户名称)
groups (显示用户所属组)
```