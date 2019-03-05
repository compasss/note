---
layout: default
title: http 协议
parent: http
categories: http
date: 2013-03-07 11:15:55 +0800
---

#  http 协议协议

1. 发出的请求信息（message request）包括以下几个：
    + 请求行
        - 例如 ``` GET /images/logo.gif HTTP/1.1，表示从、immages目录下请求logo.gif这个文件。
    + 请求头
        - 例如 Accept-Language: en
    + 空行
    + 其它消息体

2. 请求行和标题必须以<CR><LF>作为结尾。空行内必须只有<CR><LF>而无其他空格。在HTTP/1.1协议中，所有的请求头，除Host外，都是可选的。

3. HTTP 请求方法
    + OPTIONS
        - 这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。
    + HEAD
        - 与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。
    + GET
        - 向指定的资源发出“显示”请求。使用GET方法应该只用在读取数据，而不应当被用于产生“副作用”的操作中，例如在Web Application中。其中一个原因是GET可能会被网络蜘蛛等随意访问。
    + POST
        - 向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。
    + PUT
        - 向指定资源位置上传其最新内容。
    + DELETE
        - 请求服务器删除Request-URI所标识的资源。
    + TRACE
        - 回显服务器收到的请求，主要用于测试或诊断。
    + CONNECT
        - HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。

4. HTTP 状态码
    + [1xx消息](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#1xx.E6.B6.88.E6.81.AF "1xx消息")——请求已被服务器接收，继续处理
    + [2xx成功](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#2xx.E6.88.90.E5.8A.9F "2xx成功")——请求已成功被服务器接收、理解、并接受
    + [3xx重定向](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#3xx.E9.87.8D.E5.AE.9A.E5.90.91 "3xx重定向")——需要后续操作才能完成这一请求
    + [4xx请求错误](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#4xx.E8.AF.B7.E6.B1.82.E9.94.99.E8.AF.AF "4xx请求错误")——请求含有词法错误或者无法被执行
    + [5xx服务器错误](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#5xx.E6.9C.8D.E5.8A.A1.E5.99.A8.E9.94.99.E8.AF.AF "5xx服务器错误")——服务器在处理某个正确请求时发生错误

5. 