"use client";
import { useEffect } from "react";
import { splitAndAnimate } from "../../hooks/useSplitting";

function useServicesAnimations() {
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero title — Splitting.js char reveal
      await splitAndAnimate("#services-title", gsap, 0.1);
      gsap.fromTo(
        "#services-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.7, clearProps: "all" }
      );

      // Each service row — fade up + image scale Ken Burns
      document.querySelectorAll(".sp-row").forEach((row) => {
        const textBlock = row.querySelector(".sp-text-block");
        const imgBlock  = row.querySelector(".sp-img-block");

        if (textBlock) {
          gsap.set(textBlock, { opacity: 0, y: 50 });
          stTriggers.push(
            ScrollTrigger.create({
              trigger: row,
              start: "top 85%",
              once: true,
              onEnter: () => {
                gsap.to(textBlock, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", clearProps: "all" });
                // Stagger title → desc → tags
                gsap.fromTo(
                  textBlock.querySelectorAll(".sp-title, .sp-desc, .sp-tag-item"),
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07, delay: 0.25, clearProps: "all" }
                );
              },
            })
          );
        }

        if (imgBlock) {
          gsap.set(imgBlock, { opacity: 0, scale: 1.05 });
          stTriggers.push(
            ScrollTrigger.create({
              trigger: row,
              start: "top 88%",
              once: true,
              onEnter: () =>
                gsap.to(imgBlock, { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", clearProps: "all" }),
            })
          );
        }
      });

      // Additive services — Anime.js stagger from left + divider line width
      const addItems = document.querySelectorAll(".add-pg-item");
      if (addItems.length) {
        const addSection = document.querySelector(".additive-services-page");
        stTriggers.push(
          ScrollTrigger.create({
            trigger: addSection,
            start: "top 85%",
            once: true,
            onEnter: async () => {
              const { animate, stagger } = await import("animejs");
              animate(addItems, {
                opacity: [0, 1],
                translateX: [-50, 0],
                duration: 600,
                ease: "out(3)",
                delay: stagger(80),
              });
            },
          })
        );
      }

      // Additive header
      const addHeader = document.querySelector(".additive-pg-header");
      if (addHeader) {
        gsap.set(addHeader, { opacity: 0, y: 30 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: addHeader,
            start: "top 88%",
            once: true,
            onEnter: () => gsap.to(addHeader, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }),
          })
        );
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, []);
}


export default function Services() {
  useServicesAnimations();

  return (
    <main>
      {/* SERVICES HEADER */}
      <section id="services-header">
        <div className="about-header">
          <h2 id="services-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(60px, 15vw, 200px)", color: "var(--white)", lineHeight: 0.9, fontWeight: 400 }}>
            Services
          </h2>
          <p id="services-sub" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", marginTop: "24px", fontSize: "16px", lineHeight: "1.6", opacity: 0 }}>
            We create powerful visual impact for brands through tailored production strategies and a creative-first approach.
          </p>
        </div>
      </section>

      {/* SERVICES PAGE CONTENT */}
      <section id="services-page-content">
        <div className="services-page-wrapper">
          {/* SERVICE 01 */}
          <div className="sp-row" id="creative-direction">
            <div className="sp-text-block sp-dark">
              <div>
                <h3 className="sp-title">Creative Direction &amp;<br/>Concept Planning</h3>
                <p className="sp-desc">
                  This is the foundation. Strategy and ideas that drive everything else. Before a single frame is shot, we align on your brand's visual language, campaign objectives, and creative narrative. Every production we touch starts with a clear direction — so nothing is left to chance.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Creative Concept Development</span>
                <span className="sp-tag-item">Moodboard & Visual Direction</span>
                <span className="sp-tag-item">Campaign Strategy</span>
                <span className="sp-tag-item">Script & Storyboard Planning</span>
                <span className="sp-tag-item">Pre-Production Planning</span>
                <span className="sp-tag-item">Brand Narrative Crafting</span>
              </div>
            </div>
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* SERVICE 02 */}
          <div className="sp-row" id="cinematic-production">
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-teal">
              <div>
                <h3 className="sp-title">Cinematic Photography<br/>&amp; Film Production</h3>
                <p className="sp-desc">
                  From product shoots to full brand films, we produce visuals with the depth and intention of cinema. Every shot is crafted to tell your story with precision, beauty, and purpose.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Brand & Product Photography</span>
                <span className="sp-tag-item">Brand Films</span>
                <span className="sp-tag-item">Short-Form Video Production</span>
                <span className="sp-tag-item">Cinematic Reels</span>
                <span className="sp-tag-item">Behind-the-Scenes Content</span>
                <span className="sp-tag-item">Lookbook Shoots</span>
              </div>
            </div>
          </div>

          {/* SERVICE 03 */}
          <div className="sp-row" id="social-media">
            <div className="sp-text-block sp-blue">
              <div>
                <h3 className="sp-title">Social Media<br/>Content Creation</h3>
                <p className="sp-desc">
                  Platform-native content built to stop the scroll. We produce reels, carousels, stories, and short-form videos designed specifically for Instagram, YouTube, and beyond — with strategy baked into every piece.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Reel Production</span>
                <span className="sp-tag-item">Content Calendar Management</span>
                <span className="sp-tag-item">Platform-Specific Formatting</span>
                <span className="sp-tag-item">Trending Format Execution</span>
                <span className="sp-tag-item">Caption & Copy Writing</span>
                <span className="sp-tag-item">Monthly Content Packages</span>
              </div>
            </div>
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* SERVICE 04 */}
          <div className="sp-row" id="commercial-ads">
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-green">
              <div>
                <h3 className="sp-title">Commercial Ads<br/>&amp; Brand Campaigns</h3>
                <p className="sp-desc">
                  Your brand deserves more than a generic ad. We produce full-scale commercial campaigns — concept to final cut — built to leave a mark on your audience and your market.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">TV & Digital Commercials</span>
                <span className="sp-tag-item">Full Campaign Execution</span>
                <span className="sp-tag-item">Ad Creative Development</span>
                <span className="sp-tag-item">Multi-Platform Rollout</span>
                <span className="sp-tag-item">Performance-Driven Creative</span>
                <span className="sp-tag-item">Campaign Analytics Support</span>
              </div>
            </div>
          </div>

          {/* SERVICE 05 */}
          <div className="sp-row" id="influencer">
            <div className="sp-text-block sp-dark">
              <div>
                <h3 className="sp-title">Influencer &amp; Creator<br/>Collaborations</h3>
                <p className="sp-desc">
                  We connect your brand with the right creators and build influencer campaigns that feel organic, reach the right audience, and actually convert. From micro-creators to established names — we manage the full relationship.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Influencer Identification</span>
                <span className="sp-tag-item">Campaign Brief & Management</span>
                <span className="sp-tag-item">UGC Content Coordination</span>
                <span className="sp-tag-item">Creator Contracts & Logistics</span>
                <span className="sp-tag-item">Community Growth Strategy</span>
                <span className="sp-tag-item">Affiliate Management</span>
              </div>
            </div>
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* SERVICE 06 */}
          <div className="sp-row" id="event-film">
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-teal">
              <div>
                <h3 className="sp-title">Event Film &amp;<br/>Live Documentation</h3>
                <p className="sp-desc">
                  Weddings, corporate events, product launches, brand activations — we document every moment with a filmmaker's eye. Not just coverage. A cinematic record your brand will use forever.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Event Videography & Photography</span>
                <span className="sp-tag-item">Multi-Camera Live Coverage</span>
                <span className="sp-tag-item">Highlight Films</span>
                <span className="sp-tag-item">Corporate Event Documentation</span>
                <span className="sp-tag-item">Brand Activation Coverage</span>
                <span className="sp-tag-item">Red Carpet & Launch Events</span>
              </div>
            </div>
          </div>

          {/* SERVICE 07 */}
          <div className="sp-row" id="account-growth">
            <div className="sp-text-block sp-blue">
              <div>
                <h3 className="sp-title">Account Growth<br/>&amp; Performance Management</h3>
                <p className="sp-desc">
                  Great content needs the right strategy behind it. We manage your digital presence, optimise your content calendar, and push your numbers in the right direction — consistently.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Instagram & YouTube Growth</span>
                <span className="sp-tag-item">Content Scheduling</span>
                <span className="sp-tag-item">Analytics & Reporting</span>
                <span className="sp-tag-item">Audience Engagement Strategy</span>
                <span className="sp-tag-item">Paid Social Support</span>
                <span className="sp-tag-item">Monthly Performance Reviews</span>
              </div>
            </div>
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')" }}></div>
          </div>

          {/* SERVICE 08 */}
          <div className="sp-row" id="concert-live">
            <div className="sp-img-block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540039155733-d76e6d482b58?auto=format&fit=crop&q=80')" }}></div>
            <div className="sp-text-block sp-green">
              <div>
                <h3 className="sp-title">Concert &amp;<br/>Live Production</h3>
                <p className="sp-desc">
                  From stage to screen, we handle full live production — multi-camera setups, live documentation, and post-production edits that capture the energy of the room exactly as it felt.
                </p>
              </div>
              <div className="sp-tags">
                <span className="sp-tag-item">Multi-Camera Live Coverage</span>
                <span className="sp-tag-item">Stage & Show Documentation</span>
                <span className="sp-tag-item">Artist & Performer Coverage</span>
                <span className="sp-tag-item">Post-Production Editing</span>
                <span className="sp-tag-item">Live Stream Support</span>
                <span className="sp-tag-item">Concert Highlight Films</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ADDITIVE SERVICES */}
      <section className="additive-services-page" id="additive-services">
        <h2 className="additive-pg-header">Additive Services</h2>
        <div className="add-pg-list">
          <div className="add-pg-item">Motion Graphics & Visual Effects</div>
          <div className="add-pg-item">Brand Identity & Logo Design</div>
          <div className="add-pg-item">Website Design & Landing Pages</div>
          <div className="add-pg-item">E-Commerce Content Production</div>
          <div className="add-pg-item">Web3 & Digital Campaign Development</div>
          <div className="add-pg-item">Voiceover & Audio Production</div>
          <div className="add-pg-item">Subtitling & Caption Services</div>
          <div className="add-pg-item">Merch & Gifting Production</div>
          <div className="add-pg-item">Fractional Creative Support</div>
          <div className="add-pg-item">Storyboard & Film Project Planning</div>
        </div>
      </section>
    </main>
  );
}
