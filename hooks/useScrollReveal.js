"use client";
import { useEffect } from "react";

/**
 * useScrollReveal — GSAP ScrollTrigger helper
 * Call inside a useEffect after GSAP is loaded.
 * Returns a cleanup function.
 *
 * Usage:
 *   const cleanup = await useScrollReveal();
 *   return cleanup;
 */
export async function setupScrollReveal() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const triggers = [];

  // Fade up
  document.querySelectorAll("[data-gsap='fade-up']").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 40 });
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      })
    );
  });

  // Stagger children
  document.querySelectorAll("[data-gsap='stagger-up']").forEach((el) => {
    const children = el.children;
    gsap.set(children, { opacity: 0, y: 30 });
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () =>
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          }),
      })
    );
  });

  // Slide from left
  document.querySelectorAll("[data-gsap='slide-left']").forEach((el) => {
    gsap.set(el, { opacity: 0, x: -60 });
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () => gsap.to(el, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }),
      })
    );
  });

  // Slide from right
  document.querySelectorAll("[data-gsap='slide-right']").forEach((el) => {
    gsap.set(el, { opacity: 0, x: 60 });
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        onEnter: () => gsap.to(el, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }),
      })
    );
  });

  return () => {
    triggers.forEach((t) => t.kill());
  };
}

/**
 * useScrollReveal hook — call inside a component
 */
export function useScrollReveal() {
  useEffect(() => {
    let cleanup;
    setupScrollReveal().then((fn) => { cleanup = fn; });
    return () => { if (cleanup) cleanup(); };
  }, []);
}
