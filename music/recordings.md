---
layout: default
title: Recordings
permalink: /music/recordings/
---

<div class="recordings-page">
  <h1 class="recordings-title">Recordings</h1>

  {% for recording in site.data.music.recordings %}
  {% include recording.html recording=recording %}
  {% endfor %}
</div>
