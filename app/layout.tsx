import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { campaign } from "@/lib/campaign"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: `${campaign.candidateName} for the Western Municipal Water District ${campaign.division}`,
  description: `Official campaign website for ${campaign.candidateName}, candidate for the ${campaign.officeFull}, ${campaign.division}.`,
  icons: {
    icon: '/montero-favicon-dark.png',
    apple: '/montero-favicon-dark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}