import React from "react";
import { CrossOrnament, FloralScrollMotif } from "../components/DecorativeMotifs";
import { eventData } from "../data/eventData";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";

export function HeroSection({ onOpenOriginalCard }) {
  const scrollToNext = () => {
    const el = document.getElementById("scripture-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero-section">
      {/* Ornate Corner Accents */}
      <div className="corner-decor top-left" />
      <div className="corner-decor top-right" />
      <div className="corner-decor bottom-left" />
      <div className="corner-decor bottom-right" />

      {/* Top Praise & Cross */}
      <div className="hero-top">
        <CrossOrnament size={44} />
        <span className="hero-praise-en">{eventData.openingPraise}</span>
        <span className="hero-praise-ta">{eventData.tamilOpeningPraise}</span>
      </div>

      {/* Centerpiece Banner & Titles */}
      <div className="hero-center">
        <FloralScrollMotif className="mb-2" />

        <div className="hero-banner">
          <span className="hero-banner-tag">கிறிஸ்தவ</span>
          <h1 className="hero-title">{eventData.tamilTitle}</h1>
          <div className="hero-eng-title">
            <span>✦</span>
            <span>{eventData.title}</span>
            <span>✦</span>
          </div>
        </div>

        <p className="hero-motto">{eventData.emblems.topBadge}</p>

        <div className="hero-badges">
          <div className="badge-pill">
            <Calendar className="badge-icon" />
            <span>{eventData.formattedDateEnglish}</span>
          </div>
          <div className="badge-pill">
            <Clock className="badge-icon" />
            <span>{eventData.formattedTimeEnglish}</span>
          </div>
          <div className="badge-pill">
            <MapPin className="badge-icon" />
            <span>Sathankulam</span>
          </div>
        </div>

        <div className="hero-actions">
          <button
            onClick={onOpenOriginalCard}
            type="button"
            className="btn-secondary-card"
          >
            <span>📜 View Original Card</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-bottom">
        <button
          onClick={scrollToNext}
          type="button"
          aria-label="Scroll to Bible Verse"
          className="scroll-cue-btn"
        >
          <span>Explore Invitation</span>
          <ChevronDown className="scroll-icon" />
        </button>
      </div>
    </header>
  );
}
