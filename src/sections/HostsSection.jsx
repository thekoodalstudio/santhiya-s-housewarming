import React from "react";
import { eventData } from "../data/eventData";
import { GoldDivider } from "../components/DecorativeMotifs";

export function HostsSection() {
  return (
    <section className="hosts-section">
      <div className="hosts-card">
        {/* Ribbon Banner */}
        <div className="ribbon-banner">
          <span className="text-[#F5D77F] text-xs">♥</span>
          <h3>{eventData.hostsHeaderTamil}</h3>
          <span className="text-[#F5D77F] text-xs">♥</span>
        </div>

        <p className="font-serif italic text-xs text-[#8B263E] mb-2">
          {eventData.hostsHeaderEnglish}
        </p>

        {/* Host List */}
        <div className="host-list">
          {eventData.hosts.map((host) => (
            <div key={host.id} className="host-row">
              <span className="host-star">✦</span>
              <span className="host-name">{host.name}</span>
              <span className="host-star">✦</span>
            </div>
          ))}
        </div>

        <GoldDivider className="my-4" />

        <p className="font-tamil text-xs text-[#8B263E] font-medium leading-relaxed">
          தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து,
          <br />
          எங்கள் புதிய இல்லத்தை ஆசீர்வதிக்குமாறு அன்புடன் வேண்டுகிறோம்.
        </p>
      </div>
    </section>
  );
}
