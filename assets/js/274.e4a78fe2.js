(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{626:function(t,s,a){"use strict";a.r(s);var n=a(25),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的设计"}},[t._v("#")]),t._v(" 数据库的设计")]),t._v(" "),a("p",[t._v("多表之间的关系有一对一、一对多(多对一)和多对多等三种。")]),t._v(" "),a("h2",{attrs:{id:"实现关系："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现关系："}},[t._v("#")]),t._v(" 实现关系：")]),t._v(" "),a("ol",[a("li",[t._v("一对多(多对一)：")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g9rn1pbgzhj30na0c9jri.jpg"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("多对多：")])]),t._v(" "),a("ul",[a("li",[t._v("如：学生和课程")]),t._v(" "),a("li",[t._v("实现方式：多对多关系实现需要借助第三张中间表。中间表至少包含两个字段，这两个字段作为第三张表的外键，分别指向两张表的主键,里面的内容就是把多对多的内容列举出来。此时，这两个字段就可以是联合主键。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g9rmzjgdx5j30v10g5mxm.jpg"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("一对一(了解)：")])]),t._v(" "),a("ul",[a("li",[t._v("如：人和身份证")]),t._v(" "),a("li",[t._v("实现方式：一对一关系实现，可以在任意一方添加唯一外键指向另一方的主键。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007Rnr4nly1g9rn0n1156j30oq0brglt.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建旅游线路分类表 tab_category")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cid 旅游线路分类主键，自动增长")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cname 旅游线路分类名称非空，唯一，字符串 100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tab_category "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建旅游线路表 tab_route")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nrid 旅游线路主键，自动增长\nrname 旅游线路名称非空，唯一，字符串 100\nprice 价格\nrdate 上架时间，日期类型\ncid 外键，所属分类\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tab_route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\trid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\trname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tprice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DOUBLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\trdate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" tab_category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*创建用户表 tab_user\nuid 用户主键，自增长\nusername 用户名长度 100，唯一，非空\npassword 密码长度 30，非空\nname 真实姓名长度 100\nbirthday 生日\nsex 性别，定长字符串 1\ntelephone 手机号，字符串 11\nemail 邮箱，字符串长度 100\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tab_user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tuid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tusername "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tPASSWORD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tNAME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tbirthday "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'男'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\ttelephone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\temail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n创建收藏表 tab_favorite\nrid 旅游线路 id，外键\ndate 收藏时间\nuid 用户 id，外键\nrid 和 uid 不能重复，设置复合主键，同一个用户不能收藏同一个线路两次\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tab_favorite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\trid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 线路id")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tuid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 用户id")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建复合主键")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 联合主键")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" tab_route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOREIGN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REFERENCES")]),t._v(" tab_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("​")]),t._v(" "),a("h2",{attrs:{id:"数据库设计的范式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计的范式"}},[t._v("#")]),t._v(" 数据库设计的范式")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("设计数据库时，需要遵循的一些规范。要遵循后边的范式要求，必须先遵循前边的所有范式要求。")]),t._v(" "),a("p",[t._v("目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。")]),t._v(" "),a("h3",{attrs:{id:"第一范式（1nf）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一范式（1nf）"}},[t._v("#")]),t._v(" 第一范式（1NF）")]),t._v(" "),a("p",[t._v("每一列都是不可分割的原子数据项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("学号")]),t._v(" "),a("th",[t._v("姓名")]),t._v(" "),a("th",[t._v("系名")]),t._v(" "),a("th",[t._v("系主任")]),t._v(" "),a("th",[t._v("课程名称")]),t._v(" "),a("th",[t._v("分数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("张无忌")]),t._v(" "),a("td",[t._v("经济系")]),t._v(" "),a("td",[t._v("张三丰")]),t._v(" "),a("td",[t._v("高等数学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("张无忌")]),t._v(" "),a("td",[t._v("经济系")]),t._v(" "),a("td",[t._v("张三丰")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("张无忌")]),t._v(" "),a("td",[t._v("经济系")]),t._v(" "),a("td",[t._v("张三丰")]),t._v(" "),a("td",[t._v("计算机基础")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("令狐冲")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("77")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("令狐冲")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("令狐冲")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("杨过")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("杨过")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("97")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("杨过")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("99")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("计算机系")]),t._v(" "),a("td",[t._v("殷天正")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("存在的问题：")]),t._v(" "),a("ol",[a("li",[t._v("存在非常严重的数据冗余(重复)：姓名、系名、系主任")]),t._v(" "),a("li",[t._v("数据添加存在问题：添加新开设的系和系主任时，数据不合法")]),t._v(" "),a("li",[t._v("数据删除存在问题：张无忌同学毕业了，删除数据，会将系的数据一起删除。")])])]),t._v(" "),a("h3",{attrs:{id:"第二范式（2nf）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二范式（2nf）"}},[t._v("#")]),t._v(" 第二范式（2NF）")]),t._v(" "),a("p",[t._v("在1NF的基础上，非码属性必须完全依赖于码（在1NF基础上消除非主属性对主码的部分函数依赖）")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("相关概念：")]),t._v(" "),a("ol",[a("li",[t._v("函数依赖：A--\x3eB,如果通过A属性(属性组)的值，可以确定唯一B属性的值。则称B依赖于A\n例如：学号--\x3e姓名。  （学号，课程名称） --\x3e 分数")]),t._v(" "),a("li",[t._v("完全函数依赖：A--\x3eB， 如果A是一个属性组，则B属性值得确定需要依赖于A属性组中所有的属性值。\n例如：（学号，课程名称） --\x3e 分数")]),t._v(" "),a("li",[t._v("部分函数依赖：A--\x3eB， 如果A是一个属性组，则B属性值得确定只需要依赖于A属性组中某一些值即可。\n例如：（学号，课程名称） -- > 姓名")]),t._v(" "),a("li",[t._v("传递函数依赖：A--\x3eB, B -- >C . 如果通过A属性(属性组)的值，可以确定唯一B属性的值，在通过B属性（属性组）的值可以确定唯一C属性的值，则称 C 传递函数依赖于A\n例如：学号--\x3e系名，系名--\x3e系主任")]),t._v(" "),a("li",[t._v("码：如果在一张表中，一个属性或属性组，被其他所有属性所完全依赖，则称这个属性(属性组)为该表的码\n例如：该表中码为：（学号，课程名称）\n"),a("ul",[a("li",[t._v("主属性：码属性组中的所有属性")]),t._v(" "),a("li",[t._v("非主属性：除过码属性组的属性")])])])])]),t._v(" "),a("p",[t._v("课程表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("学号")]),t._v(" "),a("th",[t._v("课程名称")]),t._v(" "),a("th",[t._v("分数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("高等数学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("计算机基础")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("77")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("97")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("99")])])])]),t._v(" "),a("p",[t._v("学生表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("学号")]),t._v(" "),a("th",[t._v("姓名")]),t._v(" "),a("th",[t._v("系名")]),t._v(" "),a("th",[t._v("系主任")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("张无忌")]),t._v(" "),a("td",[t._v("经济系")]),t._v(" "),a("td",[t._v("张三丰")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("令狐冲")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("杨过")]),t._v(" "),a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("计算机系")]),t._v(" "),a("td",[t._v("殷天正")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("存在的问题：")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("数据添加存在问题：添加新开设的系和系主任时，数据不合法")]),t._v(" "),a("li",[t._v("数据删除存在问题：张无忌同学毕业了，删除数据，会将系的数据一起删除。")])])]),t._v(" "),a("h3",{attrs:{id:"第三范式（3nf）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三范式（3nf）"}},[t._v("#")]),t._v(" 第三范式（3NF）")]),t._v(" "),a("p",[t._v("在2NF基础上，任何非主属性不依赖于其它非主属性（在2NF基础上消除传递依赖）")]),t._v(" "),a("p",[t._v("选课表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("学号")]),t._v(" "),a("th",[t._v("课程名称")]),t._v(" "),a("th",[t._v("分数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("高等数学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("计算机基础")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("77")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("87")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("65")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("法律社会学")]),t._v(" "),a("td",[t._v("95")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("法理学")]),t._v(" "),a("td",[t._v("97")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("大学英语")]),t._v(" "),a("td",[t._v("99")])])])]),t._v(" "),a("p",[t._v("学生表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("学号")]),t._v(" "),a("th",[t._v("姓名")]),t._v(" "),a("th",[t._v("系名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("10010")]),t._v(" "),a("td",[t._v("张无忌")]),t._v(" "),a("td",[t._v("经济系")])]),t._v(" "),a("tr",[a("td",[t._v("10011")]),t._v(" "),a("td",[t._v("令狐冲")]),t._v(" "),a("td",[t._v("法律系")])]),t._v(" "),a("tr",[a("td",[t._v("10012")]),t._v(" "),a("td",[t._v("杨过")]),t._v(" "),a("td",[t._v("法律系")])])])]),t._v(" "),a("p",[t._v("系表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("系名")]),t._v(" "),a("th",[t._v("系主任")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("经济系")]),t._v(" "),a("td",[t._v("张三丰")])]),t._v(" "),a("tr",[a("td",[t._v("法律系")]),t._v(" "),a("td",[t._v("任我行")])]),t._v(" "),a("tr",[a("td",[t._v("计算机系")]),t._v(" "),a("td",[t._v("殷天正")])])])]),t._v(" "),a("h2",{attrs:{id:"数据库的备份和还原"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的备份和还原"}},[t._v("#")]),t._v(" 数据库的备份和还原")]),t._v(" "),a("p",[t._v("备份")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v(" mysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u用户名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p密码 数据库名称 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 保存的路径\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("还原：")]),t._v(" "),a("ol",[a("li",[t._v("登录数据库")]),t._v(" "),a("li",[t._v("创建数据库相同名称的数据库")]),t._v(" "),a("li",[t._v("使用数据库("),a("code",[t._v("use database db1")]),t._v(")")]),t._v(" "),a("li",[t._v("执行文件。")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("source 文件路径\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);