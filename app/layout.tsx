// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Data Capture, LLC — Identity-Driven Digital Asset Security',
  description:
    'Global Data Capture, LLC is a systems engineering firm specializing in identity-driven data workflows, secure digital asset packaging, and enterprise-grade software integrations.',
  openGraph: {
    title: 'Global Data Capture, LLC — Identity-Driven Digital Asset Security',
    description:
      'Identity-driven tools for securing data, assets, and workflows across commercial, industrial, and media environments.',
    url: 'https://globaldatacapture.com',
    siteName: 'Global Data Capture, LLC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Data Capture, LLC — Identity-Driven Digital Asset Security',
    description:
      'Identity-driven tools for securing data, assets, and workflows.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icon-180.png', sizes: '180x180', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="gdc-shell">
        <header className="gdc-header">
          <div className="gdc-nav-brand">
            <img src="/gdc/gdc-gold-logo.png" className="gdc-nav-logo" alt="Global Data Capture, LLC" />
          </div>
          <nav className="gdc-nav-links">
            <a href="/">HOME</a>
            <a href="/legal">LEGAL</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="gdc-footer">
          © 2026 Global Data Capture, LLC — New York, New Jersey — All Rights Reserved.
        </footer>
      </body>
    </html>
  )
}
