---
layout: archive
title: "Field Notes"
permalink: /posts/
author_profile: false
---
{% include base_path %}

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

#main, article.page, .page__inner-wrap, .page__content, .page__inner-wrap--layout-single, .archive {
  max-width: 100% !important;
  width: 100% !important;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 1.5rem;
}

.notes-card {
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
}

.notes-card-img-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  margin-bottom: 12px;
}
.notes-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}
.notes-card:hover .notes-card-img-wrap img {
  transform: scale(1.04);
}

.notes-card-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(113, 26, 84, 0.12);
  color: #711A54;
  font-size: 2rem;
}

.notes-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #711A54 !important;
  margin: 0 0 4px;
  line-height: 1.3;
}
.notes-card:hover .notes-card-title {
  color: #4a0e37 !important;
}

.notes-card-excerpt {
  font-size: 0.85rem;
  color: rgba(113, 26, 84, 0.75);
  margin: 0 0 10px;
  line-height: 1.4;
}

.notes-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #711A54;
  border-top: 1px solid rgba(113, 26, 84, 0.25);
  padding-top: 8px;
  margin-top: auto;
}
.notes-card-tag {
  font-weight: 700;
}
.notes-card-read {
  font-weight: 700;
}

@media (max-width: 900px) {
  .notes-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .notes-grid { grid-template-columns: 1fr; }
}
</style>

<div class="notes-grid">
  {% for post in site.posts %}
  <a class="notes-card" href="{{ base_path }}{{ post.url }}">
    <div class="notes-card-img-wrap">
      {% if post.header.teaser %}
        <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
      {% else %}
        <div class="notes-card-fallback"><i class="fas fa-water"></i></div>
      {% endif %}
    </div>
    <div class="notes-card-title">{{ post.title }}</div>
    <p class="notes-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 14 }}</p>
    <div class="notes-card-meta">
      <span class="notes-card-tag">{% if post.tags.size > 0 %}{{ post.tags[0] }}{% else %}Field Notes{% endif %}</span>
      <span>{{ post.date | date: "%b %d, %y" }}</span>
      <span class="notes-card-read">Read &rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>
