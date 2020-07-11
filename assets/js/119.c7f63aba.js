(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{472:function(s,t,n){"use strict";n.r(t);var a=n(25),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"面试内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试内容"}},[s._v("#")]),s._v(" 面试内容")]),s._v(" "),n("h2",{attrs:{id:"自我介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自我介绍"}},[s._v("#")]),s._v(" 自我介绍")]),s._v(" "),n("p",[s._v("面试官您好，我叫陆珑威，是中国计量大学控制工程专业21届应届生。非常感谢能有机会来贵公司面试。我投递的岗位是Java开发工程师。")]),s._v(" "),n("p",[s._v("在校期间我分别参加过机械竞赛、工程训练大赛以及数学建模竞赛。并获得工程训练大赛省一等奖。我有过2次Java开发相关的经历，第一个是实验室需要开发一个纺织品检测的一个网站，主要实现线上纺织品检测及检测仪器的售卖。第二个就是我的课题相关，需要开发一个质量管理系统。")]),s._v(" "),n("p",[s._v("我觉得开发是一件很有意义也很有成就感的事情，我由衷的希望能加入贵公司，成为~~公司的一员。")]),s._v(" "),n("h2",{attrs:{id:"浙江省大学生工程训练竞赛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浙江省大学生工程训练竞赛"}},[s._v("#")]),s._v(" 浙江省大学生工程训练竞赛")]),s._v(" "),n("blockquote",[n("p",[s._v("他是一个关于纯机械的一个比赛。他的要求是每1米设置一个障碍物，根据每个团队加工的机械小车，根据重力势能达到绕障碍运动的目标，比赛成绩根据小车行进的距离决定。")])]),s._v(" "),n("p",[s._v("我在小组中的分工是进行cad加工图的设计，并参与一些零部件的加工。最后再一起进行小车的调试。")]),s._v(" "),n("h2",{attrs:{id:"数学建模竞赛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学建模竞赛"}},[s._v("#")]),s._v(" 数学建模竞赛")]),s._v(" "),n("blockquote",[n("p",[s._v("根据跳水运动员你的身高体重等与跳水动作时间的模型？是否需要根据体型设置一个难度系数的体型权值。")])]),s._v(" "),n("p",[s._v("分工：查找文献，讨论，并完成一部分论文的撰写。")]),s._v(" "),n("h2",{attrs:{id:"spring-security-使用？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-使用？"}},[s._v("#")]),s._v(" Spring Security 使用？")]),s._v(" "),n("p",[s._v("Spring Security是一款基于Spring的安全框架，主要包含授权和认证两大安全模块。")]),s._v(" "),n("ol",[n("li",[s._v("开启Spring Security。引入依赖后，项目就默认开启了basic类型的认证，默认用户名是user，密码由Spring Security自动生成。")]),s._v(" "),n("li",[s._v("Spring Security的配置主要通过创建一个继承WebSecurityConfigureAdapter的类来实现。通过http.formLogin就指定了表单登录。")]),s._v(" "),n("li",[s._v("Spring Security自定义用户认证。自定义认证需要实现Spring Security提供的UserDetailService接口，该方法只有一个抽象方法LoadUserByUsername.")]),s._v(" "),n("li",[s._v("自定义登录成功和失败逻辑只需要实现AuthenticationSuccessHandler和AuthenticationFailureHandler接口的方法。")]),s._v(" "),n("li",[s._v("配合授权注解实现权限控制。")])]),s._v(" "),n("h2",{attrs:{id:"oauth2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oauth2"}},[s._v("#")]),s._v(" Oauth2")]),s._v(" "),n("p",[s._v("Oauth2是一种用来规范令牌发放的授权机制，主要包含四种授权模式:授权码模式、简化模式、密码模式和客户端模式。")]),s._v(" "),n("p",[s._v("密码模式:用户向客户端提供用户名和密码，客户端通过用户名和密码到认证服务器获取令牌。")]),s._v(" "),n("p",[s._v("密码模式获取令牌的步骤：\n1.使用PostMan发送Post请求到localhost:8080/oauth/token。并填写granttype，username，password和scope")]),s._v(" "),n("h2",{attrs:{id:"spring-security基本原理？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-security基本原理？"}},[s._v("#")]),s._v(" Spring Security基本原理？")]),s._v(" "),n("p",[s._v("Spring Security包含了很多过滤器，这些过滤器形成了一条链，所有请求都必须通过这些过滤器后才能成功访问到资源。")]),s._v(" "),n("h2",{attrs:{id:"spring-security-oauth2整合jwt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-oauth2整合jwt"}},[s._v("#")]),s._v(" Spring Security Oauth2整合JWT?")]),s._v(" "),n("ol",[n("li",[s._v("让认证服务器继承AuthorizationServerConfigureAdapter，并指定TokenStore为JwtTokenStore")])]),s._v(" "),n("h2",{attrs:{id:"spring-validation使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-validation使用步骤"}},[s._v("#")]),s._v(" Spring Validation使用步骤")]),s._v(" "),n("ol",[n("li",[s._v("导入pom")]),s._v(" "),n("li",[s._v("定义验证工具类")]),s._v(" "),n("li",[s._v("在实体类上加注解")]),s._v(" "),n("li",[s._v("在xml文件中注入工具类")])]),s._v(" "),n("h2",{attrs:{id:"swagger2使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swagger2使用步骤"}},[s._v("#")]),s._v(" Swagger2使用步骤")]),s._v(" "),n("ol",[n("li",[s._v("导入pom")]),s._v(" "),n("li",[s._v("增加配置类")]),s._v(" "),n("li",[s._v("在启动类上增加@EnableSwagger2注解，在Controller中增加Swagger2相关注解。")])]),s._v(" "),n("p",[s._v("1.java有哪些基础数据类型？\nbyte、short、long、int、double、float、boolean、char\n2.Object类的方法有哪些？\nclone方法、getClass方法、toString方法、finalize方法、equals方法、hashCode方法、wait方法、notify方法、notifyAll方法。\n3.SpringBoot和SpringMVC的区别？\nSpring MVC 是基于Spring的一个 MVC 框架，Spring Boot 是基于Spring4的条件注册的一套快速开发整合包。\n4.关系型数据库和菲关系型数据库的区别？\n5. 数据结构的算法有哪些？\n6.学习过数据结构的哪些方面的内容？\n7.数据库的四大原则？\n8.设计模式的原则\n9.单例模式创建的两种方式\n懒汉式和饿汉式，懒汉式在第一次使用的时候实例化，饿汉式在创建时便实例化\n总结：自己不会的不要乱说，他们一定会问。")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("springmvc是怎么处理请求的？")])]),s._v(" "),n("li",[n("p",[s._v("git回滚可以运用哪些指令？")])]),s._v(" "),n("li",[n("p",[s._v("redis数据结构")])]),s._v(" "),n("li",[n("p",[s._v("redis和mongodb的区别？")])]),s._v(" "),n("li",[n("p",[s._v("对springboot的看法？")])]),s._v(" "),n("li",[n("p",[s._v("拦截器和过滤器的区别？")])]),s._v(" "),n("li",[n("p",[s._v("多线程：五个线程同时处理一个arrlist，请问是大于还是小于还是等于5")])]),s._v(" "),n("li",[n("p",[s._v("@ControllerAdvice能实现异常捕获处理吗？")])]),s._v(" "),n("li",[n("p",[s._v("异常的继承是怎么样的？")])]),s._v(" "),n("li",[n("p",[s._v("怎么处理全局异常？")])]),s._v(" "),n("li",[n("p",[s._v("mybatis底层是什么原理？")])]),s._v(" "),n("li",[n("p",[s._v("aop和动态代理有什么区别？")])]),s._v(" "),n("li",[n("p",[s._v("security 权限设置原理")])]),s._v(" "),n("li",[n("p",[s._v("手写jdbc程序")])]),s._v(" "),n("li",[n("p",[s._v("String、Stringbuilder和StringBuffer的区别，为什么一个效率高，一个线程安全。")])]),s._v(" "),n("li",[n("p",[s._v("手写三种单例模式")])]),s._v(" "),n("li",[n("p",[s._v("http由哪几部分组成，主要的请求方法由哪些？请求参数的获取有哪些注解？")])]),s._v(" "),n("li",[n("p",[s._v("SpringCloud一个方法调用另一个方法，可以怎么实现？")])]),s._v(" "),n("li",[n("p",[s._v("docker怎么用的？")])]),s._v(" "),n("li",[n("p",[s._v("内存溢出和内存泄漏的区别，怎么排查")])]),s._v(" "),n("li",[n("p",[s._v("字符串反转代码？")])]),s._v(" "),n("li",[n("p",[s._v("基本类型和包装类型的区别，为什么需要包装类型？")])]),s._v(" "),n("li",[n("p",[s._v("http三次握手四次挥手？")])]),s._v(" "),n("li",[n("p",[s._v("抽象类与接口的区别,抽象类的子类可以访问父类的方法吗？")])]),s._v(" "),n("li",[n("p",[s._v("子类怎么访问父类的方法？")])]),s._v(" "),n("li",[n("p",[s._v("枚举可以有方法，可以被继承吗？")])]),s._v(" "),n("li",[n("p",[s._v("构造方法和静态方法执行时间")])]),s._v(" "),n("li",[n("p",[s._v("金钱适用于哪种数据类型？")])]),s._v(" "),n("li",[n("p",[s._v("Mongodb在项目中的作用？为什么用nosql？")])]),s._v(" "),n("li",[n("p",[s._v("用的mysql的什么引擎？")])]),s._v(" "),n("li",[n("p",[s._v("tcp，http分别在网络中的哪一层？")])]),s._v(" "),n("li",[n("p",[s._v("linux查看端口，进程，资源等命令？")])]),s._v(" "),n("li",[n("p",[s._v("如果一个mongodb崩了怎么办？除了mongodb还用过什么其他的nosql？")])]),s._v(" "),n("li",[n("p",[s._v("用过spring cloud吗？")])]),s._v(" "),n("li",[n("p",[s._v("hashmap底层是怎么解决冲突的？")])]),s._v(" "),n("li",[n("p",[s._v("hashmap底层是用什么实现的？hashtable是什么？")])]),s._v(" "),n("li",[n("p",[s._v("电表管理系统是否是前后端分离的？")])]),s._v(" "),n("li",[n("p",[s._v("项目是怎么部署的？")])]),s._v(" "),n("li",[n("p",[s._v("有没有用git分支进行还发，使用gitlab还是github？在git的时候是否遇到过冲突？")])]),s._v(" "),n("li",[n("p",[s._v("数据库的隔离级别？")])]),s._v(" "),n("li",[n("p",[s._v("有没有用过数据库的事务？用什么注解？事务的四大特性？spring事务")])]),s._v(" "),n("li",[n("p",[s._v("redis的主要用途是什么？为什么缓存比查询数据库速度要快？")])]),s._v(" "),n("li",[n("p",[s._v("有没有阅读过Spring的源码？")])]),s._v(" "),n("li",[n("p",[s._v("有用过jdk8的哪些新特性？")])]),s._v(" "),n("li",[n("p",[s._v("生成随机数")])]),s._v(" "),n("li",[n("p",[s._v("数组扩容")])]),s._v(" "),n("li",[n("p",[s._v("使用jwt")])]),s._v(" "),n("li",[n("p",[s._v("String 类为什么是final的")]),s._v(" "),n("ol",[n("li",[s._v("为了实现字符串池")])])]),s._v(" "),n("li",[n("p",[s._v("为了线程安全")])]),s._v(" "),n("li",[n("p",[s._v("为了实现String可以创建HashCode不可变性")])])]),s._v(" "),n("p",[s._v("2，JDK8的HashMap的源码，实现原理，底层结构")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hashCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hashCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hashCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" newValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" oldValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" oldValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Entry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("实现原理：首先有一个每个元素都是链表（可能表述不准确）的数组，当添加一个元素（key-value）时，就首先计算元素key的hash值，以此确定插入数组中的位置，但是可能存在同一hash值的元素已经被放在数组同一位置了，这时就添加到同一hash值的元素的后面，他们在数组的同一位置，但是形成了链表，同一各链表上的Hash值是相同的，所以说数组存放的是链表。而当链表长度太长时，链表就转换为红黑树，这样大大提高了查找的效率。")]),s._v(" "),n("p",[s._v("位桶+链表+红黑树实现，当链表长度超过阈值（8）时，将链表转换为红黑树")]),s._v(" "),n("p",[s._v("3，Class.forName和classloader的区别\na）.Class.forName除了将类的.class文件加载到jvm中之外，还会对类进行解释，执行类中的static块。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("b).而classloader只干一件事情，就是将.class文件加载到jvm中，不会执行static中的内容，只有在newInstance才会去执行static块。\n\nc).Class.forName(name,initialize,loader)带参数也可控制是否加载static块。并且只有调用了newInstance()方法采用调用构造函数，创建类的对象。\n")])])]),n("p",[s._v("4,session和cookie的区别和联系，session的生命周期，多个服务部署时session管理。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("1、cookie数据存放在客户的浏览器上，session数据放在服务器上。\n\n2、cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session。\n\n3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie。\n\n4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。\n\n5、可以考虑将登陆信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中。\n\nSession存储在服务器的内存中（为了高速存取）。\n\nSession何时生效\nSessinon在用户访问第一次访问服务器时创建，需要注意只有访问JSP、Servlet等程序时才会创建Session，只访问HTML、IMAGE等静态资源并不会创建Session,可调用request.getSession(true)强制生成Session。\n\nSession何时失效\n1.服务器会把长时间没有活动的Session从服务器内存中清除，此时Session便失效。Tomcat中Session的默认失效时间为20分钟。\n\n2.调用Session的invalidate方法。\n\nsession管理：1，session复制 \n\t     2，session绑定\n\t     3，session写入cookie\n\t     4，session服务器\n")])])]),n("p",[s._v("5，Java中的队列都有哪些，有什么区别。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("1、未实现阻塞接口的：\n")])])]),n("p",[s._v("LinkedList : 实现了Deque接口，受限的队列\n　　\t\tPriorityQueue ： 优先队列，本质维护一个有序列表。可自然排序亦可传递 comparator构造函数实现自定义排序。\n　　\t\tConcurrentLinkedQueue：基于链表 线程安全的队列。增加删除O(1) 查找O(n)\n2、实现阻塞接口的：")]),s._v(" "),n("p",[s._v("实现blockqueue接口的五个阻塞队列，其特点：线程阻塞时，不是直接添加或者删除元素，而是等到有空间或者元素时，才进行操作。\n　　\t\tArrayBlockingQueue： 基于数组的有界队列\n　　\t\tLinkedBlockingQueue： 基于链表的无界队列\n　　\t\tProiporityBlockingQueue：基于优先次序的无界队列\n　　\t\tDelayQueue：基于时间优先级的队列\n　　\t\tSynchronousQueue：内部没有容器的队列 较特别 --其独有的线程一一配对通信机制")]),s._v(" "),n("p",[s._v("6，详谈一下Java的内存模型以及GC算法。\njava内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("线程的工作内存中保存了被该线程使用到的变量的主内存副本拷贝，线程对变量的所有操作都要在工作内存中进行，而不能直接读写主内存中的变量。不同的线程之间也无法直接访问对方工作内存中的变量。\n\t\n引用计数算法，根搜索算法，标记-清除算法，标记-整理算法\n")])])]),n("p",[s._v("7，Java10,Java11的新特性。\n太多了太繁琐了不写了")]),s._v(" "),n("p",[s._v("8，Java内存泄漏的问题调查定位:jmap,jstack的使用。\njmap:用jmap把进程内存使用情况dump到文件中，再用jhat分析查看。jmap进行dump命令格式如下：\n1,jmap -dump:format=b,file=dumpFileName")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("jstack:jstack主要用来查看某个Java进程内的线程堆栈信息。语法格式如下：\n1,jstack [option] pid\n2,jstack [option] executable core\n3,jstack [option] [server-id@]remote-hostname-or-ip\n\n命令行参数选项说明如下：\n1,-l long listings，会打印出额外的锁信息，在发生死锁时可以用jstack -l pid来观察锁持有情况\n2,-m mixed mode，不仅会输出Java堆栈信息，还会输出C/C++堆栈信息（比如Native方法）\njstack可以定位到线程堆栈，根据堆栈信息我们可以定位到具体代码，所以它在JVM性能调优中使用得非常多。\n")])])]),n("p",[s._v("9，Spring的体系结构和jar用途\ncore\n　　core部分包含4个模块\nspring-core：依赖注入IoC与DI的最基本实现\nspring-beans：Bean工厂与bean的装配\nspring-context：spring的context上下文即IoC容器\nspring-expression：spring表达式语言\naop部分包含4个模块\nspring-aop：面向切面编程\nspring-aspects：集成AspectJ\nspring-instrument：提供一些类级的工具支持和ClassLoader级的实现，用于服务器\nspring-instrument-tomcat：针对tomcat的instrument实现\ndata access部分包含5个模块\nspring-jdbc：jdbc的支持\nspring-tx：事务控制\nspring-orm：对象关系映射，集成orm框架\nspring-oxm：对象xml映射\nspring-jms：java消息服务")]),s._v(" "),n("p",[s._v("web部分包含4个模块\nspring-web：基础web功能，如文件上传\nspring-webmvc：mvc实现\nspring-webmvc-portlet：基于portlet的mvc实现\nspring-struts：与struts的集成，不推荐，spring4不再提供")]),s._v(" "),n("p",[s._v("test部分只有一个模块，我将spring-context-support也放在这吧\nspring-test：spring测试，提供junit与mock测试功能\nspring-context-support：spring额外支持包，比如邮件服务、视图解析等")]),s._v(" "),n("p",[s._v("10，SpringMvc的运行原理\n1. 客户端请求提交到DispatcherServlet\n2. 由DispatcherServlet控制器查询一个或多个HandlerMapping，找到处理请求的Controller\n3. DispatcherServlet将请求提交到Controller\n4. Controller调用业务逻辑处理后，返回ModelAndView\n5. DispatcherServlet查询一个或多个ViewResoler视图解析器，找到ModelAndView指定的视图\n6. 视图负责将结果显示到客户端 DispatcherServlet是整个Spring MVC的核心。它负责接收HTTP请求组织协调Spring MVC的各个组成部分。")]),s._v(" "),n("p",[s._v("11，Springboot的执行过程\n1,首先新建一个SpringApplication对象\n2. 执行对象的run方法\n3. 对配置的启动类所在包及子包中的类进行扫描，对于有spring相关注解的类，通过反射为其创建代理对象，并交由spring容器管理")]),s._v(" "),n("p",[s._v("12，spring的事务隔离级别，实现原理。\nISOLATION_DEFAULT\t\t这是个 PlatfromTransactionManager 默认的隔离级别，使用数据库默认的事务隔离级别。另外四个与 JDBC 的隔离级别相对应。\nISOLATION_READ_UNCOMMITTED\t这是事务最低的隔离级别，它充许另外一个事务可以看到这个事务未提交的数据。这种隔离级别会产生脏读，不可重复读和幻像读。\nISOLATION_READ_COMMITTED\t保证一个事务修改的数据提交后才能被另外一个事务读取。另外一个事务不能读取该事务未提交的数据。\nISOLATION_REPEATABLE_READ\t这种事务隔离级别可以防止脏读，不可重复读。但是可能出现幻像读。\nISOLATION_SERIALIZABLE\t\t这是花费最高代价但是最可靠的事务隔离级别。事务被处理为顺序执行。")]),s._v(" "),n("p",[s._v("实现原理:\n一、 IoC(Inversion of control): 控制反转 \n1、IoC： \n概念：控制权由对象本身转向容器；由容器根据配置文件去创建实例并创建各个实例之间的依赖关系 \n核心：bean工厂；在Spring中，bean工厂创建的各个实例称作bean \n二、AOP(Aspect-Oriented Programming): 面向方面编程 (其实我的理解是，通过配置文件来实现模块和模块，对象和对象的分离。)\n1、 代理的两种方式： \n静态代理： \n \t针对每个具体类分别编写代理类； \n \t针对一个接口编写一个代理类； \n动态代理： \n针对一个方面编写一个InvocationHandler，然后借用JDK反射包中的Proxy类为各种接口动态生成相应的代理类 \n2、 AOP的主要原理：动态代理")]),s._v(" "),n("p",[s._v("13，Spring IOC 和AOP的底层实现。\nIOC底层实现原理主要技术\n①使用XML文件配置\n②dom4j解析xml\n③工厂设计模式\n④反射机制创建对象\nAOP用动态代理机制和字节码生成技术实现 。\n　　\t\t与最初的 AspectJ 采用编译器将横切逻辑织入目标对象不同，动态代理机制和字节码生成都是在运行期间为目标对象生成一个代理对象，\n而将横切逻辑织入到这个代理对象中，系统最终使用的是织入了横切逻辑的代理对象，而不是真正的目标对象。")]),s._v(" "),n("p",[s._v("14，SpringBoot 优势和劣势，以及适用场景等")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("优点：\n1、快速构建项目。\n2、对主流开发框架的无配置集成。\n3、项目可独立运行，无须外部依赖Servlet容器。\n4、提供运行时的应用监控。\n5、极大的提高了开发、部署效率。\n6、与云计算的天然集成。\n缺点：\n1、如果你不认同spring框架，也许这就是缺点。\n2、SpringBoot特性\n3、创建独立的Spring项目\n4、内置Tomcat和Jetty容器\n5、提供一个starter POMs来简化Maven配置\n6、提供了一系列大型项目中常见的非功能性特性，如安全、指标，健康检测、外部配置等\n7、完全没有代码生成和xml配置文件\n\n场景:好用就用，不能用再想办法\n")])])]),n("p",[s._v("15，讲一下SpringCloud和dubbo的优缺点\ndubbo由于是二进制的传输，占用带宽会更少\nspringCloud是http协议传输，带宽会比较多，同时使用http协议一般会使用JSON报文，消耗会更大\ndubbo的开发难度较大，原因是dubbo的jar包依赖问题很多大型工程无法解决\nspringcloud的接口协议约定比较自由且松散，需要有强有力的行政措施来限制接口无序升级\ndubbo的注册中心可以选择zk,redis等多种，springcloud的注册中心只能用eureka或者自研")]),s._v(" "),n("p",[s._v("16，什么是Hystrix?它如何实现容错？\nHystrix 是世界最大在线影片租赁服务商Netflix的众多开源项目之一，针对分布式系统的延迟和容错库。\n网络请求设置超时——保证被占用着的线程/进程资源得到释放\n使用断路器模式——如果请求某微服务大量超时（不可用），就不再去请求了（断路器打开，直接返回默认值），隔段时间重试恢复正常了，断路器才关闭\n使用方法自行百度")]),s._v(" "),n("p",[s._v("17，什么是Netflix Feign?它的优点是什么？\nFeign是受到Retrofit，JAXRS-2.0和WebSocket启发的java客户端联编程序。Feign的第一个目标是将约束分母的复杂性统一到http apis，而不考虑其稳定性。\n在employee-consumer的例子中，我们使用了employee-producer使用REST模板公开的REST服务。\n但是我们必须编写大量代码才能执行以下步骤\n使用功能区进行负载平衡。\n获取服务实例，然后获取基本URL。\n利用REST模板来使用服务。")]),s._v(" "),n("p",[s._v("18，谈一谈分布式一致性到CAP理论，BASE理论\n一个分布式系统不可能同时满足一致性[Consistency]，可用性[Availability]，和分区容错性[Partition tolerance]这三个基本需求，最多只能同时满足其中的两项。")]),s._v(" "),n("p",[s._v("19，常用的线程池模式以及不同线程池的使用场景")]),s._v(" "),n("p",[s._v("20，ReentrantLock和synchronized的区别\n等待可中断——对于synchronized，如果一个线程正在等待锁，那么结果只有两种情况，要么获得这把锁继续执行 ，要么就保持等待。\n而使用ReentrantLock，如果一个线程正在等待锁，那么它依然可以收到通知，被告知无需再等待，可以停止工作了。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("base是Basically Available（基本可用）、Soft state（软状态）和Eventually consistent（最终一致性）三个短语的简写。base是对cap中一致性和可用性的权衡的结果。是根据cao理论演变而来，核心思想是即使无法做到强一致性，但是每个应用根据自身的业务特点，采用适当的方式来使系统达到最终与执行。\n①基本可用\n基本可用指的是分布式系统出现了不可预知故障的时候，允许损失部分可用性。响应时间合理延长，功能上适当做服务降级。\n②弱状态\n弱状态指的是允许系统中的数据存在中间状态，并认为该中间状态不会永祥系统的整体可用性，即允许在各个节点数据同步时存在延时。\n③最终一致性\n最终一致性强调的是系统中所有的数据副本，在经过一点时间 的同步之后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证数据最终能够达到一致。而不需要实时保证系统数据的一致性。\n")])])]),n("p",[s._v("21，atomicinteger和volatile等线程安全操作的关键字的理解和使用\nAtomicInteger的源代码：private volatile int value;"),n("br"),s._v("\n当多个线程同时访问一个共享变量时，可以使用volatile，而当访问的变量已在synchronized代码块中时，不必使用\n缺点：使用volatile将使得VM优化失去作用，导致效率较低，所以要在必要的时候使用。")]),s._v(" "),n("p",[s._v("22，分布式锁三种实现方式\n基于数据库实现分布式锁；\n基于缓存（Redis等）实现分布式锁；\n基于Zookeeper实现分布式锁；")]),s._v(" "),n("p",[s._v("23，socket框架netty的使用，以及NIO的实现原理，为什么是异步非阻塞\n使用就是要写代码咯，自己百度。\n实现原理:主要利用缓冲区来进行传输字节(具体百度)")]),s._v(" "),n("p",[s._v("24，简述NIO的最佳实践\nhttps://blog.csdn.net/csdn_kenneth/article/details/82931576")]),s._v(" "),n("p",[s._v("25，Zookeeper的用途，选举的原理是什么\n分布式应用程序可以基于它实现同步服务，配置维护和命名服务等。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("原理太多直接地址:https://blog.csdn.net/liuj2511981/article/details/42460069\n")])])]),n("p",[s._v("26，手写一个赫夫曼树\nhttps://blog.csdn.net/bruce_6/article/details/38656413")])])}),[],!1,null,null,null);t.default=e.exports}}]);