---
layout: default
title: 浏览器兼容性
parent: javascript
categories: 浏览器兼容性
date: 2013-03-01 12:00:00
---

###jvascript 浏览器兼容性
---

1. firefox 没有innerText属性，需要用textContent代替。
2. object.getAttribute(""):获取class
	>chrome,firefox,opera,ie8+: object.getAttribute("class")
	>ie8-: object.getAttribute("className");
3. ie8中没有document.getElementByClassName("")
4. ie8中没有string.trim()方法。
5. ie的ajax请求对象是activeXObject