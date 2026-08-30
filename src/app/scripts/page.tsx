import { PageHeader } from "@/components/page-header"
import { ScriptsList } from "./scripts-list"

export default function ScriptsPage() {
  return (
    <div>
      <PageHeader
        kicker="Speak these"
        title="Scripts for a scientist who already knows how to hold a room."
        lede="Explainers, recent papers, your neurotech and bioinformatics projects, science news, four full podcasts, and the LinkedIn rewrites. Say them standing. Do not polish the stumbles out of existence."
      />
      <ScriptsList />
    </div>
  )
}
