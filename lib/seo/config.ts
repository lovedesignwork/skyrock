import { Metadata } from 'next';

export const siteConfig = {
  name: 'Sky Rock Khao Lak',
  description: 'Experience the ultimate zipline adventure in Khao Lak, Thailand. Soar through the jungle canopy with thrilling ziplines, sky-bridges, and jungle platforms. Book your adventure today!',
  url: 'https://skyrockkhaolak.com',
  ogImage: '/images/og-image.jpg',
  locale: 'en_US',
  creator: 'Sky Rock',
  keywords: [
    'zipline khao lak',
    'sky rock',
    'khao lak adventure',
    'thailand zipline',
    'jungle zipline',
    'khao lak attractions',
    'things to do in khao lak',
    'roller zipline',
    'skywalk khao lak',
    'eco adventure khao lak',
    'family activities khao lak',
    'canopy tour khao lak',
    'zipline tour thailand',
    'phang nga outdoor activities',
  ],
  social: {
    facebook: 'https://www.facebook.com/skyrockkhaolak',
    instagram: 'https://www.instagram.com/skyrockkhaolak',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-Sky_Rock_Khao_Lak',
  },
  contact: {
    email: 'info@skyrockkhaolak.com',
    phone: '+66 XX XXX XXXX',
    address: 'Khao Lak, Phang Nga, Thailand',
  },
  geo: {
    latitude: 8.6500,
    longitude: 98.2500,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - #1 Zipline Adventure in Khao Lak`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
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
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - #1 Zipline Adventure in Khao Lak`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - #1 Zipline Adventure in Khao Lak`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@skyrockkhaolak',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
