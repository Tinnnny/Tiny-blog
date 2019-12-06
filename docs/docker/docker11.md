---
title: "Docker Compose 部署 Nexus"
date: 2019年11月4日13:08:43
---
# Docker Compose 部署 Nexus
## 什么是 Nexus
Nexus 是一个强大的 Maven 仓库管理器，极大地简化了内部仓库的维护和外部仓库的访问。2016 年 4 月 6 日 Nexus 3.0 版本发布，相较 2.x 版本有了很大的改变
- 对低层代码进行了大规模重构，提升性能，增加可扩展性以及改善用户体验。
- 升级界面，极大的简化了用户界面的操作和管理。
- 提供新的安装包，让部署更加简单。
- 增加对 Docker, NeGet, npm, Bower 的支持。
- 提供新的管理接口，以及增强对自动任务的管理。

## 部署 Nexus
我们使用 Docker 来安装和运行 Nexus，docker-compose.yml 配置如下：
```
version: '3.1'
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 80:8081
    volumes:
      - data:/nexus-data
volumes:
  data:
```
## 验证安装是否成功
- 地址： http://ip:port/
- 用户名： admin
- 密码： admin123

> 注意： 新版本密码在 `cat /var/lib/docker/volumes/nexus_data/_data/admin.password`

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8lx5e3ge8j31h80jldhn.jpg">
</div>

## 在项目中使用 Nexus
### 配置认证信息
在` Maven settings.xml `中添加 Nexus 认证信息 (servers 节点下)
```
<server>
  <id>nexus-releases</id>
  <username>admin</username>
  <password>admin123</password>
</server>
<server>
  <id>nexus-snapshots</id>
  <username>admin</username>
  <password>admin123</password>
</server>
```

### Snapshots 与 Releases 的区别
- nexus-releases： 用于发布 Release 版本
- nexus-snapshots： 用于发布 Snapshot 版本（快照版）

Release 版本与 Snapshot 定义
```
Release: 1.0.0/1.0.0-RELEASE
Snapshot: 1.0.0-SNAPSHOT
```
- 在项目 pom.xml 中设置的版本号添加 SNAPSHOT 标识的都会发布为 SNAPSHOT 版本，没有 SNAPSHOT 标识的都会发布为 RELEASE 版本。
- SNAPSHOT 版本会自动加一个时间作为标识，如：1.0.0-SNAPSHOT 发布后为变成 1.0.0-SNAPSHOT-20180522.123456-1.jar

### 配置自动化部署
在 pom.xml 中添加如下代码
```
<distributionManagement>  
  <repository>  
    <id>nexus-releases</id>  
    <name>Nexus Release Repository</name>  
    <url>http://127.0.0.1:8081/repository/maven-releases/</url>  
  </repository>  
  <snapshotRepository>  
    <id>nexus-snapshots</id>  
    <name>Nexus Snapshot Repository</name>  
    <url>http://127.0.0.1:8081/repository/maven-snapshots/</url>  
  </snapshotRepository>  
</distributionManagement> 
```

::: tip 注意事项
- ID 名称必须要与 settings.xml 中 Servers 配置的 ID 名称保持一致
- 项目版本号中有 SNAPSHOT 标识的，会发布到 Nexus Snapshots Repository， 否则发布到 Nexus Release Repository，并根据 ID 去匹配授权账号
:::

### 部署到仓库
```
mvn deploy
```
### 配置代理仓库
```
<repositories>
    <repository>
        <id>nexus</id>
        <name>Nexus Repository</name>
        <url>http://127.0.0.1:8081/repository/maven-public/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>nexus</id>
        <name>Nexus Plugin Repository</name>
        <url>http://127.0.0.1:8081/repository/maven-public/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </pluginRepository>
</pluginRepositories>
```

##　扩展阅读
### 手动上传第三方依赖
Nexus 3.1.x 开始支持页面上传第三方依赖功能，以下为手动上传命令
```
# 如第三方JAR包：aliyun-sdk-oss-2.2.3.jar
mvn deploy:deploy-file 
  -DgroupId=com.aliyun.oss 
  -DartifactId=aliyun-sdk-oss 
  -Dversion=2.2.3 
  -Dpackaging=jar 
  -Dfile=D:\aliyun-sdk-oss-2.2.3.jar 
  -Durl=http://127.0.0.1:8081/repository/maven-3rd/ 
  -DrepositoryId=nexus-releases
```

::: tip 注意事项
- 建议在上传第三方 JAR 包时，创建单独的第三方 JAR 包管理仓库，便于管理有维护。（maven-3rd）
- -DrepositoryId=nexus-releases 对应的是 settings.xml 中 Servers 配置的 ID 名称。（授权）