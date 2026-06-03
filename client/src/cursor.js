// Custom cursor: dot + ring with smooth trailing and hover effects
(function () {
  if (typeof window === "undefined") return;
  if ("ontouchstart" in window) return; // don't run on touch devices

  const dot = document.createElement("div");
  dot.className = "custom-cursor";
  const ring = document.createElement("div");
  ring.className = "custom-cursor-ring";
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mouseX = 0,
    mouseY = 0;

  const show = () => {
    dot.classList.add("visible");
    ring.classList.add("visible");
    document.body.style.cursor = "none";
  };
  const hide = () => {
    dot.classList.remove("visible");
    ring.classList.remove("visible");
    document.body.style.cursor = "";
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // move instantly to exact pointer position (no smoothing)
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    ring.style.left = `${mouseX}px`;
    ring.style.top = `${mouseY}px`;
    // Color transform based on horizontal position (hue)
    try {
      const vw = Math.max(window.innerWidth, 1);
      const hue = Math.round((mouseX / vw) * 360); // 0-360
      const sat = 82;
      const lit = 54;
      // keep dot transparent: update border + glow so the underlying content remains visible
      dot.style.background = "transparent";
      dot.style.borderColor = `hsl(${hue}, ${sat}%, ${lit}%)`;
      ring.style.borderColor = `hsla(${hue}, ${sat}%, ${Math.max(lit - 6, 40)}%, 0.24)`;
      dot.style.boxShadow = `0 6px 18px rgba(0,0,0,0.12), 0 8px 28px hsla(${hue}, ${sat}%, ${lit}%, 0.12)`;
    } catch (err) {
      /* ignore */
    }
    show();
  });
  window.addEventListener("mouseout", (e) => {
    hide();
  });

  // interactive targets
  const targets =
    "a, button, input, textarea, .project-link1, .project-link2, .btn-primary, .btn-secondary";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest && e.target.closest(targets)) {
      dot.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(targets)) {
      dot.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    }
  });

  document.addEventListener("mousedown", () => {
    dot.classList.add("cursor-active");
    ring.classList.add("cursor-active");
  });
  document.addEventListener("mouseup", () => {
    dot.classList.remove("cursor-active");
    ring.classList.remove("cursor-active");
  });

  // No RAF smoothing: positions set directly on mousemove for exact pointer tracking

  // expose for debugging
  window.__customCursor = { dot, ring };
})();
