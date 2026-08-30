export const SESSION_KEY = "neuroish_studio"

let memoryOpen = false

export function studioPassword() {
  return (
    process.env.NEXT_PUBLIC_STUDIO_PASSWORD ||
    process.env.STUDIO_PASSWORD ||
    "ish-private"
  )
}

export function isStudioOpen() {
  try {
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return true
  } catch {
    // Private mode can block sessionStorage.
  }
  return memoryOpen
}

export function openStudio() {
  memoryOpen = true
  try {
    window.sessionStorage.setItem(SESSION_KEY, "1")
  } catch {
    // Stay unlocked in this tab even if storage is blocked.
  }
  window.dispatchEvent(new Event("neuroish-lock"))
}

export function closeStudio() {
  memoryOpen = false
  try {
    window.sessionStorage.removeItem(SESSION_KEY)
  } catch {
    // Ignore.
  }
  window.dispatchEvent(new Event("neuroish-lock"))
}

export function studioHomeHref() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${base}/`
}
