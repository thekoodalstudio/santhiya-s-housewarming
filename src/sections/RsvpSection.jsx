import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { fireGoldenCelebration } from "../utils/confettiHelper";
import { MessageSquare, CheckCircle, Send } from "lucide-react";

export function RsvpSection() {
  const [guestName, setGuestName] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleRsvpSubmit = (option) => {
    if (option.id === "attending" || option.id === "with-family") {
      fireGoldenCelebration();
    }

    const namePlaceholder = guestName.trim() ? guestName.trim() : "Dear Family";
    const customMessage = option.message.replace("[Your Name]", namePlaceholder);
    const encodedMessage = encodeURIComponent(customMessage);

    const phone = eventData.rsvp.whatsappNumber;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    setIsSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <section id="rsvp-section" className="rsvp-section">
      <div className="rsvp-card">
        <div className="section-label mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>RSVP • தங்கள் வருகையை உறுதி செய்க</span>
        </div>

        <h2 className="section-title-tamil mb-1">
          Will You Be Joining Us?
        </h2>
        <p className="font-tamil text-sm text-[#8B263E] mb-5 font-medium">
          தங்களின் வருகை எங்கள் இல்லத்திற்கு பெருமகிழ்ச்சி தரும்!
        </p>

        {/* Guest Name Input */}
        <div className="guest-input-wrap">
          <label htmlFor="guest-name">
            Your Name / உங்கள் பெயர் (Optional)
          </label>
          <input
            id="guest-name"
            type="text"
            placeholder="e.g. John & Family"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="guest-input"
          />
        </div>

        {/* RSVP Buttons */}
        <div className="rsvp-button-list">
          {eventData.rsvp.options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleRsvpSubmit(option)}
              className={`rsvp-btn ${
                option.id === "attending"
                  ? "rsvp-btn-attending"
                  : option.id === "with-family"
                  ? "rsvp-btn-family"
                  : "rsvp-btn-decline"
              }`}
            >
              <div>
                <div className="font-serif text-sm font-bold">
                  {option.label}
                </div>
                <div className="font-tamil text-xs opacity-90 mt-0.5">
                  {option.labelTamil}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-serif opacity-90">
                <span>WhatsApp</span>
                <Send className="w-3 h-3 text-[#F5D77F]" />
              </div>
            </button>
          ))}
        </div>

        {isSent && (
          <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-serif flex items-center justify-center gap-2 max-w-sm mx-auto">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Opening WhatsApp with your RSVP confirmation...</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[rgba(212,175,55,0.2)] text-[11px] text-[#8B263E] font-serif">
          Configured RSVP WhatsApp: +{eventData.rsvp.whatsappNumber}
          <div className="text-[10px] text-stone-500 mt-0.5">
            (Phone number can be changed in <code>src/data/eventData.js</code>)
          </div>
        </div>
      </div>
    </section>
  );
}
