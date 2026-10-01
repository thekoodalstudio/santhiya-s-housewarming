import React, { useState } from "react";
import { hymnPlayer } from "../utils/audioSynthesizer";
import { eventData } from "../data/eventData";
import { Music, Volume2 } from "lucide-react";

export function FloatingMusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const active = await hymnPlayer.togglePlay(eventData.audio.trackSrc);
    setIsPlaying(active);
  };

  return (
    <div className="floating-music-wrap">
      <button
        onClick={handleToggle}
        type="button"
        aria-label={isPlaying ? "Pause background hymn" : "Play peaceful background hymn"}
        className="floating-music-btn"
      >
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#F5D77F]" />
          ) : (
            <Music className="w-4 h-4 text-[#F5D77F]" />
          )}
        </span>

        <span>
          {isPlaying ? "Pause Hymn" : "Play Hymn"}
        </span>

        <span style={{ fontSize: "11px", color: "var(--gold-300)", paddingLeft: "0.25rem", borderLeft: "1px solid rgba(212,175,55,0.4)" }}>
          ♫
        </span>
      </button>
    </div>
  );
}
