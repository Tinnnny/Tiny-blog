---
title: "Kubernetes 安装前的准备"
date: 2019年11月4日15:52:51
---
# Kubernetes 安装前的准备
## 概述
本次安装采用 Ubuntu Server X64 18.04 LTS 版本安装 kubernetes 集群环境，集群节点为 1 主 2 从模式，此次对虚拟机会有些基本要求，如下：

- OS：Ubuntu Server X64 18.04 LTS（16.04 版本步骤相同，再之前则不同）
- CPU：最低要求，1 CPU 2 核
- 内存：最低要求，2 GB
- 磁盘：最低要求，20 GB

## 节点配置
| 主机名                  | IP                 | 角色     | 系统                   | CPU/内存 | 磁盘  |
|----------------------|--------------------|--------|----------------------|--------|-----|
| kubernetes\-master   | 192\.168\.27\.110 | Master | Ubuntu Server 18\.04 | 2 核 2G | 20G |
| kubernetes\-node\-01 | 192\.168\.27\.120 | Node   | Ubuntu Server 18\.04 | 2 核 4G | 20G |
| kubernetes\-node\-02 | 192\.168\.27\.121 | Node   | Ubuntu Server 18\.04 | 2 核 4G | 20G |

## 统一环境配置
> 注意： 以下步骤请在制作 VMware 镜像时一并完成，避免逐台安装的痛苦

### 关闭交换空间
```
swapoff -a
```
输入以下命令可以查看是否关闭成功。
```
free -h
# 输出
            total        used        free      shared  buff/cache   available
Mem:           1.9G        276M        1.0G        1.2M        689M        1.5G
Swap:            0B          0B          0B
```
### 避免开机启动交换空间
```
# 注释 swap 开头的行
vi /etc/fstab
```
### 关闭防火墙
```
ufw disable
```
### 配置 DNS
```
# 取消 DNS 行注释，并增加 DNS 配置如：114.114.114.114，修改后重启下计算机
vi /etc/systemd/resolved.conf
```
### 安装 Docker
```
# 更新软件源
sudo apt-get update
# 安装所需依赖
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# 安装 GPG 证书
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# 新增软件源信息
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
# 再次更新软件源
sudo apt-get -y update
# 安装 Docker CE 版
sudo apt-get -y install docker-ce
```
### 配置 Docker 加速器
> 注意： 国内镜像加速器可能会很卡，请替换成你自己阿里云镜像加速器

在 /etc/docker/daemon.json 中写入如下内容（以下配置修改 cgroup 驱动为 systemd，满足 K8S 建议）
```
{
  "registry-mirrors": [
    "https://o53x0kmt.mirror.aliyuncs.com"
  ]
}
```
重启docker,并输入`docker info`命令查看是否设置成功。
```
systemctl restart docker
```
### 安装 Kubernetes 必备工具
安装三个 Kubernetes 必备工具，分别为 kubeadm，kubelet，kubectl
```
# 安装系统工具
apt-get update && apt-get install -y apt-transport-https
# 安装 GPG 证书
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add -
# 写入软件源；注意：我们用系统代号为 bionic，但目前阿里云不支持，所以沿用 16.04 的 xenial
cat << EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
EOF
# 安装
apt-get update && apt-get install -y kubelet kubeadm kubectl
```

### 同步时间
- 设置时区
```
dpkg-reconfigure tzdata
```
- 选择 Asia（亚洲）
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m2dhvzq1j31fu0gjq38.jpg">
</div>

- 选择 Shanghai（上海）

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g8m2e2bghtj30nn0o0aaj.jpg">
</div>

- 时间同步
```
# 安装 ntpdate
apt-get install ntpdate
# 设置系统时间与网络时间同步（cn.pool.ntp.org 位于中国的公共 NTP 服务器）
ntpdate cn.pool.ntp.org
# 将系统时间写入硬件时间
hwclock --systohc
```
- 确认时间
```
date
# 输出如下（自行对照与系统时间是否一致）
Mon Nov  4 21:04:46 CST 2019
```

### 修改 cloud.cfg
主要作用是防止重启后主机名还原
```
vi /etc/cloud/cloud.cfg
# 该配置默认为 false，修改为 true 即可
preserve_hostname: true
```

## 单独节点配置
> 注意： 为 Master 和 Node 节点单独配置对应的 IP 和 主机名

### 配置 IP
编辑 vi /etc/netplan/50-cloud-init.yaml 配置文件，再输入时设置`:set paste`能确保格式正确。修改内容如下
```
network:
    ethernets:
        ens33:
          addresses: [192.168.27.110/24]
          gateway4: 192.168.27.2
          nameservers:
            addresses: [192.168.27.2]
    version: 2
```
使用 netplan apply 命令让配置生效

### 配置主机名
```
# 修改主机名
hostnamectl set-hostname kubernetes-master
# 配置 hosts
cat >> /etc/hosts << EOF
192.168.27.110 kubernetes-master
EOF
```
```
# 修改主机名
hostnamectl set-hostname kubernetes-node-01
# 配置 hosts
cat >> /etc/hosts << EOF
192.168.27.120 kubernetes-node-01
EOF
```

```
# 修改主机名
hostnamectl set-hostname kubernetes-node-02
# 配置 hosts
cat >> /etc/hosts << EOF
192.168.27.121 kubernetes-node-02
EOF
```
