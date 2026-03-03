import type { Metadata } from 'next';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'LinkIQ - Smart Link Management',
  description: 'Shorten, track, and optimize your links with LinkIQ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background-light dark:bg-background-dark antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
