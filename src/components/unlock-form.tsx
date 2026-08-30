"use client"

import { useState, type FormEvent } from "react"
import { openStudio, studioHomeHref, studioPassword } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export function UnlockForm({ stay }: { stay?: boolean }) {
  const [guess, setGuess] = useState("")
  const [error, setError] = useState(false)
  const [reveal, setReveal] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (guess.trim() !== studioPassword()) {
      setError(true)
      return
    }
    openStudio()
    if (!stay) {
      window.location.assign(studioHomeHref())
    }
  }

  return (
    <form className="space-y-3" onSubmit={submit}>
      <label className="block space-y-1.5">
        <span className="text-xs text-muted-foreground">Password</span>
        <input
          name="password"
          type={reveal ? "text" : "password"}
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value)
            setError(false)
          }}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          inputMode="text"
          enterKeyHint="go"
          placeholder="lowercase, with a hyphen"
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          required
        />
      </label>
      <button
        type="button"
        className="text-xs text-muted-foreground underline-offset-2 hover:underline"
        onClick={() => setReveal((value) => !value)}
      >
        {reveal ? "Hide password" : "Show what I typed"}
      </button>
      {error ? (
        <p className="text-sm text-destructive">
          That password is wrong. Type it in lowercase: ish, hyphen, private.
        </p>
      ) : null}
      <Button type="submit" className="w-full">
        Unlock
      </Button>
    </form>
  )
}
