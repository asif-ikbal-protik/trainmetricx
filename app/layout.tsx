import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trainmatricx.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "xzYD0DXi8TzhIvK2wWd0cS5fYXQxmAhfWtx-eLIhNys",
  },
  title: {
    default: "Train Matricx | Sports AI Data Annotation & Computer Vision Training Data",
    template: "%s | Train Matricx",
  },
  description:
    "High-precision computer vision training data for sports AI. Expert annotation services for football, basketball, cricket, and 20+ sports. Trusted by leading AI teams worldwide.",
  keywords: [
    "sports data annotation",
    "computer vision training data",
    "AI data labeling",
    "sports AI",
    "video annotation",
    "football annotation",
    "basketball tracking data",
    "cricket data annotation",
    "machine learning training data",
    "object detection sports",
  ],
  authors: [{ name: "Train Matricx" }],
  creator: "Train Matricx",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trainmatricx.com",
    siteName: "Train Matricx",
    title: "Train Matricx | Sports AI Data Annotation",
    description:
      "High-precision computer vision training data for sports AI. Expert annotation for 20+ sports.",
    images: [
      {
        url: "/trainmatricx-logo.png",
        width: 512,
        height: 512,
        alt: "Train Matricx Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Train Matricx | Sports AI Data Annotation",
    description:
      "High-precision computer vision training data for sports AI. Expert annotation for 20+ sports.",
    images: ["/trainmatricx-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="root-layout"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <JsonLd />
        {/* X Organizations Black Background with Top Glow */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
