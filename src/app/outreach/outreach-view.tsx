"use client"

import { useMemo, useState } from "react"
import { CopyButton } from "@/components/copy-button"
import { DoneToggle } from "@/components/done-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { outreachPlaybook, outreachTargets } from "@/data/outreach"
import { formatDate } from "@/lib/format"

const weeks = [0, 1, 2, 3, 4] as const

export function OutreachView() {
  const [week, setWeek] = useState<(typeof weeks)[number]>(0)
  const [openId, setOpenId] = useState<string | null>(outreachTargets[0]?.id ?? null)

  const visible = useMemo(
    () =>
      week === 0
        ? outreachTargets
        : outreachTargets.filter((t) => t.week === week),
    [week]
  )

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">How to ask</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>{outreachPlaybook.rule}</p>
          <p>{outreachPlaybook.voice}</p>
          <p>Follow up after {outreachPlaybook.followUpDays} days. Then stop.</p>
        </CardContent>
      </Card>

      <div className="mb-5 flex flex-wrap gap-2">
        {weeks.map((w) => (
          <Button
            key={w}
            size="sm"
            variant={week === w ? "default" : "outline"}
            onClick={() => setWeek(w)}
          >
            {w === 0 ? "All month" : `Week ${w}`}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((target) => {
          const open = openId === target.id
          const copyText = `Subject: ${target.subject}\n\n${target.body}`
          return (
            <Card key={target.id}>
              <CardHeader className="border-b">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">Week {target.week}</Badge>
                  <Badge variant="secondary">{formatDate(target.date)}</Badge>
                  <Badge variant="outline">{target.channel}</Badge>
                  <Badge variant="outline">{target.show}</Badge>
                </div>
                <CardTitle className="font-heading text-xl">
                  {target.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{target.role}</p>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p className="text-sm leading-relaxed">{target.why}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <DoneToggle id={target.id} kind="outreach" label="Sent" />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setOpenId(open ? null : target.id)}
                  >
                    {open ? "Hide draft" : "Show draft"}
                  </Button>
                  <CopyButton text={copyText} label="Copy email" />
                </div>
                {open ? (
                  <div className="space-y-3 rounded-xl bg-secondary/70 p-4">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Subject: </span>
                      {target.subject}
                    </p>
                    <pre className="font-sans text-sm leading-relaxed whitespace-pre-wrap">
                      {target.body}
                    </pre>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground">Follow-up: </span>
                      {target.followUp}
                    </p>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
