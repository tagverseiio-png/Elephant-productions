"use client";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" id="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Drop us a<br />line.</h2>
        <div className="form-field">
          <label>Name *</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form-field">
          <label>Email *</label>
          <input type="email" placeholder="" />
        </div>
        <div className="form-field">
          <label>Phone Number *</label>
          <input type="tel" placeholder="" />
        </div>
        <div className="form-field">
          <label>Your Message *</label>
          <textarea rows="4"></textarea>
        </div>
        <button className="submit-btn">
          <span className="arrow-circle">↗</span>
          SEND MESSAGE
        </button>
        <div className="modal-email"><a href="mailto:info@azionepr.com">info@azionepr.com</a></div>
      </div>
    </div>
  );
}
