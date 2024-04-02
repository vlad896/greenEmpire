import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

export const viewport: Viewport = {
  themeColor: '2d2d32',
}
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wm-empire.by/'),
  title: {
    default: 'WebMarketing Empire',
    template: '%s | WebMarketing Empire',
  },
  description:
    'Мы предлагаем комплексные решения для бизнеса всех размеров, помогая нашим клиентам достигать новых высот.',
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
      <body className={`${spaceGrotesk.className} text-lg`}>
        <Suspense fallback={<p>Loading....</p>}>
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          <main className="app">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
