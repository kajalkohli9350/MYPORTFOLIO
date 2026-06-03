// IntersectionObserver that supports data-anim and optional data-stagger
function initScrollAnimations() {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        const el = entry.target;
        // apply variant class if provided via data-anim
        const variant = el.dataset && el.dataset.anim;
        if (variant) {
          el.classList.add(`anim-${variant}`);
        }

        // optional stagger value in ms per child
        const staggerAttr = el.dataset && el.dataset.stagger;
        const baseDelay = staggerAttr ? parseInt(staggerAttr, 10) : 60;

        const once = el.dataset && String(el.dataset.once) === "true";

        if (entry.isIntersecting) {
          // reveal parent first then stagger children
          el.classList.add("in-view");
          const children = Array.from(el.children);
          children.forEach((child, i) => {
            if (child.dataset && child.dataset.anim) {
              child.classList.add(`anim-${child.dataset.anim}`);
            }
            const delay = i * baseDelay;
            child.style.transitionDelay = `${delay}ms`;
            child.classList.add("in-view");
          });
          if (once) obs.unobserve(el);
        } else {
          // leaving viewport: remove in-view so animation can re-run on re-enter
          el.classList.remove("in-view");
          Array.from(el.children).forEach((child) => {
            child.classList.remove("in-view");
            child.style.transitionDelay = "";
          });
        }
      });
    },
    { threshold: 0.12 },
  );

  const observed = new WeakSet();
  const observeNode = (n) => {
    if (!n || observed.has(n)) return;
    if (n.nodeType !== 1) return;
    if (n.classList && n.classList.contains("animate")) {
      observer.observe(n);
      observed.add(n);
    }
  };

  // observe existing nodes
  document.querySelectorAll(".animate").forEach(observeNode);

  // NO fallback: rely on MutationObserver + IntersectionObserver

  // watch for elements added later (React mounts)
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "childList") {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains("animate"))
            observeNode(node);
          node.querySelectorAll &&
            node.querySelectorAll(".animate").forEach(observeNode);
        });
      } else if (m.type === "attributes" && m.attributeName === "class") {
        const target = m.target;
        if (target.classList && target.classList.contains("animate"))
          observeNode(target);
      }
    }
  });
  mo.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}

export default initScrollAnimations;
