module.exports = {
    base: '/Tiny-blog/',
    title: 'Tiny-blog',
    description: 'Vuepress blog',
    head: [
        ['link', {rel: 'icon', href: '/vue-logo.png'}]
    ],
    plugins: [
        [
            'vuepress-plugin-helper-live2d',{
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
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
        repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            {text: '主页', link: '/'},
            {text: '博客', link: '/'},
            {text: '关于我', link: '/'},
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/japanese' }
                ]
            }
        ],
        sidebar: [
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
                    ['/blog/spring-boot-start', 'Spring起步'],
                    ['/blog/spring-boot-annotation', 'Spring注解'],
                    ['/blog/spring-boot-validation', 'Spring注解校验'],
                ]
            },
            {
                title: '框架和工具',
                collapsable: false,
                children: [
                    ['/blog/templateuse', '使用前端模板'],
                    ['/blog/spring-boot-thymeleaf', 'Thymeleaf'],
                    ['/blog/spring-boot-pagehelper&&tkmybatis', 'pagehelper和tk.mybatis使用'],
                    ['/blog/spring-boot-swagger2', 'Swagger2 接口文档引擎'],
                    ['/blog/nginx-cdn', 'nginx反向代理cdn'],
                ]
            },
            {
                title: '项目开发',
                collapsable: false,
                children: [
                    ['/blog/project-build', '项目创建过程'],
                    ['/', '页面绘制']
                ]
            },
            {
                title: '问题解决',
                collapsable: false,
                children: [
                    ['/blog/spring-boot-static', '静态资源无法访问'],
                ]
            }
        ]
    }
};
