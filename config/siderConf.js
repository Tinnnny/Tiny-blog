module.exports={
    "/bootstrap/" : [
        {
            title: 'Bootstrap',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/bootstrap/', '概述'],
                ['/bootstrap/bootstrap01', '响应式布局、样式和插件'],
                ['/bootstrap/bootstrap02', '案例'],
            ]
        }
    ],
    "/class/" : [
        {
            title: '集合',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/class/', 'Java Number类'],
                    ['/class/class01', 'Java Character类'],
                    ['/class/class02', 'Java String'],
                    ['/class/class03', 'Java StringBuffer和StringBuilder'],
                    ['/class/class04' , 'Java System类'],
                    ['/class/class06', 'Java 日期时间'],
                    ['/class/class05' , 'Java Object类'],
            ]
        }
    ],
    "/collection/" : [
        {
            title: '集合',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/collection/', '概述'],
                    ['/collection/collection01', 'Collection'],
                    ['/collection/collection02', 'Map'],
                    ['/collection/collection03', 'List'],
                    ['/collection/collection04', 'Set'],
                    ['/collection/collection05', 'ArrayList'],
                    ['/collection/collection06', 'Collections工具类'],
            ]
        }
    ],
    "/communication/" : [
        {
            title: '解决模块间通信问题',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/communication/', 'Apache HttpClient'],
                    ['/communication/communication01', 'Jackson'],
                    ['/communication/communication02', 'RESTful风格api'],
                   
            ]
        }
    ],
    "/css/" : [
        {
            title: 'CSS',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/css/', 'CSS2'],
                    ['/css/css01', 'CSS3(1)'],
                    ['/css/css02', 'CSS3(2)'],
                    ['/css/css03', 'CSS3(3)'],
                    ['/css/css04', 'CSS3(4)'],
            ]
        }
    ],
    "/docker/" : [
        {
            title: 'Docker',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/docker/', 'Docker简介'],
                ['/docker/docker01', '安装 Docker'],
                ['/docker/docker02', 'Docker 概述'],
                ['/docker/docker03', 'Docker操作镜像'],
                ['/docker/docker04', 'Docker操作容器'],
                ['/docker/docker05', 'Dockerfile 定制镜像'],
                ['/docker/docker06', 'Dockerfile 指令'],
                ['/docker/docker07', 'Docker Compose简介'],
                ['/docker/docker08', 'Docker Compose使用'],
                ['/docker/docker09', 'Docker Compose部署应用程序'],
                ['/docker/docker10', 'Docker Compose部署GitLab'],
                ['/docker/docker11', 'Docker Compose部署Nexus'],
                ['/docker/docker12', 'Docker Compose部署Harbor'],
                ['/docker/docker13', 'Docker Compose网络设置'],
            ]
        }
    ],
    "/frontother/" : [
        {
            title: '其他',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/frontother/templateuse', '利用前端模板'],
                    ['/frontother/latexkatex', 'KaTex/LaTex 用法'],
            ]
        }
    ],
    "/html/" : [
        {
            title: 'HTML',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/html/', '概述'],
                ['/html/html01', '标签学习'],
                ['/html/html02', '旅游网站案例'],
                ['/html/html03', '表单标签'],
            ]
        }
    ],
    "/leetcode/" : [
        {
            title: '力扣',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/leetcode/', '1.两数之和'],
                ['/leetcode/leetcode01', '2.两数相加'],
                ['/leetcode/leetcode02', '3.无重复字符的最长子串'],
                ['/leetcode/leetcode03', '4.寻找两个有序数组的中位数'],
                ['/leetcode/leetcode04', '7.整数反转'],
                ['/leetcode/leetcode05', '9.回文数'],
                ['/leetcode/leetcode06', '17.罗马数字转整数'],
            ]
        }
    ],
    "/solvedproblems/" : [
        {
            title: '问题解决',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/solvedproblems/spring-boot-static', '静态资源无法访问'],
                ['/solvedproblems/solve01', 'SQLyog导入sql数据文件报错'],
                ['/solvedproblems/solve02', '添加@RequestMapping注解后，访问不到静态资源'],
            ]
        }
    ],
    "/Spring/" : [
        {
            title: 'Spring',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/Spring/', '简介'],
                    ['/Spring/spring01', '起步'],
                    ['/Spring/spring-boot-annotation', 'Spring注解'],
                    ['/Spring/spring-boot-validation', 'Spring注解校验'],
            ]
        }
    ],
    "/springboot/" : [
        {
            title: 'Spring Boot',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/springboot/', 'Spring 简介'],
                ['/springboot/springboot05', '开启Spring Boot'],
                ['/springboot/springboot06', 'Spring Boot一些基础配置'],
                ['/springboot/springboot07', 'Spring Boot中使用MyBatis'],
                ['/springboot/springboot01', 'Spring Boot常用配置'],
                ['/springboot/springboot02', 'Thymeleaf'],
                ['/springboot/springboot03', 'Spring Boot整合HikariCP'],
                ['/springboot/springboot04', 'Pagehelper和Tk.mybatis'],
                ['/springboot/springboot08', 'Swagger2接口文档引擎'],
                ['/springboot/springboot09', 'Spring Boot异常处理'],
                ['/springboot/springboot10', 'Spring Boot中使用过滤器和拦截器'],
                ['/springboot/springboot11', 'Spring Boot AOP记录用户操作日志'],
                ['/springboot/springboot12', '深入学习Spring组件注册(一)'],
                ['/springboot/springboot13', '深入学习Spring组件注册(二)'],
                ['/springboot/springboot14', '深入学习Spring Bean生命周期'],
                ['/springboot/springboot15', '深入学习Spring Boot自动装配'],
                ['/springboot/springboot16', '深入学习Spring Boot中的SpringApplication'],
                ['/springboot/springboot17', '自定义Spring Boot 内容协商'],
                ['/springboot/springboot18', 'Spring Boot 中处理跨域'],
                ['/springboot/springboot19', 'Spring Boot 中的异步调用'],
                ['/springboot/springboot20', 'Spring Sucurity与Oauth2梳理'],
            ]
        }
    ],
    "/springcloud/": [
        {
            title: 'Spring Cloud',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/springcloud/', 'spring-cloud-alibaba'],
                    ['/springcloud/springcloud01', 'Spring Cloud Alibaba项目实践'],
                    ['/springcloud/springcloud02', 'Nacos'],
            ]
        }
    ],
    "/springmvc/" : [
        {
            title: 'Spring MVC',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/springmvc/', 'Spring 整合 MVC'],
                    ['/springmvc/springmvc01', '起步'],
                    ['/springmvc/springmvc02', 'Spring MVC 拦截器'],
                    ['/springmvc/springmvc03', 'Maven模块化开发'],
            ]
        }
    ],
    "/springtransation/" : [
        {
            title: 'Spring事务管理',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/springtransation/', '简介'],
                    ['/springtransation/springtransation01', '使用Spring注解管理事务'],
            ]
        }
    ],
    "/springweb/" : [
        {
            title: 'Spring web',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/springweb/', 'Spring 整合 Web'],
                    ['/springweb/springweb01', 'Bean的装配方式'],
            ]
        }
    ],
    "/structure/" : [
        {
            title: '数据结构和算法',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/structure/', '稀疏数组'],
                    ['/structure/structure01', '队列'],
                    ['/structure/structure02', '单链表'],
                    ['/structure/structure03', '双向链表'],
                    ['/structure/structure04', '约瑟夫问题'],
                    ['/structure/structure05', '栈'],
                    ['/structure/structure06', '迷宫回溯问题'],
                    ['/structure/structure07', '八皇后问题'],
                    ['/structure/structure08', '排序算法与时间复杂度'],
                    ['/structure/structure09', '冒泡排序'],
                    ['/structure/structure10', '选择排序'],
                    ['/structure/structure11', '插入排序'],
                    ['/structure/structure12', '希尔排序'],
                    ['/structure/structure13', '快速排序'],
                    ['/structure/structure14', '归并排序'],
                    ['/structure/structure15', '基数排序'],
                    ['/structure/structure16', '常用排序算法总结和对比'],
                    ['/structure/structure17', '查找算法'],
                    ['/structure/structure18', '哈希表'],
                    ['/structure/structure19', '树'],
                    ['/structure/structure20', '顺序存储二叉树'],
                    ['/structure/structure21', '线索化二叉树'],
                    ['/structure/structure22', '堆'],
                    ['/structure/structure23', '优先队列'],
                    ['/structure/structure24', '2-3查找树'],
                    ['/structure/structure25', '红黑树'],
                    ['/structure/structure26', 'B树'],
            ]
        }
    ],
    "/java00/" : [
        {
            title: 'Java 快速入门',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java00/', 'Java 概述'],
                ['/java00/java01', 'Java 对象和类'],
                ['/java00/java16', 'Java 方法'],
                ['/java00/java26', 'Java 包(package)'],
                ['/java00/java03', 'Java 基本数据类型'],
                ['/java00/data' , 'Java 数据结构'],
                ['/java00/java04', 'Java 变量类型'],
                ['/java00/java05', 'Java 修饰符'],
                ['/java00/java06', 'Java 运算符'],
                ['/java00/java07', 'Java 循环结构'],
                ['/java00/java08', 'Java 分支结构'],
                ['/java00/java13', 'Java 数组'],
                ['/java00/iterator' , 'Java Iterator迭代器'],
            ]
        }
    ],
    "/java01/" : [
        {
            title: 'Java面向对象编程',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java01/', '继承'],
                ['/java01/java01', '多态'],
                ['/java01/java01', '封装'],
            ]
        }
    ],
    "/java02/" : [
        {
            title: 'Java异常处理',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java02/', 'Java 异常处理'],
            ]
        }
    ],
    "/java03/" : [
        {
            title: 'Java注解',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java03/', 'Java 注解'],
            ]
        }
    ],
    "/java04/" : [
        {
            title: 'Java泛型',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java04/', 'Java 注解'],
            ]
        }
    ],
    "/java05/" : [
        {
            title: 'Java异常处理',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java05/', 'Java 正则表达式'],
            ]
        }
    ],
    "/java06/" : [
        {
            title: '函数式编程',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java06/', 'Lambda表达式'],
                ['/java06/java01', 'Stream流'],
                ['/java06/java02', '常用方法及操作'],
                ['/java06/java03', 'Stream流方法引用'],
                ['/java06/java04', '函数式接口'],
                ['/java06/java05', '函数式编程'],
                ['/java06/java06', '常用的函数式接口'],
            ]
        }
    ],
    "/java07/" : [
        {
            title: 'Java 接口',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java07/', 'Java 接口'],
            ]
        }
    ],
    "/java08/" : [
        {
            title: 'Java 内部类',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java08/', 'Java 内部类'],
            ]
        }
    ],
    "/java09/" : [
        {
            title: 'Java Scanner 类',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/java09/', 'Java Scanner 类'],
            ]
        }
    ],
    "/javaio/" : [
        {
            title: 'Java IO',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/javaio/', 'IO概述'],
                ['/javaio/javaio01', 'Java File类'],
                ['/javaio/javaio02', 'Java 递归'],                
                ['/javaio/javaio03', '字节流'],
                ['/javaio/javaio04', '字符流'],
                ['/javaio/javaio05', '缓冲流'],
                ['/javaio/javaio06', '转换流'],
                ['/javaio/javaio07', '序列化'],
                ['/javaio/javaio08', '打印流'],
            ]
        }
    ],
    "/javaosi/" : [
        {
            title: 'Java 网络编程',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/javaosi/', '网络编程入门'],
                ['/javaosi/javaosi01', 'TCP通信程序'],
                ['/javaosi/javaosi02', '文件上传案例'],
                ['/javaosi/javaosi03', '文件上传优化'],
            ]
        }
    ],
    "/javareflect/" : [
        {
            title: 'Java 反射',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/javareflect/', '概述'],
                ['/javareflect/javareflect01', 'Class对象功能'],
                ['/javareflect/javareflect02', '框架案例'],
            ]
        }
    ],
    "/javascript/" : [
        {
            title: 'JavaScript',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/javascript/', '概述'],
                ['/javascript/javascript01', 'ECMAScript(基本语法)'],
                ['/javascript/javascript02', 'ECMAScript(基本对象)'],
                ['/javascript/javascript03', 'DOM、事件 简单学习'],
                ['/javascript/javascript04', 'BOM'],
                ['/javascript/javascript05', 'DOM和事件监听机制'],
            ]
        }
    ],
    "/javathread/" : [
        {
            title: 'Java 多线程',
            collapsable: false,
            sidebarDepth: 3,
            children: [
                ['/javathread/', '线程概述'],
                ['/javathread/javathread01', '创建线程类'],
                ['/javathread/javathread02', '线程相关概念'],
                ['/javathread/javathread03', '线程池'],
            ]
        }
    ],
    "/jquery/" : [
        {
            title: 'Jquery',
            collapsable: false,
            sidebarDepth: 3,
            children: [
                ['/jquery/', '概述'],
                ['/jquery/jquery01', 'Jquery选择器'],
                ['/jquery/jquery02', 'Jquery DOM操作'],
                ['/jquery/jquery03', 'JQuery 高级'],
            ]
        }
    ],
    "/Junit/" : [
        {
            title: 'Junit',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/Junit/', '简介'],
                    ['/Junit/Junit01', '起步'],
            ]
        }
    ],
    "/jvm/" : [
        {
            title: 'JVM',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/jvm/', 'JVM有必要学吗?'],
            ]
        }
    ],
    "/kubernetes/" : [
        {
            title: 'Kubernetes',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/kubernetes/', 'Kubernetes简介'],
                ['/kubernetes/kubernetes01', 'Kubernetes安装前的准备'],
                ['/kubernetes/kubernetes02', 'Kubernetes安装集群'],
                ['/kubernetes/kubernetes03', 'Kubernetes配置网络'],
                ['/kubernetes/kubernetes04', 'Kubernetes第一个容器'],
                ['/kubernetes/kubernetes05', 'Kubernetes概念总结'],
                ['/kubernetes/kubernetes06', 'Kubernetes通过资源配置运行容器'],
                ['/kubernetes/kubernetes07', 'Kubernetes Ingress简介'],
                ['/kubernetes/kubernetes08', 'Nginx 虚拟主机'],
                ['/kubernetes/kubernetes09', 'Nginx 反向代理'],
                ['/kubernetes/kubernetes10', 'Nginx 负载均衡'],
                ['/kubernetes/kubernetes11', 'Nginx Ingress Controller'],
                ['/kubernetes/kubernetes12', 'Kubernetes 准备数据卷'],
                ['/kubernetes/kubernetes13', 'Kubernetes使用数据卷'],
                ['/kubernetes/kubernetes14', 'Kubernetes ConfigMap'],
                ['/kubernetes/kubernetes15', 'Kubernetes Dashboard'],
                ['/kubernetes/kubernetes16', '使用 Kuboard 替代 Kubernetes Dashboard'],
            ]
        }
    ],
    "/linux/" : [
        {
            title: 'Linux',
            collapsable: false,
            sidebarDepth:3,
            children: [
                ['/linux/', 'Linux'],
                ['/linux/linux01', 'Linux 远程控制管理'],
                ['/linux/linux02', 'Linux 目录管理'],
                ['/linux/linux03', 'Linux 系统管理'],
                ['/linux/linux04', 'Linux Vim 编辑器'],
                ['/linux/linux05', 'Linux 用户和组管理'],
                ['/linux/linux06', 'Linux 文件权限管理'],
                ['/linux/linux07', 'Linux 软件包管理'],
                ['/linux/linux08', 'Linux 部署应用程序'],
            ]
        }
    ],
    "/Log4j/" : [
        {
            title: 'Log4j',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/Log4j/', '简介'],
                    ['/Log4j/Log4j01', '起步'],
            ]
        }
    ],
    "/mall/" : [
        {
            title: 'mall开发日志',
            collapsable: false,
            sidebarDepth: 3,
            children: [
                ['/mall/', 'mall项目介绍'],
                ['/mall/mall01', '项目基础模块搭建'],
                ['/mall/mall02', 'MybatisCodeHelperPro生成Mapper'],
                ['/mall/mall03', 'mall-admin'],
                ['/mall/mall04', 'mall-common'],
                ['/mall/mall05', 'mall-security'],
                ['/mall/mall06', '6'],
                ['/mall/mall07', '7'],
            ]
        }
    ],
    "/ml/" : [
        {
            title: '机器学习',
            collapsable: false,
            sidebarDepth: 3,
            children: [
                ['/ml/', '数据预处理'],
                ['/ml/ml01', '简单线性回归'],
                ['/ml/ml02', '多元线性回归'],
                ['/ml/ml03', '逻辑回归'],
                ['/ml/ml04', 'K近邻法'],
                ['/ml/ml05', 'SVM'],
                ['/ml/ml06', '决策树分类'],
                ['/ml/ml07', '随机森林'],
            ]
        }
    ],
    "/monomer/" : [
        {
            title: '单体应用',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['/Spring/', 'Spring'],
                ['/Junit/', 'Junit'],
                ['/Log4j/', 'Log4j'],
                ['/springweb/', 'Spring Web'],
                ['/springmvc/', 'Spring MVC'],
                ['/mysql/', 'Mysql'],
                ['/MyBatis/', 'MyBatis'],
                ['/springtransation/', 'Spring事务管理'],
                ['/communication/', '解决模块间通信问题']
            ]
        }
    ],
    "/MyBatis/" : [
        {
            title: 'Spring MVC',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/MyBatis/', 'MyBatis'],
                    ['/MyBatis/mybatis01', 'Spring整合Druid'],
                    ['/MyBatis/mybatis02', 'Spring 整合 MyBatis'],
                    ['/MyBatis/mybatis03', '第一个MyBatis对象关系映射'],
                    ['/MyBatis/mybatis04', 'MyBatis CRUD操作'],
            ]
        }
    ],
    "/mysql/" : [
        {
            title: 'Mysql',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/mysql/', '数据库概述'],
                    ['/mysql/mysql01', 'SQL概述'],
                    ['/mysql/mysql02', 'SQL DDL:操作数据库、表'],
                    ['/mysql/mysql03', 'SQL DQL'],
                    ['/mysql/mysql04', '约束'],
                    ['/mysql/mysql05', '数据库的设计'],
                    ['/mysql/mysql06', '多表查询'],
                    ['/mysql/mysql07', '多表查询练习'],
                    ['/mysql/mysql08', '事务'],
            ]
        }
    ],
    "/neural/" : [
        {
            title: '神经网络',
            collapsable: false,
            sidebarDepth: 3,
            children: [
                ['/neural/', '神经网络编程入门'],
                ['/neural/neural01', '神经网络实现'],
                ['/neural/neural02', 'Matlab BP网络实例'],
                ['/neural/neural03', '独热编码和标签编码'],
                ['/neural/neural04', 'Matlab入门基础'],
                ['/neural/neural05', 'Matlab进阶'],
            ]
        }
    ],
    "/other/" : [
        {
            title: '其他',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/other/other01', 'windows下安装和启动redis服务'],
                    ['/other/project-build', 'Spring web骨架创建'],
                    ['/other/refactor', '重构代码'],
                    ['/other/nginx-cdn', 'nginx反向代理cdn'],
                    ['/other/rememberme', '登录记住我功能实现'],
                    ['/other/utf-8', '关于UTF-8'],
                    ['/other/dateformat', '格式化时间'],
                    ['/other/kaptcha', 'kaptcha'],
                    ['/other/highconcurrency', '如何应对高并发'],
                    ['/other/microservice', '微服务的实践'],
                    ['/other/version', '关于版本'],

            ]
        }
    ],
    "/plugins/" : [
        {
            title: '插件',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/plugins/', 'Lombok'],
                    ['/plugins/plugins01', 'MyBatisCodeHelper'],
                    ['/plugins/plugins02', 'generaterAllSetter'],
            ]
        }
    ],
    "/plugins&utils/" : [
        {
            title: '插件和工具类',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/plugins&utils/', 'CookieUtils'],
                    ['/plugins&utils/utils01', 'MapperUtils'],
                    ['/plugins&utils/utils02', 'HttpClientUtils'],
                    ['/plugins&utils/lombok', 'lombok插件'],
            ]
        }
    ],
    "/utils/" : [
        {
            title: '工具类',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['/utils/', 'CookieUtils'],
                    ['/utils/utils01', 'MapperUtils'],
                    ['/utils/utils02', 'HttpClientUtils'],
            ]
        }
    ],
    "/vue/" : [
        {
            title: '其他',
            collapsable: false,
            sidebarDepth:3,
            children: [
                    ['https://mrbird.cc/Vue-Learn-Note.html', 'Vue学习'],
                    ['/vue/vuepress', 'VuePress'],
                    ['/vue/vuepress01', 'VuePress安装Katex插件'],
            ]
        }
    ]
};
