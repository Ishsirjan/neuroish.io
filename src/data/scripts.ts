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

export function scriptsByKind(kind: ScriptKind | "all") {
  if (kind === "all") return scripts
  return scripts.filter((s) => s.kind === kind)
}
