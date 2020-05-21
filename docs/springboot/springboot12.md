# 深入学习Spring组件注册(一)
接触过Spring的同学肯定都听过IOC。在传统的Java编程中，当需要用到某个对象的时候，我们都是主动地显示创建一个对象实例（new）。使用Spring后就不需要这样做了，因为Spring会帮我们在需要用到某些对象的地方自动注入该对象，而无须我们自己去创建。这种模式俗称控制反转，即IOC（Inversion of Control）。那么Spring是从什么地方获取到我们所需要的对象呢？其实Spring给我们提供了一个IOC容器，里面管理着所有我们需要的对象，组件注册就是我们去告诉Spring哪些类需要交给IOC容器管理。

## 通过@Bean注册组件
在较早版本的Spring中，我们都是通过XML的方式来往IOC容器中注册组件的，下面这段代码大家肯定不会陌生：
```java
// 返回 IOC 容器，基于 XML配置，传入配置文件的位置
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("xxx.xml");
User user = (User) applicationContext.getBean("user");
```
Spring 4后推荐我们使用Java Config的方式来注册组件。

为了演示，我们通过http://start.spring.io/搭建一个简单Spring Boot应用，然后引入Lombok依赖（编辑器也需要安装Lombok插件）：
```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <scope>provided</scope>
</dependency>
```
然后创建一个User类：
```java
@ToString
@AllArgsConstructor
@Data
public class User {
    private String name;
    private Integer age;
}
```

接着创建一个配置类，在里面通过@Bean注解注册User类：
```java
@Configuration
public class WebConfig {
    @Bean()
    public User user() {
        return new User("mrbird", 18);
    }
}
```
通过@Bean注解，我们向IOC容器注册了一个名称为user（Bean名称默认为方法名，我们也可以通过@Bean("myUser")方式来将组件名称指定为myUser）。

组件注册完毕后，我们测试一下从IOC容器中获取这个组件。在Spring Boot入口类中编写如下代码：
```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
    	SpringApplication.run(DemoApplication.class, args);

        // 返回 IOC 容器，使用注解配置，传入配置类
        ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
        User user = context.getBean(User.class);
        System.out.println(user);
    }
}
```
因为我们是通过注解方式来注册组件的，所以需要使用AnnotationConfigApplicationContext来获取相应的IOC容器，入参为配置类。

启动项目，看下控制台输出：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7hyriozuj306600j741.jpg">
</div>

说明组件注册成功。

我们将组件的名称改为myUser，然后看看IOC容器中，User类型组件是否叫myUser。

启动项目，观察控制台输出:
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7hzq2v71j301y00o0go.jpg">
</div>

## 使用@ComponentScan扫描
在使用XML配置组件扫描的时候，我们都是这样配置的：
```xml
<context:component-scan base-package=""></context:component-scan>
```
其中base-package指定了扫描的路径。路径下所有被@Controller、@Service、@Repository和@Component注解标注的类都会被纳入IOC容器中。

现在我们脱离XML配置后，可以使用@ComponentScan注解来扫描组件并注册。

在使用@ComponentScan扫描之前，我们先创建一个Controller，一个Service，一个Dao，并标注上相应的注解。

然后修改配置类：
```java
@Configuration
@ComponentScan("cc.mrbird.demo")
public class WebConfig {

    // @Bean("myUser")
    // public User user() {
    //     return new User("mrbird", 18);
    // }
}
```
在配置类中，我们通过@ComponentScan("cc.mrbird.demo")配置了扫描路径，并且将User组件注册注释掉了，取而代之的是在User类上加上@Component注解：
```java
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class User {
    private String name;
    private Integer age;
}
```
::: tip
值得注意的是，我们不能将Spring Boot的入口类纳入扫描范围中，否则项目启动将出错。
:::
接下来我们看下在基于注解的IOC容器中是否包含了这些组件：
```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);

        ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);
        // 查看基于注解的 IOC容器中所有组件名称
        String[] beanNames = context.getBeanDefinitionNames();
        Arrays.stream(beanNames).forEach(System.out::println);
    }
}
```
启动项目，观察控制台：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7i5d3fiaj30hu057dfy.jpg">
</div>
可见，组件已经成功被扫描进去了，并且名称默认为类名首字母小写。

这里，配置类WebConfig也被扫描并注册了，查看@Configuration源码就会发现原因：
```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface Configuration {
    String value() default "";
}
```
### 指定扫描策略
@ComponentScan注解允许我们指定扫描策略，即指定哪些被扫描，哪些不被扫描，查看其源码可发现这两个属性：
```java
/**
 * Specifies which types are eligible for component scanning.
 * <p>Further narrows the set of candidate components from everything in {@link #basePackages}
 * to everything in the base packages that matches the given filter or filters.
 * <p>Note that these filters will be applied in addition to the default filters, if specified.
 * Any type under the specified base packages which matches a given filter will be included,
 * even if it does not match the default filters (i.e. is not annotated with {@code @Component}).
 * @see #resourcePattern()
 * @see #useDefaultFilters()
 */
Filter[] includeFilters() default {};

/**
 * Specifies which types are not eligible for component scanning.
 * @see #resourcePattern
 */
Filter[] excludeFilters() default {};
```
其中Filter也是一个注解:
```java
/**
 * Declares the type filter to be used as an {@linkplain ComponentScan#includeFilters
 * include filter} or {@linkplain ComponentScan#excludeFilters exclude filter}.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({})
@interface Filter {

    FilterType type() default FilterType.ANNOTATION;

    @AliasFor("classes")
    Class<?>[] value() default {};

    @AliasFor("value")
    Class<?>[] classes() default {};
    String[] pattern() default {};
}
```
接下来我们使用excludeFilters来排除一些组件的扫描：
```java
@Configuration
@ComponentScan(value = "cc.mrbird.demo",
        excludeFilters = {
                @Filter(type = FilterType.ANNOTATION,
                        classes = {Controller.class, Repository.class}),
                @Filter(type = FilterType.ASSIGNABLE_TYPE, classes = User.class)
        })
public class WebConfig {

}
```
上面我们指定了两种排除扫描的规则：
1. 根据注解来排除（type = FilterType.ANNOTATION）,这些注解的类型为classes = {Controller.class, Repository.class}。即Controller和Repository注解标注的类不再被纳入到IOC容器中。
2. 根据指定类型类排除（type = FilterType.ASSIGNABLE_TYPE），排除类型为User.class，其子类，实现类都会被排除。

启动项目，观察控制台：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7iepcxhxj30ht03dmx6.jpg">
</div>

可见排除成功。

除了上面两种常用的规则外，我们还可以使用别的规则，查看FilterType源码：
```java
public enum FilterType {
    /**
     * Filter candidates marked with a given annotation.
     *
     * @see org.springframework.core.type.filter.AnnotationTypeFilter
     */
    ANNOTATION,

    /**
     * Filter candidates assignable to a given type.
     *
     * @see org.springframework.core.type.filter.AssignableTypeFilter
     */
    ASSIGNABLE_TYPE,

    /**
     * Filter candidates matching a given AspectJ type pattern expression.
     *
     * @see org.springframework.core.type.filter.AspectJTypeFilter
     */
    ASPECTJ,

    /**
     * Filter candidates matching a given regex pattern.
     *
     * @see org.springframework.core.type.filter.RegexPatternTypeFilter
     */
    REGEX,

    /**
     * Filter candidates using a given custom
     * {@link org.springframework.core.type.filter.TypeFilter} implementation.
     */
    CUSTOM
}
```
可看到，我们还可以通过ASPECTJ表达式，REGEX正则表达式和CUSTOM自定义规则（下面详细介绍）来指定扫描策略。

includeFilters的作用和excludeFilters相反，其指定的是哪些组件需要被扫描：
```java
@Configuration
@ComponentScan(value = "cc.mrbird.demo",
        includeFilters = {
                @Filter(type = FilterType.ANNOTATION, classes = Service.class)
        }, useDefaultFilters = false)
public class WebConfig {

}
```
上面配置了只将service纳入IOC容器，并且需要用useDefaultFilters = false来关闭Spring默认的扫描策略才能让我们的配置生效（Spring Boot入口类的@SpringBootApplication注解包含了一些默认的扫描策略）。

启动项目，观察控制台：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7igr56dyj30hx03fmx6.jpg">
</div>
可看到，IOC容器中将不再包含dao，Controller。

### 多扫描策略配置
在Java 8之前，我们可以使用@ComponentScans来配置多个@ComponentScan以实现多扫描规则配置：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7iii7iumj30bo048dfs.jpg">
</div>

而在Java 8中，新增了@Repeatable注解，使用该注解修饰的注解可以重复使用，查看@ComponentScan源码会发现其已经被该注解标注：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7iioor50j30bq02tdfr.jpg">
</div>
所以除了使用@ComponentScans来配置多扫描规则外，我们还可以通过多次使用@ComponentScan来指定多个不同的扫描规则。

### 自定义扫描策略
自定义扫描策略需要我们实现org.springframework.core.type.filter.TypeFilter接口，创建MyTypeFilter实现该接口：

```java
public class MyTypeFilter implements TypeFilter {
    @Override
    public boolean match(MetadataReader metadataReader, MetadataReaderFactory metadataReaderFactory) throws IOException {
        return false;
    }
}
```
该接口包含match方法，其两个入参MetadataReader和MetadataReaderFactory含义如下：
1. MetadataReader：当前正在扫描的类的信息；
2. MetadataReaderFactory：可以通过它来获取其他类的信息。

当match方法返回true时说明匹配成功，false则说明匹配失败。继续完善这个过滤规则：
```java
public class MyTypeFilter implements TypeFilter {
    @Override
    public boolean match(MetadataReader metadataReader, MetadataReaderFactory metadataReaderFactory) {
        // 获取当前正在扫描的类的注解信息
        AnnotationMetadata annotationMetadata = metadataReader.getAnnotationMetadata();
        // 获取当前正在扫描的类的类信息
        ClassMetadata classMetadata = metadataReader.getClassMetadata();
        // 获取当前正在扫描的类的路径等信息
        Resource resource = metadataReader.getResource();

        String className = classMetadata.getClassName();
        return StringUtils.hasText("er");
    }
}
```
上面指定了当被扫描的类名包含er时候，匹配成功，配合excludeFilters使用意指当被扫描的类名包含er时，该类不被纳入IOC容器中。

我们在@ComponentScan中使用这个自定义的过滤策略：
```java
@Configuration
@ComponentScan(value = "cc.mrbird.demo",
        excludeFilters = {
            @Filter(type = FilterType.CUSTOM, classes = MyTypeFilter.class)
        })
public class WebConfig {
}
```
启动项目，观察输出：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc7ipi5pdqj30ib0303yi.jpg">
</div>
因为User，UserMapper，UserService和UserController等类的类名都包含er，所以它们都没有被纳入到IOC容器中。