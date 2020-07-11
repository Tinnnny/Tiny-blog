(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{498:function(t,v,_){"use strict";_.r(v);var r=_(25),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),_("h2",{attrs:{id:"异常概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异常概念"}},[t._v("#")]),t._v(" 异常概念")]),t._v(" "),_("p",[t._v("在Java等面向对象的编程语言中，异常本身是一个类，产生异常就是创建异常对象并抛出了一个异常对象。Java处理异常的方式是"),_("strong",[t._v("中断处理")]),t._v("。异常指的并不是语法错误,语法错了,编译不通过,不会产生字节码文件,根本不能运行.")]),t._v(" "),_("h2",{attrs:{id:"异常体系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异常体系"}},[t._v("#")]),t._v(" 异常体系")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("Throwable是异常的根类，子类有：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Error")]),t._v(":严重错误Error，无法通过处理的错误，只能事先避免，好比绝症。大多数错误与代码编写者执行的操作无关，而表示代码运行时 JVM（Java 虚拟机）出现的问题。例如，Java虚拟机运行错误（Virtual MachineError），当 JVM 不再有继续执行操作所需的内存资源时，将出现 OutOfMemoryError。")]),t._v(" "),_("li",[_("strong",[t._v("Exception")]),t._v(":表示异常，异常产生后程序员可以通过代码的方式纠正，使程序继续运行，是必须要处理的。好比感冒、阑尾炎。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://ww1.sinaimg.cn/large/005PyHfLly1gfh6v837dpj30go0ahn29.jpg",alt:"undefined"}})]),t._v(" "),_("p",[_("strong",[t._v("Throwable中的常用方法：")])]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("public void printStackTrace()")]),t._v(":打印异常的详细信息。")]),t._v(" "),_("p",[_("em",[t._v("包含了异常的类型,异常的原因,还包括异常出现的位置,在开发和调试阶段,都得使用printStackTrace。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("public String getMessage()")]),t._v(":获取发生异常的原因。")]),t._v(" "),_("p",[_("em",[t._v("提示给用户的时候,就提示错误原因。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("public String toString()")]),t._v(":获取异常的类型和异常描述信息(不用)。")])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("异常(Exception)的分类")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("编译时异常")]),t._v(":checked异常。在编译时期,就会检查,如果没有处理异常,则编译失败。(如日期格式化异常)")]),t._v(" "),_("li",[_("strong",[t._v("运行时异常")]),t._v(":runtime异常。在运行时期,检查异常.在编译时期,运行异常不会编译器检测(不报错)。(如数学异常)")])])]),t._v(" "),_("p",[_("strong",[t._v("运行时异常和编译时异常的区别在于异常的对象不一样：")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("运行时异常：都是"),_("code",[t._v("RuntimeException")]),t._v("类及其子类异常，如"),_("code",[t._v("NullPointerException")]),t._v("(空指针异常)、"),_("code",[t._v("IndexOutOfBoundsException")]),t._v("(下标越界异常)等，这些异常是不检查异常，程序中可以选择捕获处理，也可以不处理。这些异常一般是由程序逻辑错误引起的，程序应该从逻辑角度尽可能避免这类异常的发生。\n运行时异常的特点是Java编译器不会检查它，也就是说，当程序中可能出现这类异常，即使没有用try-catch语句捕获它，也没有用throws子句声明抛出它，也会编译通过。")])]),t._v(" "),_("li",[_("p",[t._v("编译异常：是"),_("code",[t._v("RuntimeException")]),t._v("以外的异常，类型上都属于Exception类及其子类。从程序语法角度讲是必须进行处理的异常，如果不处理，程序就不能编译通过。如"),_("code",[t._v("IOException")]),t._v("、"),_("code",[t._v("SQLException")]),t._v("等以及用户自定义的Exception异常，一般情况下不自定义检查异常")])])]),t._v(" "),_("hr"),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("不可查异常")]),t._v("(编译器不要求强制处置的异常):包括"),_("strong",[t._v("运行时异常")]),t._v("（RuntimeException与其子类）和"),_("strong",[t._v("错误")]),t._v("（Error）。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("可查异常")]),t._v("（编译器要求必须处置的异常）：正确的程序在运行中，很容易出现的、情理可容的异常状况。可查异常虽然是异常状况，但在一定程度上它的发生是可以预计的，而且一旦发生这种异常状况，就必须采取某种方式进行处理。除了RuntimeException及其子类以外，其他的Exception类及其子类都属于可查异常。这种异常的特点是Java编译器会检查它，也就是说，当程序中可能出现这类异常，要么用try-catch语句捕获它，要么用throws子句声明抛出它，否则编译不会通过。")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);