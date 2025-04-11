import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, User, ShoppingCart,  Search } from "lucide-react";
// Removed Menu here
import MenuSheet from "./menu-sheet";
// import { Separator } from "@/components/ui/separator";

const HeaderNav = () => {
	return (
		<nav className="relative flex items-center justify-between p-4 lg:px-6 bg-white">
			<div className="block flex-none md:hidden">
				<MenuSheet />
			</div>
			<div className="flex w-full items-center">
				<div className="flex w-full md:w-1/3 justify-start">
					<Link
						href="/"
						target="_self"
						className="mr-2 w-full flex justify-center items-center md:w-auto md:mr-6"
					>
						<div className="flex flex-none items-center justify-center border border-neutral-500 rounded-xl p-2">
							<House />
						</div>
						<div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
							3AM Movies
						</div>
					</Link>
					<ul className="hidden md:flex flex-row gap-6 items-center justify-center">
						{/* put links for search in here */}
						
						<li>
							<Link href="/" type="_self" className="hover:border-b hover:border-black">
								All
							</Link>
						</li>
						<li>
							<Link href="/" type="_self"  className="hover:border-b hover:border-black">
								Action
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex justify-center md:w-1/3 ">
					<form action="/search" className="relative md:w-80 xl:w-full">
						<Input placeholder="Search for items..." />
						<div className="absolute top-0 right-0 mr-3 flex h-full items-center w-4">
							<Search />
						</div>
					</form>
				</div>
				<div className="flex justify-end md:w-1/3">
					<div className="flex flex-row gap-4">
						<Link href="/" className="hidden border border-neutral-500 rounded-xl p-2 md:flex">
							<User />
						</Link>
						<Link href="/" className="border border-neutral-500 rounded-xl p-2">
							<ShoppingCart />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default HeaderNav;
