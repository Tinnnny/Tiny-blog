# synchronized 与 lock 的区别
- synchronized 和 lock 的用法区别
  - synchronized(隐式锁)：在需要同步的对象中加入此控制，synchronized 可以加在方法上，也可以加在特定代码块中，括号中表示需要锁的对象。
  - lock（显示锁）：需要显示指定起始位置和终止位置。一般使用 ReentrantLock 类做为锁，多个线程中必须要使用一个 ReentrantLock 类做为对象才能保证锁的生效。且在加锁和解锁处需要通过 lock() 和 unlock() 显示指出。所以一般会在 finally 块中写 unlock() 以防死锁。
- synchronized 和 lock 性能区别
  - synchronized 是托管给 JVM 执行的，而 lock 是 Java 写的控制锁的代码。在 JDK 1.5 中，synchronize 是性能低效的。因为这是一个重量级操作，需要调用操作接口，导致有可能加锁消耗的系统时间比加锁以外的操作还多。相比之下使用 Java 提供的 Lock 对象，性能更高一些。但是到了 JDK 1.6，发生了变化。synchronize 在语义上很清晰，可以进行很多优化，有适应自旋，锁消除，锁粗化，轻量级锁，偏向锁等等。导致在 JDK 1.6 上 synchronize 的性能并不比 Lock 差。

- synchronized 和 lock 机制区别
  - synchronized 原始采用的是 CPU 悲观锁机制，即线程获得的是独占锁。独占锁意味着其 他线程只能依靠阻塞来等待线程释放锁。
  - Lock 用的是乐观锁方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。乐观锁实现的机制就是 CAS 操作（Compare and Swap）。