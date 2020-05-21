# 深入学习Spring组件注册(二)
## 组件作用域@Scope
默认情况下，在Spring的IOC容器中每个组件都是单例的，即无论在任何地方注入多少次，这些对象都是同一个，我们来看下例子。

首先将User对象中的@Component注解去除，然后在配置类中配置User Bean：
```java
@Configuration
public class WebConfig {
    @Bean
    public User user() {
        return new User("mrbird", 18);
    }
}
```
接着多次从IOC容器中获取这个组件，看看是否为同一个：
```java
// 返回 IOC 容器，使用注解配置，传入配置类
ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
Object user1 = context.getBean("user");
Object user2 = context.getBean("user");
System.out.println(user1 == user2);
```
启动项目，观察控制台输出:

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7isfrqb7j302000k0ba.jpg">
</div>

结果证实了上面的观点。

在Spring中我们可以使用@Scope注解来改变组件的作用域：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7isvrm0pj30jg06dt98.jpg">
</div>

1. singleton：单实例（默认）,在Spring IOC容器启动的时候会调用方法创建对象然后纳入到IOC容器中，以后每次获取都是直接从IOC容器中获取（map.get()）；
2. prototype：多实例，IOC容器启动的时候并不会去创建对象，而是在每次获取的时候才会去调用方法创建对象；
3. request：一个请求对应一个实例；
4. session：同一个session对应一个实例。

## 懒加载@Lazy
懒加载是针对单例模式而言的，正如前面所说，IOC容器中的组件默认是单例的，容器启动的时候会调用方法创建对象然后纳入到IOC容器中。

在User Bean注册的地方加入一句话以观察：
```java
@Configuration
public class WebConfig {
    @Bean
    public User user() {
        System.out.println("往IOC容器中注册user bean");
        return new User("mrbird", 18);
    }
}
```
测试：
```java
ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
System.out.println("容器创建完毕");
```
启动项目观察控制台输出:
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7j4plqcuj306i017742.jpg">
</div>
可以看到，在IOC容器创建完毕之前，组件已经添加到容器中了。

将User Bean改为懒加载的方式：
```java
@Configuration
public class WebConfig {
    @Bean
    @Lazy
    public User user() {
        System.out.println("往IOC容器中注册user bean");
        return new User("mrbird", 18);
    }
}
```
再次启动项目，观察输出：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7j5xdzz1j304700y0sd.jpg">
</div>

可看到，容器创建完的时候，User Bean这个组件并未添加到容器中。

::: tip
所以懒加载的功能是，在单例模式中，IOC容器创建的时候不会马上去调用方法创建对象并注册，只有当组件第一次被使用的时候才会调用方法创建对象并加入到容器中。
:::

测试一下：
```java
ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
System.out.println("容器创建完毕");
Object user1 = context.getBean("user");
Object user2 = context.getBean("user");
```
启动项目，观察输出:
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7j72x9vnj306f014742.jpg">
</div>

结果证实了我们的观点。

## 条件注册组件
### @Conditional
使用@Conditional注解我们可以指定组件注册的条件，即满足特定条件才将组件纳入到IOC容器中。

在使用该注解之前，我们需要创建一个类，实现Condition接口：
```java
public class MyCondition implements Condition {
    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        return false;
    }
}
```
该接口包含一个matches方法，包含两个入参:
1. ConditionContext：上下文信息；
2. AnnotatedTypeMetadata：注解信息。

简单完善一下这个实现类:
```java
public class MyCondition implements Condition {
    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        String osName = context.getEnvironment().getProperty("os.name");
        return osName != null && osName.contains("Windows");
    }
}
```

接着将这个条件添加到User Bean注册的地方：

```java
@Bean
@Conditional(MyCondition.class)
public User user() {
    return new User("mrbird", 18);
}
```
在Windows环境下，User这个组件将被成功注册，如果是别的操作系统，这个组件将不会被注册到IOC容器中。

### @Profile
@Profile可以根据不同的环境变量来注册不同的组件，下面我们来学一下它的用法。

新建一个接口CalculateService：

```java
public interface CalculateService {
    Integer sum(Integer... value);
}
```

接着添加两个实现Java7CalculateServiceImpl和Java8CalculateServiceImpl:

```java
@Service
@Profile("java7")
public class Java7CalculateServiceImpl implements CalculateService {
    @Override
    public Integer sum(Integer... value) {
        System.out.println("Java 7环境下执行");
        int result = 0;
        for (int i = 0; i <= value.length; i++) {
            result += i;
        }
        return result;
    }
}
```

```java
@Service
@Profile("java8")
public class Java8CalculateServiceImpl implements CalculateService {
    @Override
    public Integer sum(Integer... value) {
        System.out.println("Java 8环境下执行");
        return Arrays.stream(value).reduce(0, Integer::sum);
    }
}
```

通过@Profile注解我们实现了：当环境变量包含java7的时候，Java7CalculateServiceImpl将会被注册到IOC容器中；当环境变量包含java8的时候，Java8CalculateServiceImpl将会被注册到IOC容器中。

测试一下：
```java
ConfigurableApplicationContext context1 = new SpringApplicationBuilder(DemoApplication.class)
                .web(WebApplicationType.NONE)
                .profiles("java8")
                .run(args);

CalculateService service = context1.getBean(CalculateService.class);
System.out.println("求合结果： " + service.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
```
启动项目，控制台输出如下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jdji0p2j309400kdfl.jpg">
</div>

如果将.profiles("java8")改为.profiles("java7")的话，控制台输出如下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jdpbyo4j309800ga9t.jpg">
</div>

## 导入组件
### @Import
到目前为止，我们可以使用包扫描和@Bean来实现组件注册。除此之外，我们还可以使用@Import来快速地往IOC容器中添加组件。

创建一个新的类Hello：
```java
public class Hello {
}
```
然后在配置类中导入这个组件：
```java
@Configuration
@Import({Hello.class})
public class WebConfig {
	...
}
```
查看IOC容器中所有组件的名称：
```java
ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
String[] beanNames = context.getBeanDefinitionNames();
Arrays.stream(beanNames).forEach(System.out::println);
```
启动项目，控制台输出:

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jh627w0j30i003zdfv.jpg">
</div>

可看到，通过@Import我们可以快速地往IOC容器中添加组件，Id默认为全类名。

### ImportSelector
通过@Import我们已经实现了组件的导入，如果需要一次性导入较多组件，我们可以使用ImportSelector来实现。

新增三个类Apple，Banana和Watermelon，代码略。

查看ImportSelector源码：
```java
public interface ImportSelector {

    /**
     * Select and return the names of which class(es) should be imported based on
     * the {@link AnnotationMetadata} of the importing @{@link Configuration} class.
     */
     String[] selectImports(AnnotationMetadata importingClassMetadata);
}
```
ImportSelector是一个接口，包含一个selectImports方法，方法返回类的全类名数组（即需要导入到IOC容器中组件的全类名数组），包含一个AnnotationMetadata类型入参，通过这个参数我们可以获取到使用ImportSelector的类的全部注解信息。

我们新建一个ImportSelector实现类MyImportSelector：
```java
public class MyImportSelector implements ImportSelector {
    @Override
    public String[] selectImports(AnnotationMetadata importingClassMetadata) {
        return new String[]{
                "cc.mrbird.demo.domain.Apple",
                "cc.mrbird.demo.domain.Banana",
                "cc.mrbird.demo.domain.Watermelon"
        };
    }
}
```
上面方法返回了新增的三个类的全类名数组，接着我们在配置类的@Import注解上使用MyImportSelector来把这三个组件快速地导入到IOC容器中：
```java
@Import({MyImportSelector.class})
public class WebConfig {
    ...
}
```

### ImportBeanDefinitionRegistrar
除了上面两种往IOC容器导入组件的方法外，我们还可以使用ImportBeanDefinitionRegistrar来手动往IOC容器导入组件。

查看其源码：
```java
public interface ImportBeanDefinitionRegistrar {
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry);
}
```

ImportBeanDefinitionRegistrar是一个接口，包含一个registerBeanDefinitions方法，该方法包含两个入参：

1. AnnotationMetadata：可以通过它获取到类的注解信息；

2. BeanDefinitionRegistry：Bean定义注册器，包含了一些和Bean有关的方法：

```java
 public interface BeanDefinitionRegistry extends AliasRegistry {
    void registerBeanDefinition(String var1, BeanDefinition var2) throws BeanDefinitionStoreException;

    void removeBeanDefinition(String var1) throws NoSuchBeanDefinitionException;

    BeanDefinition getBeanDefinition(String var1) throws NoSuchBeanDefinitionException;

    boolean containsBeanDefinition(String var1);

    String[] getBeanDefinitionNames();

    int getBeanDefinitionCount();

    boolean isBeanNameInUse(String var1);
}
```
这里我们需要借助BeanDefinitionRegistry的registerBeanDefinition方法来往IOC容器中注册Bean。该方法包含两个入参，第一个为需要注册的Bean名称（Id）,第二个参数为Bean的定义信息，它是一个接口，我们可以使用其实现类RootBeanDefinition来完成：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7joekenuj30m405cmxp.jpg">
</div>
为了演示ImportBeanDefinitionRegistrar的使用，我们先新增一个类，名称为Strawberry，代码略。

然后新增一个ImportBeanDefinitionRegistrar实现类MyImportBeanDefinitionRegistrar：
```java
public class MyImportBeanDefinitionRegistrar implements ImportBeanDefinitionRegistrar {
    @Override
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
        final String beanName = "strawberry";
        boolean contain = registry.containsBeanDefinition(beanName);
        if (!contain) {
            RootBeanDefinition rootBeanDefinition = new RootBeanDefinition(Strawberry.class);
            registry.registerBeanDefinition(beanName, rootBeanDefinition);
        }
    }
}
```
在上面的实现类中，我们先通过BeanDefinitionRegistry的containsBeanDefinition方法判断IOC容器中是否包含了名称为strawberry的组件，如果没有，则手动通过BeanDefinitionRegistry的registerBeanDefinition方法注册一个。

定义好MyImportBeanDefinitionRegistrar后，我们同样地在配置类的@Import中使用它：
```java
@Configuration
@Import({MyImportBeanDefinitionRegistrar.class})
public class WebConfig {
    ...
}
```
启动项目，观察控制台：组件已经注册成功。

## 使用FactoryBean注册组件
Spring还提供了一个FactoryBean接口，我们可以通过实现该接口来注册组件，该接口包含了两个抽象方法和一个默认方法：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jrtpswjj307402c3yc.jpg">
</div>
为了演示FactoryBean的使用，我们新增一个Cherry类，代码略。

然后创建FactoryBean的实现类CherryFactoryBean:
```java
public class CherryFactoryBean implements FactoryBean<Cherry> {
    @Override
    public Cherry getObject() {
        return new Cherry();
    }

    @Override
    public Class<?> getObjectType() {
        return Cherry.class;
    }

    @Override
    public boolean isSingleton() {
        return false;
    }
}
```
getObject返回需要注册的组件对象，getObjectType返回需要注册的组件类型，isSingleton指明该组件是否为单例。如果为多例的话，每次从容器中获取该组件都会调用其getObject方法。

定义好CherryFactoryBean后，我们在配置类中注册这个类：
```java
@Bean
public CherryFactoryBean cherryFactoryBean() {
    return new CherryFactoryBean();
}
```
测试从容器中获取：
```java
ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
Object cherry = context.getBean("cherryFactoryBean");
System.out.println(cherry.getClass());
```
启动项目，观察控制台输出：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jvyb5tjj308700l741.jpg">
</div>

可看到，虽然我们获取的是Id为cherryFactoryBean的组件，但其获取到的实际是getObject方法里返回的对象。

如果我们要获取cherryFactoryBean本身，则可以这样做：
```java
Object cherryFactoryBean = context.getBean("&cherryFactoryBean");
System.out.println(cherryFactoryBean.getClass());
```
启动项目，观察控制台：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jwuoj6uj30b000sgld.jpg">
</div>

为什么加上&前缀就可以获取到相应的工厂类了呢，查看BeanFactory的源码会发现原因:

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7jxb1fxxj309c0170sj.jpg">
</div>