import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Le Hérisson - Exposé',
  description: 'Un exposé complet sur le hérisson à travers l\'histoire.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#f5f5f0] text-stone-900 overflow-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
