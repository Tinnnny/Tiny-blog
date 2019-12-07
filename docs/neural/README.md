# 神经网络基本原理
## 概述
人工神经元是神经网络的基本元素，其原理可以用下图表示：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9ctd3ksbfj30dw0agmyw.jpg">
</div>
图中$x_1\sim x_n$是从其他神经元传来的输入信号，**$W_{ij}$表示从神经元$j$到神经元$i$的连接权值**，$\theta$表示一个阈值 ( threshold )，或称为偏置( bias )。则神经元$i$的输出与输入的关系表示为：
$$net_{i}=\displaystyle\sum_{j=1}^{n}W_{ij}x_j-\theta$$
$$y_i=f\left( net_i \right)$$
**图中$y_i$表示神经元$i$的输出**，函数$f$称为激活函数 ( Activation Function )或转移函数 ( Transfer Function ) ，$net$称为净激活(net activation)。**若将阈值看成是神经元$i$的一个输入$x_0$的权重$W_{i0}$**，则上面的式子可以简化为：
$$net_{i}=\displaystyle\sum_{j=0}^{n}W_{ij}x_j$$
$$y_i=f\left( net_i \right)$$

若用$X$表示输入向量，用$W$表示权重向量，即：$X= [ x_0,x_1,x_2,\cdots ,x_n ]$
$$W=\begin{bmatrix} W_{i1} \\ W_{i2} \\ W_{i3} \\ \vdots \\ W_{in} \end{bmatrix} $$

则神经元的输出可以表示为**向量**相乘的形式：$net_i=XW$,则 
$$y_i=f\left( net_i \right)=f\left( XW \right)$$
若神经元的净激活$net$为正，称该神经元处于**激活状态**或**兴奋状态**(fire)，若净激活net为负，则称神经元处于**抑制状态**。图中的这种“阈值加权和”的神经元模型称为**M-P模型** ( McCulloch-Pitts Model )，也称为**神经网络的一个处理单元**( PE, Processing Element )。

## 常用激活函数 
激活函数的选择是构建神经网络过程中的重要环节，下面的是常用的激活函数：
### 线性激活函数
#### (1)线性函数(Liner Function)
$$f\left( x \right)=kx+c$$

#### (2)斜面函数(Ramp Function)
$$f(x)= \begin{cases} T ,\quad k\geqslant c \\ k*x ,\quad k<|x| \\ -T , \quad k<-c \end{cases}$$
#### (3)阈值函数(Threshold Function)
$$f(x)=\begin{cases} 1 , \quad k \geqslant c \\ 0 ,\quad k<-c \end{cases}$$

### 非线性激活函数
#### (4)S形函数(Sigmoid Function)
$$f(x)=\dfrac{1}{1+e^{-\alpha x}} \quad (0<f(x)<1)$$
该函数的导函数：
$$f'(x)=\dfrac{\alpha e^{-\alpha x}}{(1+e^{-\alpha x})^2}=\alpha f(x)[1-f(x)]$$
#### (5)双极S形函数 
$$f(x)=\dfrac{2}{1+e^{-\alpha x}}-1 \quad (-1<f(x)<1)$$
该函数的导函数：
$$f'(x)=\dfrac{2\alpha e^{-\alpha x}}{(1+e^{-\alpha x})^2}=\frac {\alpha [1-f(x)^2]}{2}$$
S形函数与双极S形函数的图像如下：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9d0fs1ibxj30jg0ej74o.jpg">
</div>
双极S形函数与S形函数主要区别在于函数的值域，双极S形函数值域是(-1,1)，而S形函数值域是(0,1)。

由于S形函数与双极S形函数都是可导的(导函数是连续函数)，因此适合用在BP神经网络中。（BP算法要求激活函数可导）

## 神经网络模型
 神经网络是由大量的神经元互联而构成的网络。根据网络中神经元的互联方式，常见网络结构主要可以分为下面３类：
 ### (1)前馈神经网络(Feedforward Neural Networks)
前馈网络也称前向网络。这种网络**只在训练过程会有反馈信号**，而在分类过程中数据只能向前传送，直到到达输出层，层间没有向后的反馈信号，因此被称为前馈网络。**感知机**( perceptron)与**BP神经网络**就属于前馈网络。

下图是一个3层的前馈神经网络，其中第一层是输入单元，第二层称为隐含层，第三层称为输出层（输入单元不是神经元，因此图中有2层神经元）。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9dg64dkotj30eg0a8aag.jpg">
</div>

对于一个3层的前馈神经网络N，若用$X$表示网络的输入向量，$W_1 \sim W_3$表示网络各层的连接权向量，$F_1 \sim F_3$表示神经网络3层的激活函数。那么神经网络的第一层神经元的输出为：
$$O_1=F_1(XW_1)$$
第二层的输出为：
$$O_2=F_2(F_1(XW_1)W_2)$$
　输出层的输出为：
$$O_3=F_3(F_2(F_1(XW_1)W_2)W_3)$$
若激活函数$F_1 \sim F_3$都选用线性函数，那么神经网络的输出$O_3$将是输入$X$的线性函数。因此，若要做高次函数的逼近就应该选用适当的非线性函数作为激活函数。
 ### (2)反馈神经网络(Feedback Neural Networks)
 反馈型神经网络是一种**从输出到输入具有反馈连接**的神经网络，**其结构比前馈网络要复杂得多**。典型的反馈型神经网络有：**Elman网络**和**Hopfield网络**。

<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9dgjk6sylj30fq0a0dg8.jpg">
</div>

 自组织神经网络是一种**无导师学习网络**。它通过自动寻找样本中的内在规律和本质属性，自组织、自适应地改变网络参数与结构。

### (3)自组织网络 (SOM ,Self-Organizing Neural Networks)

## 神经网络工作方式 
神经网络运作过程分为**学习**和**工作**两种状态。

### (1)神经网络的学习状态 
网络的学习主要是指使用学习算法来**调整神经元间的联接权**，使得网络输出更符合实际。学习算法分为**有导师学习**( Supervised Learning )与**无导师学习**( Unsupervised Learning )两类。

有导师学习算法将一组训练集 ( training set )送入网络，根据网络的实际输出与期望输出间的差别来调整连接权。**BP算法**就是一种出色的有导师学习算法。

::: tip 有导师学习算法的主要步骤包括：
1. 从样本集合中取一个样本（Ai，Bi）；
2. 计算网络的实际输出O；
3. 求D=Bi-O；
4. 根据D调整权矩阵W；
5. 对每个样本重复上述过程，直到对整个样本集来说，误差不超过规定范围。
:::

无导师学习**抽取样本集合中蕴含的统计特性**，并以神经元之间的联接权的形式存于网络中。 **Hebb学习**是一种经典的无导师学习算法。

### (2)神经网络的工作状态 
神经元间的连接权不变，神经网络作为**分类器**、**预测器**等使用。下面简要介绍一下Hebb学习与Delta学习规则 。

### (3)无导师学习算法：Hebb学习
Hebb算法核心思想是，当两个神经元同时处于激发状态时两者间的连接权会被加强，否则被减弱。

为了理解Hebb算法，有必要简单介绍一下条件反射实验。巴甫洛夫的条件反射实验：每次给狗喂食前都先响铃，时间一长，狗就会将铃声和食物联系起来。以后如果响铃但是不给食物，狗也会流口水。
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9dgtve29wj30ci091gmb.jpg">
</div>

受该实验的启发，Hebb的理论认为在同一时间被激发的神经元间的联系会被强化。比如，铃声响时一个神经元被激发，在同一时间食物的出现会激发附近的另一个神经元，那么这两个神经元间的联系就会强化，从而记住这两个事物之间存在着联系。相反，如果两个神经元总是不能同步激发，那么它们间的联系将会越来越弱。

Hebb学习律可表示为：
$$W_{ij}(t+1)=W_{ij}(t)+\alpha y_j(t)y_i(t)$$
其中$w_{ij}$表示神经元$j$到神经元$i$的连接权，$y_i$与$y_j$为两个神经元的输出，$\alpha$是表示学习速度的常数。若$y_i$与$y_j$同时被激活，即$y_i$与$y_j$同时为正，那么$w_{ij}$将增大。若$y_i$被激活，而$y_j$处于抑制状态，即$y_i$为正$y_j$为负，那么$w_{ij}$将变小。

### (4)有导师学习算法：Delta学习规则
Delta学习规则是一种简单的有导师学习算法，该算法根据神经元的实际输出与期望输出差别来调整连接权，其数学表示如下：
$$W_{ij}(t+1)=W_{ij}(t)+\alpha (d_i-y_i)x_j(t)$$
其中$w_{ij}$表示神经元$j$到神经元$i$的连接权，$d_i$是神经元$i$的期望输出，$y_i$是神经元$i$的实际输出，$x_j$表示神经元$j$状态，若神经元$j$处于激活态则$x_j$为1，若处于抑制状态则$x_j$为0或－1(根据激活函数而定)。$\alpha$是表示学习速度的常数。假设$x_i$为1，若$d_i$比$y_i$大，那么$w_{ij}$将增大，若$d_i$比$y_i$小，那么$w_{ij}$将变小。

Delta规则简单讲来就是：若神经元实际输出比期望输出大，则减小所有输入为正的连接的权重，增大所有输入为负的连接的权重。反之，若神经元实际输出比期望输出小，则增大所有输入为正的连接的权重，减小所有输入为负的连接的权重。这个增大或减小的幅度就根据上面的式子来计算。

### (5)有导师学习算法：BP算法 
采用BP学习算法的前馈型神经网络通常被称为BP网络。
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9dhe7yr2jj30cv0bwmy4.jpg">
</div>

BP网络具有很强的非线性映射能力，一个3层BP神经网络能够实现对任意非线性函数进行逼近（根据Kolrnogorov定理）。