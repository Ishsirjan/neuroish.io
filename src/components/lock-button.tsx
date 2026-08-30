"use client"

import { closeStudio } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export function LockButton() {
  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={() => {
        closeStudio()
      }}
    >
      Lock
    </Button>
  )
}
