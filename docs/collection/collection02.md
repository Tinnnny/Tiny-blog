---
title: "Map集合" 
date: 2019年10月31日13:02:58
---
## Map集合
::: tip 对比与特点
* `Collection`中的集合，元素是孤立存在的（理解为单身），向集合中存储元素采用一个个元素的方式存储。
* `Map`中的集合，元素是成对存在的(理解为夫妻)。每个元素由键与值两部分组成，通过键可以找对所对应的值。
* `Map`集合中的元素,key是不允许重复的,value是可以重复的。
* `Map`集合中的元素,key和value的数据类型可以相同,也可以不同
:::
### 常用子类
主要的子类有HashMap集合、LinkedHashMap集合。
::: tip HashMap的特点：
1. HashMap集合底层是哈希表:查询的速度特别的快。JDK1.8之前:数组+单向链表。JDK1.8之后:数组+单向链表|红黑树(链表的长度超过8):提高查询的速度。
2. hashMap集合是一个无序的集合,存储元素和取出元素的顺序有可能不一致。
3. 由于要保证键的唯一、不重复，需要重写键的hashCode()方法、equals()方法。
:::

::: tip LinkedHashMap的特点：
1. LinkedHashMap集合底层是哈希表+链表(保证迭代的顺序)
2. LinkedHashMap集合是一个有序的集合,存储元素和取出元素的顺序是一致的
3. 由于要保证键的唯一、不重复，需要重写键的hashCode()方法、equals()方法。
:::
### Map常用方法
* `public V put(K key, V value)`:  把指定的键与指定的值添加到Map集合中。
* `public V remove(Object key)`: 把指定的键 所对应的键值对元素 在Map集合中删除，返回被删除元素的值。
* `public V get(Object key)` 根据指定的键，在Map集合中获取对应的值。
* `boolean containsKey(Object key)  ` 判断集合中是否包含指定的键。
* `public Set<K> keySet()`: 获取Map集合中所有的键，存储到Set集合中。
* `public Set<Map.Entry<K,V>> entrySet()`: 获取到Map集合中所有的键值对对象的集合(Set集合)。

~~~java
public class MapDemo {
    public static void main(String[] args) {
        //创建 map对象
        HashMap<String, String>  map = new HashMap<String, String>();

        //添加元素到集合
        map.put("黄晓明", "杨颖");
        map.put("文章", "马伊琍");
        map.put("邓超", "孙俪");
        System.out.println(map.put("邓超", "小三"));

        System.out.println(map);
        //String remove(String key)
        System.out.println(map.remove("邓超"));
        System.out.println(map);

        // 想要查看 黄晓明的媳妇 是谁
        System.out.println(map.get("黄晓明"));
        System.out.println(map.get("邓超"));
    }
}
~~~
输出：
```
孙俪
{邓超=小三, 文章=马伊琍, 黄晓明=杨颖}
小三
{文章=马伊琍, 黄晓明=杨颖}
杨颖
null
```
::: tip 注意
使用put方法时，若指定的键(key)在集合中没有，则没有这个键对应的值，返回null，并把指定的键值添加到集合中;若指定的键(key)在集合中存在，则返回值为集合中键对应的值（该值为替换前的值），并把指定键所对应的值，替换成指定的新值。 
:::

### 遍历键找值方式
#### `keyset()`方法
::: danger 分析步骤：
1. 获取Map中所有的键，由于键是唯一的，所以返回一个Set集合存储所有的键。
2. 遍历键的Set集合，得到每一个键。
3. 根据键，获取键所对应的值。
:::
~~~java
public class MapDemo01 {
    public static void main(String[] args) {
        //创建Map集合对象 
        HashMap<String, String> map = new HashMap<String,String>();
        //添加元素到集合 
        map.put("胡歌", "霍建华");
        map.put("郭德纲", "于谦");
        map.put("薛之谦", "大张伟");

        //获取所有的键  获取键集
        Set<String> keys = map.keySet();
        // 遍历键集 得到 每一个键
        for (String key : keys) {
          	//key  就是键
            //获取对应值
            String value = map.get(key);
            System.out.println(key+"的CP是："+value);
        }  
    }
}
~~~
### Entry键值对对象

`Map`中存放的是两种对象，一种称为**key**(键)，一种称为**value**(值)，它们在在`Map`中是一一对应关系，这一对对象又称做`Map`中的一个`Entry(项)`。`Entry`将键值对的对应关系封装成了对象。即键值对对象，这样我们在遍历`Map`集合时，就可以从每一个键值对（`Entry`）对象中获取对应的键与对应的值。

Entry获取对应键和对应值得方法：
* `public K getKey()`：获取Entry对象中的键。
* `public V getValue()`：获取Entry对象中的值。

在Map集合中也提供了获取所有Entry对象的方法：
* `public Set<Map.Entry<K,V>> entrySet()`: 获取到Map集合中所有的键值对对象的集合(Set集合)。
::: danger 实现步骤:
1. 使用Map集合中的方法entrySet(),把Map集合中多个Entry对象取出来,存储到一个Set集合中
2. 遍历Set集合,获取每一个Entry对象
3. 使用Entry对象中的方法getKey()和getValue()获取键与值
:::
```java
public class Demo03EntrySet {
    public static void main(String[] args) {
        //创建Map集合对象
        Map<String,Integer> map = new HashMap<>();
        map.put("赵丽颖",168);
        map.put("杨颖",165);
        map.put("林志玲",178);

        //1.使用Map集合中的方法entrySet(),把Map集合中多个Entry对象取出来,存储到一个Set集合中
        Set<Map.Entry<String, Integer>> set = map.entrySet();
        System.out.println(set);
        //2.遍历Set集合,获取每一个Entry对象

        for(Map.Entry<String,Integer> entry:set){
            //3.使用Entry对象中的方法getKey()和getValue()获取键与值
            String key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println(key+"="+value);
        }
    }
}
```
输出：
```
[林志玲=178, 赵丽颖=168, 杨颖=165]
林志玲=178
赵丽颖=168
杨颖=165
```

### HashMap存储自定义类型键值
每位学生（姓名，年龄）都有自己的家庭住址。那么，既然有对应关系，则将学生对象和家庭住址存储到map集合中。学生作为键, 家庭住址作为值。

~~~java
public class Student {
    private String name;
    private int age;
    ...

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
~~~

测试类：
~~~java 
public class HashMapTest {
    public static void main(String[] args) {
        //1,创建Hashmap集合对象。
        Map<Student,String>map = new HashMap<Student,String>();
        //2,添加元素。
        map.put(newStudent("lisi",28), "上海");
        map.put(newStudent("wangwu",22), "北京");
        map.put(newStudent("zhaoliu",24), "成都");
        map.put(newStudent("zhouqi",25), "广州");
        map.put(newStudent("wangwu",22), "南京");
        
        //3,取出元素。键找值方式
        Set<Student>keySet = map.keySet();
        for(Student key: keySet){
            Stringvalue = map.get(key);
            System.out.println(key.toString()+"....."+value);
        }
    }
}
~~~

### LinkedHashMap
LinkedHashMap是链表和哈希表组合的一个数据存储结构，是有序且不能重复的。
~~~java
public class LinkedHashMapDemo {
    public static void main(String[] args) {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("邓超", "孙俪");
        map.put("李晨", "范冰冰");
        map.put("刘德华", "朱丽倩");
        Set<Entry<String, String>> entrySet = map.entrySet();
        for (Entry<String, String> entry : entrySet) {
            System.out.println(entry.getKey() + "  " + entry.getValue());
        }
    }
}
~~~
输出：
~~~
邓超  孙俪
李晨  范冰冰
刘德华  朱丽倩
~~~

### jdk9新特性
List接口,Set接口,Map接口:里边增加了一个静态的方法of,可以给集合一次性添加多个元素,使用前提:当集合中存储的元素的个数已经确定了,不在改变时使用。
```java
static <E> List<E> of​(E... elements)
```
::: tip 注意:
1. of方法只适用于List接口,Set接口,Map接口,不适用于接口的实现类。
2. of方法的返回值是一个不能改变的集合,集合不能再使用add,put方法添加元素,会抛出异常。
3. Set接口和Map接口在调用of方法的时候,不能有重复的元素,否则会抛出异常。
:::

 ```java
public class Demo01JDK9 {
    public static void main(String[] args) {
        List<String> list = List.of("a", "b", "a", "c", "d");
        System.out.println(list);//[a, b, a, c, d]
        //list.add("w");//UnsupportedOperationException:不支持操作异常

        //Set<String> set = Set.of("a", "b", "a", "c", "d");//IllegalArgumentException:非法参数异常,有重复的元素
        Set<String> set = Set.of("a", "b", "c", "d");
        System.out.println(set);
        //set.add("w");//UnsupportedOperationException:不支持操作异常

        //Map<String, Integer> map = Map.of("张三", 18, "李四", 19, "王五", 20,"张三",19);////IllegalArgumentException:非法参数异常,有重复的元素
        Map<String, Integer> map = Map.of("张三", 18, "李四", 19, "王五", 20);
        System.out.println(map);//{王五=20, 李四=19, 张三=18}
        //map.put("赵四",30);//UnsupportedOperationException:不支持操作异常
    }
}
```

