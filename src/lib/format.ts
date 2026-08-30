import type { ChannelId, ItemKind, ScriptKind } from "@/data/types"

export const channelLabel: Record<ChannelId, string> = {
  bioish: "BioIsh",
  "chardi-kala": "Chardi Kala",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  outreach: "Outreach",
}

export const kindLabel: Record<ScriptKind, string> = {
  podcast: "Podcast",
  explainer: "Science explainer",
  paper: "Paper in short",
  project: "Project",
  news: "Science news",
  sikhi: "Sikhi",
  linkedin: "LinkedIn",
}

export const itemKindLabel: Record<ItemKind, string> = {
  record: "Record",
  publish: "Publish",
  reel: "Reel",
  post: "Post",
  stories: "Stories",
  outreach: "Outreach",
  batch: "Batch",
  admin: "Prep",
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  })
}

export function formatLongDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}

export function todayIso() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function channelTone(channel: ChannelId | "multi" | "neuroish") {
  if (channel === "bioish" || channel === "instagram" || channel === "youtube") {
    return "teal"
  }
  if (channel === "chardi-kala") return "saffron"
  if (channel === "outreach") return "ink"
  return "ink"
}
