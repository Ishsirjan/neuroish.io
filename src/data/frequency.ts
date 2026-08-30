import type { FrequencyRow } from "./types"

export const weeklyBudget = {
  totalHours: "6.5–7.5",
  sunday: "3 hours — one neuroscience record, or the monthly Sikhi record",
  weeknights: "2 × 80 minutes — two paper reels, one project reel, captions",
  hidden: "Stories while coffee brews. Neuroscience grid only. Sikhi never lands here.",
}

export const frequencyRows: FrequencyRow[] = [
  {
    channel: "bioish",
    name: "BioIsh (neuroscience podcast)",
    cadence: "3 episodes / month · three different rooms",
    monthCount: "3 long episodes + clips from each",
    minutesPerWeek: "100 (averaged)",
    why: "Every month has the same three jobs: (1) explain one topic like a sharp friend at dinner, (2) read one paper slowly, (3) talk with one expert. That is a curriculum, not a dump. Tuesday publishes. Sunday records.",
    doNot:
      "Do not turn the expert slot into a second paper episode because a guest is late. Move the date. Do not put Sikhi in the show notes, the title, or the YouTube playlist.",
  },
  {
    channel: "chardi-kala",
    name: "Chardi Kala (Sikhi podcast)",
    cadence: "1 episode / 1–2 months",
    monthCount: "1 long episode this month, next hold Oct or Nov",
    minutesPerWeek: "20 (averaged)",
    why: "Sikhi needs more stillness than a weekly science show. One careful episode every four to eight weeks is a practice, not a content machine. Its own feed. Its own art. Its own Sunday.",
    doNot:
      "Do not clip it onto the neuroscience grid. Do not announce it in a BioIsh episode. Do not ‘also’ it on a paper reel. Separate means separate.",
  },
  {
    channel: "instagram",
    name: "Instagram @neuroish.fr",
    cadence: "2 paper reels + 1 project reel / week",
    monthCount: "8 paper reels · 4 project reels",
    minutesPerWeek: "85 including captions",
    why: "The grid is latest papers, short and attractive, plus one project from your actual work. Monday paper, Wednesday paper, Friday project. Stories stay human and scientific. No Sikhi, no ‘two shows’ branding.",
    doNot:
      "Do not post a Sikhi line ‘for balance’. Do not recycle a BioIsh cold open as a reel unless you rewrite it for sixty seconds. Do not chase daily posting.",
  },
  {
    channel: "facebook",
    name: "Facebook Page (NeuroIsh)",
    cadence: "Cross-post the same 3 neuroscience reels",
    monthCount: "12 posts, zero extra shoots",
    minutesPerWeek: "10",
    why: "Parents and older science readers still live here. Native upload. Same paper or project, warmer first line. Still no Sikhi on this page.",
    doNot: "Do not invent a Facebook-only series. Do not cross-post Chardi Kala here.",
  },
  {
    channel: "linkedin",
    name: "LinkedIn",
    cadence: "2 posts / week · neuroscience only",
    monthCount: "8 posts",
    minutesPerWeek: "40",
    why: "Twenty thousand followers. Rewrite the paper or the project into 180 words. BioIsh drops can live here. Chardi Kala cannot — that conversation has another room.",
    doNot: "Do not paste Instagram captions. Do not announce both shows in one post.",
  },
  {
    channel: "youtube",
    name: "YouTube (long + Shorts)",
    cadence: "Each BioIsh on publish day · Shorts from the 3 reels",
    monthCount: "3 neuroscience longs · 1 Sikhi long on its own channel or playlist · 12 Shorts",
    minutesPerWeek: "20 (upload only)",
    why: "Two YouTube identities if the product allows it; at minimum two playlists that never mix. Shorts are the paper and project reels, uploaded native.",
    doNot: "Do not put a Chardi Kala episode in the BioIsh playlist. Do not edit a separate YouTube cut.",
  },
  {
    channel: "outreach",
    name: "Outreach (experts, platforms, Sikhi — separate lists)",
    cadence: "3 neuroscience notes / week · Sikhi notes on a different day",
    monthCount: "12 science first-touches · a small Sikhi list of its own",
    minutesPerWeek: "45",
    why: "The expert episode is booked in week one for a late-month taping. Platforms get two RSS feeds, not one. Sikhi emails go out on Saturday so they never ride with a paper pitch.",
    doNot: "Do not CC a science guest on a Sikhi ask. Do not wait for a guest to ship the layman or the paper episode.",
  },
]

export const monthTotals = [
  { label: "BioIsh episodes", value: "3" },
  { label: "Chardi Kala episodes", value: "1" },
  { label: "Paper reels", value: "8" },
  { label: "Project reels", value: "4" },
  { label: "LinkedIn (science only)", value: "8" },
  { label: "YouTube science longs", value: "3" },
  { label: "Hours on content", value: "~28" },
  { label: "Hours on lab", value: "the rest of your life" },
]

export const batchRecipe = [
  {
    title: "Sunday — one record (3 hrs)",
    steps: [
      "Neuroscience Sundays: layman, paper, or expert. One episode. Stand. 25–35 minutes.",
      "Sikhi Sunday (once this month): different table, different pace, no science bumper.",
      "Mark clip timestamps. Hard cuts only. Schedule the matching Tuesday — except Sikhi, which publishes on its own day.",
      "Stop. Eat. Do not ‘just film a reel’ after a record.",
    ],
  },
  {
    title: "Wednesday night — paper batch (80 min)",
    steps: [
      "Film this week’s two paper reels in one outfit. Latest papers only. First line is the scroll-stop.",
      "On-screen: one claim, one number, one limit. Attractive, not cute.",
      "Caption both. Queue Monday and Wednesday. Facebook the same night.",
    ],
  },
  {
    title: "Friday — project + LinkedIn (70 min)",
    steps: [
      "Film the project reel from work you can defend in public.",
      "Rewrite one paper or the project into LinkedIn. No Sikhi paragraph at the end.",
      "Send the three neuroscience notes already drafted. Sikhi notes wait for Saturday.",
    ],
  },
]
