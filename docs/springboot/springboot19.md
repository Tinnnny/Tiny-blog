# Spring Boot 中的异步调用
通常我们开发的程序都是同步调用的，即程序按照代码的顺序一行一行的逐步往下执行，每一行代码都必须等待上一行代码执行完毕才能开始执行。而异步编程则没有这个限制，代码的调用不再是阻塞的。所以在一些情景下，通过异步编程可以提高效率，提升接口的吞吐量。这节将介绍如何在Spring Boot中进行异步编程。

## 开启异步
新建一个Spring Boot项目，版本为2.1.0.RELEASE，并引入spring-boot-starter-web依赖，项目结构如下所示：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcb6u2vo32j30ah07iglk.jpg">
</div>

要开启异步支持，首先得在Spring Boot入口类上加上@EnableAsync注解：

```java
@SpringBootApplication
@EnableAsync
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```
接下来开始编写异步方法。

在com.example.demo路径下新建service包，并创建TestService：
```java
@Service
public class TestService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Async
    public void asyncMethod() {
        sleep();
        logger.info("异步方法内部线程名称：{}", Thread.currentThread().getName());
    }

    public void syncMethod() {
        sleep();
    }

    private void sleep() {
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

上面的Service中包含一个异步方法asyncMethod（开启异步支持后，只需要在方法上加上@Async注解便是异步方法了）和同步方法syncMethod。sleep方法用于让当前线程阻塞2秒钟。

接着在com.example.demo路径下新建controller包，然后创建TestController：

```java
@RestController
public class TestController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestService testService;

    @GetMapping("async")
    public void testAsync() {
        long start = System.currentTimeMillis();
        logger.info("异步方法开始");

        testService.asyncMethod();

        logger.info("异步方法结束");
        long end = System.currentTimeMillis();
        logger.info("总耗时：{} ms", end - start);
    }

    @GetMapping("sync")
    public void testSync() {
        long start = System.currentTimeMillis();
        logger.info("同步方法开始");

        testService.syncMethod();

        logger.info("同步方法结束");
        long end = System.currentTimeMillis();
        logger.info("总耗时：{} ms", end - start);
    }
}
```
启动项目，访问 http://localhost:8080/sync 请求，控制台输出如下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcb83zyb3rj30zq02gdg0.jpg">
</div>

可看到默认程序是同步的，由于sleep方法阻塞的原因，testSync方法执行了2秒钟以上。

访问 http://localhost:8080/async ，控制台输出如下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcb84d7hadj313203ft92.jpg">
</div>

可看到testAsync方法耗时极少，因为异步的原因，程序并没有被sleep方法阻塞，这就是异步调用的好处。同时异步方法内部会新启一个线程来执行，这里线程名称为task - 1。

默认情况下的异步线程池配置使得线程不能被重用，每次调用异步方法都会新建一个线程，我们可以自己定义异步线程池来优化。

## 自定义异步线程池
在com.example.demo下新建config包，然后创建AsyncPoolConfig配置类：

```java
@Configuration
public class AsyncPoolConfig {

    @Bean
    public ThreadPoolTaskExecutor asyncThreadPoolTaskExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(20);
        executor.setMaxPoolSize(200);
        executor.setQueueCapacity(25);
        executor.setKeepAliveSeconds(200);
        executor.setThreadNamePrefix("asyncThread");
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(60);

        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());

        executor.initialize();
        return executor;
    }
}
```

上面我们通过ThreadPoolTaskExecutor的一些方法自定义了一个线程池，这些方法的含义如下所示：

- corePoolSize：线程池核心线程的数量，默认值为1（这就是默认情况下的异步线程池配置使得线程不能被重用的原因）。
- maxPoolSize：线程池维护的线程的最大数量，只有当核心线程都被用完并且缓冲队列满后，才会开始申超过请核心线程数的线程，默认值为Integer.MAX_VALUE。

- queueCapacity：缓冲队列。
- keepAliveSeconds：超出核心线程数外的线程在空闲时候的最大存活时间，默认为60秒。
- threadNamePrefix：线程名前缀。
- waitForTasksToCompleteOnShutdown：是否等待所有线程执行完毕才关闭线程池，默认值为false。
- awaitTerminationSeconds：waitForTasksToCompleteOnShutdown的等待的时长，默认值为0，即不等待。
- rejectedExecutionHandler：当没有线程可以被使用时的处理策略（拒绝任务），默认策略为abortPolicy，包含下面四种策略：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcb8foa7xrj30ep024jrc.jpg">
</div>

  - callerRunsPolicy：用于被拒绝任务的处理程序，它直接在 execute 方法的调用线程中运行被拒绝的任务；如果执行程序已关闭，则会丢弃该任务。
  - abortPolicy：直接抛出java.util.concurrent.RejectedExecutionException异常。
  - discardOldestPolicy：当线程池中的数量等于最大线程数时、抛弃线程池中最后一个要执行的任务，并执行新传入的任务。
  - discardPolicy：当线程池中的数量等于最大线程数时，不做任何动作。

要使用该线程池，只需要在@Async注解上指定线程池Bean名称即可：

```java
@Service
public class TestService {
    ......

    @Async("asyncThreadPoolTaskExecutor")
    public void asyncMethod() {
       ......
    }
    ......
}
```
重启项目，再次访问 http://localhost:8080/async ，控制台输出入下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcb8iza3zcj30lv022748.jpg">
</div>

## 处理异步回调

如果异步方法具有返回值的话，需要使用Future来接收回调值。我们修改TestService的asyncMethod方法，给其添加返回值：

```java
@Async("asyncThreadPoolTaskExecutor")
public Future<String> asyncMethod() {
    sleep();
    logger.info("异步方法内部线程名称：{}", Thread.currentThread().getName());
    return new AsyncResult<>("hello async");
}
```

泛型指定返回值的类型，AsyncResult为Spring实现的Future实现类：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcbabwfjuuj304d05rdfo.jpg">
</div>

接着改造TestController的testAsync方法：

```java
@GetMapping("async")
public String testAsync() throws Exception {
    long start = System.currentTimeMillis();
    logger.info("异步方法开始");

    Future<String> stringFuture = testService.asyncMethod();
    String result = stringFuture.get();
    logger.info("异步方法返回值：{}", result);
    
    logger.info("异步方法结束");

    long end = System.currentTimeMillis();
    logger.info("总耗时：{} ms", end - start);
    return stringFuture.get();
}
```
Future接口的get方法用于获取异步调用的返回值。

重启项目，访问 http://localhost:8080/async 控制台输出如下所示:

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gcbfav7n7uj30ko02daa2.jpg">
</div>

通过返回结果我们可以看出Future的get方法为阻塞方法，只有当异步方法返回内容了，程序才会继续往下执行。get还有一个get(long timeout, TimeUnit unit)重载方法，我们可以通过这个重载方法设置超时时间，即异步方法在设定时间内没有返回值的话，直接抛出java.util.concurrent.TimeoutException异常。

比如设置超时时间为60秒：

```java
String result = stringFuture.get(60, TimeUnit.SECONDS);
```