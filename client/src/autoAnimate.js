// Auto-apply `.animate` to most visible elements, with sensible defaults.
(function () {
  if (typeof window === "undefined") return;
  const skipSelector = "script, style, link, meta, head, title";

  const shouldAnimate = (el) => {
    if (!el || el.nodeType !== 1) return false;
    if (el.matches && el.matches(skipSelector)) return false;
    if (
      el.classList &&
      (el.classList.contains("no-anim") ||
        el.classList.contains("custom-cursor") ||
        el.classList.contains("custom-cursor-ring"))
    )
      return false;
    if (el.closest && el.closest("[data-no-anim]")) return false;
    const cs = getComputedStyle(el);
    if (
      !cs ||
      cs.display === "none" ||
      cs.visibility === "hidden" ||
      cs.opacity === "0"
    )
      return false;
    const r = el.getBoundingClientRect();
    if (r.width < 12 || r.height < 8) return false;
    return true;
  };

  const applyDefaults = (el) => {
    if (!el) return;
    if (!el.classList.contains("animate")) el.classList.add("animate");
    // default variants by element type
    if (!el.dataset.anim) {
      const tag = el.tagName && el.tagName.toLowerCase();
      if (tag === "img" || tag === "picture") el.dataset.anim = "zoom";
      else if (/^h[1-6]$/.test(tag)) el.dataset.anim = "slide-up";
      else if (
        tag === "p" ||
        tag === "li" ||
        tag === "span" ||
        tag === "blockquote"
      )
        el.dataset.anim = "fade";
      else if (
        tag === "button" ||
        tag === "a" ||
        tag === "input" ||
        tag === "textarea"
      )
        el.dataset.anim = "slide-up";
    }
    // stagger containers
    const children = Array.from(el.children || []);
    if (children.length > 3 && !el.dataset.stagger) el.dataset.stagger = "80";
  };

  const scanAndApply = (root = document.body) => {
    const nodes = root.querySelectorAll ? root.querySelectorAll("*") : [];
    nodes.forEach((el) => {
      if (shouldAnimate(el)) applyDefaults(el);
    });
  };

  const onLoad = () => {
    try {
      scanAndApply(document.body);
    } catch (e) {}
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", onLoad);
  else onLoad();

  // watch for dynamically added content and apply animate class
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "childList") {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) {
            if (shouldAnimate(n)) applyDefaults(n);
            n.querySelectorAll &&
              n.querySelectorAll("*").forEach((child) => {
                if (shouldAnimate(child)) applyDefaults(child);
              });
          }
        });
      } else if (m.type === "attributes" && m.attributeName === "class") {
        const t = m.target;
        if (shouldAnimate(t)) applyDefaults(t);
      }
    }
  });
  mo.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
})();

export default undefined;
