import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

// Define the type for the metadata object
interface Metadata {
  title: string;
  description: string;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADV/MNSTRY® | A Fake Digital Branding Agency',
  description: 'A fake digital branding agency that provides fake services to fake customers. =)',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

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
