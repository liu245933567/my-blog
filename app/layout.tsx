import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
