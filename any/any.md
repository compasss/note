---
layout: default
title: any
permalink: /any/any
has_children: true
date: 2019-04-29 10:38:00
---
# 其它知识点整理

1. npm 翻墙攻略
在项目根目录创建一个```.npmrc```的文件。（也可以在系统文件中全局创建，但不推荐）
在文件中按需要添加配置：
例如：
``` yml
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
所有的配置信息
```
[npm config](https://docs.npmjs.com/misc/config){:target="_blank"}
```

+ 推荐配置
``` yml

registry https://registry.npm.taobao.org # 注册模块镜像
disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver # chromedriver 二进制包镜像
operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver # operadriver 二进制包镜像
phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs # phantomjs 二进制包镜像
fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents # fsevents 二进制包
sass_binary_site http://cdn.npm.taobao.org/dist/node-sass # node-sass 二进制包镜像
electron_mirror http://cdn.npm.taobao.org/dist/electron/ # electron 二进制包镜像

```