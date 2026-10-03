import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import { Sparkles } from "lucide-react";
import { CrossOrnament } from "./DecorativeMotifs";

export function HouseIntroLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation over ~2.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Auto transition after 3.8s
    const timer = setTimeout(() => {
      handleOpen();
    }, 3800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleOpen = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 750);
  };

  return (
    <div
      className={`intro-loader-overlay ${isExiting ? "intro-loader-exit" : ""}`}
      role="dialog"
      aria-label="Welcome Housewarming Invitation Introduction"
    >
      {/* Background Soft Radiance */}
      <div className="intro-radiance-glow" />

      {/* Main Container */}
      <div className="intro-loader-content">
        {/* Sacred Praise */}
        <div className="intro-top-praise">
          <span className="intro-praise">
            தேவ கிருபையோடு • With God's Grace
          </span>
        </div>

        {/* Welcoming Family Portrait in Royal Arch Frame */}
        <div className="intro-portrait-wrapper">
          <div className="intro-arch-crown">
            <CrossOrnament size={28} />
          </div>

          <div className="intro-portrait-frame">
            <img
              src={eventData.images.welcomingPortrait}
              alt="Vergin Santhiya and Family Welcoming at New Home"
              className="intro-portrait-img"
            />
            <div className="intro-portrait-shimmer" />
            <div className="intro-portrait-bottom-badge">
              <span>எங்கள் இல்லத்திற்கு அன்புடன் வரவேற்கிறோம்</span>
            </div>
          </div>
        </div>

        {/* Ceremony Typography */}
        <div className="intro-text-block">
          <h2 className="intro-title">
            {eventData.tamilTitle}
          </h2>

          <p className="intro-subtitle">
            Housewarming Ceremony • 19 October 2026
          </p>

          <p className="intro-verse">
            "{eventData.scripture.verseEnglish}" — Psalm 122:7
          </p>
        </div>

        {/* Progress Bar with Indicator */}
        <div className="intro-progress-container">
          <div className="intro-progress-track">
            <div
              className="intro-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="intro-progress-number">{progress}%</span>
        </div>

        {/* Action Button: Open Invitation */}
        <div className="intro-actions">
          <button
            type="button"
            onClick={handleOpen}
            className="btn-open-invitation"
          >
            <Sparkles className="w-4 h-4 text-[#F5D77F]" />
            <span>Open Invitation • அழைப்பிதழைத் திறக்கவும்</span>
            <Sparkles className="w-4 h-4 text-[#F5D77F]" />
          </button>
        </div>
      </div>
    </div>
  );
}
