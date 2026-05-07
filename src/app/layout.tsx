import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-loaded",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-loaded",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edxr.io"),
  title: {
    default: "EDXR — Educational experiences that move people",
    template: "%s · EDXR",
  },
  description:
    "EDXR is a faculty-and-student team designing VR/AR experiences, video, AI integrations, and maker-driven curriculum. We're a 501(c)(3) nonprofit.",
  openGraph: {
    title: "EDXR — Educational experiences that move people",
    description:
      "VR/AR, video production, AI integration, and making — all wrapped around great teaching and learning.",
    url: "https://edxr.io",
    siteName: "EDXR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDXR",
    description: "Educational experiences that move people.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
