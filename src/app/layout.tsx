import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SkipLink } from '@/components/layout/SkipLink';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'oklch(99% 0.002 264)' },
    { media: '(prefers-color-scheme: dark)', color: 'oklch(14% 0.010 264)' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Career OS — The Operating System for Your Working Life',
    template: '%s | Career OS',
  },
  description:
    'Career OS is the operating system for your working life. Free for individuals. From education through advancement, pivots, and leadership — one persistent platform with verified evidence, responsible AI, and absolute privacy.',
  metadataBase: new URL('https://career-os.com'),
  keywords: [
    'career development platform',
    'career operating system',
    'AI career mentor',
    'career passport',
    'skills verification',
    'apprenticeship pathways',
    'career graph',
    'employer agent',
    'career twin',
  ],
  authors: [{ name: 'Career OS' }],
  creator: 'Career OS Inc.',
  publisher: 'Career OS Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://career-os.com',
    siteName: 'Career OS',
    title: 'Career OS — The Operating System for Your Working Life',
    description:
      'Your career needs more than advice. It needs an operating system. Free for individuals. Designed for the entire working life.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@career_os',
    creator: '@career_os',
    title: 'Career OS — The Operating System for Your Working Life',
    description:
      'Your career needs more than advice. It needs an operating system.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Career OS',
              url: 'https://career-os.com',
              description: 'Career OS is the operating system for your working life.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free for individuals',
              },
              provider: {
                '@type': 'Organization',
                name: 'Career OS Inc.',
                url: 'https://career-os.com',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
