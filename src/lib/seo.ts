import type { Metadata } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://careeros.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Career OS — Your Career Operating System',
    template: '%s | Career OS',
  },
  description:
    'A career operating system that stays with you from education through employment, advancement, career changes, entrepreneurship and international mobility.',
  keywords: [
    'career development',
    'career planning',
    'career operating system',
    'AI career mentor',
    'career passport',
    'skills development',
    'professional development',
    'career progression',
  ],
  authors: [{ name: 'Career OS' }],
  creator: 'Career OS',
  publisher: 'Career OS',
  openGraph: {
    type: 'website',
    siteName: 'Career OS',
    title: 'Career OS — Your Career Operating System',
    description:
      'A career operating system that stays with you from education through employment, advancement and beyond.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Career OS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career OS',
    description: 'Your career needs more than advice. It needs an operating system.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: APP_URL,
  },
};

/** Generate Organization JSON-LD */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Career OS',
    url: APP_URL,
    description:
      'A career operating system that stays with a person from education through employment, advancement, career changes, entrepreneurship and international mobility.',
    sameAs: [],
  };
}

/** Generate SoftwareApplication JSON-LD */
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Career OS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'A personal Career Operating System that understands who you are, where you are going and what it will take to get there.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Individual access is free.',
    },
  };
}

/** Generate BreadcrumbList JSON-LD */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${APP_URL}${item.href}`,
    })),
  };
}

/** Generate WebPage JSON-LD */
export function webPageSchema(props: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.name,
    description: props.description,
    url: `${APP_URL}${props.url}`,
    isPartOf: { '@id': APP_URL },
  };
}
