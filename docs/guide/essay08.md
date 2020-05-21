# MATLAB入门基础
## MATLAB程序调试
1. Index must be a positive integer or logical.
```
MATLAB下标是从1开始的
 A = [1 2 3 4 5];
 A(0)
 A(3.5)
 A(-2)
```
2. Undefined function or variable 'B'.
B未定义
3. Inner matrix dimensions must agree.
矩阵维度一定要相符合。
4. Function definitions are not permitted at the prompt or in scripts.

5. Index out of bounds because numel(A)=5.
数组越界
6. In an assignment  A(I) = B, the number of elements in B and I must be the same.
赋值时维度必须相同
7. Expression or statement is incorrect--possibly unbalanced (, {, or [.
括号使用出错。
8. Too many input arguments.
输入参数太多

## 断点调试
matlab的调试和Java差不多。
## 向量化编程
### 及时清除不用的变量
```
a = rand(10000);
b = rand(10000);
clear a
b = rand(10000);
```

### 使用变量前，预分配内存空间
```
clear all
clc
n = 30000;
tic;
for k = 1:n
    a(k) = 1;
end
time = toc;
disp(['未预分配内存下动态赋值长为',num2str(n),'的数组时间是:',num2str(time),'秒！'])

tic
b = zeros(1,n);
for k = 1:n
    b(k) = 1;
end
time = toc;
disp(['预分配内存下动态赋值长为',num2str(n),'的数组时间是:',num2str(time),'秒！'])
```

### 选择恰当的数据类型
```
clear all
clc
n = 300000;
a = 8;
b{1} = 8;
c.data = 8;

tic
for k = 1:n;
    a;
end
time = toc;
disp(['访问',num2str(n),'次double型数组时间是:',num2str(time),'秒！'])

tic
for k = 1:n;
    b{1};
end
time = toc;
disp(['访问',num2str(n),'次cell型数组时间是:',num2str(time),'秒！'])

tic
for k = 1:n;
    c.data;
end
time = toc;
disp(['访问',num2str(n),'次struct型数组时间是:',num2str(time),'秒！'])
```

## 图像对象和句柄
 1. 如何设置线条的属性呢？
```
x = 0:0.01:2*pi;
y = sin(x);
h = plot(x,y);
grid on
get(h)
set(h,'linestyle','-','linewidth',2,'color','k')
```

2. 如何修改网格的间隔呢？ 
``` 
set(gca,'xtick',0:0.5:7)
set(gca,'ytick',-1:0.1:1)
```

3. 如何设置图例的字体及大小呢？
```
x = 0:0.01:2*pi;
y1 = sin(x);
y2 = cos(x);
plot(x,y1,'r')
hold on
plot(x,y2,'-.b')
h = legend('sin(x)','cos(x)');
set(h,'fontsize',16,'color','k','edgecolor','r','textcolor','w')
```
4. 如何拆分图例呢？
```
x = 0:0.01:2*pi;
y1 = sin(x);
y2 = cos(x);
h1 = plot(x,y1,'r');
hold on
h2 = plot(x,y2,'-.b');
ax1 = axes('position',get(gca,'position'),'visible','off');
legend(ax1,h1,'sin(x)','location','northwest')
ax2 = axes('position',get(gca,'position'),'visible','off');
legend(ax2,h2,'cos(x)','location','northeast')
```

## Bp神经网络
### 训练集/测试集产生
1. 导入数据
```
load spectra_data.mat
```

2. 随机产生训练集和测试集
```
temp = randperm(size(NIR,1));
% 训练集——50个样本
P_train = NIR(temp(1:50),:)';
T_train = octane(temp(1:50),:)';
% 测试集——10个样本
P_test = NIR(temp(51:end),:)';
T_test = octane(temp(51:end),:)';
N = size(P_test,2);
```
### 数据归一化
```
[p_train, ps_input] = mapminmax(P_train,0,1);
p_test = mapminmax('apply',P_test,ps_input);

[t_train, ps_output] = mapminmax(T_train,0,1);
```
### BP神经网络创建、训练及仿真测试
1. 创建网络
```
net = newff(p_train,t_train,9);
```
2. 设置训练参数
```
net.trainParam.epochs = 1000;
net.trainParam.goal = 1e-3;
net.trainParam.lr = 0.01;
```
3. 训练网络
```
net = train(net,p_train,t_train);
```
4. 仿真测试
```
t_sim = sim(net,p_test);
```
5. 数据反归一化
```
T_sim = mapminmax('reverse',t_sim,ps_output);
```
### 性能评价
1. 相对误差error
```
error = abs(T_sim - T_test)./T_test;
```
2. 决定系数R^2
```
R2 = (N * sum(T_sim .* T_test) - sum(T_sim) * sum(T_test))^2 / ((N * sum((T_sim).^2) - (sum(T_sim))^2) * (N * sum((T_test).^2) - (sum(T_test))^2)); 
```
3. 结果对比
```
result = [T_test' T_sim' error']
```
### 绘图
```
figure
plot(1:N,T_test,'b:*',1:N,T_sim,'r-o')
legend('真实值','预测值')
xlabel('预测样本')
ylabel('辛烷值')
string = {'测试集辛烷值含量预测结果对比';['R^2=' num2str(R2)]};
title(string)
```
```
//size(wineTargets,2)表示返回第二个变量的列数
for i=1:1:size(wineTargets,2)
    output1(i)=find(wineTargets(:,i)==max(wineTargets(:,i)));
end
```
```
max函数
A=[0 0 1]
[a b]=max(A)
a=1 b=3
其中a代表最大值，b代表最大值的索引，这样就可以进行分类。
```

代码
```
%% 此程序matlab编程实现的BP神经网络
% 清空环境变量
clear all
clc

%%第一步 读取数据
input=xlsread('input.xlsx');
output=xlsread('output.xlsx');

% 将二进制转为10进制分类
for i=1:1:size(output,2)
    output1(i)=find(output(:,i)==max(output(:,i)));
end
%% 第二步 设置训练数据和预测数据
input_train = input(:,[1:160]);
output_train =output(:,[1:160]);
input_test = input(:,[161:200]);
output_test =output(:,[161:200]);

train_output1=output1([1:160]);
test_output1=output1([161:200]);
%节点个数
inputnum=size(input_train,1); % size(X,1)返回的是矩阵X的行数
hiddennum=10;%隐含层节点数量经验公式p=sqrt(m+n)+a ，故分别取2~13进行试验
outputnum=size(output_train,1);
%% 第三本 训练样本数据归一化
[inputn,inputps]=mapminmax(input_train);%归一化到[-1,1]之间，inputps用来作下一次同样的归一化
[outputn,outputps]=mapminmax(output_train);
%% 第四步 构建BP神经网络
net=newff(inputn,outputn,hiddennum,{'tansig','purelin'},'trainlm');% 建立模型，传递函数使用purelin，采用梯度下降法训练

W1= net.iw{1,1};%输入层到中间层的权值
B1 = net.b{1};%中间各层神经元阈值

W2 = net.lw{2,1};%中间层到输出层的权值
B2 = net.b{2};%输出层各神经元阈值

%% 第五步 网络参数配置（ 训练次数，学习速率，训练目标最小误差等）
net.trainParam.epochs=500;         % 训练次数，这里设置为1000次
net.trainParam.lr=0.01;                   % 学习速率，这里设置为0.01
net.trainParam.goal=0.01;                    % 训练目标最小误差，这里设置为0.00001
net.trainParam.show=50;
net.trainParam.mc=0.01;
net.trainParam.max_fail=6;
%% 第六步 BP神经网络训练
[net,tr]=train(net,inputn,outputn);%开始训练，其中inputn,outputn分别为输入输出样本
figure(1),plotperform(tr) %误差MSE下降线

%训练集的输出
an0=sim(net,inputn); % 仿真得到预测的输出
aaa=size(an0,2);
train_simu=mapminmax('reverse',an0,outputps); % 返归一化

%% 计算训练集分类结果和误差
for i=1:1:aaa
    train_output(i)=find(train_simu(:,i)==max(train_simu(:,i)));
end

error0=train_output-train_output1;
%% 第七步 测试样本归一化
inputn_test=mapminmax('apply',input_test,inputps);% 对样本数据进行归一化

%% 第八步 BP神经网络预测
an1=sim(net,inputn_test); %用训练好的模型进行仿真
bbb=size(an1,2);
test_simu=mapminmax('reverse',an1,outputps); % 把仿真得到的数据还原为原始的数量级

%% 计算测试集分类结果和误差
for i=1:1:bbb
    test_output(i)=find(test_simu(:,i)==max(test_simu(:,i)));
end

error=test_output-test_output1; % 计算测试集分类的误差

%% 网络预测图形
% 找出判断错误的分类属于哪一类
k=zeros(1,5);
for i=1:bbb
    if error(i)~=0
        [b c]=max(output_test(:,i));
        switch c
            case 1
                k(1)= k(1)+1;
            case 2
                k(2)= k(2)+1;
            case 3
                k(3)= k(3)+1;
            case 4
                k(4)= k(4)+1;
            case 5
                k(5)= k(5)+1;
        end
    end
end
disp(k)
% 找出每类的个体和
kk=zeros(1,5);
for i=1:bbb
    [b c]=max(output_test(:,i));
    switch c
        case 1
            kk(1)= kk(1)+1;
        case 2
            kk(2)= kk(2)+1;
        case 3
            kk(3)= kk(3)+1;
        case 4
            kk(4)= kk(4)+1;
        case 5
            kk(5)= kk(5)+1;
    end
end
disp(kk)
```

现在可能出现的问题梳理：
1. 数据有问题
2. 学习率和激活函数有问题

矩阵化代码
```
% 清空环境变量
clear all
clc
data=xlsread('8分类.xlsx');
input=data(1,:);  %载入输入数据
c=zeros(5,size(input,2));%初始化存储矩阵

for i=1:1:size(input,2)
    c(input(1,i),i)=1;
end
xlswrite('data1.xlsx',c)
```

1. 不吃外卖，不喝饮料
2. 每天学习，每天运动
