import type { CalendarDay, CalendarItem } from "@/data/types"

export type ActionKind = "shoot" | "post" | "script"

export const actionMeta: Record<
  ActionKind,
  { label: string; hint: string; className: string; dot: string }
> = {
  shoot: {
    label: "Shoot",
    hint: "Record or film",
    className: "bg-saffron-soft text-saffron border-saffron/30",
    dot: "bg-saffron",
  },
  post: {
    label: "Post",
    hint: "Goes live",
    className: "bg-teal-soft text-teal border-teal/30",
    dot: "bg-teal",
  },
  script: {
    label: "Script",
    hint: "Words ready",
    className: "bg-secondary text-foreground border-border",
    dot: "bg-foreground/70",
  },
}

export function isShoot(item: CalendarItem) {
  return item.kind === "record" || item.kind === "batch"
}

export function isPost(item: CalendarItem) {
  return item.kind === "publish" || item.kind === "reel" || item.kind === "post"
}

export function dayFlags(day: CalendarDay): ActionKind[] {
  const flags: ActionKind[] = []
  if (day.items.some(isShoot)) flags.push("shoot")
  if (day.items.some(isPost)) flags.push("post")
  if (day.items.some((item) => Boolean(item.scriptId))) flags.push("script")
  return flags
}

export function dayActionItems(day: CalendarDay) {
  return {
    shoot: day.items.filter(isShoot),
    post: day.items.filter(isPost),
    scripts: day.items.filter((item) => Boolean(item.scriptId)),
  }
}
