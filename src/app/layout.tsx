import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { AppShell } from "@/components/app-shell"
import { siteUrl } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeuroIsh Studio — Ishsirjan Kaur Chandok",
    template: "%s · NeuroIsh Studio",
  },
  description:
    "Public content studio for BioIsh, Chardi Kala, and NeuroIsh: September plan, spoken scripts, and outreach.",
  authors: [{ name: "Ishsirjan Kaur Chandok", url: "https://ishsirjan.github.io" }],
  openGraph: {
    title: "NeuroIsh Studio",
    description:
      "Two podcasts, one neuroscience grid, a CNRS-sized week. Scripts and outreach for September 2026.",
    url: siteUrl,
    siteName: "NeuroIsh Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "NeuroIsh Studio",
    description: "BioIsh · Chardi Kala · NeuroIsh — the September studio.",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
