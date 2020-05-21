# Matlab入门基础
## Matlab数据类型
- 数字
- 字符和字符串
- 矩阵
- 元胞数组
- 结构体

```
//矩阵,分号表示换行，在连续的一行里可以用逗号或者空格分隔字符。
A = [1 2 3; 4 5 2; 3 2 7]
//矩阵右上角'表示转置
B = A'
//(:)将矩阵转换成列向量，按照第一列、第二列..的顺序叠加
C = A(:)
C =
     1
     4
     3
     2
     5
     2
     3
     2
     7
//inv(A)表示求A的逆矩阵
D = inv(A)
A * D
//定义三个10*5的全零的数组
E = zeros(10,5,3)
//分别给数组赋值
E(:,:,1) = rand(10,5)
E(:,:,2) = randi(5, 10,5)
E(:,:,3) = randn(10,5)
```

```
//元胞数组
A = cell(1, 6)
A{2} = eye(3)
A{5} = magic(5)
B = A{5}
A =1×6 cell 数组
    {0×0 double}    {3×3 double}    {0×0 double}    {0×0 double}    {5×5 double}    {0×0 double}
```

## 常用命令及解释
在matlab中，`%`表示注释，`%%`表示代码段，可以划分功能模块。`ctrl+r`注释选中行，`ctrl+t`取消选中注释。
### 清空环境变量及命令
```
%% 清空环境变量及命令
clear all   % 清除Workspace中的所有变量
clc         % 清除Command Window中的所有命令
```
### MATLAB矩阵操作
#### 矩阵的定义与构造
```
A = [1 2 3 5 8 5 4 6]
//定义以1开始，没两个数字间隔2，直到9的矩阵
B = 1:2:9
  B = 1     3     5     7     9
//copyB 矩阵3行1列
C = repmat(B, 3, 1)
  C =
     1     3     5     7     9
     1     3     5     7     9
     1     3     5     7     9
//创建全是1的2*4矩阵
D = ones(2, 4)
  D =
     1     1     1     1
     1     1     1     1
```
#### 矩阵的下标
```
A = magic(5)
  A =
    17    24     1     8    15
    23     5     7    14    16
     4     6    13    20    22
    10    12    19    21     3
    11    18    25     2     9
B = A(2,3)
  B =7
C = A(3,:)
  C = 4 6 13 20 22
D = A(:,4)
//找到元素大于20的下标
[m, n] = find(A > 20)
```
### MATLAB逻辑与流程控制
#### if ... else ... end
```
A = rand(1,10)
limit = 0.75;

B = (A > limit);   % B is a vector of logical values
if any(B)
  fprintf('Indices of values > %4.2f: \n', limit);
  disp(find(B))
else
  disp('All values are below the limit.')
end
```
```
A =
0.1576    0.9706    0.9572    0.4854    0.8003    0.1419    0.4218    0.9157    0.7922    0.9595
Indices of values > 0.75: 
2     3     5     8     9    10
//B是一个矩阵，满足条件的就是1，否则为0
```

#### for ... end
```
k = 10;
hilbert = zeros(k,k);      % Preallocate matrix

for m = 1:k
    for n = 1:k
        hilbert(m,n) = 1/(m+n -1);
    end
end
hilbert
```

#### while ... end
```
寻找阶乘大于10的100次方的数
n = 1;
nFactorial = 1;
//1e100表示10的100次方
while nFactorial < 1e100
    n = n + 1;
    nFactorial = nFactorial * n;
end
n

factorial(69)
factorial(70)

//prod表示连乘
prod(1:69)
prod(1:70)
```
#### switch ... case ... end
```
mynumber = input('Enter a number:');

switch mynumber
    case -1
        disp('negative one');
    case 0
        disp('zero');
    case 1
        disp('positive one');
    otherwise
        disp('other value');
end
```

## MATLAB脚本与函数文件
脚本文件能够直接运行，函数文件类似java封装的方法。

## MATLAB基本绘图操作
### 二维平面绘图
```
x = 0:0.01:2*pi;
y = sin(x);
figure
plot(x, y)
title('y = sin(x)')
xlabel('x')
ylabel('sin(x)')
xlim([0 2*pi])

x = 0:0.01:20;
y1 = 200*exp(-0.05*x).*sin(x);
y2 = 0.8*exp(-0.5*x).*sin(10*x);
figure
[AX,H1,H2] = plotyy(x,y1,x,y2,'plot');
set(get(AX(1),'Ylabel'),'String','Slow Decay') 
set(get(AX(2),'Ylabel'),'String','Fast Decay') 
xlabel('Time (\musec)') 
title('Multiple Decay Rates') 
set(H1,'LineStyle','--')
set(H2,'LineStyle',':')
```

### 三维立体绘图
```
t = 0:pi/50:10*pi;
plot3(sin(t),cos(t),t)
xlabel('sin(t)')
ylabel('cos(t)')
zlabel('t')
grid on
axis square
```

### 图形的保存与导出
1. Edit → Copy Figure
2. Toolbar → Save
3. print('-depsc','-tiff','-r300','picture1')
4. File → Export Setup

## MATLAB文件导入
### mat格式
保存工作空间的数据
```
save data.mat x y1 y2
clear all
load data.mat
```
### txt格式
```
M = importdata('myfile.txt');
S = M.data;
save 'data.txt' S -ascii
T = load('data.txt');

isequal(S, T)
```

### xls格式
```
xlswrite('data.xls',S)
W = xlsread('data.xls');
isequal(S, W)

xlswrite('data.xlsx',S)
U = xlsread('data.xlsx');
isequal(S, U)
```

### csv格式
```
csvwrite('data.csv',S)
V = csvread('data.csv');
isequal(S, V)
```