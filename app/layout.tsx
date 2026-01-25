// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

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
  // FAVICONS / PWA ICONS
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
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
      <body>{children}</body>
    </html>
  );
}
