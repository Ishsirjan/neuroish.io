"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ChannelBadge } from "@/components/channel-badge"
import { DoneToggle } from "@/components/done-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { calendar, weeks } from "@/data/calendar"
import { formatDate, itemKindLabel, todayIso } from "@/lib/format"
import { cn } from "@/lib/utils"

const filters = [
  { id: 0, label: "All weeks" },
  ...weeks.map((w) => ({ id: w.week, label: `Week ${w.week}` })),
]

export function CalendarView() {
  const [week, setWeek] = useState(0)
  const today = todayIso()
  const days = useMemo(
    () => (week === 0 ? calendar : calendar.filter((d) => d.week === week)),
    [week]
  )

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f.id}
            size="sm"
            variant={week === f.id ? "default" : "outline"}
            onClick={() => setWeek(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className="mb-8 hidden grid-cols-7 gap-1 md:grid">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <p
            key={d}
            className="px-1 text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
          >
            {d}
          </p>
        ))}
        {Array.from({
          length:
            (new Date(`${calendar[0].date}T00:00:00Z`).getUTCDay() + 6) % 7,
        }).map((_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {calendar.map((day) => (
          <a
            key={day.date}
            href={`#day-${day.date}`}
            className={cn(
              "rounded-lg border bg-card p-2 text-left text-xs leading-snug transition-colors hover:border-foreground/30",
              today === day.date && "border-teal bg-teal-soft",
              week !== 0 && day.week !== week && "opacity-40"
            )}
          >
            <p className="font-medium">{formatDate(day.date)}</p>
            <p className="mt-1 text-muted-foreground">{day.theme}</p>
          </a>
        ))}
      </div>

      <div className="space-y-4">
        {days.map((day) => (
          <Card
            key={day.date}
            id={`day-${day.date}`}
            className={cn(today === day.date && "border-teal")}
          >
            <CardHeader className="border-b">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {day.weekday} · {formatDate(day.date)}
                </p>
                <Badge variant="outline">{day.energy}</Badge>
                {today === day.date ? <Badge>Today</Badge> : null}
              </div>
              <CardTitle className="font-heading text-2xl">{day.theme}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {day.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 border-b pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <ChannelBadge channel={item.channel} />
                      <span className="text-xs text-muted-foreground">
                        {itemKindLabel[item.kind]} · {item.minutes} min
                      </span>
                    </div>
                    <p className="font-medium">{item.title}</p>
                    {item.note ? (
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    ) : null}
                    {item.scriptId ? (
                      <Link
                        href={`/scripts/${item.scriptId}`}
                        className="text-sm underline"
                      >
                        Open script
                      </Link>
                    ) : null}
                    {item.outreachIds?.length ? (
                      <Link href="/outreach" className="ml-3 text-sm underline">
                        Outreach notes
                      </Link>
                    ) : null}
                  </div>
                  <DoneToggle id={item.id} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
