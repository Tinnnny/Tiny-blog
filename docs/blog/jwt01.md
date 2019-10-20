---
layout: post 
title: "JWT" 
subtitle: '' 
author: "Tiny"
header-style: text 
tags:
-   JWT
---

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4j9ieyw3nj30a7064dfo.jpg)

# Introduction to JSON Web Tokens
## What is JSON Web Token?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely 
transmitting information between parties as a JSON object. This information can be verified and trusted because 
it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair 
using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed 
tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from 
other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the 
party holding the private key is the one that signed it.

## When should you use JSON Web Tokens?
Here are some scenarios where JSON Web Tokens are useful:
 - **Authorization**: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request 
 will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. 
 Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily 
 used across different domains.
 - **Information Exchange**: JSON Web Tokens are a good way of securely transmitting information between parties. Because 
 JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. 
 Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't 
 been tampered with.
 
## What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
  - Header
  - Payload
  - Signature
Therefore, a JWT typically looks like the following.

```
xxxxx.yyyyy.zzzzz
```

Let's break down the different parts.

### Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

For example:

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Then, this JSON is Base64Url encoded to form the first part of the JWT.

### Payload
The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. 
There are three types of claims: registered, public, and private claims.

  - **Registered claims**: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. 
  Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.
  
  >  Notice that the claim names are only three characters long as JWT is meant to be compact.

  - **Public claims**: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or 
  be defined as a URI that contains a collision resistant namespace.
  - **Private claims**: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

An example payload could be:

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

The payload is then Base64Url encoded to form the second part of the JSON Web Token.

> Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the 
sender of the JWT is who it says it is.

### Putting all together
The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to 
XML-based standards such as SAML.

The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sf6nvlrlj317e0a0wga.jpg)

If you want to play with JWT and put these concepts into practice, you can use jwt.io Debugger to decode, verify, and generate JWTs.

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sf7cvezhj30qn0tz42g.jpg)

### How do JSON Web Tokens work?
In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care
 must be taken to prevent security issues. In general, you should not keep tokens longer than required.

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer 
schema. The content of the header should look like the following:

```
Authorization: Bearer <token>
```

This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, 
and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for 
certain operations may be reduced, though this may not always be the case.

If the token is sent in the Authorization header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

The following diagram shows how a JWT is obtained and used to access APIs or resources:

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sfb1v3nsj315o0fvdg8.jpg)

 1. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. 
For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.
When the authorization is granted, the authorization server returns an access token to the application.
The application uses the access token to access a protected resource (like an API).

 2. Do note that with signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. 
 3. This means you should not put secret information within the token.

### Why should we use JSON Web Tokens?
Let's talk about the benefits of **JSON Web Tokens (JWT)** when compared to **Simple Web Tokens (SWT)** and **Security Assertion Markup Language Tokens (SAML)**.

As JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML. This makes JWT a good choice to be passed 
in HTML and HTTP environments.

Security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm. However, JWT and SAML tokens can use a public/private key pair 
in the form of a X.509 certificate for signing. Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared
 to the simplicity of signing JSON.

JSON parsers are common in most programming languages because they map directly to objects. Conversely, XML doesn't have a natural document-to-object mapping. 
This makes it easier to work with JWT than SAML assertions.

Regarding usage, JWT is used at Internet scale. This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile.

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sfv46fv4j31731u344o.jpg)

*Comparison of the length of an encoded JWT and an encoded SAML*


---

# JWT介绍
## 什么是JWT
JWT是一种开源标准(RFC 7519号文件)，它定义了一种紧凑而又自包含的方式，使各方之间进行JSON对象的安全数据传输。这种信息可以被区分以及信任
因为他是数字签名过的。JWTs可以使用secret(使用HMAC算法)或使用RSA或ECDSA的公钥/私钥对进行签名。

虽然JWTs也可以加密以在各方之间提供保密性，但我们将重点关注已签名的令牌。签名的令牌可以验证其中包含的声明的完整性，而加密的令牌则可以向其
他方隐藏这些声明。当使用公钥/私钥对对令牌进行签名时，签名还证明只有持有私钥的一方才是签名的一方。

## JWT适应的场合
下面是一些JWT很有用的场景:
 - **授权**:这是使用JWT最常见的场景。一旦用户登录，随后的每个请求都将包括JWT，允许用户访问该令牌允许的路由、服务和资源。单点登录是JWT目前广泛
 使用的一个特性，因为它的开销很小，而且可以很容易地跨不同领域使用。
 - **信息交换**:JSON Web令牌是在各方之间安全地传输信息的好方法。因为可以对jwt进行签名(例如，使用公钥/私钥对)，所以可以确保发送者就是他们所说
 的发送者。此外，由于签名是使用header和payload计算的，您还可以验证内容没有被篡改。

## JSON Web Token的结构
在其紧凑的形式中，JSON Web令牌由三个由点(.)分隔的部分组成，它们是:
  - Header
  - Payload
  - Signature
因此，JWT通常如下所示。
```
xxxxx.yyyyy.zzzzz
```
我们把不同的部分分开。
### header
header通常由两部分组成：token的类型，也就是JWT，和签名作用的算法，例如HMAC SHA256 或 RSA。
举例：

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

这样，这个JSON编码为Base64Url，以形成JWT的第一部分。

### payload
token的第二部分为payload，他包含了声明。声明是关于实体(通常是用户)和其他数据的语句。声明有三种类型:注册声明、公开声明和私有声明。
  - **注册声明**: 这是一组预定义的非强制性声明，以提供一组有用的、可互操作的声明。其中包括:iss(发行者)、exp(到期时间)、sub(主题)、aud(观众)和其他。
  
  > 注意，声明名称只有三个字符长，JWT的目的是紧凑。
  
  - **公有声明**:这些可以由使用JWTs的人随意定义。但是为了避免冲突，应该在IANA JSON Web令牌注册表中定义它们，或者将它们定义为包含抗冲突命名空间的URI。
  - **私有声明**:这些定制声明是为了在同意使用它们的各方之间共享信息而创建的，既不是注册声明，也不是公有声明。
  
通常一个payload的形式为：

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

然后对payload进行Base64Url编码，以形成JSON Web令牌的第二部分。

> 请注意，对于已签名的令牌，此信息虽然受保护不受篡改，但任何人都可以读取。除非加密，否则不要将机密信息放入JWT的header或payload中。

### 合起来
输出是三个由点分隔的base64 url字符串，这些点可以在HTML和HTTP环境中轻松传递，并且与基于xml的标准(如SAML)相比更紧凑。
下面显示了JWT，它编码了前面的header和payload，并使用一个serect签名。

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sf6nvlrlj317e0a0wga.jpg)

如果您想使用JWT并将这些概念付诸实践，您可以使用JWT。用于解码、验证和生成JWTs的io调试器。

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sf7cvezhj30qn0tz42g.jpg)

### JWT是怎么样工作的？
在身份验证中，当用户使用其凭证成功登录时，将返回一个JSON Web令牌。由于令牌是凭证，因此必须非常小心地防止安全问题。一般来说，您不应该保留令牌超过要求的时间。

当用户希望访问受保护的路由或资源时，用户代理应该发送JWT，通常在授权头中使用承载模式。标题的内容应该如下:

```
Authorization: Bearer <token>
```

在某些情况下，这可能是一种无状态授权机制。服务器的受保护路由将在授权头中检查有效的JWT，如果它存在，则允许用户访问受保护的资源。如果JWT包含必要的数据，
就可以减少对数据库查询某些操作的需求，尽管情况并非总是如此。

如果令牌是在授权头中发送的，那么跨源资源共享(Cross-Origin Resource Sharing, CORS)就不是问题，因为它不使用cookie。

下图显示了JWT是如何获得并用于访问api或资源的:

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sfb1v3nsj315o0fvdg8.jpg)

 1. 应用程序或客户机向授权服务器请求授权。这是通过不同的授权流之一执行的。例如，一个典型的符合OpenID Connect的web应用程序将使用授权代码流通过/oauth/authorize端点。
 2. 当授权被授予时，授权服务器将向应用程序返回一个访问令牌。
 3. 应用程序使用访问令牌访问受保护的资源(如API)。
 
请注意，对于已签名的令牌，令牌中包含的所有信息都公开给用户或其他方，即使他们无法更改这些信息。这意味着您不应该将机密信息放在令牌中。

### 为什么使用JWT
让我们讨论一下与简单Web令牌(SWT)和安全断言标记语言令牌(SAML)相比，JSON Web令牌(JWT)的好处。

由于JSON比XML更简洁，当它被编码时，它的大小也更小，这使得JWT比SAML更紧凑。这使得JWT成为在HTML和HTTP环境中传递消息的一个很好的选择。

在安全方面，SWT只能由使用HMAC算法的共享secret对称签名。但是，JWT和SAML令牌可以使用X.509证书形式的公钥/私钥对进行签名。与JSON签名的简单性相比，使用XML数字签名签名而不引入模糊的安全漏洞是非常困难的。

JSON解析器在大多数编程语言中都很常见，因为它们直接映射到对象。相反，XML没有一个自然的文档到对象的映射。这使得使用JWT比使用SAML断言更容易。

在使用方面，JWT采用的是互联网规模。这突出了JSON Web令牌在多个平台(尤其是移动平台)上的客户端处理的易用性。

![](http://ww1.sinaimg.cn/large/007Rnr4nly1g4sfv46fv4j31731u344o.jpg)

*已编码JWT和已编码SAML长度的比较*


