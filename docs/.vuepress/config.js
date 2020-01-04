const navConf=require('../../config/navConf.js');
const siderConf=require('../../config/siderConf.js');
const pluginsConf=require('../../config/pluginsConf.js');

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
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" }]
    ],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.set({html: true})
            md.use(require("markdown-it-katex"))
        }
    },
    plugins: pluginsConf,
    themeConfig: {
        // logo: '/swk.png',
        // 你的GitHub仓库
        // repo: 'https://github.com/Tinnnny/Tiny-blog',
        // 自定义仓库链接文字。
        // repoLabel: 'GitHub',
        nav: navConf,
        lastUpdated: '最近更新',
        smoothScroll: true,
        sidebar:siderConf
    }
};
