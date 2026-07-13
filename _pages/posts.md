---
layout: archive
title: "Field Notes"
permalink: /posts/
author_profile: false
---

{% include base_path %}

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #EFEAA3 !important;
}
.sidebar { background-color: #711A54 !important; }
a { color: #711A54 !important; }
a:hover { color: #4a0e37 !important; }
h1, h2, h3, h4, h5, h6, body { color: #711A54 !important; }
.page__title { color: #711A54 !important; }
.page__title::after { background-color: #711A54 !important; }
h1::after, h2::after, h3::after { background-color: #711A54 !important; border-color: #711A54 !important; }
.archive__item-title a { color: #711A54 !important; }
.archive__item-title a:hover { color: #4a0e37 !important; }
</style>
