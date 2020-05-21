---
title: "Swagger2接口文档引擎"
---

# Swagger2接口文档引擎

### Maven
增加 Swagger2 所需依赖，pom.xml 配置如下：

```xml
<!-- Swagger2 Begin -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
<!-- Swagger2 End -->
```

#### 配置 Swagger2

```java
package com.tiny.mall.admin.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

/**
 * @ClassName Swagger2Config
 * RequestHandlerSelectors.basePackage("com.tiny.mall.admin.controller") 为 Controller 包路径，不然生成的文档扫描不到接口
 * @Description TODO
 * @Author Tiny
 * @Date 2019/6/1 15:14
 * @Version 1.0
 **/
@Configuration
public class Swagger2Config {

    @Bean
    public Docket  createRestApi(){
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.tiny.mall.admin.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                .title("mall API 文档")
                .description("iToken API 网关接口，http://www.xx.com")
                .termsOfServiceUrl("http://www.xx.com")
                .version("1.0.0")
                .build();
    }
}
```

### 使用 Swagger2
1. 在启动类上增加`@EnableSwagger2`注解
2. 在 Controller 中增加 Swagger2 相关注解，代码如下：

```java
package com.tiny.mall.admin.controller;

import com.tiny.mall.admin.commons.BaseResult;
import com.tiny.mall.admin.dto.TbSysUser;
import com.tiny.mall.admin.service.TbSysUserService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Date;
import java.util.UUID;

@Valid
@Controller
public class TbUserController {

    @Autowired
    private TbSysUserService tbSysUserService;

    /**
     * model属性的名称没有指定，它由返回类型隐含表示，如这个方法返回TbSysUser类型，那么这个model属性的名称是tbSysUser
     *
     * @param loginCode
     * @return
     */
    @ModelAttribute
    public TbSysUser getTbSysUser(String loginCode, RedirectAttributes redirectAttributes) {
        TbSysUser tbSysUser = null;
        //loginCode不为空
        if (StringUtils.isNotBlank(loginCode)) {
            tbSysUser = tbSysUserService.getByLoginCode(loginCode);

        } else {
            tbSysUser = new TbSysUser();
        }
        redirectAttributes.addFlashAttribute("tbSysUser", tbSysUser);
        return tbSysUser;
    }


    @ApiOperation(value = "跳转主页")
    @RequestMapping(value = {"", "index"}, method = RequestMethod.GET)
    public String index() {
        return "index";
    }


    @ApiOperation(value = "登录页面")
    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login() {
        return "login";

    }

    @ApiOperation(value = "登录页面")
    @ApiImplicitParams(
            {@ApiImplicitParam(name = "loginCode", value = "登录账号", required = true, dataType = "String"),
             @ApiImplicitParam(name = "plantPassword", value = "密码", required = true, dataType = "String")
            })
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String login(String loginCode, String plantPassword, Model model, HttpServletRequest httpServletRequest) {
        //账号和密码不为空
        if (StringUtils.isNotBlank(loginCode) && StringUtils.isNotBlank(plantPassword)) {
            TbSysUser tbSysUser = tbSysUserService.getByLoginCode(loginCode);

            //账号存在
            if (tbSysUser != null) {
                String password = tbSysUser.getPassword();

                //密码正确，登录成功
                if (password.equals(plantPassword)) {
                    //记录登录信息
                    httpServletRequest.getSession().setAttribute("tbSysUser", tbSysUser);
                    return "redirect:/index";
                }

                //密码不正确
                else {
                    model.addAttribute("message", "密码错误");
                }
            }

            //账号不存在
            else {
                model.addAttribute("message", "账号不存在");
            }
        }


        //未填写
        else {
            model.addAttribute("message", "请输入账号或者密码");
        }

        return "login";
    }

    @ApiOperation(value = "注册方法")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(HttpServletRequest request, Model model, RedirectAttributes redirectAttributes) {
        TbSysUser tbSysUser = new TbSysUser();
        //获取参数
        String eamil = request.getParameter("email");
        String sex = request.getParameter("sex");
        String phone = request.getParameter("phone");
        String loginCode = request.getParameter("loginCode");
        String password = request.getParameter("password");

        tbSysUser.setUserCode(UUID.randomUUID().toString());
        tbSysUser.setLoginCode(loginCode);
        tbSysUser.setUserName("Tiny");
        tbSysUser.setPassword(password);
        tbSysUser.setUserType("admin2");
        tbSysUser.setMgrType("1");
        tbSysUser.setStatus("2");
        tbSysUser.setCreateBy("Tiny2");
        tbSysUser.setCreateDate(new Date());
        tbSysUser.setUpdateBy("Tiny2");
        tbSysUser.setUpdateDate(new Date());
        tbSysUser.setCorpCode("0");
        tbSysUser.setCorpName("CJLU2");
        tbSysUser.setEmail(eamil);
        tbSysUser.setPhone(phone);
        tbSysUser.setSex(sex);

        BaseResult baseResult = tbSysUserService.save(tbSysUser);

//            验证不通过
        if (baseResult.getStatus() == 500) {
            model.addAttribute("baseResult", baseResult);
            return "login";
        }

        redirectAttributes.addFlashAttribute("baseResult", baseResult);
        return "redirect:/index";

    }
    @ApiOperation(value = "注销方法")
    @RequestMapping(value = "logout", method = RequestMethod.GET)
    public String logout(HttpServletRequest request) {
        TbSysUser tbSysUser = (TbSysUser) request.getSession().getAttribute("tbSysUser");
        if (tbSysUser != null) {
            request.getSession().invalidate();
        }
        return login();
    }

}

```

### Swagger 注解说明


Swagger 通过注解表明该接口会生成文档，包括接口名、请求方法、参数、返回信息的等等。

::: tip
- @Api：修饰整个类，描述 Controller 的作用
- @ApiOperation：描述一个类的一个方法，或者说一个接口
- @ApiParam：单个参数描述
- @ApiModel：用对象来接收参数
- @ApiProperty：用对象接收参数时，描述对象的一个字段
- @ApiResponse：HTTP 响应其中 1 个描述
- @ApiResponses：HTTP 响应整体描述
- @ApiIgnore：使用该注解忽略这个API
- @ApiError：发生错误返回的信息
- @ApiImplicitParam：一个请求参数
- @ApiImplicitParams：多个请求参数
:::

### 访问 Swagger2

访问地址：`http://localhost:8080/swagger-ui.html`

<div align="center">
<img src="http://ww1.sinaimg.cn/large/af2b2d1bly1g3lpqgbn0gj214l0krmxu.jpg">
</div>
