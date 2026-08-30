"use client"

import { useEffect, useSyncExternalStore } from "react"
import { usePathname, useRouter } from "next/navigation"
import { SESSION_KEY } from "@/lib/auth"

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener("neuroish-lock", onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener("neuroish-lock", onStoreChange)
  }
}

function snapshot() {
  return window.sessionStorage.getItem(SESSION_KEY) === "1"
}

function serverSnapshot() {
  return false
}

export function StudioGate({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const open = useSyncExternalStore(subscribe, snapshot, serverSnapshot)

  useEffect(() => {
    if (!open && pathname !== "/unlock") {
      router.replace("/unlock")
    }
  }, [open, pathname, router])

  if (!open) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted-foreground">
        Checking lock…
      </div>
    )
  }

  return <>{children}</>
}
