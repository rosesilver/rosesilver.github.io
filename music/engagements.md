---
layout: default
title: Performances
permalink: /music/engagements/
---

<div class="performances-page">
  <img
    class="performances-photo scroll-reveal"
    src="{{ '/assets/music/images/hnh.jpeg' | relative_url }}"
    alt="Rose Silver performing with Handel and Haydn Society"
  />

  {% assign upcoming_engagements = site.data.music.engagements | where: "category", "upcoming" %}
  {% if upcoming_engagements.size > 0 %}
  <h2 class="performances-section-title">Upcoming Engagements</h2>

  <div class="concert-list">
  {% for engagement in upcoming_engagements %}
  {% include engagement.html engagement=engagement %}
  {% endfor %}
  </div>
  {% endif %}

  <h2 class="performances-section-title">Past Events (2025-26 Season)</h2>

  <div class="concert-list">
  {% for engagement in site.data.music.engagements %}
  {% if engagement.category == "past" %}
  {% include engagement.html engagement=engagement %}
  {% endif %}
  {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
