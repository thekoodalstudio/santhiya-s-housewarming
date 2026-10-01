import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import { Sparkles, Heart } from "lucide-react";

export function HouseIntroLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation over 2.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Auto transition after 3.2s
    const timer = setTimeout(() => {
      handleOpen();
    }, 3400);

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
        {/* Animated Golden House SVG */}
        <div className="intro-house-wrapper">
          <svg
            className="intro-house-svg"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Cross Light Glow */}
            <circle cx="100" cy="38" r="28" fill="url(#crossGlow)" opacity="0.7" />

            {/* Radiant Church Cross atop Roof */}
            <path
              className="svg-stroke-draw cross-draw"
              d="M100 14V50M88 28H112"
              stroke="#F5D77F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Center Cross Jewel */}
            <circle cx="100" cy="28" r="3" fill="#FFFDF8" />

            {/* House Roof - Gabled Structure */}
            <path
              className="svg-stroke-draw roof-draw"
              d="M30 92L100 44L170 92"
              stroke="#D4AF37"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Overhanging Eaves Trim */}
            <path
              className="svg-stroke-draw eave-draw"
              d="M24 94L100 40L176 94"
              stroke="#F9E8B2"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* House Main Walls */}
            <path
              className="svg-stroke-draw wall-draw"
              d="M44 92V170H156V92"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Foundation Line */}
            <path
              className="svg-stroke-draw base-draw"
              d="M28 170H172"
              stroke="#E6C875"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Warm Glowing Windows (Left & Right) */}
            <rect
              className="svg-window-glow"
              x="58"
              y="108"
              width="26"
              height="26"
              rx="4"
              fill="#FFF4D0"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <line x1="71" y1="108" x2="71" y2="134" stroke="#8B263E" strokeWidth="1" />
            <line x1="58" y1="121" x2="84" y2="121" stroke="#8B263E" strokeWidth="1" />

            <rect
              className="svg-window-glow"
              x="116"
              y="108"
              width="26"
              height="26"
              rx="4"
              fill="#FFF4D0"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <line x1="129" y1="108" x2="129" y2="134" stroke="#8B263E" strokeWidth="1" />
            <line x1="116" y1="121" x2="142" y2="121" stroke="#8B263E" strokeWidth="1" />

            {/* Center Arched Doorway */}
            <path
              className="svg-stroke-draw door-draw"
              d="M86 170V126C86 118 92 112 100 112C108 112 114 118 114 126V170"
              stroke="#D4AF37"
              strokeWidth="2.5"
              fill="#5C1625"
            />

            {/* Little Heart inside Doorway */}
            <path
              className="svg-heart-pulse"
              d="M100 148C100 148 94 142 94 138C94 135 96.5 133 98.5 134.5L100 136L101.5 134.5C103.5 133 106 135 106 138C106 142 100 148 100 148Z"
              fill="#F5D77F"
            />

            {/* Soft upward light burst from house */}
            <defs>
              <radialGradient id="crossGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Sacred Praise & Typography */}
        <div className="intro-text-block">
          <span className="intro-praise">
            தேவ கிருபையோடு • With God's Grace
          </span>

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

        {/* Progress Bar */}
        <div className="intro-progress-track">
          <div
            className="intro-progress-fill"
            style={{ width: `${progress}%` }}
          />
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
