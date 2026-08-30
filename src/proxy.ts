import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { SESSION_COOKIE } from "@/lib/auth"

const open = ["/unlock", "/api/unlock"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (open.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.next()
  }

  const unlocked = request.cookies.get(SESSION_COOKIE)?.value === "1"
  if (unlocked) return NextResponse.next()

  const unlock = request.nextUrl.clone()
  unlock.pathname = "/unlock"
  unlock.search = ""
  return NextResponse.redirect(unlock)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
}
