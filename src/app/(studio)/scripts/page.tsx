import { PageHeader } from "@/components/page-header"
import { ScriptsList } from "./scripts-list"

export default function ScriptsPage() {
  return (
    <div>
      <PageHeader
        kicker="Speak these"
        title="Scripts for a scientist who already knows how to hold a room."
        lede="Every piece now starts with a scroll-stop line — the first second, the first caption line, the thing you say before your name. Then the science. Say them standing."
      />
      <ScriptsList />
    </div>
  )
}
