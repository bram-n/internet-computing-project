import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { CartProvider } from "@/app/ui/main/context";

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
				<CartProvider>
          {children}
        </CartProvider>
			</body>
		</html>
	);
}
