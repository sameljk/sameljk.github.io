---
layout: page
title: desmos
permalink: /desmos/
description: I make a lot of Desmos files. Here are the ones I'm most proud of. If you have suggestions or improvements, please let me know!
nav: true
nav_order: 2
display_categories: [vector fields, case studies, fun]
horizontal: false
---

<!-- pages/desmos.md -->
<div class="desmos">
{% if site.enable_desmos_categories and page.display_categories %}
  <!-- Display categorized desmos -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_desmos = site.desmos | where: "category", category %}
  {% assign sorted_desmos = categorized_desmos | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_desmos %}
      {% include desmos_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_desmos %}
      {% include desmos.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display desmos without categories -->

{% assign sorted_desmos = site.desmos | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_desmos %}
      {% include desmos_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_desmos %}
      {% include desmos.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
