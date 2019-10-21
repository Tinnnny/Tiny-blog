---
title: "Spring boot起步"
---
# Spring boot起步
### 用Maven构建
#### pom.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.springframework</groupId>
    <artifactId>gs-spring-boot</artifactId>
    <version>0.1.0</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.4.RELEASE</version>
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

    <properties>
        <java.version>1.8</java.version>
    </properties>


    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

### 创建一个简单的web应用程序
`src/main/java/hello/HelloController.java`

```java
package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
```

添加`@RestController`注解，意味着SpringMVC已经为处理Web请求做好了准备。
`@RequestMapping`关联了“/”和index()方法。当从浏览器调用或在命令行上使用curl时，该方法将返回纯文本。那是因为`@RestController`联合`@Controller`和`@ResponseBody`，这两个注释导致Web请求返回数据而不是视图。

### 创建application类
在这里，创建了一个Application使用以下组件初始化：

`src/main/java/hello/Application.java`

```java
package hello;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            System.out.println("Let's inspect the beans provided by Spring Boot:");

            String[] beanNames = ctx.getBeanDefinitionNames();
            Arrays.sort(beanNames);
            for (String beanName : beanNames) {
                System.out.println(beanName);
            }

        };
    }

}
```

`@SpringBootApplication`是一个方便的注释，它添加了以下所有内容：

`@Configuration`将类标记为应用程序上下文的bean定义的源。

`@EnableAutoConfiguration`告诉SpringBoot根据类路径设置、其他bean和各种属性设置开始添加bean。

通常你会添加`@EnableWebMvc`对于SpringMVC应用程序，但是SpringBoot在看到Springwebmvc在类路径上。这会将应用程序标记为web应用程序，并激活关键行为，例如设置DispatcherServlet.

`@ComponentScan`告诉Spring在hello包,让它找到控制器。

这个main()方法使用SpringBoot的`SpringApplication.run()`方法来启动应用程序,这里没有一行XML,也没有web.xml。这个Web应用程序是100%纯Java的，不需要其他配置。

还有一个CommandLineRunner方法标记为`@Bean`,这行程序在项目启动时就运行了。它检索所有由应用程序创建或由于SpringBoot自动添加的bean。把它们分类打印出来。

执行

`mvn package && java -jar target/gs-spring-boot-0.1.0.jar`

输出结果：
```
Let's inspect the beans provided by Spring Boot:
application
beanNameHandlerMapping
defaultServletHandlerMapping
dispatcherServlet
embeddedServletContainerCustomizerBeanPostProcessor
handlerExceptionResolver
helloController
httpRequestHandlerAdapter
messageSource
mvcContentNegotiationManager
mvcConversionService
mvcValidator
org.springframework.boot.autoconfigure.MessageSourceAutoConfiguration
org.springframework.boot.autoconfigure.PropertyPlaceholderAutoConfiguration
org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration
org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration$DispatcherServletConfiguration
org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration$EmbeddedTomcat
org.springframework.boot.autoconfigure.web.ServerPropertiesAutoConfiguration
org.springframework.boot.context.embedded.properties.ServerProperties
org.springframework.context.annotation.ConfigurationClassPostProcessor.enhancedConfigurationProcessor
org.springframework.context.annotation.ConfigurationClassPostProcessor.importAwareProcessor
org.springframework.context.annotation.internalAutowiredAnnotationProcessor
org.springframework.context.annotation.internalCommonAnnotationProcessor
org.springframework.context.annotation.internalConfigurationAnnotationProcessor
org.springframework.context.annotation.internalRequiredAnnotationProcessor
org.springframework.web.servlet.config.annotation.DelegatingWebMvcConfiguration
propertySourcesBinder
propertySourcesPlaceholderConfigurer
requestMappingHandlerAdapter
requestMappingHandlerMapping
resourceHandlerMapping
simpleControllerHandlerAdapter
tomcatEmbeddedServletContainerFactory
viewControllerHandlerMapping
```

### 添加单元测试
如果添加一个测试，SpringTest已经为此提供了一些机制，并且很容易将其包含到项目中。

如果使用的是Maven，将其添加到依赖项列表中：
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
```
现在编写一个简单的单元测试，通过端点模拟servlet请求和响应：
`src/test/java/hello/HelloControllerTest.java`

```java
package hello;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class HelloControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void getHello() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo("Greetings from Spring Boot!")));
    }
}
```

这个MockMvc来自SpringTest，并允许通过一组方便的构建器类将HTTP请求发送到DispatcherServlet并对结果做出断言。
注意使用`@AutoConfigureMockMvc`连同`@SpringBootTest`注入MockMvc举个例子。有了`@SpringBootTest`我们要求创建整个应用程序上下文。另一种选择是要求SpringBoot只使用@WebMvcTest。Spring Boot在任何情况下都会自动尝试定位应用程序的主应用程序类，但是如果想要构建不同的东西，可以重写它，或者缩小它的范围。

除了模拟HTTP请求周期之外，我们还可以使用SpringBoot编写一个非常简单的全堆栈集成测试。例如，我们可以这样做，而不是(或者)上面的模拟测试：

`src/test/java/hello/HelloControllerIT.java`

```java
package hello;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloControllerIT {

    @LocalServerPort
    private int port;

    private URL base;

    @Autowired
    private TestRestTemplate template;

    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/");
    }

    @Test
    public void getHello() throws Exception {
        ResponseEntity<String> response = template.getForEntity(base.toString(),
                String.class);
        assertThat(response.getBody(), equalTo("Greetings from Spring Boot!"));
    }
}
```

由于有`webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT`，嵌入式服务器是在一个随机端口上启动的。又因为有`@LocalServerPort`，运行时会发现实际端口.
