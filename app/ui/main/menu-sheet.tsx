import {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	// SheetFooter,
	SheetTitle,
	// SheetDescription,
} from "@/components/ui/sheet";

// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const MenuSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="p-2 border border-neutral-50 rounded-xl cursor-pointer">
					<Menu />
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="w-[100vw] text-white">
				<SheetHeader>
					<SheetTitle className="text-white">3AM Movies</SheetTitle>
				</SheetHeader>
				<div className="px-4">
					<div className="mb-4 w-full">
						<form action="/search" className="relative md:w-80 xl:w-full">
							<Input placeholder="Search for items..." />
							<div className="absolute top-0 right-0 mr-3 flex h-full items-center w-4">
								<Search />
							</div>
						</form>
					</div>
					<ul className="mt-4 flex w-full flex-col">
						{/* put links for search in here */}
						<li className="py-2">
							<Link
								href="/account"
								type="_self"
								className="text-xl transition-colors hover:text-neutral-500"
							>
								Your Account
							</Link>
						</li>
						<div className="my-2">
							<Separator />
						</div>
						<li className="py-2">
							<SheetClose asChild>
								<Link
									href="/search"
									type="_self"
									className="text-xl transition-colors hover:text-neutral-500"
								>
									All
								</Link>
							</SheetClose>
						</li>
						<li className="py-2">
							<SheetClose asChild>
								<Link
									href="/search/test"
									type="_self"
									className="py-2 text-xl transition-colors hover:text-neutral-500"
								>
									Action
								</Link>
							</SheetClose>
						</li>
						<li className="py-2">
							<SheetClose asChild>
								<Link
									href="/search/romance"
									type="_self"
									className="py-2 text-xl transition-colors hover:text-neutral-500"
								>
									Romance
								</Link>
							</SheetClose>
						</li>
						
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MenuSheet;
