// ---------------------------------------------------------------------------
// EDIT EVERYTHING ABOUT THE WEDDING HERE.
// Names, dates, venues, map links, photos and RSVP copy all live in this file.
// ---------------------------------------------------------------------------

import coverArt from "@/assets/cover.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  mapUrl: string;
};

export type MosaicTile =
  | { kind: "photo"; src: string; alt: string; span: string }
  | { kind: "ornament"; span: string };

export const wedding = {
  seo: {
    title: "Arnesh & Nimrit — Wedding Invitation",
    description:
      "Arnesh and Nimrit invite you to their Mehndi, Sangeet and Wedding celebrations. Open the invitation and RSVP.",
  },

  cover: {
    image: coverArt,
    imageAlt: "Ornate gold heart wedding invitation cover with peacocks and florals",
    eyebrow: "The Wedding Invitation Of",
    instruction: "Press the heart to open the invitation",
  },

  blessing: {
    hindi: "श्री गणेशाय",
    hindiSecondLine: "नमः",
    english: "May all beginnings be blessed",
  },

  couple: {
    first: {
      name: "Arnesh",
      parents: "Son of Mr. Rajinder & Mrs. Simran Malhotra",
    },
    connector: "with",
    second: {
      name: "Nimrit",
      parents: "Daughter of Mr. Harpreet & Mrs. Kiran Sahni",
    },
    shortNames: "ARNESH & NIMRIT",
  },

  date: {
    line: "Thursday, 12 February 2026",
    place: "New Delhi, India",
  },

  mosaic: {
    verse: [
      "A little bit of us,",
      "Surrounded by love,",
      "Let the celebrations begin—",
      "with all of you we love.",
    ],
    tiles: [
      { kind: "photo", src: photo1, alt: "Arnesh and Nimrit holding hands", span: "col-span-2 row-span-2" },
      { kind: "photo", src: photo2, alt: "Henna on the bride's hands", span: "col-span-2 row-span-1" },
      { kind: "ornament", span: "col-span-1 row-span-1" },
      { kind: "photo", src: photo3, alt: "The couple laughing at the sangeet", span: "col-span-1 row-span-1" },
      { kind: "photo", src: photo4, alt: "Floral mandap decorations", span: "col-span-2 row-span-1" },
      { kind: "photo", src: photo5, alt: "Nimrit in her blush lehenga", span: "col-span-2 row-span-2" },
      { kind: "ornament", span: "col-span-1 row-span-1" },
      { kind: "photo", src: photo6, alt: "Arnesh in his ivory sherwani", span: "col-span-1 row-span-1" },
    ] as MosaicTile[],
  },

  events: {
    heading: "The Celebrations",
    subheading: "Three evenings, one family",
    directionLabel: "GET DIRECTION",
    list: [
      {
        id: "mehndi",
        name: "Mehndi",
        date: "Tuesday, 10 February 2026",
        time: "4:00 PM onwards",
        venue: "The Sahni Residence, Greater Kailash II, New Delhi",
        description:
          "An afternoon of henna, dholki songs and chai in the garden. Wear something bright — the marigolds insist.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Greater+Kailash+II+New+Delhi",
      },
      {
        id: "sangeet",
        name: "Sangeet",
        date: "Wednesday, 11 February 2026",
        time: "7:30 PM onwards",
        venue: "Crystal Ballroom, The Imperial, Janpath, New Delhi",
        description:
          "Both families take the floor. Expect rehearsed performances, unrehearsed encores and a very long dinner.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Imperial+Janpath+New+Delhi",
      },
      {
        id: "wedding",
        name: "Wedding",
        date: "Thursday, 12 February 2026",
        time: "Baraat 6:00 PM · Pheras 9:00 PM",
        venue: "Rose Garden Lawns, The Ashok, Chanakyapuri, New Delhi",
        description:
          "The vows, the fire, the seven rounds. Please be seated by half past eight so nothing is missed.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Ashok+Chanakyapuri+New+Delhi",
      },
    ] as WeddingEvent[],
  },

  rsvp: {
    heading: "RSVP",
    eyebrow: "YOUR PRESENCE IS OUR BLESSING",
    lines: [
      "Good food, great music & unforgettable moments await ✨",
      "Let us know your plans below — we can't wait to have you with us.",
    ],
    submitLabel: "SEND RSVP",
    fields: {
      name: { label: "Full Name", placeholder: "Your name as we should read it out" },
      attending: {
        label: "Will you be attending?",
        options: ["YES, CAN'T WAIT! 💃", "NO, WILL MISS IT 💔"],
      },
      guests: { label: "Number of guests" },
      guestType: {
        label: "Names of guests joining you?",
        options: ["FAMILY", "PLUS ONE", "ALWAYS A LONER"],
      },
      mood: {
        label: "Wedding mood",
        options: [
          "THE FOOD (OBVIOUSLY) 🍽️",
          "THE MUSIC & DANCE FLOOR 💃",
          "ALL THE LOVE & CELEBRATIONS 💛",
          "DRINKS & GOOD VIBES 🥂",
        ],
      },
      jaimala: {
        label: "Who lifts whom first at the jaimala?",
        options: ["NIMRIT", "ARNESH"],
      },
      team: {
        label: "Pick your side",
        options: [
          "LADKIWALE AAGYE OYEEE 💛",
          "LADKEWALE AAGYE OYEEE 💙",
          "JUST HERE FOR THE FOOD 😌",
        ],
      },
      message: {
        label: "A message for the couple (optional)",
        placeholder: "Blessings, warnings, dance requests…",
        maxLength: 1000,
      },
    },
    success: {
      title: "Your RSVP is with us",
      body: "Thank you — your reply has been sealed and sent to the family. We will see you amidst the marigolds.",
    },
  },

  footer: {
    sealed: "SEALED WITH LOVE",
    withLove: "WITH LOVE · ARNESH & NIMRIT",
    credit: "Invitation designed for the Malhotra–Sahni families",
  },
};