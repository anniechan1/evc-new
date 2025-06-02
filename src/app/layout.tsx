import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ecopia - African Agriculture & Sustainability Platform",
  description:
    "Connecting African farmers, producers, and stakeholders through sustainable agriculture technology and data-driven solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
