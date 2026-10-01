# Complete Chat Context & Project Documentation
## Vergin Santhiya — Christian Housewarming Ceremony (புதுமனைப் புகுவிழா)
### Studio: The Koodal Studio
**Repository**: [https://github.com/thekoodalstudio/santhiya-s-housewarming.git](https://github.com/thekoodalstudio/santhiya-s-housewarming.git)  
**Date of Creation**: 01 October 2026  
**Folder Location**: `c:\Users\Sabareesh Sakthivel\Documents\Koodal Invites\Vergin Santhiya House Warming`

---

## 1. Project Brief & CARE Framework

### C — Context
- **Studio**: The Koodal Studio (Premium South Indian digital e-invitation studio).
- **Client**: Vergin Santhiya & Family.
- **Event**: Christian Housewarming Ceremony / புதுமனைப் புகுவிழா.
- **Primary Design Reference**: The physical invitation poster provided in `Image.jpeg`.
- **Core Aesthetic**: Royal, elegant, premium, South Indian Christian visual language with warm ivory parchment (`#FAF6F0`), deep wine/burgundy ribbons (`#4A0E1C`), antique gold filigree (`#D4AF37`), and soft rose floral accents.

### A — Action
Build a complete, responsive, interactive single-page invitation website ready for Vercel deployment, test all interactions across mobile and desktop, commit, and push directly to `https://github.com/thekoodalstudio/santhiya-s-housewarming.git`.

### R — Requirements & Event Details
- **Date**: 19 October 2026 (திங்கட்கிழமை)
- **Time**: 6:00 AM onwards (அதிகாலை வேளை)
- **Venue**:
  - *Tamil*: செந்தில்வேல் அவென்யு, தோப்புவளம் ரோடு, B.ed கல்லூரி அருகில், சாத்தான்குளம், தூத்துக்குடி - 628704
  - *English*: Senthilvel Avenue, Thoppuvazham Road, Near B.Ed College, Sathankulam, Thoothukudi - 628704
- **Bible Verse (Psalm 122:7)**:
  - *Tamil*: “உன் அலங்கத்திற்குள்ளே சமாதானமும், உன் அரமனைகளுக்குள்ளே சுகமும் இருப்பதாக.” — சங்கீதம் 122:7
  - *English*: "Peace be within thy walls, and prosperity within thy palaces." — Psalm 122:7
- **Main Tamil Invitation Message**:
  > இயேசுவின் கிருபையால் எங்களுக்கு கிடைத்துள்ள புதிய இல்லத்தில் உங்கள் அனைவரின் பிரார்த்தனை, அன்பு மற்றும் ஆசீர்வாதங்களை வேண்டுகிறோம்.
- **English Invitation Message**:
  > "With God’s abundant grace, we are joyfully moving into our new home! We warmheartedly invite you and your family to join us for our Housewarming Ceremony and shower us with your love, prayers, and blessings."
- **Emblems & Blessings**:
  - Top Badge: "எங்கள் புதிய இல்லம் உங்கள் பிரார்த்தனைகளால் செழிக்கட்டும்..."
  - House Motto: "இயேசுவோடு இல்லம்... இனிமையான வாழ்க்கை..."
  - Closing Blessing: "எங்கள் இல்லம் இயேசுவின் கிருபையால் நிறைந்த ஆசீர்வாத இல்லமாக ஆகட்டும்..."
- **Authentic Hosts (அன்புடன் அழைப்பவர்கள்)**:
  1. செல்லையா & அன்னபுஷ்பம் (Elders)
  2. ஞானசீலன் & ஜூலியட் (Hosts)
  3. செல்சி & ஜோனா
  4. வெர்ஜின் சந்தியா
  5. சிரில் டிராபின்

---

## 2. Technical Architecture & File Structure

```text
Vergin Santhiya House Warming/
├── CHAT_CONTEXT.md               <-- Complete chat history & project context
├── README.md                     <-- Production documentation & setup guide
├── package.json                  <-- Vite + React 19 + Lucide + Canvas-Confetti
├── vite.config.js                <-- Vite configuration
├── vercel.json                   <-- Vercel SPA rewrite rules
├── index.html                    <-- Meta tags, OpenGraph & Google Fonts
├── public/
│   ├── favicon.svg               <-- Golden cross house favicon
│   └── assets/
│       ├── house.jpg             <-- Clean cropped new home centerpiece
│       ├── family_portrait.jpg   <-- Family portrait in gold frame & lanterns
│       └── invitation_full.jpg   <-- Original full printed card keepsake
└── src/
    ├── main.jsx                  <-- Application entry
    ├── App.jsx                   <-- Master single-page layout & state
    ├── data/
    │   └── eventData.js          <-- Central configuration for all event data
    ├── utils/
    │   ├── audioSynthesizer.js   <-- Procedural Web Audio hymn & mp3 fallback
    │   ├── calendarHelper.js     <-- Google Calendar link & RFC .ics file generator
    │   └── confettiHelper.js     <-- Golden celebration confetti
    ├── components/
    │   ├── HouseIntroLoader.jsx  <-- Opening animated SVG line-drawing house
    │   ├── DecorativeMotifs.jsx  <-- Cross ornaments, floral filigree, ribbons
    │   ├── FloatingMusic.jsx     <-- Floating hymn toggle button
    │   └── ModalOriginalCard.jsx <-- Lightbox viewer for original card
    ├── sections/
    │   ├── HeroSection.jsx       <-- Royal burgundy banner & event badges
    │   ├── ScriptureSection.jsx  <-- Psalm 122:7 scripture parchment card
    │   ├── HouseVisualSection.jsx<-- Centerpiece home with glowing cross
    │   ├── InvitationMessageSection.jsx <-- Dedication message in Tamil & English
    │   ├── DateTimeSection.jsx   <-- Calendar cards with Google & .ics actions
    │   ├── CountdownSection.jsx  <-- Live countdown timer to 19 Oct 2026, 6 AM
    │   ├── FamilyPhotoSection.jsx<-- Family portrait with glowing lanterns
    │   ├── HostsSection.jsx      <-- "அன்புடன் அழைப்பவர்கள்" with Tamil names
    │   ├── VenueSection.jsx      <-- Address card & Google Maps navigation
    │   ├── RsvpSection.jsx       <-- Interactive WhatsApp RSVP + personalized name
    │   ├── ShareSection.jsx      <-- Web Share API & WhatsApp sharing
    │   └── FooterSection.jsx     <-- Closing blessing & Koodal Studio branding
    └── styles/
        ├── index.css             <-- Core layout utilities & design tokens
        └── invitation.css        <-- Pure Vanilla CSS luxury styles & animations
```

---

## 3. Key Features & Implementation Highlights

### A. Opening House Loading Animation (`HouseIntroLoader.jsx`)
- **SVG Line Drawing**: The foundation, gabled roof, eaves, walls, and doorway draw themselves in sequence using CSS `stroke-dasharray` and `stroke-dashoffset`.
- **Divine Cross & Warmth**: Glowing church cross atop the roof, warm interior window candlelight, and pulsing heart inside the entrance.
- **Typography & Scripture**: *"தேவ கிருபையோடு • WITH GOD'S GRACE"*, *"புதுமனைப் புகுவிழா"*, and Psalm 122:7.
- **Transition**: Smooth golden progress bar (2.6s) with interactive **"Open Invitation • அழைப்பிதழைத் திறக்கவும் ✨"** button that scales and fades out with golden radiance into the main invitation.

### B. Sacred Scripture Parchment Card (`ScriptureSection.jsx`)
- Dual-inset gold border frame.
- High-contrast Tamil typography using **Noto Serif Tamil**.
- English typography using **Playfair Display**.

### C. Centerpiece New Home & Family Portrait
- Extracted and cropped cleanly from the source image using PIL:
  - `house.jpg`: Focused on the illuminated home, palm trees, and rooftop cross without overlapping poster typography.
  - `family_portrait.jpg`: Preserves the full family arrangement flanked by glowing vintage lanterns and soft rose florals.

### D. Interactive Calendar Integration (`calendarHelper.js`)
- **Google Calendar**: Pre-formatted URL with start time `20261019T003000Z` (06:00 AM IST) and end time `20261019T083000Z` (02:00 PM IST).
- **Apple / Outlook / Android (.ics)**: Standard RFC 5545 iCalendar file generation triggered directly in the browser with 24-hour advance reminder alarm.

### E. WhatsApp RSVP with Celebration Confetti (`RsvpSection.jsx`)
- Options:
  1. *Yes, I'll be there* (`நாங்கள் வருகிறோம் ✨`)
  2. *With Family* (`குடும்பத்துடன் வருகிறோம் 👨‍👩‍👧‍👦`)
  3. *Unable to Attend* (`வர இயலவில்லை, எங்களது வாழ்த்துகள் 🙏`)
- Optional input for guest name.
- Selecting attendance triggers golden confetti bursts (`canvas-confetti`).
- Opens WhatsApp directly with a personalized message to the configured phone number (`eventData.rsvp.whatsappNumber`).

### F. Peaceful Procedural Background Hymn (`audioSynthesizer.js`)
- Zero external copyrighted audio dependency.
- Uses Web Audio API to synthesize a peaceful acoustic church harp/chimes arpeggio.
- Supports optional custom MP3 files placed in `public/assets/background-music.mp3`.
- Controlled via a floating `♫ Play Hymn / Pause` toggle button.

### G. Lightbox Modal for Original Printed Card (`ModalOriginalCard.jsx`)
- Allows guests to view the authentic printed card in high-resolution and download it.

---

## 4. Git Authentication & Repository Operations

### Authenticated Account
- **User**: `thekoodalstudio`
- **Email**: `thekoodalstudio@gmail.com`
- **PAT Configured**: Saved directly in local `.git/config` for this folder.
- **Remote**: `https://thekoodalstudio:<TOKEN>@github.com/thekoodalstudio/santhiya-s-housewarming.git`

### Verified Commits
1. `7b98758`: `feat: complete interactive Christian housewarming e-invitation website for Vergin Santhiya`
2. `253a599`: `feat: add animated Christian house intro loader and smooth unveiling transition`

---

## 5. Deployment Instructions (Vercel)

1. Open [Vercel Dashboard](https://vercel.com).
2. Click **Add New Project** -> **Import Git Repository**.
3. Select `thekoodalstudio/santhiya-s-housewarming`.
4. Framework Preset: **Vite**.
5. Root Directory: `./`.
6. Click **Deploy**. Vercel will run `npm run build` and publish the site instantly.
