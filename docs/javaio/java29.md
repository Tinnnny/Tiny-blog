---
title: "File类" 
date: 2019年11月13日10:27:35
---
# File类
## 概述
`java.io.File` 类是文件和目录路径名的抽象表示，主要用于文件和目录的创建、查找和删除等操作。
```java
package com.itheima.demo01.File;
import java.io.File;

public class Demo01File {
    public static void main(String[] args) {
        /*
            static String pathSeparator 与系统有关的路径分隔符，为了方便，它被表示为一个字符串。
            static char pathSeparatorChar 与系统有关的路径分隔符。

            static String separator 与系统有关的默认名称分隔符，为了方便，它被表示为一个字符串。
            static char separatorChar 与系统有关的默认名称分隔符。

            操作路径:路径不能写死了
            C:\develop\a\a.txt  windows
            C:/develop/a/a.txt  linux
            "C:"+File.separator+"develop"+File.separator+"a"+File.separator+"a.txt"
         */
        String pathSeparator = File.pathSeparator;
        System.out.println(pathSeparator);//路径分隔符 windows:分号;  linux:冒号:

        String separator = File.separator;
        System.out.println(separator);// 文件名称分隔符 windows:反斜杠\  linux:正斜杠/
    }}
```
::: tip 绝对路径与相对路径
- 绝对路径:是一个完整的路径，以盘符(c:,D:)开始
- 相对路径:是一个简化的路径，相对指的是相对于当前项目的根目录
- 路径是不区分大小写
- 路径中的文件名称分隔符windows使用反斜杠,反斜杠是转义字符,两个反斜杠代表一个普通的反斜杠
:::

::: tip 构造方法
* `public File(String pathname) ` ：通过将给定的**路径名字符串**转换为抽象路径名来创建新的 File实例。  
* `public File(String parent, String child) ` ：从**父路径名字符串和子路径名字符串**创建新的 File实例。
* `public File(File parent, String child)` ：从**父抽象路径名和子路径名字符串**创建新的 File实例。  
:::

构造举例，代码如下：
```java
// 文件路径名
String pathname = "D:\\aaa.txt";
File file1 = new File(pathname); //D:\aaa.txt

// 文件路径名
String pathname2 = "D:\\aaa\\bbb.txt";
File file2 = new File(pathname2); //D:\aaa\bbb.txt

// 通过父路径和子路径字符串
 String parent = "d:\\aaa\\";
 String child = "bbb.txt";
 File file3 = new File(parent, child);//d:\aaa\bbb.txt

// 通过父级File对象和子路径字符串
File parentDir = new File("d:\\aaa\\");
String child = "bbb.txt";
File file4 = new File(parentDir, child);//d:\aaa\bbb.txt
```

## 常用方法
### 获取功能的方法
::: tip 方法
* `public String getAbsolutePath() ` ：返回此File的绝对路径名字符串。
* ` public String getPath() ` ：将此File转换为路径名字符串。 
* `public String getName()`  ：返回由此File表示的文件或目录的名称。  
* `public long length()`  ：返回由此File表示的文件的大小。 
:::

方法演示，代码如下：
```java
  public class FileGet {
      public static void main(String[] args) {
          File f = new File("d:/aaa/bbb.java");     
          System.out.println("文件绝对路径:"+f.getAbsolutePath());//文件绝对路径:d:\aaa\bbb.java
          System.out.println("文件构造路径:"+f.getPath());// 文件构造路径:d:\aaa\bbb.java
          System.out.println("文件名称:"+f.getName());//  文件名称:bbb.java
          System.out.println("文件长度:"+f.length()+"字节");// 文件长度:636字节

          File f2 = new File("d:/aaa");     
          System.out.println("目录绝对路径:"+f2.getAbsolutePath());//目录绝对路径:d:\aaa
          System.out.println("目录构造路径:"+f2.getPath());//  目录构造路径:d:\aaa
          System.out.println("目录名称:"+f2.getName());//目录名称:aaa
          System.out.println("目录长度:"+f2.length());//目录长度:4096
      }
  }
```
> API中说明：length()，表示文件的长度。但是File对象表示目录，则返回值未指定。如果构造方法中给出的路径不存在,那么length方法返回0

### 判断功能的方法
::: tip 方法
- `public boolean exists()` ：此File表示的文件或目录是否实际存在。
- `public boolean isDirectory()` ：此File表示的是否为目录。
- `public boolean isFile()` ：此File表示的是否为文件。
:::

方法演示，代码如下：

```java
public class FileIs {
    public static void main(String[] args) {
        File f = new File("d:\\aaa\\bbb.java");
        File f2 = new File("d:\\aaa");
      	// 判断是否存在
        System.out.println("d:\\aaa\\bbb.java 是否存在:"+f.exists());//d:\aaa\bbb.java 是否存在:true
        System.out.println("d:\\aaa 是否存在:"+f2.exists());//d:\aaa 是否存在:true
      	// 判断是文件还是目录
        System.out.println("d:\\aaa 文件?:"+f2.isFile());//d:\aaa 文件?:false
        System.out.println("d:\\aaa 目录?:"+f2.isDirectory());//d:\aaa 目录?:true
    }
}
```

### 创建删除功能的方法
::: tip 方法
- `public boolean createNewFile()` ：当且仅当具有该名称的文件尚不存在时，创建一个新的空文件。 
- `public boolean delete()` ：删除由此File表示的文件或目录。  
- `public boolean mkdir()` ：创建由此File表示的目录。
- `public boolean mkdirs()` ：创建由此File表示的目录，包括任何必需但不存在的父目录。
:::
方法演示，代码如下：

```java
public class FileCreateDelete {
    public static void main(String[] args) throws IOException {
        // 文件的创建
        File f = new File("aaa.txt");
        System.out.println("是否存在:"+f.exists()); // false
        System.out.println("是否创建:"+f.createNewFile()); // true
        System.out.println("是否存在:"+f.exists()); // true
		
     	// 目录的创建
      	File f2= new File("newDir");	
        System.out.println("是否存在:"+f2.exists());// false
        System.out.println("是否创建:"+f2.mkdir());	// true
        System.out.println("是否存在:"+f2.exists());// true

		// 创建多级目录
      	File f3= new File("newDira\\newDirb");
        System.out.println(f3.mkdir());// false
        File f4= new File("newDira\\newDirb");
        System.out.println(f4.mkdirs());// true
      
      	// 文件的删除
       	System.out.println(f.delete());// true
      
      	// 目录的删除
        System.out.println(f2.delete());// true
        System.out.println(f4.delete());// false
    }
}
```

> API中说明：delete方法，如果此File表示目录，则目录必须为空才能删除。

## 目录的遍历

* `public String[] list()` ：返回一个String数组，表示该File目录中的所有子文件或目录。
* `public File[] listFiles()` ：返回一个File数组，表示该File目录中的所有的子文件或目录。  

```java
public class FileFor {
    public static void main(String[] args) {
        File dir = new File("d:\\java_code");
      
      	//获取当前目录下的文件以及文件夹的名称。
		String[] names = dir.list();
		for(String name : names){
			System.out.println(name);
		}
        //获取当前目录下的文件以及文件夹对象，只要拿到了文件对象，那么就可以获取更多信息
        File[] files = dir.listFiles();
        for (File file : files) {
            System.out.println(file);
        }
    }
}
```
::: danger 注意
- list方法和listFiles方法遍历的是构造方法中给出的目录
- 如果构造方法中给出的目录的路径不存在,会抛出空指针异常
- 如果构造方法中给出的路径不是一个目录,也会抛出空指针异常
:::
