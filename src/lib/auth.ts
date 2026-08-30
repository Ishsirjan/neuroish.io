export const SESSION_COOKIE = "neuroish_studio"

export function studioPassword() {
  return process.env.STUDIO_PASSWORD || "ish-private"
}
