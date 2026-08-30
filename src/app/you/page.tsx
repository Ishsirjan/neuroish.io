import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"

export default function YouPage() {
  return (
    <div>
      <PageHeader
        kicker="Read about you"
        title="The plan is built from your actual life, not a creator template."
        lede="Pulled from ishsirjan.github.io, LinkedIn, Google Scholar, GitHub, the medRxiv radiomics paper, and the public face of the Kremer lab. If a line is wrong, the studio is still useful — the frequency is the spine."
      />

      <Card className="mb-6">
        <CardHeader>
          <p className="text-[11px] tracking-[0.16em] text-teal uppercase">
            {profile.location}
          </p>
          <CardTitle className="font-heading text-3xl">{profile.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p className="text-base">{profile.oneLiner}</p>
          <p className="text-muted-foreground">{profile.tagline}</p>
          <p className="text-muted-foreground">
            Languages: {profile.languages.join(" · ")}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a className="underline" href={profile.site}>
              Portfolio
            </a>
            <a className="underline" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="underline" href={profile.github}>
              GitHub
            </a>
            <a className="underline" href={profile.scholar}>
              Scholar
            </a>
            <span>{profile.instagram}</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {profile.facts.map((fact) => (
          <Card key={fact.label}>
            <CardHeader>
              <CardTitle>{fact.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {fact.value}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl">BioIsh</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-muted-foreground">
            {profile.positioning.bioish}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl">Chardi Kala</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-muted-foreground">
            {profile.positioning.chardiKala}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl">NeuroIsh</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-muted-foreground">
            {profile.positioning.social}
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Voice rules for every script</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {profile.voiceRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl">Constraints I planned around</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {profile.constraints.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
