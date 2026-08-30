import { AppShell } from "@/components/app-shell"
import { StudioGate } from "@/components/studio-gate"

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StudioGate>
      <AppShell>{children}</AppShell>
    </StudioGate>
  )
}
