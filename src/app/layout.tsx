import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Ed Corner | UGC Creator for AI, Tech & Travel Brands",
  description:
    "UGC creator helping AI, tech, travel and language-learning brands turn product value into native short-form content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`document.documentElement.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';`}
        </Script>
        {children}
      </body>
    </html>
  );
}
