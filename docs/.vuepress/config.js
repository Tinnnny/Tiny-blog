module.exports = {
    base: '/Tiny-blog/',
    title: 'Tiny-blog',
    description: 'Tiny-blog,Vuepress文档，Vuepress博客',
    locales: {
        '/': {
          lang: 'zh-CN',
        }
      },
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.set({html: true})
            md.use(require("markdown-it-katex"))
        }
    },
    plugins: [
        // [
        //     'vuepress-plugin-helper-live2d',{
        //     live2d: {
        //         // 是否启用(关闭请设置为false)(default: true)
        //         enable: false,
        //         model: 'hibiki',
        //         display: {
        //             position: "right", // 显示位置：left/right(default: 'right')
        //             width: 135, // 模型的长度(default: 135)
        //             height: 300, // 模型的高度(default: 300)
        //             hOffset: 65, //  水平偏移(default: 65)
        //             vOffset: 0, //  垂直偏移(default: 0)
        //         },
        //         mobile: {
        //             show: false // 是否在移动设备上显示(default: false)
        //         },
        //         react: {
        //             opacity: 0.8 // 模型透明度(default: 0.8)
        //         }
        //     }
        // }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: '.content__default img',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
              margin: 16
            }
          }]
        // ['@vuepress/medium-zoom']
    ],
    themeConfig: {
        // logo: '/swk.png',
        // 你的GitHub仓库
        // repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        // repoLabel: 'GitHub',
        nav: [
            // {text: '指南', link: '/blog/'},
            {
                text: 'api online',
                items: [
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
                    { text: 'Axure', link: 'https://www.w3cschool.cn/axurezwjc/' },
                    { text: 'Bootstrap', link: 'https://www.runoob.com/bootstrap/bootstrap-tutorial.html' },
                    { text: 'Helm', link: 'https://helm.sh/docs/intro/quickstart/' },
                    { text: 'Jhipster', link: 'https://www.jhipster.tech/' },
                    { text: 'jQuery', link: 'https://www.jquery123.com/' },
                    { text: 'LeetCode', link: 'https://leetcode-cn.com/problemset/algorithms/' },
                    { text: 'Morris.js', link: 'http://morrisjs.github.io/morris.js/' },
                    { text: 'Nacos', link: 'https://nacos.io/zh-cn/index.html' },
                    { text: 'Spring', link: 'https://spring.io/' },
                    { text: 'Spring Cloud Alibaba GitHub', link: 'https://github.com/alibaba/spring-cloud-alibaba' },
                    { text: 'TiDB', link: 'https://pingcap.com/docs-cn/stable/' },
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                ]
            },
            {
                text: 'frontEnd',
                items: [
                    { text: 'Vue', link: '/vue/vuepress' },
                    {text: 'other', link: '/frontother/templateuse'},
                ]
            },
            {
                text: 'backEnd',
                items: [
                    {text: 'Java', link: '/java/java01'},
                    {text: 'Monomer application', link: '/monomer/'},
                    {text: 'Spring Boot', link: '/springboot/'},
                    {text: 'Spring Cloud', link: '/springcloud/'},
                    {text: 'JVM', link: '/jvm/'},
                    {text: 'Plugins&Utils', link: '/plugins&utils/'},
                    {text: 'Solved problems', link: '/solvedproblems/spring-boot-static'},
                    {text: 'other', link: '/other/project-build'},
                ]
            },
            {text: '神经网络', link: '/neural/'},
            {
                text: '容器化部署',
                items: [
                    { text: 'Linux', link: '/linux/' },
                    { text: 'Docker', link: '/docker/' },
                    { text: 'Kubernetes', link: '/kubernetes/' },
                ]
            },
            {text: 'LeetCode', link: '/leetcode/'},
            {text: '日志', link: '/guide/'},
            {text: '关于我', link: '/aboutme/'},
        ],
        lastUpdated: '最近更新',
        smoothScroll: true,
        sidebar:{
            "/architecture/" : [
                {
                    title: '架构',
                    collapsable: false,
                    children: [
                        ['/architecture/', 'architecture'],
                    ]
                }
            ],
            "/class/" : [
                {
                    title: '集合',
                    collapsable: false,
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
                    children: [
                            ['/communication/', 'Apache HttpClient'],
                            ['/communication/communication01', 'Jackson'],
                            ['/communication/communication02', 'RESTful风格api'],
                            ['/communication/spring-boot-swagger2', 'Swagger2 接口文档引擎'],
                    ]
                }
            ],
             "/docker/" : [
                {
                    title: 'Docker',
                    collapsable: false,
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
                    children: [
                            ['/frontother/templateuse', '利用前端模板'],
                            ['/frontother/', 'VuePress安装Katex插件'],
                            ['/frontother/latexkatex', 'KaTex/LaTex 用法'],
                    ]
                }
            ],
            "/guide/" : [
                {
                    title: '日志',
                    collapsable: false,
                    children: [
                        ['/guide/', '2019年和接下来安排'],
                        ['/guide/essay01', '记和师兄师姐的一次交流'],
                        ['/guide/essay02', '华立课题问题'],
                        ['/guide/essay03', '华立电表质量管理系统原型图'],
                    ]
                }
            ],
            "/leetcode/" : [
                {
                    title: '日志',
                    collapsable: false,
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
                    children: [
                        ['/solvedproblems/spring-boot-static', '静态资源无法访问'],
                        ['/solvedproblems/solve01', 'SQLyog导入sql数据文件报错'],
                    ]
                }
            ],
            "/Spring/" : [
                {
                    title: 'Spring',
                    collapsable: false,
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
                    children: [
                        ['/springboot/', 'Spring 简介'],
                        ['/springboot/springboot01', 'Spring Boot常用配置'],
                        ['/springboot/springboot02', 'Thymeleaf'],
                        ['/springboot/springboot03', 'Spring Boot整合HikariCP'],
                        ['/springboot/springboot04', 'Pagehelper和Tk.mybatis'],
                    ]
                }
            ],
            "/springcloud/": [
                {
                    title: 'Spring Cloud',
                    collapsable: false,
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
                    children: [
                            ['/springweb/', 'Spring 整合 Web'],
                            ['/springweb/springweb01', 'Bean的装配方式'],
                    ]
                }
            ],           
            "/java/" : [
                {
                    title: 'Java',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['/java/java01', 'Java 概述'],
                        ['/java00/', 'Java 基础'],
                        ['/java000/', 'Java 高级'],
                        ['/class/', 'Java 常用工具类'],
                        ['/javaio/', 'Java IO'],

                        ['/collection/', 'Java 集合'],
                        ['/java/java21', 'Java Lambda表达式'],
                        ['/java/java31', 'Java 网络编程'],
                        ['/java/java33', 'Java 多线程'],
                        ['/javadesign/', 'Java 设计模式'],
                        ['/java/java34', 'Java 反射'],
                    ]
                }
            ],
            "/java00/" : [
                {
                    title: 'Java 基础',
                    collapsable: false,
                    children: [
                        ['/java00/', 'Java 对象和类'],
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
            "/java000/" : [
                {
                    title: 'Java 高级',
                    collapsable: false,
                    children: [
                        ['/java000/', 'Java 内部类'],

                        ['/java000/java15', 'Java 正则表达式'],
                        ['/java000/generic' , 'Java 泛型'],
                        ['/java000/java18', 'Java Scanner 类'],
                        ['/java000/java19', 'Java 异常处理'],
                        ['/java000/java20', 'Java 继承'],
                        ['/java000/java22', 'Java 多态'],
                        ['/java000/java24', 'Java 封装'],
                        ['/java000/java25', 'Java 接口'],
                    ]
                }
            ],
            "/javadesign/" : [
                {
                    title: 'Java 设计模式',
                    collapsable: false,
                    children: [
                        ['/javadesign/', 'Java 设计模式'],

                    ]
                }
            ],
            "/javaio/" : [
                {
                    title: 'Java IO',
                    collapsable: false,
                    children: [
                        ['/javaio/java29', 'Java File类'],
                        ['/javaio/java36', 'Java 递归'],
                        ['/javaio/', 'IO概述'],
                        ['/javaio/java32', '字节流'],
                        ['/javaio/java37', '字符流'],
                        ['/javaio/java35', '缓冲流'],
                        ['/javaio/java38', '转换流'],
                        ['/javaio/java39', '序列化'],
                    ]
                }
            ],
            "/javareflection/" : [
                {
                    title: 'Java 反射',
                    collapsable: false,
                    children: [
                        ['/javareflection/', 'Java 反射'],
                    ]
                }
            ],
            "/Junit/" : [
                {
                    title: 'Junit',
                    collapsable: false,
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
                    children: [
                        ['/jvm/', 'JVM有必要学吗?'],
                    ]
                }
            ],          
            "/kubernetes/" : [
                {
                    title: 'Kubernetes',
                    collapsable: false,
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
                    children: [
                            ['/Log4j/', '简介'],
                            ['/Log4j/Log4j01', '起步'],
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
                    children: [
                            ['/MyBatis/', 'MyBatis'],
                            ['/MyBatis/mybatis01', 'Spring整合Druid'],
                            ['/MyBatis/mybatis02', 'Spring 整合 MyBatis'],
                            ['/MyBatis/mybatis03', '第一个MyBatis对象关系映射'],
                            ['/MyBatis/mybatis04', 'MyBatis CRUD操作'],
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
                    ]
                }
            ],
            "/other/" : [
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                            ['/other/project-build', 'Spring web骨架创建'],
                            ['/other/refactor', '重构代码'],
                            ['/other/nginx-cdn', 'nginx反向代理cdn'],
                            ['/other/rememberme', '登录记住我功能实现'],
                            ['/other/utf-8', '关于UTF-8'],
                            ['/other/dateformat', '格式化时间'],
                            ['/other/kaptcha', 'kaptcha'],
                            ['/other/highconcurrency', '如何应对高并发'],
                            ['/other/microservice', '微服务的实践'],
                            
                    ]
                }
            ],
            "/plugins/" : [
                {
                    title: '插件',
                    collapsable: false,
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
                    children: [
                            ['/utils/', 'CookieUtils'],
                            ['/utils/utils01', 'MapperUtils'],
                            ['/utils/utils02', 'HttpClientUtils'],
                    ]
                }
            ],
            "/Vue/" : [
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                            ['/vue/vuepress', 'VuePress'],
                    ]
                }
            ],           
        }
    }
};
