# 链表
链表是有序的列表，但是它在内存中是存储如下

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geyoo2r8jfj30dm0b1glx.jpg)
::: tip 小结
1. 链表是以节点的方式来存储,是链式存储
2. 每个节点包含 data 域， next 域：指向下一个节点.
3. 如图：发现链表的各个节点不一定是连续存储.
4. 链表分带头节点的链表和没有头节点的链表，根据实际的需求来确定
:::

## 单链表
单链表(带头结点) 逻辑结构示意图如下,他不是连续的，真是结构是前面的图的样子，并且最后一个元素指向空。
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geyorrt5xkj30ln0730ss.jpg)

### 单链表应用实例
使用带head头的单向链表实现 –水浒英雄排行榜管理
1. 完成对英雄人物的增删改查操作
2. 第一种方法在添加英雄时，直接添加到链表的尾部
3. 第二种方式在添加英雄时，根据排名将英雄插入到指定位置(如果有这个排名，则添加失败，并给出提示)



#### 第一种添加方式实现代码
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geyph8f2tjj31230j4q4l.jpg)

```java
package com.atguigu.mine;

/**
 * 2020/5/20 10:45 By Tinny
 */
public class SingleLinkedListDemo {
    public static void main(String[] args) {
        //进行测试，先创建节点
        HeroNode hero1= new HeroNode(1, "宋江", "及时雨");
        HeroNode hero2 = new HeroNode(2, "卢俊义", "玉麒麟");
        HeroNode hero3 = new HeroNode(3, "吴用", "智多星");
        HeroNode hero4 = new HeroNode(4, "林冲", "豹子头");

        SingleLinkedList singleLinkedList = new SingleLinkedList();

        singleLinkedList.add(hero1);
        singleLinkedList.add(hero4);
        singleLinkedList.add(hero2);
        singleLinkedList.add(hero3);
        singleLinkedList.list();
    }
}

// 创建SingleLinkedList来管理英雄
class SingleLinkedList{
    //    初始化头结点，头结点不动，不存放具体数据
    private HeroNode head = new HeroNode(0, "", "");
    //添加节点到单向链表
    // 思路，当不考虑编号序号时。1. 找到当前链表的最后节点 2. 将最后这个节点的next指向新的节点
    public void add(HeroNode heroNode){
     //   因为head节点不能动，因此我们需要一个辅助遍历temp
        HeroNode temp = head;
        // 遍历链表，找到最后
        while (true) {
            //找到链表的最后
            if (temp.next == null) {
                break;
            }
            //如果没有找到最后,就将temp后移
            temp = temp.next;
        }
        //当退出while循环时，temp就指向了链表的最后
        temp.next = heroNode;
    }

    /**
     * 显示链表
     */
    public void list(){
        //判断链表是否为空
        if (head.next == null) {
            System.out.println("链表为空");
            return;
        }
        HeroNode temp = head.next;
        while(true){
            //判断是否到链表最后
            if (temp == null) {
                break;
            }
            //输出节点的信息
            System.out.println(temp);
            //将temp后移
            temp = temp.next;
        }
    }
}


// 定义HeroNade，每一个HeroNode就是一个节点
class HeroNode{
    public int no;
    public String name;
    public String nickname;
    public HeroNode next; // 指向下一个节点

    // 构造器
    public HeroNode(int hNo,String hName,String hNickname){
        this.no = hNo;
        this.name = hName;
        this.nickname = hNickname;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
                '}';
    }
}
```

#### 第二种添加方式代码
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geytc1vpezj30x90ie3zs.jpg)

第二种方式只需要改变add方法
```java
public void addByOrder(HeroNode heroNode) {
    //因为是单链表，因此我们找的temp是位于添加位置的前一个节点，否则插入不了
    HeroNode temp = head;
    boolean flag = false;//flag标志添加的编号是否存在，默认为false
    while (true) {
        if (temp.next == null) {//说明temp已经循环到了链表的最后
            break;
        }
        if (temp.next.no > heroNode.no) {//位置找到，就在temp的后面插入
            break;
        } else if (temp.next.no == heroNode.no) {//编号以存在
            flag = true;
            break;
        }
        temp = temp.next;
    }
    //判断flag的值
    if (flag) {//不能添加，编号已经存在
        System.out.printf("准备插入的英雄编号 %d 已经存在,不能加入\n", heroNode.no);
    } else {
        //插入到链表中
        heroNode.next = temp.next;
        temp.next = heroNode;
    }
}
```

#### 修改节点
```java
/**
    * 修改节点的信息，根据no编号来修改，即no编号不能改
    * 1.  根据newHeroNode的no来修改即可。
    *
    * @param newHeroNode
    */
public void update(HeroNode newHeroNode) {
    //判断是否为空
    if (head.next == null) {
        System.out.println("链表为空~");
        return;
    }
    //根据no编号找到需要修改的节点
    //定义一个辅助变量
    HeroNode temp = head.next;
    boolean flag = false; //表示是否找到节点
    while (true) {
        if (temp == null) {
            break;//已经遍历完链表
        }
        if (temp.no == newHeroNode.no){
            //找到
            flag = true;
            break;
        }
        temp = temp.next;
    }
    //根据flag 判断是否找到需要修改的节点
    if (false) {
        temp.name = newHeroNode.name;
        temp.nickname = newHeroNode.nickname;
    }else {
        System.out.printf("没有找到%d的节点，不能修改\n",newHeroNode.no);
    }
```

#### 删除节点
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geyvptxjbjj30ws0dfmy6.jpg)

```java
//删除节点
//思路
//1. head 不能动，因此我们需要一个temp辅助节点找到待删除节点的前一个节点
//2. 说明我们在比较时，是temp.next.no 和  需要删除的节点的no比较
public void del(int no) {
    HeroNode temp = head;
    boolean flag = false; // 标志是否找到待删除节点的
    while(true) {
        if(temp.next == null) { //已经到链表的最后
            break;
        }
        if(temp.next.no == no) {
            //找到的待删除节点的前一个节点temp
            flag = true;
            break;
        }
        temp = temp.next; //temp后移，遍历
    }
    //判断flag
    if(flag) { //找到
        //可以删除
        temp.next = temp.next.next;
    }else {
        System.out.printf("要删除的 %d 节点不存在\n", no);
    }
}
```

### 单链表常见面试题
#### 求单链表中有效节点的个数
```java
public static int getLength(HeroNode head) {
    if(head.next == null) { //空链表
        return 0;
    }
    int length = 0;
    //定义一个辅助的变量, 这里我们没有统计头节点
    HeroNode cur = head.next;
    while(cur != null) {
        length++;
        cur = cur.next; //遍历
    }
    return length;
}
```

#### 查找单链表中的倒数第k个结点
```java
//查找单链表中的倒数第k个结点 【新浪面试题】
//思路
//1. 编写一个方法，接收head节点，同时接收一个index 
//2. index 表示是倒数第index个节点
//3. 先把链表从头到尾遍历，得到链表的总的长度 getLength
//4. 得到size 后，我们从链表的第一个开始遍历 (size-index)个，就可以得到
//5. 如果找到了，则返回该节点，否则返回nulll
public static HeroNode findLastIndexNode(HeroNode head, int index) {
    //判断如果链表为空，返回null
    if(head.next == null) {
        return null;//没有找到
    }
    //第一个遍历得到链表的长度(节点个数)
    int size = getLength(head);
    //第二次遍历  size-index 位置，就是我们倒数的第K个节点
    //先做一个index的校验
    if(index <=0 || index > size) {
        return null; 
    }
    //定义给辅助变量， for 循环定位到倒数的index
    HeroNode cur = head.next; //3 // 3 - 1 = 2
    for(int i =0; i< size - index; i++) {
        cur = cur.next;
    }
    return cur;
}
```

#### 单链表的反转
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geywz8f6dcj30xb0jxtad.jpg)

```java
//将单链表反转
public static void reversetList(HeroNode head) {
    //如果当前链表为空，或者只有一个节点，无需反转，直接返回
    if(head.next == null || head.next.next == null) {
        return ;
    }

    //定义一个辅助的指针(变量)，帮助我们遍历原来的链表
    HeroNode cur = head.next;
    HeroNode next = null;// 指向当前节点[cur]的下一个节点
    HeroNode reverseHead = new HeroNode(0, "", "");
    //遍历原来的链表，每遍历一个节点，就将其取出，并放在新的链表reverseHead 的最前端
    //动脑筋
    while(cur != null) {
        next = cur.next;//先暂时保存当前节点的下一个节点，因为后面需要使用

        cur.next = reverseHead.next;//将cur的下一个节点指向新的链表的最前端
        reverseHead.next = cur; //将cur 连接到新的链表上

        cur = next;//让cur后移
    }
    //将head.next 指向 reverseHead.next , 实现单链表的反转
    head.next = reverseHead.next;
}
```

#### 从尾到头打印单链表
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1geyz3lh2x6j30zf0cjq49.jpg)

```java
//方式2：
//可以利用栈这个数据结构，将各个节点压入到栈中，然后利用栈的先进后出的特点，就实现了逆序打印的效果
public static void reversePrint(HeroNode head) {
    if(head.next == null) {
        return;//空链表，不能打印
    }
    //创建要给一个栈，将各个节点压入栈
    Stack<HeroNode> stack = new Stack<HeroNode>();
    HeroNode cur = head.next;
    //将链表的所有节点压入栈
    while(cur != null) {
        stack.push(cur);
        cur = cur.next; //cur后移，这样就可以压入下一个节点
    }
    //将栈中的节点进行打印,pop 出栈
    while (stack.size() > 0) {
        System.out.println(stack.pop()); //stack的特点是先进后出
    }
}
````