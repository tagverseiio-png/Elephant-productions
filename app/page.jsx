"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Loaded with ssr:false — Three.js requires window/WebGL, crashes on server
const HeroCanvas = dynamic(() => import("../components/HeroCanvas"), { ssr: false });

const BRANDS = [
  "[Your Client 1]", "[Client 2]", "[Client 3]", "[Client 4]", "[Client 5]"
];


export default function Home() {
  const cleanupRef = useRef({});

  // Hero text reveal via Splitting.js + GSAP
  useEffect(() => {
    let killed = false;
    const run = async () => {
      const { gsap }      = await import("gsap");
      const { splitAndAnimate } = await import("../hooks/useSplitting");
      if (killed) return;

      // Split + animate ELEPHANT then PRODUCTION
      const cleanA = await splitAndAnimate(".hero-brand-elephant", gsap, 0.1);
      const cleanB = await splitAndAnimate(".hero-brand-productions", gsap, 0.45);

      // Tagline + CTA fade in after title
      gsap.fromTo(
        ".hero-tagline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.9, clearProps: "all" }
      );
      gsap.fromTo(
        ".hero-cta-pill",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 1.1, clearProps: "all" }
      );
      // Corner labels
      gsap.fromTo(
        ".hero-corner",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 1.3, stagger: 0.15, clearProps: "all" }
      );

      return () => { cleanA?.(); cleanB?.(); };
    };

    run().then((fn) => { if (fn) cleanupRef._heroCleanup = fn; });
    return () => {
      killed = true;
      cleanupRef._heroCleanup?.();
    };
  }, []);

  // Scroll-based GSAP animations for bento cards + instagram grid
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Bento cards — slide up on scroll
      document.querySelectorAll(".bento-card").forEach((card) => {
        gsap.set(card, { opacity: 0, y: 60 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: card,
            start: "top 88%",
            once: true,
            onEnter: () => {
              gsap.to(card, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", clearProps: "all" });
              // Stagger internal text
              gsap.fromTo(
                card.querySelectorAll(".bento-card-label, .bento-card-title, .bento-card-body"),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1, delay: 0.2, clearProps: "all" }
              );
            },
          })
        );
      });

      // sp-img-block slide in
      document.querySelectorAll(".sp-img-block").forEach((el, i) => {
        gsap.set(el, { opacity: 0, x: i % 2 === 0 ? -50 : 50 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => gsap.to(el, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", clearProps: "all" }),
          })
        );
      });

      // Instagram grid images — staggered fade + scale
      const igPosts = document.querySelectorAll(".insta-post");
      if (igPosts.length) {
        gsap.set(igPosts, { opacity: 0, scale: 0.93 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ".instagram-grid",
            start: "top 88%",
            once: true,
            onEnter: () =>
              gsap.to(igPosts, {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                clearProps: "all",
              }),
          })
        );
      }

      // Home statement
      const stmt = document.querySelector(".home-statement");
      if (stmt) {
        gsap.set(stmt, { opacity: 0, x: -50 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: stmt,
            start: "top 88%",
            onEnter: () => gsap.to(stmt, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }),
          })
        );
      }

      // IG header
      const igHeader = document.querySelector(".ig-header");
      if (igHeader) {
        gsap.set(igHeader, { opacity: 0, y: 30 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: igHeader,
            start: "top 90%",
            once: true,
            onEnter: () => gsap.to(igHeader, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
          })
        );
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, []);

  return (
    <main>
      {/* ══════════════════════════════════════════════════════════
          CINEMATIC HERO
          ══════════════════════════════════════════════════════════ */}
      <section id="hero" className="hero">

        {/* Three.js particle canvas — loaded client-only via dynamic() */}
        <HeroCanvas />

        {/* Video background */}
        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
        />

        {/* Gradient overlay */}
        <div className="hero-overlay" />

        {/* Cinematic grain */}
        <div className="hero-grain" aria-hidden="true" />

        {/* ── BRAND TEXT ── */}
        <div id="hero-brand" className="hero-brand">
          <span className="hero-brand-line hero-brand-elephant">ELEPHANT</span>
          <span className="hero-brand-divider" aria-hidden="true" />
          <span className="hero-brand-line hero-brand-productions">PRODUCTION</span>
        </div>

        {/* ── CORNER LABELS ── */}
        <div className="hero-corner hero-corner--tl" id="hero-bottom-sub">
          <span className="hero-corner-label">EST. 2021</span>
          <span className="hero-corner-label">SINGAPORE</span>
        </div>
        <div className="hero-corner hero-corner--tr" id="hero-bottom-sub2">
          <span className="hero-corner-label">PRODUCTION &amp; CREATIVE</span>
          <span className="hero-corner-label">MEDIA AGENCY</span>
        </div>

        {/* ── BOTTOM CONTENT ── */}
        <div id="hero-bottom" className="hero-bottom">
          <p className="hero-tagline">
            A production-first, creative media agency
          </p>
          <Link href="/work" className="hero-cta-pill" data-cursor-expand>
            <span className="pill-arrow">↑</span>
            <span>VIEW WORK</span>
          </Link>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div className="hero-scroll-indicator">
          <span className="scroll-line" />
          <span className="scroll-text">SCROLL</span>
        </div>

        {/* ── TICKER ── */}
        <div className="hero-ticker">
          <div className="ticker-track">
            {[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="ticker-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INTRO STATEMENT
          ══════════════════════════════════════════════════════════ */}
      <section className="home-statement" data-direction="right" style={{ opacity: 0 }}>
        <p className="statement-text">
          We increase brand visibility through thoughtful storytelling,
          distinct communications strategies, and an unmatched cultural fingerprint.
        </p>
        <Link href="/about" className="statement-link" data-cursor-expand>
          OUR STORY <span>→</span>
        </Link>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BENTO GRID
          ══════════════════════════════════════════════════════════ */}
      <section id="home-grid" className="bento-section">

        {/* CARD 1 */}
        <div className="sp-row" style={{ gap: "20px", marginBottom: "20px" }}>
          <div className="sp-img-block"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80')", borderRadius: "20px", minHeight: "520px", opacity: 0 }} />
          <div className="bento-card"
            style={{ background: "linear-gradient(135deg, #4A3A2F 0%, #352920 100%)", borderRadius: "20px", opacity: 0 }}>
            <div className="bento-card-top">
              <span className="bento-card-label">01 — CREATIVE PRODUCTION</span>
              <h3 className="bento-card-title">Infusing cinematic craft into today's brands</h3>
              <p className="bento-card-body">
                We build brand visibility through powerful visual storytelling,
                sharp creative strategy, and a production lens that makes your
                brand impossible to ignore. With a deep understanding of your
                audience and a hands-on collaborative approach, we bring your
                brand's true identity to the forefront — frame by frame.
              </p>
            </div>
            <Link href="/services" className="bento-card-link" data-cursor-expand>
              <span className="bento-link-icon">↑</span>
              <span className="bento-link-text">OUR SERVICES</span>
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="sp-row" style={{ gap: "20px", marginBottom: "20px" }}>
          <div className="bento-card"
            style={{ background: "linear-gradient(135deg, #2E4B35 0%, #1F3624 100%)", borderRadius: "20px" }}>
            <div className="bento-card-top">
              <span className="bento-card-label">02 — INFLUENCER</span>
              <h3 className="bento-card-title">Maximizing your reach</h3>
              <p className="bento-card-body">
                We connect your brand with the right creators, talent, and
                digital voices to ensure your community becomes your
                most powerful marketing channel. Through our network of
                influencers and content collaborators, we craft campaigns
                that feel genuine, drive real engagement, and build
                lasting brand loyalty.
              </p>
            </div>
            <Link href="/influencers" className="bento-card-link" data-cursor-expand>
              <span className="bento-link-icon">↑</span>
              <span className="bento-link-text">INFLUENCER SERVICES</span>
            </Link>
          </div>
          <div className="sp-img-block"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80')", borderRadius: "20px", minHeight: "520px" }} />
        </div>

        {/* CARD 3 — wide */}
        <div style={{ borderRadius: "20px", overflow: "hidden", marginBottom: "20px" }}>
          <div className="bento-card bento-card--wide"
            style={{ background: "linear-gradient(120deg, #1C3F46 0%, #153238 100%)" }}>
            <div className="bento-card-wide-inner">
              <div className="bento-card-top">
                <span className="bento-card-label">03 — FULL SERVICE</span>
                <h3 className="bento-card-title bento-card-title--wide">Everything you want and more</h3>
              </div>
              <p className="bento-card-body" style={{ maxWidth: "500px" }}>
                From A to Z — helping your vision become a brand identity,
                to full-scale film and photoshoot production, to commercial
                campaigns and social media performance. We offer end-to-end
                creative solutions at every stage of your brand's journey.
              </p>
            </div>
            <Link href="/services#additive-services" className="bento-card-link bento-card-link--wide" data-cursor-expand>
              <span className="bento-link-icon">↑</span>
              <span className="bento-link-text">ADDITIVE SERVICES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INSTAGRAM STRIP
          ══════════════════════════════════════════════════════════ */}
      <section id="instagram" className="ig-section">
        <div className="ig-header">
          <div>
            <span className="ig-label">Follow Us</span>
            <h2 className="ig-title">@elephantproduction</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ig-cta" data-cursor-expand>
            VIEW INSTAGRAM ↗
          </a>
        </div>

        <div className="instagram-grid">
          {[
            "https://images.unsplash.com/photo-1622597467821-12c8a1680d28?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
          ].map((src, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="insta-post"
              style={{ background: `center/cover url('${src}')` }} />
          ))}
        </div>
      </section>
    </main>
  );
}
