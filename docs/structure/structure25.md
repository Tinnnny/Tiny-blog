# 红黑树
## 概述
红黑树也属于平衡树。

到2-3树能保证在插入元素之后，树依然保持平衡状态，它的最坏情况下所有子结点都是2-结点，树的高度为lgN,相比于我们普通的二叉查找树，最坏情况下树的高度为N，确实保证了最坏情况下的时间复杂度，但是2-3树实现起来过于复杂，所以我们介绍一种2-3树思想的简单实现：红黑树。

红黑树主要是对2-3树进行编码，红黑树背后的基本思想是用标准的二叉查找树(完全由2-结点构成)和一些额外的信息(替换3-结点)来表示2-3树。我们将树中的链接分为两种类型：

**红链接**：将两个2-结点连接起来构成一个3-结点；** 黑链接**：则是2-3树中的普通链接。

确切的说，我们将3-结点表示为由由一条左斜的红色链接(两个2-结点其中之一是另一个的左子结点)相连的两个2-结点。这种表示法的一个优点是，我们无需修改就可以直接使用标准的二叉查找树的get方法。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbdfdooygj30ro0eadhy.jpg)

## 红黑树的定义
红黑树是含有红黑链接并满足下列条件的二叉查找树：
1. 红链接均为左链接；
2. 没有任何一个结点同时和两条红链接相连；
3. 该树是完美黑色平衡的，即任意空链接到根结点的路径上的黑链接数量相同；

下面是红黑树与2-3树的对应关系：

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbdp76uwyj30io0o8whz.jpg)

## 红黑树结点API
因为每个结点都只会有一条指向自己的链接（从它的父结点指向它），我们可以在之前的Node结点中添加一个布尔类型的变量color来表示链接的颜色。如果指向它的链接是红色的，那么该变量的值为true，如果链接是黑色的，那么该变量的值为false。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbdqsbpulj30v40dxmzw.jpg)

**API设计**

| 类名| Node<Key,Value>                                                              |
|-----|----------------------------------------------------------------------------|
| 构造方法 |Node\(Key key, Value value, Node left, Node right，boolean color\)：创建Node对象 |
| 成员变量| 1\.public Node left:记录左子结点                                                      |
| |2\.public Node right:记录右子结点                                                     |
| |3\.public Key key:存储键                                                           |
| |4\.public Value value:存储值                                                       |
| |5\.public boolean color:由其父结点指向它的链接的颜色                                          |

## 平衡化
在对红黑树进行一些增删改查的操作后，很有可能会出现红色的右链接或者两条连续红色的链接，而这些都不满足红黑树的定义，所以我们需要对这些情况通过旋转进行修复，让红黑树保持平衡。

### 左旋
当某个结点的左子结点为黑色，右子结点为红色，此时需要左旋。

**前提**：当前结点为h，它的右子结点为x；

**左旋过程**：
1. 让x的左子结点变为h的右子结点：h.right=x.left;
2. 让h成为x的左子结点：x.left=h;
3. 让h的color属性变为x的color属性值：x.color=h.color;
4. 让h的color属性变为RED：h.color=true;

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbegp1rq4j30lt0n5dj8.jpg)

### 右旋
当某个结点的左子结点是红色，且左子结点的左子结点也是红色，需要右旋

**前提**：当前结点为h，它的左子结点为x；
**右旋过程**：
1. 让x的右子结点成为h的左子结点：h.left = x.right;
2. 让h成为x的右子结点：x.right=h;
3. 让x的color变为h的color属性值：x.color = h.color;
4. 让h的color为RED；

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbehx3vphj30o20o7add.jpg)

## 插入键
### 向单个2-结点中插入新键
一棵只含有一个键的红黑树只含有一个2-结点。插入另一个键后，我们马上就需要将他们旋转。

- 如果新键小于当前结点的键，我们只需要新增一个红色结点即可，新的红黑树和单个3-结点完全等价。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfcpst72j30ku0a5js7.jpg)

- 如果新键大于当前结点的键，那么新增的红色结点将会产生一条红色的右链接，此时我们需要通过左旋，把红色右链接变成左链接，插入操作才算完成。形成的新的红黑树依然和3-结点等价，其中含有两个键，一条红色链接。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfczhotbj30o10h4gnb.jpg)

### 向底部的2-结点插入新键
用和二叉查找树相同的方式向一棵红黑树中插入一个新键，会在树的底部新增一个结点（可以保证有序性），唯一区别的地方是我们会用红链接将新结点和它的父结点相连。如果它的父结点是一个2-结点，那么刚才讨论的两种方式仍然适用。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfez7y56j30ln0n3dik.jpg)

### 颜色反转
当一个结点的左子结点和右子结点的color都为RED时，也就是出现了临时的4-结点，此时只需要把左子结点和右子结点的颜色变为BLACK，同时让当前结点的颜色变为RED即可。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbffy4imtj30ms0eb406.jpg)

### 向一棵双键树(即一个3-结点)中插入新键
这种情况有可以分为三种子情况：
1. 新键大于原树中的两个键

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfgx2f6zj30lr0feq4d.jpg)

2. 新键小于原树中的两个键

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfhmmla3j30ml0nvdi5.jpg)

3. 新键介于原数中两个键之间

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfiguolej30ix0p476c.jpg)

### 根结点的颜色总是黑色
之前我们介绍结点API的时候，在结点Node对象中color属性表示的是父结点指向当前结点的连接的颜色，由于根结点不存在父结点，所以每次插入操作后，我们都需要把根结点的颜色设置为黑色。

### 向树底部的3-结点插入新键
假设在树的底部的一个3-结点下加入一个新的结点。前面我们所讲的3种情况都会出现。指向新结点的链接可能是3-结点的右链接（此时我们只需要转换颜色即可），或是左链接(此时我们需要进行右旋转然后再转换)，或是中链接(此时需要先左旋转然后再右旋转，最后转换颜色)。颜色转换会使中间结点的颜色变红，相当于将它送入了父结
点。这意味着父结点中继续插入一个新键，我们只需要使用相同的方法解决即可，直到遇到一个2-结点或者根结点为止。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbfkmar7aj30is0mdq56.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gfbflceqj7j30jk0jswgk.jpg)

## 红黑树的API设计
| 类名| RedBlackTree, Value>                                                 |
|----|---------------------------------------------------------------------|
| 构造方法 | RedBlackTree\(\)：创建RedBlackTree对象                                       |
| 成员方法 |1\.private boolean isRed\(Node x\)：判断当前结点的父指向链接是否为红色                    |
| |2\.private Node rotateLeft\(Node h\):左旋调整                               |
| |3\.private Node rotateRight\(Node h\):右旋调整                              |
|| 4\.private void flipColors\(Node h\)：颜色反转,相当于完成拆分4\-结点                  |
| |5\.public void put\(Key key, Value val\):在整个树上完成插入操作                    |
| |6\.private Node put\(Node h, Key key, Value val\):在指定树中，完成插入操作,并返回添加元素后新的树|
| |7\.public Value get\(Key key\):根据key，从树中找出对应的值                          |
| |8\.private Value get\(Node x, Key key\):从指定的树x中，找出key对应的值               |
| |9\.public int size\(\):获取树中元素的个数                                        |
| 成员变量 | 1\.private Node root : 记录根结点                                            |
| |2\.private int N:记录树中元素的个数                                              |
| |3\.private static final boolean RED：红色链接标识                              |
|| 4\.private static final boolean BLACK:黑色链接标识                            |

### 代码实现
```java
package cn.itcast.algorithm.tree;

public class RedBlackTree<Key extends Comparable<Key>, Value> {
    //根节点
    private Node root;
    //记录树中元素的个数
    private int N;
    //红色链接
    private static final boolean RED = true;
    //黑色链接
    private static final boolean BLACK = false;


    //结点类
    private class Node {
        //存储键
        public Key key;
        //存储值
        private Value value;
        //记录左子结点
        public Node left;
        //记录右子结点
        public Node right;
        //由其父结点指向它的链接的颜色
        public boolean color;

        public Node(Key key, Value value, Node left, Node right, boolean color) {
            this.key = key;
            this.value = value;
            this.left = left;
            this.right = right;
            this.color = color;
        }
    }


    //获取树中元素的个数
    public int size() {
        return N;
    }


    /**
     * 判断当前节点的父指向链接是否为红色
     *
     * @param x
     * @return
     */
    private boolean isRed(Node x) {
        if (x==null){
            return false;
        }
        return x.color==RED;
    }

    /**
     * 左旋转
     *
     * @param h
     * @return
     */
    private Node rotateLeft(Node h) {
        //找到h结点的右子结点x
        Node x = h.right;
        //找到x结点的左子结点，让x结点的左子结点称为h结点的右子结点
        h.right = x.left;
        //让h结点称为x结点的左子结点
        x.left = h;
        //让x结点的color属性变为h结点的color属性
        x.color = h.color;
        //让h结点的color属性变为RED
        h.color = RED;

        return x;
    }

    /**
     * 右旋
     *
     * @param h
     * @return
     */
    private Node rotateRight(Node h) {
        //找到h结点的左子结点 x
        Node x = h.left;
        //让x结点的右子结点成为h结点的左子结点
        h.left = x.right;
        //让h结点成为x结点的右子结点
        x.right = h;
        //让x结点的color属性变为h结点的color属性
        x.color = h.color;
        //让h结点的color属性为RED
        h.color = RED;

        return x;
    }

    /**
     * 颜色反转,相当于完成拆分4-节点
     *
     * @param h
     */
    private void flipColors(Node h) {
        //当前结点变为红色
        h.color = RED;
        //左子结点和右子结点变为黑色
        h.left.color=BLACK;
        h.right.color = BLACK;
    }

    /**
     * 在整个树上完成插入操作
     *
     * @param key
     * @param val
     */
    public void put(Key key, Value val) {
        root = put(root,key,val);
        //根结点的颜色总是黑色
        root.color = RED;
    }

    /**
     * 在指定树中，完成插入操作,并返回添加元素后新的树
     *
     * @param h
     * @param key
     * @param val
     */
    private Node put(Node h, Key key, Value val) {
        //判断h是否为空，如果为空则直接返回一个红色的结点就可以了
        if (h == null){
            //数量+1
            N++;
            return new Node(key,val,null,null,RED);
        }

        //比较h结点的键和key的大小
        int cmp = key.compareTo(h.key);
        if (cmp<0){
            //继续往左
            h.left = put(h.left,key,val);

        }else if (cmp>0){
            //继续往右
            h.right = put(h.right,key,val);

        }else{
            //发生值的替换
            h.value = val;
        }

        //进行左旋:当当前结点h的左子结点为黑色，右子结点为红色，需要左旋
        if (isRed(h.right) && !isRed(h.left)){
            h = rotateLeft(h);
        }

        //进行右旋：当当前结点h的左子结点和左子结点的左子结点都为红色，需要右旋
        if (isRed(h.left) && isRed(h.left.left)){
            rotateRight(h);
        }

        //颜色反转：当前结点的左子结点和右子结点都为红色时，需要颜色反转
        if (isRed(h.left) && isRed(h.right)){
            flipColors(h);
        }

        return h;
    }

    //根据key，从树中找出对应的值
    public Value get(Key key) {
        return get(root,key);
    }

    //从指定的树x中，查找key对应的值
    public Value get(Node x, Key key) {
        if (x == null){
            return null;
        }

        //比较x结点的键和key的大小
        int cmp = key.compareTo(x.key);
        if (cmp<0){
            return get(x.left,key);
        }else if (cmp>0){
            return get(x.right,key);
        }else{
           return x.value;
        }
    }
}
```