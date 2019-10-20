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