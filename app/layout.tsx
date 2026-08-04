import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit Kharat | AI/ML & Full-Stack Engineer',
  description:
    'Portfolio of Rohit Kharat - Final-Year E&TC Engineer specializing in AI/ML lifecycle management, production REST APIs, microservices, cloud deployments, and data engineering.',
  keywords: [
    'Rohit Kharat',
    'AI Engineer',
    'Full Stack Developer',
    'Next.js Portfolio',
    'Three.js',
    'FastAPI',
    'NestJS',
    'Tata Motors Intern',
    'Geospatial AI',
  ],
  authors: [{ name: 'Rohit Kharat' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-background text-slate-100 antialiased selection:bg-cyber-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
