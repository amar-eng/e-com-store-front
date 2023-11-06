import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-com Store Front',
  description: 'Store Front for your e-com shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
