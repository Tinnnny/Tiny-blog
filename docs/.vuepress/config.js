module.exports = {
    base: '/Tiny-blog/',
    title: 'Tiny-blog',
    description: 'Vuepress blog',
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
        }]
    ],
    themeConfig: {
        // 你的GitHub仓库
        // repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        // repoLabel: 'GitHub',
        nav: [
            {text: '指南', link: '/blog/Spring/spring-boot-start'},
            // {text: 'guide', link: '/guide/'},
            {
                text: 'api online',
                items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
                    { text: 'jQuery', link: 'https://www.jquery123.com/' },
                    { text: 'Bootstrap', link: 'https://www.runoob.com/bootstrap/bootstrap-tutorial.html' },
                ]
            },
            // {text: 'config', link: '/config.html'},
            {text: '关于我', link: '/aboutme/'},
        ],
        smoothScroll: true,
        sidebar:{
            "/blog/": [
                {
                        title: 'Java基础',
                        collapsable: false,
                        children: [
                            ['/', 'java继承'],
                            ['/', 'java多态']
                        ]
                    },
                    {
                        title: 'Spring',
                        collapsable: false,
                        children: [
                            ['/blog/Spring/spring-boot-start', 'Spring起步'],
                            ['/blog/Spring/spring-boot-annotation', 'Spring注解'],
                            ['/blog/Spring/spring-boot-validation', 'Spring注解校验'],
                        ]
                    },
                    {
                        title: '框架和工具',
                        collapsable: false,
                        children: [
                            ['/blog/tech/vuepress', 'VuePress'],
                            ['/blog/tech/spring-boot-thymeleaf', 'Thymeleaf'],
                            ['/blog/tech/spring-boot-pagehelper&&tkmybatis', 'pagehelper和tk.mybatis使用'],
                            ['/blog/tech/spring-boot-swagger2', 'Swagger2 接口文档引擎'],
                            ['/blog/tech/nginx-cdn', 'nginx反向代理cdn'],
                        ]
                    },
                    {
                        title: '项目开发',
                        collapsable: false,
                        children: [
                            ['/blog/project/project-build', '项目创建过程'],
                            ['/blog/project/templateuse', '利用前端模板'],
                        ]
                    },
                    {
                        title: '问题解决',
                        collapsable: false,
                        children: [
                            ['/blog/solve/spring-boot-static', '静态资源无法访问'],
                        ]
                    }
                    ,{
                        title: '日志',
                        collapsable: false,
                        children: [
                            ['/blog/essay/2019-schedule', '2019年和接下来安排'],
                        ]
                    }
            ],
            "/guide/" : [
                {
                    title: ' ',
                    collapsable: false,
                    children: [

                        ['/guide/', ' '],
                    ]
                }
            ]
        }
    }
};


