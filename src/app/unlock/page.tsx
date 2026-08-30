import { UnlockForm } from "@/components/unlock-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UnlockPage() {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <p className="text-[11px] tracking-[0.18em] text-teal uppercase">
            NeuroIsh.io
          </p>
          <CardTitle className="font-heading text-3xl">
            This studio is locked.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            neuroish.io — a separate site from the portfolio. Only this door
            is public. Calendar and scripts stay behind the password.
          </p>
          <UnlockForm stay />
        </CardContent>
      </Card>
    </div>
  )
}
