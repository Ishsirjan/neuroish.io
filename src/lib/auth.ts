export const SESSION_KEY = "neuroish_studio"

export function studioPassword() {
  return (
    process.env.NEXT_PUBLIC_STUDIO_PASSWORD ||
    process.env.STUDIO_PASSWORD ||
    "ish-private"
  )
}
