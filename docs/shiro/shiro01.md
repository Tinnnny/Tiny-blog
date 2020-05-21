# 第二章 身份验证
身份验证，即在应用中谁能证明他就是他本人。一般提供如他们的身份ID一些标识信息来表明他就是他本人，如提供身份证，用户名/密码来证明。

在shiro中，用户需要提供principals （身份）和credentials（证明）给shiro，从而应用能验证用户身份：

**principals**：身份，即主体的标识属性，可以是任何东西，如用户名、邮箱等，唯一即可。一个主体可以有多个principals，但只有一个Primary principals，一般是用户名/密码/手机号。

**credentials**：证明/凭证，即只有主体知道的安全值，如密码/数字证书等。

**最常见的principals和credentials组合就是用户名/密码了**。接下来先进行一个基本的身份认证。

另外两个相关的概念是之前提到的Subject及Realm，分别是主体及验证主体的数据源。

# 2.1 环境准备
添加junit、common-logging及shiro-core依赖即可
```xml
<dependencies>  
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </dependency>
    <dependency>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
        <version>1.2</version>
    </dependency>
    <dependency>
        <groupId>org.apache.shiro</groupId>
        <artifactId>shiro-core</artifactId>
        <version>1.4.2</version>
    </dependency> 
</dependencies>   
```

## 2.2 首先准备一些用户身份/凭据（shiro.ini）
1. 此处使用ini配置文件，通过[users]指定了两个主体：zhang/123、wang/123。
```java
[users]  
zhang=123  
wang=123  
```
2. 测试用例
```java
@Test  
public void testHelloworld() {  
    //1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager  
    Factory<org.apache.shiro.mgt.SecurityManager> factory =  
            new IniSecurityManagerFactory("classpath:shiro.ini");  
    //2、得到SecurityManager实例 并绑定给SecurityUtils  
    org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();  
    SecurityUtils.setSecurityManager(securityManager);  
    //3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）  
    Subject subject = SecurityUtils.getSubject();  
    UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");  
  
    try {  
        //4、登录，即身份验证  
        subject.login(token);  
    } catch (AuthenticationException e) {  
        //5、身份验证失败  
    }  
  
    Assert.assertEquals(true, subject.isAuthenticated()); //断言用户已经登录  
  
    //6、退出  
    subject.logout();  
}  
```