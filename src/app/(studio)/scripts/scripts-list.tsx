"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ChannelBadge, KindBadge } from "@/components/channel-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { scripts } from "@/data/scripts"
import type { ScriptKind } from "@/data/types"

const filters: { id: "all" | ScriptKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "podcast", label: "Podcasts" },
  { id: "explainer", label: "Explainers" },
  { id: "paper", label: "Papers" },
  { id: "project", label: "Projects" },
  { id: "news", label: "News" },
  { id: "linkedin", label: "LinkedIn" },
]

export function ScriptsList() {
  const [kind, setKind] = useState<(typeof filters)[number]["id"]>("all")
  const [q, setQ] = useState("")

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase()
    return scripts.filter((script) => {
      if (kind !== "all" && script.kind !== kind) return false
      if (!query) return true
      return (
        script.title.toLowerCase().includes(query) ||
        script.subtitle.toLowerCase().includes(query) ||
        script.hook.toLowerCase().includes(query)
      )
    })
  }, [kind, q])

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f.id}
              size="sm"
              variant={kind === f.id ? "default" : "outline"}
              onClick={() => setKind(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search scripts"
          className="md:max-w-xs"
        />
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        {visible.length} scripts · written in your voice, from your papers and
        job
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((script) => (
          <Link key={script.id} href={`/scripts/${script.id}`} className="block">
            <Card className="h-full transition-colors hover:border-foreground/25">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <KindBadge kind={script.kind} />
                  <ChannelBadge channel={script.channel} />
                </div>
                <CardTitle className="font-heading text-xl leading-snug">
                  {script.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p className="text-foreground">
                  {script.scrollStop ?? script.hook}
                </p>
                <p>{script.subtitle}</p>
                <p>{script.duration}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
