---
title: "格式化时间"
date: 2019年10月27日20:07:32
---
# 概述
在不同场合对时间进行格式化有多种不同方式。
## jsp
在jsp中有专门用于格式化时间的标签fmt。
::: danger 使用fmt格式化时间：
1. 在jsp最上方加入fmt标签。
```
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
```
2. 进行使用，格式为：
```jsp
<fmt:formatDate value="${user.created}" pattern="yyyy-MM-dd HH:mm:ss"/>
```
:::