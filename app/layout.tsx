import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gautam Popli - Senior Application Developer',
  description: 'Frontend developer with 5+ years of experience in Next.js and React.js. Expertise in modern JavaScript frameworks and creating dynamic Single Page Applications.',
  keywords: 'frontend developer, react, next.js, web development, javascript, typescript',
  openGraph: {
    title: 'Gautam Popli - Senior Application Developer',
    description: 'Frontend developer with 5+ years of experience in Next.js and React.js',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[40%] right-0 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-100/40 to-cyan-100/40 blur-3xl" />
            <div className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-100/40 to-rose-100/40 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent" />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
