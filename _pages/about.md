---
title: "Welcome to my corner of the world!"
permalink: /
header:
  image: photography/IMG_99022.jpeg
author_profile: true
---

#main {
  width: 100% !important;
  max-width: none !important;
}
article.page {
  flex: 1 1 auto !important;
  width: auto !important;
  max-width: none !important;
}
.page__inner-wrap {
  width: 100% !important;
  max-width: none !important;
}
.page__content {
  width: 100% !important;
  max-width: none !important;
}
.about-flex {
  border: 3px dashed red;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
}
.about-text {
  flex: 1 1 0%;
  min-width: 0;
}
.about-text p {
  margin: 0 0 1rem;
}
.about-images {
  flex: 0 0 32%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.about-images img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 1/1;
}
@media (max-width: 700px) {
  .about-flex {
    flex-wrap: wrap;
  }
  .about-images {
    flex: 1 1 100%;
    max-width: 100%;
    flex-direction: row;
    gap: 10px;
  }
  .about-images img {
    flex: 1 1 0%;
    min-width: 0;
  }
}
