---
title: "Junit简介"
date: 2019-10-22
---
# Junit简介
## 概述
JUnit 是用于编写和运行可重复的自动化测试的开源测试框架，这样可以保证我们的代码按预期工作。JUnit 可广泛用于工业和作为支架(从命令行)或IDE(如 IDEA)内单独的 Java 程序。

::: tip 测试分类：
1. 黑盒测试：不需要写代码，给输入值，看程序是否能够输出期望的值。
2. 白盒测试：需要写代码的。关注程序具体的执行流程。
:::

## 注解
| 注解                            | 描述                                                                                                       |
|-------------------------------|----------------------------------------------------------------------------------------------------------|
| @Test                         |
| public void method\(\)        | 测试注释指示该公共无效方法它所附着可以作为一个测试用例。                                                                             |
| @Before                       |
| public void method\(\)        | Before 注释表示，该方法必须在类中的每个测试之前执行，以便执行测试某些必要的先决条件。                                                           |
| @BeforeClass                  |
| public static void method\(\) | BeforeClass 注释指出这是附着在静态方法必须执行一次并在类的所有测试之前。发生这种情况时一般是测试计算共享配置方法\(如连接到数据库\)。                               |
| @After                        |
| public void method\(\)        | After 注释指示，该方法在执行每项测试后执行\(如执行每一个测试后重置某些变量，删除临时变量等\)                                                      |
| @AfterClass                   |
| public static void method\(\) | 当需要执行所有的测试在 JUnit 测试用例类后执行，AfterClass 注解可以使用以清理建立方法，\(从数据库如断开连接\)。注意：附有此批注\(类似于 BeforeClass\)的方法必须定义为静态。 |
| @Ignore                       |
| public static void method\(\) | 当想暂时禁用特定的测试执行可以使用忽略注释。每个被注解为 @Ignore 的方法将不被执行。                                                           |

## 断言
### 什么是断言
>断言是编程术语，表示为一些布尔表达式，程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。

### 常用断言方法
| 断言                                                                                                 | 描述                                                                                    |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| void assertEquals\(\[String message\], expected value, actual value\)                              | 断言两个值相等。值可能是类型有 int, short, long, byte, char or java\.lang\.Object\. 第一个参数是一个可选的字符串消息 |
| void assertTrue\(\[String message\], boolean condition\)                                           | 断言一个条件为真                                                                              |
| void assertFalse\(\[String message\],boolean condition\)                                           | 断言一个条件为假                                                                              |
| void assertNotNull\(\[String message\], java\.lang\.Object object\)                                | 断言一个对象不为空\(null\)                                                                     |
| void assertNull\(\[String message\], java\.lang\.Object object\)                                   | 断言一个对象为空\(null\)                                                                      |
| void assertSame\(\[String message\], java\.lang\.Object expected, java\.lang\.Object actual\)      | 断言，两个对象引用相同的对象                                                                        |
| void assertNotSame\(\[String message\], java\.lang\.Object unexpected, java\.lang\.Object actual\) | 断言，两个对象不是引用同一个对象                                                                      |
| void assertArrayEquals\(\[String message\], expectedArray, resultArray\)                           | 断言预期数组和结果数组相等。数组的类型可能是 int, long, short, char, byte or java\.lang\.Object             |

### 测试
```java
/**
 * 测试断言
 */
@Test
public void testAssert() {
    String obj1 = "junit";
    String obj2 = "junit";
    String obj3 = "test";
    String obj4 = "test";
    String obj5 = null;
    int var1 = 1;
    int var2 = 2;
    int[] arithmetic1 = {1, 2, 3};
    int[] arithmetic2 = {1, 2, 3};

    assertEquals(obj1, obj2);

    assertSame(obj3, obj4);

    assertNotSame(obj2, obj4);

    assertNotNull(obj1);

    assertNull(obj5);

    assertTrue("为真", var1 == var2);

    assertArrayEquals(arithmetic1, arithmetic2);
}
```