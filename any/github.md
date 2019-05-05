---
layout: default
title: github收藏
parent: any
categories: github
date: 2019-05-05 11:00:00
---

## github收藏

### python
1. [Python - 100天从新手到大师](https://github.com/jackfrued/Python-100-Days){:target="_blank"}
2. [100-Days-Of-ML-Code中文版](https://github.com/MachineLearning100/100-Days-Of-ML-Code){:target="_blank"}

### 其它
1. [cross-platform post-exploitation HTTP/2 Command & Control  server and agent written in golang](https://github.com/Ne0nd0g/merlin){:target="_blank"}
2. [大数据相关github仓库](https://github.com/bulutyazilim/awesome-datascience){:target="_blank"}
3. [it roadmap](https://github.com/kamranahmedse/developer-roadmap){:target="_blank"}
4. [区块链(BlockChain)技术开发相关资料](https://github.com/chaozh/awesome-blockchain-cn){:target="_blank"}

## github 贡献代码流程
1. Fork 项目

首先需要fork这个项目, 进入项目页面, 点击右上角的Fork按钮。
你的 github 帐号中会出现 swoole/swoole-src 这个项目。
在本地电脑(Linux)上使用以下命令: 得到一个 swoole-src 文件夹。
``` bash
git clone git@github.com:samt42/swoole-src.git
```
2. 获取原项目代码
进入 swoole-src 文件夹, 添加 swoole 的远程地址
``` bash
git remote add upstream https://github.com/swoole/swoole-src.git
```
获取 swoole 最新源码
```
git pull upstream master
```
现在我们在 fork 来的 master 分支上, 这个 master 留作跟踪 upstream 的远程代码...

3. 创建分支
好了, 现在可以开始贡献我们的代码了
按照国际惯例, 我们一般不在 master 上提交新代码, 而需要为新增的功能或者fixbug建立新分支, 再合并到 master 上, 使用以下代码创建分支
``` bash
git checkout -b branch1
```
现在我们可以在分支上更改代码了

假设我们已经添加了一些代码, 提交到代码库
```
git commit -a -m "new commit"
```
4. 合并修改
一个常见的问题是远程的 upstream (swoole/swoole-src) 有了新的更新, 从而会导致我们提交的 Pull Request 时会导致冲突, 因此我们可以在提交前先把远程其他开发者的commit和我们的commit合并.

使用以下代码切换到 master 分支:
``` bash
git checkout master
```
使用以下代码拉出远程的最新代码:
``` bash
git pull upstream master
```
切换回 branch1:
``` bash
git checkout branch1
```
> 如果忘记自己之前建的分支名可以用 `git branch` 查看
把 master 的 commit 合并到 branch1:
``` bash
git rebase master
```
把更新代码提交到自己的 branch1 中:
``` bash
git push origin branch1
```
5. Pull Request

提交 Pull Request
你可以在你的 github 代码仓库页面切换到 branches 页面点击 branch1 分支后点击 New pull request 按钮, 添加相关注释后提交.
OR
切换到 branch1 分支的代码仓库点击 Compare & pull request 按钮, 添加相关注释后提交.