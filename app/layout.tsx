import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Associação de Surf de Jaconé",
  description:
    "Associação de Surf de Jaconé",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-W0KQK0ZR0Q" />
        <main>{children}</main>
      </body>
    </html>
  );
}