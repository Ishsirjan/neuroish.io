"use client"

import { useRouter } from "next/navigation"
import { SESSION_KEY } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export function LockButton() {
  const router = useRouter()
  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={() => {
        sessionStorage.removeItem(SESSION_KEY)
        window.dispatchEvent(new Event("neuroish-lock"))
        router.replace("/unlock")
      }}
    >
      Lock
    </Button>
  )
}
