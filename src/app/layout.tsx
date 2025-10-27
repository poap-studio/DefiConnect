import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ 
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'DeFiConnect - The Adventure',
  description: 'Explore the venue and join experiences to collect exclusive POAPs that prove your attendance at one of the most exciting crypto events of the year.',
  keywords: 'DeFi, DeFiConnect, POAP, cryptocurrency, blockchain, Buenos Aires, Konex',
  authors: [{ name: 'DeFiConnect Team' }],
  openGraph: {
    title: 'DeFiConnect - The Adventure',
    description: 'Explore the venue and join experiences to collect exclusive POAPs that prove your attendance at one of the most exciting crypto events of the year.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFiConnect - The Adventure',
    description: 'Explore the venue and join experiences to collect exclusive POAPs that prove your attendance at one of the most exciting crypto events of the year.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-monospac antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}