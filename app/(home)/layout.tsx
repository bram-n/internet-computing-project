import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import HeaderNav from "@/app/ui/main/header-nav";
import Footer from "@/app/ui/main/footer";
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
					<HeaderNav />
					{children}
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
