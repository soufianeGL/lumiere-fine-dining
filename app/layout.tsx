import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumière - Fine Dining',
  description: 'Experience exquisite cuisine in an elegant atmosphere',
  openGraph: {
    title: 'Lumière - Fine Dining',
    description: 'Experience exquisite cuisine in an elegant atmosphere',
    images: ['https://v3b.fal.media/files/b/0a995d98/w7Hp5BRDpxOWJC8Z0_wFF.jpg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière - Fine Dining',
    description: 'Experience exquisite cuisine in an elegant atmosphere',
    images: ['https://v3b.fal.media/files/b/0a995d98/w7Hp5BRDpxOWJC8Z0_wFF.jpg']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2a2a2a" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23d4af37'>✦</text></svg>" />
      </head>
      <body className="bg-cream text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
