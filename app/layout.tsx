import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

interface Metadata {
  title: string;
  description: string;
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADV/MNSTRY® | A Fake Digital Branding Agency',
  description: 'A fake digital branding agency that provides fake services to non-existent customers. =)',
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='bg' />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
