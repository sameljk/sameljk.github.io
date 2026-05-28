---
layout: page
title: switchbacks
permalink: /switchbacks/
description: Some work on magnetic switchbacks.
nav: false
nav_order: 1
display_categories: [conference tools,models]
horizontal: false
---

<!-- pages/switchbacks.md -->
<div class="switchbacks">
{% if site.enable_switchback_categories and page.display_categories %}
  <!-- Display categorized switchbacks -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_switchbacks = site.switchbacks | where: "category", category %}
  {% assign sorted_switchbacks = categorized_switchbacks | sort: "importance" %}
  <!-- Generate cards for each switchback -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_switchbacks %}
      {% include switchbacks_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for switchback in sorted_switchbacks %}
      {% include switchbacks.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display switchbacks without categories -->

{% assign sorted_switchbacks = site.switchbacks | sort: "importance" %}

  <!-- Generate cards for each switchback -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for switchback in sorted_switchbacks %}
      {% include switchbacks_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for switchback in sorted_switchbacks %}
      {% include switchbacks.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
