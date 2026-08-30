"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SESSION_KEY, studioPassword } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function UnlockForm() {
  const router = useRouter()
  const [error, setError] = useState(false)

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault()
        const guess = String(new FormData(event.currentTarget).get("password") ?? "")
        if (guess !== studioPassword()) {
          setError(true)
          return
        }
        sessionStorage.setItem(SESSION_KEY, "1")
        window.dispatchEvent(new Event("neuroish-lock"))
        router.replace("/")
        router.refresh()
      }}
    >
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
  )
}
