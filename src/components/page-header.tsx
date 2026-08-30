export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string
  title: string
  lede?: string
}) {
  return (
    <header className="mb-8 max-w-3xl">
      {kicker ? (
        <p className="mb-2 text-[11px] tracking-[0.18em] text-teal uppercase">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-heading text-3xl leading-tight text-balance md:text-4xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
          {lede}
        </p>
      ) : null}
    </header>
  )
}
