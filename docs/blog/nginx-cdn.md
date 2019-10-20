---
title: "nginx反向代理cdn" 
---
# nginx反向代理cdn
### docker-compose.yml
`usr/local/docker/nginx`目录下，创建docker-compose.yml。

```
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 81:80
    volumes:
      - ./conf/nginx.conf:/etc/nginx/nginx.conf
      - ./wwwroot:/usr/share/nginx/wwwroot
```

### 配置
创建`/usr/local/docker/nginx/conf `目录下的 `nginx.conf` 配置文件：

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  192.168.27.136;

        location / {
            root   /usr/share/nginx/wwwroot/cdn;
            index  index.html index.htm;
        }
    }
}
```

### 移动资源文件 

    将模板文件放在` /usr/local/docker/nginx/wwwroot/cdn`文件夹下。

### 访问

在`nginx`文件夹下启动docker-compose，浏览器访问如`http://192.168.27.136:81/adminlte/v2.4.3/index2.html`即可获取静态资源。
