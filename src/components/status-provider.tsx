"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react"

const STORAGE_KEY = "neuroish-studio-v1"

type StatusState = {
  items: string[]
  outreach: string[]
}

const empty: StatusState = { items: [], outreach: [] }

let cached: StatusState = empty
let hydrated = false
const listeners = new Set<() => void>()

function parse(raw: string | null): StatusState {
  if (!raw) return empty
  try {
    const parsed = JSON.parse(raw) as StatusState
    return {
      items: parsed.items ?? [],
      outreach: parsed.outreach ?? [],
    }
  } catch {
    return empty
  }
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return
  cached = parse(localStorage.getItem(STORAGE_KEY))
  hydrated = true
}

function subscribe(listener: () => void) {
  hydrate()
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return cached
}

function getServerSnapshot() {
  return empty
}

function write(next: StatusState) {
  cached = next
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }
  listeners.forEach((listener) => listener())
}

type StatusContextValue = {
  ready: boolean
  doneItems: Set<string>
  doneOutreach: Set<string>
  toggleItem: (id: string) => void
  toggleOutreach: (id: string) => void
  reset: () => void
}

const StatusContext = createContext<StatusContextValue | null>(null)

export function StatusProvider({ children }: { children: React.ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleItem = useCallback((id: string) => {
    const current = getSnapshot()
    write({
      ...current,
      items: current.items.includes(id)
        ? current.items.filter((x) => x !== id)
        : [...current.items, id],
    })
  }, [])

  const toggleOutreach = useCallback((id: string) => {
    const current = getSnapshot()
    write({
      ...current,
      outreach: current.outreach.includes(id)
        ? current.outreach.filter((x) => x !== id)
        : [...current.outreach, id],
    })
  }, [])

  const reset = useCallback(() => write(empty), [])

  const value = useMemo<StatusContextValue>(
    () => ({
      ready: true,
      doneItems: new Set(state.items),
      doneOutreach: new Set(state.outreach),
      toggleItem,
      toggleOutreach,
      reset,
    }),
    [state, toggleItem, toggleOutreach, reset]
  )

  return <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
}

export function useStatus() {
  const ctx = useContext(StatusContext)
  if (!ctx) throw new Error("useStatus must be used inside StatusProvider")
  return ctx
}
