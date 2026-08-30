"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { useStatus } from "@/components/status-provider"
import { cn } from "@/lib/utils"

export function DoneToggle({
  id,
  kind = "item",
  label,
  className,
}: {
  id: string
  kind?: "item" | "outreach"
  label?: string
  className?: string
}) {
  const { doneItems, doneOutreach, toggleItem, toggleOutreach } = useStatus()
  const checked = kind === "item" ? doneItems.has(id) : doneOutreach.has(id)

  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2 text-sm text-muted-foreground",
        checked && "text-foreground",
        className
      )}
    >
      <Checkbox
        checked={checked}
        onCheckedChange={() =>
          kind === "item" ? toggleItem(id) : toggleOutreach(id)
        }
      />
      <span>{label ?? (checked ? "Done" : "Mark done")}</span>
    </label>
  )
}
