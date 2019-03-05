---
layout: default
title: mongodb
parent: database
categories: mongodb
date: 2013-03-05 11:15:55 +0800
---

### mongodb 数据库操作

+ 正则匹配更新
```
db.media.find().forEach( function(u) { u.src = u.src.replace(/^http:/, "https:"); db.media.save(u); } );
```
