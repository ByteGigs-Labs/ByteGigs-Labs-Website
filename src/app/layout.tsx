import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ByteGigs Labs — Your Technology Painkiller',
  description:
    'ByteGigs Labs builds custom software, mobile apps, POS systems, CCTV, and biometric solutions for businesses across East Africa. Real solutions. Real results.',
  keywords: [
    'software development Nairobi',
    'mobile app development Kenya',
    'POS system Kenya',
    'custom ERP Nairobi',
    'CCTV installation Nairobi',
    'biometric attendance Kenya',
    'ByteGigs Labs',
  ],
  openGraph: {
    title: 'ByteGigs Labs — Your Technology Painkiller',
    description: 'We eliminate technology headaches for businesses across East Africa.',
    url: 'https://bytegigslabs.com',
    siteName: 'ByteGigs Labs',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
