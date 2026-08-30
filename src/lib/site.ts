export const defaultSiteUrl = "https://ishsirjan.github.io/neuroish-studio"

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl
).replace(/\/$/, "")

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
