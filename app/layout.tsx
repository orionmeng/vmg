import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

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
    default: "VMG – Valorant Meta Guide",
    template: "%s | VMG",
  },
  description:
    "Agent tier lists, meta team compositions, and patch notes for Valorant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="flex h-16 items-center justify-center border-t border-val-teal-light bg-val-teal px-4 text-sm text-val-gray">
          Valorant Meta Guide is not affiliated with Riot Games.
        </footer>
      </body>
    </html>
  );
}
