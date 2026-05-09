"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { splitAndAnimate } from "../../hooks/useSplitting";

const ALL_CARDS = [
  { category: "BEAUTY",    label: "BEAUTY",     title: "Brand Campaign Launch",      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" },
  { category: "LIFESTYLE", label: "LIFESTYLE",  title: "Ambassador Program",         img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
  { category: "WELLNESS",  label: "WELLNESS",   title: "Wellness Retreat",           img: "https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80" },
  { category: "FASHION",   label: "FASHION",    title: "Creator Collab Series",      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80" },
  { category: "FOOD",      label: "FOOD & BEV", title: "Product Seeding Campaign",   img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" },
];

const FILTERS = ["ALL", "FASHION", "BEAUTY", "LIFESTYLE", "WELLNESS", "ACTIVEWEAR", "FOOTWEAR", "FOOD & BEVERAGE"];

export default function Influencers() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const visibleCards = activeFilter === "ALL"
    ? ALL_CARDS
    : ALL_CARDS.filter((c) =>
        c.category === activeFilter || c.label === activeFilter
      );

  // ── Splitting.js + GSAP ──────────────────────────────────────
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero title char reveal
      await splitAndAnimate("#influencers-title", gsap, 0.1);
      gsap.fromTo(
        "#influencers-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.7, clearProps: "all" }
      );

      // "The right voice changes everything" — italic heading
      const bigHeading = document.querySelector(".influencer-italic-heading");
      if (bigHeading) {
        gsap.set(bigHeading, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: bigHeading,
            start: "top 88%",
            onEnter: () => gsap.to(bigHeading, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", clearProps: "all" }),
          })
        );
      }

      // Body paragraphs — stagger up
      const bodyParas = document.querySelectorAll(".influencer-body-text p");
      if (bodyParas.length) {
        gsap.set(bodyParas, { opacity: 0, y: 30 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: bodyParas[0],
            start: "top 88%",
            onEnter: () => gsap.to(bodyParas, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15, clearProps: "all" }),
          })
        );
      }

      // What's Included — Anime.js draw from left + divider scale
      const includedItems = document.querySelectorAll(".add-pg-item");
      const includedSection = document.querySelector(".whats-included-section");
      if (includedItems.length && includedSection) {
        stTriggers.push(
          ScrollTrigger.create({
            trigger: includedSection,
            start: "top 85%",
            onEnter: async () => {
              const { animate, stagger } = await import("animejs");
              animate(includedItems, {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 500,
                ease: "out(3)",
                delay: stagger(80),
              });
            },
          })
        );
      }

      // Grid cards — GSAP stagger on scroll
      const cards = document.querySelectorAll(".inf-card");
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ".influencer-grid",
            start: "top 88%",
            onEnter: () => gsap.to(cards, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }),
          })
        );
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, []);

  return (
    <main>
      {/* HERO */}
      <section id="influencers" className="influencer-page-wrapper" style={{ paddingBottom: 0 }}>
        <div className="about-header" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
          <h2 id="influencers-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(60px, 12vw, 150px)", color: "#fff", lineHeight: 0.9, fontWeight: 400 }}>
            Influencer Collaborations
          </h2>
          <p id="influencers-sub" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", marginTop: "24px", fontSize: "16px", lineHeight: "1.6", opacity: 0 }}>
            We don't just find influencers. We build the right relationships for your brand.
          </p>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="home-statement" style={{ background: "var(--cream)", borderBottom: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3 className="influencer-italic-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontStyle: "italic", color: "var(--black)", marginBottom: "20px", opacity: 0 }}>
            The right voice changes everything.
          </h3>
          <div className="influencer-body-text">
            <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", lineHeight: "1.8", maxWidth: "800px" }}>
              We connect your brand with creators, digital talent, and cultural voices who genuinely align with what you stand for. Through our growing network of influencers across lifestyle, fashion, food, fitness, and entertainment — we build campaigns that feel authentic, perform on platform, and drive real business results.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", lineHeight: "1.8", maxWidth: "800px" }}>
              From micro-influencers with high-trust communities to established creators with massive reach — we manage the full relationship so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="additive-services-page whats-included-section" style={{ background: "var(--black)", paddingTop: "100px", paddingBottom: "100px" }}>
        <h2 className="additive-pg-header" style={{ color: "#fff" }}>What's Included</h2>
        <div className="add-pg-list">
          {[
            "Influencer Identification & Vetting",
            "Outreach & Relationship Management",
            "Campaign Brief & Creative Direction",
            "UGC Content Coordination",
            "Influencer Event Hosting",
            "Contract & Logistics Management",
            "Community Growth Strategy",
            "Performance Reporting & Analytics",
            "Affiliate Link & Commission Management",
            "Long-Term Creator Partnership Building",
          ].map((item, i) => (
            <div key={i} className="add-pg-item" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="influencer-page-wrapper" style={{ paddingTop: "80px" }}>
        <div className="influencer-filter">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="influencer-grid">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card) => (
              <motion.div
                key={card.title}
                layout
                className="inf-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="inf-card-wrapper">
                  <img className="inf-card-img" src={card.img} alt={card.label} />
                </div>
                <div className="inf-card-info">
                  <span className="inf-brand-label">{card.label}</span>
                  <h3>{card.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
