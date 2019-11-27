---
title: "2.两数相加"
date: 2019年11月22日12:09:33
---
# 两数相加
## 题目描述
> 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
> 
> 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
> 
> 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
```java
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```
::: tip listnode
- 在节点`ListNode定义`中，定义为节点为结构变量。
- 节点存储了两个变量：`value` 和 `next`。`value` 是这个节点的值，`next` 是指向下一节点的指针，当 `next `为空指针时，这个节点是链表的最后一个节点。
- 注意注意val只代表当前指针的值，比如`p->val`表示p指针的指向的值；而`p->next`表示链表下一个节点，也是一个指针。
- 构造函数包含两个参数 `_value` 和 `_next` ，分别用来给节点赋值和指定下一节点
:::

## 官方解答
<div align="center">
<img src="http://ww1.sinaimg.cn/large/007Rnr4nly1g97xc6d7uhj30i6075dfx.jpg">
</div>

伪代码如下：
- 将当前结点初始化为返回列表的哑结点。
- 将进位carry初始化为0。
- 将p和q分别初始化为列表l1和l2的头部。
- 遍历列表l1和l2直至到达它们的尾端。
  - 将x设为结点p的值。如果p已经到达l1的末尾，则将其值设置为0。
  - 将y设为结点q 的值。如果q 已经到达l2 的末尾，则将其值设置为0。
  - 设定sum=x+y+carry。
  - 更新进位的值，carry=sum/10。
  - 创建一个数值为(summod10) 的新结点，并将其设置为当前结点的下一个结点，然后将当前结点前进到下一个结点。
  - 同时，将 p和 q前进到下一个结点。
- 检查carry=1 是否成立，如果成立，则向返回列表追加一个含有数字1的新结点。
- 返回哑结点的下一个结点。

请注意，我们使用哑结点来简化代码。如果没有哑结点，则必须编写额外的条件语句来初始化表头的值。


```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    //将p和q分别初始化为列表l1和l2的头部,curr初始化为dummyHead的头部
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    //遍历到末端,把结果加出来
    while (p != null || q != null) {
        //如果p已经到达l1的末尾，则将其值设置为0。
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        //carry代表进位
        carry = sum / 10;
        //curr向后增长1位，value为总和的余数
        curr.next = new ListNode(sum % 10);
        //curr向后移动1位
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    //如果还有进位
    if (carry > 0) {
        //curr向后增长1位，value为进位
        curr.next = new ListNode(carry);
    }
    //返回curr
    return dummyHead.next;
}
```
