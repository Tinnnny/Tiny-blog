# Jquery DOM操作
## 内容操作
1. html(): 获取/设置元素的标签体内容  
```html
<a><font>内容</font></a>  --> <font>内容</font>
```
2. text(): 获取/设置元素的标签体纯文本内容  
```html
<a><font>内容</font></a> --> 内容
```
3. val()： 获取/设置元素的value属性值
## 属性操作
### 通用属性操作
1. attr(): 获取/设置元素的属性
2. removeAttr():删除属性
3. prop():获取/设置元素的属性
4. removeProp():删除属性

::: tip attr和prop区别？
1. 如果操作的是元素的固有属性，则建议使用prop
2. 如果操作的是元素自定义的属性，则建议使用attr
:::

### 对class属性操作
1. addClass():添加class属性值
2. removeClass():删除class属性值
3. toggleClass():切换class属性
```js
//判断如果元素对象上存在class="one"，则将属性值one删除掉。  如果元素对象上不存在class="one"，则添加
toggleClass("one"): 
```
4. css():

## CRUD操作
1. append():父元素将子元素追加到末尾
    * 对象1.append(对象2): 将对象2添加到对象1元素内部，并且在末尾
2. prepend():父元素将子元素追加到开头
    * 对象1.prepend(对象2):将对象2添加到对象1元素内部，并且在开头
3. appendTo():
    * 对象1.appendTo(对象2):将对象1添加到对象2内部，并且在末尾
4. prependTo()：
    * 对象1.prependTo(对象2):将对象1添加到对象2内部，并且在开头


5. after():添加元素到元素后边
    * 对象1.after(对象2)： 将对象2添加到对象1后边。对象1和对象2是兄弟关系
6. before():添加元素到元素前边
    * 对象1.before(对象2)： 将对象2添加到对象1前边。对象1和对象2是兄弟关系
7. insertAfter()
    * 对象1.insertAfter(对象2)：将对象2添加到对象1后边。对象1和对象2是兄弟关系
8. insertBefore()
    * 对象1.insertBefore(对象2)： 将对象2添加到对象1前边。对象1和对象2是兄弟关系

9. remove():移除元素
    * 对象.remove():将对象删除掉
10. empty():清空元素的所有后代元素。
    * 对象.empty():将对象的后代元素全部清空，但是保留当前对象以及其属性节点

