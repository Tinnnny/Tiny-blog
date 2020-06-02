# 栈
栈的英文为(stack),是一个先入后出(FILO-First In Last Out)的有序列表。

栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Bottom)。

根据栈的定义可知，最先放入栈中元素在栈底，最后放入的元素在栈顶，而删除元素刚好相反，最后放入的元素最先删除，最先放入的元素最后删除。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf09bzev5gj30ed07i75a.jpg)

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf09c7fep3j30l806umyj.jpg)

## 栈的应用场景
1. 子程序的调用：在跳往子程序前，会先将下个指令的地址存到堆栈中，直到子程序执行完后再将地址取出，以回到原来的程序中。 	
2. 处理递归调用：和子程序的调用类似，只是除了储存下一个指令的地址外，也将参数、区域变量等数据存入堆栈中。
3. 表达式的转换`[中缀表达式转后缀表达式]`与求值(实际解决)。
4. 二叉树的遍历。
5. 图形的深度优先(depth一first)搜索法。

## 数组模拟栈
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf0a14225bj30ui0gtdha.jpg)

```java
package com.llw.datastructure;

import java.util.Scanner;

/**
 * 数组模拟栈
 * 2020/5/21 19:05 By Tinny
 */
public class ArrayStackDemo {
    public static void main(String[] args) {
        //测试一下ArrayStack是否正确
        ArrayStack stack = new ArrayStack(4);
        String key = "";
        boolean loop = true;
        Scanner scanner = new Scanner(System.in);
        while (loop) {
            System.out.println("show:显示栈");
            System.out.println("exit:退出栈");
            System.out.println("push:添加数据");
            System.out.println("pop:取出数据");
            System.out.println("请输入：");
            key = scanner.next();
            switch (key) {
                case "show":
                    stack.list();
                    break;
                case "push":
                    System.out.println("输入一个数");
                    int value = scanner.nextInt();
                    stack.push(value);
                    break;
                case "pop":
                    try {
                        int res = stack.pop();
                        System.out.println("出栈的数据为" + res);
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case "exit":
                    scanner.close();
                    loop = false;
                default:
                    break;
            }
        }
        System.out.println("程序退出");
    }
}

/**
 * 定义一个类表示栈
 */
class ArrayStack{
    private int maxSize; //栈的大小
    private int[] stack; //数组，模拟栈，数据放在该数组
    private int top = -1; //top 表示栈顶，初始化为-1

    //构造器
    public ArrayStack(int maxSize) {
        this.maxSize = maxSize;
        stack = new int[this.maxSize];
    }

    //栈满
    public boolean isFull(){
        return top == maxSize - 1;
    }

    //栈空
    public boolean isEmpty(){
        return top == -1;
    }

    //入栈-push
    public void push(int value) {
        //先判断栈是否满
        if (isFull()) {
            System.out.println("栈满");
            return;
        }
        top++;
        stack[top] = value;
    }

    //出栈-pop,将栈顶的数据返回
    public int pop(){
        //先判断栈是否为空
        if (isEmpty()) {
            //抛出异常
            throw new RuntimeException("栈空，没有数据");
        }
        int value = stack[top];
        top--;
        return value;
    }
    //显示栈的情况[遍历栈]，遍历时，需要从栈顶开始显示数据
    public void list(){
        if (isEmpty()) {
            System.out.println("没有数据，栈空");
            return;
        }
        for (int i = top; i >= 0; i--) {
            System.out.printf("stack[%d]=%d\n",i,stack[i]);
        }
    }
}
```

## 使用栈完成表达式的计算
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf148a7rl0j30we0df75z.jpg)

### 代码实现
```java
package com.llw.datastructure;

/**
 * 栈实现综合计算器
 * 2020/5/22 12:30 By Tinny
 */
public class Calculator {
    public static void main(String[] args) {

        String expression = "30+20*6-2";
        //创建两个栈，数栈和符号栈
        ArrayStack2 numStack = new ArrayStack2(10);
        ArrayStack2 operStack = new ArrayStack2(10);
        //定义相关变量
        int index = 0; //用于扫描
        int num1 = 0;
        int num2 = 0;
        int oper = 0;
        int res = 0;
        String keepNum = "";//用于拼接多位数
        char ch = ' ';//将每次扫描得到char保存到ch
        //开始while循环扫描expression
        while (true) {
            //一次得到expression的每个字符
            ch = expression.substring(index, index + 1).charAt(0);
            //判断ch是什么，然后做相应的处理
            if (operStack.isOper(ch)) {//如果是运算符
                //判断当前的符号栈是否为空
                if (!operStack.isEmpty()) {
                    //如果符号栈有操作符，就进行比较,如果当前的操作符的优先级小于或者等于栈中的操作符，
                    // 就需要从数栈中pop出两个数,在从符号栈中pop出一个符号，进行运算，将得到结果，
                    // 入数栈，然后将当前的操作符入符号栈，
                    if (operStack.priority(ch) <= operStack.priority(operStack.peek())) {
                        num1 = numStack.pop();
                        num2 = numStack.pop();
                        oper = operStack.pop();
                        res = numStack.cal(num1, num2, oper);
                        //把运算的结果入数栈
                        numStack.push(res);
                        //把当前操作符入符号栈
                        operStack.push(ch);
                    }else {
                        //如果当前操作符的优先级大于栈中的操作符，就直接入符号栈
                        operStack.push(ch);
                    }
                }else {
                    //如果为空直接入符号栈
                    operStack.push(ch);
                }
            }else {//如果是数，就直接入数栈
                   // numStack.push(ch-48);
                //分析思路：1.当处理多位数时，不能扫描到一个数就立即入栈，因为可能是多位数
                //2. 在处理数，需要向expression的表达式的index再向后看一位，如果是数就进行扫描，是符号才入栈
                //3. 因此我们要定义一个字符串用于拼接
                keepNum += ch;
                //如果ch已经是expression的最后一位,就直接入栈
                if (index == expression.length() - 1) {
                    numStack.push(Integer.parseInt(keepNum));
                }else {
                    //判断下一个字符是不是数字，如果是数字就继续扫描，如果是运算符则入栈
                    //注意是看后一位，不是index++
                    if (operStack.isOper(expression.substring(index + 1, index + 2).charAt(0))) {
                        //如果后一位是运算符，则入栈keepNum="1"或者"123"
                        numStack.push(Integer.parseInt(keepNum));
                        //重要！！！，keepNum清空
                        keepNum = "";
                    }
                }

            }
            //让index+1,并且判断是否扫描到expression最后
            index++;
            if (index >= expression.length()) {
                break;
            }
        }
        //当表达式扫描完毕，就顺序的从 数栈和符号栈中pop出相应的数和符号，并运行
        while (true) {
            //如果符号栈为空，则计算到最后的结果，数栈中只有一个数字（结果）
            if (operStack.isEmpty()) {
                break;
            }
            num1 = numStack.pop();
            num2 = numStack.pop();
            oper = operStack.pop();
            res = numStack.cal(num1, num2, oper);
            //把运算的结果入数栈
            numStack.push(res);
        }
        System.out.printf("表达式%s = %d ",expression,numStack.pop());
    }
}

/**
 * 定义一个类表示栈，需要扩展功能
 */
class ArrayStack2 {
    private int maxSize; //栈的大小
    private int[] stack; //数组，模拟栈，数据放在该数组
    private int top = -1; //top 表示栈顶，初始化为-1

    //构造器
    public ArrayStack2(int maxSize) {
        this.maxSize = maxSize;
        stack = new int[this.maxSize];
    }

    //栈满
    public boolean isFull() {
        return top == maxSize - 1;
    }

    //栈空
    public boolean isEmpty() {
        return top == -1;
    }

    //入栈-push
    public void push(int value) {
        //先判断栈是否满
        if (isFull()) {
            System.out.println("栈满");
            return;
        }
        top++;
        stack[top] = value;
    }

    //出栈-pop,将栈顶的数据返回
    public int pop() {
        //先判断栈是否为空
        if (isEmpty()) {
            //抛出异常
            throw new RuntimeException("栈空，没有数据");
        }
        int value = stack[top];
        top--;
        return value;
    }

    //显示栈的情况[遍历栈]，遍历时，需要从栈顶开始显示数据
    public void list() {
        if (isEmpty()) {
            System.out.println("没有数据，栈空");
            return;
        }
        for (int i = top; i >= 0; i--) {
            System.out.printf("stack[%d]=%d\n", i, stack[i]);
        }
    }

    //返回运算符的优先级，优先级是程序员定的，优先级用数字表示，数字越大则优先级越高
    public int priority(int oper) {
        if (oper == '*' || oper == '/') {
            return 1;
        } else if (oper == '+' || oper == '-') {
            return 0;
        } else {
            return -1; //假定表达式只有+——*/
        }
    }

    //判断是不是一个运算符
    public boolean isOper(char val) {
        return val == '*' || val == '/' || val == '+' || val == '-';
    }

    //计算方法
    public int cal(int num1, int num2, int oper) {
        int res = 0; //res用于存放计算的结果
        switch (oper) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num2 - num1;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 / num1;
                break;
            default:
                break;
        }
        return res;
    }

    //返回当前栈顶的值，但不是pop
    public int peek(){
        return stack[top];
    }
}
```

## 前缀、中缀、后缀表达式(逆波兰表达式)
### 前缀表达式(波兰表达式)
前缀表达式又称波兰式，前缀表达式的运算符位于操作数之前。
举例说明： (3+4)×5-6 对应的前缀表达式就是 - × + 3 4 5 6

#### 前缀表达式的计算机求值
从右至左扫描表达式，遇到数字时，将数字压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（栈顶元素 和 次顶元素），并将结果入栈；重复上述过程直到表达式最左端，最后运算得出的值即为表达式的结果

例如: (3+4)×5-6 对应的前缀表达式就是 - × + 3 4 5 6 , 针对前缀表达式求值步骤如下:

1. 从右至左扫描，将6、5、4、3压入堆栈
2. 遇到+运算符，因此弹出3和4（3为栈顶元素，4为次顶元素），计算出3+4的值，得7，再将7入栈
3. 接下来是×运算符，因此弹出7和5，计算出7×5=35，将35入栈
4. 最后是-运算符，计算出35-6的值，即29，由此得出最终结果

### 中缀表达式
中缀表达式就是常见的运算表达式，如(3+4)×5-6。

中缀表达式的求值是我们人最熟悉的，但是对计算机来说却不好操作(前面我们讲的案例就能看的这个问题)，因此，在计算结果时，往往会将中缀表达式转成其它表达式来操作(一般转成后缀表达式.)

### 后缀表达式
后缀表达式又称逆波兰表达式,与前缀表达式相似，只是运算符位于操作数之后。举例说明： (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 –

| 正常的表达式         | 逆波兰表达式           |
|----------------|------------------|
| a\+b           | a b \+           |
| a\+\(b\-c\)    | a b c \- \+      |
| a\+\(b\-c\)\*d | a b c – d \* \+  |
| a\+d\*\(b\-c\) | a d b c \- \* \+ |
| a=1\+3         | a 1 3 \+ =       |

#### 后缀表达式计算机求值
从左至右扫描表达式，遇到数字时，将数字压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（次顶元素 和 栈顶元素），并将结果入栈；重复上述过程直到表达式最右端，最后运算得出的值即为表达式的结果

例如: (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 - , 针对后缀表达式求值步骤如下:

1. 从左至右扫描，将3和4压入堆栈；
2. 遇到+运算符，因此弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈；
3. 将5入栈；
4. 接下来是×运算符，因此弹出5和7，计算出7×5=35，将35入栈；
5. 将6入栈；
6. 最后是-运算符，计算出35-6的值，即29，由此得出最终结果

## 逆波兰计算器
```java
package com.llw.datastructure;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Stack;

/**
 * 波兰表达式
 * 2020/5/22 14:45 By Tinny
 */
public class PolandNotation {
    public static void main(String[] args) {
        //定义一个逆波兰表达式
        //(3+4)×5-6 =>3 4 + 5 * 6 -
        //为了方便，逆波兰表达式的数字和符号使用空格隔开
        String suffixExpression = "3 4 + 5 * 6 -";
        //思路
        //1.先将3 4 + 5 * 6 - =>放到ArrayList中
        //2.将ArrayList传递给一个方法，遍历ArrayList 配合栈完成计算
        List<String> rpnList = getListString(suffixExpression);
        System.out.println("rpnList="+rpnList);
        int res = calculate(rpnList);
        System.out.println(res);
    }

    //将一个逆波兰表达式，依次将数据和运算符放入到ArrayList
    public static List<String> getListString(String suffixExpression){
        //将suffixExpression 分割
        String[] split = suffixExpression.split(" ");
        List<String> list = new ArrayList<>();
        Collections.addAll(list, split);
        return list;
    }

    //完成对逆波兰表达式的运算

    /**
     * 从左至右扫描，将3和4压入堆栈；
     * 遇到+运算符，因此弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈；
     * 将5入栈；
     * 接下来是×运算符，因此弹出5和7，计算出7×5=35，将35入栈；
     * 将6入栈；
     * 最后是-运算符，计算出35-6的值，即29，由此得出最终结果
     */
    public static int calculate(List<String> ls) {
        //创建给栈，只需要一个栈即可
        Stack<String> stack = new Stack<>();
        //遍历 ls
        for (String item : ls) {
            //这里使用正则表达式来取出数
            if (item.matches("\\d+")){
                stack.push(item);
            }else {
                //pop出两个数，并运算，再入栈
                int num2 = Integer.parseInt(stack.pop());
                int num1 = Integer.parseInt(stack.pop());
                int res = 0;
                if (item.equals("+")) {
                    res = num1 + num2;
                }else if (item.equals("-")){
                    res = num1 - num2;
                }else if (item.equals("*")){
                    res = num1 * num2;
                }else if (item.equals("/")){
                    res = num1 / num2;
                }else{
                    throw new RuntimeException("运算符有误");
                }
                //把res入栈
                stack.push(""+res);
            }
        }
        //最后的数是结果
        return Integer.parseInt(stack.pop());
    }
}
```

## 中缀表达式转换为后缀表达式
在开发中，我们需要将 中缀表达式转成后缀表达式。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf2g323h6hj30yj0ijjvd.jpg)

### 代码实现
```java
package com.llw.datastructure;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Stack;

/**
 * 波兰表达式
 * 2020/5/22 14:45 By Tinny
 */
public class PolandNotation {
    public static void main(String[] args) {

        //完成一个将中缀表达式转成后缀表达式的功能
        //1. 1+((2+3)*4)-5  => 转成 1 2 3 + 4 * + 5 -
        //2. 因为直接对str进行操作不方便，因此将"1+((2+3)*4)-5" 先转换成对应的List
        //即 "1+((2+3)*4)-5" => ArrayList[1,+,(,(,2...]
        //3. 将得到的中缀表达式对应的List=>后缀表达式对应的List
        //即ArrayList[1, +, (, (, 2, +, 3, ), *, 4, ), -, 5] =>ArrayList[1,2,3,+,4,*,+,5,-]
        String expression = "1+((2+3)*4)-5";
        List<String> infixExpressionList = toInfixExpressionList(expression);
        System.out.println("中缀表达式"+infixExpressionList);
        List<String> suffixExpressionList = parseSuffixExpressionList(infixExpressionList);
        System.out.println("后缀表达式"+suffixExpressionList);
        System.out.printf("expression=%d", calculate(suffixExpressionList));

        //定义一个逆波兰表达式
        //(3+4)×5-6 =>3 4 + 5 * 6 -
        //为了方便，逆波兰表达式的数字和符号使用空格隔开
//        String suffixExpression = "3 4 + 5 * 6 -";
        //思路
        //1.先将3 4 + 5 * 6 - =>放到ArrayList中
        //2.将ArrayList传递给一个方法，遍历ArrayList 配合栈完成计算
//        List<String> rpnList = getListString(suffixExpression);
//        System.out.println("rpnList=" + rpnList);
//        int res = calculate(rpnList);
//        System.out.println(res);
    }

    //方法，将得到的中缀表达式对应的List=>后缀表达式对应的List
    public static List<String> parseSuffixExpressionList(List<String> ls) {
        //定义两个栈
        Stack<String> s1 = new Stack<>(); //符号栈
        //说明：s2这个栈，在转换过程中没有pop结果，而且后面还要逆序输出
        //因此比较麻烦，直接用ArrayList
//        Stack<String> s2 = new Stack<>(); //储存中间结果的栈
        List<String> s2 = new ArrayList<>();

        //遍历ls
        for (String item : ls) {
            if (item.matches("\\d+")) { // 如果是一个数，加入s2
                s2.add(item);
            } else if (item.equals("(")) {  //如果遇到"(",就直接入栈s1
                s1.push(item);
            } else if (item.equals(")")) {//如果是右括号，则依次弹出s1栈顶的运算符，并压入s2，
                // 直到遇到左括号为止，此时将这一对括号丢弃
                //peek方法：Looks at the object at the top of this stack without removing it from the stack.
                while (!s1.peek().equals("(")) {
                    s2.add(s1.pop());
                }
                s1.pop(); //！！！ 将"("弹出s1栈，消除小括号
            } else {
                //当item的优先级小于等于s1栈顶运算符，将s1栈顶的运算符弹出并加入到s2中
                //再次转到(4.1)与s1中新的栈顶运算符相比较
                while (s1.size() != 0 && Operation.getValue(s1.peek()) >= Operation.getValue(item)) {
                    s2.add(s1.pop());
                }
                //还需要将item压入栈
                s1.push(item);
            }
        }
        //将s1中剩余的运算符依次弹出并加入s2
        while (s1.size() != 0) {
            s2.add(s1.pop());
        }
        return s2; //因为是存放到一个list中，因此正常按顺序输出就是结果了
    }


    //方法，将中缀表达式转换成对应的List
    public static List<String> toInfixExpressionList(String s) {
        //定义一个List，放中缀表达式对应的内容
        List<String> ls = new ArrayList<String>();
        int i = 0;  //这是一个指针，用于遍历中缀表达式字符串
        String str;  //对多位数字的拼接
        char c; //每遍历一个字符，就放入到c
        do {
            //如果c是一个非数字，就加入到ls
            if ((c = s.charAt(i)) < 48 || (c = s.charAt(i)) > 57) {
                ls.add("" + c);
                i++;
            } else {//如果是一个数，需要考虑多位数的问题
                str = "";//先将str置成"" '0'[48] -> '9'[57]
                while (i < s.length() && (c = s.charAt(i)) >= 48 && (c = s.charAt(i)) <= 57) {
                    str += c;
                    i++;
                }
                ls.add(str);
            }
        } while (i < s.length());
        return ls;
    }

    //将一个逆波兰表达式，依次将数据和运算符放入到ArrayList
    public static List<String> getListString(String suffixExpression) {
        //将suffixExpression 分割
        String[] split = suffixExpression.split(" ");
        List<String> list = new ArrayList<>();
        Collections.addAll(list, split);
        return list;
    }

    //完成对逆波兰表达式的运算

    /**
     * 从左至右扫描，将3和4压入堆栈；
     * 遇到+运算符，因此弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈；
     * 将5入栈；
     * 接下来是×运算符，因此弹出5和7，计算出7×5=35，将35入栈；
     * 将6入栈；
     * 最后是-运算符，计算出35-6的值，即29，由此得出最终结果
     */
    public static int calculate(List<String> ls) {
        //创建给栈，只需要一个栈即可
        Stack<String> stack = new Stack<>();
        //遍历 ls
        for (String item : ls) {
            //这里使用正则表达式来取出数
            if (item.matches("\\d+")) {
                stack.push(item);
            } else {
                //pop出两个数，并运算，再入栈
                int num2 = Integer.parseInt(stack.pop());
                int num1 = Integer.parseInt(stack.pop());
                int res = 0;
                if (item.equals("+")) {
                    res = num1 + num2;
                } else if (item.equals("-")) {
                    res = num1 - num2;
                } else if (item.equals("*")) {
                    res = num1 * num2;
                } else if (item.equals("/")) {
                    res = num1 / num2;
                } else {
                    throw new RuntimeException("运算符有误");
                }
                //把res入栈
                stack.push("" + res);
            }
        }
        //最后的数是结果
        return Integer.parseInt(stack.pop());
    }
}

//编写一个类Operation 可以返回一个运算符对应的优先级
class Operation {
    private static int ADD = 1;
    private static int SUB = 1;
    private static int MUL = 2;
    private static int DIV = 2;

    //写一个方法，返回对应的优先级数字
    public static int getValue(String operation) {
        int result = 0;
        switch (operation) {
            case "+":
                result = ADD;
                break;
            case "-":
                result = SUB;
                break;
            case "*":
                result = MUL;
                break;
            case "/":
                result = DIV;
                break;
            default:
                System.out.println("不存在该运算符");
                break;
        }
        return result;
    }
}
```
