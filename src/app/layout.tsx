import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/jetbrains-mono';
import '@/styles/globals.scss';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SkipLink } from '@/components/layout/SkipLink';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site';
import { themeInitScript } from '@/lib/theme';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${profile.name} | ${profile.role}`, template: `%s | ${profile.name}` },
  description: profile.description,
  keywords: [
    'React',
    'TypeScript',
    'Next.js',
    'Front-end engineer',
    'Component libraries',
    'Bangalore',
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${profile.name} | ${profile.role}`,
    description: profile.description,
    url: '/',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: `${profile.name} | ${profile.role}`,
    description: profile.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f5f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0c171b' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script sets data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
