import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishi Kanajam — Founder · AI & Data Engineer",
  description:
    "Founder of Nirvya Labs, building open-source healthcare infrastructure for India. AI & Data Engineer based in Sydney. Open to AI Engineering, Software Engineering, and Data Engineering roles.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Data Engineer",
    "Healthcare AI",
    "FHIR R4",
    "ABDM",
    "Open Source",
    "Sydney",
    "Australia",
    "LLM",
    "DeceptionArena",
    "Krama Core",
  ],
  authors: [{ name: "Rishi Kanajam" }],
  openGraph: {
    title: "Rishi Kanajam — Founder · AI & Data Engineer",
    description:
      "Founder of Nirvya Labs, building open-source healthcare infrastructure for India. Based in Sydney.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Rishi Kanajam — Founder · AI & Data Engineer",
    description:
      "Founder of Nirvya Labs, building open-source healthcare infrastructure for India. Based in Sydney.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Default to dark — visitors without a stored preference get dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
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
