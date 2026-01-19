// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

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
