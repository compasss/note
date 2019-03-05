---
layout: default
title: thinkphp
parent: php
categories: php
date: 2015-03-04 11:15:55 +0800
---

thinkPHP
---
1. 自定义模块：define('BIND_MODULE','admin')
2. 模块配置文件支持的格式PHP/JSON/YAML/INI/XML
3. 用引号包括一长串特殊字符的字符串时，最外部采用单引号包裹
4. 控制器类的命名规范：控制器名+Controller.class.php
5. 数据库操作类：M("table"),D("table")
6. CURD操作方法：add、sava、select、delete
7. 获取数据库的字段：getField()
8. 设置数据库字段：setField()
9. 查询数据库时默认的逻辑关系为and，可以通过_logic定义查询逻辑
10. 使用对象方式查询的类 stdClass()
11. I方法用于获取表单数据，默认过滤方法为htmlspecialchars
12. 模板标签的{和$之间不能有任何的空格，否则标签无效。
13. 给变量输出提供默认值：{$user.nickname|default="这家伙很懒，什么也没留下"}
14. 循环输出主要是使用volist和foreach标签输出。
15. 