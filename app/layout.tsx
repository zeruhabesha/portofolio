import type React from "react"
import { Inter } from "next/font/google"
// import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Zerihun Kibret | Full-Stack Developer",
  description: "Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="full-stack developer, web developer, MERN stack, UI/UX design, React, Node.js, MongoDB"
        />
        <meta name="author" content="Zerihun Kibret" />
        <meta property="og:title" content="Zerihun Kibret | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

