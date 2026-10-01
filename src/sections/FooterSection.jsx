import React from "react";
import { eventData } from "../data/eventData";
import { CrossOrnament, FloralScrollMotif } from "../components/DecorativeMotifs";
import { Heart } from "lucide-react";

export function FooterSection({ onOpenOriginalCard }) {
  return (
    <footer className="footer-section">
      <div className="footer-gold-bar" />

      <CrossOrnament size={30} className="mb-2" />

      <p className="footer-blessing-ta">
        {eventData.emblems.bottomBlessing}
      </p>

      <p className="footer-verse-en">
        "{eventData.scripture.verseEnglish}" — Psalm 122:7
      </p>

      <FloralScrollMotif className="mb-4 opacity-60" />

      <div className="mb-4">
        <button
          onClick={onOpenOriginalCard}
          type="button"
          className="text-xs text-[#F5D77F] underline font-serif"
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          View & Download Original Printed Card
        </button>
      </div>

      <div className="footer-studio">
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
          <span>for Vergin Santhiya & Family</span>
        </p>
        <p style={{ fontSize: "11px", color: "var(--gold-300)", marginTop: "0.25rem", letterSpacing: "0.08em" }}>
          {eventData.studio.tagline}
        </p>
      </div>
    </footer>
  );
}
