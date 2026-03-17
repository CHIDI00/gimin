import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GIMIN | The Global Standard in Precision Fitness",
    template: "%s | GIMIN",
  },
  description:
    "A sanctuary for the dedicated. We engineer raw potential into absolute performance through precision training, elite conditioning, and relentless drive.",
  keywords: [
    "precision fitness",
    "athletic performance",
    "strength and conditioning",
    "elite training",
    "GIMIN",
  ],
  openGraph: {
    title: "GIMIN | Precision Fitness",
    description:
      "Train at the global standard. We engineer raw potential into absolute performance.",
    // url: "https://gimin.com",
    siteName: "GIMIN",
    images: [
      {
        url: "/testbg2.png",
        width: 1200,
        height: 630,
        alt: "GIMIN Precision Fitness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIMIN | Precision Fitness",
    description:
      "Train at the global standard. We engineer raw potential into absolute performance.",
    images: ["/testbg2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black`}
      >
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
