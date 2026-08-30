import { PageHeader } from "@/components/page-header"
import { ShortcutCalendar } from "@/components/shortcut-calendar"
import { CalendarView } from "./calendar-view"
import { planMonth } from "@/data/calendar"

export default function CalendarPage() {
  return (
    <div>
      <PageHeader
        kicker={planMonth.label}
        title="Thirty days, already decided."
        lede={`${planMonth.thesis} The grid is the shortcut: shoot, post, script. The list under it is the full day.`}
      />
      <div className="mb-12">
        <ShortcutCalendar />
      </div>
      <h2 className="font-heading mb-4 text-2xl">Day-by-day desk</h2>
      <CalendarView />
    </div>
  )
}
