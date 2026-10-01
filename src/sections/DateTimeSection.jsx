import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { getGoogleCalendarUrl, downloadIcsFile } from "../utils/calendarHelper";
import { Calendar, Clock, Check, CalendarDays, ExternalLink, Download } from "lucide-react";

export function DateTimeSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleIcsDownload = () => {
    downloadIcsFile(eventData);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <section className="datetime-section">
      <span className="section-label">
        Save The Auspicious Date • புனித நாள் & நேரம்
      </span>

      <h2 className="section-title-tamil">
        நாள் மற்றும் நேரம்
      </h2>

      {/* Grid of Date & Time Cards */}
      <div className="datetime-grid">
        {/* Date Card */}
        <div className="datetime-card">
          <div className="datetime-icon-circle">
            <Calendar className="w-6 h-6" />
          </div>

          <span className="datetime-label-top">
            நாள் • DATE
          </span>

          <div className="datetime-num">
            19
          </div>

          <div className="datetime-sub">
            OCTOBER 2026
          </div>

          <div className="datetime-tamil-sub">
            {eventData.formattedDateTamil}
            <span className="block text-xs text-[#8B263E] mt-0.5">
              ({eventData.formattedDayTamil})
            </span>
          </div>
        </div>

        {/* Time Card */}
        <div className="datetime-card">
          <div className="datetime-icon-circle">
            <Clock className="w-6 h-6" />
          </div>

          <span className="datetime-label-top">
            நேரம் • TIME
          </span>

          <div className="datetime-num">
            6:00
          </div>

          <div className="datetime-sub">
            AM ONWARDS
          </div>

          <div className="datetime-tamil-sub">
            {eventData.formattedTimeTamil}
            <span className="block text-xs text-[#8B263E] mt-0.5">
              (அதிகாலை வேளை)
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Actions */}
      <div className="calendar-actions">
        <a
          href={getGoogleCalendarUrl(eventData)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-burgundy"
        >
          <CalendarDays className="w-4 h-4 text-[#F5D77F]" />
          <span>Add to Google Calendar</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#F5D77F]/80" />
        </a>

        <button
          onClick={handleIcsDownload}
          type="button"
          className="btn-secondary-gold"
        >
          {downloaded ? (
            <>
              <Check className="w-4 h-4 text-green-700" />
              <span className="text-green-800">Saved to Calendar!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-[#8B263E]" />
              <span>Save to Apple / Outlook (.ics)</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
