"use client";
import Link from "next/link";

const BRANDS = [
  "Sweetgreen","HOKA","Away","J. Crew","REI",
  "Fender","Kosas","Lacoste","Vuori","Caraway","Sakara Life",
];

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════════════
          CINEMATIC HERO
          ══════════════════════════════════════════════════════════ */}
      <section id="hero" className="hero">

        {/* Video background */}
        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
        />

        {/* Gradient overlay — richer than flat black */}
        <div className="hero-overlay" />

        {/* Cinematic grain */}
        <div className="hero-grain" aria-hidden="true" />

        {/* ── BRAND TEXT — perfectly centred, RAF animates id="hero-brand" ── */}
        <div id="hero-brand" className="hero-brand">
          <span className="hero-brand-line hero-brand-elephant">ELEPHANT</span>
          <span className="hero-brand-divider" aria-hidden="true" />
          <span className="hero-brand-line hero-brand-productions">PRODUCTIONS</span>
        </div>

        {/* ── CORNER LABELS — editorial feel ── */}
        <div className="hero-corner hero-corner--tl" id="hero-bottom-sub">
          <span className="hero-corner-label">EST. 2018</span>
          <span className="hero-corner-label">NEW YORK / LOS ANGELES</span>
        </div>
        <div className="hero-corner hero-corner--tr" id="hero-bottom-sub2">
          <span className="hero-corner-label">Creative Communications</span>
          <span className="hero-corner-label">Agency</span>
        </div>

        {/* ── BOTTOM CONTENT — tagline + CTA ── */}
        <div id="hero-bottom" className="hero-bottom">
          <p className="hero-tagline">
            A full-funnel, creative communications agency
          </p>
          <Link href="/work" className="hero-cta-pill" data-cursor-expand>
            <span>VIEW OUR WORK</span>
            <span className="pill-arrow">↗</span>
          </Link>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div className="hero-scroll-indicator" id="hero-bottom">
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
      <section className="home-statement reveal" data-direction="right">
        <p className="statement-text">
          We increase brand visibility through thoughtful storytelling,
          distinct communications strategies, and an unmatched cultural fingerprint.
        </p>
        <Link href="/about" className="statement-link" data-cursor-expand>
          Our Story <span>→</span>
        </Link>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BENTO GRID
          ══════════════════════════════════════════════════════════ */}
      <section id="home-grid" className="bento-section">

        {/* CARD 1 */}
        <div className="sp-row" style={{ gap: "20px", marginBottom: "20px" }}>
          <div className="sp-img-block reveal" data-direction="right"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80')", borderRadius: "20px", minHeight: "520px" }} />
          <div className="bento-card reveal" data-direction="left"
            style={{ background: "linear-gradient(135deg, #7a2d12 0%, #a8420f 100%)", borderRadius: "20px" }}>
            <div className="bento-card-top">
              <span className="bento-card-label">01 — Communications</span>
              <h3 className="bento-card-title">Infusing creative alchemy into today's brands</h3>
              <p className="bento-card-body">
                We create magic for brands by building their authority and differentiated
                perspective in the market through thoughtful storytelling.
              </p>
            </div>
            <Link href="/services" className="bento-card-link" data-cursor-expand>
              <span className="bento-link-text">OUR SERVICES</span>
              <span className="bento-link-icon">↗</span>
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="sp-row" style={{ gap: "20px", marginBottom: "20px" }}>
          <div className="bento-card reveal" data-direction="right"
            style={{ background: "linear-gradient(135deg, #1e3d28 0%, #2f5a3c 100%)", borderRadius: "20px" }}>
            <div className="bento-card-top">
              <span className="bento-card-label">02 — Influencer</span>
              <h3 className="bento-card-title">Maximizing your orbit</h3>
              <p className="bento-card-body">
                We connect your brand with the right talent, VIPs, and influencers to ensure
                the relationship with your community is a powerful lever in the overall strategy.
              </p>
            </div>
            <Link href="/influencers" className="bento-card-link" data-cursor-expand>
              <span className="bento-link-text">INFLUENCER / VIP CARE</span>
              <span className="bento-link-icon">↗</span>
            </Link>
          </div>
          <div className="sp-img-block reveal" data-direction="left"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80')", borderRadius: "20px", minHeight: "520px" }} />
        </div>

        {/* CARD 3 — wide single card */}
        <div className="reveal" data-direction="right"
          style={{ borderRadius: "20px", overflow: "hidden", marginBottom: "20px" }}>
          <div className="bento-card bento-card--wide"
            style={{ background: "linear-gradient(120deg, #0a2e38 0%, #0f4556 60%, #1a6070 100%)" }}>
            <div className="bento-card-wide-inner">
              <div className="bento-card-top">
                <span className="bento-card-label">03 — Full Service</span>
                <h3 className="bento-card-title bento-card-title--wide">Everything you want and more</h3>
              </div>
              <p className="bento-card-body" style={{ maxWidth: "500px" }}>
                From A to Z — helping your vision become a brand, to photoshoot generation and execution,
                to collaborating on brand campaigns and maximizing performance.
              </p>
            </div>
            <Link href="/services" className="bento-card-link bento-card-link--wide" data-cursor-expand>
              <span className="bento-link-text">ADDITIVE SERVICES</span>
              <span className="bento-link-icon">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INSTAGRAM FEED
          ══════════════════════════════════════════════════════════ */}
      <section id="instagram" className="ig-section">
        <div className="ig-header reveal" data-direction="right">
          <div>
            <span className="ig-label">Follow along</span>
            <h2 className="ig-title">@azionepr</h2>
          </div>
          <a href="https://instagram.com/azionepr" target="_blank" rel="noopener noreferrer"
            className="ig-cta" data-cursor-expand>
            VIEW INSTAGRAM ↗
          </a>
        </div>

        <div className="instagram-grid reveal-individual">
          {[
            "https://images.unsplash.com/photo-1622597467821-12c8a1680d28?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
          ].map((src, i) => (
            <a key={i} href="#" className="insta-post reveal-item"
              style={{ background: `center/cover url('${src}')` }} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA BLOCK
          ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="cta-section">
        <div className="cta-inner reveal" data-direction="right">
          <span className="cta-eyebrow">Let's create something great</span>
          <h2 className="cta-headline">
            Ready to tell<br />
            <em>your</em> story?
          </h2>
          <a href="#contact" className="cta-button" data-cursor-expand>
            <span>GET IN TOUCH</span>
            <span className="cta-btn-arrow">↗</span>
          </a>
        </div>
        <div className="cta-decoration" aria-hidden="true">
          <span className="cta-deco-text">EP</span>
        </div>
      </section>

    </main>
  );
}
