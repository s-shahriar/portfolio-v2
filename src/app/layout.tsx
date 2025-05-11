import ThemeProviderWrapper from "@/context/ThemeProviderWrapper";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Shahriar | Software Engineer",
  description:
    "Professional portfolio of Syed Shahriar, a software engineer specializing in full-stack development.",
  keywords: [
    "software engineer",
    "web developer",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Syed Shahriar" }],
  creator: "Syed Shahriar",
  publisher: "Syed Shahriar",
  robots: "index, follow",
  icons: {
    icon: "/ss-logo.svg",
    shortcut: "/ss-logo.svg",
    apple: "/ss-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
