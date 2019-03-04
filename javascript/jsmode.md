---
layout: default
title: 设计模式
parent: javascript
categories: 设计模式
---

### Javascript设计模式

----------

##### 接口章节看完python以后重阅

#####javascripot对象声明方式:
1. 门户大开型<br>
<pre><code>
var book = function(isbn,title,author){
	if(isbn == undefined) throw new Error('Book constructor requires an isbn.');
	this.isbn = isbn;
	this.title = title || 'No title specified';
	this.author = author || 'No author specified';
}
book.prototype.display = function(){...}
var book2 = new book();
book2.display();</code>
</pre>
2. 第二种

######闭包
 - 函数是运行在定义它们的作用域中，而不是运行在调用它们的作用域中。
 - 函数初始化以后，函数的作用域一直保存，该函数里面的函数能够访问该函数作用域中的所有内容

####继承
javascript的extend实现方法
<pre><code>
function extend(subClass, superClass){
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.construtor = subClass;
}
</code></pre>

###单体模式
<pre><code>单体模式前面的var不能去掉，如果去掉了。name中声明的全部变量或者函数都会是全局变量或者全局函数。
var name = {
	find: function(){...}
	...
}
</pre></code>

 
