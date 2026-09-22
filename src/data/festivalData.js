export const FESTIVAL_INFO = {
  name: "KHELAIYA 2026",
  subTitle: "The Grand College Ras-Garba Mahotsav",
  tagline: "Where Ancient Rhythm Meets Youthful Euphoria",
  date: "October 24, 2026",
  dateTarget: "2026-10-24T18:00:00+05:30",
  venue: "Grand Open Grounds, University Campus, Gate 4",
  city: "Ahmedabad, Gujarat",
  stats: [
    { label: "Khelaiyas Dancing", value: "5,000+", icon: "Users" },
    { label: "Live Dhol & Orchestra", value: "25+ Artists", icon: "Music" },
    { label: "Prizes & Best Dressed", value: "₹1,50,000+", icon: "Trophy" },
    { label: "Hours of Non-stop Garba", value: "8+ Hours", icon: "Clock" },
  ]
};

export const PASS_TIERS = [
  {
    id: "early-bird",
    name: "Early Bird Pass",
    badge: "Limited Time • 40% Off",
    price: 299,
    originalPrice: 499,
    description: "The preferred pass for passionate dancers who secure their spot early.",
    popular: true,
    perks: [
      "Guaranteed Fast-Track Priority Entry at Gate 1",
      "Complimentary Pair of Handcrafted Wooden Dandiya Sticks",
      "Food & Beverage Coupon worth ₹100 included",
      "Exclusive Access to Inner Garba Circle",
      "Eligible for Best Khelaiya & Best Attire Mega Awards",
      "Digital Commemorative e-Pass with QR Code",
    ],
    urgencyText: "Only 48 passes remaining at this price!",
  },
  {
    id: "regular",
    name: "Regular Pass",
    badge: "Standard Entry",
    price: 499,
    originalPrice: null,
    description: "Full access pass for all college students and cultural enthusiasts.",
    popular: false,
    perks: [
      "General Arena Entry at Gate 2 & 3",
      "Access to Main Dance Arena & DJ Stage",
      "Access to Food Festival Court & Flea Stalls",
      "Traditional Aarti & Mega Maha-Garba Participation",
      "Digital Commemorative e-Pass with QR Code",
    ],
    urgencyText: "Entry closes once venue capacity is reached",
  },
  {
    id: "squad-pass",
    name: "Group Squad Pass (4x)",
    badge: "Best For Friends",
    price: 999,
    originalPrice: 1599,
    description: "Form your Garba circle! 4 passes bundled with special squad perks.",
    popular: false,
    perks: [
      "4x Fast-Track Entry for the whole squad",
      "4x Pairs of Decorative LED/Wooden Dandiya Sticks",
      "Reserved Squad Photo Booth Session with Instant Print",
      "Food & Mocktail Vouchers worth ₹250",
      "Dedicated Squad Wristbands & Priority Cloakroom",
    ],
    urgencyText: "Squad slots filling rapidly!",
  }
];

export const COMMITTEE_MEMBERS = [
  {
    id: 1,
    name: "Aarav Trivedi",
    role: "President & Convener",
    category: "Core Committee",
    department: "Computer Science, Final Year",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Khelaiya is not just an event; it's the heartbeat of our campus tradition."
  },
  {
    id: 2,
    name: "Drishi Patel",
    role: "Cultural Secretary",
    category: "Core Committee",
    department: "Design & Media, 3rd Year",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Blending ethnic Gujarat heritage with modern energy for our generation."
  },
  {
    id: 3,
    name: "Karan Joshi",
    role: "Head of Music & Production",
    category: "Heads",
    department: "Mechanical Engineering, Final Year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Get ready for ground-shaking dhol beats and authentic traditional raas."
  },
  {
    id: 4,
    name: "Ananya Mehta",
    role: "Head of Decor & Aesthetics",
    category: "Heads",
    department: "Architecture, 4th Year",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Creating an enchanting golden palace of 10,000 fairy lights and rangolis."
  },
  {
    id: 5,
    name: "Devang Shah",
    role: "Head of Sponsorships & PR",
    category: "Heads",
    department: "Business Administration, 3rd Year",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Partnering with the finest youth brands to make this edition unforgettable."
  },
  {
    id: 6,
    name: "Tanvi Bhatt",
    role: "Lead Coordinator - Security & Crowd",
    category: "Volunteers",
    department: "Civil Engineering, 3rd Year",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Safety, comfort, and unmatched vibes for every single student attending."
  },
  {
    id: 7,
    name: "Rohan Desai",
    role: "Lead - Competitions & Judges",
    category: "Volunteers",
    department: "Information Technology, 2nd Year",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linkedin: "#",
    quote: "Showcase your best three-taali and dodhiya steps to win the grand crown!"
  },
  {
    id: 8,
    name: "Meera Vora",
    role: "Lead - Stage & Hospitality",
    category: "Volunteers",
    department: "Humanities & Arts, 2nd Year",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    instagram: "#",
    linekdin: "#",
    quote: "Welcoming 5000+ dancers with traditional tilak and warmth."
  }
];

export const SPONSORS = [
  {
    tier: "Title Sponsor",
    name: "Royal Gujarat Heritage",
    subtitle: "Presented By",
    logoText: "ROYAL GUJARAT",
    category: "Cultural Tourism & Heritage",
  },
  {
    tier: "Powered By",
    name: "Zestify Youth Beverages",
    subtitle: "Official Hydration Partner",
    logoText: "ZESTIFY BEV",
    category: "Energy & Refreshments",
  },
  {
    tier: "Gold Sponsor",
    name: "KalaNiketan Ethnic Studio",
    subtitle: "Official Wardrobe & Styling",
    logoText: "KALANIKETAN",
    category: "Traditional Fashion",
  },
  {
    tier: "Gold Sponsor",
    name: "CampusVibe Audio & Lights",
    subtitle: "Sound & Stage Partner",
    logoText: "CAMPUSVIBE",
    category: "Stage Production",
  },
  {
    tier: "Silver Sponsor",
    name: "Farsan Express Sweets",
    subtitle: "Snacks & Food Partner",
    logoText: "FARSAN EXPRESS",
    category: "Authentic Delicacies",
  },
  {
    tier: "Silver Sponsor",
    name: "Radio Mirchi 98.3",
    subtitle: "Exclusive Media Partner",
    logoText: "MIRCHI RADIO",
    category: "Media & Broadcast",
  },
  {
    tier: "Silver Sponsor",
    name: "PixelCraft Photography",
    subtitle: "Moments Partner",
    logoText: "PIXELCRAFT",
    category: "Media Coverage",
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "The Great Maha-Ras Circle",
    category: "Garba Circles",
    image: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?auto=format&fit=crop&w=1200&q=80",
    caption: "Over 2,500 dancers moving in synchronized concentric circles under midnight floodlights.",
  },
  {
    id: 2,
    title: "Radiant Chaniya Choli & Mirrorwork",
    category: "Fashion & Glamour",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    caption: "Handcrafted Kutchi embroidery, glimmering mirrors, and traditional oxidized silver jewelry.",
  },
  {
    id: 3,
    title: "Thunderous Dhol Beats",
    category: "Music & Beats",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    caption: "Live master percussionists accelerating the tempo from gentle heench to electric dodhiya.",
  },
  {
    id: 4,
    title: "The Divine 1,000 Diya Aarti",
    category: "Traditions & Aarti",
    image: "https://images.unsplash.com/photo-1576487246293-e4d0d3f2ec4e?auto=format&fit=crop&w=1200&q=80",
    caption: "The spiritual pinnacle: 1,000 brass lamps ignited together for Maa Ambe's royal blessing.",
  },
  {
    id: 5,
    title: "High-Energy Dandiya Clashes",
    category: "Garba Circles",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    caption: "Synchronized beats of carved wooden sticks echoing through the university grounds.",
  },
  {
    id: 6,
    title: "Crowning The Best Khelaiya",
    category: "Celebrity Moments",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    caption: "Jubilant winners receiving trophies and ₹50,000 cash prize for extraordinary grace & stamina.",
  }
];

export const SCHEDULE_TIMELINE = [
  {
    time: "06:00 PM",
    title: "Grand Gates Open & Red Carpet Welcome",
    description: "Traditional dhol स्वागत, tilak ceremony, and distribution of complimentary dandiya sticks for Early Bird pass holders.",
    icon: "DoorOpen"
  },
  {
    time: "07:00 PM",
    title: "Ganesh Sthapana & Lamp Lighting",
    description: "Inaugural ceremony by the University Dean, Cultural Patron, and lightning of the monumental 7-foot brass Diya.",
    icon: "Flame"
  },
  {
    time: "07:30 PM",
    title: "Round 1: Classical 2-Taali & 3-Taali Raas",
    description: "Traditional slow-to-medium pace Garba hymns led by folk singers Pt. Devang Vyas & ensemble.",
    icon: "Music"
  },
  {
    time: "09:30 PM",
    title: "Maha Aarti Ceremony & Sacred Prasad",
    description: "1,000 floating brass aarti lamps held simultaneously in reverent silence followed by campus-wide prasad distribution.",
    icon: "Sparkles"
  },
  {
    time: "10:15 PM",
    title: "Round 2: Electric Dodhiya & Fusion Raas",
    description: "High-octane tempo with 12-step dodhiya, popat, and synchronized group choreographies with laser shows.",
    icon: "Zap"
  },
  {
    time: "11:30 PM",
    title: "Sanedo Sanedo & Grand Prize Awards",
    description: "Crowning of 'Best Khelaiya (Male & Female)', 'Best Traditional Attire', and 'Best Energy Squad' followed by celebration.",
    icon: "Trophy"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Is traditional attire mandatory to enter the dance arena?",
    answer: "Yes! To preserve the festive sanctity and cultural beauty of Khelaiya, Chaniya Choli / Kediyu / Kurta Pajama / Dhoti is mandatory for anyone entering the active Garba dance arena. Spectators in the seating gallery can wear festive ethnic wear."
  },
  {
    question: "Can students from other colleges or universities register?",
    answer: "Absolutely! Khelaiya is an inter-collegiate festival open to all accredited university & college students. You must present your valid College ID along with your digital QR e-Pass at the gate."
  },
  {
    question: "Are Dandiya sticks provided, or should we bring our own?",
    answer: "Early Bird & Squad Pass holders receive a complimentary pair of handcrafted polished wooden dandiyas at the entrance. Regular pass holders may bring their own or purchase designer pairs at our campus cultural stalls."
  },
  {
    question: "What security and medical facilities are in place?",
    answer: "The venue features 24/7 campus security, dedicated female helpdesks, certified emergency medical doctors, a standby ambulance, and free water refill hydration stations throughout the grounds."
  },
  {
    question: "What is the pass refund or transfer policy?",
    answer: "Passes are non-refundable but can be transferred to another student with valid college ID up to 48 hours prior to the festival date by contacting the support helpdesk."
  }
];
