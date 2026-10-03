import React, { useState, useEffect } from "react";
import "./styles/invitation.css";

// Introduction House Loader
import { HouseIntroLoader } from "./components/HouseIntroLoader";

// Sections
import { HeroSection } from "./sections/HeroSection";
import { ScriptureSection } from "./sections/ScriptureSection";
import { HouseVisualSection } from "./sections/HouseVisualSection";
import { InvitationMessageSection } from "./sections/InvitationMessageSection";
import { DateTimeSection } from "./sections/DateTimeSection";
import { CountdownSection } from "./sections/CountdownSection";
import { FamilyPhotoSection } from "./sections/FamilyPhotoSection";
import { HostsSection } from "./sections/HostsSection";
import { VenueSection } from "./sections/VenueSection";
import { RsvpSection } from "./sections/RsvpSection";
import { ShareSection } from "./sections/ShareSection";
import { FooterSection } from "./sections/FooterSection";

// Floating / Modal components
import { FloatingMusic } from "./components/FloatingMusic";
import { ModalOriginalCard } from "./components/ModalOriginalCard";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") {
      return !new URLSearchParams(window.location.search).has("skipIntro");
    }
    return true;
  });
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  useEffect(() => {
    if (!showIntro && typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2B2523] selection:bg-[#8B263E] selection:text-[#FFFDF8]">
      {/* 0. Opening Animated House Loading & Unveiling Experience */}
      {showIntro && (
        <HouseIntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Single-Page Invitation Stream */}
      <main>
        {/* 1. Opening / Welcome Hero Experience */}
        <HeroSection onOpenOriginalCard={() => setIsCardModalOpen(true)} />

        {/* 2. Holy Scripture (Psalm 122:7) */}
        <ScriptureSection />

        {/* 3. House / Blessed New Home */}
        <HouseVisualSection />

        {/* 4. Dedication & Warm Invitation Message */}
        <InvitationMessageSection />

        {/* 5. Date & Time with Calendar Actions */}
        <DateTimeSection />

        {/* 6. Live Event Countdown */}
        <CountdownSection />

        {/* 7. Family Portrait Section */}
        <FamilyPhotoSection />

        {/* 8. Hosts / அன்புடன் அழைப்பவர்கள் */}
        <HostsSection />

        {/* 9. Venue & Google Maps Navigation */}
        <VenueSection />

        {/* 10. Interactive RSVP via WhatsApp */}
        <RsvpSection />

        {/* 11. WhatsApp & Social Sharing */}
        <ShareSection />

        {/* 12. Closing Christian Blessing & Minimal Studio Attribution */}
        <FooterSection onOpenOriginalCard={() => setIsCardModalOpen(true)} />
      </main>

      {/* Floating Background Hymn Player */}
      <FloatingMusic />

      {/* Original Printed Card Lightbox Modal */}
      <ModalOriginalCard
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
