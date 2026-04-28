"use client";
import Link from "next/link";

/**
 * Nav — purely presentational.
 * Starts hidden via translateY(-100%).
 * MasterScene adds/removes .visible after 80px scroll.
 * Three-column flex: left | center logo | right
 */
export default function Nav({ onOpenModal }) {
  return (
    <nav id="mainNav" className="site-nav">
      <div className="nav-left">
        <Link href="/work">Work</Link>
        <Link href="/services">Services</Link>
        <Link href="/influencers">Influencer Collaborations</Link>
      </div>

      <Link href="/" className="nav-logo">
        ELEPHANT PRODUCTIONS
      </Link>

      <div className="nav-right">
        <Link href="/about">About</Link>
        <a href="https://instagram.com/azionepr" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a
          href="#contact"
          data-cursor-expand
          onClick={(e) => {
            e.preventDefault();
            onOpenModal();
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
