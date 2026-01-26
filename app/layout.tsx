// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  // Base URL so Next can build proper canonical / OG URLs
  metadataBase: new URL('https://globaldatacapture.com'),

  // Page titles
  title: {
    default: 'Global Data Capture, LLC | Identity-Driven Digital Asset Security',
    template: '%s | Global Data Capture, LLC',
  },

  // Global meta description
  description:
    'Global Data Capture, LLC is a systems engineering firm delivering identity-driven data workflows, secure digital asset packaging, and enterprise-grade software integrations.',

  // Open Graph (LinkedIn, Slack, etc.)
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Global Data Capture, LLC | Identity-Driven Digital Asset Security',
    description:
      'Identity-driven tools for securing data, assets, and workflows across commercial, industrial, and media environments.',
    siteName: 'Global Data Capture, LLC',
    images: [
      {
        url: '/gdc/gdc-logo-primary.png',
        width: 1200,
        height: 630,
        alt: 'Global Data Capture, LLC — Identity-driven digital asset security',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Global Data Capture, LLC | Identity-Driven Digital Asset Security',
    description:
      'Identity-driven tools for securing data, assets, and workflows across commercial, industrial, and media environments.',
    images: ['/gdc/gdc-logo-primary.png'],
  },

  // Canonical URL for SEO
  alternates: {
    canonical: '/',
  },

  // FAVICONS / PWA ICONS
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/site.webmanifest',
  themeColor: '#000000',
  other: {
    'msapplication-TileColor': '#000000',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="gdc-shell">
          <main>{children}</main>

          <footer className="gdc-footer">
            <p>
              © 2026 Global Data Capture, LLC — New York, New Jersey — All
              rights reserved.
            </p>
            <p className="gdc-footer-links">
              <a href="/legal">Legal &amp; Compliance</a>
              <span>•</span>
              <a href="mailto:support@globaldatacapture.com">
                support@globaldatacapture.com
              </a>
              <span>•</span>
              <span>(888) 501-4099</span>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
