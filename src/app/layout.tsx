import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import "./globals.css";

const plex = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"], display: "optional" });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400"], display: "optional", preload: false });
const title = "Rishi Kanajam · Full-stack & AI engineer in Sydney";
const description = "Full-stack & AI engineer in Sydney. I build AI systems that know what they don't know.";
export const metadata: Metadata = {
  metadataBase: new URL("https://rishikanajam.dev"),
  title, description, authors: [{ name: "Rishi Kanajam" }],
  openGraph: { title, description, type: "website", locale: "en_AU" },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${plex.variable} ${mono.variable}`} suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark')}}catch(e){}})()` }} /></head>
    <body>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="document">{children}<Footer /></div>
      <Analytics /><SpeedInsights />
    </body>
  </html>;
}
