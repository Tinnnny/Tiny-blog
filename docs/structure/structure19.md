# 树
**为什么需要树这种数据结构**
1. 数组存储方式的分析
  - 优点：通过下标方式访问元素，速度快。对于有序数组，还可使用二分查找提高检索速度。
  - 缺点：如果要检索具体某个值，或者插入值(按一定顺序)会整体移动，效率较低
2. 链式存储方式的分析
  - 优点：在一定程度上对数组存储方式有优化(比如：插入一个数值节点，只需要将插入节点，链接到链表中即可， 删除效率也很好)。
  - 缺点：在进行检索时，效率仍然较低，比如(检索某个值，需要从头节点开始遍历) 
3. 树存储方式的分析
  - 能提高数据存储，读取的效率,  比如利用 二叉排序树(Binary Sort Tree)，既可以保证数据的检索速度，同时也可以保证数据的插入，删除，修改的速度。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8co9o4fdj30p80c9wkq.jpg)
二叉树左边的数比右边的数小，按顺序添加。
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8clsnuoxj30uq0cegso.jpg)

树的常用术语(结合示意图理解):
1. 节点
2. 根节点
3. 父节点
4. 子节点
5. 叶子节点 (没有子节点的节点)
6. 节点的权(节点值)
7. 路径(从root节点找到该节点的路线)
8. 层
9. 子树
10. 树的高度(最大层数)
11. 森林 :多颗子树构成森林
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8cyw5aiwj30ks0chmxj.jpg)

## 二叉树
### 二叉树的概念
1. 树有很多种，每个节点最多只能有两个子节点的一种形式称为二叉树。
2. 二叉树的子节点分为左节点和右节点。
3. 如果该二叉树的所有叶子节点都在最后一层，并且结点总数= 2^n -1 , n 为层数，则我们称为满二叉树。
4. 如果该二叉树的所有叶子节点都在最后一层或者倒数第二层，而且最后一层的叶子节点在左边连续，倒数第二层的叶子节点在右边连续，我们称为完全二叉树。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8d0vysfej310i0ac77u.jpg)

### 二叉树遍历
使用前序，中序和后序对下面的二叉树进行遍历.
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8dhcrz9kj30gq0br0t9.jpg)

- 前序遍历: **先输出父节点**，再遍历左子树和右子树
- 中序遍历: 先遍历左子树，**再输出父节点**，再遍历右子树
- 后序遍历: 先遍历左子树，再遍历右子树，**最后输出父节点**
小结: 看输出父节点的顺序，就确定是前序，中序还是后序

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8dmoc0pij30t60gitiv.jpg)

### 前序中序后序遍历代码实现
```java
package com.llw.datastructure.Algorithm;

/**
 * 二叉树
 * 2020/5/28 19:52 By Tinny
 */
public class BinaryTreeDemo {
    public static void main(String[] args) {
        //创建二叉树
        BinaryTree binaryTree = new BinaryTree();
        //创建节点
        HeroNode root = new HeroNode(1, "宋江");
        HeroNode node2 = new HeroNode(2, "吴用");
        HeroNode node3 = new HeroNode(3, "卢俊义");
        HeroNode node4 = new HeroNode(4, "林冲");
        HeroNode node5 = new HeroNode(5, "关胜");

        //先手动创建二叉树，后边学习递归的方式创建
        root.setLeft(node2);
        root.setRight(node3);
        node3.setRight(node4);
        node3.setLeft(node5);
        binaryTree.setRoot(root);

        //测试
        System.out.println("前序遍历"); //12354
        binaryTree.preOrder();
        System.out.println("中序遍历"); //21534
        binaryTree.infixOrder();
        System.out.println("后序遍历"); //25431
        binaryTree.postOrder();
    }
}

/**
 * 定义二叉树
 */
class BinaryTree {
    private HeroNode root;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //前序遍历
    public void preOrder() {
        if (this.root != null) {
            this.root.preOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //中序遍历
    public void infixOrder() {
        if (this.root != null) {
            this.root.infixOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //后序遍历
    public void postOrder() {
        if (this.root != null) {
            this.root.postOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }
}

/**
 * HeroNode节点
 */
class HeroNode {
    private int no;
    private String name;
    private HeroNode left; //默认为空
    private HeroNode right;

    public HeroNode(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HeroNode getLeft() {
        return left;
    }

    public void setLeft(HeroNode left) {
        this.left = left;
    }

    public HeroNode getRight() {
        return right;
    }

    public void setRight(HeroNode right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name +
                '}';
    }

    //前序遍历的方法
    public void preOrder() {
        System.out.println(this); //先输出父节点
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.preOrder();
        }
        if (this.right != null) {
            this.right.preOrder();
        }
    }

    //中序遍历方法
    public void infixOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.infixOrder();
        }

        System.out.println(this); //输出父节点

        if (this.right != null) {
            this.right.infixOrder();
        }
    }

    //后序遍历方法
    public void postOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.postOrder();
        }
        if (this.right != null) {
            this.right.postOrder();
        }

        System.out.println(this); //输出父节点
    }
}
```

### 查找指定节点

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf8fr9gsluj31460gpdtf.jpg)

```java
package com.llw.datastructure.Algorithm;

/**
 * 二叉树
 * 2020/5/28 19:52 By Tinny
 */
public class BinaryTreeDemo {
    public static void main(String[] args) {
        //创建二叉树
        BinaryTree binaryTree = new BinaryTree();
        //创建节点
        HeroNode root = new HeroNode(1, "宋江");
        HeroNode node2 = new HeroNode(2, "吴用");
        HeroNode node3 = new HeroNode(3, "卢俊义");
        HeroNode node4 = new HeroNode(4, "林冲");
        HeroNode node5 = new HeroNode(5, "关胜");

        //先手动创建二叉树，后边学习递归的方式创建
        root.setLeft(node2);
        root.setRight(node3);
        node3.setRight(node4);
        node3.setLeft(node5);
        binaryTree.setRoot(root);

        //前序遍历查找
        System.out.println("前序");
        HeroNode resNode = binaryTree.preOrderSearch(5);
        if (resNode != null) {
            System.out.printf("找到了，信息为no=%d name=%s", resNode.getNo(), resNode.getName());
        } else {
            System.out.println("未找到");
        }

        //中序遍历查找
        System.out.println("中序");
        resNode = binaryTree.infixOrderSearch(5);
        if (resNode != null) {
            System.out.printf("找到了，信息为no=%d name=%s", resNode.getNo(), resNode.getName());
        } else {
            System.out.println("未找到");
        }

        //后序遍历查找
        System.out.println("后序");
        resNode = binaryTree.postOrderSearch(5);
        if (resNode != null) {
            System.out.printf("找到了，信息为no=%d name=%s", resNode.getNo(), resNode.getName());
        } else {
            System.out.println("未找到");
        }
    }
}

/**
 * 定义二叉树
 */
class BinaryTree {
    private HeroNode root;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //前序遍历
    public void preOrder() {
        if (this.root != null) {
            this.root.preOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //中序遍历
    public void infixOrder() {
        if (this.root != null) {
            this.root.infixOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //后序遍历
    public void postOrder() {
        if (this.root != null) {
            this.root.postOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //前序遍历查找
    public HeroNode preOrderSearch(int no) {
        if (root != null) {
            return root.preOrderSearch(no);
        } else {
            return null;
        }
    }

    //中序遍历查找
    public HeroNode infixOrderSearch(int no) {
        if (root != null) {
            return root.infixOrderSearch(no);
        } else {
            return null;
        }
    }

    //后序遍历查找
    public HeroNode postOrderSearch(int no) {
        if (root != null) {
            return root.postOrderSearch(no);
        } else {
            return null;
        }
    }
}

/**
 * HeroNode节点
 */
class HeroNode {
    private int no;
    private String name;
    private HeroNode left; //默认为空
    private HeroNode right;

    public HeroNode(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HeroNode getLeft() {
        return left;
    }

    public void setLeft(HeroNode left) {
        this.left = left;
    }

    public HeroNode getRight() {
        return right;
    }

    public void setRight(HeroNode right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name +
                '}';
    }

    //前序遍历的方法
    public void preOrder() {
        System.out.println(this); //先输出父节点
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.preOrder();
        }
        if (this.right != null) {
            this.right.preOrder();
        }
    }

    //中序遍历方法
    public void infixOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.infixOrder();
        }

        System.out.println(this); //输出父节点

        if (this.right != null) {
            this.right.infixOrder();
        }
    }

    //后序遍历方法
    public void postOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.postOrder();
        }
        if (this.right != null) {
            this.right.postOrder();
        }

        System.out.println(this); //输出父节点
    }

    /**
     * 前序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode preOrderSearch(int no) {
        System.out.println("进入前序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }
        //则判断当前节点的左子节点是否为空，如果不为空，则递归前序查找
        //如果左递归前序查找，找到节点则返回
        HeroNode resNode = null;
        if (this.left != null) {
            resNode = this.left.preOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }

        if (this.right != null) {
            resNode = this.right.preOrderSearch(no);
        }
        return resNode;
    }

    /**
     * 中序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode infixOrderSearch(int no) {

        HeroNode resNode = null;

        if (this.left != null) {
            resNode = this.left.infixOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        System.out.println("进入中序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }

        if (this.right != null) {
            resNode = this.right.infixOrderSearch(no);
        }
        return resNode;
    }

    /**
     * 后序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode postOrderSearch(int no) {

        HeroNode resNode = null;

        if (this.left != null) {
            resNode = this.left.postOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        if (this.right != null) {
            resNode = this.right.postOrderSearch(no);
        }

        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        System.out.println("进入后序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }

        return resNode;
    }
}
```
## 二叉树-删除节点
**要求**
1. 如果删除的节点是叶子节点，则删除该节点
2. 如果删除的节点是非叶子节点，则删除该子树.
3. 测试，删除掉 5号叶子节点 和 3号子树.

```java
package com.llw.datastructure.Algorithm;

/**
 * 二叉树
 * 2020/5/28 19:52 By Tinny
 */
public class BinaryTreeDemo {
    public static void main(String[] args) {
        //创建二叉树
        BinaryTree binaryTree = new BinaryTree();
        //创建节点
        HeroNode root = new HeroNode(1, "宋江");
        HeroNode node2 = new HeroNode(2, "吴用");
        HeroNode node3 = new HeroNode(3, "卢俊义");
        HeroNode node4 = new HeroNode(4, "林冲");
        HeroNode node5 = new HeroNode(5, "关胜");

        //先手动创建二叉树，后边学习递归的方式创建
        root.setLeft(node2);
        root.setRight(node3);
        node3.setRight(node4);
        node3.setLeft(node5);
        binaryTree.setRoot(root);

        System.out.println("删除前，前序遍历");
        binaryTree.preOrder(); //12354
        binaryTree.delNode(5);
        System.out.println("删除后，前序遍历");
        binaryTree.preOrder();//1234
    }
}

/**
 * 定义二叉树
 */
class BinaryTree {
    private HeroNode root;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //删除节点
    public void delNode(int no) {
        if (root != null) {
            if (root.getNo() == no) {
                root = null;
            } else {
                root.delNode(no);
            }
        } else {
            System.out.println("空树，不能删除");
        }
    }

    //前序遍历
    public void preOrder() {
        if (this.root != null) {
            this.root.preOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //中序遍历
    public void infixOrder() {
        if (this.root != null) {
            this.root.infixOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //后序遍历
    public void postOrder() {
        if (this.root != null) {
            this.root.postOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //前序遍历查找
    public HeroNode preOrderSearch(int no) {
        if (root != null) {
            return root.preOrderSearch(no);
        } else {
            return null;
        }
    }

    //中序遍历查找
    public HeroNode infixOrderSearch(int no) {
        if (root != null) {
            return root.infixOrderSearch(no);
        } else {
            return null;
        }
    }

    //后序遍历查找
    public HeroNode postOrderSearch(int no) {
        if (root != null) {
            return root.postOrderSearch(no);
        } else {
            return null;
        }
    }
}

/**
 * HeroNode节点
 */
class HeroNode {
    private int no;
    private String name;
    private HeroNode left; //默认为空
    private HeroNode right;

    public HeroNode(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HeroNode getLeft() {
        return left;
    }

    public void setLeft(HeroNode left) {
        this.left = left;
    }

    public HeroNode getRight() {
        return right;
    }

    public void setRight(HeroNode right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name +
                '}';
    }

    //
//  1. 如果删除的节点是叶子节点，则删除该节点
//  2. 如果删除的节点是非叶子节点，则删除该子树.
    public void delNode(int no) {

        /**
         * 思路：
         * 1.因为这个二叉树是单向的，所以判断当前节点的子节点是否需要删除节点，而不能去判断当前的节点是不是需要删除的节点
         */
        //2.如果当前节点的左子节点不为空，并且左子节点就是要删除的节点，就将this.left=null;并且就返回(结束递归删除)
        if (this.left != null && this.left.no == no) {
            this.left = null;
            return;
        }
        //3.如果当前节点的右子节点不为空，并且右子节点就是要删除的节点，就将this.right=null;并且就返回(结束递归删除)
        if (this.right != null && this.right.no == no) {
            this.right = null;
            return;
        }
        //4.如果2,3步没有删除节点，那么久需要向左子树进行递归删除
        if (this.left != null) {
            this.left.delNode(no);
        }
        //5.如果第4步也没有删除，就应该向右子树进行递归删除
        if (this.right != null) {
            this.right.delNode(no);
        }
    }


    //前序遍历的方法
    public void preOrder() {
        System.out.println(this); //先输出父节点
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.preOrder();
        }
        if (this.right != null) {
            this.right.preOrder();
        }
    }

    //中序遍历方法
    public void infixOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.infixOrder();
        }

        System.out.println(this); //输出父节点

        if (this.right != null) {
            this.right.infixOrder();
        }
    }

    //后序遍历方法
    public void postOrder() {
        //递归向左子树前序遍历
        if (this.left != null) {
            this.left.postOrder();
        }
        if (this.right != null) {
            this.right.postOrder();
        }

        System.out.println(this); //输出父节点
    }

    /**
     * 前序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode preOrderSearch(int no) {
        System.out.println("进入前序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }
        //则判断当前节点的左子节点是否为空，如果不为空，则递归前序查找
        //如果左递归前序查找，找到节点则返回
        HeroNode resNode = null;
        if (this.left != null) {
            resNode = this.left.preOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }

        if (this.right != null) {
            resNode = this.right.preOrderSearch(no);
        }
        return resNode;
    }

    /**
     * 中序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode infixOrderSearch(int no) {

        HeroNode resNode = null;

        if (this.left != null) {
            resNode = this.left.infixOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        System.out.println("进入中序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }

        if (this.right != null) {
            resNode = this.right.infixOrderSearch(no);
        }
        return resNode;
    }

    /**
     * 后序遍历查找
     *
     * @param no
     * @return 如果找到就返回该Node，如果没找到就返回null
     */
    public HeroNode postOrderSearch(int no) {

        HeroNode resNode = null;

        if (this.left != null) {
            resNode = this.left.postOrderSearch(no);
        }
        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        if (this.right != null) {
            resNode = this.right.postOrderSearch(no);
        }

        if (resNode != null) { //说明左子树找到
            return resNode;
        }
        System.out.println("进入后序遍历~~");
        //比较当前节点是不是
        if (this.no == no) {
            return this;
        }

        return resNode;
    }
}
```