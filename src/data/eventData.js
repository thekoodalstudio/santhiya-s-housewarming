/**
 * Central Event Data Configuration for The Koodal Studio
 * Client: Vergin Santhiya & Family
 * Event: Christian Housewarming Ceremony / புதுமனைப் புகுவிழா
 */

export const eventData = {
  // Studio & Meta
  studio: {
    name: "The Koodal Studio",
    tagline: "Digital Invitation by The Koodal Studio",
    website: "https://thekoodalstudio.com",
  },

  // Titles
  title: "Housewarming Ceremony",
  tamilTitle: "புதுமனைப் புகுவிழா",
  subTitleEnglish: "Inviting you to celebrate our new beginning",
  openingPraise: "With God's Grace",
  tamilOpeningPraise: "தேவ கிருபையோடு",

  // Dates & Times
  eventDate: "2026-10-19T06:00:00+05:30", // ISO timestamp in IST
  formattedDateEnglish: "19 October 2026",
  formattedDayEnglish: "Monday",
  formattedTimeEnglish: "6:00 AM onwards",

  formattedDateTamil: "19 அக்டோபர் 2026",
  formattedDayTamil: "திங்கட்கிழமை",
  formattedTimeTamil: "காலை 6:00 மணி முதல்",

  // Scripture / Bible Verse (Psalm 122:7)
  scripture: {
    verseRefEnglish: "Psalm 122:7",
    verseRefTamil: "சங்கீதம் 122:7",
    verseEnglish: "Peace be within thy walls, and prosperity within thy palaces.",
    verseTamil: "“உன் அலங்கத்திற்குள்ளே சமாதானமும், உன் அரமனைகளுக்குள்ளே சுகமும் இருப்பதாக.”",
  },

  // Side Emblems & Blessings from the invitation
  emblems: {
    topBadge: "எங்கள் புதிய இல்லம் உங்கள் பிரார்த்தனைகளால் செழிக்கட்டும்...",
    houseMotto: "இயேசுவோடு இல்லம்... இனிமையான வாழ்க்கை...",
    bottomBlessing: "எங்கள் இல்லம் இயேசுவின் கிருபையால் நிறைந்த ஆசீர்வாத இல்லமாக ஆகட்டும்...",
  },

  // Main Invitation Messages
  invitationMessage: {
    english: "With God’s abundant grace, we are joyfully moving into our new home!\n\nWe warmheartedly invite you and your family to join us for our Housewarming Ceremony and shower us with your love, prayers, and blessings.",
    tamil: "இயேசுவின் கிருபையால் எங்களுக்கு கிடைத்துள்ள புதிய இல்லத்தில் உங்கள் அனைவரின் பிரார்த்தனை, அன்பு மற்றும் ஆசீர்வாதங்களை வேண்டுகிறோம்.",
    closingEnglish: "We look forward to celebrating this special moment with you!",
    closingTamil: "தாங்கள் தங்கள் குடும்பத்தினருடன் வருகை தந்து எங்களை ஆசீர்வதிக்குமாறு அன்புடன் அழைக்கிறோம்.",
  },

  // Hosts / Family Section (அன்புடன் அழைப்பவர்கள்)
  hostsHeaderTamil: "அன்புடன் அழைப்பவர்கள்",
  hostsHeaderEnglish: "With Love & Blessings",
  hosts: [
    { id: 1, name: "செல்லையா & அன்னபுஷ்பம்", role: "Elders / குடும்ப பெரியவர்கள்" },
    { id: 2, name: "ஞானசீலன் & ஜூலியட்", role: "Hosts / இல்லத்தார்" },
    { id: 3, name: "செல்சி & ஜோனா", role: "Family / குடும்பத்தினர்" },
    { id: 4, name: "வெர்ஜின் சந்தியா", role: "Family / குடும்பத்தினர்" },
    { id: 5, name: "சிரில் டிராபின்", role: "Family / குடும்பத்தினர்" },
  ],

  // Venue & Location
  venue: {
    nameEnglish: "Senthilvel Avenue",
    addressLinesEnglish: [
      "Senthilvel Avenue",
      "Thoppuvazham Road",
      "Near B.Ed College",
      "Sathankulam",
      "Thoothukudi - 628704"
    ],
    nameTamil: "செந்தில்வேல் அவென்யு",
    addressLinesTamil: [
      "செந்தில்வேல் அவென்யு,",
      "தோப்புவளம் ரோடு,",
      "B.ed கல்லூரி அருகில்,",
      "சாத்தான்குளம்,",
      "தூத்துக்குடி - 628704"
    ],
    googleMapsQuery: "Senthilvel Avenue, Thoppuvazham Road, Near B.Ed College, Sathankulam, Thoothukudi - 628704",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Senthilvel+Avenue,+Thoppuvazham+Road,+Near+B.Ed+College,+Sathankulam,+Thoothukudi+-+628704",
  },

  // RSVP Configuration
  rsvp: {
    // Easily configurable WhatsApp number for the family (with international country code without '+' or special chars)
    // Business owner can replace this number anytime:
    whatsappNumber: "919876543210", // REPLACE_WITH_NUMBER
    defaultContactName: "Family Host",
    options: [
      {
        id: "attending",
        label: "Yes, I'll be there",
        labelTamil: "நாங்கள் வருகிறோம் ✨",
        message: "Hello! We are delighted to confirm our attendance for the Housewarming Ceremony on 19 October 2026. Looking forward to celebrating with you! - [Your Name]",
      },
      {
        id: "with-family",
        label: "With Family",
        labelTamil: "குடும்பத்துடன் வருகிறோம் 👨‍👩‍👧‍👦",
        message: "Hello! Our entire family will gladly join your Housewarming Ceremony on 19 October 2026. May God bless your new home! - [Your Name]",
      },
      {
        id: "declined",
        label: "Unable to Attend",
        labelTamil: "வர இயலவில்லை, எங்களது வாழ்த்துகள் 🙏",
        message: "Hello! Unfortunately we are unable to attend in person, but our heartfelt prayers, love, and congratulations are with you and your beautiful new home! - [Your Name]",
      },
    ],
  },

  // Audio configuration
  audio: {
    // You can drop an mp3 file into public/assets/background-music.mp3
    trackSrc: "/assets/background-music.mp3",
    trackTitle: "Peaceful Instrumental Hymn",
    artist: "The Koodal Studio Christian Collection",
  },

  // Assets
  images: {
    house: "/assets/house.jpg",
    familyPortrait: "/assets/family_portrait.jpg",
    fullPoster: "/assets/invitation_full.jpg",
  },

  // Sharing Text
  share: {
    title: "Housewarming Ceremony Invitation | புதுமனைப் புகுவிழா",
    text: "You are warmly invited to our Housewarming Ceremony 🏡✨\n\n📅 19 October 2026\n⏰ 6:00 AM onwards\n📍 Senthilvel Avenue, Sathankulam\n\n'Peace be within thy walls, and prosperity within thy palaces.' — Psalm 122:7\n\nWe would be blessed to have you and your family with us!\nView our digital invitation here:",
  }
};
