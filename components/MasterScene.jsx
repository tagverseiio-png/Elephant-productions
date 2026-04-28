"use client";
import { useEffect } from "react";

/**
 * MasterScene — single requestAnimationFrame loop
 * Controls: cursor movement, cursor sizing, navbar reveal,
 *            hero brand text scale/fade, hero bottom fade.
 *
 * Updates DOM directly (no React state) to avoid re-renders.
 * mousemove only writes to variables; RAF reads them each frame.
 */
export default function MasterScene() {
  useEffect(() => {
    // ── DOM refs (grabbed by id, set in Hero / Nav / Cursor) ──
    const ring      = document.getElementById("cursor-ring");
    const dot       = document.getElementById("cursor-dot");
    const arrow     = document.getElementById("cursor-arrow");
    const nav       = document.getElementById("mainNav");
    const brandText = document.getElementById("hero-brand");
    const heroBtm   = document.getElementById("hero-bottom");

    // ── Shared mutable state ─────────────────────────────────
    let mouseX = window.innerWidth  / 2;
    let mouseY = window.innerHeight / 2;
    let dotX   = mouseX;
    let dotY   = mouseY;
    let scrollY        = window.scrollY;
    let isHoveringCTA  = false;
    let navVisible     = false;
    let cursorScrolled = false;
    let arrowVisible   = false;
    let rafId;

    const lerp = (a, b, t) => a + (b - a) * t;

    const showArrow = (sym) => {
      if (!arrow) return;
      if (arrow.textContent !== sym) arrow.textContent = sym;
      if (!arrowVisible) {
        arrowVisible = true;
        arrow.classList.add("cursor-arrow--visible");
      }
    };
    const hideArrow = () => {
      if (!arrowVisible || !arrow) return;
      arrowVisible = false;
      arrow.classList.remove("cursor-arrow--visible");
    };

    // ── mousemove — only writes variables, no DOM updates ────
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!ring) return;
      const ctaTarget = e.target.closest(
        "[data-cursor-expand], .hero-cta-pill, .cta-link-inline"
      );
      if (ctaTarget && !isHoveringCTA) {
        isHoveringCTA = true;
        ring.classList.add("cursor-ring--cta");
        showArrow("↗");
      } else if (!ctaTarget && isHoveringCTA) {
        isHoveringCTA = false;
        ring.classList.remove("cursor-ring--cta");
        hideArrow();
      }
    };

    const onMouseLeave = () => {
      if (ring) ring.style.opacity = "0";
      if (dot)  dot.style.opacity  = "0";
    };
    const onMouseEnter = () => {
      if (ring) ring.style.opacity = "1";
      if (dot)  dot.style.opacity  = "1";
    };

    document.addEventListener("mousemove",  onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // ── Master RAF tick ──────────────────────────────────────
    const tick = () => {
      scrollY = window.scrollY;

      // 1. Cursor ring — instant snap
      if (ring) {
        ring.style.left = mouseX + "px";
        ring.style.top  = mouseY + "px";
      }

      // 2. Trailing dot — lerp at 0.14
      dotX = lerp(dotX, mouseX, 0.14);
      dotY = lerp(dotY, mouseY, 0.14);
      if (dot) {
        dot.style.left = dotX + "px";
        dot.style.top  = dotY + "px";
      }

      // 3. Cursor size on scroll (60px threshold)
      if (ring && dot && !isHoveringCTA) {
        if (scrollY > 60 && !cursorScrolled) {
          cursorScrolled = true;
          ring.classList.add("cursor-ring--scrolled");
          dot.classList.add("cursor-dot--scrolled");
        } else if (scrollY <= 60 && cursorScrolled) {
          cursorScrolled = false;
          ring.classList.remove("cursor-ring--scrolled");
          dot.classList.remove("cursor-dot--scrolled");
        }
      }

      // 4. Navbar — hidden until 80px, then slides in
      if (nav) {
        if (scrollY > 80 && !navVisible) {
          navVisible = true;
          nav.classList.add("visible");
        } else if (scrollY <= 80 && navVisible) {
          navVisible = false;
          nav.classList.remove("visible");
        }
      }

      // 5. Hero brand text — scale 1→0.65, opacity 1→0, translateY 0→-40px
      //    MUST keep translate(-50%,-50%) to stay centred — RAF owns this transform
      if (brandText) {
        const ratio   = Math.min(scrollY / 300, 1);
        const scale   = 1 - ratio * 0.35;
        const opacity = Math.max(1 - ratio * 1.1, 0);
        const tY      = -ratio * 40;
        brandText.style.transform = `translate(-50%, -50%) scale(${scale}) translateY(${tY}px)`;
        brandText.style.opacity   = opacity;
      }

      // 6. Hero bottom — fades out faster (disappears by ~120px scroll)
      if (heroBtm) {
        const ratio   = Math.min(scrollY / 300, 1);
        const opacity = Math.max(1 - ratio * 2.5, 0);
        heroBtm.style.opacity = opacity;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove",  onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return null; // renders nothing — pure controller
}
