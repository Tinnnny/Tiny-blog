# VuePress使用Katex插件
搞了一个下午，按照网上的教程操作一直操作失败，最后实在没办法，仔细看了官网的教程才搞定。
::: danger 步骤
1. 安装插件
2. 将插件添加到配置中
3. 重新构建：`npm run docs:build`
:::

## 1.安装插件

```
$ cnpm install markdown-it-katex
```
## 2.配置
修改 `.vuepress/config.js`  下的配置，如下：

```js
module.exports = {
   markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({html: true})
            md.use(require("markdown-it-katex"))
        }
    }
}
```

构建后，一般的插件安装到此就完成了，对于 `markdown-it-katex` 来说，你还需要修改 `head` 项，依旧是 `.vuepress/config.js` 文件，在 `head` 中添加如下两行：

```js
module.exports = {
  head: [
    // ...
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ]
  // ...
}
```
## Katex的使用方式
### 1.行内使用
```
$\sqrt{3x-1}+(1+x)^2$
```
行内使用可以将公式放在文字段落中，比如$\sqrt{3x-1}+(1+x)^2$。

### 2.独段使用
```
$$
z = \sqrt{x^2 + y^2}
$$
```
独段使用的效果为：
$$
z = \sqrt{x^2 + y^2}
$$

另外，如果公式较长，也可以将多个公式包裹在内，比如：
$$\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}$$