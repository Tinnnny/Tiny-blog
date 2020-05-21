# Spring Boot异常处理
Spring Boot对异常的处理有一套默认的机制：当应用中产生异常时，Spring Boot根据发送请求头中的accept是否包含text/html来分别返回不同的响应信息。当从浏览器地址栏中访问应用接口时，请求头中的accept便会包含text/html信息，产生异常时，Spring Boot通过org.springframework.web.servlet.ModelAndView对象来装载异常信息，并以HTML的格式返回；而当从客户端访问应用接口产生异常时（客户端访问时，请求头中的accept不包含text/html），Spring Boot则以JSON的格式返回异常信息。下面来验证一下。

## 默认异常处理机制
假设应用中有如下一个Controller：
```java
@RestController
@RequestMapping("user")
public class UserController {

    @GetMapping("/{id:\\d+}")
    public void get(@PathVariable String id) {
        throw new RuntimeException("user not exist");
    }
}
```

在代码中我们主动的抛出了一个RuntimeException，使用浏览器访问[http://localhost:8080/user/1](http://localhost:8080/user/1)

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc1wxlr5kwj30uk0kijte.jpg">
</div>

可看到页面返回了一些异常描述，并且请求头的accpet包含了text/html片段。

接着使用模拟发送REST请求的Chrome插件Restlet Client发送[http://localhost:8080/user/1](http://localhost:8080/user/1)

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc1xgmf85nj30ts0d9q3s.jpg">
</div>

可以看到请求头的accept值为*/*，并且返回一段JSON格式的信息。

查看Spring Boot的BasicErrorController类便可看到这一默认机制的具体实现：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc1xh669hxj30vb0m476l.jpg">
</div>

可看到errorHtml和error方法的请求地址和方法是一样的，唯一的区别就是errorHtml通过produces = {"text/html"}判断请求头的accpet属性中是否包含text/html，如果包含，便走该方法。

produces可能不算一个注解，因为什么呢，它是注解@requestMapping注解里面的属性项，它的作用是指定返回值类型，不但可以设置返回值类型还可以设定返回值的字符编码；

## 自定义html异常页面
我们可以通过在src/main/resources/resources/error路径下定义友好的异常页面，比如定义一个500.html页面：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>500</title>
</head>
<body>
    系统内部异常
</body>
</html>
```

## 自定义异常处理
除了可以通过自定义html异常页面来改变浏览器访问接口时产生的异常信息，我们也可以自定义异常处理来改表默认的客户端访问接口产生的异常信息。

我们手动定义一个UserNotExistException，继承RuntimeException。
```java
public class UserNotExistException extends RuntimeException{

    private static final long serialVersionUID = -1574716826948451793L;

    private String id;

    public UserNotExistException(String id){
        super("user not exist");
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
```

然后定义一个Controller异常处理类ControllerExceptionHandler：

`@ControllerAdvice`注解一般用作处理系统error，拦截出错信息，返回报错提示界面，防止用户看到一推出错信息！ 

```java
@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(UserNotExistException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> handleUserNotExistsException(UserNotExistException e) {
        Map<String, Object> map = new HashMap<>();
        map.put("id", e.getId());
        map.put("message", e.getMessage());
        return map;
    }
}
```

其中注解@ExceptionHandler指定了要处理的异常类型，注解@ResponseStatus指定异常处理方法返回的HTTP状态码为HttpStatus.INTERNAL_SERVER_ERROR，即500。HttpStatus是一个spring自带的枚举类型，封装了常见的HTTP状态码及描述：
```java
public enum HttpStatus {
    CONTINUE(100, "Continue"),
    SWITCHING_PROTOCOLS(101, "Switching Protocols"),
    PROCESSING(102, "Processing"),
    CHECKPOINT(103, "Checkpoint"),
    OK(200, "OK"),
    CREATED(201, "Created"),
    ACCEPTED(202, "Accepted"),
    NON_AUTHORITATIVE_INFORMATION(203, "Non-Authoritative Information"),
    NO_CONTENT(204, "No Content"),
    RESET_CONTENT(205, "Reset Content"),
    PARTIAL_CONTENT(206, "Partial Content"),
    MULTI_STATUS(207, "Multi-Status"),
    ALREADY_REPORTED(208, "Already Reported"),
    IM_USED(226, "IM Used"),
    MULTIPLE_CHOICES(300, "Multiple Choices"),
    MOVED_PERMANENTLY(301, "Moved Permanently"),
    FOUND(302, "Found"),
    /** @deprecated */
    @Deprecated
    MOVED_TEMPORARILY(302, "Moved Temporarily"),
    SEE_OTHER(303, "See Other"),
    NOT_MODIFIED(304, "Not Modified"),
    /** @deprecated */
    @Deprecated
    USE_PROXY(305, "Use Proxy"),
    TEMPORARY_REDIRECT(307, "Temporary Redirect"),
    PERMANENT_REDIRECT(308, "Permanent Redirect"),
    BAD_REQUEST(400, "Bad Request"),
    UNAUTHORIZED(401, "Unauthorized"),
    PAYMENT_REQUIRED(402, "Payment Required"),
    FORBIDDEN(403, "Forbidden"),
    NOT_FOUND(404, "Not Found"),
    METHOD_NOT_ALLOWED(405, "Method Not Allowed"),
    NOT_ACCEPTABLE(406, "Not Acceptable"),
    PROXY_AUTHENTICATION_REQUIRED(407, "Proxy Authentication Required"),
    REQUEST_TIMEOUT(408, "Request Timeout"),
    CONFLICT(409, "Conflict"),
    GONE(410, "Gone"),
    LENGTH_REQUIRED(411, "Length Required"),
    PRECONDITION_FAILED(412, "Precondition Failed"),
    PAYLOAD_TOO_LARGE(413, "Payload Too Large"),
    /** @deprecated */
    @Deprecated
    REQUEST_ENTITY_TOO_LARGE(413, "Request Entity Too Large"),
    URI_TOO_LONG(414, "URI Too Long"),
    /** @deprecated */
    @Deprecated
    REQUEST_URI_TOO_LONG(414, "Request-URI Too Long"),
    UNSUPPORTED_MEDIA_TYPE(415, "Unsupported Media Type"),
    REQUESTED_RANGE_NOT_SATISFIABLE(416, "Requested range not satisfiable"),
    EXPECTATION_FAILED(417, "Expectation Failed"),
    I_AM_A_TEAPOT(418, "I'm a teapot"),
    /** @deprecated */
    @Deprecated
    INSUFFICIENT_SPACE_ON_RESOURCE(419, "Insufficient Space On Resource"),
    /** @deprecated */
    @Deprecated
    METHOD_FAILURE(420, "Method Failure"),
    /** @deprecated */
    @Deprecated
    DESTINATION_LOCKED(421, "Destination Locked"),
    UNPROCESSABLE_ENTITY(422, "Unprocessable Entity"),
    LOCKED(423, "Locked"),
    FAILED_DEPENDENCY(424, "Failed Dependency"),
    UPGRADE_REQUIRED(426, "Upgrade Required"),
    PRECONDITION_REQUIRED(428, "Precondition Required"),
    TOO_MANY_REQUESTS(429, "Too Many Requests"),
    REQUEST_HEADER_FIELDS_TOO_LARGE(431, "Request Header Fields Too Large"),
    UNAVAILABLE_FOR_LEGAL_REASONS(451, "Unavailable For Legal Reasons"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    NOT_IMPLEMENTED(501, "Not Implemented"),
    BAD_GATEWAY(502, "Bad Gateway"),
    SERVICE_UNAVAILABLE(503, "Service Unavailable"),
    GATEWAY_TIMEOUT(504, "Gateway Timeout"),
    HTTP_VERSION_NOT_SUPPORTED(505, "HTTP Version not supported"),
    VARIANT_ALSO_NEGOTIATES(506, "Variant Also Negotiates"),
    INSUFFICIENT_STORAGE(507, "Insufficient Storage"),
    LOOP_DETECTED(508, "Loop Detected"),
    BANDWIDTH_LIMIT_EXCEEDED(509, "Bandwidth Limit Exceeded"),
    NOT_EXTENDED(510, "Not Extended"),
    NETWORK_AUTHENTICATION_REQUIRED(511, "Network Authentication Required");
    ...

}
```
编写完自定义异常处理逻辑后，我们将UserController中的方法抛出的异常改为UserNotExistException：

```java
 @GetMapping("/{id:\\d+}")
public void get(@PathVariable String id) {
    throw new UserNotExistException(id);
}
```
重启项目，使用Restlet Client再次访问http://localhost:8080/user/1，响应如下：

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4ngy1gc1xzhv3jtj30qv0a7q3f.jpg">
</div>