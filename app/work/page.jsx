"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { splitAndAnimate } from "../../hooks/useSplitting";

const ALL_PROJECTS = [
  { category: "FASHION",       brands: ["Lacoste", "Mansur Gavriel", "J.Crew", "Madhappy"],      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",  colorClass: "wp-fashion"    },
  { category: "BEAUTY",        brands: ["Kosas", "Alo Beauty", "Living Proof", "Sol de Janeiro"], img: "https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80", colorClass: "wp-beauty"     },
  { category: "WELLNESS",      brands: ["Sakara Life", "HigherDOSE", "CorePower Yoga", "Equinox"],img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80", colorClass: "wp-wellness"   },
  { category: "LIFESTYLE",     brands: ["Away", "Tender", "Bluebird", "Aero"],                   img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",  colorClass: "wp-lifestyle"  },
  { category: "FOOD",          brands: ["Pressed", "Yasso", "Sweetgreen", "JAJA"],               img: "https://images.unsplash.com/photo-1622597467821-12c8a1680d28?auto=format&fit=crop&q=80", colorClass: "wp-food"       },
  { category: "HOME",          brands: ["Caraway", "Boy Smells", "West Elm", "Beast"],           img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", colorClass: "wp-home"       },
  { category: "FOOTWEAR",      brands: ["HOKA", "Havaianas", "KIZIK", "ALDO"],                   img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",  colorClass: "wp-footwear"   },
  { category: "ACTIVEWEAR",    brands: ["Vuori", "Bandier", "Outdoor Voices", "Year of Ours"],   img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80", colorClass: "wp-activewear" },
];

const FILTERS = ["ALL", "FASHION", "BEAUTY", "WELLNESS", "LIFESTYLE", "FOOD", "HOME", "FOOTWEAR", "ACTIVEWEAR"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const visibleProjects = activeFilter === "ALL"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  // ── GSAP + Splitting.js animations ──────────────────────────
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero title char reveal
      await splitAndAnimate("#work-title", gsap, 0.1);

      // Work page cards — stagger fade up on scroll
      const cards = document.querySelectorAll(".work-page-card");
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 50 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ".work-page-grid",
            start: "top 88%",
            onEnter: () =>
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12,
                clearProps: "all",
              }),
          })
        );
      }

      // "What we offer" section
      const wwo = document.querySelector("#what-we-offer");
      if (wwo) {
        gsap.set(wwo, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: wwo,
            start: "top 88%",
            onEnter: () => gsap.to(wwo, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }),
          })
        );
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, [activeFilter]);

  // GSAP image hover scale via mouseenter/mouseleave
  useEffect(() => {
    const attachHover = async () => {
      const { gsap } = await import("gsap");
      const imgs = document.querySelectorAll(".wp-card-right");
      imgs.forEach((img) => {
        const card = img.closest(".work-page-card");
        if (!card) return;
        const onEnter = () => gsap.to(img, { scale: 1.05, duration: 0.5, ease: "power2.out" });
        const onLeave = () => gsap.to(img, { scale: 1,    duration: 0.5, ease: "power2.out" });
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        img._hoverEnter = onEnter;
        img._hoverLeave = onLeave;
        img._hoverCard  = card;
      });
    };
    attachHover();
    return () => {
      document.querySelectorAll(".wp-card-right").forEach((img) => {
        if (img._hoverCard) {
          img._hoverCard.removeEventListener("mouseenter", img._hoverEnter);
          img._hoverCard.removeEventListener("mouseleave", img._hoverLeave);
        }
      });
    };
  }, [visibleProjects]);

  return (
    <main>
      {/* WORK HEADER */}
      <section id="work-header">
        <div className="about-header">
          <h2
            id="work-title"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(100px, 20vw, 300px)", color: "var(--white)", lineHeight: 0.9, fontWeight: 400 }}
          >
            Work
          </h2>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="work-filter-tabs" style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "24px 40px", background: "var(--white)", borderBottom: "1px solid #e0dbd4" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`filter-btn ${activeFilter === f ? "active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* WORK CONTENT */}
      <section id="work-page-content">
        <div className="work-page-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.category}
                layout
                className={`work-page-card ${project.colorClass}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="wp-card-left">
                  <span className="wp-cat">{project.category}</span>
                  <div className="wp-brands">
                    <h3 className="wp-primary">
                      {project.brands[0]} <span className="wp-circle-icon">↗</span>
                    </h3>
                    {project.brands.slice(1).map((b) => (
                      <span key={b} className="wp-secondary">{b}</span>
                    ))}
                  </div>
                </div>
                <div
                  className="wp-card-right"
                  style={{ background: `center/cover url('${project.img}')`, overflow: "hidden" }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{ padding: "80px 40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", background: "var(--white)", opacity: 0 }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 80px)", color: "var(--black)", lineHeight: 1 }}>
          What we offer
        </h2>
        <Link href="/services" className="cta-link-inline">
          SERVICES <span className="arrow-circle black-bg">→</span>
        </Link>
      </section>
    </main>
  );
}
