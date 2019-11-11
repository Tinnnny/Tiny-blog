---
title: "Spring Cloud Alibaba"
date: 2019年11月11日
---
# Spring Cloud Alibaba
## 概述
2018 年 10 月 31 日的凌晨，这个伟大的日子里，Spring Cloud Alibaba 正式入驻了 Spring Cloud 官方孵化器，并在 Maven 中央库发布了第一个版本。

Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。

依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。

[Spring Cloud Alibaba GitHub](https://github.com/alibaba/spring-cloud-alibaba)

## 主要功能

- 服务限流降级： 默认支持 Servlet、Feign、RestTemplate、Dubbo 和 RocketMQ 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级 Metrics 监控。
- 服务注册与发现： 适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。
- 分布式配置管理： 支持分布式系统中的外部化配置，配置更改时自动刷新。
- 消息驱动能力： 基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。
- 阿里云对象存储： 阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。
- 分布式任务调度： 提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。

::: tip 组件
- Sentinel： 把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。
- Nacos： 一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。
- RocketMQ： 一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。
- Dubbo： Apache Dubbo™ 是一款高性能 Java RPC 框架。
- Seata： 阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。
- Alibaba Cloud ACM： 一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心产品。
- Alibaba Cloud OSS： 阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。
- Alibaba Cloud SchedulerX： 阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。
- Alibaba Cloud SMS： 覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。
:::

## Spring Cloud Alibaba 已毕业
Spring Cloud Alibaba 已于 2019 年 7 月 30 日 从 Spring Cloud 孵化器中正式毕业并迎来了毕业的第一个版本，孵化器中的 Spring Cloud Alibaba 仓库迁移回 Alibaba 官方仓库，进行正式的毕业发布，对原有使用 Spring Cloud Alibaba 开发的项目影响如下：

### Maven 坐标修改
bom 由 `spring-cloud-alibaba-dependencies` 变更为 `alibaba-spring-cloud-dependencies`

maven groupid 由 `org.springframework.cloud` 变更为 `com.alibaba.cloud`

### Spring Cloud Alibaba
| 修改前                             | 修改后                                               |
|---------------------------------|---------------------------------------------------|
| sentinel starter                | spring\-cloud\-starter\-alibaba\-sentinel         | alibaba\-sentinel\-spring\-cloud\-starter         |
| nacos config starter            | spring\-cloud\-starter\-alibaba\-nacos\-config    | alibaba\-nacos\-config\-spring\-cloud\-starter    |
| nacos discovery starter         | spring\-cloud\-starter\-alibaba\-nacos\-discovery | alibaba\-nacos\-discovery\-spring\-cloud\-starter |
| seata starter                   | spring\-cloud\-starter\-alibaba\-seata            | alibaba\-seata\-spring\-cloud\-starter            |
| dubbo starter                   | spring\-cloud\-starter\-dubbo                     | dubbo\-spring\-cloud\-starter                     |
| rocketmq binder starter         | spring\-cloud\-starter\-stream\-rocketmq          | rocketmq\-stream\-spring\-cloud\-starter          |
| rocketmq bus module name        | spring\-cloud\-starter\-bus\-rocketmq             | rocketmq\-bus\-spring\-cloud\-starter             |
| sentinel module name            | spring\-cloud\-alibaba\-sentinel                  | alibaba\-sentinel\-spring\-cloud                  |
| sentinel datasource module name | spring\-cloud\-alibaba\-sentinel\-datasource      | alibaba\-sentinel\-datasource\-spring\-cloud      |
| sentinel gateway module name    | spring\-cloud\-alibaba\-sentinel\-gateway         | alibaba\-sentinel\-gateway\-spring\-cloud         |
| nacos config module name        | spring\-cloud\-alibaba\-nacos\-config             | alibaba\-nacos\-config\-spring\-cloud             |
| nacos discovery module name     | spring\-cloud\-alibaba\-nacos\-discovery          | alibaba\-nacos\-discovery\-spring\-cloud          |
| dubbo module name               | spring\-cloud\-alibaba\-dubbo                     | alibaba\-dubbo\-spring\-cloud                     |
| seata module name               | spring\-cloud\-alibaba\-seata                     | alibaba\-seata\-spring\-cloud                     |
| rocketmq binder module name     | spring\-cloud\-stream\-binder\-rocketmq           | rocketmq\-spring\-cloud\-stream\-binder           |

### Spring Cloud Alicloud(商业化组件)
| 修改前                    | 修改后                                 |
|------------------------|-------------------------------------|
| oss starter            | spring\-cloud\-alicloud\-oss        | alicloud\-oss\-spring\-cloud        |
| sms starter            | spring\-cloud\-alicloud\-sms        | alicloud\-sms\-spring\-cloud        |
| schedulerx starter     | spring\-cloud\-alicloud\-schedulerx | alicloud\-schedulerx\-spring\-cloud |
| ans starter            | spring\-cloud\-alicloud\-ans        | alicloud\-ans\-spring\-cloud        |
| acm starter            | spring\-cloud\-alicloud\-acm        | alicloud\-acm\-spring\-cloud        |
| oss module name        | spring\-cloud\-alicloud\-oss        | alicloud\-oss\-spring\-cloud        |
| sms module name        | spring\-cloud\-alicloud\-sms        | alicloud\-sms\-spring\-cloud        |
| schedulerx module name | spring\-cloud\-alicloud\-schedulerx | alicloud\-schedulerx\-spring\-cloud |
| ans module name        | spring\-cloud\-alicloud\-ans        | alicloud\-ans\-spring\-cloud        |
| acm module name        | spring\-cloud\-alicloud\-acm        | alicloud\-acm\-spring\-cloud        |
