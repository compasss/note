---
layout: default
title: JS原生方法
parent: javascript
categories: javascript
date: 2018-03-04 12:00:00
---

## JS原生方法
---
> form 操作

- document.form:获取html中的所有form元素，已list的格式返回，例如document.form[0]可以返回第一个form。
- 假如```f = document.form[0]，f.className = "fname"```可以将calss替换为```fname f.className += "fname"```可以在class中添加fnameclass，```f.[name]```可以访问form中属性为name的元素,```f.[属性]```可以访问属性名称对应的html。```f.classList```：将该元素所有的class已list的形式返回。