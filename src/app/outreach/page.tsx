import { PageHeader } from "@/components/page-header"
import { OutreachView } from "./outreach-view"

export default function OutreachPage() {
  return (
    <div>
      <PageHeader
        kicker="Ask for the next room"
        title="Twelve first touches. The month books October."
        lede="Platforms, mentors, Sikhi institutions, science editors, local Montpellier, your own WICCI room, and a written yes from the PI about what you will not say. September episodes stay solo on purpose."
      />
      <OutreachView />
    </div>
  )
}
