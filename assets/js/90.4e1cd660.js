(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{443:function(s,a,e){"use strict";e.r(a);var t=e(25),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-compose-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-使用"}},[s._v("#")]),s._v(" Docker Compose 使用")]),s._v(" "),e("h2",{attrs:{id:"场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),e("p",[s._v("最常见的项目是 Web 网站，该项目应该包含 Web 应用和缓存。下面我们用 Python 来建立一个能够记录页面访问次数的 Web 网站。")]),s._v(" "),e("h3",{attrs:{id:"python-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-应用"}},[s._v("#")]),s._v(" Python 应用")]),s._v(" "),e("p",[s._v("新建文件夹，在该目录中编写 app.py 文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from flask import Flask\nfrom redis import Redis\napp = Flask(__name__)\nredis = Redis(host='redis', port=6379)\n@app.route('/')\ndef hello():\n    count = redis.incr('hits')\n    return 'Hello World! 该页面已被访问 {} 次。\\n'.format(count)\nif __name__ == \"__main__\":\n    app.run(host=\"0.0.0.0\", debug=True)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),e("p",[s._v("编写 Dockerfile 文件，内容为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('FROM python:3.6-alpine\nADD . /code\nWORKDIR /code\nRUN pip install redis flask\nCMD ["python", "app.py"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"docker-compose-模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-模板"}},[s._v("#")]),s._v(" Docker Compose 模板")]),s._v(" "),e("p",[s._v("编写"),e("code",[s._v("docker-compose.yml")]),s._v("文件，这个是 Compose 使用的主模板文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('version: \'3\'\nservices:\n  web:\n    build: .\n    ports:\n     - "5000:5000"\n  redis:\n    image: "redis:alpine"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"运行-compose-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-compose-项目"}},[s._v("#")]),s._v(" 运行 Compose 项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此时访问本地 5000 端口，每次刷新页面，计数就会加 1。")]),s._v(" "),e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[s._v("#")]),s._v(" 扩展阅读")]),s._v(" "),e("h3",{attrs:{id:"yaml配置文件语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml配置文件语言"}},[s._v("#")]),s._v(" YAML配置文件语言")]),s._v(" "),e("p",[s._v("YAML是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。YAML 语言的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。它的基本语法规则如下：")]),s._v(" "),e("ul",[e("li",[s._v("大小写敏感")]),s._v(" "),e("li",[s._v("使用缩进表示层级关系")]),s._v(" "),e("li",[s._v("缩进时不允许使用 TAB 键，只允许使用空格。")]),s._v(" "),e("li",[s._v("缩进的空格数目不重要，只要相同层级的元素左侧对齐即可")])]),s._v(" "),e("p",[e("code",[s._v("#")]),s._v("表示注释，从这个字符一直到行尾，都会被解析器忽略。YAML 支持的数据结构有三种：")]),s._v(" "),e("ul",[e("li",[s._v("对象： 键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）")]),s._v(" "),e("li",[s._v("数组： 一组按次序排列的值，又称为序列（sequence） / 列表（list）")]),s._v(" "),e("li",[s._v("纯量（scalars）： 单个的、不可再分的值")])]),s._v(" "),e("h3",{attrs:{id:"yaml-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-对象"}},[s._v("#")]),s._v(" YAML 对象")]),s._v(" "),e("p",[s._v("对象的一组键值对，使用冒号结构表示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("animal: pets\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"yaml-数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-数组"}},[s._v("#")]),s._v(" YAML 数组")]),s._v(" "),e("p",[s._v("一组连词线开头的行，构成一个数组")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- Cat\n- Dog\n- Goldfish\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("数据结构的子成员是一个数组，则可以在该项下面缩进一个空格")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- Array\n - Cat\n - Dog\n - Goldfish\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"yaml-复合结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-复合结构"}},[s._v("#")]),s._v(" YAML 复合结构")]),s._v(" "),e("p",[s._v("对象和数组可以结合使用，形成复合结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("languages:\n - Ruby\n - Perl\n - Python \nwebsites:\n YAML: yaml.org \n Ruby: ruby-lang.org \n Python: python.org \n Perl: use.perl.org \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"yaml-纯量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-纯量"}},[s._v("#")]),s._v(" YAML 纯量")]),s._v(" "),e("p",[s._v("纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量")]),s._v(" "),e("ul",[e("li",[s._v("字符串")]),s._v(" "),e("li",[s._v("布尔值")]),s._v(" "),e("li",[s._v("整数")]),s._v(" "),e("li",[s._v("浮点数")]),s._v(" "),e("li",[s._v("Null")]),s._v(" "),e("li",[s._v("时间")]),s._v(" "),e("li",[s._v("日期")])]),s._v(" "),e("h2",{attrs:{id:"修改-ip-和-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-ip-和-dns"}},[s._v("#")]),s._v(" 修改 IP 和 DNS")]),s._v(" "),e("p",[s._v("课程演示会采用多虚拟机模拟分布式场景，为防止 IP 冲突，无法联网等问题，需要预先设置好主机名、IP、DNS 配置")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("修改主机名")]),s._v(" "),e("ol",[e("li",[s._v("修改 cloud.cfg 防止重启后主机名还原")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/cloud/cloud.cfg\n# 该配置默认为 false，修改为 true 即可\npreserve_hostname: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("修改主机名")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 修改主机名\nhostnamectl set-hostname deployment\n# 配置 hosts\ncat >> /etc/hosts << EOF\n192.168.141.130 deployment\nEOF\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("修改 IP")]),s._v(" "),e("p",[s._v("编辑 "),e("code",[s._v("vi /etc/netplan/50-cloud-init.yaml")]),s._v(" 配置文件，修改内容如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("network:\n    ethernets:\n        ens33:\n          addresses: [192.168.141.130/24]\n          gateway4: 192.168.141.2\n          nameservers:\n            addresses: [192.168.141.2]\n    version: 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("使用 netplan apply 命令让配置生效")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("修改 DNS")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 取消 DNS 行注释，并增加 DNS 配置如：114.114.114.114，修改后重启下计算机\nvi /etc/systemd/resolved.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);