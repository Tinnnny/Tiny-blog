(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{582:function(s,e,n){"use strict";n.r(e);var a=n(25),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"kubernetes-第一个容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-第一个容器"}},[s._v("#")]),s._v(" Kubernetes 第一个容器")]),s._v(" "),n("h2",{attrs:{id:"检查组件运行状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查组件运行状态"}},[s._v("#")]),s._v(" 检查组件运行状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('kubectl get cs\n# 输出如下\nNAME                 STATUS    MESSAGE             ERROR\n# 调度服务，主要作用是将 POD 调度到 Node\nscheduler            Healthy   ok\n# 自动化修复服务，主要作用是 Node 宕机后自动修复 Node 回到正常的工作状态\ncontroller-manager   Healthy   ok\n# 服务注册与发现\netcd-0               Healthy   {"health":"true"}  \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"检查-master-状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查-master-状态"}},[s._v("#")]),s._v(" 检查 Master 状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl cluster-info\n# 输出如下\nKubernetes master is running at https://192.168.141.110:6443\nKubeDNS is running at https://192.168.141.110:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"检查-nodes-状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查-nodes-状态"}},[s._v("#")]),s._v(" 检查 Nodes 状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get nodes\n# 输出如下\nNAME                 STATUS   ROLES    AGE   VERSION\nkubernetes-master    Ready    master   72m   v1.15.0\nkubernetes-node-01   Ready    <none>   52m   v1.15.0\nkubernetes-node-02   Ready    <none>   51m   v1.15.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"运行第一个容器实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行第一个容器实例"}},[s._v("#")]),s._v(" 运行第一个容器实例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 使用 kubectl 命令创建两个监听 80 端口的 Nginx Pod（Kubernetes 运行容器的最小单元）\nkubectl run nginx --image=nginx --replicas=2 --port=80\n# 输出如下\nkubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.\ndeployment.apps/nginx created\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"查看全部-pods-的状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看全部-pods-的状态"}},[s._v("#")]),s._v(" 查看全部 Pods 的状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get pods\n# 输出如下\nNAME                     READY   STATUS    RESTARTS   AGE\nnginx-7c45b84548-mv8n8   1/1     Running   0          36s\nnginx-7c45b84548-vp2x6   1/1     Running   0          36s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"查看已部署的服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看已部署的服务"}},[s._v("#")]),s._v(" 查看已部署的服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get deployment\n# 输出如下\nNAME    READY   UP-TO-DATE   AVAILABLE   AGE\nnginx   2/2     2            2           70s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"发布服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布服务"}},[s._v("#")]),s._v(" 发布服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 部署服务是在内网，外部访问需要expose出来。使用负载均衡模式发布服务，让用户可以访问\nkubectl expose deployment nginx --port=80 --type=LoadBalancer\n# 输出如下\nservice/nginx exposed\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"查看已发布的服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看已发布的服务"}},[s._v("#")]),s._v(" 查看已发布的服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get services\n# 输出如下\nNAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nkubernetes   ClusterIP      10.96.0.1       <none>        443/TCP        14h\nnginx        LoadBalancer   10.96.182.202   <pending>     80:30899/TCP   99s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"查看服务详情"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务详情"}},[s._v("#")]),s._v(" 查看服务详情")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl describe service nginx\n# 输出如下\nName:                     nginx\nNamespace:                default\nLabels:                   run=nginx\nAnnotations:              <none>\nSelector:                 run=nginx\nType:                     LoadBalancer\nIP:                       10.96.182.202\nPort:                     <unset>  80/TCP\nTargetPort:               80/TCP\nNodePort:                 <unset>  30899/TCP\nEndpoints:                10.244.140.65:80,10.244.141.196:80\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"验证是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证是否成功"}},[s._v("#")]),s._v(" 验证是否成功")]),s._v(" "),n("p",[s._v("通过浏览器访问 Node 服务器，此时 Kubernetes 会以负载均衡的方式访问部署的 Nginx 服务，能够正常看到 Nginx 的欢迎页即表示成功")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://192.168.27.120:30899/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"进入nginx容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入nginx容器"}},[s._v("#")]),s._v(" 进入nginx容器")]),s._v(" "),n("p",[s._v("node1运行"),n("code",[s._v("docker ps -a")]),s._v("输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('CONTAINER ID        IMAGE                                                COMMAND                  CREATED             STATUS                    PORTS               NAMES\n1b579145053c        nginx                                                "nginx -g \'daemon of…"   10 minutes ago      Up 10 minutes                                 k8s_nginx_nginx-5578584966-7kd5r_default_875968d6-a8a9-415e-a501-b7d23dd838e3_0\naf86afb2176b        registry.aliyuncs.com/google_containers/pause:3.1    "/pause"                 11 minutes ago      Up 10 minutes                                 k8s_POD_nginx-5578584966-7kd5r_default_875968d6-a8a9-415e-a501-b7d23dd838e3_0\nc0a8eabbdf52        registry.aliyuncs.com/google_containers/coredns      "/coredns -conf /etc…"   2 hours ago         Up 2 hours                                    k8s_coredns_coredns-58cc8c89f4-psgjq_kube-system_96\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("进入nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker exec -it 1b579145053c /bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("输入"),n("code",[s._v("ls -al")]),s._v("查看文件目录，并查找nginx的位置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("root@nginx-5578584966-7kd5r:/# whereis nginx\n# 输出\nnginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("进入"),n("code",[s._v("/usr/share/nginx/html")]),s._v(",替换"),n("code",[s._v("index.html")]),s._v("的内容")]),s._v(" "),n("blockquote",[n("p",[s._v("注意："),n("code",[s._v("》")]),s._v("表示追加")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("echo hello kubernetes > index.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("浏览器再次打开120端口：")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g8n62epfb3j30gd03egld.jpg"}})]),s._v(" "),n("p",[s._v("最后输入"),n("code",[s._v("exit")]),s._v("退出。")]),s._v(" "),n("h2",{attrs:{id:"验证高可用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证高可用"}},[s._v("#")]),s._v(" 验证高可用")]),s._v(" "),n("p",[s._v("node1输入"),n("code",[s._v("docker ps -a")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('CONTAINER ID        IMAGE                                                COMMAND                  CREATED             STATUS                    PORTS               NAMES\n1b579145053c        nginx                                                "nginx -g \'daemon of…"   28 minutes ago      Up 28 minutes                                 k8s_nginx_nginx-5578584966-7kd5r_default_875968d6-a8a9-415e-a501-b7d23dd838e3_0\naf86afb2176b        registry.aliyuncs.com/google_containers/pause:3.1    "/pause"                 28 minutes ago      Up 28 minutes                                 k8s_POD_nginx-5578584966-7kd5r_default_875968d6-a8a9-415e-a501-b7d23dd838e3_0\nc0a8eabbdf52        registry.aliyuncs.com/google_containers/coredns      "/coredns -conf /etc…"   2 hours ago         Up 2 hours                                    k8s_coredns_coredns-58cc8c89f4-psgjq_kube-system_962a36dd-2a59-475b-b682-50383406dbcc_0\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("删除容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker rm -f 1b579145053c\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("再次运行"),n("code",[s._v("docker ps -a")]),s._v("发现nginx下线，一段时间后nginx又上线了，说明kubernetes实现了高可用。")]),s._v(" "),n("h2",{attrs:{id:"停止服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#停止服务"}},[s._v("#")]),s._v(" 停止服务")]),s._v(" "),n("p",[s._v("停止服务在master节点操作。")]),s._v(" "),n("ul",[n("li",[s._v("删除已部署的服务")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('kubectl delete deployment nginx\n# 输出如下\ndeployment.extensions "nginx" deleted\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("删除已发布的服务")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('kubectl delete service nginx\n# 输出如下\nservice "nginx" deleted\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);