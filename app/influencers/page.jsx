"use client";
import { useState } from "react";

export default function Influencers() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "FASHION", "BEAUTY", "HOME", "LIFESTYLE", "WELLNESS", "ACTIVEWEAR", "FOOTWEAR", "FOOD & BEVERAGE"];

  return (
    <main>
      {/* INFLUENCERS CONTENT */}
      <section id="influencers" className="influencer-page-wrapper">
        <div className="influencers-header reveal">
          <h2>Influencer<br />Collaborations</h2>
          <p>
            We fuel brand awareness, boost conversion, and create tangible ROI by fostering authentic partnerships between influencers and brands.
            Because influencers are changing the way we interact with brands, you might trust a post from your favorite creator more than a
            celebrity commercial.
          </p>
        </div>
        <div className="influencer-filter">
          {filters.map((filter) => (
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
          {/* COL 1 (Or staggered items) */}
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" alt="Kiehl's" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">BEAUTY</span>
              <h3>KIEHL'S Acne Liquid Patch Launch</h3>
            </div>
          </div>
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80" alt="Farmacy" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">BEAUTY</span>
              <h3>Farmacy</h3>
            </div>
          </div>
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80" alt="TravisMathew" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">FASHION / WELLNESS</span>
              <h3>TravisMathew Women's Ojai Content Trip</h3>
            </div>
          </div>
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Sundays" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">LIFESTYLE / WELLNESS</span>
              <h3>Sundays Furniture Ambassador Program</h3>
            </div>
          </div>
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80" alt="ALDO" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">FOOTWEAR</span>
              <h3>ALDO VIP Dressing</h3>
            </div>
          </div>
          <div className="inf-card reveal">
            <div className="inf-card-wrapper">
              <img className="inf-card-img" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" alt="REI" />
            </div>
            <div className="inf-card-info">
              <span className="inf-brand-label">PR</span>
              <h3>REI Influencer Programming</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact">
        <div className="cta-block reveal">
          <h2>
            Interested in our work?<br />
            Let's talk.
            <a href="#contact" className="cta-link-inline">
              <span className="arrow-circle black-bg">↗</span>
              CONTACT US
            </a>
          </h2>
        </div>
      </section>
    </main>
  );
}
