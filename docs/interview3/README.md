# 创建线程的方式及实现
## 继承 Thread 类创建线程类
- 定义 Thread 类的子类，并重写该类的 run 方法，该 run 方法的方法体就代表了线程要完成的任务。因此把 run() 方法称为执行体。
- 创建 Thread 子类的实例，即创建了线程对象。
- 调用线程对象的 start() 方法来启动该线程。

## 通过 Runnable 接口创建线程类
- 定义 Runnable 接口的实现类，并重写该接口的 run() 方法，该 run() 方法的方法体同样是该线程的线程执行体。
- 创建 Runnable 实现类的实例，并依此实例作为 Thread 的 target 来创建 Thread 对象，该 Thread 对象才是真正的线程对象。
- 调用线程对象的 start() 方法来启动该线程。

## 通过 Callable 和 Future 创建线程
- 创建 Callable 接口的实现类，并实现 call() 方法，该 call() 方法将作为线程执行体，并且有返回值。
- 创建 Callable 实现类的实例，使用 FutureTask 类来包装 Callable 对象，该 FutureTask 对象封装了该 Callable 对象的 call() 方法的返回值。
- 使用 FutureTask 对象作为 Thread 对象的 target 创建并启动新线程。
- 调用 FutureTask 对象的 get() 方法来获得子线程执行结束后的返回值
## 采用实现 Runnable、Callable 接口的方式创见多线程时：
- 优势是：线程类只是实现了 Runnable 接口或 Callable 接口，还可以继承其他类。在这种方式下，多个线程可以共享同一个 target 对象，所以非常适合多个相同线程来处理同一份资源的情况，从而可以将 CPU、代码和数据分开，形成清晰的模型，较好地体现了面向对象的思想。
- 劣势是：编程稍微复杂，如果要访问当前线程，则必须使用 Thread.currentThread() 方法

## 使用继承 Thread 类的方式创建多线程时：
- 优势是：编写简单，如果需要访问当前线程，则无需使用 Thread.currentThread() 方法，直接使用 this 即可获得当前线程。
- 劣势是：线程类已经继承了 Thread 类，所以不能再继承其他父类。