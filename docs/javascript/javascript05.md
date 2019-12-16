# DOM和事件监听机制
## DOM
DOM(Document Object Model)文档对象模型将标记语言文档的各个组成部分，封装为对象。可以使用这些对象，对标记语言文档进行CRUD的动态操作
	
::: tip W3C DOM 标准被分为 3 个不同的部分：
* 核心 DOM - 针对任何结构化文档的标准模型
    * Document：文档对象
    * Element：元素对象
    * Attribute：属性对象
    * Text：文本对象
    * Comment:注释对象
    * Node：节点对象，其他5个的父对象
* XML DOM - 针对 XML 文档的标准模型
* HTML DOM - 针对 HTML 文档的标准模型
:::

### 核心DOM模型
#### Document：文档对象
创建(获取)：在html dom模型中可以使用window对象来获取
```css
window.document
或
document
```
::: tip 方法
- 获取Element对象：
  1. getElementById()	： 根据id属性值获取元素对象。id属性值一般唯一
  2. getElementsByTagName()：根据元素名称获取元素对象们。返回值是一个数组
  3. getElementsByClassName():根据Class属性值获取元素对象们。返回值是一个数组
  4. getElementsByName(): 根据name属性值获取元素对象们。返回值是一个数组
- 创建其他DOM对象：
  1. createAttribute(name)
  2. createComment()
  3. createElement()
  4. createTextNode()
:::
#### Element：元素对象
1. removeAttribute()：删除属性
2. setAttribute()：设置属性
#### Node：节点对象，其他5个的父对象
* 特点：所有dom对象都可以被认为是一个节点
* 方法：
    * CRUD dom树：
        * appendChild()：向节点的子节点列表的结尾添加新的子节点。
        * removeChild()	：删除（并返回）当前节点的指定子节点。
        * replaceChild()：用新节点替换一个子节点。
* 属性：
    * parentNode 返回节点的父节点。


### HTML DOM
::: tip 作用
1. 标签体的设置和获取：innerHTML
2. 使用html元素对象的属性
3. 控制元素样式
:::
1. 使用元素的style属性来设置
```js
    //修改样式方式1
div1.style.border = "1px solid red";
div1.style.width = "200px";
//font-size--> fontSize
div1.style.fontSize = "20px";
```
2. 提前定义好类选择器的样式，通过元素的className属性来设置其class属性值。


## 事件监听机制
概念：某些组件被执行了某些操作后，触发某些代码的执行。	

* 事件：某些操作。如： 单击，双击，键盘按下了，鼠标移动了
* 事件源：组件。如： 按钮 文本输入框...
* 监听器：代码。
* 注册监听：将事件，事件源，监听器结合在一起。 当事件源上发生了某个事件，则触发执行某个监听器代码。


### 常见的事件
#### 点击事件
1. onclick：单击事件
2. ondblclick：双击事件
#### 焦点事件
1. onblur：失去焦点
2. onfocus:元素获得焦点。

#### 加载事件
1. onload：一张页面或一幅图像完成加载。

#### 鼠标事件
1. onmousedown	鼠标按钮被按下。
2. onmouseup	鼠标按键被松开。
3. onmousemove	鼠标被移动。
4. onmouseover	鼠标移到某元素之上。
5. onmouseout	鼠标从某元素移开。
​			
#### 键盘事件
1. onkeydown	某个键盘按键被按下。	
2. onkeyup		某个键盘按键被松开。
3. onkeypress	某个键盘按键被按下并松开。

#### 选择和改变
1. onchange	域的内容被改变。
2. onselect	文本被选中。

#### 表单事件
1. onsubmit	确认按钮被点击。
2. onreset	重置按钮被点击。