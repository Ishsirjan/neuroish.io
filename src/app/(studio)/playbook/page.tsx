import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  frequencyWhy,
  papersThisMonth,
  peers,
  playbook,
  positioningGap,
  scriptCraft,
  weekOps,
} from "@/data/playbook"

export default function PlaybookPage() {
  return (
    <div>
      <PageHeader
        kicker={playbook.kicker}
        title={playbook.title}
        lede={playbook.lede}
      />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">
            {positioningGap.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {positioningGap.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CardContent>
      </Card>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Who you are next to</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Study these people. Do not become them. Your lane is methods, from
          inside a CNRS imaging lab, in 45 seconds and in 30 minutes.
        </p>
        <div className="mt-5 space-y-4">
          {peers.map((peer) => (
            <Card key={peer.name}>
              <CardHeader>
                <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
                  {peer.where}
                </p>
                <CardTitle className="font-heading text-xl">{peer.name}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm leading-relaxed md:grid-cols-3">
                <p className="text-muted-foreground">{peer.what}</p>
                <p>
                  <span className="text-foreground">Steal: </span>
                  {peer.steal}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Avoid: </span>
                  {peer.avoid}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Frequency I will defend</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          This is not a vibe. It is what 2025–26 Reels and LinkedIn reports
          actually reward, cut to a full-time engineer.
        </p>
        <div className="mt-5 space-y-4">
          {frequencyWhy.map((row) => (
            <Card key={row.channel}>
              <CardHeader>
                <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {row.channel}
                </p>
                <CardTitle className="font-heading text-xl">{row.doThis}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>{row.evidence}</p>
                <p className="text-muted-foreground">{row.yourJob}</p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Kill: </span>
                  {row.kill}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">{scriptCraft.title}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {scriptCraft.problems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                Vague — do not say this
              </p>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {scriptCraft.exampleBad}
            </CardContent>
          </Card>
          <Card className="border-teal/30">
            <CardHeader>
              <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
                Engaging — say this
              </p>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">
              {scriptCraft.exampleGood}
            </CardContent>
          </Card>
        </div>
        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {scriptCraft.formula.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Papers that earn a Reel this month</h2>
        <div className="mt-5 space-y-3">
          {papersThisMonth.map((row) => (
            <Card key={row.word} size="sm">
              <CardHeader>
                <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
                  Write {row.word}
                </p>
                <CardTitle className="text-base">{row.paper}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {row.hold}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">{weekOps.title}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {weekOps.blocks.map((block) => (
            <Card key={block.when} size="sm">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{block.when}</p>
                <CardTitle className="text-base">{block.do}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
