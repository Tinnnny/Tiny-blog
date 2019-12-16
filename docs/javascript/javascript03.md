# DOM、事件 简单学习
## DOM简单学习：为了满足案例要求
DOM功能：控制html文档的内容，获取页面标签(元素)对象：Element
```js
document.getElementById("id值"):通过元素的id获取元素对象
```	
操作Element对象：
1. 修改属性值：
2. 修改标签体内容：
  1. 获取元素对象
  2. 使用innerHTML属性修改标签体内容

## 事件简单学习
某些组件被执行了某些操作后，触发某些代码的执行就叫做事件。

如何绑定事件
1. 直接在html标签上，指定事件的onclick属性(操作)，属性值就是js代码
2. 通过js获取元素对象，指定事件属性，设置一个函数
```html
<body>
    <img id="light" src="img/off.gif"  onclick="fun();">
    <img id="light2" src="img/off.gif">
    
    <script>
        function fun(){
            alert('我被点了');
            alert('我又被点了');
        }
    
        function fun2(){
            alert('咋老点我？');
        }
    
        //1.获取light2对象
        var light2 = document.getElementById("light2");
        //2.绑定事件
        light2.onclick = fun2;				
    </script>
</body>
```	
### 电灯开关
1.获取图片对象
2.绑定单击事件
3.每次点击切换图片
    * 规则：
        * 如果灯是开的 on,切换图片为 off
        * 如果灯是关的 off,切换图片为 on
    * 使用标记flag来完成

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>电灯开关</title>

</head>
<body>

<img id="light" src="img/off.gif">

<script>
    //1.获取图片对象
    var light = document.getElementById("light");

    var flag = false;//代表灯是灭的。 off图片

    //2.绑定单击事件
    light.onclick = function(){
        if(flag){//判断如果灯是开的，则灭掉
            light.src = "img/off.gif";
            flag = false;

        }else{
            //如果灯是灭的，则打开

            light.src = "img/on.gif";
            flag = true;
        }		
    }
    
</script>
</body>
</html>
```





