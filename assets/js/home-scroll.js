(function () {
  var bottom = document.querySelector(".home-bottom");
  if (!bottom) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    bottom.style.opacity = "1";
    bottom.style.transform = "none";
    return;
  }

  function update() {
    var rect = bottom.getBoundingClientRect();
    var viewHeight = window.innerHeight;
    var start = viewHeight * 0.98;
    var end = viewHeight * 0.55;
    var progress = (start - rect.top) / (start - end);
    progress = Math.min(1, Math.max(0, progress));

    bottom.style.opacity = String(progress);
    bottom.style.transform = "translateY(" + (1 - progress) * 28 + "px)";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
