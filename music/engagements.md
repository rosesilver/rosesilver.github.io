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

  {% assign past_engagements = site.data.music.engagements | where: "category", "past" %}
  {% assign past_seasons = "2026-27,2025-26" | split: "," %}
  {% for season in past_seasons %}
  {% assign season_engagements = past_engagements | where: "season", season %}
  <h2 class="performances-section-title">Past Events ({{ season }} Season)</h2>

  <div class="concert-list">
  {% for engagement in season_engagements %}
  {% include engagement.html engagement=engagement %}
  {% endfor %}
  </div>
  {% endfor %}
</div>

<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
