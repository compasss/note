---
layout: default
title: JS原生与jquery
parent: javascript
categories: javascript
date: 2018-03-03 12:00:00
---

###JS原生与jquery
---

###查找搜索（选择器）

- 按ID查找
<pre><code>jQuery:	$('#foo')
JS:	document.getElementById('foo')
	or
	document.querySelector("#id")
	document.querySelector(".class")
	document.querySelector("tag")
	or
	document.querySelectorAll("#id")//all childs
</code></pre>

- 按class名搜索
<pre><code>jQuery:	$('.bar')
JS:	document.getElementsByClassName('bar')
</code></pre>

- 按标记名搜索
<pre><code>jQuery:	$('span')
JS:	document.getElementsByTagName('span')
</code></pre>

- 按子元素搜索
<pre><code>jQuery:	$('#foo span')
JS:	document.getElementById('foo').getElementsByTagName('span')
</code></pre>

- 搜索特殊元素
<pre><code>jQuery:	$('html')
JS:	document.docuentElement
jQuery:	$('head')
JS:	document.head
jQuery:	$('body')
JS:	document.body
</code></pre>

###元素属性操作

- 获取/设置HTML
<pre><code>jQuery:	$('#foo').html()
JS:	document.getElementsById('foo').innerHTML
jQuery:	$('#foo').html('hello word')
JS:	document.getElementsById('foo').innerHTML = 'hello word'
</code></pre>

- 添加/删除/搜索判断calss
<pre><code>jQuery:	$('#foo').addClass('bar')
JS:	document.getElementById('foo').className += ' bar '
	or
	document.getElementById('foo').classList.add("bar")

jQuery:	$('#foo').removeClass('bar')
JS:	document.getElementById('foo').className = document.getElementById('foo').className.replace(/\bbar\b/gi, '')
	or
	document.getElementById('foo').classList.remove("bar")

jQuery:	$('#foo').hasClass('bar')
JS:	document.getElementById('foo').className.search(/\bbar\b/gi) !== -1
</code></pre>

- 元素值
<pre><code>jQuery:	$('#foo').val()
JS:	document.getElementById('foo').value
</code></pre>

- 设置、修改和获取属性值
<pre><code>jQuery:	$('.el').filter(':first').attr('key', 'value');
	$('.el').filter(':first').attr('key');
JS:	document.querySelector('.el').setAttribute('key', 'value');
	document.querySelector('.el').getAttribute('key');
</code></pre>

###特效

- 隐藏/显示操作
<pre><code>jQuery:	$('#foo').show()
JS:	document.getElementById('foo').style.display = ''
jQuery:	$("#foo").hide()
JS:	document.getElementById("foo").style.display = 'none'
</code></pre>

- 修改CSS样式
<pre><code>jQuery:	$('#foo').css('background-color', 'red')
JS:	document.getElementById('foo').style.backgroundColor = 'red'
</code></pre>

###事件

- 页面加载完成（ready）
<pre><code>jQuery:	$(document).ready
JS:	document.onreadystatechange = function(){
	if(document.readyState === 'complete'){
		//DOM is ready!
	}
}
或者：
	document.addEventListener('DOMContentLoaded',function(){
		//dom is ready
	})
</code></pre>

- 点击事件
<pre><code>jQuery:	$("#foo").click(function(){...})
JS:	document.getElementById('foo').onclick = function(){...}
</code></pre>

- 添加事件监听
<pre><code>jQuery:	$("#foo").on('event', function(){...})
JS:	'select'.addEventListener("click",function(){...})
</code></pre>

- 工具类技术
<pre><code>jQuery:	jQuery.parseJSON(json)
JS:	JSON.parse(json)
</code></pre>

###创建元素
<pre><code>jQuery:	$("<div/>")
JS:	newE1 = document.createElement('div')
</code></pre>

###复制/克隆元素
<pre><code>jQuery:	$("#id").clone()
JS:	document.querySelector('.el').cloneNode(true);
</code></pre>

###删除元素
<pre><code>jQuery:	$('.el').remove()
JS:	remove('.el');
	function remove(el) {
		var toRemove = document.querySelector(el);
		toRemove.parentNode.removeChild(toRemove);
	}
</code></pre>

###父元素操作
<pre><code>jQuery:	$("#id").parent()
JS:	document.querySelector('.el').parentNode
</code></pre>

###前一个/下一个/临近同辈元素
<pre><code>jQuery:	$('.el').prev()
	$('.el').next()
JS:	document.querySelector('.el').previousElementSibling;
	document.querySelector('.el').nextElementSibling;
</code></pre>

###数组循环
<pre><code>var ninjaTurtles = ["Donatello", "Leonardo", "Michelangelo", "Raphael"];

// ForEach automatically iterates through an array.

ninjaTurtles.forEach(function (entry) {
    console.log(entry);
});

// The map method calls a function on every element of an array and creates a new array with the results.

var lovesPizza = ninjaTurtles.map(function (entry) {

    return entry.concat(" loves pizza!");

});

console.log(lovesPizza);
</code></pre>
