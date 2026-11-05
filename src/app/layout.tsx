import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ed Corner | AI & Tech UGC Creator',
  description: 'AI & Tech UGC content that slaps. Short-form demos, explainers, and creator-led videos for AI, app, tech, and travel brands.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body>
        {children}
      </body>
    </html>
  )
}
