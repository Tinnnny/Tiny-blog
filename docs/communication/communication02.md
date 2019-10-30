---
title: "RESTful风格api"
date: 2019年10月30日10:44:20
---
# RESTful风格api
## 概述
2000 年，Roy Thomas Fielding 博士在他那篇著名的博士论文《Architectural Styles and the Design of Network-based Software Architectures》中提出了几种软件应用的架构风格，REST 作为其中的一种架构风格在这篇论文的第5章中进行了概括性的介绍。REST 是一种很笼统的概念，它代表一种架构风格。
## 版本号
在 RESTful API 中，API 接口应该尽量兼容之前的版本。但是，在实际业务开发场景中，可能随着业务需求的不断迭代，现有的 API 接口无法支持旧版本的适配，此时如果强制升级服务端的 API 接口将导致客户端旧有功能出现故障。实际上，Web 端是部署在服务器，因此它可以很容易为了适配服务端的新的 API 接口进行版本升级，然而像 Android 端、IOS 端、PC 端等其他客户端是运行在用户的机器上，因此当前产品很难做到适配新的服务端的 API 接口，从而出现功能故障，这种情况下，用户必须升级产品到最新的版本才能正常使用。

为了解决这个版本不兼容问题，在设计 RESTful API 的一种实用的做法是使用版本号。一般情况下，我们会在 url 中保留版本号，并同时兼容多个版本。

```java
【GET】  /v1/users/{user_id}  // 版本 v1 的查询用户列表的 API 接口
【GET】  /v2/users/{user_id}  // 版本 v2 的查询用户列表的 API 接口
```
现在，我们可以不改变版本 v1 的查询用户列表的 API 接口的情况下，新增版本 v2 的查询用户列表的 API 接口以满足新的业务需求，此时，客户端的产品的新功能将请求新的服务端的 API 接口地址。虽然服务端会同时兼容多个版本，但是同时维护太多版本对于服务端而言是个不小的负担，因为服务端要维护多套代码。这种情况下，常见的做法不是维护所有的兼容版本，而是只维护最新的几个兼容版本，例如维护最新的三个兼容版本。在一段时间后，当绝大多数用户升级到较新的版本后，废弃一些使用量较少的服务端的老版本API 接口版本，并要求使用产品的非常旧的版本的用户强制升级。

注意的是，“不改变版本 v1 的查询用户列表的 API 接口”主要指的是对于客户端的调用者而言它看起来是没有改变。而实际上，如果业务变化太大，服务端的开发人员需要对旧版本的 API 接口使用适配器模式将请求适配到新的API 接口上。

## 资源路径
RESTful API 的设计以资源为核心，每一个 URI 代表一种资源。因此，URI 不能包含动词，只能是名词。注意的是，形容词也是可以使用的，但是尽量少用。一般来说，不论资源是单个还是多个，API 的名词要以复数进行命名。此外，命名名词的时候，要使用小写、数字及下划线来区分多个单词。这样的设计是为了与 json 对象及属性的命名方案保持一致。例如，一个查询系统标签的接口可以进行如下设计。
```
【GET】  /v1/tags/{tag_id} 
```
同时，资源的路径应该从根到子依次如下
```
/{resources}/{resource_id}/{sub_resources}/{sub_resource_id}/{sub_resource_property}
```
我们来看一个“添加用户的角色”的设计，其中“用户”是主资源，“角色”是子资源。
```
【POST】  /v1/users/{user_id}/roles/{role_id} // 添加用户的角色
```
有的时候，当一个资源变化难以使用标准的 RESTful API 来命名，可以考虑使用一些特殊的 actions 命名。
```
/{resources}/{resource_id}/actions/{action}
```
举个例子，“密码修改”这个接口的命名很难完全使用名词来构建路径，此时可以引入 action 命名。
```
【PUT】  /v1/users/{user_id}/password/actions/modify // 密码修改
```

## 请求方式
可以通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。其中：
- GET：用于查询资源
- POST：用于创建资源
- PUT：用于更新服务端的资源的全部信息
- PATCH：用于更新服务端的资源的部分信息
- DELETE：用于删除服务端的资源。
这里，使用“用户”的案例进行回顾通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。
```
【GET】          /users                # 查询用户信息列表
【GET】          /users/1001           # 查看某个用户信息
【POST】         /users                # 新建用户信息
【PUT】          /users/1001           # 更新用户信息(全部字段)
【PATCH】        /users/1001           # 更新用户信息(部分字段)
【DELETE】       /users/1001           # 删除用户信息
```

## 查询参数
RESTful API 接口应该提供参数，过滤返回结果。其中，offset 指定返回记录的开始位置。一般情况下，它会结合 limit 来做分页的查询，这里 limit 指定返回记录的数量。
```
【GET】  /{version}/{resources}/{resource_id}?offset=0&limit=20
```
同时，orderby 可以用来排序，但仅支持单个字符的排序，如果存在多个字段排序，需要业务中扩展其他参数进行支持。
```
【GET】  /{version}/{resources}/{resource_id}?orderby={field} [asc|desc]
```
为了更好地选择是否支持查询总数，我们可以使用 count 字段，count 表示返回数据是否包含总条数，它的默认值为 false。
```
【GET】  /{version}/{resources}/{resource_id}?count=[true|false]
```
上面介绍的 offset、 limit、 orderby 是一些公共参数。此外，业务场景中还存在许多个性化的参数。我们来看一个例子。
```
【GET】  /v1/categorys/{category_id}/apps/{app_id}?enable=[1|0]&os_type={field}&device_ids={field,field,…}
```
注意的是，不要过度设计，只返回用户需要的查询参数。此外，需要考虑是否对查询参数创建数据库索引以提高查询性能。

## 状态码
使用适合的状态码很重要，而不应该全部都返回状态码 200，或者随便乱使用。这里，列举在实际开发过程中常用的一些状态码，以供参考。
| 状态码 | 描述      |
|-----|---------|
| 200 | 请求成功    |
| 201 | 创建成功    |
| 400 | 错误的请求   |
| 401 | 未验证     |
| 403 | 被拒绝     |
| 404 | 无法找到    |
| 409 | 资源冲突    |
| 500 | 服务器内部错误 |

## 异常响应
当 RESTful API 接口出现非 2xx 的 HTTP 错误码响应时，采用全局的异常结构响应信息。
```
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "code": "INVALID_ARGUMENT",
    "message": "{error message}",
    "cause": "{cause message}",
    "request_id": "01234567-89ab-cdef-0123-456789abcdef",
    "host_id": "{server identity}",
    "server_time": "2014-01-01T12:00:00Z"
}
```

## 请求参数
在设计服务端的 RESTful API 的时候，我们还需要对请求参数进行限制说明。例如一个支持批量查询的接口，我们要考虑最大支持查询的数量。
```
【GET】     /v1/users/batch?user_ids=1001,1002      // 批量查询用户信息
参数说明
- user_ids: 用户ID串，最多允许 20 个。
```
此外，在设计新增或修改接口时，我们还需要在文档中明确告诉调用者哪些参数是必填项，哪些是选填项，以及它们的边界值的限制。
```
【POST】     /v1/users                             // 创建用户信息
请求内容
{
    "username": "lusifer",                 // 必填, 用户名称, max 10
    "realname": "鲁斯菲尔",               // 必填, 用户名称, max 10
    "password": "123456",              // 必填, 用户密码, max 32
    "email": "topsale@vip.qq.com",     // 选填, 电子邮箱, max 32
    "weixin": "Lusifer",            // 选填，微信账号, max 32
    "sex": 1                           // 必填, 用户性别[1-男 2-女 99-未知]
}
```
## 响应参数
针对不同操作，服务端向用户返回的结果应该符合以下规范。
```
【GET】     /{version}/{resources}/{resource_id}      // 返回单个资源对象
【GET】     /{version}/{resources}                    // 返回资源对象的列表
【POST】    /{version}/{resources}                    // 返回新生成的资源对象
【PUT】     /{version}/{resources}/{resource_id}      // 返回完整的资源对象
【PATCH】   /{version}/{resources}/{resource_id}      // 返回完整的资源对象
【DELETE】  /{version}/{resources}/{resource_id}      // 状态码 200，返回完整的资源对象。
                                                      // 状态码 204，返回一个空文档
```
如果是单条数据，则返回一个对象的 JSON 字符串。
```
HTTP/1.1 200 OK
{
    "id" : "01234567-89ab-cdef-0123-456789abcdef",
    "name" : "example",
    "created_time": 1496676420000,
    "updated_time": 1496676420000,
    ...
}
```
如果是列表数据，则返回一个封装的结构体。
```
HTTP/1.1 200 OK
{
    "count":100,
    "items":[
        {
            "id" : "01234567-89ab-cdef-0123-456789abcdef",
            "name" : "example",
            "created_time": 1496676420000,
            "updated_time": 1496676420000,
            ...
        },
        ...
    ]
}
```
## 一个完整的案例
最后，我们使用一个完整的案例将前面介绍的知识整合起来。这里，使用“获取用户列表”的案例。
```
【GET】     /v1/users?[&keyword=xxx][&enable=1][&offset=0][&limit=20] 获取用户列表
功能说明：获取用户列表
请求方式：GET
参数说明
- keyword: 模糊查找的关键字。[选填]
- enable: 启用状态[1-启用 2-禁用]。[选填]
- offset: 获取位置偏移，从 0 开始。[选填]
- limit: 每次获取返回的条数，缺省为 20 条，最大不超过 100。 [选填]
响应内容
HTTP/1.1 200 OK
{
    "count":100,
    "items":[
        {
            "id" : "01234567-89ab-cdef-0123-456789abcdef",
            "name" : "example",
            "created_time": 1496676420000,
            "updated_time": 1496676420000,
            ...
        },
        ...
    ]
}
失败响应
HTTP/1.1 403 UC/AUTH_DENIED
Content-Type: application/json
{
    "code": "INVALID_ARGUMENT",
    "message": "{error message}",
    "cause": "{cause message}",
    "request_id": "01234567-89ab-cdef-0123-456789abcdef",
    "host_id": "{server identity}",
    "server_time": "2014-01-01T12:00:00Z"
}
错误代码
- 403 UC/AUTH_DENIED    授权受限
```