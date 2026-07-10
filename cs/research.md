---
layout: default
title: Research
permalink: /cs/research/
---

<div class="research-page">
  <h1>Research</h1>
  <img
    class="research-photo scroll-reveal"
    src="{{ '/assets/cs/images/IMG_8416.JPG' | relative_url }}"
    alt="Portrait of Rose Silver"
  />

  <div class="research-section scroll-reveal">
    <h2 class="research-section-title">About me</h2>
    <div class="research-text">
      <p>I'm a PhD student in computer science at Carnegie Mellon University (CMU), advised by <a href="http://elaineshi.com/">Elaine Shi</a> and <a href="https://jonathan-ullman.github.io/">Jonathan Ullman</a>. My research broadly focuses on algorithms, privacy, and the interplay between theory and practice. My research is generously supported by the <a href="https://www.cylab.cmu.edu/news/2025/10/20-presidential-fellows.html">CyLab Presidential Fellowship</a>.</p>
      <p>Before moving to CMU, I completed the first three years of my PhD at Northeastern University. I also received my Bachelor's in Mathematics, Minor in Physics from Northeastern University.</p>
    </div>
  </div>

  <div class="research-section scroll-reveal">
    <h2 class="research-section-title">Publications</h2>
    <div class="research-note">Note: In theoretical computer science, it is customary to sort the authors of each paper alphabetically.</div>
    <div class="paper-list">
{% for paper in site.data.cs.papers %}
{% unless paper.category == "miscellaneous" %}
{% include paper.html paper=paper %}
{% endunless %}
{% endfor %}
    </div>
  </div>

  <div class="research-section scroll-reveal">
    <h2 class="research-section-title">Miscellaneous</h2>
    <div class="paper-list">
{% for paper in site.data.cs.papers %}
{% if paper.category == "miscellaneous" %}
{% include paper.html paper=paper %}
{% endif %}
{% endfor %}
    </div>
  </div>
</div>

<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
