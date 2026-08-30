import type { Script, ScriptKind } from "./types"
import { podcastScripts } from "./scripts-podcasts"
import { reelScripts } from "./scripts-reels"
import { linkedinScripts } from "./scripts-linkedin"

export const scripts: Script[] = [
  ...podcastScripts,
  ...reelScripts,
  ...linkedinScripts,
]

export const kindOrder: ScriptKind[] = [
  "podcast",
  "explainer",
  "paper",
  "project",
  "news",
  "sikhi",
  "linkedin",
]

export function scriptById(id: string) {
  return scripts.find((s) => s.id === id)
}

/** What you say to camera. One story. No title, no director notes, no caption. */
export function spokenFromScript(script: { spoken?: string; sections: { lines: string[] }[] }) {
  if (script.spoken?.trim()) return script.spoken.trim()
  return script.sections.flatMap((section) => section.lines).join("\n\n")
}

export function scriptsByKind(kind: ScriptKind | "all") {
  if (kind === "all") return scripts
  return scripts.filter((s) => s.kind === kind)
}
