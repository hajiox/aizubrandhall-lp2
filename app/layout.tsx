import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aizubrandhall LP2",
  description: "Welcome to Aizubrandhall LP2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  )
}

