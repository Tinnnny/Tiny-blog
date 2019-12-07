# KaTex/LaTex 用法
[用法参考1](https://pandao.github.io/editor.md/examples/katex.html) [用法参考2](https://blog.csdn.net/qq_41518277/article/details/89434324) ]  [用法参考3](https://blog.csdn.net/c20182030/article/details/84840373#LaTexKaTex_26)
## 区分LaTex和KaTex
**LaTeX**是一种基于ΤΕΧ的排版系统，由美国计算机学家莱斯利·兰伯特（Leslie Lamport）在20世纪80年代初期开发，利用这种格式，即使使用者没有排版和程序设计的知识也可以充分发挥由TeX所提供的强大功能，能在几天，甚至几小时内生成很多具有书籍质量的印刷品。对于生成复杂表格和数学公式，这一点表现得尤为突出。因此它非常适用于生成高印刷质量的科技和数学类文档。

**MathJax**是一个显示网络上数学公式的开源JavaScript引擎库，它可以在所有浏览器上面工作，其中就支持LaTeX，MathML和AsciiMath 符号，里面的数字会被MathJax使用JavaScript引擎解析成HTML，SVG或者是MathML 方程式，然后在现代的浏览器里面显示。 它的设计目标是利用最新的web技术，构建一个支持math的web平台。支持主要的浏览器和操作系统,包括那些移动设备

**KaTeX**是由可汗学院出品，号称“最快”的数学公式渲染库，支持主流的浏览器：Chrome, Firefox, Safari, Opera和 IE8~IE11。

## 关于{}，text{}与operatorname{}
“{}”效果相当于数学中的小括号：
| 原式               | 结果                           | 去掉大括号                | 结果   |
|------------------|------------------------------|----------------------|------|
| \{xyz\}^\{5\+5\} | ${xyz}^{5+5}$                |  xyz^5\+5   | $xyz^5+5$  |
| x^\{123\}        | $x^{123}$              |       x^123        |    $x^123$           |
| \{x\}            | ${x}$                    | x             | $x$ |
| \{7\}            | ${7}$                     | 7             | $7$ |

有时，我们需要特别把文字和公式区分开,此时可以用**\text{}来刻意划出一个文字的区域，用\operatorname{}来产生一个公式操作**。


## 基本语法
### 1.上下移
`^`代表上标，`_`代表下标。
| before                           | after                                 |
|----------------------------------|---------------------------------------|
|               `$C^{2^2}_{n+1}$`   |    $C^{2^2}_{n+1}$                    |
|    `${^1_2}\bigotimes {^3_4}$`     |      ${^1_2}\bigotimes {^3_4}$       |

### 2.字符变大变小
若需要显示更大或更小的字符，在符号前插入 \large 或 \small 命令。
| before                           | after                                 |
|----------------------------------|---------------------------------------|
|               `$\tiny x$`   |    $\tiny x$                    |
|    `$\scriptsize x$`     |     $\scriptsize x$       |
|         `$\footnotesize x$`         |   $\footnotesize x$       |
|         `$\small x$`         |     $\small x$     |
|         `$\normalsize x$`         |    $\normalsize x$      |
|         `$x$`         |     $x$     |
|         `$\large x$`         |    $\large x$      |
|         `$\Large x$`         |      $\Large x$    |
|         `$\LARGE x$`         |       $\LARGE x$   |
|         `$\huge x$`         |     $\huge x$     |
|         `$\Huge x$`         |      $\Huge x$    |

### 3.输入括号和分隔符
| before                           | after                                 | before                           | after                |
|----------------------------------|--------------------------------------|----------------------------------|--------------|
|   `$\lfloor {a} \rfloor$`     |  $\lfloor {a} \rfloor$  |  `$\lceil {b} \rceil$`  |    $\lceil {b} \rceil$    |
|   `$\lbrace {c} \rbrace$`     | $\lbrace {c} \rbrace$   |  `$\{ {d} \}$`  |    $\{ {d} \}$    |
|   `$\langle {e} \rangle$`     |  $\langle {e} \rangle$  |  `$\left( {f} \right)$`  |  $\left( {f} \right)$      |
|   `$\left[ {g} \right]$`     |  $\left[ {g} \right]$  |  `$\langle {h} \rangle$`  |    $\langle {h} \rangle$    |
|   `$/ {i} \backslash$`     |  $/ {i} \backslash$  |  `$\lmoustache {j} \rmoustache$`  |    $\lmoustache {j} \rmoustache$    |
|   `$\ulcorner {k} \urcorner$`     |  $\ulcorner {k} \urcorner$  |  `$\llcorner {l} \lrcorner$`  |  $\llcorner {l} \lrcorner$      |
|   `$\vert {m} \vert$`     |  $\vert {m} \vert$  |  `$\Vert {n} \Vert$`  |     $\Vert {n} \Vert$   |
|   `$\lgroup {o} \rgroup$`     | $\lgroup {o} \rgroup$   |  `$\lt {p} \gt$`  |     $\lt {p} \gt$   |

下面两个因为和markdown的表格冲突了所以单独摆出来。
- `$| \frac{a}{b} |$` -> $| \frac{a}{b} |$
- `$\| \frac{a}{b} \|$`-> $\| \frac{a}{b} \|$

此外可以使用\big \bigg \Big \Bigg控制括号的大小，比如：
```
$$
\Bigg ( 
	\bigg [ 
		\Big \{ 
			\big \langle 
				\| 
					\frac{a}{b} 
				\| 
			\big \rangle
		\Big \}
	\bigg ] 
\Bigg )
$$
```
得到：
$$
\Bigg ( 
	\bigg [ 
		\Big \{ 
			\big \langle 
				\| 
					\frac{a}{b} 
				\| 
			\big \rangle
		\Big \}
	\bigg ] 
\Bigg )
$$

### 4.上下标指令
{A} \over {B} 就是让A跑到B的上面来然后打一根杠杠。

`${1} \over {xyz \over {x}}$`->${1} \over {xyz \over {x}}$ 

用\atop，中间就不会有杠杠。

`$x \atop y$`->$x \atop y$

### 5.输入分式
用 `\frac {a} {b}` ，就会得到：$\frac{a}{b}$

还有以下这样的操作：
1. `$\tfrac{s}{m}$`-> 小分数$\tfrac{s}{m}$
2. `$\dfrac{s}{m}$` 嵌套是可以嵌套的。但是比较挤，比如：`$\dfrac{2}{c+\dfrac{2}{d+\dfrac{2}{4}}}$`,得到
$\dfrac{2}{c+\dfrac{2}{d+\dfrac{2}{4}}}$

### 6.输入根式
| before                           | after                                 |
|----------------------------------|---------------------------------------|
|               `$\sqrt [根指数] {被开方数}$`   |     $\sqrt [根指数] {被开方数}$                   |
|               `$\sqrt{被开方数}$ ←(平方根)`   |        $\sqrt{被开方数}$                 |
|               `$\sqrt x * \sqrt[3] x * \sqrt[-1] x$`   |      $\sqrt x * \sqrt[3] x * \sqrt[-1] x$                  |

### 7.输入省略号
ldots居下，cdots居中。
| before                           | after                                 |
|----------------------------------|---------------------------------------|
|               `${1+2+3+\ldots+n}$`   |       ${1+2+3+\ldots+n}$                 |
|               `${1+2+3+\cdots+n}$`   |           ${1+2+3+\cdots+n}$          |

还有各种各样的省略号，矩阵的时候将会用到。

| before           | after             | before          | after       |before          | after       |
|------------|-------------------------|---------------------|--------|---------------------|--------|
|   `\vdots`  |$\vdots$  |     `\cdots`    | $\cdots$  |  `\ddots`  |  $\ddots$    |
|   `\ldots` | $\ldots$ |         |   |    |      |
