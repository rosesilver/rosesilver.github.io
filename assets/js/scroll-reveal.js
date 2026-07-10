(function () {
  var elements = document.querySelectorAll(".scroll-reveal");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  function update() {
    var viewHeight = window.innerHeight;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - viewHeight
    );
    var remainingScroll = maxScroll - scrollY;

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var late = el.classList.contains("scroll-reveal-late");
      var start = viewHeight * (late ? 1.08 : 0.92);
      var end = viewHeight * (late ? 0.72 : 0.45);
      var projectedTop = rect.top - remainingScroll;

      if (projectedTop > end) {
        end = projectedTop;
      }

      var progress = 0;
      if (start > end) {
        progress = (start - rect.top) / (start - end);
      } else if (rect.top <= start) {
        progress = 1;
      }

      progress = Math.min(1, Math.max(0, progress));

      el.style.opacity = String(progress);
      el.style.transform = "translateY(" + (1 - progress) * 28 + "px)";
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
