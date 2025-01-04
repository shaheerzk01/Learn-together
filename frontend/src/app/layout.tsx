"use client"
import "@/css/style.css"
import React, { useEffect, useState } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>Learn together</title>
      <meta name="description" content="LEARN tOGETHER STUDENT HUB PORTAL" />
      <body suppressHydrationWarning={true}>{children}
      </body>
    </html>
  )
}
