# TCP通信程序
## 概述
TCP通信能实现两台计算机之间的数据交互，通信的两端，要严格区分为客户端（Client）与服务端（Server）。

- 客户端：`java.net.Socket` 类表示。创建`Socket`对象，向服务端发出连接请求，服务端响应请求，两者建立连接开始通信。
- 服务端：`java.net.ServerSocket` 类表示。创建`ServerSocket`对象，相当于开启一个服务，并等待客户端的连接。

## Socket类  
Socket类实现客户端套接字，套接字指的是包含了IP地址和端口号的网络单位。

### 构造方法
* `public Socket(String host, int port)` :创建套接字对象并将其连接到指定主机上的指定端口号。如果指定的host是null ，则相当于指定地址为回送地址。  

```java
Socket client = new Socket("127.0.0.1", 6666);
```

  > 回送地址(127.x.x.x) 是本机回送地址（Loopback Address），主要用于网络软件测试以及本地机进程间通信，无论什么程序，一旦使用回送地址发送数据，立即返回，不进行任何网络传输。
### 成员方法:
- OutputStream getOutputStream() 返回此套接字的输出流。
- InputStream getInputStream() 返回此套接字的输入流。
- void close() 关闭此套接字。

## ServerSocket类
ServerSocket类实现了服务器套接字，该对象等待通过网络的请求。

### 构造方法
* `public ServerSocket(int port)` ：使用该构造方法在创建ServerSocket对象时，就可以将其绑定到一个指定的端口号上，参数port就是端口号。

```java
ServerSocket server = new ServerSocket(6666);
```
### 成员方法
* `public Socket accept()` ：侦听并接受连接，返回一个新的Socket对象，用于和客户端实现通信。该方法会一直阻塞直到建立连接。 

## 简单的TCP网络程序	
**客户端实现步骤:**
1. 创建一个客户端对象Socket,构造方法绑定服务器的IP地址和端口号
2. 使用Socket对象中的方法getOutputStream()获取网络字节输出流OutputStream对象
3. 使用网络字节输出流OutputStream对象中的方法write,给服务器发送数据
4. 使用Socket对象中的方法getInputStream()获取网络字节输入流InputStream对象
5. 使用网络字节输入流InputStream对象中的方法read,读取服务器回写的数据
6. 释放资源(Socket)

**服务器的实现步骤:**
1. 创建服务器ServerSocket对象和系统要指定的端口号
2. 使用ServerSocket对象中的方法accept,获取到请求的客户端对象Socket
3. 使用Socket对象中的方法getInputStream()获取网络字节输入流InputStream对象
4. 使用网络字节输入流InputStream对象中的方法read,读取客户端发送的数据
5. 使用Socket对象中的方法getOutputStream()获取网络字节输出流OutputStream对象
6. 使用网络字节输出流OutputStream对象中的方法write,给客户端回写数据
7. 释放资源(Socket,ServerSocket)

::: tip 注意
1. 客户端和服务器端进行交互,必须使用Socket中提供的网络流,不能使用自己创建的流对象
2. 当我们创建客户端对象Socket的时候,就会去请求服务器和服务器经过3次握手建立连接通路。这时如果服务器没有启动,那么就会抛出异常ConnectException: Connection refused: connect
:::
### 客户端向服务器发送数据
**服务端实现：**

```java
public class TCPServer {
    public static void main(String[] args) throws IOException {
        //1.创建服务器ServerSocket对象和系统要指定的端口号
        ServerSocket server = new ServerSocket(8888);
        //2.使用ServerSocket对象中的方法accept,获取到请求的客户端对象Socket
        Socket socket = server.accept();
        //3.使用Socket对象中的方法getInputStream()获取网络字节输入流InputStream对象
        InputStream is = socket.getInputStream();
        //4.使用网络字节输入流InputStream对象中的方法read,读取客户端发送的数据
        byte[] bytes = new byte[1024];
        int len = is.read(bytes);
        System.out.println(new String(bytes,0,len));
        //5.使用Socket对象中的方法getOutputStream()获取网络字节输出流OutputStream对象
        OutputStream os = socket.getOutputStream();
        //6.使用网络字节输出流OutputStream对象中的方法write,给客户端回写数据
        os.write("收到谢谢".getBytes());
        //7.释放资源(Socket,ServerSocket)
        socket.close();
        server.close();
    }
}
```

**客户端实现：**
```java
public class TCPClient {
    public static void main(String[] args) throws IOException {
        //1.创建一个客户端对象Socket,构造方法绑定服务器的IP地址和端口号
        Socket socket = new Socket("127.0.0.1",8888);
        //2.使用Socket对象中的方法getOutputStream()获取网络字节输出流OutputStream对象
        OutputStream os = socket.getOutputStream();
        //3.使用网络字节输出流OutputStream对象中的方法write,给服务器发送数据
        os.write("你好服务器".getBytes());

        //4.使用Socket对象中的方法getInputStream()获取网络字节输入流InputStream对象
        InputStream is = socket.getInputStream();

        //5.使用网络字节输入流InputStream对象中的方法read,读取服务器回写的数据
        byte[] bytes = new byte[1024];
        int len = is.read(bytes);
        System.out.println(new String(bytes,0,len));

        //6.释放资源(Socket)
        socket.close();
    }
}
```