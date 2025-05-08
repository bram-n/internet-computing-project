"use client";

import {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useSearchParams, useRouter } from "next/navigation";

import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { createClient } from "@/app/supabase/client";
import { useEffect, useState } from "react";
import { useCart } from "./context"
import Link from "next/link";

const MenuSheet = () => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`search?${params.toString()}`);
	}, 300);

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const { dispatch } = useCart();

	const checkSession = async () => {
		const supabase = createClient();
		const {
			data: { session },
		} = await supabase.auth.getSession();
		setIsLoggedIn(!!session);
		setIsLoading(false);
	};

	useEffect(() => {
		checkSession();
	}, []);

	const handleSignOut = async () => {

		const supabase = createClient(); 
		let userId = null;

		try {
			const { data: { user: currentUser }, error: getUserError } = await supabase.auth.getUser();
			if (getUserError) {
				console.error('Error fetching user before sign out:', getUserError);
			}
			if (currentUser) {
				userId = currentUser.id;
				console.log(`User ${userId} is logging out. Triggering recommender script.`);

				const response = await fetch('/api/trigger-recommender', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ userId: userId }), // pass the user's ID
				});

				if (!response.ok) {
					const errorData = await response.json();
					console.error('Failed to trigger recommender script:', errorData.details || errorData.error || 'Unknown API error');
				} else {
					const result = await response.json();
					console.log('Recommender script trigger result:', result.message || result);
				}
			} else {
				console.warn('No user found before sign out. Cannot trigger recommender script.');
			}
		} catch (apiCallError) {
			console.error('Error during pre-sign-out API call to trigger recommender:', apiCallError);
		}

		try {
			await supabase.auth.signOut();
			setIsLoggedIn(false);

			// reset cart
			dispatch({ type: "INITIALIZE_CART", cartList: [] })
			router.push("/"); 
			router.refresh(); 
			// console.log('User signed out and UI updated.');

		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="p-2 border border-neutral-50 rounded-xl cursor-pointer">
					<Menu />
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="w-[75%] text-white">
				<SheetHeader>
					<SheetTitle className="text-white">3AM Movies</SheetTitle>
				</SheetHeader>
				<div className="px-4">
					<div className="mb-4 w-full">
						<div className="relative md:w-80 xl:w-full">
							<Input
								placeholder="Search for items..."
								onChange={(e) => handleSearch(e.target.value)}
								defaultValue={searchParams.get("query")?.toString()}
							/>
							<div className="absolute top-0 right-0 mr-3 flex h-full items-center w-4">
								<Search />
							</div>
						</div>
					</div>
					<ul className="mt-4 flex w-full flex-col">
						{/* <li className="py-2">
							<SheetClose asChild>
								<Link
									href="/account"
									type="_self"
									className="text-xl transition-colors hover:text-neutral-500"
								>
									Your Account
								</Link>
							</SheetClose>
						</li>

						<li className="py-2">
							<SheetClose asChild>
								<Link
									href="/preferences"
									type="_self"
									className="text-xl transition-colors hover:text-neutral-500"
								>
									Your Preferences
								</Link>
							</SheetClose>
						</li> */}
						{isLoggedIn && <li className="py-2">
							<SheetClose asChild>
								<div onClick={() => handleSignOut()} className="cursor-pointer text-xl transition-colors hover:text-neutral-500">
									Sign Out
								</div>
							</SheetClose>
						</li>}
						{!isLoggedIn && <li className="py-2">
							<SheetClose asChild>
								<Link
									href="/login"
									type="_self"
									className="text-xl transition-colors hover:text-neutral-500"
								>
									Login
								</Link>
							</SheetClose>
						</li> }
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MenuSheet;
