"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { SESSION_COOKIE, studioPassword } from "@/lib/auth"

export async function unlockStudio(formData: FormData) {
  const guess = String(formData.get("password") ?? "")
  if (guess !== studioPassword()) {
    redirect("/unlock?error=1")
  }

  const jar = await cookies()
  jar.set(SESSION_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    secure: process.env.NODE_ENV === "production",
  })
  redirect("/")
}

export async function lockStudio() {
  const jar = await cookies()
  jar.delete(SESSION_COOKIE)
  redirect("/unlock")
}
