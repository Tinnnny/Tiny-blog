# 数据预处理
## 概述
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1ga0o0crq5cj30m81jk1kx.jpg">
</div>

| Country | Age   | Salary | Purchased |
|---------|-------|--------|-----------|
| France  | 44    | 72000  | No        |
| Spain   | 27    | 48000  | Yes       |
| Germany | 30    | 54000  | No        |
| Spain   | 38    | 61000  | No        |
| Germany | 40    |        |Yes        |
| France  | 35    | 58000  | Yes       |
| Spain   |       |52000   | No        |
| France  | 48    | 79000  | Yes       |
| Germany | 50    | 83000  | No        |
| France  | 37    | 67000  | Yes       |

```python
# 设置working directory
getwd()
setwd("/Users/ML1/")

dataset = read_csv('Data.csv')
View(dataset)
```

## 第1步：导入库
NumPy包含数学计算函数。Pandas用于导入和管理数据集。
```Python
import numpy as np
import pandas as pd
```
## 第2步：导入数据集
数据集通常是.csv格式。CSV文件以文本形式保存表格数据。文件的每一行是一条数据记录。我们使用Pandas的read_csv方法读取本地csv文件为一个数据帧。然后，从数据帧中制作自变量和因变量的矩阵和向量。
```python
dataset = pd.read_csv('Data.csv')//读取csv文件
# 第一个冒号是所有列（row），第二个是所有行（column）除了最后一个(Purchased)
X = dataset.iloc[ : , :-1].values//.iloc[行，列]
# 只取最后一个column作为依赖变量
Y = dataset.iloc[ : , 3].values  // : 全部行 or 列；[a]第a行 or 列
```
```
Step 2: Importing dataset
X
[['France' 44.0 72000.0]
 ['Spain' 27.0 48000.0]
 ['Germany' 30.0 54000.0]
 ['Spain' 38.0 61000.0]
 ['Germany' 40.0 nan]
 ['France' 35.0 58000.0]
 ['Spain' nan 52000.0]
 ['France' 48.0 79000.0]
 ['Germany' 50.0 83000.0]
 ['France' 37.0 67000.0]]
Y
['No' 'Yes' 'No' 'No' 'Yes' 'Yes' 'No' 'Yes' 'No' 'Yes']
```
## 第3步：处理丢失数据
我们得到的数据很少是完整的。数据可能因为各种原因丢失，为了不降低机器学习模型的性能，需要处理数据。我们可以用整列的平均值或中间值替换丢失的数据。我们用sklearn.preprocessing库中的Imputer类完成这项任务。在data science中我们可以用NaN代替空值，但是在ML中必须要求数据为numeric。所以我们可以用mean来代替空值。
```python
from sklearn.preprocessing import Imputer
imputer = Imputer(missing_values = "NaN", strategy = "mean", axis = 0)
# (包含 column 1, 不包含 column 3, 也就是第12列)
imputer = imputer.fit(X[ : , 1:3])
X[ : , 1:3] = imputer.transform(X[ : , 1:3])# 将imputer 应用到数据
```
```
---------------------
Step 3: Handling the missing data
step2
X
[['France' 44.0 72000.0]
 ['Spain' 27.0 48000.0]
 ['Germany' 30.0 54000.0]
 ['Spain' 38.0 61000.0]
 ['Germany' 40.0 63777.77777777778]
 ['France' 35.0 58000.0]
 ['Spain' 38.77777777777778 52000.0]
 ['France' 48.0 79000.0]
 ['Germany' 50.0 83000.0]
 ['France' 37.0 67000.0]]
 ```

::: tip 主要参数说明：
- missing_values：缺失值，可以为整数或NaN(缺失值numpy.nan用字符串‘NaN’表示)，默认为NaN
- strategy：替换策略，字符串，默认用均值‘mean’替换
  - ①若为mean时，用特征列的均值替换
  - ②若为median时，用特征列的中位数替换
  - ③若为most_frequent时，用特征列的众数替换
- axis：指定轴数，默认axis=0代表列，axis=1代表行
- copy：设置为True代表不在原数据集上修改，设置为False时，就地修改，存在如下情况时，即使设置为False时，也不会就地修改
  - ①X不是浮点值数组
  - ②X是稀疏且missing_values=0
  - ③axis=0且X为CRS矩阵
  - ④axis=1且X为CSC矩阵
:::

## 第4步：解析分类数据
分类数据指的是含有标签值而不是数字值的变量。取值范围通常是固定的。例如"Yes"和"No"不能用于模型的数学计算，所以需要解析成数字。为实现这一功能，我们从sklearn.preprocessing库导入LabelEncoder类。

在对数据集进行处理时候我们会遇到一些包含同类别的数据（如country）。这样的数据是非numerical的数据，所以我们可以用数字来代替，比如不同的国家我们可以用1,2,3区分不同国家，但是这样会出现一个比较严重的问题。就是国家之间的地位是相同的，但是数字有顺序大小之分。所以我们用另一种方法，就是将不同的类别（如不同国家）另外分为一个列，属于这个国家的设置为1，不属于的设置为0
```python
#简单来说 LabelEncoder 是对不连续的数字或者文本进行编号 OneHotEncoder 用于将表示分类的数据扩维
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder_X = LabelEncoder()
X[ : , 0] = labelencoder_X.fit_transform(X[ : , 0])
```
### 创建虚拟变量
```python
onehotencoder = OneHotEncoder(categorical_features = [0])
X = onehotencoder.fit_transform(X).toarray()
labelencoder_Y = LabelEncoder()
Y =  labelencoder_Y.fit_transform(Y)
```
```
---------------------
Step 4: Encoding categorical data
X
[[1.00000000e+00 0.00000000e+00 0.00000000e+00 4.40000000e+01
  7.20000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 2.70000000e+01
  4.80000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 3.00000000e+01
  5.40000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.80000000e+01
  6.10000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 4.00000000e+01
  6.37777778e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.50000000e+01
  5.80000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.87777778e+01
  5.20000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 4.80000000e+01
  7.90000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 5.00000000e+01
  8.30000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.70000000e+01
  6.70000000e+04]]
Y
[0 1 0 0 1 1 0 1 0 1]
```

## 第5步：拆分数据集为训练集合和测试集合
当数据集准备完成之后，我们需要将数据集进行分类，将独立变量和依赖变量分为训练集和测试集。训练集与测试集的比例一般是用4:1。`train_test_split`函数用于将矩阵随机划分为`训练子集`和`测试子集`，并返回划分好的`训练集测试集样本`和`训练集测试集标签`。

**格式**
```python
X_train,X_test, y_train, y_test =cross_validation.train_test_split(train_data,train_target,test_size=0.3, random_state=0)
```
::: tip 参数解释
- train_data：被划分的样本特征集
- train_target：被划分的样本标签
- test_size：如果是浮点数，在0-1之间，表示样本占比；如果是整数的话就是样本的数量
- random_state：是随机数的种子。
:::

随机数种子：其实就是该组随机数的编号，在需要重复试验的时候，保证得到一组一样的随机数。比如你每次都填1，其他参数一样的情况下你得到的随机数组是一样的。但填0或不填，每次都会不一样。随机数的产生取决于种子，随机数和种子之间的关系遵从以下两个规则：种子不同，产生不同的随机数；种子相同，即使实例不同也产生相同的随机数。


```python
#from sklearn.model_selection import train_test_split
from sklearn.cross_validation import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split( X , Y , test_size = 0.2, random_state = 0)
```
```
---------------------
Step 5: Splitting the datasets into training sets and Test sets
X_train
[[  0.00000000e+00   1.00000000e+00   0.00000000e+00   4.00000000e+01
    6.37777778e+04]
 [  1.00000000e+00   0.00000000e+00   0.00000000e+00   3.70000000e+01
    6.70000000e+04]
 [  0.00000000e+00   0.00000000e+00   1.00000000e+00   2.70000000e+01
    4.80000000e+04]
 [  0.00000000e+00   0.00000000e+00   1.00000000e+00   3.87777778e+01
    5.20000000e+04]
 [  1.00000000e+00   0.00000000e+00   0.00000000e+00   4.80000000e+01
    7.90000000e+04]
 [  0.00000000e+00   0.00000000e+00   1.00000000e+00   3.80000000e+01
    6.10000000e+04]
 [  1.00000000e+00   0.00000000e+00   0.00000000e+00   4.40000000e+01
    7.20000000e+04]
 [  1.00000000e+00   0.00000000e+00   0.00000000e+00   3.50000000e+01
    5.80000000e+04]]
X_test
[[  0.00000000e+00   1.00000000e+00   0.00000000e+00   3.00000000e+01
    5.40000000e+04]
 [  0.00000000e+00   1.00000000e+00   0.00000000e+00   5.00000000e+01
    8.30000000e+04]]
Y_train
[1 1 1 0 1 0 0 1]
Y_test
[0 0]
```

## 第6步：特征量化
这是对数据处理的一项很重要的步骤，在机器学习中，由于每个变量的范围不同，如果两个变量之间差距太大，会导致距离对结果产生影响。所以我们要对数据进行一定的标准化改变。最简单的方式是将数据缩放至$[0.1]$或者$[-1,1]$之间：
```python
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
```
```
---------------------
Step 6: Feature Scaling
X_train
[[-1.          2.64575131 -0.77459667  0.26306757  0.12381479]
 [ 1.         -0.37796447 -0.77459667 -0.25350148  0.46175632]
 [-1.         -0.37796447  1.29099445 -1.97539832 -1.53093341]
 [-1.         -0.37796447  1.29099445  0.05261351 -1.11141978]
 [ 1.         -0.37796447 -0.77459667  1.64058505  1.7202972 ]
 [-1.         -0.37796447  1.29099445 -0.0813118  -0.16751412]
 [ 1.         -0.37796447 -0.77459667  0.95182631  0.98614835]
 [ 1.         -0.37796447 -0.77459667 -0.59788085 -0.48214934]]
X_test
[[ 0.  0.  0. -1. -1.]
 [ 0.  0.  0.  1.  1.]]
 ```
 
::: tip fit_transform和transform
1. fit_transform(X_train)对训练数据集先拟合fit，找到该训练数据集的整体指标，如均值、方差、最大值最小值等等（根据具体转换的目的），然后对该训练数据集进行转换transform，从而实现数据的标准化、归一化等等。
2. 根据对之前训练数据集fit的整体指标，对测试数据集使用同样的均值、方差、最大最小值等指标进行转换transform(X_test)，从而保证X_train、X_test处理方式相同。
3. 必须先用fit_transform(X_train)，之后再transform(X_test)
4. 如果直接transform(X_train)，程序会报错; 如果fit_transfrom(X_test)后，使用fit_transform(X_test)而不用transform(X_test)，虽然也能归一化，但是两个结果不是在同一个“标准”下的，具有明显差异。
:::
> fit原义指的是安装、使适合的意思，其实有点train的含义，但是和train不同的是，它并不是一个训练的过程，而是一个适配的过程，过程都是确定的，最后得到一个可用于转换的有价值的信息。

::: warning 三种方法进行比较
- fit(): Method calculates the parameters μ and σ and saves them as internal objects.
解释：简单来说，就是求得训练集X的均值，方差，最大值，最小值,这些训练集X固有的属性。
- transform(): Method using these calculated parameters apply the transformation to a particular dataset.
解释：在fit的基础上，进行标准化，降维，归一化等操作（看具体用的是哪个工具，如PCA，StandardScaler等）。
- fit_transform(): joins the fit() and transform() method for transformation of dataset.
解释：fit_transform是fit和transform的组合，既包括了训练又包含了转换。
:::

transform()和fit_transform()二者的功能都是对数据进行某种统一处理（比如标准化~N(0,1)，将数据缩放(映射)到某个固定区间，归一化，正则化等）fit_transform(trainData)对部分数据先拟合fit，找到该part的整体指标，如均值、方差、最大值最小值等等（根据具体转换的目的），然后对该trainData进行转换transform，从而实现数据的标准化、归一化等等。

根据对之前部分trainData进行fit的整体指标，对剩余的数据（testData）使用同样的均值、方差、最大最小值等指标进行转换transform(testData)，从而保证train、test处理方式相同。所以，一般都是像上线代码一样用。

## 代码
```python
#Day 1: Data Prepocessing

#Step 1: Importing the libraries
import numpy as np
import pandas as pd

#Step 2: Importing dataset
dataset = pd.read_csv('../datasets/Data.csv')
X = dataset.iloc[ : , :-1].values
Y = dataset.iloc[ : , 3].values
print("Step 2: Importing dataset")
print("X")
print(X)
print("Y")
print(Y)

#Step 3: Handling the missing data
from sklearn.preprocessing import Imputer
imputer = Imputer(missing_values = "NaN", strategy = "mean", axis = 0)
imputer = imputer.fit(X[ : , 1:3])
X[ : , 1:3] = imputer.transform(X[ : , 1:3])
print("---------------------")
print("Step 3: Handling the missing data")
print("step2")
print("X")
print(X)

#Step 4: Encoding categorical data
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder_X = LabelEncoder()
X[ : , 0] = labelencoder_X.fit_transform(X[ : , 0])
#Creating a dummy variable
onehotencoder = OneHotEncoder(categorical_features = [0])
X = onehotencoder.fit_transform(X).toarray()
labelencoder_Y = LabelEncoder()
Y =  labelencoder_Y.fit_transform(Y)
print("---------------------")
print("Step 4: Encoding categorical data")
print("X")
print(X)
print("Y")
print(Y)

#Step 5: Splitting the datasets into training sets and Test sets
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split( X , Y , test_size = 0.2, random_state = 0)
print("---------------------")
print("Step 5: Splitting the datasets into training sets and Test sets")
print("X_train")
print(X_train)
print("X_test")
print(X_test)
print("Y_train")
print(Y_train)
print("Y_test")
print(Y_test)

#Step 6: Feature Scaling
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
print("---------------------")
print("Step 6: Feature Scaling")
print("X_train")
print(X_train)
print("X_test")
print(X_test)
```
输出：
```
Step 2: Importing dataset
X
[['France' 44.0 72000.0]
 ['Spain' 27.0 48000.0]
 ['Germany' 30.0 54000.0]
 ['Spain' 38.0 61000.0]
 ['Germany' 40.0 nan]
 ['France' 35.0 58000.0]
 ['Spain' nan 52000.0]
 ['France' 48.0 79000.0]
 ['Germany' 50.0 83000.0]
 ['France' 37.0 67000.0]]
Y
['No' 'Yes' 'No' 'No' 'Yes' 'Yes' 'No' 'Yes' 'No' 'Yes']
---------------------
Step 3: Handling the missing data
step2
X
[['France' 44.0 72000.0]
 ['Spain' 27.0 48000.0]
 ['Germany' 30.0 54000.0]
 ['Spain' 38.0 61000.0]
 ['Germany' 40.0 63777.77777777778]
 ['France' 35.0 58000.0]
 ['Spain' 38.77777777777778 52000.0]
 ['France' 48.0 79000.0]
 ['Germany' 50.0 83000.0]
 ['France' 37.0 67000.0]]
---------------------
Step 4: Encoding categorical data
X
[[1.00000000e+00 0.00000000e+00 0.00000000e+00 4.40000000e+01
  7.20000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 2.70000000e+01
  4.80000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 3.00000000e+01
  5.40000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.80000000e+01
  6.10000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 4.00000000e+01
  6.37777778e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.50000000e+01
  5.80000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.87777778e+01
  5.20000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 4.80000000e+01
  7.90000000e+04]
 [0.00000000e+00 1.00000000e+00 0.00000000e+00 5.00000000e+01
  8.30000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.70000000e+01
  6.70000000e+04]]
Y
[0 1 0 0 1 1 0 1 0 1]
---------------------
Step 5: Splitting the datasets into training sets and Test sets
X_train
[[0.00000000e+00 1.00000000e+00 0.00000000e+00 4.00000000e+01
  6.37777778e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.70000000e+01
  6.70000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 2.70000000e+01
  4.80000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.87777778e+01
  5.20000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 4.80000000e+01
  7.90000000e+04]
 [0.00000000e+00 0.00000000e+00 1.00000000e+00 3.80000000e+01
  6.10000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 4.40000000e+01
  7.20000000e+04]
 [1.00000000e+00 0.00000000e+00 0.00000000e+00 3.50000000e+01
  5.80000000e+04]]
X_test
[[0.0e+00 1.0e+00 0.0e+00 3.0e+01 5.4e+04]
 [0.0e+00 1.0e+00 0.0e+00 5.0e+01 8.3e+04]]
Y_train
[1 1 1 0 1 0 0 1]
Y_test
[0 0]
---------------------
Step 6: Feature Scaling
X_train
[[-1.          2.64575131 -0.77459667  0.26306757  0.12381479]
 [ 1.         -0.37796447 -0.77459667 -0.25350148  0.46175632]
 [-1.         -0.37796447  1.29099445 -1.97539832 -1.53093341]
 [-1.         -0.37796447  1.29099445  0.05261351 -1.11141978]
 [ 1.         -0.37796447 -0.77459667  1.64058505  1.7202972 ]
 [-1.         -0.37796447  1.29099445 -0.0813118  -0.16751412]
 [ 1.         -0.37796447 -0.77459667  0.95182631  0.98614835]
 [ 1.         -0.37796447 -0.77459667 -0.59788085 -0.48214934]]
X_test
[[-1.          2.64575131 -0.77459667 -1.45882927 -0.90166297]
 [-1.          2.64575131 -0.77459667  1.98496442  2.13981082]]
```