---
title: "Kubernetes 安装集群"
date: 2019年11月4日15:52:51
---
# Kubernetes 安装集群
## 概述
kubeadm 是 kubernetes 的集群安装工具，能够快速安装 kubernetes 集群，安装 kubernetes 主要是安装它的各个镜像，而 kubeadm 已经为我们集成好了运行 kubernetes 所需的基本镜像。但由于国内的网络原因，在搭建环境时，无法拉取到这些镜像。此时我们只需要修改为阿里云提供的镜像服务即可解决该问题。
## 创建并修改配置
创建并进入目录：`root@kubernetes-master:/usr/local/kubernetes/cluster# `
```
# 导出配置文件
kubeadm config print init-defaults --kubeconfig ClusterConfiguration > kubeadm.yml
```
::: tip 修改配置：
1. 将`advertiseAddress`改成自己的地址 `192.168.27.110`
2. 将镜像仓库改为阿里云`imageRepository: registry.aliyuncs.com/google_containers`
3. 在networking下增加`podSubnet: "10.244.0.0/16"`
4. 确认版本正确，否则可能阻塞。
:::
尤其注意在修改时不能多加空格或者tab，因为yml的格式是很严格的，多了就会产生错误。
```
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  # 修改为主节点 IP
  advertiseAddress: 192.168.27.110
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: kubernetes-master
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
# 国内不能访问 Google，修改为阿里云
imageRepository: registry.aliyuncs.com/google_containers
kind: ClusterConfiguration
# 修改版本号
kubernetesVersion: v1.16.0
networking:
  dnsDomain: cluster.local
  # 配置 POD 所在网段为我们虚拟机不重叠的网段（这里用的是 Flannel 默认网段）
  podSubnet: "10.244.0.0/16"
  serviceSubnet: 10.96.0.0/12
scheduler: {}
```

## 查看所需镜像
```shell
kubeadm config images list --config kubeadm.yml
# 输出如下
registry.aliyuncs.com/google_containers/kube-apiserver:v1.15.0
registry.aliyuncs.com/google_containers/kube-controller-manager:v1.15.0
registry.aliyuncs.com/google_containers/kube-scheduler:v1.15.0
registry.aliyuncs.com/google_containers/kube-proxy:v1.15.0
registry.aliyuncs.com/google_containers/pause:3.1
registry.aliyuncs.com/google_containers/etcd:3.3.10
registry.aliyuncs.com/google_containers/coredns:1.3.1
```

## 拉取所需镜像
```shell
kubeadm config images pull --config kubeadm.yml
# 输出如下
[config/images] Pulled registry.aliyuncs.com/google_containers/kube-apiserver:v1.15.0
[config/images] Pulled registry.aliyuncs.com/google_containers/kube-controller-manager:v1.15.0
[config/images] Pulled registry.aliyuncs.com/google_containers/kube-scheduler:v1.15.0
[config/images] Pulled registry.aliyuncs.com/google_containers/kube-proxy:v1.15.0
[config/images] Pulled registry.aliyuncs.com/google_containers/pause:3.1
[config/images] Pulled registry.aliyuncs.com/google_containers/etcd:3.3.10
[config/images] Pulled registry.aliyuncs.com/google_containers/coredns:1.3.1
```

## 安装主节点
执行以下命令初始化主节点，该命令指定了初始化时需要使用的配置文件，其中添加 --upload-certs 参数可以在后续执行加入节点时自动分发证书文件。追加的 `tee kubeadm-init.log` 用以输出日志。

> 注意： 如果安装 kubernetes 版本和下载的镜像版本不统一则会出现 timed out waiting for the condition 错误。中途失败或是想修改配置可以使用 kubeadm reset 命令重置配置，再做初始化操作即可。

```shell
kubeadm init --config=kubeadm.yml --upload-certs | tee kubeadm-init.log
# 输出如下
  [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
...
Your Kubernetes control-plane has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/
Then you can join any number of worker nodes by running the following on each as root:
kubeadm join 192.168.141.110:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:f0759e0d352c1a5de4444782b4a676460b2ea7a2876fa0accab572b8629b72c8 
```

## 配置 kubectl
```
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
# 非 ROOT 用户执行
chown $(id -u):$(id -g) $HOME/.kube/config
```
## 验证是否成功
```
kubectl get node
# 输出如下
NAME                STATUS     ROLES    AGE     VERSION
kubernetes-master   NotReady   master   4m38s   v1.15.0
```
## 安装从节点
将 Node 节点加入到集群中很简单，只需要在 Node 服务器上安装 kubeadm，kubectl，kubelet 三个工具，然后使用 kubeadm join 命令加入即可
```
kubeadm join 192.168.27.110:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:dd022a2ea768459142d5ef881e4da44d6aaaf3379538ef48516cd88ca1857dd2 
```
## 验证是否成功
回到 Master 主节点查看是否安装成功

> 注意： 如果 Node 节点加入 Master 时配置有问题可以在 Node 节点上使用 `kubeadm reset` 重置配置再使用 `kubeadm join` 命令重新加入即可。希望在 master 节点删除 node ，可以使用 `kubectl delete nodes <NAME>` 删除。

```
kubectl get node
# 输出如下
NAME                 STATUS     ROLES    AGE   VERSION
kubernetes-master    NotReady   master   20m   v1.15.0
kubernetes-node-01   NotReady   <none>   16s   v1.15.0
kubernetes-node-02   NotReady   <none>   6s    v1.15.0
```
## 查看 Pod 状态
coredns 尚未运行，此时我们还需要安装网络插件
```
kubectl get pod -n kube-system -o wide
# 输出如下
NAME                                        READY   STATUS    RESTARTS   AGE     IP                NODE                 NOMINATED NODE   READINESS GATES
coredns-bccdc95cf-9s4bm                     0/1     Pending   0          24m     <none>            <none>               <none>           <none>
coredns-bccdc95cf-s8ggd                     0/1     Pending   0          24m     <none>            <none>               <none>           <none>
etcd-kubernetes-master                      1/1     Running   0          24m     192.168.141.110   kubernetes-master    <none>           <none>
kube-apiserver-kubernetes-master            1/1     Running   0          24m     192.168.141.110   kubernetes-master    <none>           <none>
kube-controller-manager-kubernetes-master   1/1     Running   0          23m     192.168.141.110   kubernetes-master    <none>           <none>
kube-proxy-8s87d                            1/1     Running   0          4m56s   192.168.141.120   kubernetes-node-01   <none>           <none>
kube-proxy-cbnlb                            1/1     Running   0          4m46s   192.168.141.121   kubernetes-node-02   <none>           <none>
kube-proxy-vwhxj                            1/1     Running   0          24m     192.168.141.110   kubernetes-master    <none>           <none>
kube-scheduler-kubernetes-master            1/1     Running   0          24m     192.168.141.110   kubernetes-master    <none>           <none>
```
## 附：扩展阅读
### kubeadm init 的执行过程
- init： 指定版本进行初始化操作
- preflight： 初始化前的检查和下载所需要的 Docker 镜像文件
- kubelet-start： 生成 kubelet 的配置文件 var/lib/kubelet/config.yaml，没有这个文件 kubelet 无法启动，所以初始化之前的 kubelet 实际上启动不会成功
- certificates： 生成 Kubernetes 使用的证书，存放在 /etc/kubernetes/pki 目录中
- kubeconfig： 生成 KubeConfig 文件，存放在 /etc/kubernetes 目录中，组件之间通信需要使用对应文件
- control-plane： 使用 /etc/kubernetes/manifest 目录下的 YAML 文件，安装 Master 组件
- etcd： 使用 /etc/kubernetes/manifest/etcd.yaml 安装 Etcd 服务
- wait-control-plane： 等待 control-plan 部署的 Master 组件启动
- apiclient： 检查 Master 组件服务状态。
- uploadconfig： 更新配置
- kubelet： 使用 configMap 配置 kubelet
- patchnode： 更新 CNI 信息到 Node 上，通过注释的方式记录
- mark-control-plane： 为当前节点打标签，打了角色 Master，和不可调度标签，这样默认就不会使用 Master 节点来运行 Pod
- bootstrap-token： 生成 token 记录下来，后边使用 kubeadm join 往集群中添加节点时会用到
- addons： 安装附加组件 CoreDNS 和 kube-proxy