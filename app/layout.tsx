import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://globaldatacapture.com"),
  applicationName: "Global Data Capture, LLC",
  title: {
    default: "Global Data Capture, LLC",
    template: "%s — Global Data Capture, LLC",
  },
  description:
    "Systems engineering firm specializing in identity-driven data workflows, secure digital asset packaging, and enterprise-grade software integrations.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://globaldatacapture.com" },
  openGraph: {
    type: "website",
    url: "https://globaldatacapture.com",
    siteName: "Global Data Capture, LLC",
    title: "Global Data Capture, LLC",
    description: "Identity-driven tools for securing data, assets, and workflows.",
    images: [
      {
        url: "/gdc/gdc-gold-linked-hero.png",
        width: 1200,
        height: 630,
        alt: "Global Data Capture, LLC",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
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
