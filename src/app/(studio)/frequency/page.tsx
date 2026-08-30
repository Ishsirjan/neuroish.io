import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { batchRecipe, frequencyRows, monthTotals, weeklyBudget } from "@/data/frequency"
import { channelLabel } from "@/lib/format"

export default function FrequencyPage() {
  return (
    <div>
      <PageHeader
        kicker="How often"
        title="Enough to grow. Not enough to leave the lab."
        lede={`A full-time CNRS engineer gets ${weeklyBudget.totalHours} hours. The cadence below is the highest frequency I would defend in month twelve, not just month one. Daily posting is how this dies in week three.`}
      />

      <div className="mb-8 grid gap-3 md:grid-cols-3">
        <Card>
          <CardHeader>
            <p className="text-xs text-muted-foreground">Sunday</p>
            <CardTitle className="text-base">{weeklyBudget.sunday}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p className="text-xs text-muted-foreground">Weeknights</p>
            <CardTitle className="text-base">{weeklyBudget.weeknights}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p className="text-xs text-muted-foreground">Hidden</p>
            <CardTitle className="text-base">{weeklyBudget.hidden}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        {frequencyRows.map((row) => (
          <Card key={row.channel}>
            <CardHeader className="border-b">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
                    {channelLabel[row.channel]}
                  </p>
                  <CardTitle className="font-heading text-2xl">
                    {row.cadence}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  {row.monthCount} · {row.minutesPerWeek}/week
                </p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 pt-4 md:grid-cols-2">
              <p className="text-sm leading-relaxed">{row.why}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Do not: </span>
                {row.doNot}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Batch so the week stays boring</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {batchRecipe.map((block) => (
            <Card key={block.title}>
              <CardHeader>
                <CardTitle className="text-base">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {block.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">September totals</h2>
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
    </div>
  )
}
