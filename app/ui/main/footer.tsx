
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Footer = () => {
	return (
		<footer className="bottom-0 border-t border-neutral-500 ">
			<div className="mx-auto flex flex-col w-full max-w-7xl gap-6 py-12 px-4 md:gap-12 md:px-4 md:flex-row">
				<div className="">
					<Link href="/" className="flex items-center gap-2 md:pt-1 uppercase">
						MacShop
					</Link>
				</div>
				<nav>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">Home</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">About</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">Your Account</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">Terms and Conditions</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">Shipping and Returns Policy</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">Privacy Policy</Link>
					</ul>
					<ul>
						<Link href="/" className="hover:border-b hover:border-black">FAQ</Link>
					</ul>
				</nav>

				<div className="md:ml-auto">
					<Link href="/" className={buttonVariants({ variant: "outline" })}>
						Contact Us
					</Link>
				</div>
			</div>
			<div className="border-t border-neutral-500 py-6">
				<div className="w-full flex flex-col items-center justify-between mx-auto max-w-7xl gap-1 px-4 md:flex-row md:gap-0">
					<p>&#169; 2025 3AMs. All Rights Reserved.</p>
					<hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-500 md:inline-block"></hr>
					<p>
						{/* change to repo link */}
						<Link href="https://github.com" target="_blank">
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
