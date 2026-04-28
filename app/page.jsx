"use client";
import Link from "next/link";

const BRANDS = [
  "Sweetgreen","HOKA","Away","J. Crew","REI",
  "Fender","Kosas","Lacoste","Vuori","Caraway","Sakara Life",
];

export default function Home() {
  return (
    <main>

      {/* ════════════════════════════════════════════════════
          CINEMATIC HERO
          ════════════════════════════════════════════════════ */}
      <section id="hero" className="hero">

        {/* 1. Video background — replace /hero-video.mp4 with your file */}
        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1920"
        />

        {/* 2. Dark overlay for text readability */}
        <div className="hero-overlay" />

        {/* 3. Grain / noise texture layer — 3% opacity */}
        <div className="hero-grain" aria-hidden="true" />

        {/* 4. Giant brand text — RAF animates id="hero-brand" */}
        <div id="hero-brand" className="hero-brand">
          ELEPHANT<br />PRODUCTIONS
        </div>

        {/* 5. Bottom content — tagline + pill CTA — RAF fades faster */}
        <div id="hero-bottom" className="hero-bottom">
          <p className="hero-tagline">
            A full-funnel, creative communications agency based in NY &amp; LA.
          </p>
          <a href="/work" className="hero-cta-pill" data-cursor-expand>
            <span>VIEW WORK</span>
            <span className="pill-arrow">↗</span>
          </a>
        </div>

        {/* 6. Ticker strip pinned to hero bottom edge */}
        <div className="hero-ticker">
          <div className="ticker-track">
            {[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="ticker-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BENTO GRID
          ════════════════════════════════════════════════════ */}
      <section id="home-grid" className="bento-section">
        {/* CARD 1 */}
        <div className="sp-row" style={{ marginBottom: "24px", gap: "24px" }}>
          <div
            className="sp-img-block reveal" data-direction="right"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80')", borderRadius: "16px" }}
          />
          <div className="sp-text-block reveal" data-direction="left"
            style={{ background: "#803117", padding: "60px 50px", borderRadius: "16px", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 className="sp-card-title">Infusing creative alchemy into today's brands</h3>
              <p className="sp-card-body">
                We increase brand visibility and awareness through thoughtful storytelling and distinct communications strategies.
                With an unmatched consumer understanding and a true cultural fingerprint, we create magic for brands.
              </p>
            </div>
            <Link href="/services" className="sp-card-link" data-cursor-expand>
              <span className="circle-icon">→</span> OUR SERVICES
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="sp-row" style={{ marginBottom: "24px", gap: "24px" }}>
          <div className="sp-text-block reveal" data-direction="right"
            style={{ background: "#27402c", padding: "60px 50px", borderRadius: "16px", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 className="sp-card-title">Maximizing your orbit</h3>
              <p className="sp-card-body">
                We connect your brand with the right talent, VIPs, and influencers to ensure the relationship with your community
                is a powerful lever in the overall communications strategy.
              </p>
            </div>
            <Link href="/influencers" className="sp-card-link" data-cursor-expand>
              <span className="circle-icon">→</span> INFLUENCER / VIP CARE
            </Link>
          </div>
          <div
            className="sp-img-block reveal" data-direction="left"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80')", borderRadius: "16px" }}
          />
        </div>

        {/* CARD 3 */}
        <div className="sp-row" style={{ marginBottom: "24px", gap: "24px" }}>
          <div
            className="sp-img-block reveal" data-direction="right"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80')", borderRadius: "16px" }}
          />
          <div className="sp-text-block reveal" data-direction="left"
            style={{ background: "#0f3b46", padding: "60px 50px", borderRadius: "16px", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 className="sp-card-title">Everything you want and more</h3>
              <p className="sp-card-body">
                From A to Z helping your vision become a brand, to photoshoot generation and execution, to collaborating on
                brand campaigns and maximizing the performance side of your business.
              </p>
            </div>
            <Link href="/services" className="sp-card-link" data-cursor-expand>
              <span className="circle-icon">→</span> ADDITIVE SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          INSTAGRAM FEED
          ════════════════════════════════════════════════════ */}
      <section id="instagram" style={{ padding: "40px 40px 80px", background: "var(--white)" }}>
        <div className="ig-header reveal" data-direction="right">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", fontWeight: 400, margin: 0 }}>
            Follow Us
          </h2>
          <a href="https://instagram.com/azionepr" target="_blank" rel="noopener noreferrer" className="ig-handle">
            @azionepr
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
              style={{ display: "block", aspectRatio: "1", borderRadius: "12px", overflow: "hidden", background: `center/cover url('${src}')` }}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════ */}
      <section id="contact">
        <div className="cta-block reveal" data-direction="right">
          <h2>
            Interested in our work?<br />
            Let's talk.{" "}
            <a href="#contact" className="cta-link-inline" data-cursor-expand>
              <span className="arrow-circle black-bg">↗</span>
              CONTACT US
            </a>
          </h2>
        </div>
      </section>

    </main>
  );
}
