"use client";
import { useEffect, useRef } from "react";
import { splitAndAnimate } from "../../hooks/useSplitting";

export default function About() {
  const galleryRef = useRef(null);

  // ── Swiper testimonials ──────────────────────────────────────
  useEffect(() => {
    let swiperInstance;
    const initSwiper = async () => {
      const { default: Swiper } = await import("swiper");
      const { Navigation, Autoplay, EffectFade } = await import("swiper/modules");
      await import("swiper/css");
      await import("swiper/css/effect-fade");

      swiperInstance = new Swiper(".testimonial-swiper", {
        modules: [Navigation, Autoplay, EffectFade],
        effect: "fade",
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          prevEl: ".t-nav-btn.prev-btn",
          nextEl: ".t-nav-btn.next-btn",
        },
        fadeEffect: { crossFade: true },
      });
    };
    initSwiper();
    return () => { if (swiperInstance) swiperInstance.destroy(); };
  }, []);

  // ── GSAP animations ──────────────────────────────────────────
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Title char reveal
      await splitAndAnimate("#about-title", gsap, 0.1);

      // Main statement — word by word
      const statement = document.querySelector(".about-content h3");
      if (statement) {
        const words = statement.innerText.split(" ");
        statement.innerHTML = words
          .map((w) => `<span class="word-wrap" style="display:inline-block;overflow:hidden;margin-right:0.25em"><span class="word-inner" style="display:inline-block;transform:translateY(100%);opacity:0">${w}</span></span>`)
          .join(" ");
        stTriggers.push(
          ScrollTrigger.create({
            trigger: statement,
            start: "top 88%",
            onEnter: () =>
              gsap.to(".word-inner", {
                y: "0%",
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.04,
                clearProps: "all",
              }),
          })
        );
      }

      // "What We Do" section
      const aboutText = document.querySelector(".about-text");
      if (aboutText) {
        gsap.set(aboutText, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: aboutText,
            start: "top 88%",
            onEnter: () => gsap.to(aboutText, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }),
          })
        );
      }

      // Gallery container
      const galContainer = document.querySelector(".about-gallery-container");
      if (galContainer) {
        gsap.set(galContainer, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: galContainer,
            start: "top 88%",
            onEnter: () => gsap.to(galContainer, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", clearProps: "all" }),
          })
        );
      }

      // Testimonials section
      const testimonials = document.querySelector(".testimonials");
      if (testimonials) {
        gsap.set(testimonials, { opacity: 0, y: 40 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: testimonials,
            start: "top 88%",
            onEnter: () => gsap.to(testimonials, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", clearProps: "all" }),
          })
        );
      }

      // Two-column gallery — slide from sides with parallax
      const twoGal = document.querySelectorAll(".two-gal-item");
      if (twoGal.length >= 2) {
        gsap.set(twoGal[0], { opacity: 0, x: -60 });
        gsap.set(twoGal[1], { opacity: 0, x: 60 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ".two-col-gallery",
            start: "top 88%",
            onEnter: () => {
              gsap.to(twoGal[0], { opacity: 1, x: 0, duration: 1, ease: "power3.out", clearProps: "all" });
              gsap.to(twoGal[1], { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.15, clearProps: "all" });
            },
          })
        );

        // Parallax on scroll
        twoGal.forEach((img, i) => {
          stTriggers.push(
            ScrollTrigger.create({
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              onUpdate: (self) => {
                const move = (self.progress - 0.5) * 40;
                gsap.set(img, { y: i % 2 === 0 ? move : -move });
              },
            })
          );
        });
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, []);

  const scrollGallery = (dir) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: galleryRef.current.clientWidth / 2 * dir, behavior: "smooth" });
    }
  };

  return (
    <main>
      <section id="about">
        <div className="about-header">
          <h2 id="about-title">About</h2>
        </div>

        <div className="about-content">
          <h3>
            We do more than just produce.<br />
            We build brands that are impossible to forget.
          </h3>
          <div className="about-text">
            <span className="what-we-do">What We Do</span>
            <p>
              In a world flooded with content, we take a distinctive and production-first approach to build brand authority for established names — while launching emerging brands into the spotlight and turning them into names people remember. Chennai-based. Built for bold brands.
            </p>
          </div>
        </div>

        {/* GALLERY */}
        <div className="about-gallery-container">
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

        {/* TESTIMONIALS — Swiper */}
        <div className="testimonials">
          <div className="swiper testimonial-swiper">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial active">
                  <div className="t-left">
                    <span className="testimonial-label">What People Say</span>
                    <blockquote>
                      "Working with Elephant Production was a game-changer for our brand. Their eye for storytelling and production quality is unlike anything we've seen in Chennai."
                    </blockquote>
                  </div>
                  <div className="t-right">
                    <div className="testimonial-attr">
                      <strong>[Client Name]</strong>
                      <span>[Role],<br />[Brand]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial">
                  <div className="t-left">
                    <span className="testimonial-label">What People Say</span>
                    <blockquote>
                      "The visual direction they brought to our campaign completely redefined how our audience sees us. An incredibly talented and professional team."
                    </blockquote>
                  </div>
                  <div className="t-right">
                    <div className="testimonial-attr">
                      <strong>[Client Name 2]</strong>
                      <span>[Role],<br />[Brand]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial">
                  <div className="t-left">
                    <span className="testimonial-label">What People Say</span>
                    <blockquote>
                      "They didn't just execute our vision—they elevated it. The final films were cinematic, engaging, and drove immediate results for our launch."
                    </blockquote>
                  </div>
                  <div className="t-right">
                    <div className="testimonial-attr">
                      <strong>[Client Name 3]</strong>
                      <span>[Role],<br />[Brand]</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="testimonial-nav">
            <button className="t-nav-btn prev-btn">PREV</button>
            <button className="t-nav-btn next-btn">
              NEXT <span className="arrow-circle black-bg">→</span>
            </button>
          </div>
        </div>

        <div className="two-col-gallery">
          <div className="two-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80')" }}></div>
          <div className="two-gal-item" style={{ background: "center/cover url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')" }}></div>
        </div>
      </section>
    </main>
  );
}
