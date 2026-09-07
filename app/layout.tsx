import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = { metadataBase: new URL('https://lunellemanagement.com'), title: 'Lunelle Management | Elevate Your Creator Business', description: 'Boutique creator management, marketing and growth for ambitious OnlyFans and Fansly creators. You create. We build the business.', openGraph: { title: 'Lunelle Management', description: 'You create. We build the business.', type: 'website', url: 'https://lunellemanagement.com', images: ['/lunelle-creator.jpg'] }, twitter: { card: 'summary_large_image', title: 'Lunelle Management', description: 'You create. We build the business.', images: ['/lunelle-creator.jpg'] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} antialiased`}>{children}</body></html>; }
