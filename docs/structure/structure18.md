# 哈希表
散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf7ytfogvoj30ey0d174g.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf7yw22qtjj30vy0a3js8.jpg)

## 需求
有一个公司,当有新的员工来报道时,要求将该员工的信息加入(id,性别,年龄,名字,住址..),当输入该员工的id时,要求查找到该员工的 所有信息.

**要求:** 
1. 不使用数据库,速度越快越好=>哈希表(散列)
2. 添加时，保证按照id从低到高插入，课后思考：如果id不是从低到高插入，但要求各条链表仍是从低到高，怎么解决?
3. 使用链表来实现哈希表, 该链表不带表头[即: 链表的第一个结点就存放雇员信息] 

### 思路分析
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf7yyei5frj30yi0ivtaf.jpg)

### 代码实现
```java
package com.llw.datastructure.Algorithm;

import org.omg.CORBA.PUBLIC_MEMBER;

import java.util.Scanner;

/**
 * 哈希表
 * 2020/5/28 10:51 By Tinny
 */
public class HashTableDemo {
    public static void main(String[] args) {
        HashTab hashTab = new HashTab(7);

        //写一个简单的菜单
        String key = "";
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("add:添加雇员");
            System.out.println("list： 显示雇员");
            System.out.println("exit：退出系统");
            System.out.println("find：查找雇员");

            key = scanner.next();
            switch (key) {
                case "add":
                    System.out.println("输入id");
                    int id = scanner.nextInt();
                    System.out.println("输入名字");
                    String name = scanner.next();
                    Emp emp = new Emp(id, name);
                    hashTab.add(emp);
                    break;
                case "list":
                    hashTab.list();
                    break;
                case "find":
                    System.out.println("请输入要查找的id");
                    id = scanner.nextInt();
                    hashTab.findEmpById(id);
                    break;
                case "exit":
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    break;
            }
        }
    }
}

/**
 * 创建HashTab 管理多条链表
 */
class HashTab {
    private EmpLinkedList[] empLinkedListArray;
    private int size;

    public HashTab(int size) {
        this.size = size;
        //初始化empLinkedListArray
        empLinkedListArray = new EmpLinkedList[size];
        //这时不要忘了分别初始化每个链表
        for (int i = 0; i < size; i++) {
            empLinkedListArray[i] = new EmpLinkedList();
        }
    }

    //添加雇员
    public void add(Emp emp) {
        //根据员工id，得到该员工应当添加到哪条链表
        int empLinketListNo = hashFun(emp.id);
        //将emp添加到对应的链表
        empLinkedListArray[empLinketListNo].add(emp);
    }

    //遍历所有的链表，遍历hashtab
    public void list() {
        for (int i = 0; i < size; i++) {
            empLinkedListArray[i].list(i);
        }
    }

    public int hashFun(int id) {
        return id % size;
    }

    public void findEmpById(int id) {
        int empLinketListNo = hashFun(id); //找到链表
        Emp emp = empLinkedListArray[empLinketListNo].findEmpById(id);
        if (emp != null) { //找到
            System.out.printf("在第%d条链表中找到雇员 id=%d\n", (empLinketListNo + 1), id);
        } else {
            System.out.println("在哈希表中，没有找到该雇员~ ");
        }
    }
}

/**
 * 表示一个雇员
 */
class Emp {
    public int id;
    public String name;
    public Emp next; //next默认为空

    public Emp(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

/**
 * 表示链表
 */
class EmpLinkedList {
    //头指针,执行第一个Emp,因此我们这个链表的head是直接指向第一个Emp
    private Emp head; // 默认null

    //添加雇员到链表
    // 1. 假定添加雇员时id是自增长的，即id的分配是从小到大的
    // 因此我们将该雇员直接加入到本链表的最后即可
    public void add(Emp emp) {
        //如果是添加第一个雇员
        if (head == null) {
            head = emp;
            return;
        }
        //如果不是第一个雇员,则使用一个辅助的指针,帮助定位到最后
        Emp curEmp = head;
        while (true) {
            if (curEmp.next == null) { //说明链表到最后
                break;
            }
            curEmp = curEmp.next; //后移
        }
        //退出时直接将emp加入到链表
        curEmp.next = emp;
    }

    // 遍历链表的雇员信息
    public void list(int no) {
        if (head == null) {
            System.out.println("第" + (no + 1) + "链表为空");
            return;
        }
        System.out.println("第" + (no + 1) + "链表信息为");
        Emp curEmp = head;
        while (true) {
            System.out.printf("=> id=%d name=%s\t", curEmp.id, curEmp.name);
            if (curEmp.next == null) { //说明链表到最后
                break;
            }
            curEmp = curEmp.next; //后移
        }
        System.out.println();
    }

    //根据id查找雇员
    public Emp findEmpById(int id) {
        //判断链表是否为空
        if (head == null) {
            System.out.println("链表为空");
            return null;
        }
        //辅助指针
        Emp curEmp = head;
        while (true) {
            if (curEmp.id == id) {//找到
                break;
            }
            if (curEmp.next == null) { //说明遍历当前链表没有找到该雇员
                curEmp = null;
                break;
            }
            curEmp = curEmp.next; //后移
        }
        return curEmp;
    }
}
```