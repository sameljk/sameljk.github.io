---
layout: page
title: music
permalink: /music/
description: A hub for all off my current and past music talent.
nav: true
nav_order: 3
display_categories: [fun]
horizontal: false
---

<!-- pages/music.md -->
<div class="music">
{% if site.enable_music_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_music = site.music | where: "category", category %}
  {% assign sorted_music = categorized_music | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_music %}
      {% include music_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_music %}
      {% include music.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_music = site.music | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_music %}
      {% include music_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_music %}
      {% include music.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
