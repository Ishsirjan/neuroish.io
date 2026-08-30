export type ChannelId =
  | "bioish"
  | "chardi-kala"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "youtube"
  | "outreach";

export type ScriptKind =
  | "podcast"
  | "explainer"
  | "paper"
  | "project"
  | "news"
  | "sikhi"
  | "linkedin";

export type ItemKind =
  | "record"
  | "publish"
  | "reel"
  | "post"
  | "stories"
  | "outreach"
  | "batch"
  | "admin";

export interface ScriptSection {
  heading: string
  duration?: string
  lines: string[]
}

export interface Script {
  id: string
  kind: ScriptKind
  channel: ChannelId | "multi"
  title: string
  subtitle: string
  duration: string
  whyYou: string
  hook: string
  scrollStop?: string
  onScreen?: string[]
  sections: ScriptSection[]
  /** Joined spoken lines. Prefer this when filming; do not invent a second script. */
  spoken?: string
  close: string
  caption: string
  commentAsk?: string
  hashtags: string[]
  sources?: { label: string; url?: string }[]
  clips?: { label: string; timestamp: string }[]
}

export interface CalendarItem {
  id: string
  channel: ChannelId
  kind: ItemKind
  title: string
  minutes: number
  scriptId?: string
  outreachIds?: string[]
  note?: string
}

export interface CalendarDay {
  date: string
  weekday: string
  week: number
  theme: string
  energy: "launch" | "make" | "publish" | "light" | "record"
  items: CalendarItem[]
}

export interface OutreachTarget {
  id: string
  name: string
  role: string
  why: string
  channel: "email" | "linkedin" | "instagram" | "form"
  week: 1 | 2 | 3 | 4
  date: string
  show: "bioish" | "chardi-kala" | "neuroish" | "platform"
  subject: string
  body: string
  followUp: string
}

export interface FrequencyRow {
  channel: ChannelId
  name: string
  cadence: string
  monthCount: string
  minutesPerWeek: string
  why: string
  doNot: string
}
