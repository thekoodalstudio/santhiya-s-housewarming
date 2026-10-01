import React from "react";
import { eventData } from "../data/eventData";
import { FloralScrollMotif, CrossOrnament } from "../components/DecorativeMotifs";
import { Home, Sparkles } from "lucide-react";

export function HouseVisualSection() {
  return (
    <section className="house-section">
      <div className="section-label">
        <Home className="w-4 h-4" />
        <span>Our Blessed New Abode</span>
        <Home className="w-4 h-4" />
      </div>

      <h2 className="section-title-tamil">
        எங்கள் புதிய இல்லம்
      </h2>

      <p className="font-tamil text-sm text-[#8B263E] mb-3">
        {eventData.emblems.houseMotto}
      </p>

      {/* House Centerpiece Frame */}
      <div className="house-frame">
        <div className="house-img-wrapper">
          {/* Top Cross */}
          <div className="house-cross-badge">
            <CrossOrnament size={28} />
          </div>

          <img
            src={eventData.images.house}
            alt="New Home - Santhiya Housewarming Ceremony"
            className="house-img"
            loading="lazy"
          />

          <div className="house-caption-bar">
            <span className="font-serif text-xs font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
              Built with Faith & Grace
            </span>
            <span className="font-tamil text-xs text-[#F5D77F] font-bold">
              சாத்தான்குளம்
            </span>
          </div>
        </div>
      </div>

      <FloralScrollMotif className="mt-2" />
    </section>
  );
}
