---
layout: default
title: canvas
parent: html
categories: html
date: 2013-03-06 11:15:55 +0800
---

canvas 笔记
--
1. canvas通过CSS设置宽，高的时候里面的矩形会根据CSS设置的高度变化，而在html里面直接设置没有影响。<b>试验了好几次都未解决问题，以后再找机会解决</b>
2. 初始化<pre><code>canvas=document.getElementById("id")
context=canvas.getContext("2d")</code></pre>
3. 画线<pre><code>context.beginPath();
context.moveTo(x,y);
context.lineTo(x,y);
context.closePath();
context.stroke();</code></pre>
4. 画弧形<pre><code>context.beginPath();
context.arc(x,y,radius,startAngle,endAngle,anticlockwise)</code></pre>
5. 画矩形<pre><code>context.fillRect(x,y,width,height);->实心
context.strokeRect(x,y,width,height)</code></pre>
6. 样式<pre><code>context.fillStyle="css颜色"</code></pre>
7. 修改线宽<pre><code>context.lineWidth()</code></pre>
8. 绘制文本<pre><code>context.fillText(text,x,y)</code></pre>
9. 文本字体<pre><code>context.font="字体"</code></pre>
10. 擦除<pre><code>context.clearRect(x,y,width,height)</code></pre>
11. 保存绘图状态<pre><code>context.save();堆栈式保存</code></pre>
12. 恢复绘图状态<pre><code>context.restore();堆栈式取出</code></pre>
13. 平移<pre><code>context.translate(x,y)</code></pre>
14. 缩放<pre><code>context.scale(x,y)</code></pre>
15. 旋转<pre><code>context.rotate(angle)</code></pre>
16. 变形矩阵<pre><code>context.setTransform(1,0,0,1,0,0);
context.transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans)；</code></pre>![](http://i.imgur.com/HaRlTar.png)
17. 全局阿尔法值<pre><code>context.globalAlpha = </code></pre>会和fillStyle中的rgba值叠加
18. 合成操作<pre><code>context.globalCompositeOperation = 
属性：
source-over：绘制的图形将画在现有画布之上
destination-over：绘制的图形将画在现有画布之下
source-atop:将源绘制在目标之上，在重叠区域上两者都是不透明的</code></pre>