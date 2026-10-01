# Vergin Santhiya — Christian Housewarming Ceremony (புதுமனைப் புகுவிழா)
### Digital E-Invitation by The Koodal Studio

A luxury, interactive, mobile-first Christian Housewarming E-Invitation website crafted for **Vergin Santhiya & Family**.

Designed with rich South Indian Christian royal aesthetics: warm ivory parchment, antique gold ornaments, deep wine/burgundy ribbons, authentic Tamil typography, and interactive modern web features.

---

## 🌟 Key Features

- **Royal Christian Aesthetic**: Inspired by high-end traditional South Indian Christian invitations with ornate gold borders, cross motifs, holy scriptures, and subtle radiance.
- **Holy Scripture Card**: Features **Psalm 122:7** in both Tamil (*“உன் அலங்கத்திற்குள்ளே சமாதானமும்...”*) and English.
- **Centerpiece House & Family Section**: Custom-framed portrait of the family and their new home with warm ambient lighting.
- **Authentic Tamil Hosts Section (அன்புடன் அழைப்பவர்கள்)**:
  - செல்லையா & அன்னபுஷ்பம்
  - ஞானசீலன் & ஜூலியட்
  - செல்சி & ஜோனா
  - வெர்ஜின் சந்தியா
  - சிரில் டிராபின்
- **Live Event Countdown**: Dynamic countdown timer to **19 October 2026, 6:00 AM IST**.
- **Interactive Calendar Save**:
  - Direct 1-click **Add to Google Calendar**
  - Downloadable `.ics` event file for Apple Calendar, Outlook, and Android.
- **Location Navigation**: Direct search destination query on Google Maps for **Senthilvel Avenue, Sathankulam**.
- **Interactive WhatsApp RSVP**:
  - Guests can select their attendance status (*Yes, I'll be there*, *With Family*, *Unable to Attend*)
  - Interactive celebration confetti upon confirmation
  - Generates pre-filled WhatsApp message directly to the family.
- **Social & WhatsApp Sharing**: Native Web Share API with instant WhatsApp share fallback.
- **Peaceful Background Hymn**:
  - Floating music toggle button
  - Built-in soothing Web Audio procedural harp/chime hymn (zero external copyright or download issues)
  - Also supports custom MP3 audio files (`/assets/background-music.mp3`).
- **Original Printed Card Modal**: Guests can view and download the full original printed card keepsake.

---

## ⚙️ Configuration

All event details are centralized in `src/data/eventData.js`:

```javascript
// Change RSVP WhatsApp number:
whatsappNumber: "919876543210"

// Custom background music:
// Drop your mp3 file into public/assets/background-music.mp3
trackSrc: "/assets/background-music.mp3"
```

---

## 🚀 Development & Deployment

### Run Locally
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

### Vercel Deployment
This repository is configured for automatic, zero-configuration deployment on **Vercel**:
1. Connect this GitHub repository (`thekoodalstudio/santhiya-s-housewarming`) on Vercel.
2. Framework preset: **Vite**.
3. Deploy!

---

*Crafted with love by **The Koodal Studio**.*
