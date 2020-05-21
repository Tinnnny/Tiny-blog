# 约瑟夫问题
Josephu问题为：设编号为1，2，… n的n个人围坐一圈，约定编号为k（1<=k<=n）的人从1开始报数，数到m 的那个人出列，它的下一位又从1开始报数，数到m的那个人又出列，依次类推，直到所有人出列为止，由此产生一个出队编号的序列。
- n = 5 , 即有5个人 
- k = 1, 从第一个人开始报数
- m = 2, 数2下

出圈的顺序2->4->1->5->3

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gezvqsugkwj30sv0akjrv.jpg)

## 单向循环链表构建和遍历
### 思路分析
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gezvvh0xq9j30qf0ea759.jpg)

### 代码实现
```java
/**
 * 约瑟夫问题
 * 2020/5/21 11:00 By Tinny
 */
public class Josepfu {
    public static void main(String[] args) {
        //测试环形列表
        CircleSingleLinkedList circleSingleLinkedList = new CircleSingleLinkedList();
        circleSingleLinkedList.addBoy(5);
        circleSingleLinkedList.showBoy();
    }
}

/**
 * 创建一个环形的单项链表
 */
class CircleSingleLinkedList {
    //创建一个first节点，当前没有编号
    private Boy first = new Boy(-1);

    /**
     * 添加小孩节点，构建成一个环形的链表
     *
     * @param nums
     */
    public void addBoy(int nums) {
//        做一个数据校验
        if (nums < 1) {
            System.out.println("nums的值不正确");
            return;
        }
        Boy curBoy = null; //辅助指针，帮助否建环形链表
        //使用for来创建环形链表
        for (int i = 1; i <= nums; i++) {
            //根据编号，创建小孩节点
            Boy boy = new Boy(i);
            //如果是第一个小孩
            if (i == 1) {
                first = boy;
                first.setNext(first);//构成环
                curBoy = first; //让curBoy指向第一个小孩
            } else {
                curBoy.setNext(boy);
                boy.setNext(first);
                curBoy = boy;
            }
        }
    }

    /**
     * 遍历当前的环形链表
     */
    public void showBoy() {
        //判断链表是否为空
        if (first == null) {
            System.out.println("没有任何小孩");
            return;
        }
        //因为first不能动，因此我们任然使用一个辅助指针来完成遍历
        Boy curBoy = first;
        while (true) {
            System.out.printf("小孩的编号 %d \n", curBoy.getNo());
            if (curBoy.getNext() == first) {
                break;
            }
            curBoy = curBoy.getNext();//curBoy后移
        }
    }
}

/**
 * 创建一个boy类，表示一个节点
 */
class Boy {
    private int no; //编号
    private Boy next;  //指向下一个节点

    public Boy(int no) {
        this.no = no;
    }
    //getter&setter..
}
```

## 出圈序列
### 思路分析
1. 创建一个辅助指针(变量)`helper`, 事先应该指向环形链表的最后这个节点.
补充：小孩报数前，先让`first`和`helper`移动`k - 1`次
2. 当小孩报数时，让`first`和`helper`指针同时 的移动`m  - 1`次
3. 这时就可以将first 指向的小孩节点出圈
  - first = first .next 
  - helper.next = first  
原来`first`指向的节点就没有任何引用，就会被回收


![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf033o7a86j31ca0bsadl.jpg)

### 代码实现
```java
/**
    * 根据用户的输入，计算出小孩出圈的顺序
    * @param startNo 表示从第几个小孩还是数数
    * @param countNum 表示数几下
    * @param nums 表示最初有多少小孩在圈中
    */
public void countBoy(int startNo, int countNum, int nums) {
    //先对数据进行校验
    if (first == null || startNo < 1 || startNo > nums) {
        System.out.println("参数输入有误，请重新输入");
    }
    //创建辅助指针，帮助完成小孩出圈
    Boy helper = first;
    //helper事先应该指向最后小孩节点
    while (true) {
        if (helper.getNext() == first) {//说明helper指向最后小孩节点
            break;
        }
        helper = helper.getNext();
    }
    //小孩报数钱，应让first和helper指针移动k-1次,如果是k=1，则不需移动
    for (int i = 0; i < startNo - 1; i++) {
        first = first.getNext();
        helper = helper.getNext();
    }
    //当小孩报数时，让first和helper指针同事移动m-1次，然后出圈
    //这是一个循环操作，直到圈中只有一个节点
    while (true) {
        if (helper==first){//说明圈中只有一个节点
            break;
        }
        //让first和helper指针同时移动countNum-1次
        for (int i = 0; i < countNum-1; i++) {
            first = first.getNext();
            helper = helper.getNext();
        }
        //这时first指向的节点，就是要出圈的小孩节点
        System.out.printf("小孩%d出圈\n", first.getNo());
        //这时将first指向的小孩出圈
        first = first.getNext();
        helper.setNext(first);
    }
    System.out.printf("最后留在圈中的小孩编号为%d \n", helper.getNo());
}
```
**验证**
```java
public static void main(String[] args) {
    //测试环形列表
    CircleSingleLinkedList circleSingleLinkedList = new CircleSingleLinkedList();
    circleSingleLinkedList.addBoy(5);
    circleSingleLinkedList.showBoy();

    circleSingleLinkedList.countBoy(1,2,5); //2>4>1>5>3
}
```