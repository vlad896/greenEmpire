import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export const viewport: Viewport = {
  themeColor: '2d2d32',
}

export const metadata: Metadata = {
  metadataBase: new URL('http://antresol.org/'),
  title: {
    default: 'Antresol.bel',
    template: '%s | Antresol.bel',
  },
  description: 'Лучшие антресоли от поставщиков в Беларуси',
  verification: {
    google: 'google-site-verification=????????очважно',
  },
  manifest: new URL('http://localhost:3000/manifest.json'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className}  text-lg`}>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <main className="app">{children}</main>
      </body>
    </html>
  )
}
