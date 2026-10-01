import React from "react";
import { eventData } from "../data/eventData";
import { CrossOrnament, FloralScrollMotif } from "../components/DecorativeMotifs";
import { Heart } from "lucide-react";

export function FamilyPhotoSection() {
  return (
    <section className="family-section">
      <div className="section-label">
        <Heart className="w-3.5 h-3.5 fill-[#8B263E]" />
        <span>Family In Faith & Grace • எங்கள் குடும்பம்</span>
        <Heart className="w-3.5 h-3.5 fill-[#8B263E]" />
      </div>

      <h2 className="section-title-tamil">
        அன்பும் ஆசீர்வாதமும் நிறைந்த எங்கள் குடும்பம்
      </h2>

      <p className="font-serif italic text-xs text-[#8B263E] mb-2">
        "As for me and my house, we will serve the Lord." — Joshua 24:15
      </p>

      {/* Royal Frame for Family Portrait */}
      <div className="family-frame">
        <div className="family-img-wrapper">
          <img
            src={eventData.images.familyPortrait}
            alt="Vergin Santhiya and Family - Housewarming Ceremony"
            className="family-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Blessing quote under family photo */}
      <div className="mt-4 max-w-lg mx-auto text-center px-4">
        <CrossOrnament size={28} className="mb-2" />
        <p className="font-tamil text-base text-[#4A0E1C] font-semibold leading-relaxed">
          {eventData.emblems.bottomBlessing}
        </p>
      </div>

      <FloralScrollMotif className="mt-4 opacity-75" />
    </section>
  );
}
