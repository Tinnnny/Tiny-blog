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
        ['link', {rel: 'icon', href: '/vue-logo.png'}]
    ],
    markdown: {
        lineNumbers: true
      },
    plugins: [
        [
            'vuepress-plugin-helper-live2d',{
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                model: 'hibiki',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        }],
        ['@vuepress/back-to-top', true],
    ],
    themeConfig: {
        // 你的GitHub仓库
        // repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        // repoLabel: 'GitHub',
        nav: [
            {text: '指南', link: '/blog/'},
            {
                text: 'api online',
                items: [
                    { text: 'Spring', link: 'https://www.w3cschool.cn/wkspring/' },
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
                    { text: 'jQuery', link: 'https://www.jquery123.com/' },
                    { text: 'Bootstrap', link: 'https://www.runoob.com/bootstrap/bootstrap-tutorial.html' },
                ]
            },
            // {text: 'config', link: '/config.html'},
            {text: 'Java', link: '/java/'},
            {text: 'Spring Boot', link: '/springboot/'},
            {text: 'Spring Cloud', link: '/springcloud/'},
            {text: 'JVM', link: '/jvm/'},
            {text: '架构', link: '/architecture/'},
            {text: '日志', link: '/guide/'},
            {text: '关于我', link: '/aboutme/'},
        ],
        lastUpdated: '最近更新',
        smoothScroll: true,
        sidebar:{
            "/blog/": [
                    {
                        title: '单体应用基础',
                        // collapsable: false,
                        children: [
                            ['/Spring/', 'Spring'],
                            ['/Junit/', 'Junit'],
                            ['/Log4j/', 'Log4j'],
                            ['/springweb/', 'Spring Web'],
                            ['/springmvc/', 'Spring MVC'],
                            ['/MyBatis/', 'MyBatis'],
                            ['/springtransation/', 'Spring事务管理'],
                            ['/communication/', '解决模块间通信问题'],
                        ]
                    },
                    {
                        title: '技术笔记',
                        // collapsable: false,
                        children: [
                            ['/blog/tech/vuepress', 'VuePress'],
                            ['/blog/tech/spring-boot-thymeleaf', 'Thymeleaf'],
                            ['/blog/tech/spring-boot-pagehelper&&tkmybatis', 'pagehelper和tk.mybatis使用'],
                            ['/blog/tech/nginx-cdn', 'nginx反向代理cdn'],
                            ['/blog/tech/rememberme', '登录记住我功能实现'],
                            ['/blog/tech/utf-8', '关于UTF-8'],
                            ['/blog/tech/dateformat', '格式化时间'],
                        ]
                    },
                    {
                        title: '项目开发',
                        // collapsable: false,
                        children: [
                            ['/blog/project/project-build', 'Spring Web骨架创建'],
                            ['/blog/project/templateuse', '利用前端模板'],
                            ['/blog/project/refactor', '代码重构与优化'],
                        ]
                    },
                    {
                        title: '插件',
                        // collapsable: false,
                        children: [
                            ['/plugins/', 'Lombok'],
                        ]
                    },
                    {
                        title: '问题解决',
                        // collapsable: false,
                        children: [
                            ['/blog/solve/spring-boot-static', '静态资源无法访问'],
                            ['/blog/solve/solve01', 'SQLyog导入sql数据文件报错'],
                        ]
                    },
                    ['/utils/','Utils工具类']
            ],
            "/guide/" : [
                {
                    title: '日志',
                    collapsable: false,
                    children: [
                        ['/guide/', '2019年和接下来安排'],
                    ]
                }
            ],
            "/springboot/" : [
                {
                    title: 'Spring Boot',
                    collapsable: false,
                    children: [
                        ['/springboot/', 'ss'],
                        ['/springboot/springboot01', '11'],
                    ]
                }
            ],
            "/springcloud/": [
                {
                    title: 'Spring Cloud',
                    collapsable: false,
                    children: [
                            ['/springcloud/', 'ss'],
                            ['/springcloud/springcloud01', '11'],
                    ]
                }
            ],
            "/jvm/" : [
                {
                    title: 'JVM',
                    collapsable: false,
                    children: [
                        ['/jvm/', 'jvm'],
                    ]
                }
            ],
            "/java/" : [
                {
                    title: 'Java',
                    collapsable: false,
                    children: [
                        ['/java/', 'java'],
                    ]
                }
            ],
            "/architecture/" : [
                {
                    title: '架构',
                    collapsable: false,
                    children: [
                        ['/architecture/', 'architecture'],
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
            "/plugins/" : [
                {
                    title: '插件',
                    collapsable: false,
                    children: [
                            ['/plugins/', 'Lombok'],
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
        }
    }
};


