---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
permalink: /
nav_exclude: true
---

## 最新文章
<section class="directory-list">
  {% assign pageList = site.html_pages | sort:"date" | reverse %}
  {% for page in pageList limit: 5 %}
    {% unless page.nav_exclude %}
      {% if page.has_children == nil %}
      <div class="directory-item">
        <span class="a">{{page.date | date: "%Y-%m-%d"}}</span>
        <span class="b"> -> </span>
        <a href="{{ page.url | absolute_url }}" class="c">{{ page.title }}</a>
      </div>
      {% endif %}
    {% endunless %}
  {% endfor %}
</section>
