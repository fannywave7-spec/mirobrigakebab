import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clínica Dental Virginia García Sánchez | Dentista en Salamanca',
  description:
    'Clínica dental en Salamanca con 4,9 estrellas en Google. Odontología general, ortodoncia invisible, estética dental, implantes y periodoncia. Pide cita: 923 10 02 67.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Clínica Dental Virginia García Sánchez',
    description: 'Tu sonrisa en las mejores manos en Salamanca.',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/gabinete-azul.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
  themeColor: '#1b2a57',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
