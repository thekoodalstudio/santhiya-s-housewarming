import React from "react";
import { eventData } from "../data/eventData";
import { GoldDivider } from "../components/DecorativeMotifs";
import { Heart } from "lucide-react";

export function InvitationMessageSection() {
  return (
    <section className="invitation-section">
      <div className="invitation-card">
        <div className="section-label mb-3">
          <Heart className="w-3.5 h-3.5 fill-[#8B263E]" />
          <span>Warmest Welcome • அழைப்பிதழ்</span>
          <Heart className="w-3.5 h-3.5 fill-[#8B263E]" />
        </div>

        {/* Tamil Invitation Message */}
        <p className="invitation-tamil">
          {eventData.invitationMessage.tamil}
        </p>

        <GoldDivider className="my-4" />

        {/* English Invitation Message */}
        <p className="invitation-eng">
          "With God’s abundant grace, we are joyfully moving into our new home!"
        </p>
        <p className="invitation-eng">
          "We warmheartedly invite you and your family to join us for our Housewarming Ceremony and shower us with your love, prayers, and blessings."
        </p>

        {/* Closing Warmth */}
        <div className="invitation-closing">
          <p className="font-serif italic text-sm text-[#8B263E] font-medium">
            {eventData.invitationMessage.closingEnglish}
          </p>
          <p className="font-tamil text-xs text-[#4A0E1C] font-semibold mt-1">
            {eventData.invitationMessage.closingTamil}
          </p>
        </div>
      </div>
    </section>
  );
}
