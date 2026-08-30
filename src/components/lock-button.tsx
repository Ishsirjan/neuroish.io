"use client"

import { lockStudio } from "@/app/unlock/actions"
import { Button } from "@/components/ui/button"

export function LockButton() {
  return (
    <form action={lockStudio}>
      <Button type="submit" size="sm" variant="outline">
        Lock
      </Button>
    </form>
  )
}
