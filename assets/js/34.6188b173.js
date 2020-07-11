(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{388:function(e,n,t){"use strict";t.r(n);var i=t(25),g=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"biginteger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biginteger"}},[e._v("#")]),e._v(" BigInteger")]),e._v(" "),t("p",[e._v("BigInteger\n在Java中，由CPU原生提供的整型最大范围是64位long型整数。使用long型整数可以直接通过CPU指令进行计算，速度非常快。")]),e._v(" "),t("p",[e._v("如果我们使用的整数范围超过了long型怎么办？这个时候，就只能用软件来模拟一个大整数。java.math.BigInteger就是用来表示任意大小的整数。BigInteger内部用一个int[]数组来模拟一个非常大的整数：")]),e._v(" "),t("p",[e._v('BigInteger bi = new BigInteger("1234567890");\nSystem.out.println(bi.pow(5)); // 2867971860299718107233761438093672048294900000\n对BigInteger做运算的时候，只能使用实例方法，例如，加法运算：')]),e._v(" "),t("p",[e._v('BigInteger i1 = new BigInteger("1234567890");\nBigInteger i2 = new BigInteger("12345678901234567890");\nBigInteger sum = i1.add(i2); // 12345678902469135780\n和long型整数运算比，BigInteger不会有范围限制，但缺点是速度比较慢。')]),e._v(" "),t("p",[e._v("也可以把BigInteger转换成long型：")]),e._v(" "),t("p",[e._v('BigInteger i = new BigInteger("123456789000");\nSystem.out.println(i.longValue()); // 123456789000\nSystem.out.println(i.multiply(i).longValueExact()); // java.lang.ArithmeticException: BigInteger out of long range\n使用longValueExact()方法时，如果超出了long型的范围，会抛出ArithmeticException。')]),e._v(" "),t("p",[e._v("BigInteger和Integer、Long一样，也是不可变类，并且也继承自Number类。因为Number定义了转换为基本类型的几个方法：")]),e._v(" "),t("p",[e._v("转换为byte：byteValue()\n转换为short：shortValue()\n转换为int：intValue()\n转换为long：longValue()\n转换为float：floatValue()\n转换为double：doubleValue()\n因此，通过上述方法，可以把BigInteger转换成基本类型。如果BigInteger表示的范围超过了基本类型的范围，转换时将丢失高位信息，即结果不一定是准确的。如果需要准确地转换成基本类型，可以使用intValueExact()、longValueExact()等方法，在转换时如果超出范围，将直接抛出ArithmeticException异常。")]),e._v(" "),t("p",[e._v("如果BigInteger的值甚至超过了float的最大范围（3.4x1038），那么返回的float是什么呢？")]),e._v(" "),t("p",[e._v("// BigInteger to float\nimport java.math.BigInteger;")]),e._v(" "),t("p",[e._v('public class Main {\npublic static void main(String[] args) {\nBigInteger n = new BigInteger("999999").pow(99);\nfloat f = n.floatValue();\nSystem.out.println(f);\n}\n}')]),e._v(" "),t("p",[e._v("Run")])])}),[],!1,null,null,null);n.default=g.exports}}]);