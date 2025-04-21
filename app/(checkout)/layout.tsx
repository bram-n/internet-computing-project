import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts"
import "@/app/ui/globals.css";

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
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
