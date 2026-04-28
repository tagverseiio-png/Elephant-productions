"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";
import Cursor from "./Cursor";
import ContactModal from "./ContactModal";
import MasterScene from "./MasterScene";

export default function GlobalLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded,    setIsLoaded]    = useState(false);
  const pathname = usePathname();

  // Page load fade-in on each route change
  useEffect(() => {
    setIsLoaded(false);
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  // Scroll reveal via anime.js v4
  useEffect(() => {
    let io;
    const setup = async () => {
      const { animate, stagger } = await import("animejs");

      io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("visible");

          if (el.classList.contains("reveal-individual")) {
            animate(el.querySelectorAll(".reveal-item"), {
              opacity: [0, 1], translateY: [20, 0],
              ease: "out(2)", duration: 500, delay: stagger(120),
            });
          } else if (el.dataset.direction === "left") {
            animate(el, { opacity: [0, 1], translateX: [60, 0], ease: "out(2)", duration: 700 });
          } else if (el.dataset.direction === "right") {
            animate(el, { opacity: [0, 1], translateX: [-60, 0], ease: "out(2)", duration: 700 });
          } else {
            animate(el, { opacity: [0, 1], translateY: [30, 0], ease: "out(2)", duration: 700 });
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".reveal, .reveal-individual, [data-direction]").forEach((el) => io.observe(el));
    };

    setup();
    return () => { if (io) io.disconnect(); };
  }, [pathname]);

  return (
    <div
      className="page-wrapper"
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
    >
      {/* MasterScene: single RAF loop — cursor + nav + hero animations */}
      <MasterScene />

      <Cursor />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      {children}
      <Footer onOpenModal={() => setIsModalOpen(true)} />
    </div>
  );
}
