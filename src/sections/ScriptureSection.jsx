import React from "react";
import { CrossOrnament, DoveMotif, GoldDivider } from "../components/DecorativeMotifs";
import { eventData } from "../data/eventData";

export function ScriptureSection() {
  return (
    <section id="scripture-section" className="scripture-section">
      <div className="scripture-card">
        <div className="card-inset-border" />

        <CrossOrnament size={34} className="mb-2" />

        <span className="scripture-badge">
          Holy Scripture • தேவ வசனம்
        </span>

        {/* Tamil Verse */}
        <blockquote className="scripture-tamil">
          {eventData.scripture.verseTamil}
        </blockquote>

        <cite className="scripture-tamil-ref">
          — {eventData.scripture.verseRefTamil}
        </cite>

        <GoldDivider className="my-4" />

        {/* English Verse */}
        <blockquote className="scripture-eng">
          "{eventData.scripture.verseEnglish}"
        </blockquote>

        <cite className="scripture-eng-ref">
          — {eventData.scripture.verseRefEnglish}
        </cite>
      </div>
    </section>
  );
}
