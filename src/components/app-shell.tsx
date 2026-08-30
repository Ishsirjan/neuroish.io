"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LockButton } from "@/components/lock-button"
import { StatusProvider, useStatus } from "@/components/status-provider"
import { allItems } from "@/data/calendar"
import { outreachTargets } from "@/data/outreach"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Studio" },
  { href: "/you", label: "You" },
  { href: "/frequency", label: "Frequency" },
  { href: "/calendar", label: "September" },
  { href: "/scripts", label: "Scripts" },
  { href: "/outreach", label: "Outreach" },
]

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

function ProgressHint() {
  const { doneItems, doneOutreach } = useStatus()
  const itemTotal = allItems().length
  const outTotal = outreachTargets.length
  return (
    <p className="text-xs text-muted-foreground">
      {doneItems.size}/{itemTotal} tasks · {doneOutreach.size}/{outTotal} notes
    </p>
  )
}

function ShellInner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="min-w-0">
            <p className="font-heading text-lg leading-none tracking-tight">
              NeuroIsh Studio
            </p>
            <p className="mt-1 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Ishsirjan · Sep 2026
            </p>
          </Link>
          <div className="hidden md:flex md:flex-col md:items-end md:gap-1">
            <div className="flex items-center gap-2">
              <NavLinks />
              <LockButton />
            </div>
            <ProgressHint />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Studio</SheetTitle>
                </SheetHeader>
                <div className="px-2">
                  <NavLinks />
                  <div className="mt-4 flex items-center justify-between px-3">
                    <ProgressHint />
                    <LockButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:py-10">
        {children}
      </main>
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>Private studio. Not for GitHub Pages. Not for search engines.</p>
          <p>Checkboxes stay on this browser only.</p>
        </div>
      </footer>
    </div>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <StatusProvider>
      <ShellInner>{children}</ShellInner>
    </StatusProvider>
  )
}
