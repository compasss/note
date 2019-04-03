---
layout: default
title: any
permalink: /any/any
has_children: true
---
# 其它知识点整理

1. npm 翻墙攻略
在项目根目录创建一个```.npmrc```的文件。（也可以在系统文件中全局创建，但不推荐）
在文件中按需要添加配置：
例如：
```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
所有的配置信息
```
[npm config](https://docs.npmjs.com/misc/config){:target="_blank"}
```