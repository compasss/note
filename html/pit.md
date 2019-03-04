---
layout: default
title: CSS注意事项
parent: html
categories: html
---

###CSS注意事项
---
* a标签里面不能嵌套a标签，如果嵌套了，浏览器默认会把a标签里面的a标签放到外部来
* 选择器优先级：<pre><code>
	!important: 2000
	内联样式： 1000
	ID选择器： 100
	类选择器（包括属性选择器和伪类）： 10
	元素(标签)和伪元素选择器： 1
	结合符和通配符： 0
</code></pre>

<code>&nbsp;</code> 半角的不断行的空白格（推荐使用）
<code>&ensp;</code>  半角的空格 
<code>&emsp;</code>  全角的空格

详细的含义：

`&nbsp;`：这是我们使用最多的空格，也就是按下space键产生的空格。在HTML中，如果你用空格键产生此空格，空格是不会累加的（只算1个）。要使用html实体表示才可累加。该空格占据宽度受字体影响明显而强烈。在inline-block布局中会搞些小破坏，在两端对齐布局中又是不可少的元素。

`&ensp;`：此空格有个相当稳健的特性，就是其占据的宽度正好是1/2个中文宽度，而且基本上不受字体影响。

`&emsp;` ：此空格也有个相当稳健的特性，就是其占据的宽度正好是1个中文宽度，而且基本上不受字体影响。

<code>
	<ul>
    <li class="li">姓&emsp;&emsp;名：<input type="text" /></li>
    <li class="li">手&ensp;机&ensp;号：<input type="text" /></li>
    <li class="li">电子邮箱：<input type="text" /></li>
	</ul>
</code>

![GitHub](./pic/595142-20170508213546066-2094539815.png "GitHub,Social Coding")

## meta viewport
```html
<!DOCTYPE html>  H5标准声明，使用 HTML5 doctype，不区分大小写
<head lang="en"> 标准的 lang 属性写法
<meta charset="utf-8">    声明文档使用的字符编码
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>   优先使用 IE 最新版本和 Chrome
<meta name="description" content="不超过150个字符"/>       页面描述
<meta name="keywords" content=""/>      页面关键词
<meta name="author" content="name, email@gmail.com"/>    网页作者
<meta name="robots" content="index,follow"/>      搜索引擎抓取
<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no"> 为移动设备添加 viewport
<meta name="apple-mobile-web-app-title" content="标题"> iOS 设备 begin
<meta name="apple-mobile-web-app-capable" content="yes"/>  添加到主屏后的标题（iOS 6 新增）
是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<meta name="format-detection" content="telphone=no, email=no"/>  设置苹果工具栏颜色
<meta name="renderer" content="webkit">  启用360浏览器的极速模式(webkit)
<meta http-equiv="X-UA-Compatible" content="IE=edge">     避免IE使用兼容模式
<meta http-equiv="Cache-Control" content="no-siteapp" />    不让百度转码
<meta name="HandheldFriendly" content="true">     针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
<meta name="MobileOptimized" content="320″>   微软的老式浏览器
<meta name="screen-orientation" content="portrait">   uc强制竖屏
<meta name="x5-orientation" content="portrait">    QQ强制竖屏
<meta name="full-screen" content="yes">              UC强制全屏
<meta name="x5-fullscreen" content="true">       QQ强制全屏
<meta name="browsermode" content="application">   UC应用模式
<meta name="x5-page-mode" content="app">    QQ应用模式
<meta name="msapplication-tap-highlight" content="no">    windows phone 点击无高光
设置页面不缓存
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0″>
```

