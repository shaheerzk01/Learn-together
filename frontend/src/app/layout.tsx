"use client"
import "@/css/style.css"
import { SessionProvider } from "next-auth/react"
import React, { useEffect, useState } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>QUERY CRAFT</title>
      <meta name="description" content="Tamweel Internal Portal" />
      <body suppressHydrationWarning={true}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
