# 响应式布局、样式和插件
## 响应式布局
响应式布局的含义是同一套页面可以兼容不同分辨率的设备。Bootstrap栅格系统将一行平均分成12个格子，可以指定元素占几个格子。

步骤：
1. 定义容器。相当于之前的table、
    * 容器分类：
        1. container：两边留白
        2. container-fluid：每一种设备都是100%宽度
2. 定义行。相当于之前的tr   样式：row
3. 定义元素。指定该元素在不同的设备上，所占的格子数目。样式：col-设备代号-格子数目
    * 设备代号：
        1. xs：超小屏幕 手机 (<768px)：col-xs-12
        2. sm：小屏幕 平板 (≥768px)
        3. md：中等屏幕 桌面显示器 (≥992px)
        4. lg：大屏幕 大桌面显示器 (≥1200px)

::: tip 注意
1. 一行中如果格子数目超过12，则超出部分自动换行。
2. 栅格类属性可以向上兼容。栅格类适用于与屏幕宽度大于或等于分界点大小的设备。
3. 如果真实设备宽度小于了设置栅格类属性的设备代码的最小值，会一个元素沾满一整行。
:::

::: warning 解决栅格系统失效
1. 三个Meta不能少
2. Css的rel="stylesheet" 不能少
:::

## CSS样式和JS插件
### 全局CSS样式
* 按钮：`class="btn btn-default"`
* 图片：
    *  class="img-responsive"：图片在任意尺寸都占100%
    *  图片形状
        *  `<img src="..." alt="..." class="img-rounded">`：方形
        *  `<img src="..." alt="..." class="img-circle">` ： 圆形
        *  `<img src="..." alt="..." class="img-thumbnail">` ：相框
* 表格
    * table
    * table-bordered
    * table-hover
* 表单
    * 给表单项添加：class="form-control" 
### 组件
    * 导航条
    * 分页条
### 插件
轮播图

