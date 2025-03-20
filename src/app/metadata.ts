import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://alltheway.com'),
  title: {
    default: 'ALL the way',
    template: '%s | ALL the way',
  },
  description: 'Fly stress-free, We handle your bags',
  keywords: ['fly', 'stress-free', 'bags'],
  authors: [{ name: 'ALL the way' }],
  creator: 'ALL the way',
  publisher: 'ALL the way',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alltheway.com',
    siteName: 'ALL the way',
    title: 'ALL the way',
    description: 'Fly stress-free, We handle your bags',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      },
    ],
  },
  alternates: {
    canonical: 'https://alltheway.com',
  },
}; 