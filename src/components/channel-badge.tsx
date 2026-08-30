import { Badge } from "@/components/ui/badge"
import type { ChannelId, ScriptKind } from "@/data/types"
import { channelLabel, kindLabel } from "@/lib/format"
import { cn } from "@/lib/utils"

const toneClass: Record<string, string> = {
  teal: "border-[color-mix(in_oklch,var(--teal),white_12%)] bg-teal-soft text-teal",
  saffron:
    "border-[color-mix(in_oklch,var(--saffron),white_10%)] bg-saffron-soft text-saffron",
  ink: "border-border bg-secondary text-foreground",
}

export function ChannelBadge({
  channel,
}: {
  channel: ChannelId | "multi" | "neuroish"
}) {
  const tone =
    channel === "chardi-kala"
      ? "saffron"
      : channel === "bioish" ||
          channel === "instagram" ||
          channel === "youtube" ||
          channel === "neuroish"
        ? "teal"
        : "ink"
  const label =
    channel === "multi"
      ? "Multi"
      : channel === "neuroish"
        ? "NeuroIsh"
        : channelLabel[channel]
  return <Badge className={cn("border", toneClass[tone])}>{label}</Badge>
}

export function KindBadge({ kind }: { kind: ScriptKind }) {
  const tone =
    kind === "sikhi" || kind === "podcast" ? "saffron" : kind === "linkedin" ? "ink" : "teal"
  return (
    <Badge variant="outline" className={cn("border", toneClass[tone])}>
      {kindLabel[kind]}
    </Badge>
  )
}
