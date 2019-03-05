---
layout: default
title: css tips
parent: css
nav_order: 3
categories: css
date: 2013-03-04 11:18:55 +0800
---

## 记录css的一些用法

1. flex流式布局
![流式布局](./imgs/bg2015071330.png)
```css
.parent {
  width: 200px;
  height: 150px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
}
```

2. 水平居中的方法
```css
/* 针对inline, 内联块inline-block, 内联表inline-table, inline-flex元素及img,span,button等元素 */
.text_div{
  text-align:center;
}
/* 不定宽块状元素居中 */
.text_dev{
  margin: 0 auto;
}
/* 通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中。 */
.wrap{
  float: left;
  position: relative;
  left: 50%;
  clear: both;
}
.wrap-center{
  left: -50%;
}
```
3. 垂直居中
```css
/* 单行内联(inline-)元素垂直居中 
通过设置内联元素的高度(height)和行高(line-height)相等，从而使元素垂直居中。*/

.text_div{
  height: 120px;
  line-height: 120px;
}
/* 利用表布局 */
.father {
  display: table;
}
.children {
  display: table-cell;
  vertical-align: middle;
}
/* flex布局 */
.center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 绝对布局方式 */
/* 已知高度 */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; 
}
/* 未知高度 */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* flex方式 */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* grid方式 */
.parent {
  height: 140px;
  display: grid;
}
.child { 
  margin: auto;
}
```
4. css优先级确定

每个选择器都有权值，权值越大越优先
继承的样式优先级低于自身指定样式
！important优先级最高 js也无法修改
权值相同时，靠近元素的样式优先级高  顺序为内联样式表（标签内部）> 内部样式表（当前文件中）> 外部样式表（外部文件中）

5. 如何清除浮动
不清楚浮动会发生高度塌陷：浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）

clear清除浮动（添加空div法）在浮动元素下方添加空div,并给该元素写css样式：   {clear:both;height:0;overflow:hidden;}
给浮动元素父级设置高度
父级同时浮动（需要给父级同级元素添加浮动）
父级设置成inline-block，其margin: 0 auto居中方式失效
给父级添加overflow:hidden 清除浮动方法
万能清除法 after伪类 清浮动（现在主流方法，推荐使用）

```css
.float_div:after{
	content:".";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
}
.float_div{
	zoom:1
} 
```
