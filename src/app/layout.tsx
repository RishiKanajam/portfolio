import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishi Kanajam — Software & AI Engineer",
  description:
    "Software & AI Engineer building healthcare AI and securing ML systems — based in Sydney. Open to Software Engineer, AI/ML Engineer, and Data Engineer roles.",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "ML Engineer",
    "Data Engineer",
    "Healthcare AI",
    "AI Security",
    "Sydney",
    "Australia",
    "LLM",
    "RAG",
    "Computer Vision",
  ],
  authors: [{ name: "Rishi Kanajam" }],
  openGraph: {
    title: "Rishi Kanajam — Software & AI Engineer",
    description:
      "Software & AI Engineer building healthcare AI and securing ML systems — based in Sydney.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Rishi Kanajam — Software & AI Engineer",
    description:
      "Software & AI Engineer building healthcare AI and securing ML systems — based in Sydney.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Inline script to set dark class before paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-bg text-text-1 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
