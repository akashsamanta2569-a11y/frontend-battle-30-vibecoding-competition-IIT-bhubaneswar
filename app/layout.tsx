import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Northstar AI | Premium AI Workflow Automation',
  description: 'Northstar AI helps teams orchestrate intelligent workflows with clarity, speed, and confidence.',
  keywords: ['AI SaaS', 'workflow automation', 'AI landing page', 'premium product'],
  openGraph: {
    title: 'Northstar AI | Premium AI Workflow Automation',
    description: 'Northstar AI helps teams orchestrate intelligent workflows with clarity, speed, and confidence.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northstar AI | Premium AI Workflow Automation',
    description: 'Northstar AI helps teams orchestrate intelligent workflows with clarity, speed, and confidence.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
