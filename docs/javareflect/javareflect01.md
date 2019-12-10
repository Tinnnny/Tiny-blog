# Class对象功能
1. 获取成员变量
  * `Field[] getFields()`
  * `Field getField(String name)`
  * `Field[] getDeclaredFields()`
  * `Field getDeclaredField(String name)`
2. 获取构造方法
  * `Constructor<?>[] getConstructors()`
  * `Constructor<T> getConstructor(类<?>... parameterTypes)`
  * `Constructor<T> getDeclaredConstructor(类<?>... parameterTypes)`
  * `Constructor<?>[] getDeclaredConstructors()`
3. 获取成员方法
  * `Method[] getMethods()`
  * `Method getMethod(String name, 类<?>... parameterTypes)`
  * `Method[] getDeclaredMethods()`
  * `Method getDeclaredMethod(String name, 类<?>... parameterTypes)`
4. 获取类名
  * `String getName()`

```java
public class Person {
    private String name;
    private int age;
    public String a;
    protected String b;
    String c;
    private String d;

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {}

    public void eat(){
        System.out.println("eat...");
    }

    public void eat(String food){
        System.out.println("eat..."+food);
    }
}

}
```
## 获取成员变量
```java
public class ReflectDemo2 {
    public static void main(String[] args) throws Exception {
        //0.获取Person的Class对象
        Class personClass = Person.class;

        //1.Field[] getFields()获取所有public修饰的成员变量
        Field[] fields = personClass.getFields();
        for (Field field : fields) {
          System.out.println(field);//public java.lang.String cn.itcast.domain.Person.a
        }

        //2.Field getField(String name)
        Field a = personClass.getField("a");
        //获取成员变量a 的值
        Person p = new Person();
        Object value = a.get(p);
        System.out.println(value);//null
        //设置a的值
        a.set(p,"张三");
        System.out.println(p);

        //Field[] getDeclaredFields()：获取所有的成员变量，不考虑修饰符
        Field[] declaredFields = personClass.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            System.out.println(declaredField);
        }
        //Field getDeclaredField(String name)
        Field d = personClass.getDeclaredField("d");
        //忽略访问权限修饰符的安全检查，否则会报错
        d.setAccessible(true);//暴力反射
        Object value2 = d.get(p);
        System.out.println(value2);//null
    }
}
```
## 获取构造方法
```java
public static void main(String[] args) throws Exception {
        //0.获取Person的Class对象
        Class personClass = Person.class;
        //Constructor<T> getConstructor(类<?>... parameterTypes)
        Constructor constructor = personClass.getConstructor(String.class, int.class);
        System.out.println(constructor);//public cn.itcast.domain.Person(java.lang.String,int)
        //创建对象
        Object person = constructor.newInstance("张三", 23);
        System.out.println(person);//Person{name='张三', age=23, a='null', b='null', c='null', d='null'}

        Constructor constructor1 = personClass.getConstructor();
        System.out.println(constructor1);//public cn.itcast.domain.Person()
        //创建空参对象
        Object person1 = constructor1.newInstance();
        System.out.println(person1);//Person{name='null', age=0, a='null', b='null', c='null', d='null'}
        //空参简化写法
        Object o = personClass.newInstance();
        System.out.println(o);//Person{name='null', age=0, a='null', b='null', c='null', d='null'}

        //constructor1.setAccessible(true);
    }
}
```

## 获取成员方法和类名
```java
public class ReflectDemo4 {
    public static void main(String[] args) throws Exception {
        //0.获取Person的Class对象
        Class personClass = Person.class;
        //获取指定名称的方法
        Method eat_method = personClass.getMethod("eat");
        Person p = new Person();
        //执行空参方法
        eat_method.invoke(p);//eat...

        Method eat_method2 = personClass.getMethod("eat", String.class);
        //执行有参方法
        eat_method2.invoke(p,"饭");//eat...饭

        //获取所有public修饰的方法,还有Object的方法
        Method[] methods = personClass.getMethods();
        for (Method method : methods) {
            System.out.println(method);
            String name = method.getName();
            System.out.println(name);
            //method.setAccessible(true);
        }

        //获取类名
        String className = personClass.getName();
        System.out.println(className);//cn.itcast.domain.Person
    }
}
```