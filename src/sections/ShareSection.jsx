import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { Share2, Check, Copy } from "lucide-react";

export function ShareSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareText = `${eventData.share.text}\n${currentUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: eventData.share.title,
          text: eventData.share.text,
          url: currentUrl,
        });
        return;
      } catch (err) {
        if (err.name !== "AbortError") {
          console.info("Web Share API fallback to WhatsApp", err);
        }
      }
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="share-section">
      <div className="share-card">
        <div className="datetime-icon-circle" style={{ width: "2.75rem", height: "2.75rem" }}>
          <Share2 className="w-5 h-5" />
        </div>

        <h3 className="font-serif text-lg font-bold text-[#4A0E1C] mb-1">
          Share This Joyous Occasion
        </h3>
        <p className="font-tamil text-xs text-[#8B263E] mb-3">
          இந்த நற்செய்தியை உங்கள் குடும்பத்தினருடன் பகிருங்கள்
        </p>

        <div className="share-buttons">
          <button
            onClick={handleShare}
            type="button"
            className="btn-whatsapp-share"
          >
            <Share2 className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            type="button"
            className="btn-secondary-card"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-700" />
                <span className="text-green-800">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#8B263E]" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
