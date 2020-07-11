(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{602:function(s,t,e){"use strict";e.r(t);var a=e(25),l=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux-远程控制管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-远程控制管理"}},[s._v("#")]),s._v(" Linux 远程控制管理")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("传统的网络服务程序，FTP、POP、Telnet 本质上都是不安全的，因为它们在网络上通过明文传送口令和数据，这些数据非常容易被截获。SSH 叫做 Secure Shell。通过 SSH，可以把传输数据进行加密，预防攻击，传输的数据进行了压缩，可以加快传输速度。")]),s._v(" "),e("h2",{attrs:{id:"openssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openssh"}},[s._v("#")]),s._v(" OpenSSH")]),s._v(" "),e("p",[s._v("SSH 是芬兰一家公司开发。但是受到版权和加密算法限制，现在很多人都使用 OpenSSH。OpenSSH 是 SSH 的替代软件，免费。OpenSSH 由客户端和服务端组成。")]),s._v(" "),e("ul",[e("li",[s._v("基于口令的安全验证： 知道服务器的帐号密码即可远程登录，口令和数据在传输过程中都会被加密。")]),s._v(" "),e("li",[s._v("基于密钥的安全验证： 此时需要在创建一对密钥，把公有密钥放到远程服务器上自己的宿主目录中，而私有密钥则由自己保存。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("安装流程如下：")]),s._v(" "),e("ol",[e("li",[s._v("检查软件是否安装")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-cache policy openssh-client openssh-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("安装服务端")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get install openssh-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("安装客户端")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get install openssh-client\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("OpenSSH 服务器的主要配置文件为 "),e("code",[s._v("/etc/ssh/sshd\\_config")]),s._v("，几乎所有的配置信息都在此文件中。")])]),s._v(" "),e("h2",{attrs:{id:"finalshell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finalshell"}},[s._v("#")]),s._v(" FinalShell")]),s._v(" "),e("p",[s._v("FinalShell 是一体化的的服务器，网络管理软件，不仅是 SSH 客户端，还是功能强大的开发，运维工具，充分满足开发，运维需求。\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g8joj1nurwj31hc0smac5.jpg"}})]),e("p")])}),[],!1,null,null,null);t.default=l.exports}}]);