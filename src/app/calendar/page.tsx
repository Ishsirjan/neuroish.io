import { PageHeader } from "@/components/page-header"
import { CalendarView } from "./calendar-view"
import { planMonth } from "@/data/calendar"

export default function CalendarPage() {
  return (
    <div>
      <PageHeader
        kicker={planMonth.label}
        title="Thirty days, already decided."
        lede={planMonth.thesis}
      />
      <CalendarView />
    </div>
  )
}
