import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components/layout";

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

export const metadata: Metadata = {
  title: {
    default: "Rhuzzel Paramio | Full-Stack Software Engineer & QA Specialist",
    template: "%s | Rhuzzel Paramio",
  },
  description:
    "Full-Stack Software Engineer & QA Specialist. Building scalable, tested, and automated web systems with Next.js, React, and modern testing frameworks.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "QA Specialist",
    "Test Automation",
    "Next.js",
    "React",
    "Playwright",
    "Selenium",
    "Web Development",
    "CI/CD",
  ],
  authors: [{ name: "Rhuzzel Paramio" }],
  creator: "Rhuzzel Paramio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhuzzel.dev",
    siteName: "Rhuzzel Paramio Portfolio",
    title: "Rhuzzel Paramio | Full-Stack Software Engineer & QA Specialist",
    description:
      "Building scalable, tested, and automated web systems. View my projects and expertise in full-stack development and quality assurance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhuzzel Paramio | Full-Stack Software Engineer & QA Specialist",
    description:
      "Building scalable, tested, and automated web systems. View my projects and expertise in full-stack development and quality assurance.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navigation />

        <main id="main-content" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
