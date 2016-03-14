### CSS hack
---

1. IE6,7 hack  * and _
2. IE8 hack \0
3. IE(除IE6以外) hack \9
4. a链接的CSS排列顺序，link>visited>hover>active
5. li中内容超过长度时，用....代替<pre><code>li{list-style-type:none;
width:200px;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;}</code></pre>
6. ie8+都识别important属性
7. ie8中没有display:inline-block，需要设置成:display:inline
8. ie4-9透明效果：filter:alpha(opacity=50)
9. IE6,7两端对齐需要两点：inline标签化和结束标签连续化。text-align:justify
10. 