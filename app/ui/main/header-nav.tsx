import Link from "next/link";
import Image from "next/image";

import MenuSheet from "@/app/ui/main/menu-sheet";
import CartSheet from "@/app/ui/cart/cart-sheet";
import SearchBar from "@/app/ui/main/search-bar";
import { AccountDropdown } from "@/app/ui/main/dropdown-menu-demo"
import { Suspense } from 'react';

const HeaderNav = () => {
	return (
		<nav className="relative flex items-center justify-between p-4 lg:px-6 border-b border-neutral-50">
			<div className="block flex-none md:hidden">
				<Suspense fallback={<div>Loading...</div>}>
					<MenuSheet />
				</Suspense>
			</div>
			<div className="flex w-full items-center">
				<div className="flex w-full md:w-1/3 justify-start">
					<Link
						href="/"
						target="_self"
						className="mr-2 w-full flex justify-center items-center md:w-auto md:mr-6"
					>
						<Image src="/logo.svg" alt="3AM Movies" width={40} height={40} />
					</Link>
					<ul className="hidden md:flex flex-row gap-4 items-center justify-center">
						<li>
							<Link
								href="/search"
								type="_self"
								className="hover:border-b hover:border-white"
							>
								All
							</Link>
						</li>
						<li>
							<Link
								href="/search/category/action"
								type="_self"
								className="hover:border-b hover:border-white"
							>
								Action
							</Link>
						</li>
						<li>
							<Link
								href="/search/category/romance"
								type="_self"
								className="hover:border-b hover:border-white"
							>
								Romance
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex justify-center md:w-1/3 ">
					{/* <form action="/search" className="relative md:w-80 xl:w-full">
						<Input placeholder="Search for items..." />
						<div className="absolute top-0 right-0 mr-3 flex h-full items-center w-4">
							<Search />
						</div>
					</form> */}
					<Suspense fallback={<div className="relative md:w-80 xl:w-full h-10 bg-gray-800 rounded-md animate-pulse"><span className="sr-only">Loading search bar...</span></div>}>
						<SearchBar />
					</Suspense>
				</div>
				<div className="flex justify-end md:w-1/3">
					<div className="flex flex-row gap-4">
						<AccountDropdown />
						<CartSheet />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default HeaderNav;
