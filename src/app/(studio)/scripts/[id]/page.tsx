import Link from "next/link"
import { notFound } from "next/navigation"
import { ChannelBadge, KindBadge } from "@/components/channel-badge"
import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { scripts, scriptById } from "@/data/scripts"

function spokenText(id: string) {
  const script = scriptById(id)
  if (!script) return ""
  const parts = [
    script.title,
    script.hook,
    ...script.sections.flatMap((section) => [
      section.heading,
      ...section.lines,
    ]),
    script.close,
    script.caption,
  ]
  return parts.filter(Boolean).join("\n\n")
}

export async function generateStaticParams() {
  return scripts.map((script) => ({ id: script.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const script = scriptById(id)
  return { title: script ? `${script.title} · NeuroIsh.fr` : "Script" }
}

export default async function ScriptPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const script = scriptById(id)
  if (!script) notFound()

  return (
    <article className="max-w-3xl">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm" render={<Link href="/scripts" />}>
          All scripts
        </Button>
        <KindBadge kind={script.kind} />
        <ChannelBadge channel={script.channel} />
        <span className="text-xs text-muted-foreground">{script.duration}</span>
      </div>

      <h1 className="font-heading text-3xl leading-tight text-balance md:text-4xl">
        {script.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {script.subtitle}
      </p>

      <div className="mt-5">
        <CopyButton text={spokenText(script.id)} label="Copy full script" />
      </div>

      <Card className="mt-8 border-teal/25 bg-teal-soft">
        <CardHeader>
          <CardTitle>Why you</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-relaxed">{script.whyYou}</CardContent>
      </Card>

      {script.scrollStop ? (
        <Card className="mt-8 border-saffron/30 bg-saffron-soft">
          <CardHeader>
            <p className="text-[11px] tracking-[0.16em] text-saffron uppercase">
              Stop the scroll
            </p>
            <CardTitle className="font-heading text-2xl leading-snug">
              {script.scrollStop}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            First line on screen. First line of the caption. Say it before your name.
          </CardContent>
        </Card>
      ) : null}

      <section className="mt-8">
        <h2 className="font-heading text-2xl">Hook</h2>
        <p className="mt-2 text-lg leading-relaxed">{script.hook}</p>
      </section>

      {script.onScreen?.length ? (
        <section className="mt-8">
          <h2 className="font-heading text-2xl">On-screen text</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {script.onScreen.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 space-y-6">
        {script.sections.map((section) => (
          <section key={section.heading}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-heading text-2xl">{section.heading}</h2>
              {section.duration ? (
                <p className="text-xs text-muted-foreground">{section.duration}</p>
              ) : null}
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed">
              {section.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="font-heading text-2xl">Close</h2>
        <p className="mt-2 text-sm leading-relaxed">{script.close}</p>
      </section>

      {script.caption ? (
        <Card className="mt-8">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Caption</CardTitle>
            <CopyButton text={script.caption} label="Copy caption" />
          </CardHeader>
          <CardContent className="text-sm leading-relaxed whitespace-pre-wrap">
            {script.caption}
          </CardContent>
        </Card>
      ) : null}

      {script.hashtags.length ? (
        <p className="mt-4 text-sm text-muted-foreground">
          {script.hashtags.join(" ")}
        </p>
      ) : null}

      {script.clips?.length ? (
        <section className="mt-8">
          <h2 className="font-heading text-2xl">Clip these</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {script.clips.map((clip) => (
              <li key={clip.label}>
                <span className="text-muted-foreground">{clip.timestamp}</span>
                {" — "}
                {clip.label}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {script.sources?.length ? (
        <section className="mt-8">
          <h2 className="font-heading text-2xl">Sources</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {script.sources.map((source) => (
              <li key={source.label}>
                {source.url ? (
                  <a href={source.url} className="underline">
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
