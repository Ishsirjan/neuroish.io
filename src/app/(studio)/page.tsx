import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ShortcutCalendar } from "@/components/shortcut-calendar"
import { TodayPanel } from "@/components/today-panel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { monthTotals } from "@/data/frequency"
import { profile, shows } from "@/data/profile"
import { weeks } from "@/data/calendar"

export default function HomePage() {
  return (
    <div>
      <PageHeader
        kicker="September 2026 · month one"
        title="A content studio that fits a CNRS week."
        lede={`${profile.name} already hosts BioIsh and already posts as ${profile.instagram}. Tap a day to see what you shoot, what goes live, and the script that holds the room.`}
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <Button render={<Link href="/calendar" />}>Full September</Button>
        <Button variant="outline" render={<Link href="/scripts" />}>
          Scripts
        </Button>
        <Button variant="outline" render={<Link href="/outreach" />}>
          Outreach
        </Button>
      </div>

      <ShortcutCalendar />

      <div className="mt-10">
        <TodayPanel />
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {shows.map((show) => (
          <Card key={show.id}>
            <CardHeader>
              <p
                className={
                  show.color === "saffron"
                    ? "text-[11px] tracking-[0.16em] text-saffron uppercase"
                    : "text-[11px] tracking-[0.16em] text-teal uppercase"
                }
              >
                {show.kind}
              </p>
              <CardTitle className="font-heading text-2xl">{show.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{show.promise}</p>
              <p className="text-foreground">
                {show.length} · {show.cadence}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">The load, in numbers</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Fortnightly podcasts. Three neuroscience reels a week, copied to
          Facebook. Two LinkedIn posts. Three outreach notes. About seven hours,
          including Sunday recording.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {monthTotals.map((item) => (
            <Card key={item.label} size="sm">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <CardTitle className="font-heading text-xl">{item.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Four weeks</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {weeks.map((week) => (
            <Card key={week.week}>
              <CardHeader>
                <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  Week {week.week} · {week.range}
                </p>
                <CardTitle className="font-heading text-xl">{week.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {week.aim}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
