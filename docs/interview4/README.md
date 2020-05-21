# 说说线程安全问题
线程安全是多线程领域的问题，线程安全可以简单理解为一个方法或者一个实例可以在多线程环境中使用而不会出现问题。

在 Java 多线程编程当中，提供了多种实现 Java 线程安全的方式：
- 最简单的方式，使用 Synchronization 关键字
- 使用 java.util.concurrent.atomic 包中的原子类，例如 AtomicInteger
- 使用 java.util.concurrent.locks 包中的锁
- 使用线程安全的集合 ConcurrentHashMap
- 使用 volatile 关键字，保证变量可见性（直接从内存读，而不是从线程 cache 读）