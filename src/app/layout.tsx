import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeScreen",
  description: "Write code and copy screenshot to clipboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
