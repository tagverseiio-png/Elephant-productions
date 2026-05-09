"use client";
import { useEffect, useRef } from "react";

/**
 * useSplitting — dynamically loads Splitting.js and splits target elements
 * @param {string} selector — CSS selector for elements to split
 * @param {object} opts — Splitting options (default: { by: "chars" })
 */
export function useSplitting(selector, opts = { by: "chars" }) {
  const splitRef = useRef(null);

  useEffect(() => {
    if (!selector) return;
    let cancelled = false;

    import("splitting").then((mod) => {
      if (cancelled) return;
      const Splitting = mod.default || mod;
      splitRef.current = Splitting({ target: selector, ...opts });
    });

    return () => { cancelled = true; };
  }, [selector]);

  return splitRef;
}

/**
 * splitAndAnimate — splits a selector and immediately starts GSAP char animation
 * @returns cleanup function
 */
export async function splitAndAnimate(selector, gsap, delay = 0) {
  const Splitting = (await import("splitting")).default;
  const results = Splitting({ target: selector, by: "chars" });

  const allChars = results.flatMap((r) => r.chars);
  if (!allChars.length) return () => {};

  gsap.set(allChars, { opacity: 0, y: "100%", clipPath: "inset(0 0 100% 0)" });
  const tween = gsap.to(allChars, {
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.025,
    delay,
  });

  return () => tween.kill();
}
