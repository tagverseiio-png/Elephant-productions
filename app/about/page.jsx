"use client";
import { useState, useRef } from "react";

export default function About() {
  const galleryRef = useRef(null);
  const [tIdx, setTIdx] = useState(0);
  const totalTestimonials = 2;

  const scrollGallery = (dir) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth / 2;
      galleryRef.current.scrollBy({ left: scrollAmount * dir, behavior: "smooth" });
    }
  };

  const changeTestimonial = (dir) => {
    setTIdx((prev) => (prev + dir + totalTestimonials) % totalTestimonials);
  };

  return (
    <main>
      {/* ABOUT */}
      <section id="about">
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <h3 className="reveal">
            We do more than just PR.<br />
            We move mountains for brands.
          </h3>
          <div className="about-text reveal">
            <span className="what-we-do">What We Do</span>
            <p>
              In the ever-changing media landscape, we employ a distinctive and flexible approach to solidify and bolster brand loyalty among
              well-established brands while propelling emerging companies into the forefront of consumer recognition, transforming them into
              household names.
            </p>
          </div>
        </div>

        <div className="about-gallery-container reveal">
          <button className="gal-nav-btn prev" onClick={() => scrollGallery(-1)}>‹</button>
          <div className="about-gallery" id="aboutGallery" ref={galleryRef}>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80')" }}></div>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80')" }}></div>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1615397323628-fac6b1e6ce48?auto=format&fit=crop&q=80')" }}></div>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80')" }}></div>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1608248593842-8021c618e1cb?auto=format&fit=crop&q=80')" }}></div>
            <div className="a-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1616423640778-28d1b50228df?auto=format&fit=crop&q=80')" }}></div>
          </div>
          <button className="gal-nav-btn next" onClick={() => scrollGallery(1)}>›</button>
        </div>

        {/* TESTIMONIALS */}
        <div className="testimonials">
          <div className="testimonial-track">
            <div className={`testimonial ${tIdx === 0 ? "active" : ""}`}>
              <div className="t-left">
                <span className="testimonial-label">What People Say</span>
                <blockquote>
                  “Working with AZIONE has been an absolute game changer for our brand. Their strategic approach, thought leadership and
                  relationships throughout the media and influencer worlds have been key in propelling our business forward. The partnership
                  has felt like an extension of our internal team and has been an integral part of our 360 strategies. We love working with
                  AZIONE!”
                </blockquote>
              </div>
              <div className="t-right">
                <div className="testimonial-attr">
                  <strong>Ashley Posick</strong>
                  <span>Director of Global Communications,<br />Peter Thomas Roth</span>
                </div>
              </div>
            </div>
            <div className={`testimonial ${tIdx === 1 ? "active" : ""}`}>
              <div className="t-left">
                <span className="testimonial-label">What People Say</span>
                <blockquote>
                  “As an iconic global lifestyle brand, working with a boutique forward thinking agency like AZIONE has been key to our
                  success this past year. It's refreshing to partner with a team that thinks outside the box and brings new and innovative
                  ideas to the table.”
                </blockquote>
              </div>
              <div className="t-right">
                <div className="testimonial-attr">
                  <strong>Kimry Blackwelder</strong>
                  <span>Senior Director, Public Relations, Cole Haan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-nav">
            <button className="t-nav-btn prev-btn" onClick={() => changeTestimonial(-1)}>PREV</button>
            <button className="t-nav-btn next-btn" onClick={() => changeTestimonial(1)}>
              NEXT <span className="arrow-circle black-bg">→</span>
            </button>
          </div>
        </div>

        <div className="two-col-gallery reveal">
          <div className="two-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80')" }}></div>
          <div className="two-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')" }}></div>
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
