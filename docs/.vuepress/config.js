module.exports = {
    base: '/Tiny-blog/',
    title: 'Tiny-blog',
    description: 'Vuepress blog',
    head: [
        ['link', {rel: 'icon', href: '/vue-logo.png'}]
    ],
    themeConfig: {
        // 你的GitHub仓库
        repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            {text: '主页', link: '/'},
            {text: '博客', link: '/blog/FirstBlog.md'},
            {text: '关于我', link: '/blog/FirstBlog.md'},
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
            // },
            // {
            //     title: '框架和工具',
            //     collapsable: false,
            //     children: [
            //         ['/blog/spring-boot-annotation', 'Spring注解'],
            //         ['/blog/spring-boot-pagehelper&&tkmybatis', 'Pagehelper和tkmybatis使用方法1'],
            //         ['/blog/spring-boot-pagehelper&&tkmybatis2', 'Pagehelper和tkmybatis使用方法2'],
            //         ['/blog/spring-boot-start', 'Spring起步'],
            //         ['/blog/spring-boot-swagger2', 'Swagger2 接口文档引擎'],
            //         ['/blog/spring-boot-thymeleaf', 'thymeleaf'],
            //         ['/blog/spring-boot-validation', 'Spring校验注解'],
            //         ['/blog/nginx-cdn', 'Nginx反向代理cdn'],
            //     ]
            // },
            // {
            //     title: '项目开发',
            //     collapsable: false,
            //     children: [
            //         ['/', '项目创建'],
            //         ['/', '页面绘制']
            //     ]
            // },
            // {
            //     title: '问题解决',
            //     collapsable: false,
            //     children: [
            //         ['/blog/spring-boot-static', '静态资源无法访问'],
            //     ]
            }
        ]
    }
};
