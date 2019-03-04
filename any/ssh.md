---
layout: default
title: ssh
parent: any
nav_order: 1
categories: ssh
---

## ssh 命令

### options

1. -1：强制使用ssh协议版本1
2. -2：强制使用ssh协议版本2
3. -4：强制使用IPv4地址
4. -6：强制使用IPv6地址
5. -6：强制使用IPv6地址
6. -A：开启认证代理连接转发功能
7. -a：关闭认证代理连接转发功能
8. -b：使用本机指定地址作为对应连接的源ip地址
9. -C：请求压缩所有数据
10. -F：指定ssh指令的配置文件
11. -f：后台执行ssh指令
12. -g：允许远程主机连接主机的转发端口
13. -i：指定身份文件
14. -l：指定连接远程服务器登录用户名
15. -N：不执行远程指令
16. -o：指定配置选项
17. -p：指定远程服务器上的端口
18. -q：静默模式
19. -X：开启X11转发功能
20. -x：关闭X11转发功能
21. -y：开启信任X11转发功能


### 远程端口转发

+ ```ssh -f -N -R 2222:localhost:22 username@1.1.1.1```
+ 登陆远程ssh，```ssh -p 2222 username@localhost```

### 本地端口转发

+ ```ssh -f -L 2222:localhost:5900 username@1.1.1.1```
+ 登陆本地ssh，```ssh -p 2222 username@localhost```