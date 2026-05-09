"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({ onOpenModal }) {
  const pathname = usePathname();
  const ctaHeading = pathname === "/influencers"
    ? "Ready to expand your orbit?"
    : "Interested in our work?";

  // GSAP ScrollTrigger — CTA fade up + footer links stagger
  useEffect(() => {
    let stTriggers = [];
    const run = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // CTA block fade up
      const ctaBlock = document.querySelector(".cta-block");
      if (ctaBlock) {
        gsap.set(ctaBlock, { opacity: 0, y: 50 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ctaBlock,
            start: "top 88%",
            onEnter: () => gsap.to(ctaBlock, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", clearProps: "all" }),
          })
        );
      }

      // Footer links stagger
      const footerLinks = document.querySelectorAll(".footer-links a, .footer-links button");
      if (footerLinks.length) {
        gsap.set(footerLinks, { opacity: 0, y: 16 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: ".footer-bottom",
            start: "top 95%",
            onEnter: () =>
              gsap.to(footerLinks, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.07,
                clearProps: "all",
              }),
          })
        );
      }

      // Footer wordmark
      const wordmark = document.querySelector(".footer-wordmark");
      if (wordmark) {
        gsap.set(wordmark, { opacity: 0 });
        stTriggers.push(
          ScrollTrigger.create({
            trigger: wordmark,
            start: "top 95%",
            onEnter: () => gsap.to(wordmark, { opacity: 1, duration: 1, ease: "power2.out", clearProps: "all" }),
          })
        );
      }
    };

    run();
    return () => stTriggers.forEach((t) => t.kill());
  }, [pathname]);

  return (
    <footer>
      {/* FOOTER CTA */}
      <section id="contact" className="footer-cta-section">
        <div className="cta-block" style={{ opacity: 0 }}>
          <h2>
            {ctaHeading}<br />
            Let's talk.
            <Link href="/contact" className="cta-link-inline">
              <span className="arrow-circle black-bg">↑</span>
              CONTACT US
            </Link>
          </h2>
        </div>
      </section>

      <span className="footer-wordmark" style={{ opacity: 0 }}>ELEPHANT PRODUCTION</span>
      <div className="footer-bottom">
        <span>© Elephant Production 2025</span>
        <div className="footer-links">
          <Link href="/work">WORK</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/influencers">INFLUENCER COLLABORATIONS</Link>
          <Link href="/about">ABOUT</Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <Link href="/contact">CONTACT</Link>
          <a href="mailto:hello@elephantproduction.in" style={{ textTransform: "none" }}>
            hello@elephantproduction.in
          </a>
        </div>
      </div>
    </footer>
  );
}
