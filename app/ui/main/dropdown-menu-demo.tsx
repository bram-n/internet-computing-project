"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { createClient } from "@/app/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./context";

export function AccountDropdown() {
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
		// console.log('handleSignOut function CALLED!');

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

	if (isLoading) {
		return (
			<div className="hidden border border-neutral-50 rounded-xl p-2 md:flex">
				<User />
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="hidden border border-neutral-50 rounded-xl p-2 md:flex cursor-pointer">
					<User />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 bg-black border border-neutral-50 text-white">
				{isLoggedIn ? (
					<>
						<DropdownMenuLabel className="text-white">
							My Account
						</DropdownMenuLabel>
						<DropdownMenuSeparator className="bg-neutral-50" />
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/account")}
						>
							Account
						</DropdownMenuItem>
						<DropdownMenuSeparator className="bg-neutral-50" />
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={handleSignOut}
						>
							Sign out
						</DropdownMenuItem>
					</>
				) : (
					<>
						{/* <DropdownMenuLabel className="text-white">Welcome</DropdownMenuLabel> */}
						{/* <DropdownMenuSeparator className="bg-neutral-50" /> */}
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/login")}
						>
							Log in
						</DropdownMenuItem>
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/signup")}
						>
							Sign up
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
