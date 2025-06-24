import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar/page';
import Footer from '@/components/layout/footer/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title:
    'Nyami Nyami Seafood | Fresh, Flavourful Ocean Delights in South Africa',
  description:
    'Nyami Nyami Seafood brings you the freshest catch from ocean to plate. Discover premium seafood platters, grilled fish, prawns, calamari, and more—made with passion and bold African flavour. Dine in, take away, or order online for the best seafood experience in South Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
