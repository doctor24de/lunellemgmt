import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const siteUrl = 'https://lunellemanagement.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Lunelle Management | Creator Management Agency', template: '%s | Lunelle Management' },
  description: 'Boutique OnlyFans and Fansly creator management, marketing and growth. You create the content. Lunelle builds the strategy, systems and business.',
  applicationName: 'Lunelle Management',
  keywords: ['creator management agency', 'OnlyFans management agency', 'Fansly management agency', 'creator marketing', 'content creator management'],
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.png', type: 'image/png', sizes: '64x64' }], apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }] },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Lunelle Management | You Create. We Build the Business.',
    description: 'Boutique creator management, strategy and marketing for ambitious OnlyFans and Fansly creators.',
    type: 'website', siteName: 'Lunelle Management', locale: 'en_US', url: siteUrl,
    images: [{ url: '/lunelle-creator.jpg', width: 1000, height: 1000, alt: 'Lunelle Management creator agency' }],
  },
  twitter: { card: 'summary_large_image', title: 'Lunelle Management | You Create. We Build the Business.', description: 'Boutique creator management, strategy and marketing for ambitious creators.', images: ['/lunelle-creator.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Lunelle Management', url: siteUrl, logo: `${siteUrl}/lunelle-mark-small.png`, slogan: 'Elevate. Empower. Earn.' },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Lunelle Management', publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en' },
    { '@type': 'Service', name: 'Creator Management and Marketing', provider: { '@id': `${siteUrl}/#organization` }, serviceType: 'Content creator profile management, strategy and marketing', areaServed: 'Worldwide', url: siteUrl },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  return <html lang="en"><head>{analyticsUrl && websiteId && <script defer src={analyticsUrl} data-website-id={websiteId} />}</head><body className={`${geist.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
