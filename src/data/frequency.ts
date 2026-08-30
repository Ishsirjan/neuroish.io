import type { FrequencyRow } from "./types"

export const weeklyBudget = {
  totalHours: "6.5–7.5",
  sunday: "3 hours — record, edit, schedule",
  weeknights: "2 × 90 minutes — film 3 reels, write 2 captions, send 3 emails",
  hidden: "Stories while coffee brews. Do not count them as a second job.",
}

export const frequencyRows: FrequencyRow[] = [
  {
    channel: "bioish",
    name: "BioIsh (neuroscience podcast)",
    cadence: "2 episodes / month · publish Tuesday",
    monthCount: "2 long episodes + 4 clips",
    minutesPerWeek: "90 (averaged)",
    why: "Weekly solo science podcasts die in month two when the lab gets busy. Fortnightly is how working scientists actually stay on air. Tuesday releases sit next to journal-club culture and beat the Sunday dump.",
    doNot: "Do not add a mid-week bonus episode. Clip the episode instead.",
  },
  {
    channel: "chardi-kala",
    name: "Chardi Kala (Sikhi podcast)",
    cadence: "2 episodes / month · the other Tuesday",
    monthCount: "2 long episodes + 2 clips",
    minutesPerWeek: "75 (averaged)",
    why: "Same recording Sunday as BioIsh, alternating weeks. One mic setup, one edit stack. Sikhi needs more stillness than neuroscience; fortnightly protects that.",
    doNot: "Do not post Chardi Kala as a neuroscience reel. Keep the grid clean.",
  },
  {
    channel: "instagram",
    name: "Instagram @neuroish.fr",
    cadence: "3 reels / week (Mon · Wed · Fri) + daily stories",
    monthCount: "13 reels + stories",
    minutesPerWeek: "90 including captions",
    why: "Reels need a pulse, not a flood. Three is the floor that trains the algorithm without eating lab evenings. Monday explainer, Wednesday paper, Friday project or news. Stories (1–3/day) keep you human: bench, Montpellier light, one line of science.",
    doNot: "Do not chase 1 reel/day. That is how accounts go quiet in week 3.",
  },
  {
    channel: "facebook",
    name: "Facebook Page (NeuroIsh)",
    cadence: "Cross-post the same 3 reels",
    monthCount: "13 posts, zero extra shoots",
    minutesPerWeek: "10",
    why: "Parents, aunts, IITH families, and older Indian science readers still live here. Native upload, not an Instagram embed. Same caption, slightly warmer first line.",
    doNot: "Do not invent Facebook-only series in month one.",
  },
  {
    channel: "linkedin",
    name: "LinkedIn",
    cadence: "2 posts / week · Tue + Fri",
    monthCount: "8 posts",
    minutesPerWeek: "40",
    why: "You already have ~20k followers. This is distribution, not discovery. Rewrite the reel into a 180-word thought. No hashtag walls. Tag the paper, not ten people.",
    doNot: "Do not paste Instagram captions. LinkedIn readers want the method, not the hook-bait.",
  },
  {
    channel: "youtube",
    name: "YouTube (long + Shorts)",
    cadence: "Podcast audio+face on publish day · 2 Shorts / week from reels",
    monthCount: "4 long videos · 8 Shorts",
    minutesPerWeek: "20 (upload only)",
    why: "Podcasts need a permanent URL. YouTube is the archive and the search engine. Shorts are the same reel, uploaded native.",
    doNot: "Do not edit a separate YouTube cut in month one.",
  },
  {
    channel: "outreach",
    name: "Outreach (guests, collabs, platforms)",
    cadence: "3 new notes / week · follow-ups on Thursdays",
    monthCount: "12 first touches + 8 follow-ups",
    minutesPerWeek: "45",
    why: "Month one books month two. Three thoughtful notes beat twenty spray-and-pray DMs. Thursday is follow-up day so you never negotiate with yourself.",
    doNot: "Do not wait for a guest to start recording. September is solo on purpose.",
  },
]

export const monthTotals = [
  { label: "BioIsh episodes", value: "2" },
  { label: "Chardi Kala episodes", value: "2" },
  { label: "Neuroscience reels", value: "13" },
  { label: "LinkedIn posts", value: "8" },
  { label: "YouTube longs / Shorts", value: "4 / 8" },
  { label: "First-touch outreach", value: "12" },
  { label: "Hours on content", value: "~28" },
  { label: "Hours on lab", value: "the rest of your life" },
]

export const batchRecipe = [
  {
    title: "Sunday A — record week (3 hrs)",
    steps: [
      "09:30 — water, one page of the script out loud, no recording.",
      "09:45 — record the fortnightly podcast in one sitting. Stand. 28–32 minutes. Do not restart for small stumbles.",
      "10:30 — mark 3 clip timestamps while the file uploads.",
      "10:45 — edit: hard cuts only, no music bed under explanations, 3-second intro sting.",
      "11:45 — schedule Tuesday publish + write show notes from the script footer.",
      "12:15 — stop. Eat.",
    ],
  },
  {
    title: "Wednesday night — reel batch (90 min)",
    steps: [
      "Film Monday + Wednesday + Friday reels in one outfit, three backgrounds if you can be bothered, one if you cannot.",
      "Vertical, eye-level, window light. Text on the first frame from the script's on-screen lines.",
      "Caption all three. Queue Mon/Wed/Fri. Cross-post Facebook the same night.",
    ],
  },
  {
    title: "Friday lunch — LinkedIn + outreach (45 min)",
    steps: [
      "Rewrite one reel into a LinkedIn post.",
      "Send the three emails already drafted in Outreach.",
      "Move any reply to a calendar hold for October.",
    ],
  },
]
