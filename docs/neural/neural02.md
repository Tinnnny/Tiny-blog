# Matlab BP网络实例
将Iris数据集分为2组，每组各75个样本，每组中每种花各有25个样本。其中一组作为以上程序的训练样本，另外一组作为检验样本。为了方便训练，将3类花分别编号为1，2，3 。使用这些数据训练一个4输入（分别对应4个特征），3输出（分别对应该样本属于某一品种的可能性大小）的前向网络。

Matlab程序如下：
```matlab
%读取训练数据
[f1,f2,f3,f4,class] = textread('trainData.txt' , '%f%f%f%f%f',150);

%特征值归一化
[input,minI,maxI] = premnmx( [f1 , f2 , f3 , f4 ]')  ;

%构造输出矩阵
s = length( class) ;
output = zeros( s , 3  ) ;
for i = 1 : s 
   output( i , class( i )  ) = 1 ;
end

%创建神经网络
net = newff( minmax(input) , [10 3] , { 'logsig' 'purelin' } , 'traingdx' ) ; 

%设置训练参数
net.trainparam.show = 50 ;
net.trainparam.epochs = 500 ;
net.trainparam.goal = 0.01 ;
net.trainParam.lr = 0.01 ;

%开始训练
net = train( net, input , output' ) ;

%读取测试数据
[t1 t2 t3 t4 c] = textread('testData.txt' , '%f%f%f%f%f',150);

%测试数据归一化
testInput = tramnmx ( [t1,t2,t3,t4]' , minI, maxI ) ;

%仿真
Y = sim( net , testInput ) 

%统计识别正确率
[s1 , s2] = size( Y ) ;
hitNum = 0 ;
for i = 1 : s2
    [m , Index] = max( Y( : ,  i ) ) ;
    if( Index  == c(i)   ) 
        hitNum = hitNum + 1 ; 
    end
end
sprintf('识别率是 %3.3f%%',100 * hitNum / s2 )
```
以上程序的识别率稳定在95%左右，训练100次左右达到收敛，训练曲线如下图所示：
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g9dnftbfw7j30lc0kf0sz.jpg">
</div>

## 参数设置对神经网络性能的影响 
实验中通过调整隐含层节点数，选择不通过的激活函数，设定不同的学习率，
- 隐含层节点个数: 隐含层节点的个数对于识别率的影响并不大，但是节点个数过多会增加运算量，使得训练较慢。
- 激活函数的选择 :激活函数无论对于识别率或收敛速度都有显著的影响。在逼近高次曲线时，S形函数精度比线性函数要高得多，但计算量也要大得多。
- 学习率的选择 :学习率影响着网络收敛的速度，以及网络能否收敛。学习率设置偏小可以保证网络收敛，但是收敛较慢。相反，学习率设置偏大则有可能使网络训练不收敛，影响识别效果。