---
title: "Spring注解"
date: 2019-10-22
---
# Spring注解

## 简化开发
::: tip 注解
`@data`引入lombok依赖，就可以免去getter和setter。
:::

## Spring自动注入
::: tip 注解
- `@Repository`：用于对 DAO 实现类进行注解
- `@Service`：用于对 Service 实现类进行注解
- `@Controller`：用于对 Controller 实现类进行注解
- `@Component`：需要注入但是不是以上三种就用这个注解。
- `@RestController`:继承了`@Controller`，相当于使用了`@Controller`和`@ResponseBody`。
:::
## `@Runwith`
::: tip 作用
`@RunWith`就是一个运行器，只在执行方法时运行相应的java代码。
:::
如`@RunWith(SpringJUnit4ClassRunner.class)`使用了Spring的`SpringJUnit4ClassRunner`，以便在测试开始的时候自动创建Spring的应用上下文。其他的想创建spring容器的话，就得用web.xml配置classloader。 注解了@RunWith就可以直接使用spring容器，直接使用@Test注解，不用启动spring容器。

## @ModelAttribute
::: tip `@ModelAttribute`具有如下3个作用：
- 绑定请求参数到命令对象：放在功能处理方法的入参上时，用于将多个请求参数绑定到一个命令对象，从而简化绑定流程，而且自动暴露为模型数据用于视图页面展示时使用
- 暴露 `@RequestMapping` 方法返回值为模型数据：放在功能处理方法的返回值上时，是暴露功能处理方法的返回值为模型数据，用于视图页面展示时使用
- 暴露表单引用对象为模型数据：在一个类中的任意`@RequestMapping`方法执行前，会先执行`@ModelAttribute`方法，并且将该方法返回的对象放到attribute中。
:::


暴露表单引用对象为模型数据的例子
```java
@ModelAttribute
public User get(@RequestParam(required = false) String id) {
    User entity = null;
    if (StringUtils.isNotBlank(id)) {
        entity = userService.get(id);
    }
    if (entity == null) {
        entity = new User();
    }
    return entity;
}
```