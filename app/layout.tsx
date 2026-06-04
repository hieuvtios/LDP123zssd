import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EZ Manga — Read Manga Your Way",
  description:
    "The browser built for manga fans — smart layout, zero clutter, total privacy. Available on Android.",
  openGraph: {
    title: "EZ Manga — Read Manga Your Way",
    description:
      "Smart Reader Mode, Ad-Free reading, Dark Mode, Cross-Device Sync.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink-black text-manga-white font-sans">{children}</body>
    </html>
  );
}
