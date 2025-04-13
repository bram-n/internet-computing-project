import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts"
import "@/app/ui/globals.css";
import HeaderNav from "./ui/main/header-nav";
import Footer from "./ui/main/footer";

export const metadata: Metadata = {
  title: "3AM Movies",
  description: "Created by the 3AMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <HeaderNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
