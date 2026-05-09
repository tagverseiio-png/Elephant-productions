"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";
import Cursor from "./Cursor";
import ContactModal from "./ContactModal";
import MasterScene from "./MasterScene";

export default function GlobalLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const lenisTickRef = useRef(null);

  // ── Lenis smooth scroll + GSAP ScrollTrigger integration ──
  useEffect(() => {
    let gsapInstance;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      const { gsap }           = await import("gsap");
      const { ScrollTrigger }  = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      // Ensure animations don't reverse when scrolling back up
      ScrollTrigger.defaults({
        toggleActions: "play none none none",
        start: "top 85%",
      });

      // Lenis takes over — disable native smooth scroll
      document.documentElement.style.scrollBehavior = "auto";

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });
      lenisRef.current = lenis;

      // Sync Lenis tick with GSAP for accurate ScrollTrigger positions
      const tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      lenisTickRef.current = tick;

      lenis.on("scroll", ScrollTrigger.update);
      
      // Refresh ScrollTrigger once Lenis is initialized
      ScrollTrigger.refresh();
    };

    init();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (gsapInstance && lenisTickRef.current) {
        gsapInstance.ticker.remove(lenisTickRef.current);
      }
    };
  }, []);

  // ── GSAP single page-entry animation (replaces Framer Motion fade) ──
  // Runs on every route change. clearProps:'all' removes inline styles after.
  useEffect(() => {
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      // Small delay so page animations set up first
      setTimeout(() => ScrollTrigger.refresh(), 100);

      // Single, clean page entry — GSAP owns this, nothing else
      gsap.fromTo(
        ".page-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",  // remove inline styles when done
          onComplete: () => ScrollTrigger.refresh(),
        }
      );
    };

    run();
  }, [pathname]);

  return (
    <div className="page-wrapper">
      {/* MasterScene: RAF loop — cursor + nav + hero parallax */}
      <MasterScene />
      <Cursor />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Nav onOpenModal={() => setIsModalOpen(true)} />

      {/* page-content is the ONLY element GSAP fades in on route change */}
      <div className="page-content">
        {children}
      </div>

      <Footer onOpenModal={() => setIsModalOpen(true)} />
    </div>
  );
}
