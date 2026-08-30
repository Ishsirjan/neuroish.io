import type { MetadataRoute } from "next"
import { scripts } from "@/data/scripts"
import { siteUrl } from "@/lib/site"

export const dynamic = "force-static"

const pages = ["", "/you", "/frequency", "/calendar", "/scripts", "/outreach"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}/`.replace(/\/\/$/, "/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
    })),
    ...scripts.map((script) => ({
      url: `${siteUrl}/scripts/${script.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
    })),
  ]
}
