import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, User, Search } from "lucide-react";
import Image from "next/image";
// Removed Menu here
import MenuSheet from "@/app/ui/main/menu-sheet";
import CartSheet from "@/app/ui/main/cart-sheet";
// import { Separator } from "@/components/ui/separator";

const HeaderNav = () => {
	return (
		<nav className="relative flex items-center justify-between p-4 lg:px-6 border-b border-neutral-50">
			<div className="block flex-none md:hidden">
				<MenuSheet />
			</div>
			<div className="flex w-full items-center">
				<div className="flex w-full md:w-1/3 justify-start">
					<Link
						href="/"
						target="_self"
						className="mr-2 w-full flex justify-center items-center md:w-auto md:mr-2 lg:mr-6"
					>

							<Image
							src="/logo.svg" 
							alt="3AM Movies"
							width={60}
							height={60}
							className = "borderounded-xl"
							/>
						
					</Link>
					<ul className="hidden md:flex flex-row gap-6 items-center justify-center">
						{/* put links for search in here */}
						
						<li>
							<Link href="/search" type="_self" className="hover:border-b hover:border-white">
								All
							</Link>
						</li>
						<li>
							<Link href="/search/action" type="_self"  className="hover:border-b hover:border-white">
								Action
							</Link>
						</li>
						<li>
							<Link href="/search/romance" type="_self"  className="hover:border-b hover:border-white">
								Romance
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
						<Link href="/account" className="hidden border border-neutral-50 rounded-xl p-2 md:flex">
							<User 
							width = {40}
							height = {40}
							/>
						</Link>
						<CartSheet />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default HeaderNav;
