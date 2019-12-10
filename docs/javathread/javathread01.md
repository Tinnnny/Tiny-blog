# 创建线程类
## 创建线程一
Java使用`java.lang.Thread`类代表**线程**，所有的线程对象都必须是Thread类或其子类的实例。每个线程的作用是完成一定的任务，实际上就是执行一段程序流即一段顺序执行的代码。Java使用线程执行体来代表这段程序流。

::: danger 创建并启动多线程实现步骤:
1. 创建一个Thread类的子类
2. 在Thread类的子类中重写Thread类中的run方法,设置线程任务(开启线程要做什么?)
3. 创建Thread类的子类对象
4. 调用Thread类中的方法start方法,开启新的线程,执行run方法
:::
> void start() 使该线程开始执行；Java 虚拟机调用该线程的 run 方法。结果是两个线程并发地运行；当前线程（main线程）和另一个线程（创建的新线程,执行其 run 方法）。多次启动一个线程是非法的。特别是当线程已经结束执行后，不能再重新启动。java程序属于抢占式调度,那个线程的优先级高,那个线程优先执行;同一个优先级,随机选择一个执行

代码如下：

测试类：

~~~java
public class Demo01 {
	public static void main(String[] args) {
		//创建自定义线程对象
		MyThread mt = new MyThread("新的线程！");
		//开启新线程
		mt.start();
		//在主方法中执行for循环
		for (int i = 0; i < 10; i++) {
			System.out.println("main线程！"+i);
		}
	}
}
~~~

自定义线程类：

~~~java
public class MyThread extends Thread {
	//定义指定线程名称的构造方法
	public MyThread(String name) {
		//调用父类的String参数的构造方法，指定线程的名称
		super(name);
	}
	/**
	 * 重写run方法，完成该线程执行的逻辑
	 */
	@Override
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println(getName()+"：正在执行！"+i);
		}
	}
}
~~~
## 创建线程方法二
::: danger 步骤如下：
1. 定义Runnable接口的实现类，并重写该接口的run()方法，该run()方法的方法体同样是该线程的线程执行体。
2. 创建Runnable实现类的实例，并以此实例作为Thread的target来创建Thread对象，该Thread对象才是真正
的线程对象。
3. 调用线程对象的start()方法来启动线程。
:::

实现Runnable接口创建多线程程序的好处:
1. 避免了单继承的局限性
  - 一个类只能继承一个类(一个人只能有一个亲爹),类继承了Thread类就不能继承其他的类
  - 实现了Runnable接口,还可以继承其他的类,实现其他的接口
2. 增强了程序的扩展性,降低了程序的耦合性(解耦)
  - 实现Runnable接口的方式,把设置线程任务和开启新线程进行了分离(解耦)
  - 实现类中,重写了run方法:用来设置线程任务
  - 创建Thread类对象,调用start方法:用来开启新线程

::: tip 构造方法
- public Thread() :分配一个新的线程对象。
- public Thread(String name) :分配一个指定名字的新的线程对象。
- public Thread(Runnable target) :分配一个带有指定目标新的线程对象。
- public Thread(Runnable target,String name) :分配一个带有指定目标新的线程对象并指定名字。
:::

::: tip 常用方法：
- public String getName() :获取当前线程名称。
- public void start() :导致此线程开始执行; Java虚拟机调用此线程的run方法。
- public void run() :此线程要执行的任务在此处定义代码。
- public static void sleep(long millis) :使当前正在执行的线程以指定的毫秒数暂停（暂时停止执行）。
- public static Thread currentThread() :返回对当前正在执行的线程对象的引用。
:::