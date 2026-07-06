---
layout: archive
title: "Blog Posts"
permalink: /posts/
author_profile: true
---

{% include base_path %}

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

<style>
body, #main, article.page, .page__inner-wrap, .page__content, .initial-content, .page__wrap {
  background-color: #EFEAA3 !important;
}
.archive__item-title a { color: #711A54 !important; }
.archive__item-title a:hover { color: #4a0e37 !important; }
h1, h2, h3, body { color: #711A54 !important; }
</style>
