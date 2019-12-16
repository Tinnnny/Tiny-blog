# BOM
BOM(Browser Object Model)浏览器对象模型:将浏览器的各个组成部分封装成对象。
	
::: tip 组成：
* Window：窗口对象
* Navigator：浏览器对象
* Screen：显示器屏幕对象
* History：历史记录对象
* Location：地址栏对象
:::	

## Window：窗口对象
Window对象不需要创建可以直接使用 window使用。
```js
window.方法名();
//window引用可以省略。  
方法名();
```
### 方法
1. 与弹出框有关的方法：
- `alert()`：显示带有一段消息和一个确认按钮的警告框。
- `confirm()`：显示带有一段消息以及确认按钮和取消按钮的对话框。
  * 如果用户点击确定按钮，则方法返回true
  * 如果用户点击取消按钮，则方法返回false
- `prompt()`:显示可提示用户输入的对话框。
  * 返回值：获取用户输入的值

2. 与打开关闭有关的方法：
- `close()`:关闭浏览器窗口。
  * 谁调用我 ，我关谁
- `open()`:打开一个新的浏览器窗口
  * 返回新的Window对象

3. 与定时器有关的方式
- `setTimeout()`:在指定的毫秒数后调用函数或计算表达式。
  * 参数：
    1. js代码或者方法对象
    2. 毫秒值
  * 返回值：唯一标识，用于取消定时器
- `clearTimeout()`:取消由 setTimeout() 方法设置的 timeout。

- `setInterval()`:按照指定的周期（以毫秒计）来调用函数或计算表达式。
- `clearInterval()`:取消由 setInterval() 设置的 timeout。

## Location：地址栏对象
创建(获取)
```js
window.location
或
location
```
* reload()	重新加载当前文档。刷新
* href	设置或返回完整的 URL。


## History：历史记录对象
创建(获取)
```js
window.history
或
history
```
方法：
* back()	加载 history 列表中的前一个 URL。
* forward()	加载 history 列表中的下一个 URL。
* go(参数)	加载 history 列表中的某个具体页面。
  * 参数：
    * 正数：前进几个历史记录
    * 负数：后退几个历史记录


* length	返回当前窗口历史列表中的 URL 数量。
