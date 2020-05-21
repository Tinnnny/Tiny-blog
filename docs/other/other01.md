# windows下安装和启动redis服务
## Redis安装
redis的安装文件一般去github下载，在release下载想要的版本。可以选择msi或zip的方式安装。
### msi方式
双击运行msi安装文件，在中会有几个配置的地方，除了安装位置 可以改变外，其它的建议就按照默认的安装，不要更改。

### zip方式
下载后直接解压即可，zip解压后的文件和msi安装的文件是一模一样。

## Redis启动
在安装的文件夹下，按住shift键+鼠标右键，选择在此处打开命令窗口（也可以选择设置环境变量或者打开命令窗口，然后再进入当前目录）,第一次启动在命令行窗口输入以下命令即可启动。
```
redis-server.exe redis.windows.conf
```
但如果指令执行报错：
```
[13164] 27 Dec 20:57:07.820 # Creating Server TCP listening socket 127.0.0.1:637 9: bind: No error。
```
那么可以依次输入以下命令进行解决：
```
redis-cli.exe
shutdown
exit
redis-server.exe redis.windows.conf
```

最后显示Redis服务器的信息，就代表Redis服务器已经启动了。
