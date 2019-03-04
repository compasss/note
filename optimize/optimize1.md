---
layout: default
nav_exclude: true
---

### 网页优化
-----
* 操作DOM时先进行读操作再进行写操作，防止浏览器进行多次重排和重绘
* 加入对某个进行1W此操作，最好是先将此元素先隐藏起来，1W次操作以后再显示，这样操作只会让浏览器执行两次重绘和重排操作
* position为absolute或fixed的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响
* window.requestAnimationFrame()可以在循环中将多次的写样式操作放到下一次渲染
<pre><code>functiion doubleHeight(element){
	var currentHeight = element.clientHeight;
	window.requestAnimationFrame(function(){
		element.style.height = (currentHeight * 2) + "px";
	});
}
elements.forEach(doubleHeight);
</code></pre>
* 