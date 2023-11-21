import type { Metadata } from 'next';
import { Baskervville } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import './globals.css';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Baskervville({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Signature Perfume',
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
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
