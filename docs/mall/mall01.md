# 后端项目基础模块搭建
## 根目录创建
打开IDEA新建maven项目并删除Src及以下所有目录。

![undefined](http://ww1.sinaimg.cn/large/005PyHfLgy1gci3f4ucqnj308406udfs.jpg)

**pom文件**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>mall</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>pom</packaging>

    <modules>
        <module>mall-common</module>
        <module>mall-mbg</module>
        <module>mall-demo</module>
        <module>mall-admin</module>
        <module>mall-search</module>
        <module>mall-portal</module>
        <module>mall-security</module>
    </modules>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.7.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
        <skipTests>true</skipTests>
        <docker.host>http://192.168.3.101:2375</docker.host>
        <docker.maven.plugin.version>1.1.0</docker.maven.plugin.version>
        <pagehelper-starter.version>1.2.10</pagehelper-starter.version>
        <pagehelper.version>5.1.8</pagehelper.version>
        <druid.version>1.1.10</druid.version>
        <hutool.version>4.5.7</hutool.version>
        <swagger2.version>2.7.0</swagger2.version>
        <mybatis.version>3.4.6</mybatis.version>
        <mysql-connector.version>8.0.15</mysql-connector.version>
        <spring-data-commons.version>2.1.5.RELEASE</spring-data-commons.version>
        <jjwt.version>0.9.0</jjwt.version>
        <aliyun-oss.version>2.5.0</aliyun-oss.version>
        <logstash-logback.version>4.8</logstash-logback.version>
        <minio.version>3.0.10</minio.version>
        <mall-common.version>0.0.1-SNAPSHOT</mall-common.version>
        <mall-mbg.version>0.0.1-SNAPSHOT</mall-mbg.version>
        <mall-security.version>0.0.1-SNAPSHOT</mall-security.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <!--mall通用模块-->
            <dependency>
                <groupId>com.example.mall</groupId>
                <artifactId>mall-common</artifactId>
                <version>${mall-common.version}</version>
            </dependency>
            <!--mall中MBG生成模块-->
            <dependency>
                <groupId>com.example.mall</groupId>
                <artifactId>mall-mbg</artifactId>
                <version>${mall-mbg.version}</version>
            </dependency>
            <!--mall安全模块-->
            <dependency>
                <groupId>com.example.mall</groupId>
                <artifactId>mall-security</artifactId>
                <version>${mall-security.version}</version>
            </dependency>
            <!--MyBatis分页插件starter-->
            <dependency>
                <groupId>com.github.pagehelper</groupId>
                <artifactId>pagehelper-spring-boot-starter</artifactId>
                <version>${pagehelper-starter.version}</version>
            </dependency>
            <!--MyBatis分页插件-->
            <dependency>
                <groupId>com.github.pagehelper</groupId>
                <artifactId>pagehelper</artifactId>
                <version>${pagehelper.version}</version>
            </dependency>
            <!--集成druid连接池-->
            <dependency>
                <groupId>com.alibaba</groupId>
                <artifactId>druid-spring-boot-starter</artifactId>
                <version>${druid.version}</version>
            </dependency>
            <!--Hutool Java工具包-->
            <dependency>
                <groupId>cn.hutool</groupId>
                <artifactId>hutool-all</artifactId>
                <version>${hutool.version}</version>
            </dependency>
            <!--Swagger-UI API文档生产工具-->
            <dependency>
                <groupId>io.springfox</groupId>
                <artifactId>springfox-swagger2</artifactId>
                <version>${swagger2.version}</version>
            </dependency>
            <dependency>
                <groupId>io.springfox</groupId>
                <artifactId>springfox-swagger-ui</artifactId>
                <version>${swagger2.version}</version>
            </dependency>
            <!-- MyBatis-->
            <dependency>
                <groupId>org.mybatis</groupId>
                <artifactId>mybatis</artifactId>
                <version>${mybatis.version}</version>
            </dependency>
            <!--Mysql数据库驱动-->
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>${mysql-connector.version}</version>
            </dependency>
            <!--SpringData工具包-->
            <dependency>
                <groupId>org.springframework.data</groupId>
                <artifactId>spring-data-commons</artifactId>
                <version>${spring-data-commons.version}</version>
            </dependency>
            <!--JWT(Json Web Token)登录支持-->
            <dependency>
                <groupId>io.jsonwebtoken</groupId>
                <artifactId>jjwt</artifactId>
                <version>${jjwt.version}</version>
            </dependency>
            <!-- 阿里云OSS -->
            <dependency>
                <groupId>com.aliyun.oss</groupId>
                <artifactId>aliyun-sdk-oss</artifactId>
                <version>${aliyun-oss.version}</version>
            </dependency>
            <!--集成logstash-->
            <dependency>
                <groupId>net.logstash.logback</groupId>
                <artifactId>logstash-logback-encoder</artifactId>
                <version>${logstash-logback.version}</version>
            </dependency>
            <!--MinIO JAVA SDK-->
            <dependency>
                <groupId>io.minio</groupId>
                <artifactId>minio</artifactId>
                <version>${minio.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```
pom文件中需要手动添加`<packaging>pom</packaging>`的打包方式，除了根项目以外，其他模块都以jar的方式打包。

该pom中配置了以后会用到的依赖的版本号。

## 模块创建 
在mall项目中分别以spring初始化器新建mall-admin,mall-common,mall-mbg,mall-demo,mall-search,mall-portal，mall-security模块。先不选择任何依赖，以后用到什么依赖再手动添加。

其中mall-common，mall-mbg和mall-security的application方法可以删去。

![1583555442(1).png](http://ww1.sinaimg.cn/large/005PyHfLgy1gcl96jsl1vj30a90fpwep.jpg)

下面分别是各个模块的pom文件：

### mall-admin
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-admin</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-admin</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### mall-common
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-common</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-common</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>
</project>
```

### mall-demo
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-demo</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```
### mall-mbg
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-mbg</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-mbg</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>
</project>
```

### mall-portal
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-portal</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-portal</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### mall-search
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>


    <groupId>com.example.mall</groupId>
    <artifactId>mall-search</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-search</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### mall-security
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.mall</groupId>
    <artifactId>mall-security</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>mall-security</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>mall</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>
</project>
```
