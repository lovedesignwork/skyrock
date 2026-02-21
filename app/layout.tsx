import type { Metadata, Viewport } from 'next';
import { Inter, Fugaz_One } from 'next/font/google';
import './globals.css';
import { TrackingScriptsHead, TrackingScriptsBody } from '@/components/TrackingScripts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const fugazOne = Fugaz_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sky Rock | Extreme Adventure Park',
    template: '%s | Sky Rock',
  },
  description: 'Sky Rock - Experience extreme adventure activities in Thailand. Rock climbing, bungee jumping, and more adrenaline-pumping experiences await.',
  keywords: ['sky rock', 'adventure park', 'rock climbing', 'bungee jumping', 'extreme sports', 'thailand adventure'],
  authors: [{ name: 'Sky Rock Adventure Co., Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sky Rock',
    title: 'Sky Rock | Extreme Adventure Park',
    description: 'Experience extreme adventure activities in Thailand',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#DC2626',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fugazOne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <TrackingScriptsBody />
        {children}
        <TrackingScriptsHead />
      </body>
    </html>
  );
}
