"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { calendar, planMonth } from "@/data/calendar"
import { scriptById } from "@/data/scripts"
import {
  actionMeta,
  dayActionItems,
  dayFlags,
  type ActionKind,
} from "@/lib/day-actions"
import { formatDate, formatLongDate, itemKindLabel, todayIso } from "@/lib/format"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function dayNumber(iso: string) {
  return iso.slice(8).replace(/^0/, "")
}

export function ShortcutCalendar({
  compact = false,
}: {
  compact?: boolean
}) {
  const today = todayIso()
  const firstWithWork =
    calendar.find((d) => d.date >= today) ?? calendar[0]
  const [selected, setSelected] = useState(firstWithWork.date)
  const [filter, setFilter] = useState<ActionKind | "all">("all")

  const selectedDay = calendar.find((d) => d.date === selected) ?? firstWithWork
  const actions = dayActionItems(selectedDay)

  const blanks = useMemo(
    () => (new Date(`${calendar[0].date}T00:00:00Z`).getUTCDay() + 6) % 7,
    []
  )

  return (
    <section>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.18em] text-teal uppercase">
            Shortcut calendar · {planMonth.label}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl">
            Shoot. Post. Open the script.
          </h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Tap a day. Saffron is film or record. Teal is go-live. Ink is the
            words you say.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["all", "shoot", "post", "script"] as const).map((key) => (
            <Button
              key={key}
              size="sm"
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
            >
              {key === "all" ? "All days" : actionMeta[key].label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        {(Object.keys(actionMeta) as ActionKind[]).map((key) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            <span className={cn("size-2 rounded-full", actionMeta[key].dot)} />
            <span className="text-muted-foreground">
              {actionMeta[key].label} · {actionMeta[key].hint}
            </span>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekdayLabels.map((d) => (
          <p
            key={d}
            className="px-0.5 text-center text-[10px] tracking-[0.12em] text-muted-foreground uppercase md:text-[11px]"
          >
            {d}
          </p>
        ))}
        {Array.from({ length: blanks }).map((_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {calendar.map((day) => {
          const flags = dayFlags(day)
          const hidden =
            filter !== "all" && !flags.includes(filter)
          const isSelected = day.date === selected
          const isToday = day.date === today
          return (
            <button
              key={day.date}
              type="button"
              onClick={() => setSelected(day.date)}
              className={cn(
                "min-h-16 rounded-lg border bg-card p-1.5 text-left transition-colors md:min-h-20 md:p-2",
                isSelected && "border-foreground ring-1 ring-foreground/20",
                isToday && !isSelected && "border-teal",
                hidden && "opacity-35"
              )}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-medium md:text-sm">
                  {dayNumber(day.date)}
                </span>
                {isToday ? (
                  <span className="hidden text-[9px] tracking-wide text-teal uppercase md:inline">
                    today
                  </span>
                ) : null}
              </div>
              <div className="mt-1 flex flex-wrap gap-0.5">
                {flags.map((flag) => (
                  <span
                    key={flag}
                    className={cn(
                      "rounded-full px-1 py-px text-[8px] leading-4 font-medium tracking-wide uppercase md:text-[9px]",
                      actionMeta[flag].className,
                      "border"
                    )}
                  >
                    {compact ? flag[0] : actionMeta[flag].label}
                  </span>
                ))}
              </div>
              {!compact ? (
                <p className="mt-1 hidden truncate text-[10px] text-muted-foreground md:block">
                  {day.theme}
                </p>
              ) : null}
            </button>
          )
        })}
      </div>

      <Card className="mt-5">
        <CardHeader className="border-b">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {formatLongDate(selectedDay.date)}
            </p>
            {dayFlags(selectedDay).map((flag) => (
              <Badge key={flag} className={cn("border", actionMeta[flag].className)}>
                {actionMeta[flag].label}
              </Badge>
            ))}
          </div>
          <CardTitle className="font-heading text-2xl">{selectedDay.theme}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5 pt-4 md:grid-cols-3">
          <ActionColumn
            kind="shoot"
            empty="No shoot. Protect the lab."
            items={actions.shoot.map((item) => ({
              id: item.id,
              title: item.title,
              meta: `${itemKindLabel[item.kind]} · ${item.minutes} min`,
              href: item.scriptId ? `/scripts/${item.scriptId}` : undefined,
            }))}
          />
          <ActionColumn
            kind="post"
            empty="Nothing goes live."
            items={actions.post.map((item) => ({
              id: item.id,
              title: item.title,
              meta: `${itemKindLabel[item.kind]} · ${item.minutes} min`,
              href: item.scriptId ? `/scripts/${item.scriptId}` : undefined,
            }))}
          />
          <ActionColumn
            kind="script"
            empty="No script tied to this day."
            items={actions.scripts.map((item) => {
              const script = item.scriptId ? scriptById(item.scriptId) : undefined
              return {
                id: item.id,
                title: script?.scrollStop ?? script?.title ?? item.title,
                meta: script ? script.title : formatDate(selectedDay.date),
                href: item.scriptId ? `/scripts/${item.scriptId}` : undefined,
              }
            })}
          />
        </CardContent>
      </Card>
    </section>
  )
}

function ActionColumn({
  kind,
  empty,
  items,
}: {
  kind: ActionKind
  empty: string
  items: { id: string; title: string; meta: string; href?: string }[]
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] tracking-[0.16em] uppercase">
        <span className={cn("mr-1.5 inline-block size-2 rounded-full", actionMeta[kind].dot)} />
        {actionMeta[kind].label}
      </p>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">{empty}</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <Link href={item.href} className="block">
                  <p className="text-sm font-medium leading-snug underline-offset-2 hover:underline">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </Link>
              ) : (
                <>
                  <p className="text-sm font-medium leading-snug">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
