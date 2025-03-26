import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts"
import "@/app/ui/globals.css";
import HeaderNav from "./ui/main/header-nav";
import Head from "next/head";
import Footer from "./ui/main/footer";

export const metadata: Metadata = {
  title: "MacShop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* header here */}
        <HeaderNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
