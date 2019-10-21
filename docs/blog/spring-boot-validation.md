---
title: "Spring注解校验"
---

# Spring注解校验

### 空检查

- @Null 验证对象是否为 null
- @NotNull 验证对象是否不为 null, 无法查检长度为 0 的字符串
- @NotBlank 检查约束字符串是不是 Null 还有被 Trim 的长度是否大于 0,只对字符串,且会去掉前后空格
- @NotEmpty 检查约束元素是否为 NULL 或者是 EMPTY

### 布尔检查

- @AssertTrue 验证 Boolean 对象是否为 true
- @AssertFalse 验证 Boolean 对象是否为 false

### 长度检查

- @Size(min=, max=) 验证对象（Array, Collection , Map, String）长度是否在给定的范围之内
- @Length(min=, max=) 验证字符串长度介于 min 和 max 之间

### 日期检查

- @Past 验证 Date 和 Calendar 对象是否在当前时间之前，验证成立的话被注释的元素一定是一个过去的日期
- @Future 验证 Date 和 Calendar 对象是否在当前时间之后 ，验证成立的话被注释的元素一定是一个将来的日期

### 正则检查

- @Pattern 验证 String 对象是否符合正则表达式的规则，被注释的元素符合制定的正则表达式
  - regexp：正则表达式
  - flags：指定 Pattern.Flag 的数组，表示正则表达式的相关选项
  
### 数值检查


注意： 建议使用在 String ,Integer 类型，不建议使用在 int 类型上，因为表单值为 “” 时无法转换为 int，但可以转换为 String 为 “”，Integer 为 null


- @Min 验证 Number 和 String 对象是否大等于指定的值
- @Max 验证 Number 和 String 对象是否小等于指定的值
- @DecimalMax 被标注的值必须不大于约束中指定的最大值. 这个约束的参数是一个通过 BigDecimal 定义的最大值的字符串表示 .小数 存在精度
- @DecimalMin 被标注的值必须不小于约束中指定的最小值. 这个约束的参数是一个通过 BigDecimal 定义的最小值的字符串表示 .小数 存在精度
- @Digits 验证 Number 和 String 的构成是否合法
- @Digits(integer=,fraction=) 验证字符串是否是符合指定格式的数字，integer 指定整数精度，fraction 指定小数精度
- @Range(min=, max=) 被指定的元素必须在合适的范围内
- @Range(min=10000,max=50000,message=”range.bean.wage”)
- @Valid 递归的对关联对象进行校验, 如果关联对象是个集合或者数组，那么对其中的元素进行递归校验，如果是一个 map，则对其中的值部分进行校验.(是否进行递归验证)
- @CreditCardNumber 信用卡验证
- @Email 验证是否是邮件地址，如果为 null，不进行验证，算通过验证
- @ScriptAssert(lang= ,script=, alias=)
- @URL(protocol=,host=, port=,regexp=, flags=)

---

### 增加依赖

这里我们使用 Hibernate Validator 5.x 来实现 Spring Validation 接口，pom.xml 文件如下：

```
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>5.3.4.Final</version>
</dependency>
```

主要是增加了 org.hibernate:hibernate-validator 依赖。

---

### 定义异常处理工具类


```java
package com.funtl.my.shop.commons.validator;

import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * JSR303 Validator(Hibernate Validator)工具类.
 * <p>
 * ConstraintViolation 中包含 propertyPath, message 和 invalidValue 等信息.
 * 提供了各种 convert 方法，适合不同的 i18n 需求:
 * 1. List<String>, String 内容为 message
 * 2. List<String>, String 内容为 propertyPath + separator + message
 * 3. Map<propertyPath, message>
 * <p>
 *
 * <p>Title: BeanValidator</p>
 * <p>Description: </p>
 *
 * @author Tiny
 * @version 1.0.0
 * @date 2018/6/26 17:21
 */
public class BeanValidator {

    @Autowired
    private static Validator validator;

    public static void setValidator(Validator validator) {
        BeanValidator.validator = validator;
    }
    /**
     * 调用 JSR303 的 validate 方法, 验证失败时抛出 ConstraintViolationException.
     */
    private static void validateWithException(Validator validator, Object object, Class<?>... groups) throws ConstraintViolationException {
        Set constraintViolations = validator.validate(object, groups);
        if (!constraintViolations.isEmpty()) {
            throw new ConstraintViolationException(constraintViolations);
        }
    }

    /**
     * 辅助方法, 转换 ConstraintViolationException 中的 Set<ConstraintViolations> 中为 List<message>.
     */
    private static List<String> extractMessage(ConstraintViolationException e) {
        return extractMessage(e.getConstraintViolations());
    }

    /**
     * 辅助方法, 转换 Set<ConstraintViolation> 为 List<message>
     */
    private static List<String> extractMessage(Set<? extends ConstraintViolation> constraintViolations) {
        List<String> errorMessages = new ArrayList<>();
        for (ConstraintViolation violation : constraintViolations) {
            errorMessages.add(violation.getMessage());
        }
        return errorMessages;
    }

    /**
     * 辅助方法, 转换 ConstraintViolationException 中的 Set<ConstraintViolations> 为 Map<property, message>.
     */
    private static Map<String, String> extractPropertyAndMessage(ConstraintViolationException e) {
        return extractPropertyAndMessage(e.getConstraintViolations());
    }

    /**
     * 辅助方法, 转换 Set<ConstraintViolation> 为 Map<property, message>.
     */
    private static Map<String, String> extractPropertyAndMessage(Set<? extends ConstraintViolation> constraintViolations) {
        Map<String, String> errorMessages = new HashMap<>();
        for (ConstraintViolation violation : constraintViolations) {
            errorMessages.put(violation.getPropertyPath().toString(), violation.getMessage());
        }
        return errorMessages;
    }

    /**
     * 辅助方法, 转换 ConstraintViolationException 中的 Set<ConstraintViolations> 为 List<propertyPath message>.
     */
    private static List<String> extractPropertyAndMessageAsList(ConstraintViolationException e) {
        return extractPropertyAndMessageAsList(e.getConstraintViolations(), " ");
    }

    /**
     * 辅助方法, 转换 Set<ConstraintViolations> 为 List<propertyPath message>.
     */
    private static List<String> extractPropertyAndMessageAsList(Set<? extends ConstraintViolation> constraintViolations) {
        return extractPropertyAndMessageAsList(constraintViolations, " ");
    }

    /**
     * 辅助方法, 转换 ConstraintViolationException 中的 Set<ConstraintViolations> 为 List<propertyPath + separator + message>.
     */
    private static List<String> extractPropertyAndMessageAsList(ConstraintViolationException e, String separator) {
        return extractPropertyAndMessageAsList(e.getConstraintViolations(), separator);
    }

    /**
     * 辅助方法, 转换 Set<ConstraintViolation> 为 List<propertyPath + separator + message>.
     */
    private static List<String> extractPropertyAndMessageAsList(Set<? extends ConstraintViolation> constraintViolations, String separator) {
        List<String> errorMessages = new ArrayList<>();
        for (ConstraintViolation violation : constraintViolations) {
            errorMessages.add(violation.getPropertyPath() + separator + violation.getMessage());
        }
        return errorMessages;
    }

    /**
     * 服务端参数有效性验证
     *
     * @param object 验证的实体对象
     * @param groups 验证组
     * @return 验证成功：返回 null；验证失败：返回错误信息
     */
    public static String validator(Object object, Class<?>... groups) {
        try {
            validateWithException(validator, object, groups);
        } catch (ConstraintViolationException ex) {
            List<String> list = extractMessage(ex);
            list.add(0, "数据验证失败：");

            // 封装错误消息为字符串
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < list.size(); i++) {
                String exMsg = list.get(i);
                if (i != 0 ){
                    sb.append(String.format("%s. %s", i, exMsg)).append(list.size() > 1 ? "<br/>" : "");
                } else {
                    sb.append(exMsg).append(list.size() > 1 ? "<br/>" : "");
                }
            }

            return sb.toString();
        }

        return null;
    }
}
```
---

### 工具类静态注入
当使用springMVC时，修改 spring-context.xml 文件，注入 Validator 工具类，配置如下：

```xml
<!-- 配置 Bean Validator 定义 -->
<bean id="validator" class="org.springframework.validation.beanvalidation.LocalValidatorFactoryBean"/>
<bean id="beanValidator" class="com.funtl.my.shop.commons.validator.BeanValidator">
    <property name="validator" ref="validator" />
</bean>
```

当使用Spring Boot,因为静态方法不能用@Autowired注解,解决办法是:


**（1）使用@PostConstruct注解**

```java
@Component
public class Demo {
    @Autowired
    private TestConfig testConfig;

    private static TestConfig config;

    @PostConstruct
    public void init() {
        config = testConfig;
    }

    public static void demo() {
        config.test();
    }
}
```

**（2）加个构造函数**

```java
@Component
public class Demo {

    private static TestConfig testConfig;

    public Demo(TestConfig testConfig) {
        this.testConfig = testConfig;
    }

    public static void demo() {
        testConfig.test();
    }
}
```

如果不注入则会直接报异常。

### Service层
在Service层用validator方法校验。如果返回的参数为空，就代表没有异常，验证通过。

```
 //用spring validation进行校验
        String validator = BeanValidator.validator(tbSysUser);

        //校验失败
        if (validator!=null){
           return BaseResult.fail(validator);
        }
//        校验成功
        else {
            tbSysUserMapper.insert(tbSysUser);
            return BaseResult.success("保存用户信息成功");
        }
```
### controller
最后在controller层增加@valid注解。

### 其他问题
在之后，我由于不小心在实体类上加了不正确的注解，即在email上加了@Email的注解，导致验证发生错误，BeanValicator还是直接报错了。
解决方法是删掉不正确的注解即可。
