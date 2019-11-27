---
title: "Docker Compose 部署 Harbor"
date: 2019年11月4日13:08:43
---
# Docker Compose 部署 Harbor
## 什么是 Harbor
Harbor 是一个用于存储和分发 Docker 镜像的企业级 Registry 服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源 Docker Distribution。作为一个企业级私有 Registry 服务器，Harbor 提供了更好的性能和安全。提升用户使用 Registry 构建和运行环境传输镜像的效率。Harbor 支持安装在多个 Registry 节点的镜像资源复制，镜像全部保存在私有 Registry 中， 确保数据和知识产权在公司内部网络中管控。另外，Harbor 也提供了高级的安全特性，诸如用户管理，访问控制和活动审计等。

::: tip 特性
- 基于角色的访问控制 ： 用户与 Docker 镜像仓库通过 “项目” 进行组织管理，一个用户可以对多个镜像仓库在同一命名空间（project）里有不同的权限。
- 镜像复制 ： 镜像可以在多个 Registry 实例中复制（同步）。尤其适合于负载均衡，高可用，混合云和多云的场景。
- 图形化用户界面 ： 用户可以通过浏览器来浏览，检索当前 Docker 镜像仓库，管理项目和命名空间。
- AD/LDAP 支持 ： Harbor 可以集成企业内部已有的 AD/LDAP，用于鉴权认证管理。
- 审计管理 ： 所有针对镜像仓库的操作都可以被记录追溯，用于审计管理。
- 国际化 ： 已拥有英文、中文、德文、日文和俄文的本地化版本。更多的语言将会添加进来。
- RESTful API ： RESTful API 提供给管理员对于 Harbor 更多的操控，使得与其它管理软件集成变得更容易。
- 部署简单 ： 提供在线和离线两种安装工具， 也可以安装到 vSphere 平台 (OVA 方式) 虚拟设备。
:::

::: tip 组件
- Proxy： Harbor 的 registry, UI, token 等服务，通过一个前置的反向代理统一接收浏览器、Docker 客户端的请求，并将请求转发给后端不同的服务。
- Registry： 负责储存 Docker 镜像，并处理 docker push/pull 命令。由于我们要对用户进行访问控制，即不同用户对 Docker image 有不同的读写权限，Registry 会指向一个 token 服务，强制用户的每次 docker pull/push 请求都要携带一个合法的 token, Registry 会通过公钥对 token 进行解密验证。
- Core services： 这是 Harbor 的核心功能，主要提供以下服务：
  - UI： 提供图形化界面，帮助用户管理 registry 上的镜像（image）, 并对用户进行授权。
  - WebHook： 为了及时获取 registry 上 image 状态变化的情况， 在 Registry 上配置 webhook，把状态变化传递给 UI 模块。
  - Token： 负责根据用户权限给每个 docker push/pull 命令签发 token. Docker 客户端向 - Registry 服务发起的请求，如果不包含 token，会被重定向到这里，获得 token 后再重新向 Registry 进行请求。
- Database： 为 core services 提供数据库服务，负责储存用户权限、审计日志、Docker image 分组信息等数据。
- Job Services： 提供镜像远程复制功能，可以把本地镜像同步到其他 Harbor 实例中。
- Log Collector： 为了帮助监控 Harbor 运行，负责收集其他组件的 log，供日后进行分析。
:::

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m0xnv95ej30ih0993zb.jpg">
</div>

## 安装 Harbor
官方 GitHub 上下载最新离线安装版（我已经下载并放置在群分享的 Linux 目录下）并上传至服务器
### 解压安装包
```
tar -zxvf harbor-offline-installer-v1.8.0.tgz
# 输出如下
harbor/harbor.v1.8.0.tar.gz
harbor/prepare
harbor/LICENSE
harbor/install.sh
harbor/harbor.yml
```

### 修改配置文件
```
vi harbor.yml
# 修改为域名或你服务器 IP
hostname: 192.168.141.150
```
### 执行安装脚本
```
./install.sh
# 输出如下
[Step 0]: checking installation environment ...
Note: docker version: 18.09.6
Note: docker-compose version: 1.24.0
[Step 1]: loading Harbor images ...
23d9f72a5270: Loading layer [==================================================>]  33.25MB/33.25MB
1d4a1da12c02: Loading layer [==================================================>]  50.51MB/50.51MB
...
✔ ----Harbor has been installed and started successfully.----
Now you should be able to visit the admin portal at http://192.168.141.150. 
For more details, please visit https://github.com/goharbor/harbor .
```
### 验证安装是否成功
通过浏览器访问 `http://192.168.141.150` ，看到登录页面

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m10wsy63j31hc0l0gmd.jpg">
</div>

输入账号 admin，密码 Harbor12345，登录成功后

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m11atiuuj31hc0kodgy.jpg">
</div>

### Harbor 启动和停止
Harbor 的日常运维管理是通过 docker-compose 来完成的，Harbor 本身有多个服务进程，都放在 docker 容器之中运行，我们可以通过 docker ps 命令查看。
```
docker ps | grep goharbor
# 输出如下
07b401504357        goharbor/nginx-photon:v1.8.0                        "nginx -g 'daemon of…"   23 minutes ago      Up 23 minutes (healthy)   0.0.0.0:80->80/tcp          nginx
050f39a147bc        goharbor/harbor-portal:v1.8.0                       "nginx -g 'daemon of…"   23 minutes ago      Up 23 minutes (healthy)   80/tcp                      harbor-portal
305077bc0a3e        goharbor/harbor-jobservice:v1.8.0                   "/harbor/start.sh"       23 minutes ago      Up 23 minutes                                         harbor-jobservice
4eb33b09b268        goharbor/harbor-core:v1.8.0                         "/harbor/start.sh"       23 minutes ago      Up 23 minutes (healthy)                               harbor-core
e9efb7a6abf9        goharbor/registry-photon:v2.7.1-patch-2819-v1.8.0   "/entrypoint.sh /etc…"   24 minutes ago      Up 23 minutes (healthy)   5000/tcp                    registry
f9bc75d47752        goharbor/harbor-registryctl:v1.8.0                  "/harbor/start.sh"       24 minutes ago      Up 23 minutes (healthy)                               registryctl
76d33d1755f6        goharbor/redis-photon:v1.8.0                        "docker-entrypoint.s…"   24 minutes ago      Up 23 minutes             6379/tcp                    redis
3870b3b93f46        goharbor/harbor-db:v1.8.0                           "/entrypoint.sh post…"   24 minutes ago      Up 23 minutes (healthy)   5432/tcp                    harbor-db
6e848e4d8bc2        goharbor/harbor-log:v1.8.0                          "/bin/sh -c /usr/loc…"   24 minutes ago      Up 24 minutes (healthy)   127.0.0.1:1514->10514/tcp   harbor-log
```

```
# 启动
docker-compose start
# 停止
docker-comose stop
# 重启
docker-compose restart
```
说明：
- nginx： nginx 负责流量转发和安全验证，对外提供的流量都是从 nginx 中转，所以开放 https 的 443 端口，它将流量分发到后端的 ui 和正在 docker 镜像存储的 docker registry。
- harbor-jobservice： harbor-jobservice 是 harbor 的 job 管理模块，job 在 harbor 里面主要是为了镜像仓库之前同步使用的；
- harbor-ui： harbor-ui 是 web 管理页面，主要是前端的页面和后端 CURD 的接口；
- registry： registry 就是 docker 原生的仓库，负责保存镜像。
- harbor-adminserver： harbor-adminserver 是 harbor 系统管理接口，可以修改系统配置以及获取系统信息。
- harbor-db： harbor-db 是 harbor 的数据库，这里保存了系统的 job 以及项目、人员权限管理。由于本 harbor 的认证也是通过数据，在生产环节大多对接到企业的 ldap 中；
- harbor-log： harbor-log 是 harbor 的日志服务，统一管理 harbor 的日志。通过 inspect 可以看出容器统一将日志输出的 syslog。

这几个容器通过 Docker link 的形式连接在一起，这样，在容器之间可以通过容器名字互相访问。对终端用户而言，只需要暴露 proxy （即 Nginx）的服务端口。

### 配置客户端
在 `/etc/docker/daemon.json` 中增加如下内容（如果文件不存在请新建该文件）
```
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ],
  "insecure-registries": [
    "192.168.141.150"
  ]
}
```
> 注意： 该文件必须符合 JSON 规范，否则 Docker 将不能启动。

重启服务
```
systemctl daemon-reload
systemctl restart docker
```
### 检查客户端配置是否生效
使用 docker info 命令手动检查，如果从配置中看到如下内容，说明配置成功
```
Insecure Registries:
 192.168.141.150
 127.0.0.0/8
```

### Harbor 上传镜像
#### 新建项目
我们以推送 Nginx 为例，首先需要在 Harbor 上创建一个 公开/私有 的项目
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m15tu3xuj31hc0hemyd.jpg">
</div>

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m165o4v8j31hc0ltt9v.jpg">
</div>

#### 推送镜像
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m16n9vr4j31hc0hsabj.jpg">
</div>

```
# 在项目中标记镜像
docker tag nginx 192.168.141.150/myshop/nginx:latest
# 登录 Harbor
docker login 192.168.141.150 -u admin -p Harbor12345
# 推送镜像到项目
docker push 192.168.141.150/myshop/nginx:latest
```

#### 查看镜像
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m17hr1pxj31hc0fv0tq.jpg">
</div>

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m17o60hyj31hc0flq45.jpg">
</div>

#### Harbor 下载镜像
在其它机器下载镜像只需要配置好客户端即可
```
docker pull 192.168.141.150/myshop/nginx:latest
```