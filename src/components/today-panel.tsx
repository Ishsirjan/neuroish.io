"use client"

import Link from "next/link"
import { calendar, planMonth } from "@/data/calendar"
import { formatLongDate, todayIso } from "@/lib/format"
import { ChannelBadge } from "@/components/channel-badge"
import { DoneToggle } from "@/components/done-toggle"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TodayPanel() {
  const today = todayIso()
  const match = calendar.find((d) => d.date === today)
  const first = calendar[0]
  const last = calendar[calendar.length - 1]
  const before = today < planMonth.start
  const after = today > planMonth.end

  if (before) {
    return (
      <Card className="border-teal/30 bg-teal-soft">
        <CardHeader>
          <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
            Before the month
          </p>
          <CardTitle className="font-heading text-2xl">
            Launch is {formatLongDate(first.date)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Today is a read-through day. Open Frequency, mark the Sunday
            recording block in your real calendar, and send nothing until
            Tuesday unless a platform form is still empty.
          </p>
          <p className="text-muted-foreground">
            First tasks: LinkedIn launch, the two-show reel, Spotify RSS,
            Rahul, SikhRI.
          </p>
          <Link href="/calendar" className="inline-flex text-sm underline">
            Open 1 September
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (after) {
    return (
      <Card className="border-saffron/30 bg-saffron-soft">
        <CardHeader>
          <p className="text-[11px] tracking-[0.16em] text-saffron uppercase">
            After September
          </p>
          <CardTitle className="font-heading text-2xl">
            The month is inventory now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Last planned day was {formatLongDate(last.date)}. Use the
            checkboxes to see what slipped, then write October from the
            outreach slate — guests or solos, no holes.
          </p>
          <Link href="/outreach" className="inline-flex text-sm underline">
            Open outreach tracker
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (!match) {
    return null
  }

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
            Today
          </p>
          <Badge variant="outline">{match.energy}</Badge>
        </div>
        <CardTitle className="font-heading text-2xl">
          {formatLongDate(match.date)}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{match.theme}</p>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        {match.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 border-b pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <ChannelBadge channel={item.channel} />
                <span className="text-xs text-muted-foreground">
                  {item.minutes} min
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
            </div>
            <DoneToggle id={item.id} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
