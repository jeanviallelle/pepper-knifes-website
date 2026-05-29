import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pepper Knifes - Forged in Pico Island, Azores',
  description:
    'Damascus steel knives forged by hand on Pico Island, Azores. Every blade starts with a conversation.',
  openGraph: {
    title: 'Pepper Knifes',
    description: 'Forged in volcanic fire. Crafted to last.',
    type: 'website',
    locale: 'pt_PT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
