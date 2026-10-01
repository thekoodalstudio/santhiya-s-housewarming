/**
 * Calendar Helpers for Google Calendar URL & .ics File Download
 */

export function getGoogleCalendarUrl(event) {
  // Start: 2026-10-19 06:00 AM IST (UTC: 2026-10-19T00:30:00Z)
  // End: 2026-10-19 14:00 PM IST (UTC: 2026-10-19T08:30:00Z)
  const startTime = "20261019T003000Z";
  const endTime = "20261019T083000Z";

  const title = encodeURIComponent(`${event.title} - ${event.tamilTitle}`);
  const details = encodeURIComponent(
    `${event.invitationMessage.english}\n\nBible Verse: ${event.scripture.verseEnglish} (${event.scripture.verseRefEnglish})\n\nVenue: ${event.venue.googleMapsQuery}`
  );
  const location = encodeURIComponent(event.venue.googleMapsQuery);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}&sf=true&output=xml`;
}

export function downloadIcsFile(event) {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Koodal Studio//Christian Housewarming Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:housewarming-santhiya-20261019@thekoodalstudio.com",
    "DTSTAMP:20261001T000000Z",
    "DTSTART:20261019T003000Z", // 06:00 AM IST
    "DTEND:20261019T083000Z",   // 02:00 PM IST
    `SUMMARY:${event.title} | ${event.tamilTitle}`,
    `DESCRIPTION:${event.invitationMessage.english.replace(/\n/g, "\\n")} - Psalm 122:7`,
    `LOCATION:${event.venue.googleMapsQuery}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Housewarming Ceremony Tomorrow",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Housewarming-Ceremony-19-Oct-2026.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
