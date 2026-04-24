import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Species Dashboard | Built on IUCN Red List API v4',
  description: 'Visual overview of all 172,620 IUCN Red List species by threat category — Awareness Engine'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='min-h-full'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  transition-all duration-500 ease-in-out`}>{children}</body>
    </html>
  );
}
