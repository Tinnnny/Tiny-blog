# Spring Boot AOP记录用户操作日志
在Spring框架中，使用AOP配合自定义注解可以方便的实现用户操作的监控。首先搭建一个基本的Spring Boot Web环境开启Spring Boot，然后引入必要依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>

<!-- aop依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
<dependency>
   <groupId>com.alibaba</groupId>
   <artifactId>druid-spring-boot-starter</artifactId>
   <version>1.1.21</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.48</version>
    <scope>runtime</scope>
</dependency>
```

## 自定义注解
定义一个方法级别的@Log注解，用于标注需要监控的方法：
```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Log {
    String value() default "";
}
```

## 创建库表和实体
在数据库中创建一张sys_log表，用于保存用户的操作日志
```sql
/*
SQLyog Ultimate v12.5.0 (64 bit)
MySQL - 5.5.40 : Database - test
*********************************************************************

CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `sys_log` */

DROP TABLE IF EXISTS `sys_log`;

CREATE TABLE `sys_log` (
  `ID` int(20) NOT NULL,
  `USERNAME` varchar(50) DEFAULT NULL,
  `OPERATION` varchar(50) DEFAULT NULL,
  `TIME` int(11) DEFAULT NULL,
  `METHOD` varchar(200) DEFAULT NULL,
  `PARAMS` varchar(500) DEFAULT NULL,
  `IP` varchar(64) DEFAULT NULL,
  `CREATE_TIME` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

库表对应的实体：
```java
@Data
public class SysLog implements Serializable {
    private Integer id;

    private String username;

    private String operation;

    private Integer time;

    private String method;

    private String params;

    private String ip;

    private Date createTime;

    private static final long serialVersionUID = 1L;
}
```

## 保存日志的方法
为了方便，这里直接使用Spring JdbcTemplate来操作数据库。定义一个SysLogDao接口，包含一个保存操作日志的抽象方法：
```java
public interface SysLogDao {
    void saveSysLog(SysLog syslog);
}
```

其实现方法：
```java
@Repository
public class SysLogDaoImp implements SysLogDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void saveSysLog(SysLog syslog) {
        String sql = "insert into sys_log (username,operation,time,method,params,ip,create_time) values(?,?,?,?,?,?,?)";

        jdbcTemplate.update(sql,
                syslog.getUsername(),
                syslog.getOperation(),
                syslog.getTime(),
                syslog.getMethod(),
                syslog.getParams(),
                syslog.getId(),
                syslog.getCreateTime());

    }
}

```

## 切面和切点
定义一个LogAspect类，使用@Aspect标注让其成为一个切面，切点为使用@Log注解标注的方法，使用@Around环绕通知：
```java
@Aspect
@Component
public class LogAspect {

	@Autowired
	private SysLogDao sysLogDao;

	@Pointcut("@annotation(com.example.demo.annotation.Log)")
	public void pointcut() { }

	@Around("pointcut()")
	public Object around(ProceedingJoinPoint point) {
		Object result = null;
		/**
		 * currentTimeMillis方法就是 获取当前系统时间与1970年01月01日00:00点之间的毫秒差值,常常成对使用测试程序运行时间。
		 */
		long beginTime = System.currentTimeMillis();
		try {
			/**
			 * 环绕通知 ProceedingJoinPoint 执行proceed方法的作用是让目标方法执行，这也是环绕通知和前置、后置通知方法的一个最大区别。
			 * 简单理解，环绕通知=前置+目标方法执行+后置通知，proceed方法就是用于启动目标方法执行的.
			 */
			result = point.proceed();
		} catch (Throwable throwable) {
			throwable.printStackTrace();
		}
		// 执行时长(毫秒)
		long time = System.currentTimeMillis() - beginTime;
		// 保存日志
		saveLog(point, time);
		return result;
	}

	private void saveLog(ProceedingJoinPoint joinPoint, long time) {
//        返回当前连接点签名
		MethodSignature signature = (MethodSignature) joinPoint.getSignature();
		Method method = signature.getMethod();
		SysLog sysLog = new SysLog();
		Log logAnnotation = method.getAnnotation(Log.class);
		if (logAnnotation != null) {
//            注解上的描述
			sysLog.setOperation(logAnnotation.value());
		}

		//请求的方法名
		//getTarget()返回目标对象，一般我们都需要它或者（也就是定义方法的接口或类
		String className = joinPoint.getTarget().getClass().getName();
		String methodName = signature.getName();
		sysLog.setMethod(className + "." + methodName + "()");

		//请求的方法参数值
		Object[] args = joinPoint.getArgs();

		//请求方法的参数名称
		LocalVariableTableParameterNameDiscoverer u = new LocalVariableTableParameterNameDiscoverer();
		String[] paramNames = u.getParameterNames(method);

		if (args != null && paramNames != null) {
			String params = "";
			for (int i = 0; i < args.length; i++) {
				params += " " + paramNames[i] + ":" + args[i];
			}
			sysLog.setParams(params);
		}

		//获取request
		HttpServletRequest request = HttpContextUtils.getHttpServletRequest();
//      设置IP地址
		sysLog.setIp(IPUtils.getIpAddr(request));
		// 模拟一个用户名
		sysLog.setUsername("mrbird");
		sysLog.setTime((int) time);
		sysLog.setCreateTime(new Date());
		// 保存系统日志
		sysLogDao.saveSysLog(sysLog);

	}
}
```

## 测试
TestController：
```java
@RestController
public class TestController {

    @Log("执行方法一")
    @GetMapping("/one")
    public void methodOne(String name) { }
    
    @Log("执行方法二")
    @GetMapping("/two")
    public void methodTwo() throws InterruptedException {
        Thread.sleep(2000);
    }
    
    @Log("执行方法三")
    @GetMapping("/three")
    public void methodThree(String name, String age) { }
}
```
启动项目，分别访问：
- [http://localhost:8080/web/one?name=KangKang](http://localhost:8080/web/one?name=KangKang)
- [http://localhost:8080/web/two](http://localhost:8080/web/two)
- [http://localhost:8080/web/three?name=Mike&age=25](http://localhost:8080/web/three?name=Mike&age=25)

查询数据库：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc27pxwq88j317a03udg5.jpg">
</div>