---
title: "泛型" 
date: 2019年11月1日15:48:28
---
# 泛型
泛型用来灵活地将数据类型应用到不同的类、方法、接口当中。将数据类型作为参数进行传递。

定义格式：

~~~
修饰符 class 类名<代表泛型的变量> {  }
~~~
::: tip 泛型的优点
* 将运行时期的ClassCastException，转移到了编译时期变成了编译失败。
* 避免了类型强转的麻烦。
:::
例如：
~~~java
public class GenericDemo {
	public static void main(String[] args) {
		Collection coll = new ArrayList();
		coll.add("abc");
		coll.add("itcast");
		coll.add(5);//由于集合没有做任何限定，任何类型都可以给其中存放
		Iterator it = coll.iterator();
		while(it.hasNext()){
			//需要打印每个字符串的长度,就要把迭代出来的对象转成String类型
			String str = (String) it.next();
			System.out.println(str.length());
		}
	}
}
~~~
运行时会报`java.lang.ClassCastException`错，因为没有指定集合中存储数据的类型。                                                              


## 泛型的定义与使用
### 1.在创建对象的时候确定泛型

 例如，`ArrayList<String> list = new ArrayList<String>();`

此时，变量E的值就是String类型,那么我们的类型就可以理解为：

~~~java 
class ArrayList<String>{ 
     public boolean add(String e){ }

     public String get(int index){  }
     ...
}
~~~

###  2.创建含有泛型的方法
定义格式：
~~~
修饰符 <代表泛型的变量> 返回值类型 方法名(参数){  }
~~~

例如，
~~~java
public class MyGenericMethod {	  
    public <MVP> void show(MVP mvp) {
    	System.out.println(mvp.getClass());
    }
    
    public <MVP> MVP show2(MVP mvp) {	
    	return mvp;
    }
}
~~~
调用方法时，确定泛型的类型。
~~~java
public class GenericMethodDemo {
    public static void main(String[] args) {
        // 创建对象
        MyGenericMethod mm = new MyGenericMethod();
        // 演示看方法提示
        mm.show("aaa");
        mm.show(123);
        mm.show(12.45);
    }
}
~~~

## 泛型通配符
当不知道用什么泛型来接受参数时，可以用`<?>`。

~~~java
public static void main(String[] args) {
    Collection<Intger> list1 = new ArrayList<Integer>();
    getElement(list1);
    Collection<String> list2 = new ArrayList<String>();
    getElement(list2);
}
public static void getElement(Collection<?> coll){}
//？代表可以接收任意类型
~~~

> tips:泛型不存在继承关系`Collection<Object> list = new ArrayList<String>();`这种是错误的。

### 通配符高级使用受限泛型
在JAVA的泛型中可以指定一个泛型的上限和下限。

泛型的上限：
* 格式： `类型名称 <? extends 类 > 对象名称`
* 意义： `只能接收该类型及其子类`

泛型的下限：
- 格式： `类型名称 <? super 类 > 对象名称`
- 意义： `只能接收该类型及其父类型`

比如：现已知Object类，String 类，Number类，Integer类，其中Number是Integer的父类

~~~java
public static void main(String[] args) {
    Collection<Integer> list1 = new ArrayList<Integer>();
    Collection<String> list2 = new ArrayList<String>();
    Collection<Number> list3 = new ArrayList<Number>();
    Collection<Object> list4 = new ArrayList<Object>();
    
    getElement(list1);
    getElement(list2);//报错
    getElement(list3);
    getElement(list4);//报错
  
    getElement2(list1);//报错
    getElement2(list2);//报错
    getElement2(list3);
    getElement2(list4);
  
}
// 泛型的上限：此时的泛型?，必须是Number类型或者Number类型的子类
public static void getElement1(Collection<? extends Number> coll){}
// 泛型的下限：此时的泛型?，必须是Number类型或者Number类型的父类
public static void getElement2(Collection<? super Number> coll){}
~~~