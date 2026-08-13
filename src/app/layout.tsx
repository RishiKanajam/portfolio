import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/*
 * Three faces, which is the ceiling: one display, one body, one outlier.
 * Fraunces sets the editorial register, JetBrains Mono the technical one,
 * IBM Plex Sans carries the prose between them.
 */

// Body — engineering sans. Replaced Inter, which is every LLM's default body.
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Outlier — labels, metadata, tabular figures, the wordmark.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Display — headings only.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Full-stack and AI engineer in Sydney. I build AI systems that know what they don't know: retrieval pipelines, LLM benchmarks, and health-data infrastructure, each shipped with the harness that tells you when it's wrong.";

export const metadata: Metadata = {
  title: "Rishi Kanajam · Full-Stack & AI Engineer",
  description: DESCRIPTION,
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Full Stack Engineer",
    "RAG",
    "LLM evaluation",
    "FHIR R4",
    "ABDM",
    "Open Source",
    "Sydney",
    "Australia",
    "DeceptionArena",
    "Krama Core",
  ],
  authors: [{ name: "Rishi Kanajam" }],
  openGraph: {
    title: "Rishi Kanajam · Full-Stack & AI Engineer",
    description: DESCRIPTION,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Rishi Kanajam · Full-Stack & AI Engineer",
    description: DESCRIPTION,
  },
};

// viewport-fit=cover so the page can reach into the notch safe areas.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
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
      {/*
        suppressHydrationWarning: a browser extension stamps an attribute
        (__processed_<uuid>__) onto <body> before React hydrates, which reads as
        a server/client mismatch. Nothing in this app writes to <body> — the
        theme script and ThemeProvider both target documentElement. This only
        silences attribute diffs on <body> itself, one level deep; children
        still hydrate under normal checks.
      */}
      <body
        className="min-h-dvh flex flex-col bg-bg text-text-1 antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
