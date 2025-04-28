
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bottom-0 border-t border-neutral-50">
			<div className="mx-auto flex flex-col w-full max-w-7xl gap-6 py-12 px-4 md:gap-12 md:px-4 md:flex-row">
				<div className="flex flex-row">
					<Link href="/" className="flex items-center gap-2 md:pt-1 uppercase">
						<Image src="/logo.svg" alt="3AM Movies" width={40} height={40} />
						3AM Movies
					</Link>
				</div>
				<nav>
					<ul>
						<Link href="/" className="hover:border-b hover:border-white">Home</Link>
					</ul>
					<ul>
						<Link href="/about" className="hover:border-b hover:border-white">About</Link>
					</ul>
					<ul>
						<Link href="/account" className="hover:border-b hover:border-white">Your Account</Link>
					</ul>
					<ul>
						<Link href="/terms-and-conditions" className="hover:border-b hover:border-white">Terms and Conditions</Link>
					</ul>
					<ul>
						<Link href="/returns" className="hover:border-b hover:border-white">Returns</Link>
					</ul>
					<ul>
						<Link href="/privacy-policy" className="hover:border-b hover:border-white">Privacy Policy</Link>
					</ul>
					<ul>
						<Link href="/faq" className="hover:border-b hover:border-white">FAQ</Link>
					</ul>
				</nav>
			</div>
			<div className="border-t border-neutral-50 py-6">
				<div className="w-full flex flex-col items-center justify-between mx-auto max-w-7xl gap-1 px-4 md:flex-row md:gap-0">
					<p>&#169; 2025 3AMs. All Rights Reserved.</p>
					<hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-50 md:inline-block"></hr>
					<p>
						{/* change to repo link */}
						<Link href="https://github.com/bram-n/internet-computing-project" target="_blank">
							View the Source
						</Link>
					</p>
					<p className="md:ml-auto">
						<Link href="https://vercel.com" target="_blank">Created with Vercel</Link>
					</p>
					{/* TODO: add logo to vercel link */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
