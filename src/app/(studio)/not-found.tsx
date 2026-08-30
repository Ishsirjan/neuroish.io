import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="max-w-xl">
      <p className="text-[11px] tracking-[0.18em] text-teal uppercase">404</p>
      <h1 className="font-heading mt-2 text-4xl">This page is not on the calendar.</h1>
      <p className="mt-3 text-muted-foreground">
        The studio is still here. Go back to the desk.
      </p>
      <Button className="mt-6" render={<Link href="/" />}>
        Studio home
      </Button>
    </div>
  )
}
