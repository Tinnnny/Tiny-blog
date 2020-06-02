# 迷宫回溯问题
## 思路分析
![undefined](http://ww1.sinaimg.cn/large/005PyHfLly1gf3acu301vj307u07r74h.jpg)

说明: 
1. 小球得到的路径，和程序员设置的找路策略有关即：找路的上下左右的顺序相关
2. 再得到小球路径时，可以先使用(下右上左)，再改成(上右下左)，看看路径是不是有变化
3. 测试回溯现象

::: tip
如何求出最短路径? 
- 在没有更好的算法时，只能改变行走策略，比较寻找最小路径
:::

## 代码实现
```java
package com.llw.datastructure.Algorithm;

/**
 * 迷宫回溯问题
 * 2020/5/24 9:23 By Tinny
 */
public class MiGong {
    public static void main(String[] args) {
        //先创建一个二维数组，模拟迷宫
        int[][] map = new int[8][7];
        //使用1表示墙，上下全置为1
        for (int i = 0; i < 7; i++) {
            map[0][i] = 1;
            map[7][i] = 1;
        }
        //把左右置为1
        for (int i = 0; i < 8; i++) {
            map[i][0] = 1;
            map[i][6] = 1;
        }
        //设置挡板
        map[3][1] = 1;
        map[3][2] = 1;
        map[2][2] = 1;
        //输出地图
        System.out.println("地图的情况");
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 7; j++) {
                System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }

        //使用递归回溯给小球找路
        setWay(map, 1, 1);
        System.out.println("输出新的地图，小球走过，并标识过");
        //2组成的通路就是路径
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 7; j++) {
                System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }
    }

    /**
     * 1. 约定:当map[i][j] 为0 表示该点没有走过，1表示墙，2表示通路，3表示该点已经走过，但是走不通
     * 2. 在走迷宫时，需要确定一个策略 下->右->上->左，如果该点走不通，再回溯
     *
     * @param map 地图
     * @param i   出发点x坐标
     * @param j   出发点y坐标
     * @return 如果找到通路就返回true，[6,5]
     */
    public static boolean setWay(int[][] map, int i, int j) {
        if (map[6][5] == 2) { //如果终点是通路，表示成功
            return true;
        }else {
            if (map[i][j] == 0) { //如果这个点还没走过，就按照策略顺序走
                map[i][j]=2; //假定该点可以走通
                if (setWay(map,i+1,j)){ // 如果map[i][j]的下面一格走的通
                    return true;    //那么map[i][j]就能走得通
                } else if (setWay(map,i,j+1)){ //右边一格
                    return true;
                } else if (setWay(map,i-1,j)){ //上边一格
                    return true;
                }else if (setWay(map,i,j-1)){ //左边一格
                    return true;
                }else {
                    map[i][j]=3; //说明该点是死路，走不通
                    return false;
                }

            }else { //如果map[i][j]！=0,可能是1,2,3  如果是2说明走过了，也不用反复走了
                return false;
            }
        }
    }
}
```
```
地图的情况
1 1 1 1 1 1 1 
1 0 0 0 0 0 1 
1 0 1 0 0 0 1 
1 1 1 0 0 0 1 
1 0 0 0 0 0 1 
1 0 0 0 0 0 1 
1 0 0 0 0 0 1 
1 1 1 1 1 1 1 
输出新的地图，小球走过，并标识过
1 1 1 1 1 1 1 
1 2 2 2 0 0 1 
1 3 1 2 0 0 1 
1 1 1 2 0 0 1 
1 0 0 2 0 0 1 
1 0 0 2 0 0 1 
1 0 0 2 2 2 1 
1 1 1 1 1 1 1 
```