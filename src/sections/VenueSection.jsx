import React from "react";
import { eventData } from "../data/eventData";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export function VenueSection() {
  return (
    <section className="venue-section">
      <div className="venue-card">
        <div className="venue-icon-circle">
          <MapPin className="w-7 h-7" />
        </div>

        <span className="section-label mb-1">
          Event Venue • நன்னிகழ்வு நடைபெறும் இடம்
        </span>

        <h2 className="section-title-tamil mb-4">
          {eventData.venue.nameTamil}
        </h2>

        {/* Address Card */}
        <div className="venue-address-box">
          <div className="venue-address-tamil">
            {eventData.venue.addressLinesTamil.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>

          <div className="venue-address-eng">
            {eventData.venue.addressLinesEnglish.join(", ")}
          </div>
        </div>

        {/* Navigation Action */}
        <div className="mt-4">
          <a
            href={eventData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-burgundy"
          >
            <Navigation className="w-4 h-4 text-[#F5D77F]" />
            <span>View Location on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#F5D77F]/80" />
          </a>
        </div>

        <p className="font-serif text-xs text-[#8B263E] mt-4 opacity-80">
          Landmark: Near B.Ed College, Thoppuvazham Road, Sathankulam
        </p>
      </div>
    </section>
  );
}
