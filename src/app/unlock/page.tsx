import { unlockStudio } from "./actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <p className="text-[11px] tracking-[0.18em] text-teal uppercase">
            Private
          </p>
          <CardTitle className="font-heading text-3xl">
            This studio is locked.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Scripts, outreach, and the calendar stay off the public web. Enter
            the studio password.
          </p>
          <form action={unlockStudio} className="space-y-3">
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              required
            />
            {error ? (
              <p className="text-sm text-destructive">That password is wrong.</p>
            ) : null}
            <Button type="submit" className="w-full">
              Unlock
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
