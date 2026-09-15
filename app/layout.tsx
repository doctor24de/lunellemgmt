import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const siteUrl = 'https://lunellemanagement.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'OnlyFans & Fansly Management Agency | Lunelle Management', template: '%s | Lunelle Management' },
  description: 'Premium OnlyFans and Fansly management agency for ambitious creators. Lunelle handles profile management, content strategy, marketing, audience growth and optimization.',
  applicationName: 'Lunelle Management',
  keywords: ['creator management agency', 'OnlyFans management agency', 'Fansly management agency', 'creator marketing', 'content creator management'],
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.png', type: 'image/png', sizes: '64x64' }], apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }] },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'OnlyFans & Fansly Management Agency | Lunelle Management',
    description: 'Private, full-service creator management, marketing and growth for ambitious OnlyFans and Fansly creators.',
    type: 'website', siteName: 'Lunelle Management', locale: 'en_US', url: siteUrl,
    images: [{ url: '/lunelle-creator.jpg', width: 1000, height: 1000, alt: 'Lunelle Management creator agency' }],
  },
  twitter: { card: 'summary_large_image', title: 'OnlyFans & Fansly Management Agency | Lunelle', description: 'Private creator management, marketing and growth for ambitious OnlyFans and Fansly creators.', images: ['/lunelle-creator.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Lunelle Management', url: siteUrl, logo: `${siteUrl}/lunelle-mark-small.png`, slogan: 'Elevate. Empower. Earn.', description: 'Independent OnlyFans and Fansly creator management and marketing agency.' },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Lunelle Management', publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en' },
    { '@type': 'Service', name: 'OnlyFans and Fansly Creator Management', provider: { '@id': `${siteUrl}/#organization` }, serviceType: 'OnlyFans management, Fansly management, creator marketing, profile operations and content strategy', areaServed: 'Worldwide', audience: { '@type': 'Audience', audienceType: 'OnlyFans and Fansly content creators' }, url: siteUrl },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  return <html lang="en"><body className={`${geist.variable} antialiased`}>{children}{analyticsUrl && websiteId && <script defer src={analyticsUrl} data-website-id={websiteId} />}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
