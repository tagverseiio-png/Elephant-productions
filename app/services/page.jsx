export default function Services() {
  return (
    <main>
      {/* SERVICES HEADER */}
      <section id="services-header">
        <div className="about-header">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(100px, 20vw, 300px)", color: "var(--white)", lineHeight: 0.9, fontWeight: 400 }}>
            Services
          </h2>
        </div>
      </section>

      {/* SERVICES PAGE CONTENT */}
      <section id="services-page-content">
        <div className="services-page-wrapper">
          {/* ROW 1 */}
          <div className="sp-row">
            <div className="sp-text-block sp-blue reveal">
              <div>
                <h3 className="sp-title">PR &amp; Comms</h3>
                <p className="sp-desc">
                  We foster authentic connections. We build relevance, buzz and authority. With deep, longstanding relationships, our team acts
                  natively on your behalf to strategically position your product perfectly with the right audiences.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Public Relations</span>
                <span className="sp-tag-item">Media Relations</span>
                <span className="sp-tag-item">Corporate Comms</span>
                <span className="sp-tag-item">Product Placement</span>
                <span className="sp-tag-item">Crisis Communications</span>
                <span className="sp-tag-item">Media Training</span>
              </div>
            </div>
            <div className="sp-img-block reveal" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* ROW 2 */}
          <div className="sp-row">
            <div className="sp-img-block reveal" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-dark reveal">
              <div>
                <h3 className="sp-title">Influencer &amp; VIP<br />Programming</h3>
                <p className="sp-desc">
                  We build influencer foundations that will pay off for the lifespan of a campaign. From initial seeding programs, experiential
                  excursions, and beyond. In addition to broad scale seeding, we design bespoke approaches to activate specialized communities.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Influencer Strategy</span>
                <span className="sp-tag-item">VIP Seeding</span>
                <span className="sp-tag-item">Micro-Influencers</span>
                <span className="sp-tag-item">Key Opinion Leaders</span>
                <span className="sp-tag-item">Talent Management</span>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="sp-row">
            <div className="sp-text-block sp-teal reveal">
              <div>
                <h3 className="sp-title">Talent<br />Partnerships</h3>
                <p className="sp-desc">
                  Connecting our brands directly with cultural leaders, we orchestrate high-level partnerships and celebrity ambassadorships.
                  Turning organic adoration into meaningful alliances.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Ambassadorships</span>
                <span className="sp-tag-item">Celebrity Seeding</span>
                <span className="sp-tag-item">Brand Collaborations</span>
                <span className="sp-tag-item">Spokesperson Procurement</span>
              </div>
            </div>
            <div className="sp-img-block reveal" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* ROW 4 */}
          <div className="sp-row">
            <div className="sp-img-block reveal" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-green reveal">
              <div>
                <h3 className="sp-title">Event<br />Management</h3>
                <p className="sp-desc">
                  We execute show-stopping events that bring a brand's narrative to life at every touchpoint. No detail goes unseen; our
                  comprehensive event management team is involved hands on in every physical activation step of the process, ensuring perfectly
                  seamless experiences.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Experiential Strategy</span>
                <span className="sp-tag-item">Brand Activations</span>
                <span className="sp-tag-item">Press Dinners</span>
                <span className="sp-tag-item">Deskside Tours</span>
                <span className="sp-tag-item">Pop-up Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIVE SERVICES */}
      <section className="additive-services-page reveal">
        <h2 className="additive-pg-header">Additive Services</h2>
        <div className="add-pg-list">
          <div className="add-pg-item">Affiliate Management / Performance PR</div>
          <div className="add-pg-item">Pre-Launch Brand Strategy and Positioning</div>
          <div className="add-pg-item">Affiliate / Performance Digital Marketing</div>
          <div className="add-pg-item">Founder and Executive Media Training</div>
          <div className="add-pg-item">Out of Home - Digital Campaign Development and Management</div>
          <div className="add-pg-item">Amazon and Retail Strategy Support</div>
          <div className="add-pg-item">Brand Strategy</div>
          <div className="add-pg-item">Social Media Management</div>
          <div className="add-pg-item">Fractional Marketing Support</div>
          <div className="add-pg-item">Event Production</div>
          <div className="add-pg-item">Merch & Gifting Production</div>
          <div className="add-pg-item">Creative Asset Development</div>
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
