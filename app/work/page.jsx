import Link from "next/link";

export default function Work() {
  return (
    <main>
      {/* WORK HEADER */}
      <section id="work-header">
        <div className="about-header">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(100px, 20vw, 300px)", color: "var(--white)", lineHeight: 0.9, fontWeight: 400 }}>
            Work
          </h2>
        </div>
      </section>

      {/* WORK CONTENT */}
      <section id="work-page-content">
        <div className="work-page-grid">
          {/* Lacoste */}
          <div className="work-page-card wp-fashion reveal">
            <div className="wp-card-left">
              <span className="wp-cat">FASHION</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Lacoste <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Mansur Gavriel</span>
                <span className="wp-secondary">J.Crew</span>
                <span className="wp-secondary">Madhappy</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80')" }}></div>
          </div>
          
          {/* Kosas */}
          <div className="work-page-card wp-beauty reveal">
            <div className="wp-card-left">
              <span className="wp-cat">BEAUTY</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Kosas <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Alo Beauty</span>
                <span className="wp-secondary">Living Proof</span>
                <span className="wp-secondary">Sol de Janeiro</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1596462502278-27bf84033058?auto=format&fit=crop&q=80')" }}></div>
          </div>
          
          {/* Sakara Life */}
          <div className="work-page-card wp-wellness reveal">
            <div className="wp-card-left">
              <span className="wp-cat">WELLNESS</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Sakara Life <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">HigherDOSE</span>
                <span className="wp-secondary">CorePower Yoga</span>
                <span className="wp-secondary">Equinox</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* Away */}
          <div className="work-page-card wp-lifestyle reveal">
            <div className="wp-card-left">
              <span className="wp-cat">LIFESTYLE</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Away <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Tender</span>
                <span className="wp-secondary">Bluebird</span>
                <span className="wp-secondary">Aero</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* Pressed */}
          <div className="work-page-card wp-food reveal">
            <div className="wp-card-left">
              <span className="wp-cat">FOOD & BEVERAGE</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Pressed <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Yasso</span>
                <span className="wp-secondary">Sweetgreen</span>
                <span className="wp-secondary">JAJA</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1622597467821-12c8a1680d28?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* Caraway */}
          <div className="work-page-card wp-home reveal">
            <div className="wp-card-left">
              <span className="wp-cat">HOME</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Caraway <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Boy Smells</span>
                <span className="wp-secondary">West Elm</span>
                <span className="wp-secondary">Beast</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* HOKA */}
          <div className="work-page-card wp-footwear reveal">
            <div className="wp-card-left">
              <span className="wp-cat">FOOTWEAR</span>
              <div className="wp-brands">
                <h3 className="wp-primary">HOKA <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Havaianas</span>
                <span className="wp-secondary">KIZIK</span>
                <span className="wp-secondary">ALDO</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* Vuori */}
          <div className="work-page-card wp-activewear reveal">
            <div className="wp-card-left">
              <span className="wp-cat">ACTIVEWEAR</span>
              <div className="wp-brands">
                <h3 className="wp-primary">Vuori <span className="wp-circle-icon">↗</span></h3>
                <span className="wp-secondary">Bandier</span>
                <span className="wp-secondary">Outdoor Voices</span>
                <span className="wp-secondary">Year of Ours</span>
              </div>
            </div>
            <div className="wp-card-right" style={{ background: "center/cover url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80')" }}></div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="what-we-offer" className="reveal" style={{ padding: "80px 40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", background: "var(--white)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 80px)", color: "var(--black)", lineHeight: 1 }}>What we offer</h2>
        <Link href="/services" className="cta-link-inline">SERVICES <span className="arrow-circle black-bg">→</span></Link>
      </section>
    </main>
  );
}
