---
title: "Spring注解"
---
# Spring注解
### `@data`
引入lombok依赖，就可以免去getter和setter。

### `@Repository`
用于对 DAO 实现类进行注解

### `@Service`
用于对 Service 实现类进行注解

### `@Controller`
用于对 Controller 实现类进行注解

### `@Component`
需要注入但是不是以上三种就用这个注解。

### `@Runwith`
@RunWith就是一个运行器

@RunWith(JUnit4.class)就是指用JUnit4来运行

@RunWith(SpringJUnit4ClassRunner.class),让测试运行于Spring测试环境

@RunWith(Suite.class)的话就是一套测试集合，

@RunWith(SpringJUnit4ClassRunner.class)使用了Spring的SpringJUnit4ClassRunner，以便在测试开始的时候自动创建Spring的应用上下文。其他的想创建spring容器的话，就得用web.xml配置classloader。 注解了@RunWith就可以直接使用spring容器，直接使用@Test注解，不用启动spring容器

### `@SpringBootTest(classes=HelloSpringBootApplication.class)`
@SpringBootTest注解是SpringBoot自1.4.0版本开始引入的一个用于测试的注解。其中，classes属性指定启动类，SpringBootTest.WebEnvironment.RANDOM_PORT经常和测试类中@LocalServerPort一起在注入属性时使用。会随机生成一个端口号。
也是为了能识别application.yml的配置。


