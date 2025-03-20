import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import { defaultMetadata } from "./metadata";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={manrope.className + manrope.style}>{children}</body>
    </html>
  );
}