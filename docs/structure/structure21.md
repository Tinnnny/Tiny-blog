# 线索化二叉树
## 概述
1. n个结点的二叉链表中含有n+1【公式 2n-(n-1)=n+1】个空指针域。利用二叉链表中的空指针域，存放指向该结点在某种遍历次序下的前驱和后继结点的指针（这种附加的指针称为"线索"）
2. 这种加上了线索的二叉链表称为线索链表，相应的二叉树称为线索二叉树(Threaded BinaryTree)。根据线索性质的不同，线索二叉树可分为前序线索二叉树、中序线索二叉树和后序线索二叉树三种
3. 一个结点的前一个结点，称为前驱结点
4. 一个结点的后一个结点，称为后继结点

## 线索二叉树应用案例
中序遍历的结果：{8, 3, 10, 1, 14, 6}
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf93pgoqalj319a0b6gnv.jpg)

说明: 当线索化二叉树后，Node节点的 属性 left 和 right ，有如下情况:
1. left 指向的是左子树，也可能是指向的前驱节点. 比如 ① 节点 left 指向的左子树, 而 ⑩ 节点的 left 指向的就是前驱节点.
2. right指向的是右子树，也可能是指向后继节点，比如 ① 节点right 指向的是右子树，而⑩ 节点的right 指向的是后继节点.

### 线索化二叉树代码实现
```java
package com.llw.datastructure.Algorithm.thread;

/**
 * 线索化二叉树
 * 2020/5/29 10:16 By Tinny
 */
public class ThreadedBinaryTreeDemo {
    public static void main(String[] args) {
        HeroNode root = new HeroNode(1, "tom");
		HeroNode node2 = new HeroNode(3, "jack");
		HeroNode node3 = new HeroNode(6, "smith");
		HeroNode node4 = new HeroNode(8, "mary");
		HeroNode node5 = new HeroNode(10, "king");
		HeroNode node6 = new HeroNode(14, "dim");

        //手动创建二叉树
        root.setLeft(node2);
        root.setRight(node3);
        node2.setLeft(node4);
        node2.setRight(node5);
        node3.setLeft(node6);

        ThreadedBinaryTree threadedBinaryTree = new ThreadedBinaryTree();
        threadedBinaryTree.setRoot(root);
        threadedBinaryTree.threadedNodes();

        //测试，以10号节点测试
        HeroNode leftNode = node5.getLeft();
        System.out.println(leftNode);
        HeroNode rightNode = node5.getRight();
        System.out.println(rightNode);
    }
}

/**
 * 定义二叉树
 */
class ThreadedBinaryTree {
    private HeroNode root;

    //为了实现线索化，需要创建要给指向当前节点的前驱节点的指针
    //在递归进行线索化时，pre总是保留前一个节点
    private HeroNode pre = null;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //重载
    public void threadedNodes(){
        this.threadedNodes(root);
    }
    /**
     * 对二叉树进行中序线索化的方法
     *
     * @param node 当前需要线索化的节点
     */
    public void threadedNodes(HeroNode node) {
        //如果node==null，不能线索化
        if (node == null) {
            return;
        }

        //先线索化左子树
        threadedNodes(node.getLeft());
        // 线索化当前节点(有难度)

        //处理当前节点的前驱节点
        if (node.getLeft() == null) {
            //让当前节点的左指针指向前驱节点
            node.setLeft(pre);
            //修改当前节点的左指针的类型，指向前驱节点
            node.setLeftType(1);
        }
        //处理后继节点
        if (pre != null && pre.getRight() == null){
            //让前驱节点的右指针指向当前节点
            pre.setRight(node);
            pre.setRightType(1);
        }

        //!!!每处理一个节点后，让当前节点是下一个节点的前驱节点
        pre = node;

        //先线索化右子树
        threadedNodes(node.getRight());
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

    //1. 如果leftType==0,表示指向的是左子树，如果是1则表示指向前去节点
    private int leftType;
    private int rightType;

    public int getLeftType() {
        return leftType;
    }

    public void setLeftType(int leftType) {
        this.leftType = leftType;
    }

    public int getRightType() {
        return rightType;
    }

    public void setRightType(int rightType) {
        this.rightType = rightType;
    }

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
## 遍历线索化二叉树
```java
package com.llw.datastructure.Algorithm.thread;

/**
 * 线索化二叉树
 * 2020/5/29 10:16 By Tinny
 */
public class ThreadedBinaryTreeDemo {
    public static void main(String[] args) {
        HeroNode root = new HeroNode(1, "tom");
        HeroNode node2 = new HeroNode(3, "jack");
        HeroNode node3 = new HeroNode(6, "smith");
        HeroNode node4 = new HeroNode(8, "mary");
        HeroNode node5 = new HeroNode(10, "king");
        HeroNode node6 = new HeroNode(14, "dim");

        //手动创建二叉树
        root.setLeft(node2);
        root.setRight(node3);
        node2.setLeft(node4);
        node2.setRight(node5);
        node3.setLeft(node6);

        ThreadedBinaryTree threadedBinaryTree = new ThreadedBinaryTree();
        threadedBinaryTree.setRoot(root);
        threadedBinaryTree.threadedNodes();

        //测试，以10号节点测试
        HeroNode leftNode = node5.getLeft();
        System.out.println(leftNode);
        HeroNode rightNode = node5.getRight();
        System.out.println(rightNode);

        //当线索化二叉树后，不能再使用原来的遍历方法
//        threadedBinaryTree.infixOrder();
        System.out.println("使用线索化的方式遍历");
        threadedBinaryTree.threadedList();
    }
}

/**
 * 定义二叉树
 */
class ThreadedBinaryTree {
    private HeroNode root;

    //为了实现线索化，需要创建要给指向当前节点的前驱节点的指针
    //在递归进行线索化时，pre总是保留前一个节点
    private HeroNode pre = null;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //重载
    public void threadedNodes(){
        this.threadedNodes(root);
    }

    //遍历线索化二叉树
    public void threadedList(){
        //定义一个变量，存储当前遍历的节点，从root开始
        HeroNode node = root;
        while (node != null) {
            //循环的找到leftType==1的节点，第一个找到就是8节点
            //后面随着遍历而变化，因为当leftType==1时，说明该节点是按照线索化
            //处理后的有效节点
            while (node.getLeftType() == 0) {
                node = node.getLeft();
            }

            //打印当前这个节点
            System.out.println(node);
            //如果当前节点的右指针指向的是后继节点，就一直输出
            while (node.getRightType() == 1) {
                //获取到当前节点的后继节点
                node = node.getRight();
                System.out.println(node);
            }
            //替换这个遍历的节点
            node = node.getRight();
        }
    }


    /**
     * 对二叉树进行中序线索化的方法
     *
     * @param node 当前需要线索化的节点
     */
    public void threadedNodes(HeroNode node) {
        //如果node==null，不能线索化
        if (node == null) {
            return;
        }

        //先线索化左子树
        threadedNodes(node.getLeft());
        // 线索化当前节点(有难度)

        //处理当前节点的前驱节点
        if (node.getLeft() == null) {
            //让当前节点的左指针指向前驱节点
            node.setLeft(pre);
            //修改当前节点的左指针的类型，指向前驱节点
            node.setLeftType(1);
        }
        //处理后继节点
        if (pre != null && pre.getRight() == null){
            //让前驱节点的右指针指向当前节点
            pre.setRight(node);
            pre.setRightType(1);
        }

        //!!!每处理一个节点后，让当前节点是下一个节点的前驱节点
        pre = node;

        //先线索化右子树
        threadedNodes(node.getRight());
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

    //1. 如果leftType==0,表示指向的是左子树，如果是1则表示指向前去节点
    private int leftType;
    private int rightType;

    public int getLeftType() {
        return leftType;
    }

    public void setLeftType(int leftType) {
        this.leftType = leftType;
    }

    public int getRightType() {
        return rightType;
    }

    public void setRightType(int rightType) {
        this.rightType = rightType;
    }

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