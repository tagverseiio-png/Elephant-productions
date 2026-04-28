"use client";
import Link from "next/link";

export default function Footer({ onOpenModal }) {
  return (
    <footer>
      <span className="footer-wordmark">ELEPHANT PRODUCTIONS</span>
      <div className="footer-bottom">
        <span>© Elephant Productions 2026</span>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/influencers">Influencers</Link>
          <Link href="/about">About</Link>
          <a href="https://instagram.com/azionepr" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:info@azionepr.com">info@azionepr.com</a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal();
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
