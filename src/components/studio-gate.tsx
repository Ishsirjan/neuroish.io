"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { UnlockForm } from "@/components/unlock-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { isStudioOpen } from "@/lib/auth"

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener("neuroish-lock", onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener("neuroish-lock", onStoreChange)
  }
}

function snapshot() {
  return isStudioOpen()
}

function serverSnapshot() {
  return false
}

export function StudioGate({ children }: { children: React.ReactNode }) {
  const open = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted-foreground">
        Checking lock…
      </div>
    )
  }

  if (!open) {
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
              neuroish.io — a separate site from the portfolio. Type the
              studio password, then unlock. Autofill from GitHub can get this
              wrong on a phone — show what you typed if it fails.
            </p>
            <UnlockForm stay />
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
